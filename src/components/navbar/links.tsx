import Link from "next/link";
import { cn } from "~/lib/utils/cn";
import { nav_links } from ".";
import AnimatedBackground from "../animations/animation-background";
import LinkAnimation from "../animations/animation-link";

interface Props {
  className?: string;
}

export default function NavbarLinks({ className }: Props) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
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
            className="text-foreground hover:text-background transition-colors duration-300 ease-smooth px-4 py-2 group"
          >
            <LinkAnimation>{link.name}</LinkAnimation>
          </Link>
        ))}
      </AnimatedBackground>
    </div>
  );
}
