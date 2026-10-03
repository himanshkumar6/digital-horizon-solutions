"use client";

import React, { useEffect, useRef, useState } from "react";
import { METRICS } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { RollingNumber } from "@/components/ui/RollingNumber";
import { ParticleDissolutionLayer } from "./ParticleDissolutionLayer";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const METRIC_COLORS = [
  "metric-val-gold",    // 3+ Projects Delivered (Champagne Gold)
  "metric-val-emerald", // 3+ Active Clients (Vibrant Emerald)
  "metric-val-cyan",    // 05 Core Verticals (Electric Cyan)
  "metric-val-amber",   // 1.5+ Years Experience (Sunset Amber)
];

export function MetricsStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isSettled, setIsSettled] = useState(false);

  useEffect(() => {
    // Immediate fallback for reduced motion preference
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsActive(true);
      setIsSettled(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isActive) {
            setIsActive(true);
            // Complete settlement cleanup after particle dissolution and rolling number completion (2100ms)
            const timer = setTimeout(() => {
              setIsSettled(true);
            }, 2100);
            return () => clearTimeout(timer);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isActive]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 border-y border-neutral-200/90 dark:border-white/[0.08] bg-white/80 dark:bg-neutral-950/60 backdrop-blur-md py-6 sm:py-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] dark:shadow-none transition-colors duration-300"
      aria-label="Metrics and Trust"
    >
      <Container>
        <ScrollReveal direction="up" duration={700} distance={20} variant="glass">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 sm:divide-x divide-neutral-200/80 dark:divide-white/[0.06]">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className={cn(
                "group relative flex flex-col items-start text-left pt-1.5 sm:pt-0",
                idx % 2 !== 0 ? "pl-2 xs:pl-3 sm:pl-0" : "pl-0",
                idx !== 0 && "sm:pl-8"
              )}
              style={{ "--col-delay": `${idx * 110}ms` } as React.CSSProperties}
            >
              {/* Liquid-Glass Specular Activation Sheen Sweep */}
              {!isSettled && isActive && (
                <div className="pointer-events-none absolute inset-0 overflow-hidden z-10 rounded-lg">
                  <div
                    className="metric-glass-sheen absolute -inset-full w-[300%] h-[300%]"
                    style={{ "--col-delay": `${idx * 110}ms` } as React.CSSProperties}
                  />
                </div>
              )}

              {/* Liquid Glass Particle Dissolution & Reformation Layer */}
              <ParticleDissolutionLayer
                columnIndex={idx}
                isActive={isActive}
                isSettled={isSettled}
              />

              {/* Metric Card Content with Dissolution & Reconstruction Transition */}
              <div
                className={cn(
                  "w-full flex flex-col items-start text-left",
                  !isActive
                    ? "opacity-0"
                    : isSettled
                    ? "metric-content-settled"
                    : "metric-content-dissolve"
                )}
                style={{ "--col-delay": `${idx * 110}ms` } as React.CSSProperties}
              >
                {/* Metric Value with Animated Rolling Reel & Distinct Metallic Color */}
                <div className="flex items-baseline gap-1">
                  <RollingNumber
                    value={metric.value}
                    delay={idx * 120}
                    className={cn(
                      "text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight transition-transform duration-300 group-hover:scale-105",
                      METRIC_COLORS[idx % METRIC_COLORS.length]
                    )}
                  />
                  {metric.isPlaceholder && (
                    <span
                      className="text-[9px] font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-white/[0.04] px-1.5 py-0.5 rounded border border-neutral-300 dark:border-white/5"
                      title="V1 Placeholder - Awaiting verified production statistics"
                    >
                      Demo
                    </span>
                  )}
                </div>

                {/* Metric Label (100% Crisp Visibility in both Light & Dark Mode) */}
                <div className="mt-1 text-xs xs:text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 transition-colors">
                  {metric.label}
                </div>

                {/* Metric Sublabel */}
                <div className="text-[10.5px] xs:text-xs text-neutral-600 dark:text-neutral-400 mt-0.5 hidden xs:block font-medium transition-colors">
                  {metric.sublabel}
                </div>
              </div>
            </div>
          ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

