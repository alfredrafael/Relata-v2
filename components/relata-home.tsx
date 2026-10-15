"use client";

import { ArrowUpRight } from "lucide-react";
import RelataHeader from "@/components/relata-header";
import RelataContact from "@/components/relata-contact";
import RelataFooter from "@/components/relata-footer";

const services = [
  {
    number: "01",
    tag: "Strategy",
    title: "Communications strategy",
    copy: "Thoughtful strategy to help your organization communicate with clarity and connect with the people who matter.",
  },
  {
    number: "02",
    tag: "Content",
    title: "Content and production",
    copy: "Expressive storytelling and production that bring your message to life and move people to act.",
  },
  {
    number: "03",
    tag: "Creative technology",
    title: "Digital experiences",
    copy: "Creative digital experiences that strengthen your presence and build lasting connections.",
  },
  {
    number: "04",
    title: "Podcast production",
    copy: "From first recording to final distribution, we make audio and video worth pressing play on.",
    tag: "Audio / Video",
  },
];

export default function RelataHome() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <RelataHeader home />

      <section
        id="top"
        className="relative isolate flex min-h-[760px] items-end overflow-hidden bg-[#101314] pt-28 text-white lg:min-h-screen"
      >
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source
            src="/media/relata-hero.mp4"
            type="video/mp4"
          />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(16,19,20,.92)_0%,rgba(16,19,20,.75)_38%,rgba(16,19,20,.4)_72%,rgba(16,19,20,.35)_100%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 pb-20 lg:grid-cols-[1.1fr_.9fr] lg:px-10 lg:pb-24">
          <div className="max-w-3xl">
            <p className="mb-7 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[#d4af62]">
              <span className="size-2 rounded-full bg-[#d4af62]" /> Digital
              communications, reimagined
            </p>
            <h1 className="text-balance text-5xl font-medium leading-[.95] tracking-[-.05em] sm:text-7xl lg:text-[8.2rem]">
              Make your
              <br />
              <em className="font-serif font-normal text-[#d4af62]">
                presence
              </em>{" "}
              felt.
            </h1>
            <div className="mt-10 flex flex-col gap-6 border-l border-[#d4af62]/60 pl-5 sm:flex-row sm:items-start sm:gap-12">
              <p className="max-w-md text-base leading-relaxed text-white/65">
                Relata is a digital media agency for organizations building a
                more connected, more human world.
              </p>
              <a
                href="#contact"
                className="inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white underline decoration-[#d4af62] underline-offset-8"
              >
                Tell us your story{" "}
                <ArrowUpRight className="size-4 text-[#d4af62]" />
              </a>
            </div>
          </div>
          <div className="hidden items-end justify-end lg:flex">
            <p className="max-w-[180px] text-right text-[10px] uppercase leading-relaxed tracking-[0.2em] text-white/45">
              Strategy
              <br />
              Content
              <br />
              Creative technology
            </p>
          </div>
        </div>
        <div className="absolute bottom-8 right-10 hidden text-[10px] uppercase tracking-[0.25em] text-white/45 lg:block">
          Scroll to explore ↓
        </div>
      </section>

      <section
        id="about"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[.75fr_1.25fr] lg:px-10 lg:py-36"
      >
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
          01 / Who we are
        </p>
        <div>
          <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-.04em] sm:text-6xl">
            We promote a{" "}
            <em className="font-serif font-normal text-[#b58d3a]">
              relational
            </em>{" "}
            understanding of the world.
          </h2>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We pair thoughtful strategy with expressive production to help
            corporations, nonprofits, and changemakers communicate with clarity
            — and create powerful, lasting change.
          </p>
        </div>
      </section>

      <section
        id="services"
        className="border-y border-border bg-[#e8e5dc] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-end justify-between gap-5">
            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                02 / What we do
              </p>
              <h2 className="text-4xl font-medium tracking-[-.04em] sm:text-6xl">
                Built to{" "}
                <em className="font-serif font-normal text-[#b58d3a]">move</em>{" "}
                people.
              </h2>
            </div>
            <a href="/services" className="inline-flex shrink-0 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] underline decoration-[#b58d3a] underline-offset-8">All services <ArrowUpRight className="size-4 text-[#b58d3a]" /></a>
          </div>
          <div className="grid border-t border-foreground/20 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="group border-b border-foreground/20 py-8 md:nth-[odd]:border-r md:nth-[odd]:pr-10 md:nth-[even]:pl-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs text-muted-foreground">
                    {service.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {service.tag}
                  </span>
                </div>
                <h3 className="mt-14 text-3xl font-medium capitalize tracking-[-.03em] transition-colors group-hover:text-[#a27b2e]">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  {service.copy}
                </p>
                <ArrowUpRight className="mt-8 size-5 text-[#b58d3a] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <RelataContact />

      <RelataFooter />
    </main>
  );
}
