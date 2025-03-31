"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { smooth } from "~/lib/constants/cubic-bezier";
import { social_links } from "~/lib/constants/links";
import { fadeInVariant } from "~/lib/constants/variants";
import LinkAnimation from "../../animations/animation-link";
import AnimateParagraph from "../../animations/animation-paragraph";

export default function About() {
  return (
    <main id="about" className="flex flex-col justify-center font-semibold">
      <p className="block text-4xl md:text-6xl">
        <AnimateParagraph single_delay={0.1} duration={1}>
          I emphasize the importance of user experience in my work, aiming to
          create projects that are intuitive and responsive to user needs.
        </AnimateParagraph>
      </p>
      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1, ease: smooth }}
        viewport={{ once: true }}
        className="border mt-16 my-8"
      />
      <div className="text-2xl flex max-lg:flex-col justify-between gap-12">
        <div>
          <p className="italic text-xl">
            <AnimateParagraph single_delay={0.5}>
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
          <AnimateParagraph single_delay={0.7} duration={1}>
            I&apos;m a 17-year-old enthusiastic full-stack web developer
            dedicated to turning ideas into creative solutions. I create dynamic
            and responsive web applications using Next.js, Tailwind CSS, and
            other modern technologies.
          </AnimateParagraph>
          <br />
          <br />
          <AnimateParagraph single_delay={0.7} duration={1}>
            I&apos;m involved in every step of the process: from discovery and
            development to deployment. I focus on delivering high-quality,
            scalable results that stimulate positive user interactions. While I
            prioritize development, I also recognize the vital role of design,
            particularly UI/UX, in achieving effective solutions.
          </AnimateParagraph>
          <br />
          <br />
          <AnimateParagraph single_delay={0.7} duration={1}>
            * All the projects listed below were solely developed by me, either
            for personal use or for a specific company.
          </AnimateParagraph>
        </p>
      </div>
    </main>
  );
}
