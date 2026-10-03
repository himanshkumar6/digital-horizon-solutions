import React from "react";
import { APPROACH_STEPS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { MobileApproachJourney } from "./MobileApproachJourney";

export function ApproachSection() {
  return (
    <section
      id="approach"
      className="relative py-14 xs:py-16 sm:py-20 lg:py-28 bg-neutral-950/40 border-t border-white/[0.06] scroll-mt-20 overflow-hidden"
      aria-labelledby="approach-heading"
    >
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute -bottom-24 right-0 w-96 h-96 bg-gold-400/[0.04] rounded-full blur-[140px] -z-10" />

      <Container>
        {/* Asymmetric Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-10 sm:mb-16">
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" duration={740}>
              <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-400 font-semibold">
                  OUR APPROACH
                </p>
              </div>
              <h2
                id="approach-heading"
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08] sm:leading-[1.05]"
              >
                Strategy. <br />
                Design. <br />
                <span className="text-gold-gradient">Execution.</span> <br />
                Growth.
              </h2>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-end lg:pt-8">
            <ScrollReveal direction="right" duration={740} delay={60}>
              <p className="text-sm xs:text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl">
                We eliminate guesswork by structuring our engagements through a disciplined four-stage delivery model designed around your commercial timeline.
              </p>
              <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-2 xs:gap-3 sm:gap-4 text-[11px] xs:text-xs font-mono text-neutral-500 uppercase tracking-wider">
                <span>01 Strategy</span>
                <span>→</span>
                <span>02 Design</span>
                <span>→</span>
                <span>03 Execution</span>
                <span>→</span>
                <span className="text-amber-200">04 Growth</span>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Mobile Continuous Curved Journey (Visible on mobile < md: 768px) */}
        <div className="block md:hidden">
          <MobileApproachJourney />
        </div>

        {/* 4-Step Asymmetric Process Cards (Visible on desktop & tablet >= md: 768px) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {APPROACH_STEPS.map((step, idx) => (
            <ScrollReveal
              key={step.step}
              direction="up"
              delay={idx * 60}
              duration={700}
              variant="card"
              className="h-full"
            >
              <div className="group relative h-full rounded-2xl border border-white/[0.08] bg-neutral-900/40 p-4 sm:p-6 lg:p-8 backdrop-blur-md transition-all duration-300 hover:border-gold-400/30 hover:bg-neutral-900/70 shadow-card flex flex-col justify-between">
                {/* Step indicator watermark */}
                <div className="absolute top-4 right-5 sm:right-6 font-mono text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white/[0.03] select-none group-hover:text-gold-400/[0.08] transition-colors">
                  {step.step}
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/25 bg-gold-400/10 px-2.5 py-0.5 text-[11px] font-mono text-amber-200 uppercase tracking-wider mb-3 sm:mb-4">
                    Step {step.step}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-amber-100 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs font-mono text-gold-400/90 mt-1 font-medium">
                    {step.tagline}
                  </p>

                  <p className="mt-3 sm:mt-4 text-xs xs:text-sm text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step Deliverable Pill */}
                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-1 text-xs">
                  <span className="text-neutral-500 font-mono uppercase text-[10px]">
                    Output:
                  </span>
                  <span className="font-mono text-neutral-300 font-medium">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
