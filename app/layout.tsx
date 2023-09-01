"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ParticlesComponent from "@/components/Particles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juan Brizuela",
  description: "Personal portfolio of Juan Brizuela",
};

import { usePathname, useRouter } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";
import Transition from "@/components/Transition";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <html lang="en">
      <AnimatePresence mode="wait">
        <body className={`${inter.className}`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <motion.div key={pathName} className="h-full">
              <Transition />
              <header>
                <Navbar />
              </header>
              <Sidebar />
              <ParticlesComponent />
              {children}
            </motion.div>
          </ThemeProvider>
        </body>
      </AnimatePresence>
    </html>
  );
}
