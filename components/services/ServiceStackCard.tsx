"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ServiceItem } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceStackCardProps {
  service: ServiceItem;
  index: number;
  total: number;
  onOpenModal?: (service: ServiceItem) => void;
}

const ACCENT_GLOWS = [
  "from-amber-400/20 via-gold-400/10 to-transparent",    // 01 GMB (Gold)
  "from-emerald-400/20 via-teal-400/10 to-transparent",  // 02 Web (Emerald)
  "from-sky-400/20 via-blue-400/10 to-transparent",      // 03 E-Commerce (Cyan)
  "from-orange-400/20 via-amber-400/10 to-transparent",  // 04 Software (Sunset Amber)
  "from-purple-400/20 via-violet-400/10 to-transparent", // 05 AI & Automation (Violet)
];

const ACCENT_BORDER_CLASSES = [
  "border-amber-400/30 hover:border-amber-400/50",
  "border-emerald-400/30 hover:border-emerald-400/50",
  "border-cyan-400/30 hover:border-cyan-400/50",
  "border-orange-400/30 hover:border-orange-400/50",
  "border-purple-400/30 hover:border-purple-400/50",
];

const SERVICE_TITLE_PARTS: Record<string, { primary: string; accent: string }> = {
  gmb: { primary: "Google Business", accent: "Profile" },
  "web-dev": { primary: "Website", accent: "Development" },
  ecommerce: { primary: "E-Commerce", accent: "Development" },
  software: { primary: "Software", accent: "Development" },
  automation: { primary: "AI &", accent: "Automation" },
  ai: { primary: "AI &", accent: "Automation" },
};

