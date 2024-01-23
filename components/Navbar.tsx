"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import {
  GithubIcon,
  InstagramIcon,
  Linkedin,
  MenuIcon,
  YoutubeIcon,
} from "lucide-react";
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/brizuela-go",
    icon: GithubIcon,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/je_brizuela/",
    icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/juan-eduardo-brizuela-gonz%C3%A1lez-549481192",
    icon: Linkedin,
  },
  {
    name: "Messenger",
    url: "https://m.me/juan.e.brizuela",
    icon: RiMessengerLine,
  },
  {
    name: "Whatsapp",
    url: "https://wa.me/522213321516",
    icon: RiWhatsappLine,
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/@CodingwithJuanB",
    icon: YoutubeIcon,
  },
];

// change navbar color on scroll

const changeNavbarColor = () => {
  if (window.scrollY >= 80) {
    document.querySelector(".stickit")?.classList.add("dark:bg-zinc-950");
    document.querySelector(".stickit")?.classList.add("bg-white");
  } else {
    document.querySelector(".stickit")?.classList.remove("dark:bg-zinc-950");
    document.querySelector(".stickit")?.classList.remove("bg-white");
  }
};

if (typeof window !== "undefined") {
  window.addEventListener("scroll", changeNavbarColor);
}

export default function Navbar() {
  return (
    <div className="stickit">
      <nav className="p-6 max-w-5xl mx-auto flex justify-between items-center  ">
        <Link
          href={"/"}
          className="flex items-center gap-x-2 hover:opacity-70 transition duration-200 ease-in-out"
        >
          <div className=" text-2xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-r dark:from-slate-200  dark:to-zinc-300 from-zinc-700 to-zinc-950 ">
            juan <span className="font-bold ">brizuela</span>
          </div>
        </Link>
        <div className="sm:flex justify-center items-center gap-6 hidden ">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                aria-label={social.name}
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:opacity-70 transition duration-200 ease-in-out"
              >
                <Icon />
              </Link>
            );
          })}
        </div>
        <ModeToggle />
      </nav>
      <div className="flex justify-center items-center gap-6 sm:hidden  ">
        {socials.map((social) => {
          const Icon: any = social.icon;
          return (
            <Link
              aria-label={social.name}
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:opacity-70 transition duration-200 ease-in-out"
            >
              <Icon />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
