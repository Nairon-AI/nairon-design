"use client";
import React from "react";
import Image from "next/image";
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
          {/* Logo and Design text - horizontal on larger screens */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Image 
              src="/design.svg" 
              alt="Design Logo" 
              width={40}
              height={40}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
            />
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
            {/* NaironAI link - only visible on larger screens */}
            <a
              href="https://www.naironai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 hover:text-gray-300 transition-colors duration-200 group ml-2"
            >
              <TextAnimate
                animation="fadeIn"
                by="word"
                delay={0.6}
                duration={0.8}
                as="span"
                once={true}
              >
                A product by
              </TextAnimate>
              <Image
                src="/nairon-white.png"
                alt="NaironAI Logo"
                width={80}
                height={20}
                className="h-4 sm:h-5 md:h-6 w-auto object-contain"
              />
              <span className="text-gray-400">↗</span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          {/* NaironAI link - below logo on smaller screens */}
          <a
            href="https://www.naironai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative sm:hidden flex items-center gap-1.5 mt-1 text-xs text-gray-400 hover:text-gray-300 transition-colors duration-200 group ml-8"
          >
            <TextAnimate
              animation="fadeIn"
              by="word"
              delay={0.6}
              duration={0.8}
              as="span"
              once={true}
            >
              A product by
            </TextAnimate>
            <Image
              src="/nairon-white.png"
              alt="NaironAI Logo"
              width={60}
              height={15}
              className="h-3 w-auto object-contain"
            />
            <span className="text-gray-400">↗</span>
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
