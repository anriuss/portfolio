"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { smooth } from "~/lib/constants/cubic-bezier";
import { followUpVariant } from "~/lib/constants/variants";
import HeroWidgets from "./widgets";

export default function Hero() {
  const hero = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: hero,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.7], [0, 100]);

  return (
    <motion.section
      ref={hero}
      style={{ y }}
      className="mx-auto px-4 md:px-8 py-16 h-[calc(100dvh-64px)] flex max-md:flex-col justify-between gap-4"
    >
      <div className="absolute left-4 md:bottom-8 md:left-8 text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-semibold leading-none overflow-hidden indent-0">
        <motion.h1
          variants={followUpVariant}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, ease: smooth }}
        >
          Full-Stack <br /> web developer
        </motion.h1>
      </div>
      <HeroWidgets />
    </motion.section>
  );
}
