"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

/**
 * Senior-Tier Butter Smooth Scroll Provider
 *
 * Powered by Lenis (Industry Gold Standard by Darkroom Engineering)
 * Features:
 * - 60fps/120fps hardware-synchronized inertial physics
 * - Exponential deceleration easing curve (true buttery feel)
 * - Zero interference with native scrollbars, accessibility, and SEO
 * - Automatic in-page hash link smooth scrollTo with fixed navbar offset (-80px)
 * - Full `prefers-reduced-motion` compliance
 * - Synchronized with GSAP ScrollTrigger
 */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Respect user's accessibility setting for reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    // Initialize Lenis with senior-tier butter smooth tuning
    const lenis = new Lenis({
      duration: 1.25, // Silky inertia settlement window
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration curve
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.4,
      infinite: false,
      prevent: (node) => {
        return (
          node.hasAttribute("data-lenis-prevent") ||
          Boolean(node.closest?.("[data-lenis-prevent]")) ||
          Boolean(node.closest?.('[role="dialog"]')) ||
          Boolean(node.closest?.(".modal-custom-scrollbar"))
        );
      },
    });

    lenisRef.current = lenis;
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    // Synchronize Lenis scroll updates with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis directly from GSAP Ticker for 100% unified lockstep rendering
    const tickerUpdate = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerUpdate);
    gsap.ticker.lagSmoothing(0);

    // Global in-page smooth scroll interceptor for hash links (e.g. href="#services", href="#about", etc.)
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          const navHeight =
            parseFloat(
              getComputedStyle(document.documentElement).getPropertyValue(
                "--navbar-height"
              )
            ) || 72;
          lenis.scrollTo(targetElement as HTMLElement, {
            offset: -(navHeight + 24), // Dynamic clearance below floating navbar
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      gsap.ticker.remove(tickerUpdate);
      document.removeEventListener("click", handleAnchorClick);
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
