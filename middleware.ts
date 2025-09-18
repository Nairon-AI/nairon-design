import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

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

  // Strip ?code purely for cleanliness; unlocking handled client-side via localStorage
  const qsCode = url.searchParams.get('code');
  if (qsCode) {
    const cleanUrl = new URL(url);
    cleanUrl.searchParams.delete('code');
    return NextResponse.redirect(cleanUrl);
  }

  // Not unlocked: continue; client modal shows overlay
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};