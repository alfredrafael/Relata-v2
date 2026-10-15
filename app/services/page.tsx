import type { Metadata } from "next";
import RelataServices from "@/components/relata-services";
import { siteConfig } from "@/site.config";

const title = "Services | Relata";
const description = "Explore Relata’s video production, social media marketing, creative direction, editorial, cloud management, spokesperson training, podcast production, and advertising services.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { type: "website", url: "/services", siteName: siteConfig.site_name, title, description },
  twitter: { card: "summary", title, description },
};

export default function ServicesPage() {
  return <RelataServices />;
}
