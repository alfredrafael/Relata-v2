import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export type RelataPageHeroProps = {
  /** Decorative background; accepts a local asset path or a remote image URL. */
  imgUrl?: string;
  eyebrowText: string;
  /** Accepts markup for line breaks and emphasis; renders inside the page h1. */
  mainText: ReactNode;
  secondaryText: string;
  scrollyText?: { text: string; href: string };
};

/** Page introduction with an optional background image and scroll link. */
export default function RelataPageHero({
  imgUrl,
  eyebrowText,
  mainText,
  secondaryText,
  scrollyText,
}: RelataPageHeroProps) {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#101314] px-6 py-20 text-white lg:px-10 lg:py-28"
      aria-label={eyebrowText}
    >
      {imgUrl && (
        <div className="pointer-events-none absolute inset-0 -z-20" aria-hidden="true">
          <Image src={imgUrl} alt="" fill sizes="100vw" preload className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,19,20,.92)_0%,rgba(16,19,20,.8)_55%,rgba(16,19,20,.7)_100%)]" />
        </div>
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-32 -z-10 size-[640px] rounded-full border border-[#d4af62]/20"
      >
        <div className="absolute inset-16 rounded-full border border-[#d4af62]/15" />
        <div className="absolute inset-32 rounded-full border border-[#d4af62]/10" />
      </div>
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[#d4af62]">
          <span className="size-2 rounded-full bg-[#d4af62]" aria-hidden="true" />
          {eyebrowText}
        </p>
        <h1 className="max-w-4xl text-5xl font-medium leading-[.98] tracking-[-.05em] sm:text-7xl lg:text-[7rem] [&_em]:font-serif [&_em]:font-normal [&_em]:text-[#d4af62]">
          {mainText}
        </h1>
        <div className="mt-12 flex flex-col justify-between gap-8 border-t border-white/20 pt-8 md:flex-row md:items-end">
          <p className="max-w-xl text-lg leading-relaxed text-white/75">{secondaryText}</p>
          {scrollyText && (
            <a
              href={scrollyText.href}
              className="inline-flex min-h-11 w-fit shrink-0 items-center gap-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#d4af62] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af62]"
            >
              {scrollyText.text} <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
