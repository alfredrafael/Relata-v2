import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";

const linkClassName =
  "inline-flex min-h-11 w-fit items-center text-sm text-white/70 transition-colors hover:text-[#d4af62] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af62]";

export default function RelataFooter() {
  return (
    <footer className="border-t border-white/15 bg-[#101314] text-white">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-10 lg:pt-24">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/15 pb-12 sm:flex-row sm:items-end lg:pb-16">
          <div>
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.24em] text-[#d4af62]">
              A little connection goes a long way
            </p>
            <h2 className="max-w-2xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Good stories bring us{" "}
              <em className="font-serif font-normal text-[#d4af62]">
                together.
              </em>
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center gap-3 rounded-full border border-[#d4af62]/60 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#d4af62] transition-colors hover:bg-[#d4af62] hover:text-[#101314] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af62]"
          >
            Let’s connect <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-10 py-14 md:grid-cols-2 md:gap-x-16 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-x-16 lg:py-20">
          <div>
            <Link
              href="/"
              aria-label="Relata home"
              className="inline-flex rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af62]"
            >
              <img
                src="/media/relata-logo.png"
                alt="Relata Digital"
                loading="lazy"
                decoding="async"
                width={6200}
                height={1928}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Thoughtful strategy. Expressive content. Creative technology.
              Digital communications for a more connected world.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="border-t border-white/15 pt-10 md:border-l md:border-t-0 md:pl-12 md:pt-0 lg:pl-16"
          >
            <h3 className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-white/60">
              Explore
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/#about" className={linkClassName}>
                  About Relata
                </Link>
              </li>
              <li>
                <Link href="/services" className={linkClassName}>
                  Our services
                </Link>
              </li>
              {/* <li>
                <Link href="/the-team" className={linkClassName}>
                  The team
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className={linkClassName}>
                  Start a conversation
                </Link>
              </li>
            </ul>
          </nav>

          <div className="border-t border-white/15 pt-10 md:col-span-2 lg:col-span-1 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-white/60">
              Our perspective
            </p>
            <p className="max-w-xs text-md leading-relaxed tracking-tight text-white/75">
              A more human world starts with how we connect. Lets build
              meaningful relationships through thoughtful digital experiences.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Relata LLC. All rights reserved.</p>
          <a href="#page-top" className={`${linkClassName} gap-3 text-xs`}>
            Back to top{" "}
            <ArrowUp className="size-4 text-[#d4af62]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
