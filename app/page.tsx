import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RelataContact from "@/components/relata-contact";
import { homepageServices } from "@/app/data/homepageServices";
import HeroVideo from "@/components/hero-video";

const thumbnail = {
  url: "https://www.alfredorafael.com/wp-content/uploads/2026/11/Relata-Thumbnail.png",
  alt: "Relata Digital Presence",
};

export const metadata: Metadata = {
  title: siteConfig.site_name,
  description: siteConfig.site_description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.site_name,
    title: siteConfig.site_name,
    description: siteConfig.site_description,
    images: [thumbnail],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.site_name,
    description: siteConfig.site_description,
    images: [thumbnail],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section
        id="top"
        className="relative isolate flex min-h-[760px] items-end overflow-hidden bg-[#101314] pt-28 text-white lg:min-h-screen"
      >
        <HeroVideo />
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
              <Link
                href="#contact"
                className="inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white underline decoration-[#d4af62] underline-offset-8"
              >
                Tell us your story{" "}
                <ArrowUpRight className="size-4 text-[#d4af62]" />
              </Link>
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
            We depend on each other – and we flourish when we understand one
            another, recognize each other's humanity, and take action to promote
            our collective well-being.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            <strong>
              Relata is a strategic communications and digital media agency
            </strong>{" "}
            that helps mission-driven organizations turn their values into
            meaningful connections and lasting impact. Through communications
            strategy, digital storytelling, creative production, and in-person
            and remote training sessions, we help our clients build stronger
            relationships with the people and communities they serve
          </p>
          <hr className="my-10 border-t border-[#b58d3a]/20" />

          <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-.04em] sm:text-6xl">
            Your{" "}
            <em className="font-serif font-normal text-[#b58d3a]">mission</em>{" "}
            matters
          </h2>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Whether you run a start-up, non-profit or NGO, we achieve digital
            communications excellence thru professionalism, experience, and a
            relational approach with all of our clients.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            It is our privilege to make our world more peaceful, respectful, and
            interconnected through strategic digital communications.
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
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                Our four core services.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] underline decoration-[#b58d3a] underline-offset-8"
            >
              All services <ArrowUpRight className="size-4 text-[#b58d3a]" />
            </Link>
          </div>
          <div className="grid border-t border-foreground/20 md:grid-cols-2">
            {homepageServices.map((service) => (
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
                <h3 className="mt-14 flex items-center gap-3 text-3xl font-medium capitalize tracking-[-.03em] transition-colors group-hover:text-[#a27b2e]">
                  <service.icon
                    className="size-6 shrink-0 text-[#967126]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <span>{service.title}</span>
                </h3>
                <p className="mt-4 mb-6 max-w-md text-base leading-relaxed text-muted-foreground">
                  {service.copy}
                </p>
                {/* <ArrowUpRight className="mt-8 size-5 text-[#b58d3a] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /> */}
              </article>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-[#d4af62] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#101314] transition-transform hover:-translate-y-0.5"
            >
              All services <ArrowUpRight className="size-4 text-[#000000]" />
            </Link>
          </div>
        </div>
      </section>

      <RelataContact />

      {/* <section
        aria-labelledby="people-first-title"
        className="relative isolate overflow-hidden bg-[#e8e5dc] px-6 py-16 text-[#101314] lg:px-10 lg:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 -z-10 size-[420px] rounded-full border border-[#967126]/20"
        >
          <div className="absolute inset-12 rounded-full border border-[#967126]/15" />
          <div className="absolute inset-24 rounded-full border border-[#967126]/15" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#62615b]">
            04 / Behind every connection
          </p>
          <div className="max-w-3xl">
            <h2
              id="people-first-title"
              className="text-4xl font-medium leading-tight tracking-[-.04em] sm:text-6xl"
            >
              People first.{" "}
              <em className="font-serif font-normal text-[#967126]">Always.</em>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#62615b] sm:text-lg">
              Behind every story is a person. Behind every project, our team
              ready to listen, ask better questions, and make something
              meaningful together.
            </p>
            <Link
              href="/the-team"
              className="mt-6 inline-flex min-h-11 items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] underline decoration-[#967126] underline-offset-8 transition-colors hover:text-[#795a1d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#795a1d]"
            >
              Meet the team{" "}
              <ArrowUpRight
                className="size-4 text-[#967126]"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section> */}
    </main>
  );
}
