import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { social_links } from "~/lib/constants/links";
import LinkAnimation from "../animations/animation-link";

export default function About() {
  return (
    <section
      id="about"
      className="px-4 md:px-8 py-16 container min-h-[100dvh] flex flex-col justify-center rounded-xl bg-foreground text-background"
    >
      <p className="block text-4xl md:text-6xl">
        I emphasize the importance of user experience in my work, aiming to
        create projects that are intuitive and responsive to user needs.
      </p>
      <hr className="border w-full mt-16 my-8" />
      <div
        id="contact"
        className="text-2xl flex max-lg:flex-col justify-between gap-12"
      >
        <div>
          <p className="italic text-xl">Here are my socials 👋🏼</p>
          <div className="flex flex-col gap-y-2 mt-12">
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
          </div>
        </div>
        <p className="lg:max-w-3xl">
          I&apos;m a 17-year-old enthusiastic full-stack web developer dedicated
          to turning ideas into creative solutions. I create dynamic and
          responsive web applications using Next.js, Tailwind CSS, and other
          modern technologies.
          <br />
          <br />
          I&apos;m involved in every step of the process: from discovery and
          development to deployment. I focus on delivering high-quality,
          scalable results that stimulate positive user interactions. While I
          prioritize development, I also recognize the vital role of design,
          particularly UI/UX, in achieving effective solutions.
        </p>
      </div>
    </section>
  );
}
