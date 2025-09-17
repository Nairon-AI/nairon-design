"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

function getCookie(name: string) {
  return document.cookie.split("; ").find(c => c.startsWith(name + "="))?.split("=")[1];
}

export function PrivatisedModal() {
  const [isInIframe, setIsInIframe] = useState(true);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    // Check if the page is loaded in an iframe
    try {
      setIsInIframe(window.self !== window.top);
    } catch {
      // If access is blocked due to cross-origin, assume it's in an iframe
      setIsInIframe(true);
    }

    // Consider unlocked if cc_access cookie is present (set by middleware on valid code)
    const checkUnlocked = () => {
      const hasCookie = typeof document !== 'undefined' && !!getCookie('cc_access');
      setIsUnlocked(hasCookie);
    };

    checkUnlocked();

    // Listen for URL changes
    const handlePopState = () => checkUnlocked();
    window.addEventListener('popstate', handlePopState);

    // Also check on pushState/replaceState
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function(
      ...args: Parameters<History['pushState']>
    ): void {
      originalPushState.apply(history, args);
      checkUnlocked();
    };

    history.replaceState = function(
      ...args: Parameters<History['replaceState']>
    ): void {
      originalReplaceState.apply(history, args);
      checkUnlocked();
    };

    return () => {
      window.removeEventListener('popstate', handlePopState);
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
    };
  }, []);

  // Show modal only when NOT in iframe AND NOT unlocked
  if (isInIframe || isUnlocked) {
    return null;
  }

  const submit = () => {
    if (otp.length !== 6) return;
    const url = new URL(window.location.href);
    url.searchParams.set('code', otp);
    window.location.href = url.toString();
  };

  return (
    <>
      {/* Blur overlay */}
      <div className="fixed inset-0 backdrop-blur-md bg-background/80 z-40" />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-background border rounded-lg shadow-xl max-w-md w-full p-6 space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">This Tool Has Been Privatised</h2>
            <p className="text-muted-foreground">
              This application is no longer directly accessible. If youre an Accelerator member or purchaser of one of our paid Starter Kits, contact us on Discord for the access code.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-center">
              <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <Button onClick={submit} className="w-full bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 px-4 py-2 text-sm rounded-md">Unlock</Button>
          </div>
          
          <Button
            asChild
            variant="outline"
            className="w-full bg-background hover:bg-accent"
            size="lg"
          >
            <a
              href="https://www.codeandcreed.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2"
            >
              Visit Code & Creed
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}