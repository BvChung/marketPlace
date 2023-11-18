import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-16 flex h-full w-full justify-center px-6">
      {children}
    </div>
  );
}
