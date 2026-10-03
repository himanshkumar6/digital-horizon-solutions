"use client";

import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

interface ParticleDef {
  id: number;
  x: number; // percentage horizontal anchor within column (10-90%)
  y: number; // percentage vertical anchor within column (15-85%)
  driftX: number; // px horizontal drift during separation (-32px to 32px)
  driftY: number; // px vertical drift during separation (-34px to 28px)
  flowX: number; // px secondary fluid flow displacement (-6px to 6px)
  flowY: number; // px secondary fluid flow displacement (-5px to 5px)
  size: number; // px (1.2px to 2.8px)
  colorType: "gold" | "white" | "accent" | "soft";
  delay: number; // ms
  duration: number; // ms
}

interface ParticleDissolutionLayerProps {
  columnIndex: number;
  isActive: boolean;
  isSettled: boolean;
}

// 12 Deterministic particles per column (Desktop: 12*4 = 48, Tablet: 8*4 = 32, Mobile: 4*4 = 16)
const COLUMN_PARTICLE_PRESETS: ParticleDef[] = [
  { id: 0, x: 22, y: 32, driftX: -18, driftY: -22, flowX: 4, flowY: -3, size: 2.2, colorType: "accent", delay: 80, duration: 1550 },
  { id: 1, x: 74, y: 28, driftX: 24, driftY: -18, flowX: -3, flowY: -4, size: 1.8, colorType: "gold", delay: 120, duration: 1600 },
  { id: 2, x: 38, y: 72, driftX: -14, driftY: 18, flowX: 5, flowY: 2, size: 2.0, colorType: "white", delay: 160, duration: 1500 },
  { id: 3, x: 82, y: 64, driftX: 20, driftY: 22, flowX: -4, flowY: 3, size: 2.4, colorType: "accent", delay: 100, duration: 1650 },
  // Tablet visible (4-7)
  { id: 4, x: 15, y: 50, driftX: -26, driftY: -4, flowX: 3, flowY: -2, size: 1.5, colorType: "soft", delay: 200, duration: 1580 },
  { id: 5, x: 86, y: 44, driftX: 28, driftY: 8, flowX: -5, flowY: 1, size: 1.6, colorType: "gold", delay: 140, duration: 1620 },
  { id: 6, x: 50, y: 20, driftX: 6, driftY: -28, flowX: 2, flowY: -4, size: 2.5, colorType: "white", delay: 90, duration: 1520 },
  { id: 7, x: 46, y: 84, driftX: -6, driftY: 24, flowX: -2, flowY: 4, size: 1.4, colorType: "accent", delay: 220, duration: 1560 },
  // Desktop only (8-11)
  { id: 8, x: 30, y: 44, driftX: -12, driftY: -14, flowX: 3, flowY: -1, size: 1.8, colorType: "gold", delay: 180, duration: 1600 },
  { id: 9, x: 68, y: 52, driftX: 16, driftY: -10, flowX: -3, flowY: -2, size: 1.6, colorType: "white", delay: 110, duration: 1640 },
  { id: 10, x: 56, y: 66, driftX: 10, driftY: 16, flowX: -2, flowY: 3, size: 2.2, colorType: "accent", delay: 240, duration: 1540 },
  { id: 11, x: 62, y: 36, driftX: 12, driftY: -20, flowX: -4, flowY: -3, size: 1.5, colorType: "soft", delay: 150, duration: 1590 },
];

const ACCENT_COLORS = [
  "bg-amber-300 shadow-[0_0_6px_rgba(251,191,36,0.8)]",  // Col 0: Champagne Gold
  "bg-emerald-300 shadow-[0_0_6px_rgba(52,211,153,0.8)]", // Col 1: Emerald Mint
  "bg-cyan-300 shadow-[0_0_6px_rgba(56,189,248,0.8)]",    // Col 2: Horizon Cyan
  "bg-orange-300 shadow-[0_0_6px_rgba(251,146,60,0.8)]",  // Col 3: Sunset Amber
];

export function ParticleDissolutionLayer({
  columnIndex,
  isActive,
  isSettled,
}: ParticleDissolutionLayerProps) {
  // If settled, completely unmount particle layer to guarantee zero ongoing GPU overhead
  if (isSettled || !isActive) {
    return null;
  }

  const columnAccent = ACCENT_COLORS[columnIndex % ACCENT_COLORS.length];

  return (
    <div
      className="pointer-events-none absolute -inset-4 overflow-visible z-20"
      aria-hidden="true"
    >
      {COLUMN_PARTICLE_PRESETS.map((p) => {
        let colorClasses = "bg-white shadow-[0_0_5px_rgba(255,255,255,0.9)]";
        if (p.colorType === "gold") {
          colorClasses = "bg-amber-200 shadow-[0_0_6px_rgba(252,211,77,0.75)]";
        } else if (p.colorType === "soft") {
          colorClasses = "bg-slate-200/90 shadow-[0_0_4px_rgba(226,232,240,0.6)]";
        } else if (p.colorType === "accent") {
          colorClasses = columnAccent;
        }

        // Responsive visibility: 0-3 on Mobile, 4-7 on Tablet, 8-11 on Desktop
        const responsiveVisibility =
          p.id >= 8 ? "hidden md:block" : p.id >= 4 ? "hidden sm:block" : "block";

        const dynamicStyle: React.CSSProperties = {
          left: `${p.x}%`,
          top: `${p.y}%`,
          width: `${p.size}px`,
          height: `${p.size}px`,
          "--p-drift-x": `${p.driftX}px`,
          "--p-drift-y": `${p.driftY}px`,
          "--p-flow-x": `${p.flowX}px`,
          "--p-flow-y": `${p.flowY}px`,
          animation: `particleDissolveReconstruct ${p.duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${p.delay + columnIndex * 100}ms forwards`,
        } as React.CSSProperties;

        return (
          <span
            key={p.id}
            style={dynamicStyle}
            className={cn(
              "absolute rounded-full will-change-transform opacity-0",
              colorClasses,
              responsiveVisibility
            )}
          />
        );
      })}
    </div>
  );
}
