"use client";

import Hero from "@/components/Hero";
import Transition from "@/components/Transition";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  // const projects = await getProjects();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={"/"} className="h-screen">
        <Transition />
        <main className="max-w-5xl mx-auto flex max-lg:justify-center justify-start items-center h-screen -mt-6 ">
          <Hero />
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
