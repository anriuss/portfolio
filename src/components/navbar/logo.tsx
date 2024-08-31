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

import A from "~public/logo/letters/A.svg";
import I from "~public/logo/letters/I.svg";
import N from "~public/logo/letters/N.svg";
import R from "~public/logo/letters/R.svg";
import V from "~public/logo/letters/V.svg";

type Props = {
  isOpen: boolean;
};

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

  const toggleAnimation = () => setIsAnimated((prev) => !prev);

  const variants: Record<string, Variants> = {
    nri: {
      hide: { opacity: 0 },
      show: { opacity: 1, x: "10px" },
    },
    a: {
      hide: { x: "10px" },
      show: { x: isMobile ? "10px" : "50px" },
    },
    v: {
      hide: { x: 0, opacity: 0 },
      show: { x: isMobile ? "-90px" : "-50px" },
    },
  };

  return (
    <button
      onMouseEnter={toggleAnimation}
      onMouseLeave={toggleAnimation}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="max-md:fixed max-md:left-0 z-50 mix-blend-difference flex relative"
    >
      <motion.div
        key="A"
        variants={variants.a}
        animate={isAnimated ? "show" : "hide"}
        transition={{ ease: "circInOut" }}
      >
        <Image src={A} alt="A" className="h-8 max-w-14" />
      </motion.div>
      <motion.div
        key="NRI"
        variants={variants.nri}
        animate={isAnimated ? "hide" : "show"}
        transition={{ ease: "circInOut" }}
        className="flex ml-0.5 mr-0.5"
      >
        {LETTERS.map((Letter, index) => (
          <Image
            key={index}
            src={Letter}
            alt={`Letter ${index + 1}`}
            className="h-8 max-w-14 -ml-5 mr-0.5"
          />
        ))}
      </motion.div>
      {isMounted() && (
        <motion.div
          key="V"
          variants={variants.v}
          animate={isAnimated ? "show" : "hide"}
          transition={{ ease: "circInOut" }}
        >
          <Image src={V} alt="V" className="h-8 max-w-14 -ml-5" />
        </motion.div>
      )}
    </button>
  );
}
