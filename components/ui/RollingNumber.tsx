"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RollingNumberProps {
  value: string; // e.g. "3+", "05", "1.5+"
  className?: string;
  delay?: number;
}

// 10 intermediate digits for an authentic mechanical odometer reel roll
const REEL_DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export function RollingNumber({ value, className, delay = 0 }: RollingNumberProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSettled, setIsSettled] = useState(false);

  useEffect(() => {
    // Respect accessibility settings
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      setIsSettled(true);
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    let timer: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
          timer = setTimeout(() => {
            setIsSettled(true);
          }, 1800 + delay);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, [delay]);

  // Parse characters in the value
  const characters = value.split("");

  return (
    <span
      ref={containerRef}
      className={cn("inline-flex items-baseline font-mono select-none", className)}
      aria-label={value}
    >
      <span className="sr-only">{value}</span>
      <span aria-hidden="true" className="inline-flex items-baseline">
        {characters.map((char, colIdx) => {
          const isDigit = /^[0-9]$/.test(char);

          if (!isDigit) {
            return (
              <span key={colIdx} className="roll-symbol inline-block font-extrabold">
                {char}
              </span>
            );
          }

          const targetDigit = parseInt(char, 10);
          // Reel list: cycles through 10 numbers then settles on targetDigit
          const reelList = [...REEL_DIGITS, ...Array.from({ length: targetDigit + 1 }, (_, i) => i)];
          const targetIndex = 10 + targetDigit;

          return (
            <span
              key={colIdx}
              className="inline-block h-[1.12em] overflow-hidden leading-[1.12em] align-baseline"
            >
              <span
                className="flex flex-col transition-transform"
                style={{
                  transform: isVisible
                    ? `translateY(-${targetIndex * 1.12}em)`
                    : `translateY(0em)`,
                  transitionDuration: isSettled ? "0ms" : "1400ms",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${delay + colIdx * 90}ms`,
                  willChange: isSettled ? "auto" : "transform",
                }}
              >
                {reelList.map((num, i) => (
                  <span
                    key={i}
                    className="roll-char h-[1.12em] flex items-center justify-center font-extrabold"
                  >
                    {num}
                  </span>
                ))}
              </span>
            </span>
          );
        })}
      </span>
    </span>
  );
}
