"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { smooth } from "~/lib/constants/cubic-bezier";
import { cn } from "~/lib/utils/cn";
import About from "./about";
import Projects from "./projects";

const font = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "800"],
});

export default function DarkSection() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <motion.div
      style={{ y }}
      className={cn(
        "rounded-3xl bg-foreground text-background px-4 md:px-8 py-16",
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
