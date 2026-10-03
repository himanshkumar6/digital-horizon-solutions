"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ShowcaseParticleLayerProps {
  isActive: boolean;
}

const SHOWCASE_PARTICLES = [
  { id: 0, x: 18, y: 25, driftX: -22, driftY: -18, size: 2.2, color: "bg-amber-300 shadow-[0_0_6px_rgba(251,191,36,0.8)]", delay: 40 },
  { id: 1, x: 42, y: 35, driftX: 18, driftY: -24, size: 1.8, color: "bg-white shadow-[0_0_5px_rgba(255,255,255,0.9)]", delay: 80 },
  { id: 2, x: 78, y: 28, driftX: 26, driftY: -14, size: 2.0, color: "bg-amber-200 shadow-[0_0_6px_rgba(252,211,77,0.7)]", delay: 60 },
  { id: 3, x: 28, y: 65, driftX: -16, driftY: 20, size: 2.4, color: "bg-slate-200/90 shadow-[0_0_4px_rgba(226,232,240,0.6)]", delay: 100 },
  { id: 4, x: 58, y: 72, driftX: 14, driftY: 24, size: 1.9, color: "bg-white shadow-[0_0_5px_rgba(255,255,255,0.9)]", delay: 50 },
  { id: 5, x: 84, y: 55, driftX: 22, driftY: 18, size: 2.1, color: "bg-amber-300 shadow-[0_0_6px_rgba(251,191,36,0.8)]", delay: 90 },
  // Tablet & Desktop (6-11)
  { id: 6, x: 35, y: 48, driftX: -12, driftY: -12, size: 1.6, color: "bg-amber-200 shadow-[0_0_6px_rgba(252,211,77,0.7)]", delay: 120 },
  { id: 7, x: 68, y: 42, driftX: 16, driftY: -16, size: 1.7, color: "bg-white shadow-[0_0_5px_rgba(255,255,255,0.9)]", delay: 70 },
  { id: 8, x: 48, y: 82, driftX: -10, driftY: 16, size: 1.8, color: "bg-slate-200/90 shadow-[0_0_4px_rgba(226,232,240,0.6)]", delay: 110 },
  { id: 9, x: 88, y: 38, driftX: 20, driftY: -10, size: 2.2, color: "bg-amber-300 shadow-[0_0_6px_rgba(251,191,36,0.8)]", delay: 130 },
  { id: 10, x: 22, y: 80, driftX: -18, driftY: 14, size: 1.5, color: "bg-white shadow-[0_0_5px_rgba(255,255,255,0.9)]", delay: 95 },
  { id: 11, x: 72, y: 68, driftX: 18, driftY: 12, size: 1.6, color: "bg-amber-200 shadow-[0_0_6px_rgba(252,211,77,0.7)]", delay: 85 },
];

export function ShowcaseParticleLayer({ isActive }: ShowcaseParticleLayerProps) {
  // If inactive (settled), completely unmount from DOM to release 100% GPU memory
  if (!isActive) return null;

  return (
    <div
      className="pointer-events-none absolute -inset-4 overflow-visible z-30"
      aria-hidden="true"
    >
      {SHOWCASE_PARTICLES.map((p) => {
        const responsiveVisibility = p.id >= 6 ? "hidden sm:block" : "block";

        const dynamicStyle: React.CSSProperties = {
          left: `${p.x}%`,
          top: `${p.y}%`,
          width: `${p.size}px`,
          height: `${p.size}px`,
          "--p-drift-x": `${p.driftX}px`,
          "--p-drift-y": `${p.driftY}px`,
          "--p-flow-x": `${p.driftX * 0.2}px`,
          "--p-flow-y": `${p.driftY * 0.2}px`,
          animation: `particleDissolveReconstruct 620ms cubic-bezier(0.22, 1, 0.36, 1) ${p.delay}ms forwards`,
        } as React.CSSProperties;

        return (
          <span
            key={p.id}
            style={dynamicStyle}
            className={cn(
              "absolute rounded-full will-change-transform opacity-0",
              p.color,
              responsiveVisibility
            )}
          />
        );
      })}
    </div>
  );
}
