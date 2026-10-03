"use client";

import React from "react";

/**
 * FrostedGlassOverlay Component
 *
 * Sits at Z-Index 20 between the background liquid service bubbles (Z-10)
 * and the foreground hero typography (Z-30).
 *
 * True Frosted Window Glass Physics:
 * 1. Milky Frosted Diffusion: Heavy backdrop-blur (18px - 28px) with a translucent
 *    frost tint (bg-white/[0.06] in dark, bg-white/[0.60] in light) makes the bubbles
 *    behind it look softly diffused, dreamy, and organic.
 * 2. High-Contrast Rain Droplets: Water drops with dual specular glares, caustic
 *    refractions, and ambient shadows, visible on both pure black and white surfaces.
 * 3. Diagonal Wet Sheen & Top Glass Rim Highlight.
 * 4. Pass-through: pointer-events-none ensures all clicks & touches reach buttons & bubbles.
 */
export function FrostedGlassOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Light 20% Frosted Window Glass Sheet */}
      <div className="frosted-window-glass absolute inset-0 backdrop-blur-[4px] sm:backdrop-blur-[5px] backdrop-saturate-[120%] transition-all duration-300" />

      {/* 2. Glass Surface Condensation & Subtle Moisture Sheen */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/[0.12] dark:from-white/[0.02] dark:via-transparent dark:to-black/[0.25]" />

      {/* 3. Top Specular Glass Rim (Simulates the top edge of a physical window pane) */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 dark:via-white/15 to-transparent" />

      {/* 4. Realistic Rainy Water Droplets Layer (High-Contrast Pure SVG Optics) */}
      <svg
        className="absolute inset-0 h-full w-full opacity-30 dark:opacity-90 transition-opacity duration-300"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          {/* Specular Glint for Primary Water Beads */}
          <radialGradient id="raindropGlint" cx="30%" cy="28%" r="60%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#ffffff" stopOpacity="0.65" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.4" />
          </radialGradient>

          {/* Lower Caustic Rim for Water Drop Depth */}
          <linearGradient id="causticRim" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.75" />
          </linearGradient>

          {/* Fine Dew Micro-Droplet Glow */}
          <radialGradient id="dewDrop" cx="35%" cy="30%" r="55%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          {/* Seamless Repeating Rain Window Droplet Pattern */}
          <pattern
            id="rainDropletsPattern"
            width="280"
            height="280"
            patternUnits="userSpaceOnUse"
          >
            {/* === 1. Major Circular Rainwater Beads (100% Round Spherical Droplets) === */}
            {/* Drop 1 */}
            <g filter="drop-shadow(0 2px 3px rgba(0,0,0,0.55))">
              <circle cx="55" cy="65" r="8.5" fill="url(#raindropGlint)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
              <circle cx="55" cy="66" r="6.5" fill="url(#causticRim)" />
              <circle cx="53" cy="62" r="2.2" fill="#ffffff" opacity="0.95" />
            </g>

            {/* Drop 2 */}
            <g filter="drop-shadow(0 2px 3px rgba(0,0,0,0.55))">
              <circle cx="205" cy="40" r="7.5" fill="url(#raindropGlint)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
              <circle cx="203" cy="37" r="1.8" fill="#ffffff" opacity="0.95" />
            </g>

            {/* Drop 3 */}
            <g filter="drop-shadow(0 2px 3px rgba(0,0,0,0.55))">
              <circle cx="125" cy="155" r="9.5" fill="url(#raindropGlint)" stroke="rgba(255,255,255,0.45)" strokeWidth="0.75" />
              <circle cx="123" cy="151" r="2.4" fill="#ffffff" opacity="0.95" />
            </g>

            {/* Drop 4 */}
            <g filter="drop-shadow(0 2px 3px rgba(0,0,0,0.55))">
              <circle cx="245" cy="190" r="8" fill="url(#raindropGlint)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
              <circle cx="243" cy="186" r="1.9" fill="#ffffff" opacity="0.95" />
            </g>

            {/* Drop 5 */}
            <g filter="drop-shadow(0 2px 3px rgba(0,0,0,0.55))">
              <circle cx="35" cy="225" r="7.5" fill="url(#raindropGlint)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
              <circle cx="33" cy="222" r="1.8" fill="#ffffff" opacity="0.95" />
            </g>

            {/* Drop 6 */}
            <g filter="drop-shadow(0 2px 3px rgba(0,0,0,0.55))">
              <circle cx="175" cy="240" r="7" fill="url(#raindropGlint)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
              <circle cx="173" cy="237" r="1.7" fill="#ffffff" opacity="0.95" />
            </g>

            {/* === 2. Medium Circular Water Droplets (100% Round) === */}
            <g filter="drop-shadow(0 1.5px 2px rgba(0,0,0,0.45))">
              <circle cx="95" cy="30" r="4.8" fill="url(#raindropGlint)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.6" />
              <circle cx="160" cy="80" r="5.2" fill="url(#raindropGlint)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.6" />
              <circle cx="25" cy="120" r="4.4" fill="url(#raindropGlint)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.6" />
              <circle cx="235" cy="110" r="5.5" fill="url(#raindropGlint)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.6" />
              <circle cx="75" cy="180" r="4.8" fill="url(#raindropGlint)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.6" />
              <circle cx="195" cy="150" r="4.4" fill="url(#raindropGlint)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.6" />
              <circle cx="130" cy="255" r="5" fill="url(#raindropGlint)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.6" />
              <circle cx="260" cy="48" r="4" fill="url(#raindropGlint)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.6" />
            </g>

            {/* === 3. Fine Dew & Condensation Moisture Speckles === */}
            <g opacity="0.9">
              <circle cx="18" cy="25" r="1.8" fill="url(#dewDrop)" />
              <circle cx="42" cy="45" r="1.4" fill="url(#dewDrop)" />
              <circle cx="80" cy="62" r="2.0" fill="url(#dewDrop)" />
              <circle cx="138" cy="35" r="1.6" fill="url(#dewDrop)" />
              <circle cx="185" cy="22" r="2.1" fill="url(#dewDrop)" />
              <circle cx="225" cy="68" r="1.5" fill="url(#dewDrop)" />
              <circle cx="270" cy="85" r="1.9" fill="url(#dewDrop)" />
              <circle cx="65" cy="105" r="1.5" fill="url(#dewDrop)" />
              <circle cx="110" cy="118" r="2.0" fill="url(#dewDrop)" />
              <circle cx="142" cy="100" r="1.4" fill="url(#dewDrop)" />
              <circle cx="180" cy="122" r="1.8" fill="url(#dewDrop)" />
              <circle cx="212" cy="98" r="1.5" fill="url(#dewDrop)" />
              <circle cx="12" cy="170" r="2.0" fill="url(#dewDrop)" />
              <circle cx="52" cy="152" r="1.6" fill="url(#dewDrop)" />
              <circle cx="92" cy="148" r="1.3" fill="url(#dewDrop)" />
              <circle cx="155" cy="195" r="2.2" fill="url(#dewDrop)" />
              <circle cx="220" cy="212" r="1.7" fill="url(#dewDrop)" />
              <circle cx="268" cy="160" r="2.0" fill="url(#dewDrop)" />
              <circle cx="18" cy="265" r="1.5" fill="url(#dewDrop)" />
              <circle cx="60" cy="248" r="2.1" fill="url(#dewDrop)" />
              <circle cx="100" cy="222" r="1.5" fill="url(#dewDrop)" />
              <circle cx="150" cy="230" r="1.8" fill="url(#dewDrop)" />
              <circle cx="195" cy="270" r="1.4" fill="url(#dewDrop)" />
              <circle cx="232" cy="252" r="2.2" fill="url(#dewDrop)" />
              <circle cx="272" cy="235" r="1.6" fill="url(#dewDrop)" />
            </g>

            {/* === 4. Vertical Rain Water Drip Trails (Surface Tension Paths) === */}
            <path
              d="M125 166 Q 125 185 124 200"
              stroke="rgba(255,255,255,0.45)"
              strokeWidth="0.8"
              fill="none"
              strokeDasharray="2,3"
            />
            <path
              d="M245 199 Q 246 215 245 228"
              stroke="rgba(255,255,255,0.40)"
              strokeWidth="0.75"
              fill="none"
              strokeDasharray="2,3"
            />
            <path
              d="M55 75 Q 55 92 54 105"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="0.7"
              fill="none"
              strokeDasharray="2,3"
            />
          </pattern>
        </defs>

        {/* Static repeating rain droplet beads & condensation pattern */}
        <rect width="100%" height="100%" fill="url(#rainDropletsPattern)" />

        {/* === Dynamic Physics-Based Dripping Rain Rivulets (Stick-Slip Gravitational Loops) === */}
        {/* Rivulet 1: Left-Center Wing (x=14%) */}
        <svg x="14%" y="10%" overflow="visible">
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="420"
            stroke="rgba(255,255,255,0.38)"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="rain-stream-trail-1"
          />
          <g className="rain-stream-drop-1" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.6))">
            <circle cx="0" cy="0" r="5.5" fill="url(#raindropGlint)" stroke="rgba(255,255,255,0.45)" strokeWidth="0.7" />
            <circle cx="0" cy="1" r="4" fill="url(#causticRim)" />
            <circle cx="-1" cy="-1.5" r="1.5" fill="#ffffff" opacity="0.95" />
          </g>
        </svg>

        {/* Rivulet 2: Right Flank (x=74%) */}
        <svg x="74%" y="8%" overflow="visible">
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="420"
            stroke="rgba(255,255,255,0.32)"
            strokeWidth="1"
            strokeLinecap="round"
            className="rain-stream-trail-2"
          />
          <g className="rain-stream-drop-2" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.6))">
            <circle cx="0" cy="0" r="4.8" fill="url(#raindropGlint)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" />
            <circle cx="0" cy="0.8" r="3.4" fill="url(#causticRim)" />
            <circle cx="-0.8" cy="-1.2" r="1.2" fill="#ffffff" opacity="0.95" />
          </g>
        </svg>

        {/* Rivulet 3: Far Left Flank (x=5%) */}
        <svg x="5%" y="6%" overflow="visible">
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="440"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.4"
            strokeLinecap="round"
            className="rain-stream-trail-3"
          />
          <g className="rain-stream-drop-3" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.6))">
            <circle cx="0" cy="0" r="6.2" fill="url(#raindropGlint)" stroke="rgba(255,255,255,0.45)" strokeWidth="0.75" />
            <circle cx="0" cy="1" r="4.5" fill="url(#causticRim)" />
            <circle cx="-1.2" cy="-1.8" r="1.6" fill="#ffffff" opacity="0.95" />
          </g>
        </svg>

        {/* Rivulet 4: Far Right Flank (x=91%) */}
        <svg x="91%" y="12%" overflow="visible">
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="380"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="0.9"
            strokeLinecap="round"
            className="rain-stream-trail-4"
          />
          <g className="rain-stream-drop-4" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.6))">
            <circle cx="0" cy="0" r="4.2" fill="url(#raindropGlint)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" />
            <circle cx="0" cy="0.6" r="3" fill="url(#causticRim)" />
            <circle cx="-0.6" cy="-1" r="1" fill="#ffffff" opacity="0.95" />
          </g>
        </svg>
      </svg>

      {/* 5. Glistening Surface Water Specular Sheen (Diagonal natural window refraction) */}
      <div className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-25 [background:linear-gradient(125deg,transparent_20%,rgba(255,255,255,0.15)_45%,rgba(255,255,255,0.25)_50%,rgba(255,255,255,0.10)_55%,transparent_80%)]" />
    </div>
  );
}
