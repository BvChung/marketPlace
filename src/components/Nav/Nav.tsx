"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import SidePanel from "./SidePanel";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActiveLine(href: string, currentPath: string) {
    if (href === "/" && href === currentPath) {
      return true;
    }

    if (href !== "/" && currentPath === "/") {
      return false;
    }

    return href.includes(currentPath);
  }

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Marketplace",
      href: "/marketplace",
    },
  ];

  return (
    <nav className="sticky top-0 flex h-16 w-full items-center justify-between border-b border-gray-300 bg-white px-6">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-md border border-transparent p-1 transition-all hover:border-gray-700"
      >
        <Bars3Icon className="h-6 w-6 text-black" />
      </button>
      <div className="flex items-center">
        <ul className="mr-6 flex gap-6 text-base text-gray-600">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                className={`${
                  isActiveLine(link.href, pathname) &&
                  "border-blue-600 text-blue-600"
                } border-b-2 border-transparent pb-[6px] font-medium hover:text-blue-500`}
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/signin"
          className="rounded-md bg-blue-500 px-5 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        >
          Sign In
        </Link>
      </div>

      <SidePanel open={open} setOpen={setOpen} />
    </nav>
  );
}
