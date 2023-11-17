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
      name: "Hero",
      href: "/hero",
    },
  ];

  return (
    <nav className="bg-dark9 sticky top-0 flex h-16 w-full items-center justify-between px-4">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-md border border-transparent p-1 transition-all hover:border-gray-100"
      >
        <Bars3Icon className="h-6 w-6 text-gray-200" />
      </button>
      <div className="text-base text-blue-600">
        <ul className="flex space-x-4">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                className={`${
                  isActiveLine(link.href, pathname) && "border-blue-500"
                }  border-b border-transparent hover:text-blue-400`}
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <SidePanel open={open} setOpen={setOpen} />
    </nav>
  );
}
