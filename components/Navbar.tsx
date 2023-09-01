"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { GithubIcon, InstagramIcon, Linkedin, MenuIcon } from "lucide-react";
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
    url: "https://mx.linkedin.com/in/juan-brizuela-549481192?trk=public_profile_browsemap_profile-result-card_result-card_full-click",
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
];

export default function Navbar() {
  return (
    <>
      <nav className="p-6 max-w-5xl mx-auto flex justify-between items-center sticky  ">
        <div className="flex items-center">
          <Link
            href="/"
            className=" text-2xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-r dark:from-slate-200  dark:to-zinc-300 from-zinc-700 to-zinc-950 hover:opacity-70 transition duration-200 ease-in-out"
          >
            juan <span className="font-bold ">brizuela</span>
          </Link>
        </div>
        <div className="sm:flex justify-center items-center gap-6 hidden ">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <Link
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
          const Icon = social.icon;
          return (
            <Link
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
    </>
  );
}
