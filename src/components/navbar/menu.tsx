"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "~/lib/utils/cn";
import { nav_links } from ".";
import LinkAnimation from "../animations/animation-link";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavbarMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <NavbarMobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <AnimatePresence>{isOpen && <NavbarMobileMenuDialog />}</AnimatePresence>
    </div>
  );
}

export function NavbarMobileMenuButton({ isOpen, setIsOpen }: Props) {
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <button
      className="fixed top-6 right-4 z-50 flex items-center justify-center gap-2 mix-blend-difference"
      onClick={handleClick}
    >
      <span className="sr-only">menu</span>
      <div className="*:h-[5px] *:bg-background *:w-8 *:duration-300">
        <div
          className={cn({
            "rotate-45 translate-y-1": isOpen,
          })}
        />
        <div
          className={cn("mt-1.5", {
            "-rotate-45 -translate-y-1.5": isOpen,
          })}
        />
      </div>
    </button>
  );
}

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

export function NavbarMobileMenuDialog() {
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
          {nav_links.map((link, x) => (
            <Link
              key={link.name}
              href={link.href}
              className="group text-background/60 flex gap-x-6"
            >
              <div className="relative flex size-fit overflow-hidden *:transition-transform *:duration-300">
                <ArrowRight
                  size={32}
                  className="absolute -left-[1rem] top-1/2 -translate-y-1/2 -translate-x-full group-hover:translate-x-full"
                />
                <p className="text-2xl w-11 group-hover:translate-x-full">
                  [0{x + 1}]
                </p>
              </div>
              <LinkAnimation className="before:-top-2 after:-top-2 font-bold text-7xl">
                {link.name}
              </LinkAnimation>
            </Link>
          ))}
        </div>

        <div className="absolute bottom-12 flex flex-col gap-4">
          {[
            {
              name: "LinkedIn",
              href: "https://www.linkedin.com/in/anri-vachnadze/",
            },
            { name: "GitHub", href: "https://github.com/MrAnri29" },
            { name: "Email", href: "mailto:mr.anriko29@gmail.com" },
          ].map((link, x) => (
            <Link
              key={link.name}
              href={link.href}
              className="group text-background/60 flex gap-x-6"
            >
              <div className="relative flex size-fit overflow-hidden *:transition-transform *:duration-300">
                <ArrowRight
                  size={32}
                  className="absolute -left-[1rem] top-1/2 -translate-y-1/2 -translate-x-full group-hover:translate-x-full"
                />
                <p className="text-2xl w-11 group-hover:translate-x-full">
                  [0{x + 3}]
                </p>
              </div>
              <LinkAnimation className="before:-top-2 after:-top-2 font-bold text-7xl">
                {link.name}
              </LinkAnimation>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
