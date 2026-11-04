"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navbarData } from "@/app/data/navbarData";

export default function RelataHeader() {
  const pathname = usePathname();
  const home = pathname === "/";
  const services = pathname === "/services";
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState({ pathname: "", href: "" });

  useEffect(() => {
    const sections = home
      ? [
          { id: "top", href: "/" },
          { id: "about", href: "/#about" },
          { id: "services", href: "/services" },
          { id: "contact", href: "/contact" },
        ]
      : services
        ? [{ id: "contact", href: "/contact" }]
        : [];
    let frame = 0;

    const update = () => {
      frame = 0;
      let href = pathname;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        // Switch as a section reaches just below the fixed navbar.
        if (element && element.getBoundingClientRect().top <= 105) {
          href = section.href;
        }
      }
      setActiveSection((current) =>
        current.pathname === pathname && current.href === href
          ? current
          : { pathname, href },
      );
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [pathname, home, services]);

  const activeHref =
    activeSection.pathname === pathname ? activeSection.href : pathname;
  const currentLocation = (href: string) => {
    if (href !== activeHref) return undefined;
    return href === pathname ? "page" : "location";
  };
  const navLinkClassName = (href: string) =>
    `transition-colors hover:text-[#d4af62]${href === activeHref ? " text-[#d4af62]" : ""}`;

  const resolveHref = (href: string) => {
    const [path, hash] = href.split("#");
    if (!hash) {
      // On pages with an inline contact section, jump to the anchor instead
      if (href === "/contact" && (home || services || pathname === href)) {
        return "#contact";
      }
      return href;
    }
    // Same-page anchor when already on the target page
    return pathname === path ? `#${hash}` : href;
  };

  const contactHref = resolveHref("/contact");
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
            {navbarData.map((item) => (
              <Link
                key={item.label}
                className={navLinkClassName(item.href)}
                href={resolveHref(item.href)}
                aria-current={currentLocation(item.href)}
              >
                {item.label}
              </Link>
            ))}
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
            {navbarData.map((item) => (
              <Link
                key={item.label}
                className={navLinkClassName(item.href)}
                href={resolveHref(item.href)}
                aria-current={currentLocation(item.href)}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
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
