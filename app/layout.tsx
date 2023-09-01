"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ParticlesComponent from "@/components/Particles";

const inter = Inter({ subsets: ["latin"] });

import { usePathname, useRouter } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";
import Transition from "@/components/Transition";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <head>
        <title>Juan Brizuela</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* description */}
        <meta
          name="description"
          content="Personal portfolio of Juan Brizuela"
        />
      </head>
      {/* <AnimatePresence mode="wait"> */}
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <motion.div key={pathName} className="h-full"> */}
          {/* <Transition /> */}
          <header>
            <Navbar />
          </header>
          <Sidebar />
          <ParticlesComponent />
          {children}
          {/* </motion.div> */}
        </ThemeProvider>
      </body>
      {/* </AnimatePresence> */}
    </html>
  );
}
