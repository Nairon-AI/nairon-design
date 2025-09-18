import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const EXPECTED_HASH = '771118661a4e7ab01e68106a1ef3d852df3f4cf45c84fef29e1e9f7b140e2ce1';

async function sha256Hex(input: string) {
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  // Allow infra and unlock page
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/robots') ||
    pathname.startsWith('/sitemap') ||
    pathname.startsWith('/unlock')
  ) {
    return NextResponse.next();
  }

  // Auto-unlock via ?code=
  const qsCode = url.searchParams.get('code');
  if (qsCode) {
    const hash = await sha256Hex(qsCode);
    if (hash === EXPECTED_HASH) {
      const cleanUrl = new URL(url);
      cleanUrl.searchParams.delete('code');
      const res = NextResponse.redirect(cleanUrl);
      const isSecure = url.protocol === 'https:' && !url.hostname.includes('localhost');
      res.cookies.set('cc_access', EXPECTED_HASH, {
        httpOnly: false,
        secure: isSecure,
        sameSite: 'lax',
        path: '/',
      });
      return res;
    }
  }

  // Cookie check
  const cookie = request.cookies.get('cc_access')?.value;
  if (cookie === EXPECTED_HASH) {
    return NextResponse.next();
  }

  // Not unlocked: continue; client modal shows overlay
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};