"use client";

import React from "react";
import {
  ClipboardCheck,
  Lightbulb,
  FileCode,
  Rocket,
} from "lucide-react";

/*
 * PIXEL-ACCURATE REFERENCE CLONE OF media_1790696222564.jpg
 * - Top-left process header ("PROCESS OF COMMERCIAL DELIVERY")
 * - Central continuous fluid metaball ribbon (Royal Blue to Electric Cyan gradient)
 * - Staggered circular milestone nodes (Stage 01 Right, Stage 02 Left, Stage 03 Right, Stage 04 Left)
 * - White circular discs with drop-shadow and colored outline icons
 * - Solid baseline extending under text + curved dotted capsule enclosure matching node radius
 * - Bottom-right agency brand signature
 */

interface StageItem {
  step: string;
  stageName: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  nodeX: number;
  nodeY: number;
  side: "right" | "left";
  textLeftPercent: number;
  textRightPercent: number;
  textTopPercent: number;
  textAlign: "left" | "right";
}

const STAGES: StageItem[] = [
  {
    step: "01",
    stageName: "STRATEGY",
    title: "ANALYZE THE BRIEF",
    subtitle: "Commercial Discovery & Audit",
    icon: ClipboardCheck,
    nodeX: 210,
    nodeY: 100,
    side: "right",
    textLeftPercent: (238 / 360) * 100, // ~66.1%
    textRightPercent: 0,
    textTopPercent: (100 / 530) * 100,
    textAlign: "left",
  },
  {
    step: "02",
    stageName: "DESIGN",
    title: "RESEARCH & DRAFT",
    subtitle: "High-Conversion Architecture",
    icon: Lightbulb,
    nodeX: 150,
    nodeY: 205,
    side: "left",
    textLeftPercent: 0,
    textRightPercent: ((360 - 122) / 360) * 100, // right aligned to node left edge
    textTopPercent: (205 / 530) * 100,
    textAlign: "right",
  },
  {
    step: "03",
    stageName: "EXECUTION",
    title: "CREATE THE SYSTEM",
    subtitle: "Production Code & Fast APIs",
    icon: FileCode,
    nodeX: 210,
    nodeY: 310,
    side: "right",
    textLeftPercent: (238 / 360) * 100,
    textRightPercent: 0,
    textTopPercent: (310 / 530) * 100,
    textAlign: "left",
  },
  {
    step: "04",
    stageName: "GROWTH",
    title: "DELIVER & SCALE",
    subtitle: "Live Launch & Analytics Tuning",
    icon: Rocket,
    nodeX: 150,
    nodeY: 415,
    side: "left",
    textLeftPercent: 0,
    textRightPercent: ((360 - 122) / 360) * 100,
    textTopPercent: (415 / 530) * 100,
    textAlign: "right",
  },
];

