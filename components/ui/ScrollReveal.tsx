"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type RevealDirection =
  | "up"
  | "down"
  | "left"
  | "right"
  | "center"
  | "none";

export type RevealVariant = "liquid" | "glass" | "image" | "card" | "text";

export type RevealState = "hidden" | "revealing" | "settled";

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  direction?: RevealDirection;
  delay?: number; // ms
  duration?: number; // ms
  distance?: number; // px
  blur?: number; // px
  scale?: number;
  variant?: RevealVariant;
  threshold?: number;
  once?: boolean;
  shimmer?: boolean;
  as?: React.ElementType;
}

export function ScrollReveal({
  children,
  className,
  wrapperClassName,
  direction = "up",
  delay = 0,
  duration = 720,
  distance,
  blur,
  scale,
  variant = "liquid",
  threshold = 0.12,
  once = true,
  shimmer = true,
  as: Component = "div",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [revealState, setRevealState] = useState<RevealState>("hidden");

  useEffect(() => {
    // Respect accessibility settings
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setRevealState("settled");
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    let settleTimer: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealState("revealing");

          if (once) {
            observer.unobserve(element);
            // Once transition completes, promote to clean 'settled' state
            settleTimer = setTimeout(() => {
              setRevealState("settled");
            }, duration + delay + 120);
          }
        } else if (!once) {
          setRevealState("hidden");
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (settleTimer) clearTimeout(settleTimer);
    };
  }, [threshold, once, duration, delay]);

  const directionClass = {
    up: "liquid-reveal-up",
    down: "liquid-reveal-down",
    left: "liquid-reveal-left",
    right: "liquid-reveal-right",
    center: "liquid-reveal-center",
    none: "liquid-reveal-none",
  }[direction];

  // Inline style custom properties for dynamic CSS tuning (cleared when settled)
  const isSettled = revealState === "settled";
  const customStyles: React.CSSProperties = isSettled
    ? {}
    : ({
        "--reveal-delay": `${delay}ms`,
        "--reveal-duration": `${duration}ms`,
        ...(distance !== undefined && {
          "--reveal-y":
            direction === "up"
              ? `${distance}px`
              : direction === "down"
              ? `-${distance}px`
              : "0px",
          "--reveal-x":
            direction === "left"
              ? `-${distance}px`
              : direction === "right"
              ? `${distance}px`
              : "0px",
        }),
        ...(blur !== undefined && { "--reveal-blur": `${blur}px` }),
        ...(scale !== undefined && { "--reveal-scale": `${scale}` }),
      } as React.CSSProperties);

  return (
    <Component
      ref={elementRef}
      style={customStyles}
      data-reveal-state={revealState}
      className={cn(
        "liquid-reveal-wrapper",
        "liquid-reveal-element",
        directionClass,
        revealState === "revealing" && "is-revealed",
        isSettled && "is-settled",
        variant === "card" && "rounded-2xl",
        variant === "image" && "rounded-3xl",
        className
      )}
    >
      {shimmer && revealState === "revealing" && (
        <div className="liquid-reveal-shimmer" aria-hidden="true" />
      )}
      {children}
    </Component>
  );
}
