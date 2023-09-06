"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: 0,
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 dark:bg-zinc-950 bg-zinc-50"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          ease: "easeInOut",
          delay: 0.4,
          duration: 1,
        }}
      >
        <div className="flex justify-center items-center h-screen">
          <Image
            src="/logo.png"
            width={200}
            height={200}
            alt="logo"
            className="filter
          invert dark:filter-none
          "
          />
        </div>
      </motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-gradient-to-r dark:bg-zinc-900 bg-zinc-200 "
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.6,
          ease: "easeInOut",
          duration: 0.8,
        }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-gradient-to-r dark:bg-zinc-800 bg-zinc-300"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.8,
          ease: "easeInOut",
          duration: 0.8,
        }}
      ></motion.div>
    </>
  );
};

export default Transition;
