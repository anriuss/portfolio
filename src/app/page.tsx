import { About } from "~/components/about";
import { Experience } from "~/components/experience";
import { Projects } from "~/components/projects";

export default function HomePage() {
  return (
    <main>
        <About />
        <Experience />
        <Projects />
    </main>
  );
}
