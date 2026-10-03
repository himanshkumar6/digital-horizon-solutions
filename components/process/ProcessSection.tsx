"use client";

import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

/*
 * =========================================================================
 * DIGITAL HORIZON SOLUTIONS — 6-STAGE CLIENT DEVELOPMENT WORKFLOW
 * =========================================================================
 * 1. Desktop Experience (lg:block):
 *    - 6-Stage continuous mathematical metaball fluid ribbon (1200 x 480 canvas).
 *    - 3D tactile push-buttons with embedded vector line art.
 *    - Alternating top & bottom editorial typography with gold bullet markers.
 * 2. Mobile & Tablet Experience (lg:hidden):
 *    - Ultra-clean, professional `display: flex; flex-direction: column;` timeline.
 *    - Continuous vertical gold spine track connecting all 6 stages.
 *    - Circular 3D push-button nodes with sharp responsive vector icons.
 *    - Editorial frosted glass cards with stage badges and bulleted deliverables.
 * 3. Global CSS Theme Schema Integration:
 *    - Driven by CSS variables (--process-ribbon, --process-accent, --process-btn-*)
 *    - Seamless automatic transition between Light mode (Ceramic Pearl & Warm Gold)
 *      and Dark mode (Obsidian Glass & Radiant Bullion Gold).
 */

interface ProcessStep {
  step: string;
  title: string;
  titleLine2?: string;
  descriptionLines: string[];
  nodeX: number;
  nodeY: number;
  isUp: boolean;
}

const BLUE_RADIUS = 60;
const BUTTON_RADIUS = 45;

const STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery &",
    titleLine2: "Strategy",
    descriptionLines: [
      "Requirements & tech audit",
      "User journey mapping",
      "Scope & milestone lock",
    ],
    nodeX: 110,
    nodeY: 315,
    isUp: false,
  },
  {
    step: "02",
    title: "UI/UX & Rapid",
    titleLine2: "Prototyping",
    descriptionLines: [
      "Figma wireframes & flows",
      "Design system foundations",
      "Clickable prototype review",
    ],
    nodeX: 306,
    nodeY: 165,
    isUp: true,
  },
  {
    step: "03",
    title: "Agile Full-Stack",
    titleLine2: "Development",
    descriptionLines: [
      "Modular, type-safe code",
      "API & database pipelines",
      "Sprint demos & reviews",
    ],
    nodeX: 502,
    nodeY: 315,
    isUp: false,
  },
  {
    step: "04",
    title: "QA, Testing &",
    titleLine2: "Deployment",
    descriptionLines: [
      "Cross-device QA audits",
      "Core Web Vitals tuning",
      "Zero-downtime go-live",
    ],
    nodeX: 698,
    nodeY: 165,
    isUp: true,
  },
  {
    step: "05",
    title: "Analytics &",
    titleLine2: "Performance",
    descriptionLines: [
      "Real-time event tracking",
      "Conversion funnel telemetry",
      "Speed & uptime logging",
    ],
    nodeX: 894,
    nodeY: 315,
    isUp: false,
  },
  {
    step: "06",
    title: "Scaling &",
    titleLine2: "Continuous Growth",
    descriptionLines: [
      "Data-backed sprint cycles",
      "Continuous CI/CD releases",
      "24/7 maintenance & SLA",
    ],
    nodeX: 1090,
    nodeY: 165,
    isUp: true,
  },
];

/**
 * Mathematically generates an organic metaball bridge connecting two circles
 * with exact tangent boundaries and concave fillets (zero sharp spikes).
 */
