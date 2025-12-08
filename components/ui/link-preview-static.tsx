"use client";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { encode } from "qss";
import React from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";

import { cn } from "@/lib/utils";
import { getScreenshotMapping, getStaticScreenshot, type ScreenshotMapping } from "@/lib/screenshot-mapping";

type LinkPreviewProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
  layout?: string;
} & (
  | { isStatic: true; imageSrc: string }
  | { isStatic?: false; imageSrc?: never }
);

export const LinkPreview = ({
  children,
  url,
  className,
  width = 200,
  height = 125,
  quality: _quality = 50,
  layout: _layout = "fixed",
  isStatic = false,
  imageSrc = "",
}: LinkPreviewProps) => {
  const [isOpen, setOpen] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const [screenshotMapping, setScreenshotMapping] = React.useState<ScreenshotMapping>({});
  const [mappingLoaded, setMappingLoaded] = React.useState(false);

  // Load screenshot mapping on mount
  React.useEffect(() => {
    setIsMounted(true);
    
    getScreenshotMapping().then((mapping) => {
      setScreenshotMapping(mapping);
      setMappingLoaded(true);
    });
  }, []);

  // Determine image source
  let src: string;
  const staticScreenshot = mappingLoaded ? getStaticScreenshot(url, screenshotMapping) : null;
  
  if (isStatic) {
    src = imageSrc;
  } else if (staticScreenshot) {
    // Use static screenshot if available
    src = staticScreenshot;
  } else {
    // Fallback to microlink.io
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
      "viewport.width": width * 3,
      "viewport.height": height * 3,
    });
    src = `https://api.microlink.io/?${params}`;
  }

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const targetRect = (event.target as HTMLElement).getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2;
    x.set(offsetFromCenter);
  };

  return (
    <>
      {isMounted ? (
        <div className="hidden">
          <img
            src={src}
            width={width}
            height={height}
            alt="hidden image"
          />
        </div>
      ) : null}

      <HoverCardPrimitive.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={(open) => {
          setOpen(open);
        }}
      >
        <HoverCardPrimitive.Trigger
          onMouseMove={handleMouseMove}
          className={cn("text-black dark:text-white", className)}
          asChild
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        </HoverCardPrimitive.Trigger>

        <HoverCardPrimitive.Content
          className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
          side="top"
          align="center"
          sideOffset={10}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="shadow-xl rounded-xl"
                style={{
                  x: translateX,
                }}
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-1 bg-white border-2 border-transparent shadow rounded-xl hover:border-neutral-200 dark:hover:border-neutral-800"
                  style={{ fontSize: 0 }}
                >
                  {imageError ? (
                    <div 
                      className="rounded-lg bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center"
                      style={{ width, height }}
                    >
                      <div className="text-center p-4">
                        <div className="text-2xl mb-2">🌐</div>
                        <div className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">
                          {new URL(url).hostname}
                        </div>
                        {staticScreenshot && (
                          <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                            Static Preview
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <img
                      src={src}
                      width={width}
                      height={height}
                      className="rounded-lg"
                      alt="preview image"
                      onError={() => setImageError(true)}
                    />
                  )}
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Root>
    </>
  );
};