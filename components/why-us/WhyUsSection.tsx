import React from "react";
import { WHY_US_PRINCIPLES } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="relative py-14 xs:py-16 sm:py-20 lg:py-28 bg-neutral-950/60 border-t border-white/[0.06] scroll-mt-20 overflow-hidden"
      aria-labelledby="why-us-heading"
    >
      <Container>
        {/* Section Header */}
        <div className="w-full max-w-4xl mb-10 sm:mb-16">
          <ScrollReveal direction="left" duration={740}>
            <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-400 font-semibold">
                CORE PHILOSOPHY
              </p>
            </div>
            <h2
              id="why-us-heading"
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.08]"
            >
              Digital Should <br />
              <span className="text-gold-gradient">Work For Your Business.</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-sm xs:text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl">
              We reject the idea of building generic websites or deploying unmaintainable software. Every digital system we engineer is anchored in clear operational and commercial utility.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Editorial Principles (Clean typography list with generous negative space) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 divide-y md:divide-y-0 divide-white/[0.08]">
          {WHY_US_PRINCIPLES.map((item, idx) => (
            <ScrollReveal
              key={item.number}
              direction="up"
              delay={idx * 60}
              duration={700}
              variant="card"
              className="h-full"
            >
              <div
                className="pt-4 md:pt-0 group flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2.5 sm:mb-3">
                    <span className="font-mono text-xs font-bold text-gold-400/90 tracking-wider">
                      {item.number}
                    </span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-amber-100 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-amber-200/90 mt-1">
                    {item.summary}
                  </p>

                  <p className="mt-2.5 sm:mt-3 text-xs xs:text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 sm:mt-6 flex items-center gap-2 text-[10px] xs:text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                  <span>Standard DHS Quality Standard</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
