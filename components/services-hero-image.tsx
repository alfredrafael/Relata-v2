"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import servicesJournal from "@/public/media/services-journal.png";

export default function ServicesHeroImage() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    const hero = image?.parentElement;
    if (!image || !hero) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const bounds = hero.getBoundingClientRect();
      // The extra 96px above the image keeps its edges inside the hero.
      const offset = reducedMotion.matches
        ? 0
        : Math.min(96, Math.max(0, -bounds.top * 0.18));
      image.style.transform = `translate3d(0, ${offset}px, 0)`;
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    reducedMotion.addEventListener("change", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      reducedMotion.removeEventListener("change", scheduleUpdate);
    };
  }, []);

  return (
    <div ref={imageRef} className="absolute -top-24 bottom-0 right-0 w-full motion-safe:will-change-transform md:w-4/5 lg:w-3/4">
      <Image
        src={servicesJournal}
        alt=""
        fill
        priority
        sizes="(min-width: 1024px) 75vw, (min-width: 768px) 80vw, 100vw"
        className="object-cover object-[65%_center] md:object-right"
      />
    </div>
  );
}
