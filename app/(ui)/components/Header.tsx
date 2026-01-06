"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "WHAT WE DO", href: "#what-we-do" },
  { label: "OUR RESULTS", href: "#results" },
  { label: "CASE STUDIES", href: "#case-studies" },
];

const linkBase =
  "relative px-3 py-2 text-black text-[16px] font-medium leading-none tracking-[0.16px] uppercase transition-all duration-300";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="relative z-50 w-full bg-[#F3F757] py-4">
      <div className="page-width py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-50">
            <Image
              src="/551-logo.webp"
              alt="551 Growth Lab"
              width={532}
              height={143}
              priority
              className="max-w-[133px]"
            />
          </Link>
          <nav className="hidden md:flex gap-2">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`${linkBase} group ${
                    active ? "font-semibold scale-[1.03]" : ""
                  }`}
                >
                  <span
                    className={`absolute inset-0 rounded-full bg-black/10 transition-all duration-400 ease-[cubic-bezier(.4,0,.2,1)] ${
                      active
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
                    }`}
                  />
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative z-50 w-6 h-5"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute h-0.5 w-full bg-black transition-transform duration-300 ${
                open ? "rotate-45 top-2" : "top-0"
              }`}
            />
            <span
              className={`absolute h-0.5 w-full bg-black transition-opacity duration-300 top-2 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-full bg-black transition-transform duration-300 ${
                open ? "-rotate-45 top-2" : "top-4"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-[#F3F757] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-6">
          {links.map((link, index) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`${linkBase} text-lg relative z-10
                  ${active ? "font-semibold scale-105" : ""}
                  transform transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]
                  ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <span
                  className={`absolute inset-0 rounded-full bg-black/10 transition-all duration-400 ${
                    active ? "opacity-100 scale-100" : "opacity-0"
                  }`}
                />
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
