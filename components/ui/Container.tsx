import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "full";
}

/**
 * Authoritative Global Content Container
 * Single source of truth for horizontal layout, max-width, and responsive gutters:
 * - Mobile (<640px): 16px (px-4)
 * - Tablet (640px-1023px): 24px (sm:px-6)
 * - Desktop (1024px+): 32px (lg:px-8)
 * - Max-width: 1280px (max-w-7xl)
 */
export function Container({
  as: Component = "div",
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full mx-auto",
        size === "default" && "max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] px-3 sm:px-5 lg:px-6 xl:px-8",
        size === "narrow" && "max-w-5xl px-3 sm:px-5 lg:px-6 xl:px-8",
        size === "full" && "max-w-full px-3 sm:px-5 lg:px-6 xl:px-8",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
