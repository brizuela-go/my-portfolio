"use client";

import Link from "next/link";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  FolderKanban,
  GanttChartSquare,
  HomeIcon,
  Mail,
  MessagesSquare,
  UserIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const menuItems = [
  {
    name: "Home",
    icon: HomeIcon,
    href: "/",
  },
  {
    name: "About",
    icon: UserIcon,
    href: "/about",
  },
  {
    name: "Services",
    icon: GanttChartSquare,
    href: "/services",
  },
  {
    name: "Projects",
    icon: FolderKanban,
    href: "/projects",
  },
  {
    name: "Testimonials",
    icon: MessagesSquare,
    href: "/testimonials",
  },
  {
    name: "Contact",
    icon: Mail,
    href: "/contact",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <div className="fixed right-6 top-40 max-lg:hidden   ">
        <div className="p-8 flex flex-col gap-8   ">
          {menuItems.map((item) => (
            <Link href={item.href} key={item.href}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger aria-label={item.name}>
                    <item.icon
                      className={`w-6 h-6 ${
                        pathname !== item.href &&
                        "opacity-40 hover:opacity-100 transition duration-200 ease-in-out"
                      }`}
                    />
                    <TooltipContent>
                      <p>{item.name}</p>
                    </TooltipContent>
                  </TooltipTrigger>
                </Tooltip>
              </TooltipProvider>
            </Link>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 w-full lg:hidden  ">
        <Menubar className="py-8 px-4 flex justify-between items-center z-50 ">
          {menuItems.map((item) => (
            <Link href={item.href} key={item.href}>
              <MenubarMenu>
                <MenubarTrigger aria-label={item.name}>
                  <item.icon
                    className={`w-5 h-5 ${
                      pathname !== item.href && "opacity-40"
                    }`}
                  />
                </MenubarTrigger>
              </MenubarMenu>
            </Link>
          ))}
        </Menubar>
      </div>
    </>
  );
}

{
  /* <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent> */
}
