"use client";

import { usePathname } from "next/navigation";
import { Container } from "@/components/craft";
import { siteConfig } from "@/site.config";
import Logo from "@/components/icons/logo";

export function Footer() {
  const pathname = usePathname();
  if (pathname === "/" || pathname === "/contact") return null;
  return (
    <footer className="p-2">
      <Container className="border-t not-prose flex items-center justify-between">
        <span className="text-muted-foreground text-sm flex items-center gap-2">
          &copy; <Logo />
          <span className="text-xs">{new Date().getFullYear()} {siteConfig.site_name}</span>
        </span>
      </Container>
    </footer>
  );
}
