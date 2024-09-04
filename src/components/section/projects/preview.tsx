"use client";

import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import {
  AnimatePresence,
  cubicBezier,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { encode } from "qss";
import React from "react";
import { useIsMounted } from "usehooks-ts";
import { cn } from "~/lib/utils/cn";

const smooth = cubicBezier(0.65, 0.07, 0.015, 1);

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
  width = 250,
  height = 150,
  quality = 50,
  layout = "fixed",
  isStatic = false,
  imageSrc = "",
}: LinkPreviewProps) => {
  let src;
  if (!isStatic) {
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
  } else {
    src = imageSrc;
  }

  const [isOpen, setOpen] = React.useState(false);

  const isMounted = useIsMounted();

  const springConfig = {
    stiffness: 100,
    damping: 30,
    mass: 1,
    restSpeed: 0.001,
    restDelta: 0.001,
  };

  const x = useMotionValue(0);

  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const targetRect = event.currentTarget.getBoundingClientRect();
    const eventOffsetX = event.clientX - targetRect.left;
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2;
    x.set(offsetFromCenter);
  };

  return (
    <>
      {isMounted() ? (
        <div className="hidden">
          <Image
            src={src}
            width={width}
            height={height}
            quality={quality}
            layout={layout}
            priority={true}
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
          className={cn(className)}
          asChild
        >
          {children}
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
                    duration: 0.6,
                    ease: smooth,
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  scale: 0.6,
                  transition: {
                    duration: 0.6,
                    ease: smooth,
                  },
                }}
                className="shadow-xl rounded-xl"
                style={{
                  x: translateX,
                }}
              >
                <Link
                  href={url}
                  className="block p-1 bg-foreground border-2 border-transparent shadow rounded-md hover:border-background"
                  style={{ fontSize: 0 }}
                >
                  <Image
                    src={isStatic ? imageSrc : src}
                    width={width}
                    height={height}
                    quality={quality}
                    layout={layout}
                    priority={true}
                    className="rounded-sm"
                    alt="preview image"
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Root>
    </>
  );
};
