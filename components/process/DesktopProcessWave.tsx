"use client";

import React from "react";
import {
  Search,
  Smartphone,
  Code2,
  Rocket,
} from "lucide-react";

/*
 * DESKTOP PROCESS WAVE STEPPER
 * Reference: media_1790696517366.jpg
 * - Continuous horizontal organic sine-wave fluid ribbon
 * - Multi-layer node discs with drop shadow & line-art icons
 * - Alternating placement:
 *   Stage 01: Node Down, Text Above
 *   Stage 02: Node Up, Text Below
 *   Stage 03: Node Down, Text Above
 *   Stage 04: Node Up, Text Below
 */

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ElementType;
  nodeX: number;
  nodeY: number;
  isUp: boolean; // true = node up, text down; false = node down, text up
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Understanding commercial friction, user intent, and architecture.",
    icon: Search,
    nodeX: 155,
    nodeY: 260,
    isUp: false,
  },
  {
    step: "02",
    title: "Wireframe & Prototyping",
    description: "Creating high-conversion user flows and intuitive visual systems.",
    icon: Smartphone,
    nodeX: 385,
    nodeY: 110,
    isUp: true,
  },
  {
    step: "03",
    title: "Production Engineering",
    description: "Sub-second load speeds, clean Next.js code, and bulletproof APIs.",
    icon: Code2,
    nodeX: 615,
    nodeY: 260,
    isUp: false,
  },
  {
    step: "04",
    title: "Launch & Scaling",
    description: "Edge deployment, continuous tracking, and conversion refinement.",
    icon: Rocket,
    nodeX: 845,
    nodeY: 110,
    isUp: true,
  },
];

export function DesktopProcessWave() {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-6 select-none">
      {/* Aspect-ratio calibrated coordinate space (1000:380) */}
      <div className="relative w-full aspect-[1000/380] overflow-visible">
        {/* ============================================================
            SVG LAYER: FLUID SINE-WAVE RIBBON & ELEVATED DISCS
            ============================================================ */}
        <svg
          viewBox="0 0 1000 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          aria-hidden="true"
        >
          <defs>
            {/* Exact Reference Gradient: Deep Royal Blue to Electric Sky Blue */}
            <linearGradient id="sineWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="25%" stopColor="#2563eb" />
              <stop offset="65%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>

            {/* Ambient Shadow for Fluid Ribbon */}
            <filter id="ribbonShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#0284c7" floodOpacity="0.25" />
            </filter>

            {/* Circular Node Elevation Shadow */}
            <filter id="nodeElevation" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000000" floodOpacity="0.18" />
              <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#0284c7" floodOpacity="0.2" />
            </filter>
          </defs>

          {/* 1. CONTINUOUS FLUID SINE WAVE RIBBON */}
          <path
            d="M 60 260 L 110 260 C 130 260, 140 260, 155 260 C 270 260, 270 110, 385 110 C 500 110, 500 260, 615 260 C 730 260, 730 110, 845 110 C 865 110, 875 110, 930 110"
            stroke="url(#sineWaveGrad)"
            strokeWidth="24"
            strokeLinecap="round"
            filter="url(#ribbonShadow)"
          />

          {/* 2. COLORED NODE BACKING BASES MERGING INTO RIBBON */}
          {PROCESS_STEPS.map((step) => (
            <circle
              key={`base-${step.step}`}
              cx={step.nodeX}
              cy={step.nodeY}
              r="38"
              fill="url(#sineWaveGrad)"
            />
          ))}

          {/* 3. WHITE CIRCULAR DISCS WITH ELEVATION */}
          {PROCESS_STEPS.map((step) => (
            <g key={`disc-${step.step}`} filter="url(#nodeElevation)">
              <circle
                cx={step.nodeX}
                cy={step.nodeY}
                r="31"
                fill="#ffffff"
                stroke="#0284c7"
                strokeWidth="2.5"
                className="dark:fill-[#10141f]"
              />
            </g>
          ))}
        </svg>

        {/* ============================================================
            HTML LAYER: VECTOR ICONS & COMPLEMENTARY TEXT BLOCKS
            ============================================================ */}
        {PROCESS_STEPS.map((step) => {
          const Icon = step.icon;

          return (
            <React.Fragment key={step.step}>
              {/* Circular Node Icon */}
              <div
                style={{
                  position: "absolute",
                  left: `${(step.nodeX / 1000) * 100}%`,
                  top: `${(step.nodeY / 380) * 100}%`,
                  transform: "translate(-50%, -50%)",
                }}
                className="z-20 flex items-center justify-center pointer-events-none"
              >
                <Icon className="w-7 h-7 text-[#0284c7] stroke-[1.9]" />
              </div>

              {/* Text Block (Positioned Opposite to Node) */}
              <div
                style={{
                  position: "absolute",
                  left: `${(step.nodeX / 1000) * 100}%`,
                  top: step.isUp ? "70%" : "22%",
                  transform: "translate(-50%, -50%)",
                  width: "180px",
                }}
                className="z-10 flex flex-col items-center text-center px-1"
              >
                {/* Step Numeral */}
                <span className="font-mono text-xl xs:text-2xl font-black text-neutral-900 dark:text-white leading-none">
                  {step.step}
                </span>

                {/* Stage Title */}
                <h3 className="text-sm xs:text-base font-extrabold text-[#0284c7] leading-snug mt-1.5">
                  {step.title}
                </h3>

                {/* Description Body */}
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mt-1 max-w-[170px]">
                  {step.description}
                </p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
