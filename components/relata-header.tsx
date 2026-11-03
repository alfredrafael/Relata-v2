"use client";

import Link from "next/link";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function RelataHeader() {
  const pathname = usePathname();
  const home = pathname === "/";
  const services = pathname === "/services";
  const contactHref =
    home || services || pathname === "/contact" ? "#contact" : "/contact";
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#101314]/85 text-white backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <Link
            href={home ? "#top" : "/"}
            className="flex items-center gap-3"
            aria-label="Relata home"
          >
            <img
              src="/media/relata-logo.png"
              alt="Relata Digital"
              width={6200}
              height={1928}
              id="logo"
              style={{ height: "3rem", width: "auto" }}
            />
          </Link>
          <nav
            className="hidden items-center gap-9 text-[11px] font-medium uppercase tracking-[0.22em] lg:flex"
            aria-label="Main navigation"
          >
            <Link
              className="transition-colors hover:text-[#d4af62]"
              href={home ? "#about" : "/#about"}
            >
              About
            </Link>
            <Link
              className="transition-colors hover:text-[#d4af62]"
              href="/services"
              aria-current={services ? "page" : undefined}
            >
              Services
            </Link>
            {/* <Link
              className="transition-colors hover:text-[#d4af62]"
              href="/the-team"
              aria-current={pathname === "/the-team" ? "page" : undefined}
            >
              The team
            </Link> */}
            <Link
              className="transition-colors hover:text-[#d4af62]"
              href={contactHref}
            >
              Contact
            </Link>
          </nav>
          <Link
            href={contactHref}
            className="hidden items-center gap-2 rounded-full bg-[#d4af62] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#101314] transition-transform hover:-translate-y-0.5 lg:flex"
          >
            Start a conversation <ArrowUpRight className="size-4" />
          </Link>
          <button
            className="lg:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-5 border-t border-white/10 px-6 py-6 text-xs uppercase tracking-[0.2em] lg:hidden">
            <Link
              href={home ? "#about" : "/#about"}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              aria-current={services ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            {/* <Link href="/the-team" aria-current={pathname === "/the-team" ? "page" : undefined} onClick={() => setMenuOpen(false)}>
              The team
            </Link> */}
            <Link href={contactHref} onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </nav>
        )}
      </header>
      {!home &&
        !services &&
        pathname !== "/contact" &&
        pathname !== "/the-team" &&
        pathname !== "/style-guide" && (
          <div className="h-20" aria-hidden="true" />
        )}
    </>
  );
}
