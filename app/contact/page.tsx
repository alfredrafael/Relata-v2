import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import RelataHeader from "@/components/relata-header";
import RelataContact from "@/components/relata-contact";
import RelataFooter from "@/components/relata-footer";

const title = "Contact | Relata";
const description =
  "Tell Relata what you're building, changing, or imagining. Let's start a conversation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "/contact",
    siteName: siteConfig.site_name,
    title,
    description,
  },
  twitter: { card: "summary", title, description },
};

export default function Contact() {
  return (
    <main
      id="top"
      className="min-h-screen overflow-hidden bg-[#101314] text-white"
    >
      <RelataHeader />
      <RelataContact standalone />
      <RelataFooter />
    </main>
  );
}
