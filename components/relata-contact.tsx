"use client";

import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight } from "lucide-react";

export default function RelataContact({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? "h1" : "h2";
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const sending = useRef(false);

  async function sendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;

    const form = event.currentTarget;
    setSubmitError("");

    sending.current = true;
    setIsSubmitting(true);
    try {
      const data = new FormData(form);
      const name = String(data.get("user_name") ?? "").trim();
      const [firstName, ...lastName] = name.split(/\s+/);
      const email = String(data.get("user_email") ?? "").trim();
      const phone = String(data.get("user_phone") ?? "").trim();

      const configResponse = await fetch("/api/contact-config", { cache: "no-store" });
      if (!configResponse.ok) {
        setSubmitError("We couldn't send your message right now. Please try again later.");
        return;
      }
      const { serviceId, templateId, publicKey } = await configResponse.json();
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Invalid contact configuration response");
      }

      await emailjs.send(serviceId, templateId, {
        user_name: name,
        user_email: email,
        user_phone: phone,
        message: String(data.get("message") ?? ""),
        // Keep the original EmailJS template fields populated after the redesign.
        userFirstName: firstName,
        userLastName: lastName.join(" "),
        userEmail: email,
        userPhone: phone,
      }, { publicKey });
      form.reset();
      setSubmitted(true);
    } catch {
      setSubmitError("Your message wasn't sent. Please try again.");
    } finally {
      sending.current = false;
      setIsSubmitting(false);
    }
  }
  return (
      <section
        id="contact"
        className={standalone ? "bg-[#101314] px-6 pb-24 pt-40 text-white lg:px-10 lg:pb-32 lg:pt-48" : "bg-[#101314] px-6 py-24 text-white lg:px-10 lg:py-32"}
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#d4af62]">
              {standalone ? "Contact / Let’s connect" : "03 / Let’s connect"}
            </p>
            <Heading className="text-5xl font-medium leading-[.95] tracking-[-.05em] sm:text-7xl">
              Have something
              <br />
              <em className="font-serif font-normal text-[#d4af62]">
                worth saying?
              </em>
            </Heading>
            <p className="mt-8 max-w-sm leading-relaxed text-white/55">
              Tell us what you&apos;re building, changing, or imagining.
              We&apos;ll meet you there.
            </p>
          </div>
          <div>
            {submitted ? (
              <div role="status" className="border-t border-white/20 py-8">
                <p className="text-2xl">
                  Thank you. We&apos;ll be in touch shortly.
                </p>
                <p className="mt-3 text-white/55">
                  Your message has been received! Thank you.
                </p>
              </div>
            ) : (
              <form
                className="border-t border-white/20"
                onSubmit={sendEmail}
                aria-busy={isSubmitting}
              >
                <label className="block border-b border-white/20 py-5">
                  <span className="sr-only">Your name</span>
                  <input
                    name="user_name"
                    autoComplete="name"
                    required
                    className="w-full bg-transparent text-xl outline-none placeholder:text-white/35"
                    placeholder="Your name"
                  />
                </label>
                <label className="block border-b border-white/20 py-5">
                  <span className="sr-only">Your email</span>
                  <input
                    name="user_email"
                    autoComplete="email"
                    required
                    type="email"
                    className="w-full bg-transparent text-xl outline-none placeholder:text-white/35"
                    placeholder="Email address"
                  />
                </label>
                <label className="block border-b border-white/20 py-5">
                  <span className="sr-only">Your phone number (optional)</span>
                  <input
                    name="user_phone"
                    type="tel"
                    autoComplete="tel"
                    className="w-full bg-transparent text-xl outline-none placeholder:text-white/35"
                    placeholder="Phone number (optional)"
                  />
                </label>
                <label className="block border-b border-white/20 py-5">
                  <span className="sr-only">Your message</span>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    className="w-full resize-none bg-transparent text-xl outline-none placeholder:text-white/35"
                    placeholder="What are you working on?"
                  />
                </label>
                {submitError && <p role="alert" className="mt-5 text-red-300">{submitError}</p>}
                <button type="submit" disabled={isSubmitting} className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#d4af62] px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101314] transition-transform hover:-translate-y-1 disabled:cursor-wait disabled:opacity-60">
                  {isSubmitting ? "Sending..." : "Send message"} <ArrowUpRight className="size-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
  );
}
