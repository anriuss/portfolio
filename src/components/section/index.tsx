"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { useRef } from "react";
import { smooth } from "~/lib/constants/cubic-bezier";
import { cn } from "~/lib/utils/cn";
import About from "./about";
import Projects from "./projects";

const font = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "800"],
});

export default function DarkSection() {
  const section = useRef<HTMLDivElement>(null);
  const { scrollYProgress: startScrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: endScrollYProgress } = useScroll({
    target: section,
    offset: ["110% end", "end start"],
  });

  const y = useTransform(startScrollYProgress, [0, 0.3], [0, -100]);
  const scale = useTransform(endScrollYProgress, [0, 1], [1, 0.95]);

  return (
    <motion.div
      ref={section}
      style={{ y, scale }}
      className={cn(
        "rounded-3xl bg-foreground text-background px-4 md:px-8 py-16 relative z-10",
        font.className,
      )}
    >
      <About />
      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1, ease: smooth }}
        viewport={{ once: true }}
        className="border mt-16 my-8"
      />
      <Projects />
    </motion.div>
  );
}
