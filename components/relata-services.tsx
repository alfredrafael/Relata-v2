import { ArrowDown, ArrowUpRight } from "lucide-react";
import RelataHeader from "@/components/relata-header";
import RelataContact from "@/components/relata-contact";
import RelataFooter from "@/components/relata-footer";

const services = [
  { title: "Video production", tag: "Film / Storytelling", copy: "Bring your message into focus with video that gives people a reason to watch, connect, and act.", items: ["Promotional videos", "Social media videos", "Evergreen videos"] },
  { title: "Social media marketing", tag: "Community / Connection", copy: "Build a consistent presence where your audience already gathers, with content that keeps the conversation going.", items: ["Account management", "Post writing and design", "Content calendars and scheduling"] },
  { title: "Creative direction", tag: "Identity / Expression", copy: "Give your story a clear creative point of view, from the first visual idea to the final production.", items: ["Art direction and design", "Video production", "Brand style guides"] },
  { title: "Editorial services", tag: "Words / Ideas", copy: "Turn complex ideas into clear, compelling stories that sound like you and speak to your audience.", items: ["Writing and revision", "Feature articles and essays", "Earned and paid media"] },
  { title: "Cloud management", tag: "Technology / Collaboration", copy: "Support the everyday connections that make your organization work, with help managing your cloud tools.", items: ["Cloud storage", "Email", "Messaging tools"] },
  { title: "Spokesperson training", tag: "Voice / Presence", copy: "Develop an online presence and personality that make your message recognizable and your brand more human.", items: ["Online presence development", "On-camera personality", "Brand recognition"] },
  { title: "Podcast production", tag: "Audio / Video", copy: "Make your conversations worth pressing play on, with production support that carries your voice to your listeners.", items: ["Audio and video editing", "Mixing", "Distribution"] },
  { title: "Social advertising", tag: "Campaigns / Action", copy: "Put your message in motion with creative that supports your campaigns and gives people a clear next step.", items: ["Logos and brand guides", "Fundraising campaigns", "Key-message creative"] },
];

export default function RelataServices() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-background text-foreground">
      <RelataHeader services />
      <section className="relative isolate overflow-hidden bg-[#101314] px-6 pb-16 pt-44 text-white lg:px-10 lg:pb-24 lg:pt-56" aria-labelledby="services-title">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-24 -z-10 size-[620px] rounded-full border border-[#d4af62]/15 sm:right-[-100px]">
          <div className="absolute inset-16 rounded-full border border-[#d4af62]/15" />
          <div className="absolute inset-32 rounded-full border border-[#d4af62]/15" />
          <div className="absolute inset-48 rounded-full border border-[#d4af62]/15" />
        </div>
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[#d4af62]"><span className="size-2 rounded-full bg-[#d4af62]" /> Our services</p>
          <h1 id="services-title" className="max-w-4xl text-balance text-5xl font-medium leading-[.98] tracking-[-.05em] sm:text-7xl lg:text-[7rem]">Your story.<br />A world of <em className="font-serif font-normal text-[#d4af62]">possibility.</em></h1>
          <div className="mt-12 grid gap-9 border-t border-white/20 pt-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-white/65">From the words you share to the experiences you create, we help your organization communicate with clarity and build lasting connections.</p>
            <a href="#capabilities" className="inline-flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#d4af62]">Explore our services <ArrowDown className="size-4" /></a>
          </div>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-20 bg-[#e8e5dc] px-6 py-20 text-[#101314] lg:px-10 lg:py-28" aria-labelledby="capabilities-title">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-6 lg:grid-cols-[.75fr_1.25fr]">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#62615b]">01 / What we do</p>
            <div><h2 id="capabilities-title" className="text-4xl font-medium leading-tight tracking-[-.04em] sm:text-6xl">Many ways to make<br />a <em className="font-serif font-normal text-[#967126]">meaningful</em> connection.</h2><p className="mt-6 max-w-xl leading-relaxed text-[#62615b]">A single project or a connected mix of services. Start with what you need, and we’ll help bring the pieces together.</p></div>
          </div>
          <div className="grid border-t border-[#101314]/20 md:grid-cols-2">
            {services.map((service, index) => (
              <article key={service.title} className="flex flex-col border-b border-[#101314]/20 py-9 md:odd:border-r md:odd:pr-10 md:even:pl-10 lg:py-12">
                <div className="flex justify-between gap-5 text-[10px] uppercase tracking-[0.18em] text-[#62615b]"><span>0{index + 1}</span><span>{service.tag}</span></div>
                <h3 className="mt-10 text-3xl font-medium tracking-[-.03em] sm:text-4xl">{service.title}</h3>
                <p className="mb-7 mt-5 max-w-lg leading-relaxed text-[#62615b]">{service.copy}</p>
                <ul className="mb-8 space-y-3 text-sm">{service.items.map(item => <li key={item} className="flex items-start gap-3"><span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-[#967126]" />{item}</li>)}</ul>
                <a href="#contact" className="mt-auto inline-flex w-fit items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] underline decoration-[#967126]/50 underline-offset-8 transition-colors hover:text-[#967126]">Let’s talk {service.title.toLowerCase()} <ArrowUpRight className="size-4 shrink-0 text-[#967126]" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[.75fr_1.25fr] lg:px-10 lg:py-32" aria-labelledby="approach-title">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-muted-foreground">02 / A connected approach</p>
        <div><h2 id="approach-title" className="text-4xl font-medium leading-tight tracking-[-.04em] sm:text-6xl">Start with your <em className="font-serif font-normal text-[#b58d3a]">purpose.</em><br />Build from there.</h2><p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">What are you trying to change? Who do you need to reach? We start with your story and your goals, then bring thoughtful strategy, expressive content, and creative technology together around them.</p><a href="#contact" className="mt-9 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] underline decoration-[#b58d3a] underline-offset-8">Tell us what you’re imagining <ArrowUpRight className="size-4 text-[#b58d3a]" /></a></div>
      </section>
      <RelataContact />
      <RelataFooter />
    </main>
  );
}
