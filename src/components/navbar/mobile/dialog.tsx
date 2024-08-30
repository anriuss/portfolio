"use client";

import { motion, type Variants } from "framer-motion";
import { nav_links } from "..";
import LinkIndexedAnimation from "./link";

const social_links = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/anri-vachnadze/" },
  { name: "GitHub", href: "https://github.com/MrAnri29" },
  { name: "Email", href: "mailto:mr.anriko29@gmail.com" },
];

const variants_fade_in: Variants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: 0,
  },
  exit: {
    x: "100%",
  },
};

export function NavbarMobileDialog() {
  return (
    <motion.div
      variants={variants_fade_in}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.7, ease: "circOut" }}
      className="fixed z-40 top-0 left-0 w-full px-4 pt-16 h-[100dvh] min-h-[600px] bg-foreground text-background"
    >
      <div className="relative size-full">
        <div className="absolute top-12 flex flex-col gap-4">
          {nav_links.map((link, index) => (
            <LinkIndexedAnimation key={link.name} link={link} index={index} />
          ))}
        </div>

        <div className="absolute bottom-12 flex flex-col gap-4">
          {social_links.map((link, index) => (
            <LinkIndexedAnimation
              key={link.name}
              link={link}
              index={index + nav_links.length}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}