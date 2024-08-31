"use client";

import { useState } from "react";
import ContactButton from "../contact";
import NavbarLinks from "./links";
import NavbarLogo from "./logo";
import NavbarMobileMenu from "./mobile";

export const nav_links = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 h-16 w-full rounded-b-3xl border shadow-md bg-background px-4 py-3 flex items-center justify-between z-40">
      <NavbarLinks className="max-md:hidden" />
      <NavbarLogo isOpen={isOpen} />
      <ContactButton className="max-md:hidden" />
      <NavbarMobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
