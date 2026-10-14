"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function RelataHeader({ home = false }: { home?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#101314]/85 text-white backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a
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
          </a>
          <nav
            className="hidden items-center gap-9 text-[11px] font-medium uppercase tracking-[0.22em] md:flex"
            aria-label="Main navigation"
          >
            <a className="transition-colors hover:text-[#d4af62]" href={home ? "#about" : "/#about"}>
              About
            </a>
            <a
              className="transition-colors hover:text-[#d4af62]"
              href={home ? "#services" : "/#services"}
            >
              Services
            </a>
            <a
              className="transition-colors hover:text-[#d4af62]"
              href="#contact"
            >
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-[#d4af62] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#101314] transition-transform hover:-translate-y-0.5 md:flex"
          >
            Start a conversation <ArrowUpRight className="size-4" />
          </a>
          <button
            className="md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-5 border-t border-white/10 px-6 py-6 text-xs uppercase tracking-[0.2em] md:hidden">
            <a href={home ? "#about" : "/#about"} onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href={home ? "#services" : "/#services"} onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>
        )}
      </header>
  );
}
