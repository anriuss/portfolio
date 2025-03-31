"use client";

import { motion } from "framer-motion";
import React from "react";
import { smooth } from "~/lib/constants/cubic-bezier";
import { fadeInVariant, followUpVariant } from "~/lib/constants/variants";
import TimezoneClock from "./clock";

interface AnimatedTextProps {
  children: React.ReactNode;
  delay?: number;
}

function AnimatedText({ children, delay = 0 }: AnimatedTextProps) {
  return (
    <div className="overflow-hidden">
      <motion.p
        variants={followUpVariant}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, ease: smooth, delay }}
        className="text-2xl whitespace-nowrap"
      >
        {children}
      </motion.p>
    </div>
  );
}

interface AnimatedContentProps {
  children: React.ReactNode;
  delay?: number;
}

function AnimatedContent({ children, delay = 1.3 }: AnimatedContentProps) {
  return (
    <div className="overflow-hidden">
      <motion.div
        variants={followUpVariant}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.5, ease: smooth, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface InfoBlockProps {
  text: string;
  content: React.ReactNode;
  contentDelay?: number;
}

function InfoBlock({ text, content, contentDelay = 1.3 }: InfoBlockProps) {
  return (
    <motion.div
      variants={fadeInVariant}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5, ease: smooth, delay: 0.5 }}
    >
      <AnimatedText delay={0.7}>{text}</AnimatedText>
      <AnimatedContent delay={contentDelay}>{content}</AnimatedContent>
    </motion.div>
  );
}

export default function HeroWidgets() {
  return (
    <div className="absolute max-md:bottom-4 max-md:left-4 md:right-8 flex max-[450px]:flex-col gap-8 overflow-hidden">
      <InfoBlock text="Batumi, Georgia" content={<TimezoneClock />} />
      <InfoBlock
        text="Available for work"
        content={
          <time dateTime="2025-04-01" className="text-4xl font-semibold">
            Apr &apos;1 2025
          </time>
        }
      />
    </div>
  );
}
