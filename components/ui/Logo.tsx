"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme/ThemeContext";

interface LogoProps {
  className?: string;
  variant?: "navbar" | "stacked" | "mark";
  size?: "sm" | "md" | "lg";
}

export function Logo({
  className,
  variant = "navbar",
  size = "md",
}: LogoProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted && theme === "light";

  const heights = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12 sm:h-14",
  };

  const stackedHeights = {
    sm: "h-14",
    md: "h-20",
    lg: "h-24",
  };

  if (variant === "mark") {
    return (
      <Link
        href="/"
        className={cn(
          "group inline-flex items-center transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg",
          className
        )}
        aria-label="Digital Horizon Solutions Homepage"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo-mark.svg"
          alt="Digital Horizon Solutions Icon"
          className={cn(heights[size], "w-auto object-contain")}
          width={48}
          height={40}
        />
      </Link>
    );
  }

  if (variant === "stacked") {
    return (
      <Link
        href="/"
        className={cn(
          "group inline-flex flex-col items-start transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg",
          className
        )}
        aria-label="Digital Horizon Solutions Homepage"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.svg"
          alt="Digital Horizon Solutions Logo"
          className={cn(stackedHeights[size], "w-auto object-contain")}
          width={220}
          height={110}
        />
      </Link>
    );
  }

  // Default: Horizontal Navbar SVG logo (switches cleanly between dark and light mode SVGs)
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center transition-opacity hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg",
        className
      )}
      aria-label="Digital Horizon Solutions Homepage"
    >
      {/* Light Mode Logo (Visible when html does NOT have .dark) */}
      <img
        src="/logo-navbar-light.svg"
        alt="Digital Horizon Solutions"
        className={cn(
          heights[size],
          "w-auto max-w-[140px] xs:max-w-[180px] sm:max-w-[220px] md:max-w-[260px] object-contain transition-opacity duration-200 dark:hidden"
        )}
        width={260}
        height={40}
      />
      {/* Dark Mode Logo (Visible when html has .dark) */}
      <img
        src="/logo-navbar.svg"
        alt="Digital Horizon Solutions"
        className={cn(
          heights[size],
          "w-auto max-w-[140px] xs:max-w-[180px] sm:max-w-[220px] md:max-w-[260px] object-contain transition-opacity duration-200 hidden dark:block"
        )}
        width={260}
        height={40}
      />
    </Link>
  );
}