function createMetaballBridge(
  p1: [number, number],
  r1: number,
  p2: [number, number],
  r2: number,
  handleSize = 2.5,
  v = 0.52
): string {
  const HALF_PI = Math.PI / 2;
  const dx = p2[0] - p1[0];
  const dy = p2[1] - p1[1];
  const d = Math.hypot(dx, dy);

  if (r1 === 0 || r2 === 0 || d === 0 || d <= Math.abs(r1 - r2)) return "";

  let u1 = 0;
  let u2 = 0;
  if (d < r1 + r2) {
    u1 = Math.acos((r1 * r1 + d * d - r2 * r2) / (2 * r1 * d));
    u2 = Math.acos((r2 * r2 + d * d - r1 * r1) / (2 * r2 * d));
  }

  const angle1 = Math.atan2(dy, dx);
  const angle2 = Math.acos((r1 - r2) / d);

  const angle1a = angle1 + u1 + (angle2 - u1) * v;
  const angle1b = angle1 - u1 - (angle2 - u1) * v;
  const angle2a = angle1 + Math.PI - u2 - (Math.PI - u2 - angle2) * v;
  const angle2b = angle1 - Math.PI + u2 + (Math.PI - u2 - angle2) * v;

  const p1a: [number, number] = [
    p1[0] + Math.cos(angle1a) * r1,
    p1[1] + Math.sin(angle1a) * r1,
  ];
  const p1b: [number, number] = [
    p1[0] + Math.cos(angle1b) * r1,
    p1[1] + Math.sin(angle1b) * r1,
  ];
  const p2a: [number, number] = [
    p2[0] + Math.cos(angle2a) * r2,
    p2[1] + Math.sin(angle2a) * r2,
  ];
  const p2b: [number, number] = [
    p2[0] + Math.cos(angle2b) * r2,
    p2[1] + Math.sin(angle2b) * r2,
  ];

  const totalRadius = r1 + r2;
  const dist12 = Math.hypot(p1a[0] - p2a[0], p1a[1] - p2a[1]);
  let d2 = Math.min(v * handleSize, dist12 / totalRadius);
  d2 *= Math.min(1, (d * 2) / totalRadius);

  const hR1 = r1 * d2;
  const hR2 = r2 * d2;

  const h1a: [number, number] = [
    p1a[0] + Math.cos(angle1a - HALF_PI) * hR1,
    p1a[1] + Math.sin(angle1a - HALF_PI) * hR1,
  ];
  const h2a: [number, number] = [
    p2a[0] + Math.cos(angle2a + HALF_PI) * hR2,
    p2a[1] + Math.sin(angle2a + HALF_PI) * hR2,
  ];
  const h2b: [number, number] = [
    p2b[0] + Math.cos(angle2b - HALF_PI) * hR2,
    p2b[1] + Math.sin(angle2b - HALF_PI) * hR2,
  ];
  const h1b: [number, number] = [
    p1b[0] + Math.cos(angle1b + HALF_PI) * hR1,
    p1b[1] + Math.sin(angle1b + HALF_PI) * hR1,
  ];

  const f = (n: number) => Number(n.toFixed(2));
  return `M ${f(p1a[0])} ${f(p1a[1])} C ${f(h1a[0])} ${f(h1a[1])}, ${f(h2a[0])} ${f(h2a[1])}, ${f(p2a[0])} ${f(p2a[1])} L ${f(p2b[0])} ${f(p2b[1])} C ${f(h2b[0])} ${f(h2b[1])}, ${f(h1b[0])} ${f(h1b[1])}, ${f(p1b[0])} ${f(p1b[1])} Z`;
}

// Pre-calculate the 5 mathematically tangent bridges between the 6 nodes
const METABALL_BRIDGES = STEPS.slice(0, -1).map((s, i) => {
  const next = STEPS[i + 1];
  return createMetaballBridge(
    [s.nodeX, s.nodeY],
    BLUE_RADIUS,
    [next.nodeX, next.nodeY],
    BLUE_RADIUS,
    2.5,
    0.52
  );
});

/**
 * Vector line-art icons calibrated with high-fidelity for portrait mobile/tablet 3D nodes
 */
