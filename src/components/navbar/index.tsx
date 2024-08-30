import Image from "next/image";
import Link from "next/link";
import logo from "~public/logo/logo.svg";
import ContactButton from "../contact";
import NavbarLinks from "./links";
import NavbarMobileMenu from "./mobile";

export const nav_links = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
];

export default function Navbar() {
  return (
    <header className="sticky h-16 w-full border-b bg-background px-4 py-3 flex items-center justify-between z-40">
      <NavbarLinks className="max-md:hidden" />
      <Link
        href="/"
        className="max-md:fixed max-md:left-4 z-50 mix-blend-difference"
      >
        <Image
          src={logo as unknown as string}
          alt="Anri Vachnadze Logo"
          width={76}
          height={76}
        />
      </Link>
      <ContactButton className="max-md:hidden" />
      <NavbarMobileMenu />
    </header>
  );
}
