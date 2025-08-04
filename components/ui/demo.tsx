import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      {/* Branded Header - Top Left */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-30">
        <div className="text-white">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Design</h2>
          <a 
            href="https://www.codeandcreed.tech" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative text-xs sm:text-sm text-gray-400 hover:text-gray-300 transition-colors duration-200 group"
          >
            A product by Code & Creed ↗
            <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white font-sans tracking-tight mb-4 sm:mb-6 leading-tight">
          Design Beautiful Experiences
        </h1>
        <div className="relative mx-auto inline-block max-w-full [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] py-2 sm:py-4 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-gray-400 block leading-tight">
              All the best UI Component Libraries in one place
            </span>
          </div>
          <div className="relative py-2 sm:py-4">
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-gray-400 block leading-tight">
              All the best UI Component Libraries in one place
            </span>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export { BackgroundBeamsWithCollisionDemo };