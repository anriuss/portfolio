"use client";

import { motion } from "framer-motion";
import { type PropsWithChildren } from "react";
import { smooth } from "~/lib/constants/cubic-bezier";
import { followUpVariant } from "~/lib/constants/variants";

interface Props extends PropsWithChildren {
  delay?: number;
  all?: boolean; // If true all words will be animated at once
  line?: boolean;
}

export default function AnimateParagraph({
  children,
  delay,
  all,
  line,
}: Props) {
  const words = all
    ? [children]
    : line
      ? children?.toString().split("&n")
      : children?.toString().split(" ");

  return (
    <>
      {words?.map((child, x) => (
        <span
          key={x}
          className="inline-flex overflow-hidden pb-[0.1em] indent-0"
        >
          <motion.span
            variants={followUpVariant}
            initial="initial"
            whileInView="animate"
            transition={{
              duration: 0.5,
              ease: smooth,
              delay: delay ? 0.1 * x + delay : 0.1 * x,
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
