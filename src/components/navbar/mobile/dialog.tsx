"use client";

import { motion, type Variants } from "framer-motion";
import { nav_links, social_links } from "~/lib/constants/links";
import LinkIndexedAnimation from "./link";

const variants_fade_in: Variants = {
  initial: {
    x: "100%",
    borderTopLeftRadius: "45%",
    borderBottomLeftRadius: "45%",
    transition: { duration: 0.7, ease: "circOut" },
  },
  animate: {
    x: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    transition: { duration: 0.7, ease: "circOut" },
  },
  exit: {
    x: "100%",
    borderTopLeftRadius: "15%",
    borderBottomLeftRadius: "15%",
    transition: { duration: 1, ease: "easeInOut" },
  },
};

export function NavbarMobileDialog() {
  return (
    <motion.div
      variants={variants_fade_in}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed z-40 top-0 left-0 w-full px-4 pt-16 h-[100dvh] overflow-y-scroll bg-foreground text-background"
    >
      <div className="flex flex-col justify-between gap-12 h-full py-12">
        <div className="flex flex-col gap-4">
          {nav_links.map((link, index) => (
            <LinkIndexedAnimation key={link.name} link={link} index={index} />
          ))}
        </div>

        <div className="flex flex-col gap-4 mt-auto">
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
