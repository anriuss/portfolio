import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "~/lib/utils/cn";
import MagneticAnimation from "./animations/animation-magnetic";

interface Props {
  className?: string;
}

export default function ContactButton({ className }: Props) {
  return (
    <MagneticAnimation>
      <Link
        href="/#contact"
        className={cn(
          "text-background bg-foreground pl-3 pr-4 py-2 rounded-full flex items-center gap-x-1",
          className,
        )}
      >
        <ArrowUpRight />
        <span>Get in touch</span>
      </Link>
    </MagneticAnimation>
  );
}
