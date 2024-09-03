"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  type Variants,
} from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import { useIsMounted, useMediaQuery } from "usehooks-ts";
import { smooth } from "~/lib/constants/cubic-bezier";

import A from "~public/logo/letters/A.svg";
import I from "~public/logo/letters/I.svg";
import N from "~public/logo/letters/N.svg";
import R from "~public/logo/letters/R.svg";
import V from "~public/logo/letters/V.svg";

interface Props {
  isOpen: boolean;
}

const LETTERS = [N, R, I];

export default function NavbarLogo({ isOpen }: Props) {
  const [isAnimated, setIsAnimated] = useState(false);
  const { scrollY } = useScroll();
  const { theme, setTheme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isMounted = useIsMounted();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    setIsAnimated(!isOpen && previous !== undefined && previous < latest);
  });

  const variants: Record<string, Variants> = {
    nri: {
      hide: { x: -10, opacity: 0 },
      show: { x: 10, opacity: 1 },
    },
    a: {
      hide: { x: 10 },
      show: { x: isMobile ? 5 : "61px" },
    },
    v: {
      hide: { x: 0, opacity: 0 },
      show: { x: isMobile ? "-117px" : "-61px" },
    },
  };

  return (
    <button
      onMouseEnter={() => {
        if (isAnimated) setIsAnimated(false);
      }}
      onMouseLeave={() => {
        if (scrollY.get() > 0) {
          if (!isAnimated) setIsAnimated(true);
        }
      }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="max-md:fixed max-md:top-4 max-md:left-0 z-50 mix-blend-difference flex relative"
    >
      <motion.div
        key="A"
        variants={variants.a}
        animate={isAnimated ? "show" : "hide"}
        transition={{ ease: smooth, duration: 0.8 }}
      >
        <Image src={A} alt="A" className="h-8 max-w-14" />
      </motion.div>
      <motion.div
        key="NRI"
        variants={variants.nri}
        animate={isAnimated ? "hide" : "show"}
        transition={{ ease: smooth, duration: 0.8 }}
        className="flex ml-0.5 mr-0.5"
      >
        {LETTERS.map((Letter, index) => (
          <Image
            key={index}
            src={Letter}
            alt={`Letter ${index + 1}`}
            className="h-8 max-w-14 -ml-3 mr-0.5"
          />
        ))}
      </motion.div>
      {isMounted() && (
        <motion.div
          key="V"
          variants={variants.v}
          animate={isAnimated ? "show" : "hide"}
          transition={{
            ease: smooth,
            duration: 0.8,
          }}
        >
          <Image src={V} alt="V" className="h-8 max-w-14 -ml-5" />
        </motion.div>
      )}
    </button>
  );
}
