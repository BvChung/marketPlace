import Nav from "@/components/Nav/Nav";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full">
      <div className="text-white">Side bar</div>
      {children}
    </div>
  );
}
