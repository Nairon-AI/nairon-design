"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function PrivatisedModal() {
  const [isInIframe, setIsInIframe] = useState(true);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // Check if the page is loaded in an iframe
    try {
      setIsInIframe(window.self !== window.top);
    } catch (e) {
      // If access is blocked due to cross-origin, assume it's in an iframe
      setIsInIframe(true);
    }

    // Check if the URL contains /unlock
    const checkUnlockPath = () => {
      const path = window.location.pathname;
      setIsUnlocked(path.includes('/unlock'));
    };

    checkUnlockPath();

    // Listen for URL changes
    const handlePopState = () => checkUnlockPath();
    window.addEventListener('popstate', handlePopState);

    // Also check on pushState/replaceState
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function(...args) {
      originalPushState.apply(history, args);
      checkUnlockPath();
    };

    history.replaceState = function(...args) {
      originalReplaceState.apply(history, args);
      checkUnlockPath();
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
              This application is no longer directly accessible. Please visit Code & Creed to learn more about our services and tools.
            </p>
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