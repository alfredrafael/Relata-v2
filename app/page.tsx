import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import RelataHome from "@/components/relata-home";

const thumbnail = {
  url: "https://wp-media.petersons.com/blog/wp-content/uploads/2018/02/10125100/iStock-603997846.jpg",
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
  return <RelataHome />;
}
