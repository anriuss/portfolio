"use client";

import TimezoneClock from "./clock";

export default function Hero() {
  return (
    <section className=" mx-auto px-4 py-16 h-[calc(100dvh-64px)] flex max-md:flex-col justify-between gap-4">
      <div className="flex items-start md:items-end">
        <h1 className="block text-[10rem] md:text-[16rem] font-semibold leading-none">
          Anri
        </h1>
      </div>
      <div className="flex md:max-lg:flex-col gap-8">
        <div>
          <p className="text-2xl">Batumi, Georgia</p>
          <TimezoneClock />
        </div>
        <div>
          <p className="text-2xl">Available for work</p>
          <time dateTime="2024-09-01" className="text-4xl font-semibold">
            Sep &apos;1 2024
          </time>
        </div>
      </div>
    </section>
  );
}

//     I emphasize the importance of user experience in my work, aiming to
//     create projects that are intuitive and responsive to user needs.
//     I am passionate about creating innovative solutions that solve real-world
//     problems and make a positive impact on people's lives.
