"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function ContactHero() {
  return (
    <section
      data-dark-card="true"
      className="relative isolate w-full bg-neutral-950 pt-36 xs:pt-40 sm:pt-44 lg:pt-48 pb-16 sm:pb-20 lg:pb-24 overflow-hidden text-center flex items-center justify-center min-h-[380px] sm:min-h-[420px] lg:min-h-[460px]"
      aria-label="Contact Header"
    >
      {/* 1. Cinematic Photographic Background Image (Layer 0) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact-hero-banner.jpg"
          alt="Digital Horizon Solutions Strategic Meeting"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.70] contrast-[1.15]"
        />
      </div>

      {/* 2. Deep Cinematic Obsidian & Gold Ambient Overlay (Layer 10) */}
      <div
        className="absolute inset-0 z-10 bg-neutral-950/75 dark:bg-neutral-950/80 bg-gradient-to-b from-neutral-950/85 via-neutral-950/70 to-neutral-950/90"
        aria-hidden="true"
      />

      {/* Subtle Warm Horizon Lighting Glow in the Center (Layer 10) */}
      <div
        className="pointer-events-none absolute inset-0 z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, rgba(212, 175, 55, 0.25) 0%, rgba(229, 130, 36, 0.12) 50%, transparent 80%)",
          }}
        />
      </div>

      {/* 3. Foreground Content (Layer 20 - Always Above Image & Overlay) */}
      <Container size="narrow" className="relative z-20 flex flex-col items-center">
        {/* Primary Heading with Explicit Forced Contrast Classes */}
        <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight !text-white text-white-fixed leading-[1.08] drop-shadow-md">
          Contact{" "}
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text !text-transparent font-black drop-shadow-sm">
            Us
          </span>
        </h1>

        {/* Clean Subtitle with 100% High-Contrast Legibility */}
        <p className="mt-4 sm:mt-5 text-sm xs:text-base sm:text-lg !text-neutral-100 text-white-fixed max-w-xl mx-auto leading-relaxed font-medium drop-shadow-md">
          Start the conversation to build your digital advantage, scale your operations, and establish lasting business growth.
        </p>
      </Container>
    </section>
  );
}
