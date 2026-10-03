import React from "react";
import { Sparkles, ArrowUpRight, CheckCircle2, Shield, Activity } from "lucide-react";

export function HeroGraphic() {
  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-square max-w-xl mx-auto flex items-center justify-center select-none">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-gold-400/10 via-neutral-900/40 to-transparent blur-2xl -z-10" />

      {/* Main Glass Canvas Container */}
      <div className="relative w-full h-full rounded-2xl border border-white/10 bg-neutral-950/70 p-5 sm:p-7 backdrop-blur-xl shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Subtle Perspective Grid Canvas */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%)",
          }}
        />

        {/* Top Bar: System Status */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/[0.08] pb-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-400" />
            </span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-300">
              Digital Infrastructure Ready
            </span>
          </div>
          <div className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-mono text-neutral-400">
            DHS Core v1.0
          </div>
        </div>

        {/* Center: The Horizon Monolith & Digital Transformation Hub */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto py-6">
          {/* Subtle Ambient Light Orb */}
          <div className="absolute h-36 w-36 rounded-full bg-gold-400/15 blur-3xl -z-10" />

          {/* Central Architectural Card */}
          <div className="relative w-full max-w-sm rounded-xl border border-gold-400/25 bg-neutral-900/90 p-5 shadow-2xl backdrop-blur-2xl">
            {/* Top row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black/80 border border-gold-400/30 p-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo-mark.svg"
                    alt="Digital Horizon Solutions Emblem"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wide">
                    Digital Horizon Architecture
                  </div>
                  <div className="text-[10px] text-neutral-400">
                    Full-Stack Business Solutions
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono font-semibold text-amber-200/90 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                ACTIVE
              </span>
            </div>

            {/* Metrics & Performance Bars */}
            <div className="space-y-2.5">
              <div>
                <div className="flex justify-between text-[11px] font-mono text-neutral-400 mb-1">
                  <span>Engineered Performance</span>
                  <span className="text-white font-bold">99.8%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-neutral-800 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-amber-200 via-gold-400 to-amber-600 w-[96%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] font-mono text-neutral-400 mb-1">
                  <span>Local SEO & Discovery Depth</span>
                  <span className="text-white font-bold">100%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-neutral-800 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-neutral-600 to-gold-400 w-[92%]" />
                </div>
              </div>
            </div>

            {/* Micro Pillars */}
            <div className="mt-4 pt-3 border-t border-white/[0.08] grid grid-cols-3 gap-2 text-center">
              <div className="rounded-lg bg-black/40 p-1.5 border border-white/5">
                <div className="text-[10px] text-neutral-400">Visibility</div>
                <div className="text-xs font-bold text-amber-200">GMB Maps</div>
              </div>
              <div className="rounded-lg bg-black/40 p-1.5 border border-white/5">
                <div className="text-[10px] text-neutral-400">Storefront</div>
                <div className="text-xs font-bold text-white">E-Comm</div>
              </div>
              <div className="rounded-lg bg-black/40 p-1.5 border border-white/5">
                <div className="text-[10px] text-neutral-400">Workflows</div>
                <div className="text-xs font-bold text-amber-200">AI Auto</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Accent Capsule: Real-World Business Trust */}
        <div className="relative z-10 flex items-center justify-between rounded-xl border border-white/10 bg-neutral-900/60 px-4 py-2.5 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <Shield className="h-3.5 w-3.5 text-gold-400 shrink-0" />
            <span className="text-[11px] text-neutral-300">
              Purpose-built for real SMEs & modern founders
            </span>
          </div>
          <span className="text-[10px] font-mono text-neutral-400">
            Secure • Scalable
          </span>
        </div>
      </div>
    </div>
  );
}
