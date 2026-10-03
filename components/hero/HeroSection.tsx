"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LiquidGlassButton } from "@/components/ui/LiquidGlassButton";
import { useQuote } from "@/components/cta/QuoteContext";
import { HeroBubbleField } from "./HeroBubbleField";
import { FrostedGlassOverlay } from "./FrostedGlassOverlay";
import { HeroServiceCard, ServiceBubbleData } from "./HeroServiceCard";
import { Container } from "@/components/ui/Container";
import { Star, Sparkles, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  const { openQuote } = useQuote();
  const [selectedService, setSelectedService] = useState<ServiceBubbleData | null>(null);

  return (
    <section
      className="relative min-h-[auto] lg:min-h-[90vh] pt-14 xs:pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 lg:pb-14 flex items-center justify-center overflow-hidden"
      aria-label="Hero Introduction"
    >
      {/* 1. Background Cinematic Atmospheric Lighting (Adaptive Light/Dark) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        {/* Top Horizon Ambient Lighting */}
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(circle at 50% -10%, rgba(229, 130, 36, 0.16) 0%, rgba(212, 175, 55, 0.10) 45%, transparent 75%)",
          }}
        />
        {/* Ambient atmospheric diffuse lighting orbs (100% Round Spherical Glows) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] aspect-square bg-gold-400/[0.08] rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] aspect-square bg-amber-600/[0.08] rounded-full blur-[130px]" />
        <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] aspect-square bg-sky-600/[0.05] rounded-full blur-[140px]" />
      </div>

      {/* 2. Interactive Liquid Glass Service Bubble Field (Z-Index 10 - In Background) */}
      <HeroBubbleField onSelectService={(service) => setSelectedService(service)} />

      {/* 3. Frosted Rainy Window Glass Overlay (Z-Index 20 - Between Bubbles & Text) */}
      <FrostedGlassOverlay />

      {/* 4. Split Hero Content Layer (Z-Index 30 - 2-Column Architecture Synchronized with Global Container Grid) */}
      <Container className="relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* ================================================================= */}
          {/* ================================================================= */}
          {/* LEFT COLUMN: Content, Headline, Dual CTAs & Stats Bar (Col-Span 7)*/}
          {/* ================================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pointer-events-auto w-full">
            {/* Top Review & Star Rating Pill (1:1 with reference image) */}
            <div className="inline-flex items-center gap-1.5 xs:gap-2 px-3 xs:px-3.5 py-1 xs:py-1.5 rounded-full border border-neutral-300/90 dark:border-white/10 bg-white/95 dark:bg-white/[0.04] backdrop-blur-md mb-3 xs:mb-4 sm:mb-5 shadow-sm">
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 xs:w-3.5 h-3 xs:h-3.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-[11px] xs:text-xs font-bold text-neutral-900 dark:text-neutral-100">
                5.0 Star Rated
              </span>
            </div>

            {/* Primary Headline (Left-aligned, bold editorial impact) */}
            <h1 className="text-[28px] xs:text-[32px] sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-neutral-950 dark:text-white leading-[1.08] sm:leading-[1.05]">
              Your Business <br />
              <span className="text-gold-gradient">Beyond Today.</span>
            </h1>

            {/* Supporting Value Proposition Copy & Capabilities Deck */}
            <div className="mt-3 xs:mt-4 sm:mt-5 w-full max-w-2xl">
              <p className="text-[13px] xs:text-sm sm:text-base lg:text-lg text-neutral-800 dark:text-neutral-300 leading-snug sm:leading-relaxed font-normal sm:font-medium">
                Digital systems engineered for real business growth. We build bespoke solutions across:
              </p>

              {/* 4-Pillar Architectural Capability Badges (Compact, Responsive, No Collisions) */}
              <div className="mt-2.5 xs:mt-3 sm:mt-3.5 flex flex-wrap items-center gap-1.5 xs:gap-2 sm:gap-2.5">
                <span className="hero-gold-label text-[11px] xs:text-xs sm:text-[13px] py-1 px-2.5 sm:px-3">
                  <span className="hidden sm:inline">high-performance&nbsp;</span>web applications
                </span>
                <span className="hero-gold-label-alt text-[11px] xs:text-xs sm:text-[13px] py-1 px-2.5 sm:px-3">
                  <span className="hidden sm:inline">dominate local&nbsp;</span>Google Business
                </span>
                <span className="hero-silver-label text-[11px] xs:text-xs sm:text-[13px] py-1 px-2.5 sm:px-3">
                  <span className="hidden sm:inline">scale&nbsp;</span>e-commerce
                </span>
                <span className="hero-yellow-label text-[11px] xs:text-xs sm:text-[13px] py-1 px-2.5 sm:px-3">
                  <span className="hidden sm:inline">automate operations with&nbsp;</span>intelligent AI
                </span>
              </div>
            </div>

            {/* Action Buttons Group (Liquid Glass CTA System) */}
            <div className="mt-4 xs:mt-5 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 w-full sm:w-auto">
              <LiquidGlassButton
                variant="primary"
                onClick={() => openQuote()}
                className="w-full sm:w-auto"
              >
                Get Free Audit
              </LiquidGlassButton>

              <LiquidGlassButton
                variant="secondary"
                href="#services"
                arrowType="right"
                className="w-full sm:w-auto"
              >
                Explore Services
              </LiquidGlassButton>
            </div>

            {/* Key Metric Stats Row (Direct 1:1 match with reference image: 20M+ | 120+ | 80+) */}
            <div className="mt-4 xs:mt-6 sm:mt-8 pt-3.5 xs:pt-4 sm:pt-6 border-t border-neutral-300/80 dark:border-white/10 grid grid-cols-3 gap-2 xs:gap-3 sm:gap-6 w-full max-w-2xl">
              <div>
                <div className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
                  99.8%
                </div>
                <div className="text-[9.5px] xs:text-[10.5px] sm:text-xs text-neutral-700 dark:text-neutral-400 font-medium sm:font-semibold mt-0.5 sm:mt-1 leading-tight">
                  Client satisfaction
                </div>
              </div>
              <div className="border-l border-neutral-300/80 dark:border-white/10 pl-2 xs:pl-3 sm:pl-6">
                <div className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
                  10+
                </div>
                <div className="text-[9.5px] xs:text-[10.5px] sm:text-xs text-neutral-700 dark:text-neutral-400 font-medium sm:font-semibold mt-0.5 sm:mt-1 leading-tight">
                  Digital systems
                </div>
              </div>
              <div className="border-l border-neutral-300/80 dark:border-white/10 pl-2 xs:pl-3 sm:pl-6">
                <div className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-amber-800 dark:text-gold-400 tracking-tight">
                  3.8x
                </div>
                <div className="text-[9.5px] xs:text-[10.5px] sm:text-xs text-neutral-700 dark:text-neutral-400 font-medium sm:font-semibold mt-0.5 sm:mt-1 leading-tight">
                  Lead multiplier
                </div>
              </div>
            </div>
          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: Hero Visual Area with Liquid-Glass Decorative Orb   */}
          {/* ================================================================= */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end xl:pr-4 pointer-events-auto mt-6 lg:mt-0">
            <div className="hero-visual relative flex items-center justify-center w-full max-w-[270px] xs:max-w-[310px] sm:max-w-[380px] lg:max-w-[400px]">
              
              {/* 1. Large Decorative Liquid-Glass Orb (Z-Index 0, sits physically BEHIND rectangular image card) */}
              <div
                className="decorative-orb"
                aria-hidden="true"
              />

              {/* 2. Floating Ambient Sparkles (Z-Index 20) */}
              <div
                className="absolute -top-3 left-4 sm:left-8 z-20 text-gold-400 animate-pulse pointer-events-none"
                aria-hidden="true"
              >
                <Sparkles className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8" />
              </div>
              <div
                className="absolute top-1/3 -right-2 sm:-right-4 z-20 text-amber-400/80 pointer-events-none"
                aria-hidden="true"
              >
                <Sparkles className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
              </div>

              {/* 3. Primary Rectangular Hero Image Card (Z-Index 10, visually cuts across Orb) */}
              <div className="hero-image-card relative z-10 w-full rounded-2xl xs:rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-neutral-300/80 dark:border-white/10 bg-neutral-900/40 backdrop-blur-sm">
                <Image
                  src="/hero-person.jpg"
                  alt="Digital Solutions Expert and Technology Partner"
                  width={480}
                  height={640}
                  priority
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Subtle Bottom Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* 4. Floating Trust Verification Capsule (Z-Index 20) */}
              <div className="absolute -bottom-2.5 xs:-bottom-3 sm:-bottom-4 -left-1 xs:left-2 sm:left-4 z-20 flex items-center gap-2 xs:gap-2.5 px-3 py-1.5 xs:px-3.5 xs:py-2 sm:px-4 sm:py-2.5 rounded-xl xs:rounded-2xl liquid-glass-capsule border border-neutral-300/90 dark:border-white/20 shadow-2xl bg-white/95 dark:bg-neutral-900/80">
                <span className="flex items-center justify-center w-6 h-6 xs:w-7 xs:h-7 rounded-full bg-emerald-500/15 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                </span>
                <div>
                  <div className="text-[10px] xs:text-[11px] sm:text-xs font-bold text-neutral-950 dark:text-white leading-tight">
                    Verified Solutions Expert
                  </div>
                  <div className="text-[8.5px] xs:text-[9.5px] sm:text-[10px] font-medium text-neutral-600 dark:text-neutral-400">
                    Full-Stack &amp; Google Certified
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
              
      {/* 5. Interactive Service Detail Modal Card (Z-Index 50) */}
      <HeroServiceCard
        service={selectedService}
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        onOpenQuote={() => openQuote(selectedService?.title)}
      />
    </section>
  );
}
