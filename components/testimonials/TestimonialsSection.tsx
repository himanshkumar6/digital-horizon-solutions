import React from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { Quote, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Container } from "@/components/ui/Container";

export function TestimonialsSection() {
  return (
    <section
      className="relative py-14 xs:py-16 sm:py-20 lg:py-28 overflow-hidden border-t border-white/[0.06]"
      aria-labelledby="testimonials-heading"
    >
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-400/[0.03] rounded-full blur-[140px] -z-10" />

      <Container>
        {/* Section Header */}
        <ScrollReveal direction="center" duration={740} className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 backdrop-blur-md mb-2.5 sm:mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-400 font-semibold">
              CLIENT EXPERIENCES
            </span>
          </div>

          <h2
            id="testimonials-heading"
            className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight"
          >
            What Our Clients Say
          </h2>

          <p className="mt-2.5 sm:mt-3 text-xs font-mono uppercase tracking-wider text-neutral-500">
            [ Clearly Marked V1 Placeholders — Ready for Live Client Reviews ]
          </p>
        </ScrollReveal>

        {/* 3 Placeholder Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <ScrollReveal
              key={t.id}
              direction="up"
              delay={idx * 70}
              duration={700}
              variant="card"
              className="h-full"
            >
              <div className="relative rounded-2xl border border-white/[0.08] bg-neutral-950/70 p-4 sm:p-6 lg:p-7 backdrop-blur-xl flex flex-col justify-between shadow-card hover:border-gold-400/30 transition-colors h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="h-6 w-6 text-gold-400/40" />
                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 bg-white/[0.04] px-2 py-0.5 rounded border border-white/5">
                      Demo Placeholder
                    </span>
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Client Meta with Neutral Initials Avatar */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-900 border border-white/10 font-mono text-xs font-bold text-amber-200">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wide">
                      {t.clientName}
                    </div>
                    <div className="text-[11px] text-neutral-400">
                      {t.role} • {t.businessType}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
