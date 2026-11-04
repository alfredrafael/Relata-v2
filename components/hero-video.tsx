"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const hero = layer?.parentElement;
    if (!layer || !hero) return;

    const motion = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
    );
    let frame = 0;

    const update = () => {
      frame = 0;
      const offset = motion.matches
        ? Math.min(80, Math.max(0, -hero.getBoundingClientRect().top * 0.15))
        : 0;
      layer.style.transform = `translate3d(0, ${offset}px, 0)`;
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    // Attach scroll work only while desktop motion is enabled.
    const syncMotion = () => {
      window.removeEventListener("scroll", scheduleUpdate);
      if (motion.matches) {
        window.addEventListener("scroll", scheduleUpdate, { passive: true });
      }
      scheduleUpdate();
    };

    syncMotion();
    motion.addEventListener("change", syncMotion);
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      motion.removeEventListener("change", syncMotion);
    };
  }, []);

  return (
    <div
      ref={layerRef}
      className="pointer-events-none absolute inset-0 md:motion-safe:-top-[80px] md:motion-safe:will-change-transform"
    >
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/media/relata-hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
