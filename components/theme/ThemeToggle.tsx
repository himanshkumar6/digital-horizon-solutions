"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeContext";
import { cn } from "@/lib/utils";
import { playToggleSound } from "@/lib/sound";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  size?: "sm" | "md";
}

/**
 * Signature Theme Toggle — Digital Horizon Liquid Glass Disc
 *
 * Clean, centered celestial control inside a liquid-glass circular disc:
 * - Single translucent glass circle surface with refractive highlight and rim
 * - Perfectly centered celestial icon (Radiant Sun in Light Mode, Crescent Moon in Dark Mode)
 * - Smooth 3D rotational flip and scale crossfade on theme change
 * - Atmospheric warm gold luminescence in Light Mode
 * - Crisp tactile acoustic audio click feedback
 * - Fully accessible with keyboard focus rings, screen reader labels, and SSR hydration safety
 */
export function ThemeToggle({ className, size = "md" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  const handleToggle = () => {
    const nextTheme = isDark ? "light" : "dark";
    // Play physical switch click audio feedback
    playToggleSound(nextTheme);
    setIsRotating(true);
    toggleTheme();
    setTimeout(() => {
      setIsRotating(false);
    }, 450);
  };

  const sizeClasses = {
    sm: "w-9 h-9 min-w-[36px] min-h-[36px]",
    md: "w-10 h-10 min-w-[40px] min-h-[40px]",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
  };

  // Prevent hydration mismatch on initial SSR
  if (!mounted) {
    return (
      <div
        className={cn(
          "inline-flex items-center justify-center rounded-full opacity-0 pointer-events-none",
          sizeClasses[size],
          className
        )}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={cn(
        "group relative inline-flex items-center justify-center rounded-full liquid-glass-circle",
        "transition-all duration-300 active:scale-95 select-none cursor-pointer",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        sizeClasses[size],
        className
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={!isDark}
    >
      {/* Background Soft Atmospheric Glow (Expands in Light Mode) */}
      <span
        className={cn(
          "pointer-events-none absolute inset-0 rounded-full blur-md transition-all duration-700 ease-out -z-10",
          isDark
            ? "opacity-0 scale-75 bg-transparent"
            : "opacity-80 scale-125 bg-amber-400/30"
        )}
        aria-hidden="true"
      />

      {/* Centered Celestial Icon Container */}
      <div
        className={cn(
          "relative flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isRotating && "rotate-180 scale-90",
          iconSizes[size]
        )}
      >
        {/* Sun Icon (Light Mode) */}
        <Sun
          className={cn(
            "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] absolute inset-0 m-auto",
            iconSizes[size],
            isDark
              ? "scale-0 -rotate-90 opacity-0 text-amber-300/40 pointer-events-none"
              : "scale-100 rotate-0 opacity-100 text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]"
          )}
          strokeWidth={2}
        />

        {/* Moon Icon (Dark Mode) */}
        <Moon
          className={cn(
            "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] absolute inset-0 m-auto",
            iconSizes[size],
            isDark
              ? "scale-100 rotate-0 opacity-100 text-neutral-300 group-hover:text-amber-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]"
              : "scale-0 rotate-90 opacity-0 text-neutral-500 pointer-events-none"
          )}
          strokeWidth={2}
        />
      </div>
    </button>
  );
}

