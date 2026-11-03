"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Check, LoaderCircle } from "lucide-react";

const fieldClassName =
  "mt-3 min-h-12 w-full rounded-lg border border-white/20 bg-[#101314]/60 px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-white/40 hover:border-white/35 focus:border-[#d4af62] focus:ring-2 focus:ring-[#d4af62]/25 [&:user-invalid]:border-red-300 motion-reduce:transition-none";

function requiredFieldsAreValid(form: HTMLFormElement) {
  return Array.from(
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
      "input[required], textarea[required]",
    ),
  ).every((field) => field.value.trim().length > 0 && field.validity.valid);
}

export default function RelataContact({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  const Heading = standalone ? "h1" : "h2";
  const [canSubmit, setCanSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const sending = useRef(false);

  async function sendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;

    const form = event.currentTarget;
    if (!requiredFieldsAreValid(form)) return;
    setSubmitError("");

    sending.current = true;
    setIsSubmitting(true);
    try {
      const data = new FormData(form);
      const name = String(data.get("user_name") ?? "").trim();
      const [firstName, ...lastName] = name.split(/\s+/);
      const email = String(data.get("user_email") ?? "").trim();
      const phone = String(data.get("user_phone") ?? "").trim();

      const configResponse = await fetch("/api/contact-config", {
        cache: "no-store",
      });
      if (!configResponse.ok) {
        setSubmitError(
          "We couldn't send your message right now. Please try again later.",
        );
        return;
      }
      const { serviceId, templateId, publicKey } = await configResponse.json();
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Invalid contact configuration response");
      }

      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: name,
          user_email: email,
          user_phone: phone,
          message: String(data.get("message") ?? ""),
          // Keep the original EmailJS template fields populated after the redesign.
          userFirstName: firstName,
          userLastName: lastName.join(" "),
          userEmail: email,
          userPhone: phone,
        },
        { publicKey },
      );
      form.reset();
      setCanSubmit(false);
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
      className={
        standalone
          ? "bg-[#101314] px-6 pb-24 pt-40 text-white lg:px-10 lg:pb-32 lg:pt-48"
          : "bg-[#101314] px-6 py-24 text-white lg:px-10 lg:py-32"
      }
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
            <div
              role="status"
              className="rounded-2xl border border-[#d4af62]/30 bg-white/[0.03] p-8 sm:p-10"
            >
              <span className="mb-6 inline-flex size-12 items-center justify-center rounded-full border border-[#d4af62]/40 bg-[#d4af62]/10 text-[#d4af62]">
                <Check className="size-5" aria-hidden="true" />
              </span>
              <p className="text-2xl">
                Thank you. We&apos;ll be in touch shortly.
              </p>
              <p className="mt-3 text-white/55">
                Your message is on its way to our team. We look forward to
                hearing more about your project.
              </p>
            </div>
          ) : (
            <form
              className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 sm:p-10"
              onSubmit={sendEmail}
              onInput={(event) =>
                setCanSubmit(requiredFieldsAreValid(event.currentTarget))
              }
              onChange={(event) =>
                setCanSubmit(requiredFieldsAreValid(event.currentTarget))
              }
              aria-busy={isSubmitting}
            >
              <div className="mb-8 flex flex-wrap items-baseline justify-between gap-3 border-b border-white/15 pb-6">
                <h3 className="text-xl font-medium tracking-tight">
                  Tell us a little about it.
                </h3>
                {/* <p className="text-xs text-white/60">All fields required except phone</p> */}
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-sm font-medium text-white/80">
                  Your name
                  <input
                    name="user_name"
                    autoComplete="name"
                    required
                    className={fieldClassName}
                    placeholder="Full name"
                  />
                </label>
                <label className="block text-sm font-medium text-white/80">
                  Email address
                  <input
                    name="user_email"
                    autoComplete="email"
                    required
                    type="email"
                    className={fieldClassName}
                    placeholder="you@organization.com"
                  />
                </label>
                <label className="block text-sm font-medium text-white/80 sm:col-span-2">
                  Phone number{" "}
                  <span className="ml-1 font-normal text-white/50">
                    (optional)
                  </span>
                  <input
                    name="user_phone"
                    type="tel"
                    autoComplete="tel"
                    className={fieldClassName}
                    placeholder="Your preferred contact number"
                  />
                </label>
                <label className="block text-sm font-medium text-white/80 sm:col-span-2">
                  What are you working on?
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className={`${fieldClassName} min-h-36 resize-y`}
                    placeholder="Share your idea, your goals, or where you could use a hand…"
                  />
                </label>
              </div>
              <p
                id="contact-required-fields"
                className="mt-6 text-sm leading-relaxed text-white/60"
              >
                {canSubmit
                  ? "Ready when you are. Let’s start a conversation."
                  : "Add your name, a valid email address, and a message to send."}
              </p>
              {submitError && (
                <p
                  role="alert"
                  className="mt-5 rounded-lg border border-red-300/30 bg-red-300/10 px-4 py-3 text-sm leading-relaxed text-red-200"
                >
                  {submitError}
                </p>
              )}
              <button
                type="submit"
                disabled={!canSubmit || isSubmitting}
                aria-describedby="contact-required-fields"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#d4af62] px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#101314] transition-[transform,background-color] enabled:hover:-translate-y-0.5 enabled:hover:bg-[#e1be77] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4af62] disabled:cursor-not-allowed disabled:opacity-40 motion-reduce:transform-none motion-reduce:transition-none sm:w-auto"
              >
                {isSubmitting ? "Sending…" : "Send message"}
                {isSubmitting ? (
                  <LoaderCircle
                    className="size-4 animate-spin motion-reduce:animate-none"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
