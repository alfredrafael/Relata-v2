import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import RelataHome from "@/components/relata-home";

const thumbnail = {
  url: "https://www.alfredorafael.com/wp-content/uploads/2020/08/P1000149-scaled.jpg",
  alt: "Alfredo Rafael portfolio hero",
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