export function MobileApproachJourney() {
  return (
    <div className="relative w-full max-w-[400px] mx-auto select-none pt-2 pb-28 xs:pb-32 px-1">
      {/* 360:530 Aspect Ratio Coordinate Frame matching the Reference Image */}
      <div className="relative w-full aspect-[360/530] overflow-hidden">
        {/* ============================================================
            SVG LAYER: FLUID METABALL SPINE, DISCS & DOTTED CAPSULES
            ============================================================ */}
        <svg
          viewBox="0 0 360 530"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
        >
          <defs>
            {/* Exact Reference Gradient: Deep Royal Blue to Electric Cyan */}
            <linearGradient id="refSpineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="25%" stopColor="#2563eb" />
              <stop offset="65%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>

            {/* Circular Node Drop Shadow */}
            <filter id="refDiscShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#000000" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* ------------------------------------------------------------
              1. CONTINUOUS CENTRAL FLUID METABALL RIBBON
              Connecting Node 1 (210, 100) -> Node 2 (150, 205) ->
              Node 3 (210, 310) -> Node 4 (150, 415)
              ------------------------------------------------------------ */}
          {/* Fluid S-Curve Connecting Spine */}
          <path
            d="M 210 100 C 210 152.5, 150 152.5, 150 205 C 150 257.5, 210 257.5, 210 310 C 210 362.5, 150 362.5, 150 415"
            stroke="url(#refSpineGrad)"
            strokeWidth="20"
            strokeLinecap="round"
          />

          {/* Colored Circle Backings merging into the fluid neck */}
          {STAGES.map((s) => (
            <circle
              key={`back-${s.step}`}
              cx={s.nodeX}
              cy={s.nodeY}
              r="27"
              fill="url(#refSpineGrad)"
            />
          ))}

          {/* ------------------------------------------------------------
              2. SOLID BASELINES & DOTTED ENCLOSURE CAPSULES
              Mathematically aligned to node radius (R = 23)
              ------------------------------------------------------------ */}
          {/* Stage 01 (Right) */}
          <g>
            {/* Solid Horizontal Baseline */}
            <line x1="233" y1="123" x2="335" y2="123" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
            {/* Dotted Capsule Arc */}
            <path
              d="M 233 77 L 312 77 C 324.7 77, 335 87.3, 335 100 C 335 112.7, 324.7 123, 312 123 L 233 123"
              stroke="#0284c7"
              strokeWidth="1.4"
              strokeDasharray="3.5 3"
              strokeLinecap="round"
            />
          </g>

          {/* Stage 02 (Left) */}
          <g>
            {/* Solid Horizontal Baseline */}
            <line x1="127" y1="228" x2="25" y2="228" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
            {/* Dotted Capsule Arc */}
            <path
              d="M 127 182 L 48 182 C 35.3 182, 25 192.3, 25 205 C 25 217.7, 35.3 228, 48 228 L 127 228"
              stroke="#0284c7"
              strokeWidth="1.4"
              strokeDasharray="3.5 3"
              strokeLinecap="round"
            />
          </g>

          {/* Stage 03 (Right) */}
          <g>
            {/* Solid Horizontal Baseline */}
            <line x1="233" y1="333" x2="335" y2="333" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
            {/* Dotted Capsule Arc */}
            <path
              d="M 233 287 L 312 287 C 324.7 287, 335 297.3, 335 310 C 335 322.7, 324.7 333, 312 333 L 233 333"
              stroke="#0284c7"
              strokeWidth="1.4"
              strokeDasharray="3.5 3"
              strokeLinecap="round"
            />
          </g>

          {/* Stage 04 (Left) */}
          <g>
            {/* Solid Horizontal Baseline */}
            <line x1="127" y1="438" x2="25" y2="438" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
            {/* Dotted Capsule Arc */}
            <path
              d="M 127 392 L 48 392 C 35.3 392, 25 402.3, 25 415 C 25 427.7, 35.3 438, 48 438 L 127 438"
              stroke="#0284c7"
              strokeWidth="1.4"
              strokeDasharray="3.5 3"
              strokeLinecap="round"
            />
          </g>

          {/* ------------------------------------------------------------
              3. WHITE CIRCULAR MILESTONE DISCS (With Drop Shadow)
              ------------------------------------------------------------ */}
          {STAGES.map((s) => (
            <circle
              key={`disc-${s.step}`}
              cx={s.nodeX}
              cy={s.nodeY}
              r="23"
              fill="#ffffff"
              stroke="#0284c7"
              strokeWidth="2"
              filter="url(#refDiscShadow)"
            />
          ))}
        </svg>

        {/* ============================================================
            TOP-LEFT PROCESS TITLE (Matching Reference Image Header)
            ============================================================ */}
        <div
          style={{
            position: "absolute",
            left: "6%",
            top: "5%",
            width: "38%",
          }}
          className="flex flex-col text-left select-none pointer-events-none"
        >
          <span className="font-mono text-[11px] xs:text-[12px] font-black tracking-widest uppercase text-neutral-900 dark:text-neutral-100">
            PROCESS OF
          </span>
          <h2 className="text-xl xs:text-2xl font-black uppercase tracking-tight text-[#0284c7] leading-[1.05] mt-0.5">
            COMMERCIAL <br />
            DELIVERY
          </h2>
        </div>

        {/* ============================================================
            HTML CONTENT OVERLAYS: ICONS & ENCLOSED STAGE TEXT
            ============================================================ */}
        {STAGES.map((s) => {
          const Icon = s.icon;
          const isRight = s.side === "right";

          return (
            <React.Fragment key={s.step}>
              {/* Colored Line-Art Icon inside White Node */}
              <div
                style={{
                  position: "absolute",
                  left: `${(s.nodeX / 360) * 100}%`,
                  top: `${(s.nodeY / 530) * 100}%`,
                  transform: "translate(-50%, -50%)",
                }}
                className="z-20 flex items-center justify-center pointer-events-none"
              >
                <Icon className="w-5 h-5 text-[#0284c7] stroke-[1.8]" />
              </div>

              {/* Text Block Positioned Neatly Inside Dotted Enclosure */}
              <div
                style={{
                  position: "absolute",
                  left: isRight ? `${s.textLeftPercent}%` : "auto",
                  right: !isRight ? `${s.textRightPercent}%` : "auto",
                  top: `${s.textTopPercent}%`,
                  transform: "translateY(-50%)",
                  width: `${(96 / 360) * 100}%`,
                }}
                className={s.textAlign === "right" ? "text-right pr-1" : "text-left pl-1"}
              >
                {/* Step Numeral & Stage Name */}
                <p className="font-mono text-[8.5px] xs:text-[9px] font-black uppercase tracking-widest text-[#0284c7] leading-tight">
                  {s.step} {s.stageName}
                </p>

                {/* Main Action Title (2 lines max, matching reference weight) */}
                <h4 className="text-[10.5px] xs:text-[11px] font-black uppercase tracking-tight text-neutral-900 dark:text-white leading-tight mt-0.5">
                  {s.title}
                </h4>

                {/* Subtitle / Key Deliverable */}
                <p className="text-[8px] xs:text-[8.5px] font-mono text-neutral-500 dark:text-neutral-400 mt-0.5 leading-tight truncate">
                  {s.subtitle}
                </p>
              </div>
            </React.Fragment>
          );
        })}

        {/* ============================================================
            BOTTOM-RIGHT BRAND SIGNATURE (Matching Reference Layout)
            ============================================================ */}
        <div
          style={{
            position: "absolute",
            right: "6%",
            bottom: "5%",
          }}
          className="flex items-center gap-2 z-10 select-none"
        >
          {/* Geometric Diamond Emblem */}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#1e40af] via-[#0284c7] to-[#06b6d4] flex items-center justify-center text-white font-black text-xs shadow-md">
            DH
          </div>
          {/* Agency Signature */}
          <div className="text-left">
            <p className="font-mono text-[9px] font-black tracking-wider uppercase text-neutral-900 dark:text-white leading-tight">
              DIGITAL HORIZON
            </p>
            <p className="font-mono text-[7.5px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              SOLUTIONS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
