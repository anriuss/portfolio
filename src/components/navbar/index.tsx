"use client";

import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { smooth } from "~/lib/utils/cubic-bezier";
import ContactButton from "../contact";
import NavbarLinks from "./links";
import NavbarLogo from "./logo";
import NavbarMobileMenu from "./mobile";

export const nav_links = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
];

export const followDownVariant: Variants = {
  initial: { y: "-100%" },
  animate: { y: 0 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      variants={followDownVariant}
      initial="initial"
      animate="animate"
      transition={{ duration: 1, ease: smooth, delay: 1.3 }}
      className="sticky top-0 h-16 w-full rounded-b-3xl border shadow-md bg-background px-4 py-3 flex items-center justify-between z-40"
    >
      <NavbarLinks className="max-md:hidden" />
      <NavbarLogo isOpen={isOpen} />
      <ContactButton className="max-md:hidden" />
      <NavbarMobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.header>
  );
}