export function ServiceStackCard({
  service,
  index,
  total,
  onOpenModal,
}: ServiceStackCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  // First card enters immediately; subsequent cards animate in on scroll via IntersectionObserver
  const [hasEntered, setHasEntered] = useState(index === 0);
  const [lightImageError, setLightImageError] = useState(false);

  const titleParts =
    SERVICE_TITLE_PARTS[service.id] ||
    (() => {
      const words = (service.title || "").trim().split(" ");
      if (words.length <= 1) return { primary: service.title, accent: "" };
      return {
        primary: words.slice(0, -1).join(" "),
        accent: words[words.length - 1],
      };
    })();

  // Trigger entrance animation when card comes into view
  useEffect(() => {
    if (index === 0) return;
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.05, rootMargin: "60px 0px 60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      data-service-card
      className={cn(
        "relative w-full",
        "rounded-[20px] xs:rounded-[24px] sm:rounded-[32px] md:rounded-[36px]",
        "border border-neutral-300/80 dark:border-white/[0.12]",
        "bg-white/95 dark:bg-[#0c0e15]/95 backdrop-blur-2xl",
        "p-3.5 xs:p-4 sm:p-5 md:p-6 lg:p-8 xl:p-9",
        "shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)]",
        "overflow-hidden group",
        ACCENT_BORDER_CLASSES[
          index % ACCENT_BORDER_CLASSES.length
        ]
      )}
    >
      {/* Background Specular & Ambient Glow Layer (strictly clipped to card geometry) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px] xs:rounded-[24px] sm:rounded-[32px] md:rounded-[36px]">
        {/* Specular Liquid Glass Top Rim Highlight */}
        <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 dark:via-white/50 to-transparent" />

        {/* Ambient internal spotlight keyed to active vertical accent */}
        <div
          className={cn(
            "absolute -top-20 -right-20 w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] rounded-full bg-gradient-to-br blur-[120px] opacity-70 transition-all duration-700",
            ACCENT_GLOWS[index % ACCENT_GLOWS.length]
          )}
        />
      </div>

      {/* Hardware-Accelerated Dimming Overlay (Controlled by GSAP for buttery smooth deck depth) */}
      <div
        data-dim-overlay
        className="pointer-events-none absolute inset-0 bg-black opacity-0 transition-opacity duration-200 z-30 rounded-[20px] xs:rounded-[24px] sm:rounded-[32px] md:rounded-[36px]"
      />

      {/* Responsive Editorial Split: 1-col on mobile, tailored 2-col on Tablet (md:) and Desktop (lg:) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 xs:gap-6 sm:gap-7 md:gap-7 lg:gap-10 xl:gap-12 items-center">
        
        {/* =============================================================== */}
        {/* LEFT COLUMN: Service Information, Storytelling & Capabilities   */}
        {/* =============================================================== */}
        <div
          className={cn(
            "md:col-span-7 flex flex-col items-start text-left w-full",
            hasEntered ? "showcase-content-animate" : "opacity-0"
          )}
        >
          {/* Primary Service Title: White + Gold Gradient Color Schema Across All Cards */}
          <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] xl:text-[2.6rem] 2xl:text-[2.85rem] font-extrabold uppercase tracking-tight leading-[1.08]">
            <span className="text-neutral-950 dark:text-white">
              {titleParts.primary}
            </span>
            {titleParts.accent && (
              <>
                {" "}
                <span className="text-gold-gradient font-black">
                  {titleParts.accent}
                </span>
              </>
            )}
          </h3>

          {/* Service Narrative Description with controlled line length */}
          <p className="mt-2 xs:mt-2.5 sm:mt-3.5 xl:mt-4 text-[11.5px] xs:text-xs sm:text-sm md:text-sm lg:text-[14px] xl:text-[15px] text-neutral-700 dark:text-neutral-300 leading-snug sm:leading-relaxed font-normal max-w-2xl">
            {service.description}
          </p>

          {/* Core Key Capabilities Deck */}
          <div className="mt-2.5 xs:mt-3 sm:mt-3.5 xl:mt-4 w-full space-y-1 xs:space-y-1.5 max-w-2xl">
            <span className="text-[9px] xs:text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold block">
              Core Capabilities:
            </span>
            <div className="flex flex-col gap-1.5 xs:gap-2 sm:gap-2 md:gap-2.5">
              {service.features.map((feature, fIdx) => (
                <div
                  key={fIdx}
                  className="flex items-center gap-2 xs:gap-2.5 sm:gap-2.5 px-3 xs:px-3.5 sm:px-3.5 md:px-4 py-1.5 xs:py-2 sm:py-2 md:py-2.5 rounded-xl bg-neutral-100/80 dark:bg-white/[0.04] border border-neutral-200/80 dark:border-white/[0.08] backdrop-blur-sm shadow-2xs"
                >
                  <CheckCircle2 className="w-3.5 xs:w-4 sm:w-4 h-3.5 xs:h-4 sm:h-4 text-amber-600 dark:text-gold-400 shrink-0" />
                  <span className="text-[11px] xs:text-[12px] sm:text-xs md:text-[13px] font-medium text-neutral-800 dark:text-neutral-200 leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =============================================================== */}
        {/* RIGHT COLUMN: Service-Specific Editorial Founder Campaign Visual */}
        {/* =============================================================== */}
        <div
          className={cn(
            "md:col-span-5 flex items-center justify-center w-full",
            hasEntered ? "showcase-image-animate" : "opacity-0"
          )}
        >
          <div className="relative w-full max-w-[260px] xs:max-w-[280px] sm:max-w-[320px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[380px] aspect-[3/4] rounded-xl xs:rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border border-neutral-300/80 dark:border-white/15 bg-neutral-100 dark:bg-neutral-900 group">
            {/* 1. DARK MODE IMAGE: Dedicated cinematic asset rendered in dark mode */}
            <Image
              src={service.imageDarkSrc || service.imageSrc || `/services/service-01-gmb.jpg`}
              alt={`${service.title} - Digital Horizon Solutions Visual (Dark Mode)`}
              width={896}
              height={1200}
              priority={index <= 1}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103 hidden dark:block"
            />

            {/* 2. LIGHT MODE IMAGE: Theme-aware light asset or graceful pending fallback */}
            {service.imageLightSrc && !lightImageError ? (
              <Image
                src={service.imageLightSrc}
                alt={`${service.title} - Digital Horizon Solutions Visual (Light Mode)`}
                width={896}
                height={1200}
                priority={index <= 1}
                onError={() => setLightImageError(true)}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103 block dark:hidden"
              />
            ) : lightImageError ? (
              <Image
                src={service.imageDarkSrc || service.imageSrc || `/services/service-01-gmb.jpg`}
                alt={`${service.title} - Digital Horizon Solutions Visual (Fallback)`}
                width={896}
                height={1200}
                priority={index <= 1}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103 block dark:hidden"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-neutral-50 via-neutral-100 to-amber-50/20 block dark:hidden select-none">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3.5 shadow-sm">
                  <span className="font-mono text-base font-bold text-amber-700">
                    {service.number}
                  </span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                  {service.title}
                </span>
                <span className="text-[11px] font-mono text-neutral-400 mt-1">
                  Light-mode asset pending
                </span>
              </div>
            )}

            {/* Specular Liquid Edge Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 dark:from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </div>
  );
}
