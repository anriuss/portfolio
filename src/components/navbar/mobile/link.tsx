import { ArrowRight } from "lucide-react";
import Link from "next/link";
import LinkAnimation from "~/components/animations/animation-link";

interface Props {
  link: { name: string; href: string };
  index: number;
}

export default function LinkIndexedAnimation({ link, index }: Props) {
  return (
    <Link href={link.href} className="group text-background/60 flex gap-x-6">
      <div className="relative flex size-fit overflow-hidden *:duration-300">
        <ArrowRight
          size={32}
          className="absolute -left-[1rem] top-1/2 -translate-y-1/2 -translate-x-full group-hover:translate-x-full"
        />
        <p className="text-2xl w-11 group-hover:translate-x-full">
          [0{index + 1}]
        </p>
      </div>
      <LinkAnimation className="before:-top-2 after:-top-2 font-bold text-7xl">
        {link.name}
      </LinkAnimation>
    </Link>
  );
}
