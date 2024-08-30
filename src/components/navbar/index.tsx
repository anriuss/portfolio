import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "~public/logo/logo.svg";
import AnimatedBackground from "./animation-background";
import LinkAnimation from "./animation-link";
import MagneticAnimation from "./animation-magnetic";

const nav_links = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
];

export default function Navbar() {
  return (
    <header className="h-16 w-full border-b bg-background px-4 py-3 flex items-center justify-between group/navbar">
      <div className="flex items-center gap-2">
        <AnimatedBackground
          className="rounded-full bg-foreground"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.6,
          }}
          enableHover
        >
          {nav_links.map((link) => (
            <Link
              key={link.name}
              data-id={link.name}
              href={link.href}
              className="text-foreground hover:text-background transition-colors duration-300 px-4 py-2 group"
            >
              <LinkAnimation>{link.name}</LinkAnimation>
            </Link>
          ))}
        </AnimatedBackground>
      </div>
      <Link href="/">
        <Image
          src={logo as unknown as string}
          alt="Anri Vachnadze Logo"
          width={76}
          height={76}
        />
      </Link>
      <MagneticAnimation>
        <Link
          href="/#contact"
          className="text-background bg-foreground pl-3 pr-4 py-2 rounded-full flex items-center gap-x-1"
        >
          <ArrowUpRight />
          <span>Get in touch</span>
        </Link>
      </MagneticAnimation>
    </header>
  );
}
