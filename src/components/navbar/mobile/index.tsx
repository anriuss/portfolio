"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import NavbarMobileButton from "./button";
import { NavbarMobileDialog } from "./dialog";

export default function NavbarMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <NavbarMobileButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <AnimatePresence>{isOpen && <NavbarMobileDialog />}</AnimatePresence>
    </div>
  );
}
