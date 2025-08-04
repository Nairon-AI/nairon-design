"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { SparklesText } from "@/components/ui/sparkles-text";

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
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white font-sans tracking-tight mb-4 sm:mb-6 leading-tight">
          Ship Beautiful Experiences Faster Than Everyone Else
        </h1>
        <div className="relative mx-auto inline-block max-w-full mb-6">
          <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-gray-400 flex flex-wrap items-center justify-center gap-2 leading-tight">
            <span>Everything You Need to Craft</span>
            <SparklesText text="pixel perfect" className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-gray-400 inline whitespace-nowrap" sparklesCount={10} colors={{ first: "#9E7AFF", second: "#FE8BBB" }} />
            <span>UI</span>
          </h2>
        </div>

        {/* Build Now Button */}
        <div>
          <button
            onClick={() => {
              const element = document.getElementById('timeline-section');
              if (element) {
                element.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-900 via-violet-900 to-indigo-900 text-neutral-200 font-semibold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-900/25"
          >
            <span className="relative z-10">Build Now</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-950 via-violet-950 to-indigo-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export { BackgroundBeamsWithCollisionDemo };