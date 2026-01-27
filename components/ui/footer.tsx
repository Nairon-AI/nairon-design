"use client";

import Image from "next/image";
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
            <p className="text-sm text-neutral-400 flex items-center justify-center gap-1.5">
              © 2025 Design by{" "}
              <a
                href="https://www.naironai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-neutral-300 hover:text-white transition-colors duration-200"
              >
                <Image
                  src="/nairon-white.png"
                  alt="NaironAI"
                  width={70}
                  height={18}
                  className="h-4 w-auto object-contain"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}