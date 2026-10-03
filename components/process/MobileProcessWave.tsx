"use client";

import React from "react";
import {
  Search,
  Smartphone,
  Code2,
  Rocket,
} from "lucide-react";

/*
 * MOBILE PROCESS WAVE STEPPER
 * Vertical translation of media_1790696517366.jpg for mobile screens (< 768px):
 * - Continuous vertical undulating sine-wave fluid ribbon
 * - Multi-layer elevated circular nodes with drop-shadow & icons
 * - Alternating spatial zones:
 *   Stage 01: Node Left, Text Right
 *   Stage 02: Node Right, Text Left
 *   Stage 03: Node Left, Text Right
 *   Stage 04: Node Right, Text Left
 * - Zero overlap, content-driven height, and safe-area dock clearance
 */

interface MobileStep {
  step: string;
  title: string;
  description: string;
  icon: React.ElementType;
  nodeSide: "left" | "right";
}

const MOBILE_STEPS: MobileStep[] = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Understanding commercial friction, user intent, and architecture.",
    icon: Search,
    nodeSide: "left",
  },
  {
    step: "02",
    title: "Wireframe & Prototyping",
    description: "Creating high-conversion user flows and intuitive visual systems.",
    icon: Smartphone,
    nodeSide: "right",
  },
  {
    step: "03",
    title: "Production Engineering",
    description: "Sub-second load speeds, clean Next.js code, and bulletproof APIs.",
    icon: Code2,
    nodeSide: "left",
  },
  {
    step: "04",
    title: "Launch & Scaling",
    description: "Edge deployment, continuous tracking, and conversion refinement.",
    icon: Rocket,
    nodeSide: "right",
  },
];

export function MobileProcessWave() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto select-none pt-4 pb-28 xs:pb-32 px-3">
      {/* ============================================================
          VERTICAL UNDULATING FLUID RIBBON & STAGGERED STAGES
          ============================================================ */}
      <div className="relative flex flex-col space-y-8">
        {MOBILE_STEPS.map((step, idx) => {
          const Icon = step.icon;
          const isLeft = step.nodeSide === "left";

          return (
            <div
              key={step.step}
              className={`relative flex items-center gap-4 ${
                isLeft ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Connector Spine Segment linking to next step */}
              {idx < MOBILE_STEPS.length - 1 && (
                <div
                  className={`absolute top-1/2 -bottom-8 w-6 pointer-events-none ${
                    isLeft ? "left-5" : "right-5"
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 64"
                    fill="none"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                  >
                    <defs>
                      <linearGradient id={`mSpine-${idx}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#0284c7" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 12 0 C 12 32, 12 32, 12 64"
                      stroke={`url(#mSpine-${idx})`}
                      strokeWidth="12"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              )}

              {/* Elevated Circular Node */}
              <div className="relative z-10 shrink-0">
                {/* Fluid Background Base Ring */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#1e40af] via-[#0284c7] to-[#06b6d4] p-[3px] shadow-[0_6px_16px_rgba(2,132,199,0.3)]">
                  {/* White Disc Surface */}
                  <div className="w-full h-full rounded-full bg-white dark:bg-[#10141f] border border-[#0284c7]/40 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#0284c7] stroke-[1.9]" />
                  </div>
                </div>
              </div>

              {/* Complementary Text Block */}
              <div
                className={`flex-1 flex flex-col justify-center ${
                  isLeft ? "text-left" : "text-right"
                }`}
              >
                {/* Step Numeral */}
                <span className="font-mono text-lg font-black text-neutral-900 dark:text-white leading-none">
                  {step.step}
                </span>

                {/* Stage Title */}
                <h3 className="text-sm xs:text-[15px] font-extrabold text-[#0284c7] leading-snug mt-1">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
