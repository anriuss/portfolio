import { About } from "~/components/about";
import { Experience } from "~/components/experience";
import { Projects } from "~/components/projects";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-8 pb-8 lg:gap-40">
        <About />
        <Experience />
        <Projects />
    </section>
  );
}
