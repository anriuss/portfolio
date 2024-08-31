"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-screen-lg mx-auto px-4 py-16 h-[calc(100dvh-64px)]">
      <h1 className="text-8xl">
        <span className="text-2xl ml-1">Anri Vachnadze</span>
        <br />
        <span>Self-tought</span> <br />
        <span>Full-stack developer</span> <br />
      </h1>
      <aside>
        <span className="sr-only">Scroll down</span>
        <div className="-ml-4 mt-12 *:-mt-12">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "circOut",
                delay: 0.2 + index / 8,
              }}
            >
              <ChevronDown size={100} />
            </motion.div>
          ))}
        </div>
      </aside>
    </section>
  );
}

//     I emphasize the importance of user experience in my work, aiming to
//     create projects that are intuitive and responsive to user needs.
//     I am passionate about creating innovative solutions that solve real-world
//     problems and make a positive impact on people's lives.
