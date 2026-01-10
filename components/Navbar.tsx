"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/founders", label: "Founders" },
  { href: "/guide", label: "Guide" },
  { href: "/pricing", label: "Pricing" },
  { href: "/login", label: "Log In" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur">
      <div className="flex h-16 items-center justify-between">
        <Link href="/">
          <Image
            src="/finta-logo-light.svg"
            alt="Finta Logo"
            width={110}
            height={32}
          />
        </Link>

        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
            >
              {link.label}
            </Link>
          ))}

          <Button className="rounded-lg px-5 bg-[#2679F3] hover:bg-[#155BCB]">
            Get started
          </Button>
        </nav>
      </div>
    </header>
  );
}
