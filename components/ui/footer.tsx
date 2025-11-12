"use client";

import SocialButton from "@/components/kokonutui/social-button";

export function Footer() {
  return (
    <footer className="w-full py-12 border-t border-neutral-800" style={{ backgroundColor: '#262626' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Social Button */}
          <SocialButton />
          
          {/* Simple Copyright */}
          <div className="text-center">
            <p className="text-sm text-neutral-400">
              © 2025 Design by{" "}
              <a 
                href="https://accelerator.codeandcreed.tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-white transition-colors duration-200"
              >
                Code & Creed
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}