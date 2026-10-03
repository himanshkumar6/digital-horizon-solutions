"use client";

import React from "react";
import { ScrollReveal, RevealDirection, RevealVariant } from "./ScrollReveal";
import { cn } from "@/lib/utils";

export interface ScrollRevealGroupProps {
  children: React.ReactNode;
  stagger?: number; // ms between items (default: 50ms)
  baseDelay?: number; // ms before first item starts (default: 0ms)
  direction?: RevealDirection;
  variant?: RevealVariant;
  className?: string;
  itemClassName?: string;
  distance?: number;
  duration?: number;
  as?: React.ElementType;
}

export function ScrollRevealGroup({
  children,
  stagger = 50,
  baseDelay = 0,
  direction = "up",
  variant = "card",
  className,
  itemClassName,
  distance,
  duration = 700,
  as: Component = "div",
}: ScrollRevealGroupProps) {
  const childArray = React.Children.toArray(children);

  return (
    <Component className={className}>
      {childArray.map((child, index) => {
        const itemDelay = baseDelay + index * stagger;

        return (
          <ScrollReveal
            key={index}
            direction={direction}
            delay={itemDelay}
            duration={duration}
            distance={distance}
            variant={variant}
            className={itemClassName}
          >
            {child}
          </ScrollReveal>
        );
      })}
    </Component>
  );
}
