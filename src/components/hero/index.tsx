"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { smooth } from "~/lib/constants/cubic-bezier";
import { followUpVariant } from "~/lib/constants/variants";
import HeroWidgets from "./widgets";

export default function Hero() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 700], [0, 100]);

  return (
    <motion.section
      style={{ y }}
      className="mx-auto px-4 md:px-8 py-16 h-[calc(100dvh-64px)] flex max-md:flex-col justify-between gap-4"
    >
      <div className="md:h-full md:flex md:items-end text-8xl min-[450px]:text-[10rem] md:text-[16rem] font-semibold leading-none overflow-hidden indent-0">
        <motion.h1
          variants={followUpVariant}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, ease: smooth }}
        >
          Anri
        </motion.h1>
      </div>
      <HeroWidgets />
    </motion.section>
  );
}