function renderPortraitStepIcon(step: string) {
  switch (step) {
    case "01":
      return (
        <svg viewBox="-26 -26 52 52" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
          <circle cx="-5" cy="-5" r="14" stroke="var(--process-accent)" strokeWidth="2.8" />
          <path d="M -14 -6 A 10 10 0 0 1 -6 -14" stroke="var(--process-accent-secondary)" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="-1" cy="-6" r="1.5" fill="var(--process-accent-secondary)" />
          <line x1="5" y1="5" x2="8" y2="8" stroke="var(--process-accent-secondary)" strokeWidth="4" strokeLinecap="round" />
          <line x1="8" y1="8" x2="18" y2="18" stroke="var(--process-accent)" strokeWidth="4.2" strokeLinecap="round" />
          <circle cx="15" cy="-14" r="1.5" fill="var(--process-accent-secondary)" />
          <circle cx="-16" cy="10" r="1.4" fill="var(--process-accent)" />
        </svg>
      );
    case "02":
      return (
        <svg viewBox="-26 -26 52 52" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
          <rect x="-20" y="-10" width="17" height="29" rx="3.5" stroke="var(--process-accent)" strokeWidth="2.2" />
          <line x1="-16" y1="-3" x2="-7" y2="-3" stroke="var(--process-accent-secondary)" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="-16" y1="1" x2="-10" y2="1" stroke="var(--process-accent-secondary)" strokeWidth="1.8" strokeLinecap="round" />
          <rect x="3" y="-17" width="17" height="29" rx="3.5" stroke="var(--process-accent)" strokeWidth="2.2" />
          <circle cx="11.5" cy="8" r="1.4" fill="var(--process-accent)" />
          <circle cx="-11.5" cy="11" r="1.8" fill="var(--process-accent)" />
          <path d="M -9.5 11 C -2 11, -2 0.5, 4 0.5" stroke="var(--process-accent)" strokeWidth="2" strokeLinecap="round" />
          <path d="M 1 -2.5 L 5 0.5 L 1 3.5" stroke="var(--process-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "03":
      return (
        <svg viewBox="-26 -26 52 52" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
          <rect x="-22" y="-15" width="44" height="32" rx="4" stroke="var(--process-accent)" strokeWidth="2.4" />
          <line x1="-22" y1="-6" x2="22" y2="-6" stroke="var(--process-accent)" strokeWidth="1.8" />
          <circle cx="-15" cy="-10.5" r="1.5" fill="var(--process-accent-secondary)" />
          <circle cx="-10" cy="-10.5" r="1.5" fill="var(--process-accent-secondary)" />
          <path d="M -10 3 L -15 8 L -10 13" stroke="var(--process-accent)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 7 3 L 12 8 L 7 13" stroke="var(--process-accent)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="1" y1="2" x2="-3" y2="14" stroke="var(--process-accent)" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case "04":
      return (
        <svg viewBox="-26 -26 52 52" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
          <g transform="rotate(45)">
            <path d="M 0 -21 C -6 -14, -9 -3, -8 9 L 8 9 C 9 -3, 6 -14, 0 -21 Z" stroke="var(--process-accent)" strokeWidth="2.2" strokeLinejoin="round" fill="var(--process-btn-bg-start)" />
            <path d="M -7 2 L -15 13 C -13 13, -10 12, -8 9 Z" stroke="var(--process-accent)" strokeWidth="2" strokeLinejoin="round" />
            <path d="M 7 2 L 15 13 C 13 13, 10 12, 8 9 Z" stroke="var(--process-accent)" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="0" cy="-5" r="3.8" stroke="var(--process-accent)" strokeWidth="1.8" fill="var(--process-btn-bg-end)" />
            <circle cx="0" cy="-5" r="1.8" fill="var(--process-accent-secondary)" />
            <line x1="0" y1="12" x2="0" y2="23" stroke="var(--process-accent)" strokeWidth="2.4" strokeLinecap="round" />
            <line x1="-3.5" y1="13" x2="-6" y2="20" stroke="var(--process-accent-secondary)" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="3.5" y1="13" x2="6" y2="20" stroke="var(--process-accent-secondary)" strokeWidth="1.8" strokeLinecap="round" />
          </g>
        </svg>
      );
    case "05":
      return (
        <svg viewBox="-26 -26 52 52" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
          <ellipse cx="-10" cy="-7" rx="10" ry="4.5" stroke="var(--process-accent)" strokeWidth="2.2" />
          <path d="M -20 -7 V 7 C -20 9.5 -15.5 11.5 -10 11.5 C -4.5 11.5 0 9.5 0 7 V -7" stroke="var(--process-accent)" strokeWidth="2.2" />
          <ellipse cx="-10" cy="0" rx="10" ry="4.5" stroke="var(--process-accent-secondary)" strokeWidth="1.6" strokeDasharray="3 2" />
          <rect x="3" y="-17" width="18" height="25" rx="3.5" stroke="var(--process-accent)" strokeWidth="2.2" fill="var(--process-btn-bg-start)" />
          <rect x="6.5" y="-3" width="2.5" height="7.5" rx="0.8" fill="var(--process-accent-secondary)" />
          <rect x="10.8" y="-8" width="2.5" height="12.5" rx="0.8" fill="var(--process-accent)" />
          <rect x="15" y="-1" width="2.5" height="5.5" rx="0.8" fill="var(--process-accent-secondary)" />
          <line x1="6.5" y1="-12" x2="17.5" y2="-12" stroke="var(--process-accent-secondary)" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "06":
      return (
        <svg viewBox="-26 -26 52 52" className="w-6 h-6 sm:w-7 sm:h-7" fill="none">
          <rect x="-16" y="-10" width="32" height="22" rx="3.5" stroke="var(--process-accent)" strokeWidth="2.4" />
          <circle cx="0" cy="1" r="7.5" stroke="var(--process-accent-secondary)" strokeWidth="1.8" />
          <ellipse cx="0" cy="1" rx="3.5" ry="7.5" stroke="var(--process-accent-secondary)" strokeWidth="1.3" />
          <line x1="-7.5" y1="1" x2="7.5" y2="1" stroke="var(--process-accent-secondary)" strokeWidth="1.3" />
          <path d="M -19 12 L 19 12 L 16 17 L -16 17 Z" stroke="var(--process-accent)" strokeWidth="2.2" strokeLinejoin="round" />
          <circle cx="-13" cy="-14" r="3.2" stroke="var(--process-accent)" strokeWidth="1.6" strokeDasharray="2 1.5" fill="var(--process-btn-bg-start)" />
          <circle cx="13" cy="-14" r="3.2" stroke="var(--process-accent)" strokeWidth="1.6" fill="var(--process-btn-bg-start)" />
        </svg>
      );
    default:
      return null;
  }
}

export function ProcessSection() {
  return (
    <section
      id="process"
      style={{
        scrollMarginTop: "calc(var(--navbar-height, 72px) + 16px)",
      }}
      className="relative w-full bg-background pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-12 overflow-hidden select-none px-3 sm:px-6 transition-colors duration-300"
      aria-labelledby="process-heading"
    >
      {/* Container calibrated to the exact width and padding of the Navbar capsule */}
      <div className="mx-auto w-full max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] px-2 sm:px-3 lg:px-4">
        {/* Section Heading centered with title guaranteed on one single line */}
        <div className="mb-6 sm:mb-8 lg:mb-10 w-full flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            eyebrow="OUR WORKFLOW"
            title="THE 6-STAGE DEVELOPMENT WORKFLOW"
            goldAccentText="DEVELOPMENT WORKFLOW"
            titleClassName="whitespace-nowrap text-[clamp(14px,4.2vw,44px)] sm:text-3xl md:text-4xl lg:text-5xl tracking-tight"
            subtitle="From initial discovery to continuous scaling, our transparent agile workflow delivers high-performance digital products on time and within budget."
          />
        </div>

        {/* ============================================================
            01. MOBILE & TABLET: PURE PORTRAIT COLUMN FLOW (< lg)
            - 100% Vertical thumb scroll (Zero horizontal swipe)
            - Continuous golden fluid ribbon spine
            - Concentric dual-layer 3D circular nodes
            - High-contrast editorial infographic typography
            ============================================================ */}
        <div className="flex lg:hidden flex-col relative w-full max-w-xl mx-auto my-2 sm:my-4">
          {/* Continuous Glowing Golden Fluid Ribbon Spine */}
          <div
            className="absolute left-[27px] sm:left-[31px] top-7 bottom-12 w-2 sm:w-2.5 pointer-events-none rounded-full"
            style={{
              background:
                "linear-gradient(180deg, var(--process-ribbon) 0%, var(--process-ribbon) 85%, transparent 100%)",
              boxShadow:
                "0 0 16px 2px var(--process-ribbon-glow), 0 0 28px var(--process-ribbon-glow)",
            }}
          />

          <div className="flex flex-col gap-8 sm:gap-10 w-full relative">
            {STEPS.map((s) => (
              <div
                key={`portrait-step-${s.step}`}
                className="relative flex items-start gap-4 sm:gap-6 w-full group"
              >
                {/* Concentric Dual-Layer 3D Node (Exact same as desktop!) */}
                <div className="relative shrink-0 z-10">
                  {/* 1. Outer Golden Base Disc with Glow */}
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: "var(--process-ribbon)",
                      boxShadow:
                        "0 8px 24px -4px var(--process-ribbon-glow), 0 2px 8px -2px var(--process-ribbon-shadow-dark)",
                    }}
                  >
                    {/* 2. Inner 3D Elevated Push-Button */}
                    <div
                      className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden"
                      style={{
                        background:
                          "radial-gradient(circle at 36% 30%, var(--process-btn-bg-start) 0%, var(--process-btn-bg-end) 100%)",
                        border: "1.5px solid var(--process-btn-rim-end)",
                        boxShadow:
                          "0 4px 12px -2px var(--process-btn-shadow), inset 0 2px 4px 0 rgba(255, 255, 255, 0.25)",
                      }}
                    >
                      {/* Top-Left Gloss Highlight Arc */}
                      <div
                        className="absolute top-1 left-2 right-2 h-3 rounded-full opacity-60 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(180deg, var(--process-btn-rim-start) 0%, transparent 100%)",
                        }}
                      />

                      {/* Centered Vector Icon */}
                      <div className="relative z-10">
                        {renderPortraitStepIcon(s.step)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clean Infographic Typography (NO rectangular box!) */}
                <div className="flex-1 min-w-0 pt-0.5">
                  {/* Step Numeral */}
                  <span className="font-mono text-2xl sm:text-3xl font-extrabold text-gold-500 dark:text-gold-400 leading-none tracking-tight">
                    {s.step}
                  </span>

                  {/* Step Title */}
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white leading-snug mt-1 group-hover:text-gold-400 transition-colors">
                    {s.title} {s.titleLine2 ? <span className="block sm:inline">{s.titleLine2}</span> : null}
                  </h3>

                  {/* Description Lines with Gold Bullet Dots */}
                  <div className="mt-2 space-y-1 sm:space-y-1.5">
                    {s.descriptionLines.map((line, lIdx) => (
                      <div
                        key={lIdx}
                        className="flex items-center gap-2 text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: "var(--process-ribbon)" }}
                        />
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================
            02. DESKTOP VIEW (lg:block): 6-STAGE SINE-WAVE RUNWAY
            ============================================================ */}
        <div className="hidden lg:block relative w-full aspect-[1200/400]">
          {/* ============================================================
              A. SVG LAYER: UNIFIED THEME-DRIVEN FLUID RIBBON & ATOMIC NODES
              ============================================================ */}
          <svg
            viewBox="0 0 1200 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
            aria-hidden="true"
          >
            <defs>
              {/* Theme Fluid Ribbon Drop Shadow (Adaptive Gold Glow) */}
              <filter
                id="fluidWaveShadow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feDropShadow
                  dx="0"
                  dy="8"
                  stdDeviation="12"
                  floodColor="var(--process-ribbon)"
                  floodOpacity="0.32"
                />
                <feDropShadow
                  dx="0"
                  dy="3"
                  stdDeviation="4"
                  floodColor="var(--process-ribbon-shadow-dark)"
                  floodOpacity="0.35"
                />
              </filter>

              {/* 3D Elevated Button Drop Shadow */}
              <filter
                id="buttonDropShadow"
                x="-40%"
                y="-40%"
                width="180%"
                height="180%"
              >
                <feDropShadow
                  dx="4"
                  dy="10"
                  stdDeviation="8"
                  floodColor="var(--process-btn-shadow)"
                  floodOpacity="0.35"
                />
                <feDropShadow
                  dx="1"
                  dy="3"
                  stdDeviation="3"
                  floodColor="#000000"
                  floodOpacity="0.2"
                />
              </filter>

              {/* Spherical Radial Gradient for 3D Convex Button Surface */}
              <radialGradient
                id="buttonSurfaceGradient"
                cx="36%"
                cy="30%"
                r="70%"
                fx="30%"
                fy="24%"
              >
                <stop offset="0%" stopColor="var(--process-btn-bg-start)" />
                <stop offset="100%" stopColor="var(--process-btn-bg-end)" />
              </radialGradient>

              {/* Subtle Bevel Rim Gradient for the Button */}
              <linearGradient
                id="buttonRimGradient"
                x1="20%"
                y1="20%"
                x2="80%"
                y2="80%"
              >
                <stop offset="0%" stopColor="var(--process-btn-rim-start)" />
                <stop offset="100%" stopColor="var(--process-btn-rim-end)" />
              </linearGradient>
            </defs>

            {/* ============================================================
                B. UNIFIED CONTINUOUS FLUID BODY (THEME-DRIVEN METABALLS)
                ============================================================ */}
            <g filter="url(#fluidWaveShadow)" fill="var(--process-ribbon)">
              {/* 1. The 5 Mathematical Tangent Metaball Bridges */}
              {METABALL_BRIDGES.map((pathD, idx) => (
                <path
                  key={`bridge-${idx}`}
                  d={pathD}
                  stroke="var(--process-ribbon)"
                  strokeWidth="1"
                />
              ))}

              {/* 2. Concentric Base Connecting Discs (R = 60) — 100% Round Curvature */}
              {STEPS.map((s) => (
                <circle
                  key={`disc-${s.step}`}
                  cx={s.nodeX}
                  cy={s.nodeY}
                  r={BLUE_RADIUS}
                />
              ))}
            </g>

            {/* ============================================================
                C. 3D ELEVATED PUSH-BUTTONS & EMBEDDED ICONS
                ============================================================ */}
            {STEPS.map((s) => (
              <g key={`button-group-${s.step}`}>
                {/* The 3D Elevated Button with Realistic Shadow & Bevel */}
                <circle
                  cx={s.nodeX}
                  cy={s.nodeY}
                  r={BUTTON_RADIUS}
                  fill="url(#buttonSurfaceGradient)"
                  stroke="url(#buttonRimGradient)"
                  strokeWidth="1.5"
                  filter="url(#buttonDropShadow)"
                />

                {/* Inner Crisp Highlight Edge Ring (Top-Left Gloss Reflection) */}
                <path
                  d={`M ${s.nodeX - 38} ${s.nodeY - 14} A 40 40 0 0 1 ${s.nodeX + 14} ${s.nodeY - 38}`}
                  stroke="var(--process-btn-rim-start)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeOpacity="0.85"
                />

                {/* Embedded Vector Icons with Scale 1.32 */}
                <g transform={`translate(${s.nodeX}, ${s.nodeY}) scale(1.32)`}>
                  {/* ICON 01: Discovery & Strategy */}
                  {s.step === "01" && (
                    <g>
                      <circle
                        cx="-5"
                        cy="-5"
                        r="15"
                        stroke="var(--process-accent)"
                        strokeWidth="2.8"
                        fill="none"
                      />
                      <path
                        d="M -15 -7 A 11 11 0 0 1 -7 -15"
                        stroke="var(--process-accent-secondary)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                      <circle cx="-1" cy="-7" r="1.5" fill="var(--process-accent-secondary)" />
                      <line
                        x1="5"
                        y1="5"
                        x2="8"
                        y2="8"
                        stroke="var(--process-accent-secondary)"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <line
                        x1="8"
                        y1="8"
                        x2="19"
                        y2="19"
                        stroke="var(--process-accent)"
                        strokeWidth="4.2"
                        strokeLinecap="round"
                      />
                      <circle cx="16" cy="-15" r="1.6" fill="var(--process-accent-secondary)" />
                      <circle cx="-17" cy="11" r="1.4" fill="var(--process-accent)" />
                    </g>
                  )}

                  {/* ICON 02: UI/UX & Rapid Prototyping */}
                  {s.step === "02" && (
                    <g>
                      <rect
                        x="-21"
                        y="-11"
                        width="18"
                        height="31"
                        rx="4"
                        stroke="var(--process-accent)"
                        strokeWidth="2.4"
                        fill="none"
                      />
                      <line
                        x1="-17"
                        y1="-4"
                        x2="-7"
                        y2="-4"
                        stroke="var(--process-accent-secondary)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <line
                        x1="-17"
                        y1="0"
                        x2="-11"
                        y2="0"
                        stroke="var(--process-accent-secondary)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <rect
                        x="3"
                        y="-18"
                        width="18"
                        height="31"
                        rx="4"
                        stroke="var(--process-accent)"
                        strokeWidth="2.4"
                        fill="none"
                      />
                      <circle cx="12" cy="8.5" r="1.4" fill="var(--process-accent)" />

                      <circle cx="-12" cy="11" r="2" fill="var(--process-accent)" />
                      <path
                        d="M -10 11 C -2 11, -2 0.5, 4 0.5"
                        stroke="var(--process-accent)"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 1 -2.5 L 5 0.5 L 1 3.5"
                        stroke="var(--process-accent)"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <circle cx="-16" cy="-17" r="1.4" fill="var(--process-accent-secondary)" />
                      <circle cx="2" cy="-21" r="1.6" fill="var(--process-accent)" />
                      <circle cx="23" cy="-7" r="1.4" fill="var(--process-accent-secondary)" />
                      <circle cx="24" cy="18" r="1.5" fill="var(--process-accent)" />
                      <circle cx="-5" cy="23" r="1.4" fill="var(--process-accent-secondary)" />
                    </g>
                  )}

                  {/* ICON 03: Agile Full-Stack Development */}
                  {s.step === "03" && (
                    <g>
                      <rect
                        x="-23"
                        y="-16"
                        width="46"
                        height="34"
                        rx="4.5"
                        stroke="var(--process-accent)"
                        strokeWidth="2.4"
                        fill="none"
                      />
                      <line
                        x1="-23"
                        y1="-7"
                        x2="23"
                        y2="-7"
                        stroke="var(--process-accent)"
                        strokeWidth="1.8"
                      />
                      <circle cx="-16" cy="-11.5" r="1.5" fill="var(--process-accent-secondary)" />
                      <circle cx="-11" cy="-11.5" r="1.5" fill="var(--process-accent-secondary)" />

                      <path
                        d="M -11 2 L -16 7 L -11 12"
                        stroke="var(--process-accent)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M 7 2 L 12 7 L 7 12"
                        stroke="var(--process-accent)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="1"
                        y1="1"
                        x2="-3"
                        y2="13"
                        stroke="var(--process-accent)"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />

                      <circle
                        cx="15"
                        cy="13"
                        r="5.5"
                        stroke="var(--process-accent)"
                        strokeWidth="2"
                        strokeDasharray="3 1.8"
                        fill="var(--process-btn-bg-start)"
                      />
                      <circle cx="15" cy="13" r="1.8" fill="var(--process-accent-secondary)" />
                    </g>
                  )}

                  {/* ICON 04: QA, Testing & Deployment */}
                  {s.step === "04" && (
                    <g transform="rotate(45)">
                      <path
                        d="M 0 -22 C -6 -14, -10 -2, -9 11 L 9 11 C 10 -2, 6 -14, 0 -22 Z"
                        stroke="var(--process-accent)"
                        strokeWidth="2.4"
                        strokeLinejoin="round"
                        fill="var(--process-btn-bg-start)"
                      />

                      <path
                        d="M -8 3 L -17 14 C -14 14, -11 13, -9 10 Z"
                        stroke="var(--process-accent)"
                        strokeWidth="2.2"
                        strokeLinejoin="round"
                        fill="none"
                      />

                      <path
                        d="M 8 3 L 17 14 C 14 14, 11 13, 9 10 Z"
                        stroke="var(--process-accent)"
                        strokeWidth="2.2"
                        strokeLinejoin="round"
                        fill="none"
                      />

                      <circle
                        cx="0"
                        cy="-5"
                        r="4.5"
                        stroke="var(--process-accent)"
                        strokeWidth="2"
                        fill="var(--process-btn-bg-end)"
                      />
                      <circle
                        cx="0"
                        cy="-5"
                        r="2.2"
                        fill="var(--process-accent-secondary)"
                      />

                      <path
                        d="M -4 11 L -5 14 L 5 14 L 4 11 Z"
                        stroke="var(--process-accent)"
                        strokeWidth="1.8"
                        fill="var(--process-accent)"
                      />

                      <line
                        x1="0"
                        y1="16"
                        x2="0"
                        y2="26"
                        stroke="var(--process-accent)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                      <line
                        x1="-4"
                        y1="16"
                        x2="-6"
                        y2="23"
                        stroke="var(--process-accent-secondary)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <line
                        x1="4"
                        y1="16"
                        x2="6"
                        y2="23"
                        stroke="var(--process-accent-secondary)"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />

                      <circle cx="-15" cy="-8" r="1.4" fill="var(--process-accent-secondary)" />
                      <circle cx="15" cy="-10" r="1.6" fill="var(--process-accent)" />
                      <circle cx="0" cy="-26" r="1.5" fill="var(--process-accent-secondary)" />
                    </g>
                  )}

                  {/* ICON 05: Analytics & Performance */}
                  {s.step === "05" && (
                    <g>
                      <ellipse
                        cx="-10"
                        cy="3"
                        rx="10"
                        ry="4"
                        stroke="var(--process-accent)"
                        strokeWidth="2.2"
                        fill="none"
                      />
                      <path
                        d="M -20 3 V 15 C -20 17.5 -15.5 19.5 -10 19.5 C -4.5 19.5 0 17.5 0 15 V 3"
                        stroke="var(--process-accent)"
                        strokeWidth="2.2"
                        fill="none"
                      />
                      <ellipse
                        cx="-10"
                        cy="9"
                        rx="10"
                        ry="4"
                        stroke="var(--process-accent-secondary)"
                        strokeWidth="1.6"
                        strokeDasharray="3 2"
                        fill="none"
                      />

                      <rect
                        x="3"
                        y="-19"
                        width="18"
                        height="24"
                        rx="3.5"
                        stroke="var(--process-accent)"
                        strokeWidth="2.2"
                        fill="var(--process-btn-bg-start)"
                      />
                      <rect x="6" y="-7" width="2.5" height="8" rx="0.5" fill="var(--process-accent-secondary)" />
                      <rect x="10.5" y="-11" width="2.5" height="12" rx="0.5" fill="var(--process-accent)" />
                      <rect x="15" y="-4" width="2.5" height="5" rx="0.5" fill="var(--process-accent-secondary)" />
                      <line
                        x1="6"
                        y1="-14"
                        x2="18"
                        y2="-14"
                        stroke="var(--process-accent-secondary)"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />

                      <path
                        d="M -3 0 L 3 -5"
                        stroke="var(--process-accent)"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                      <circle cx="-13" cy="-10" r="1.5" fill="var(--process-accent)" />
                    </g>
                  )}

                  {/* ICON 06: Scaling & Continuous Growth */}
                  {s.step === "06" && (
                    <g>
                      <rect
                        x="-18"
                        y="-15"
                        width="36"
                        height="24"
                        rx="3"
                        stroke="var(--process-accent)"
                        strokeWidth="2.4"
                        fill="none"
                      />
                      <circle
                        cx="0"
                        cy="-3"
                        r="7.5"
                        stroke="var(--process-accent-secondary)"
                        strokeWidth="1.8"
                        fill="none"
                      />
                      <ellipse
                        cx="0"
                        cy="-3"
                        rx="3.5"
                        ry="7.5"
                        stroke="var(--process-accent-secondary)"
                        strokeWidth="1.3"
                        fill="none"
                      />
                      <line
                        x1="-7.5"
                        y1="-3"
                        x2="7.5"
                        y2="-3"
                        stroke="var(--process-accent-secondary)"
                        strokeWidth="1.3"
                      />

                      <path
                        d="M -22 9 L 22 9 L 19 14 L -19 14 Z"
                        stroke="var(--process-accent)"
                        strokeWidth="2.2"
                        strokeLinejoin="round"
                        fill="none"
                      />

                      <circle
                        cx="-16"
                        cy="-19"
                        r="3.8"
                        stroke="var(--process-accent)"
                        strokeWidth="1.8"
                        strokeDasharray="2.5 1.5"
                        fill="var(--process-btn-bg-start)"
                      />
                      <circle
                        cx="16"
                        cy="-19"
                        r="3.8"
                        stroke="var(--process-accent)"
                        strokeWidth="1.8"
                        fill="var(--process-btn-bg-start)"
                      />
                      <path
                        d="M 16 -22 V -16 M 13 -19 H 19"
                        stroke="var(--process-accent-secondary)"
                        strokeWidth="1.3"
                      />
                    </g>
                  )}
                </g>
              </g>
            ))}
          </svg>

          {/* ============================================================
              D. STRICT LEFT-ALIGNED DESKTOP TYPOGRAPHY
              ============================================================ */}
          {STEPS.map((s) => {
            const textTopPct = s.isUp ? (280 / 400) * 100 : (60 / 400) * 100;
            const textLeftPct = ((s.nodeX - 54) / 1200) * 100;

            return (
              <div
                key={`text-${s.step}`}
                style={{
                  position: "absolute",
                  left: `${textLeftPct}%`,
                  top: `${textTopPct}%`,
                  width: "165px",
                }}
                className="z-10 flex flex-col text-left select-none pointer-events-none group"
              >
                {/* Step Numeral */}
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-gold-500 dark:text-gold-400 leading-none tracking-tight">
                  {s.step}
                </span>

                {/* Step Title */}
                <h3 className="text-[14px] sm:text-[15px] font-bold text-neutral-900 dark:text-white leading-snug mt-1 group-hover:text-gold-400 transition-colors">
                  {s.title}
                  {s.titleLine2 && (
                    <span className="block text-gold-600 dark:text-gold-400/90 font-bold">{s.titleLine2}</span>
                  )}
                </h3>

                {/* Description Lines */}
                <div className="mt-1.5 text-[11px] sm:text-[11.5px] text-neutral-600 dark:text-neutral-400 font-normal leading-[1.38] space-y-0.5">
                  {s.descriptionLines.map((line, lIdx) => (
                    <div key={lIdx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-gold-400/70 shrink-0" />
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
