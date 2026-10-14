// Craft Imports
import { Container } from "@/components/craft";

// Next.js Imports
import type { Metadata } from "next";
import { siteConfig } from "@/site.config";

// Components imports
import { ContactForm } from "@/components/contactForm";
import Hero from "@/components/heroVideo";
import Services from "@/components/services";
import About from "@/components/about";
import Ribbon from "@/components/ribbon";
import ContactInfo from "@/components/contactInfo";
import Projects from "@/components/projects";

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
  return (
    <>
      <Hero />
      <div className="-mt-6">
        <Services />
      </div>
      <About />
      <hr className="max-w-[70%] mx-auto" />

      <div className="bg-linear-to-t from-background bg-background/75 pb-16">
        <Projects />
      </div>
      <Ribbon
        ribbonImage="https://www.alfredorafael.com/wp-content/uploads/2020/05/computer-background.png"
        ribbonText="Let's build something great together"
        ribbonSubtext="Reach out to discuss how we can collaborate."
      />
      <Container>
        <div className="flex flex-col md:flex-row md:gap-8 lg:gap-10 py-4">
          <div className="order-2 md:order-1">
            <ContactForm />
          </div>
          <div className="order-1 md:order-2 mb-5 md:mb-0 md:w-1/2 lg:w-2/5">
            <ContactInfo />
          </div>
        </div>
      </Container>
    </>
  );
}
