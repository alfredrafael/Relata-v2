import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import RelataPageHero from "@/components/relata-page-hero";
import { siteConfig } from "@/site.config";

const title = "The team | Relata";
const description =
  "Meet the thinkers, storytellers, and makers behind Relata’s approach to digital communications.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/the-team" },
  openGraph: {
    type: "website",
    url: "/the-team",
    siteName: siteConfig.site_name,
    title,
    description,
  },
  twitter: { card: "summary", title, description },
};

const team = [
  {
    name: "Emilio C. Verde",
    image:
      "https://www.alfredorafael.com/wp-content/uploads/2026/11/Emilio-Verde.jpg",
    role: "Strategy director",
    specialty: "Clarity / Direction",
    bio: "Emilio Verde guides the team with strategic clarity and direction. He ensures that every project aligns with the overarching vision and goals. Lorem Ipsum.",
    color: "#66705D",
  },
  {
    name: "Ryandom Huaitgurl",
    image:
      "https://www.alfredorafael.com/wp-content/uploads/2026/11/Rayndom-Huaitgrl.jpg",
    role: "Creative director",
    specialty: "Identity / Expression",
    bio: "Ryandom turns thoughtful ideas into distinctive visual stories, bringing a curious eye and a clear creative point of view to every project.",
    color: "#8B7054",
  },
  {
    name: "Eyshi Anman",
    image:
      "https://www.oscars.org/sites/oscars/files/honore/jackie-chan.jpg?VersionId=K3a3Z2Fs9mxmcmvs.QGitiUaquHwffU4",
    role: "Content & editorial lead",
    specialty: "Words / Meaning",
    bio: "Eyshi finds the human thread in complex subjects and shapes it into writing that feels clear, considered, and worth reading. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    color: "#586C70",
  },
  {
    name: "Dee E. Ihire",
    image:
      "https://digitalscholar.in/wp-content/uploads/2023/06/indian-youtubers-gaurav-chaudhary.jpg",
    role: "Video & podcast producer",
    specialty: "Sound / Storytelling",
    bio: "Dee brings stories to life through film and audio, pairing careful listening with expressive production from the first conversation to the final cut.",
    color: "#79715F",
  },
  {
    name: "Raphael A. Peacock",
    image:
      "https://www.alfredorafael.com/wp-content/uploads/2026/11/Raphael-Peacock.png",
    role: "Digital experience lead",
    specialty: "Technology / Connection",
    bio: "Raphael builds intuitive digital experiences that make useful connections, bringing design and technology together around the people who use them.",
    color: "#6D626E",
  },
];

export default function TeamPage() {
  return (
    <main className="bg-[#f5f2eb] text-[#101314]">
      <RelataPageHero
        eyebrowText="The team"
        mainText={
          <>
            Different minds.
            <br />
            Shared <em>purpose.</em>
          </>
        }
        secondaryText="We’re thinkers, storytellers, and makers. Connected by curiosity, we bring different perspectives together to help your story move people."
        scrollyText={{ text: "Meet the people", href: "#meet-the-team" }}
      />

      <section
        id="meet-the-team"
        className="scroll-mt-20 px-6 py-20 lg:px-10 lg:py-28"
        aria-labelledby="people-title"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-6 lg:grid-cols-[.75fr_1.25fr]">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#62615b]">
              01 / The people behind the work
            </p>
            <div>
              <h2
                id="people-title"
                className="text-4xl font-medium leading-tight tracking-[-.04em] sm:text-6xl"
              >
                Human connections.
                <br />
                <em className="font-serif font-normal text-[#967126]">
                  Collective
                </em>{" "}
                creativity.
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-[#62615b]">
                Good work starts with people who listen, ask thoughtful
                questions, and care about what you’re trying to say.
              </p>
            </div>
          </div>

          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <article key={member.name} aria-labelledby={`member-${index}`}>
                <div
                  className="relative isolate mb-6 aspect-square overflow-hidden rounded-sm"
                  style={{ backgroundColor: member.color }}
                >
                  <Image
                    src={member.image}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 384px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#101314]/80 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-16 -right-12 size-64 rounded-full border border-white/25"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-8 -right-4 size-48 rounded-full border border-white/20"
                  />
                  <span className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[.2em] text-white">
                    {member.specialty}
                  </span>
                </div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[.16em] text-[#795a1d]">
                  {member.role}
                </p>
                <h3
                  id={`member-${index}`}
                  className="text-3xl font-medium tracking-[-.03em]"
                >
                  {member.name}
                </h3>
                <p className="mt-4 border-t border-[#101314]/15 pt-4 text-sm leading-relaxed text-[#62615b]">
                  {member.bio}
                </p>
              </article>
            ))}
            <div className="flex flex-col justify-center rounded-sm border border-[#101314]/20 p-8 lg:p-10">
              <p className="mb-6 text-[10px] font-bold uppercase tracking-[.2em] text-[#62615b]">
                Your story comes next
              </p>
              <h3 className="text-3xl font-medium leading-tight tracking-[-.03em]">
                A fresh perspective.
                <br />A shared ambition.
              </h3>
              <p className="my-6 text-sm leading-relaxed text-[#62615b]">
                Tell us what you have in mind. We’ll bring the right mix of
                people and ideas to help move it forward.
              </p>
              <Link
                href="/contact"
                className="inline-flex min-h-11 w-fit items-center gap-3 text-xs font-bold uppercase tracking-[.14em] underline decoration-[#967126] underline-offset-8 transition-colors hover:text-[#795a1d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#795a1d]"
              >
                Let’s talk{" "}
                <ArrowUpRight
                  className="size-4 text-[#967126]"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
