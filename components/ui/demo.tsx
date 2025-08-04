"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { SparklesText } from "@/components/ui/sparkles-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import AttractButton from "@/components/kokonutui/attract-button";
import { motion } from "framer-motion";

function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      {/* Branded Header - Top Left */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-30">
        <div className="text-white">
          <TextAnimate
            className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight"
            as="h2"
            animation="slideRight"
            by="character"
            delay={0}
            duration={0.5}
            once={true}
          >
            Design
          </TextAnimate>
          <a 
            href="https://www.codeandcreed.tech" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 hover:text-gray-300 transition-colors duration-200 group"
          >
            <TextAnimate
              animation="fadeIn"
              by="word"
              delay={0.6}
              duration={0.8}
              as="span"
              once={true}
            >
              A product by Code & Creed ↗
            </TextAnimate>
            <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <TextAnimate
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white font-sans tracking-tight mb-4 sm:mb-6 leading-tight"
          as="h1"
          animation="blurInUp"
          by="word"
          delay={0.2}
          duration={0.8}
        >
          Ship Beautiful Experiences Faster Than Your Competition
        </TextAnimate>
        <div className="relative mx-auto inline-block max-w-full mb-6">
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-400 flex flex-wrap items-center justify-center gap-2 leading-tight">
            <TextAnimate
              animation="slideUp"
              by="word"
              delay={1.0}
              duration={0.6}
              as="span"
            >
              Everything You Need to Craft
            </TextAnimate>
            <div className="relative inline-block">
              <TextAnimate
                animation="slideUp"
                by="word"
                delay={1.1}
                duration={0.4}
                as="span"
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-emerald-300 inline whitespace-nowrap"
              >
                pixel perfect
              </TextAnimate>
              <div className="absolute inset-0 pointer-events-none">
                <SparklesText 
                  text="pixel perfect" 
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-transparent inline whitespace-nowrap" 
                  sparklesCount={10} 
                  colors={{ first: "#6EE7B7", second: "#34D399" }} 
                />
              </div>
            </div>
            <TextAnimate
              animation="slideUp"
              by="word"
              delay={1.2}
              duration={0.4}
              as="span"
            >
              UI
            </TextAnimate>
          </div>
        </div>

        {/* Build Now Button */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          whileInView={{ 
            opacity: 1, 
            filter: "blur(0px)", 
            y: 0 
          }}
          exit={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <AttractButton
            onClick={() => {
              const element = document.getElementById('timeline-section');
              if (element) {
                element.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
            particleCount={15}
            attractRadius={60}
          />
        </motion.div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

export { BackgroundBeamsWithCollisionDemo };