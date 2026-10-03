"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { useQuote } from "./QuoteContext";
import { ArrowUpRight, Mail, Phone, Sparkles } from "lucide-react";
import { BRAND_INFO } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface FinalCTAProps {
  variant?: "card" | "section";
  className?: string;
}

export function FinalCTA({ variant = "section", className }: FinalCTAProps) {
  const { openQuote } = useQuote();

  const isCard = variant === "card";

  const content = (
    <div className="relative z-10 text-center max-w-3xl mx-auto">
      {/* Cinematic Headline */}
      <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white text-white-fixed leading-[1.14]">
        Ready To Take Your <br className="hidden xs:inline" />
        <span className="text-gold-gradient">Business To The Next Horizon?</span>
      </h2>

      {/* Supporting Copy */}
      <p className="mt-3 sm:mt-4 max-w-xl mx-auto text-xs xs:text-sm sm:text-base text-neutral-300 text-white-fixed leading-relaxed font-normal">
        Tell us what you&apos;re building. We&apos;ll help you figure out the digital path forward with clear recommendations and zero unnecessary overhead.
      </p>

      {/* Action Buttons */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
        <button
          type="button"
          onClick={() => openQuote()}
          className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm text-neutral-950 bg-gradient-to-r from-amber-200 via-gold-400 to-amber-500 hover:brightness-105 border border-amber-300/40 shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-all cursor-pointer"
        >
          <span>Start A Conversation</span>
          <ArrowUpRight className="h-4 w-4" />
        </button>

        <a
          href={`mailto:${BRAND_INFO.contactEmail}`}
          className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-xl sm:rounded-2xl font-semibold text-xs sm:text-sm text-white text-white-fixed bg-white/10 hover:bg-white/15 border border-white/20 active:scale-[0.98] transition-all"
        >
          <Mail className="h-4 w-4 text-neutral-300 text-white-fixed" />
          <span>Email Directly</span>
        </a>
      </div>

      {/* Fast Turnaround Assurance */}
      <div className="mt-5 sm:mt-6 text-[10px] xs:text-xs font-mono text-neutral-400 text-white-fixed uppercase tracking-wider">
        Average Inquiry Response Time: &lt; 24 Business Hours
      </div>
    </div>
  );

  if (isCard) {
    return (
      <section
        id="contact"
        data-dark-card
        className={cn(
          "relative w-full rounded-3xl sm:rounded-[36px] bg-[#0c0d12] bg-dark-fixed border border-neutral-800/80 dark:border-white/10 shadow-2xl overflow-hidden py-10 xs:py-12 sm:py-16 px-5 xs:px-6 sm:px-12 text-center scroll-mt-24",
          className
        )}
        aria-label="Call to Action"
      >
        {/* Background Cinematic Horizon Beam */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10 select-none">
          <div className="h-[340px] w-full max-w-3xl rounded-full bg-gradient-to-t from-gold-400/[0.14] via-neutral-900/40 to-transparent blur-[90px]" />
        </div>

        {/* Radiant Horizon Line at bottom */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 horizon-line" />

        {content}
      </section>
    );
  }

  return (
    <section
      id="contact"
      className={cn(
        "relative py-14 xs:py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-neutral-200/80 dark:border-white/[0.08] scroll-mt-20",
        className
      )}
      aria-label="Call to Action"
    >
      {/* Background Cinematic Horizon Beam */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10 select-none">
        <div className="h-[400px] w-full max-w-4xl rounded-full bg-gradient-to-t from-gold-400/[0.08] via-neutral-900/20 to-transparent blur-[110px]" />
      </div>

      {/* Radiant Horizon Line at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 horizon-line" />

      <Container size="narrow" className="relative z-10 text-center">
        {content}
      </Container>
    </section>
  );
}
