"use client";

import { motion, type Variants } from "framer-motion";
import { smooth } from "~/lib/utils/cubic-bezier";
import HeroWidgets from "./widgets";

export const followUpVariant: Variants = {
  initial: { y: "100%" },
  animate: { y: 0 },
};

export const fadeInVariant: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export default function Hero() {
  return (
    <section className="mx-auto px-4 py-16 h-[calc(100dvh-64px)] flex max-md:flex-col justify-between gap-4">
      <div className="flex items-start md:items-end">
        <div className="block text-[10rem] md:text-[16rem] font-semibold leading-none overflow-hidden indent-0">
          <motion.h1
            variants={followUpVariant}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, ease: smooth }}
          >
            Anri
          </motion.h1>
        </div>
      </div>
      <HeroWidgets />
    </section>
  );
}
