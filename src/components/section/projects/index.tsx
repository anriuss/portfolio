"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { smooth } from "~/lib/constants/cubic-bezier";
import { projects } from "~/lib/constants/projects";
import { cn } from "~/lib/utils/cn";
import LinkAnimation from "../../animations/animation-link";
import { LinkPreview } from "./preview";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects">
      {projects.map((project, x) => {
        return (
          <div key={x} className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.7, ease: smooth, delay: 0.1 * x }}
              viewport={{ once: true }}
            >
              <LinkPreview url={project.href} isStatic imageSrc={project.image}>
                <Link
                  href={project.href}
                  className={cn(
                    "group grid grid-cols-12 font-extrabold max-md:my-4 space-y-8 md:space-y-12 transition-opacity duration-300",
                    {
                      "opacity-40": hoveredIndex !== null && hoveredIndex !== x,
                    },
                  )}
                  onMouseEnter={() => setHoveredIndex(x)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="hidden col-span-1 mt-12 relative lg:flex size-fit overflow-hidden font-semibold *:duration-300 *:ease-smooth">
                    <ArrowRight
                      size={56}
                      className="absolute -left-[3rem] top-1/2 -translate-y-1/2 -translate-x-full group-hover:translate-x-full"
                    />
                    <p className="text-4xl w-20 group-hover:translate-x-full">
                      [0{x + 1}]
                    </p>
                  </div>
                  <p className="col-span-12 lg:col-span-7 text-4xl xs:text-6xl md:text-8xl">
                    <LinkAnimation className="before:-top-2 after:-top-2 md:before:-top-4 md:after:-top-4">
                      {project.name.toLocaleUpperCase()}
                    </LinkAnimation>
                  </p>
                  <p className="col-span-12 xs:col-span-10 lg:col-span-4 text-2xl md:max-lg:text-3xl font-semibold !mt-2 lg:!mt-11 3xl:text-4xl 3xl:text-end">
                    {project.description}
                  </p>
                </Link>
              </LinkPreview>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}
