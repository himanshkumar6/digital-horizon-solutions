"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { CaseStudyModal } from "./CaseStudyModal";
import { FEATURED_WORK, CaseStudyItem } from "@/lib/constants";
import { ArrowUpRight, ArrowRight, Layers, Sparkles, ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

export function WorkSection() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudyItem | null>(null);

  return (
    <section
      id="portfolio"
      className="relative py-14 xs:py-16 sm:py-20 lg:py-28 overflow-hidden scroll-mt-20"
      aria-labelledby="work-heading"
    >
      <span id="work" className="sr-only -top-24 relative" />
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute top-1/3 right-10 w-96 h-96 bg-gold-400/[0.03] rounded-full blur-[160px] -z-10" />

      <Container>
        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-16">
          <ScrollReveal direction="left" duration={740}>
            <SectionHeading
              eyebrow="SELECTED WORK"
              title="REAL BUSINESSES. REAL DIGITAL EXPERIENCES."
              subtitle="Explore how we partner with companies to engineer high-conversion websites, digital storefronts, and automated backend tools."
              goldAccentText="DIGITAL EXPERIENCES"
            />
          </ScrollReveal>
        </div>

        {/* 3 Large Case Study Cards */}
        <div className="space-y-6 sm:space-y-12">
          {FEATURED_WORK.map((item, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <ScrollReveal
                key={item.id}
                direction={isReversed ? "right" : "left"}
                duration={760}
                distance={30}
                variant="card"
              >
                <div
                  className="group relative rounded-2xl xs:rounded-3xl border border-white/[0.08] bg-neutral-950/70 p-3.5 xs:p-5 sm:p-7 lg:p-9 xl:p-10 backdrop-blur-xl transition-all duration-300 hover:border-gold-400/35 hover:bg-neutral-900/60 shadow-card"
                >
                <div
                  className={cn(
                    "grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center",
                    isReversed && "lg:flex-row-reverse"
                  )}
                >
                  {/* Info Column */}
                  <div
                    className={cn(
                      "lg:col-span-6 flex flex-col items-start justify-center",
                      isReversed && "lg:order-2"
                    )}
                  >
                    {/* Category & Demo Tag */}
                    <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
                      <span className="inline-flex items-center rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-0.5 text-[11px] xs:text-xs font-mono uppercase tracking-wider text-amber-200">
                        {item.category}
                      </span>
                      {item.isPlaceholder && (
                        <span className="text-[10px] font-mono uppercase text-neutral-500 bg-white/[0.04] px-2 py-0.5 rounded border border-white/5">
                          Demo Project
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-white group-hover:text-amber-100 transition-colors">
                      {item.title}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-2.5 sm:mt-4 text-xs xs:text-sm sm:text-base text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="mt-3.5 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded-lg border border-white/10 bg-neutral-900/80 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[11px] sm:text-xs font-mono text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/[0.08] w-full flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setActiveCaseStudy(item)}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-amber-200 transition-colors focus:outline-none focus:ring-1 focus:ring-gold-400 rounded px-1 py-1"
                      >
                        <span>View Case Study</span>
                        <ArrowRight className="h-4 w-4 text-gold-400 transition-transform group-hover:translate-x-1" />
                      </button>

                      <span className="text-[11px] font-mono text-neutral-500">
                        Architecture Breakdown ↗
                      </span>
                    </div>
                  </div>

                  {/* Visual Mockup Column */}
                  <div
                    className={cn(
                      "lg:col-span-6 w-full",
                      isReversed && "lg:order-1"
                    )}
                  >
                    <div className="relative rounded-2xl border border-white/10 bg-neutral-900/90 p-3.5 xs:p-4 sm:p-6 backdrop-blur-md overflow-hidden aspect-[16/11] xs:aspect-[16/10] flex flex-col justify-between group-hover:border-gold-400/20 transition-colors">
                      {/* Perspective Mesh Background */}
                      <div
                        className="absolute inset-0 opacity-15 pointer-events-none"
                        style={{
                          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.2) 0%, transparent 70%)`,
                        }}
                      />

                      {/* Mockup Browser Window Header */}
                      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 text-neutral-500">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/50" />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/50" />
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400">
                          {item.id}.digitalhorizonsolutions.com
                        </span>
                        <span className="text-[10px] font-mono text-gold-400/80">
                          PROTOTYPE
                        </span>
                      </div>

                      {/* Mockup Interior Interface Preview */}
                      <div className="my-auto py-3 sm:py-4 flex flex-col items-center justify-center text-center">
                        <div className="inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gold-400/10 border border-gold-400/30 text-amber-300 mb-2 sm:mb-3">
                          <Layers className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide">
                          {item.category} Platform
                        </div>
                        <div className="text-[11px] xs:text-xs text-neutral-400 mt-1 max-w-xs">
                          {item.impactPlaceholder}
                        </div>
                      </div>

                      {/* Bottom Bar */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/[0.08] text-[10px] font-mono text-neutral-400">
                        <span>Production Readiness: 100%</span>
                        <span className="text-amber-200">Interactive Preview Ready</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            );
          })}
        </div>
      </Container>

      {/* Case Study Detail Modal */}
      <CaseStudyModal
        caseStudy={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
    </section>
  );
}
