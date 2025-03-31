"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { smooth } from "~/lib/constants/cubic-bezier";
import { social_links } from "~/lib/constants/links";

import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

import LinkAnimation from "../animations/animation-link";

export default function Footer() {
  const footer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: footer,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-30dvh", "0dvh"]);

  return (
    <motion.footer
      ref={footer}
      style={{ y }}
      className="bg-background text-foreground"
    >
      <aside
        id="contact"
        className="px-4 md:px-8 text-2xl flex max-sm:flex-col gap-4 sm:items-end justify-between"
      >
        <div className="flex flex-col">
          <span className="opacity-60">Say hi:</span>
          <Link href="mailto:anri.vachnadze@icloud.com" className="group">
            <LinkAnimation>anri.vachnadze@icloud.com</LinkAnimation>
          </Link>
        </div>
        <div className="flex gap-x-2">
          {social_links.slice(0, 2).map((link, index) => (
            <Link key={index} href={link.href} className="group flex">
              <LinkAnimation>{link.name}</LinkAnimation>
              <ArrowUpRight size={24} className="ml-0.5 opacity-60" />
            </Link>
          ))}
        </div>
      </aside>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((x) => {
        return (
          <motion.hr
            key={x}
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, ease: smooth, delay: 0.05 * x + 0.5 }}
            viewport={{ once: true }}
            className="border my-3 md:my-4"
          />
        );
      })}
    </motion.footer>
  );
}
