"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Link from "next/link";
import { smooth } from "~/lib/constants/cubic-bezier";
import { social_links } from "~/lib/constants/links";
import { fadeInVariant } from "~/lib/constants/variants";
import { cn } from "~/lib/utils/cn";
import LinkAnimation from "../animations/animation-link";
import AnimateParagraph from "../animations/animation-paragraph";

const Newspaper = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function About() {
  return (
    <section
      id="about"
      className={cn(
        "px-4 md:px-8 py-16 container min-h-[100dvh] flex flex-col justify-center rounded-xl bg-foreground text-background",
        Newspaper.className,
      )}
    >
      <p className="block text-4xl md:text-6xl">
        <AnimateParagraph>
          I emphasize the importance of user experience in my work, aiming to
          create projects that are intuitive and responsive to user needs.
        </AnimateParagraph>
      </p>
      <hr className="border w-full mt-16 my-8" />
      <div
        id="contact"
        className="text-2xl flex max-lg:flex-col justify-between gap-12"
      >
        <div>
          <p className="italic text-xl">
            <AnimateParagraph all={true} delay={0.5}>
              Here are my socials 👋🏼
            </AnimateParagraph>
          </p>
          <motion.div
            className="flex flex-col gap-y-2 mt-12"
            variants={fadeInVariant}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.5, ease: smooth, delay: 1 }}
            viewport={{ once: true }}
          >
            {social_links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group text-4xl flex gap-x-2"
              >
                <div className="relative flex size-fit overflow-hidden *:duration-300 *:ease-smooth">
                  <ArrowRight
                    size={24}
                    className="absolute -left-[1rem] top-1/2 -translate-y-1/2 -translate-x-full group-hover:translate-x-full"
                  />
                  <p className="text-lg w-9 group-hover:translate-x-full">
                    [0{index + 1}]
                  </p>
                </div>
                <LinkAnimation>{link.name}</LinkAnimation>
              </Link>
            ))}
          </motion.div>
        </div>
        <p className="lg:max-w-3xl">
          <AnimateParagraph delay={1.2} line>
            I&apos;m a 17-year-old enthusiastic full-stack web developer &n
            dedicated to turning ideas into creative solutions. I create dynamic
            &n and responsive web applications using Next.js, Tailwind CSS, and
            &n other modern technologies.
          </AnimateParagraph>
          <br />
          <br />
          <AnimateParagraph delay={1.5} line>
            I&apos;m involved in every step of the process: from discovery and
            &n development to deployment. I focus on delivering high-quality, &n
            scalable results that stimulate positive user interactions. While I
            &n prioritize development, I also recognize the vital role of
            design, &n particularly UI/UX, in achieving effective solutions.
          </AnimateParagraph>
        </p>
      </div>
    </section>
  );
}
