"use client";

import TypewriterComponent from "typewriter-effect";

const Hero = () => {
  return (
    <section className="space-y-8">
      <h1 className="text-8xl max-lg:text-center max-lg:text-6xl tracking-tighter font-semibold bg-gradient-to-r bg-clip-text text-transparent dark:from-zinc-200 dark:via-zinc-300 dark:to-zinc-400 from-zinc-800 to-zinc-600">
        Juan Brizuela
      </h1>
      <h2 className="text-4xl max-lg:text-center max-lg:text-2xl tracking-tighter font-semibold   ">
        <TypewriterComponent
          options={{
            strings: [
              "Front End Developer ",
              "Back End Developer ",
              "Full Stack Developer ",
              "CoffeeLover.tsx ",
              "AI Enthusiast ",
              "Audiophile ",
              "Melomaniac ",
              "Cinephile ",
              "[object Object] ",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
    </section>
  );
};

export default Hero;
