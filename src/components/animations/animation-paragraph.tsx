"use client";

import { motion } from "framer-motion";
import { type PropsWithChildren } from "react";
import { smooth } from "~/lib/constants/cubic-bezier";
import { followUpVariant } from "~/lib/constants/variants";

interface Props extends PropsWithChildren {
  single_delay?: number;
  delay?: number;
  duration?: number;
}

export default function AnimateParagraph({
  children,
  single_delay,
  delay,
  duration = 0.5,
}: Props) {
  return (
    <>
      {children
        ?.toString()
        .split(" ")
        .map((child, x) => (
          <span
            key={x}
            className="inline-flex overflow-hidden pb-[0.1em] indent-0"
          >
            <motion.span
              variants={followUpVariant}
              initial="initial"
              whileInView="animate"
              transition={{
                duration,
                ease: smooth,
                delay: single_delay
                  ? single_delay
                  : delay
                    ? 0.1 * x + delay
                    : 0.1 * x,
              }}
              viewport={{ once: true }}
            >
              {child}&nbsp;
            </motion.span>
          </span>
        ))}
    </>
  );
}
