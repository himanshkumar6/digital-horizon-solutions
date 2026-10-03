"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export interface LiquidGlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "navbar";
  href?: string;
  isExternal?: boolean;
  arrowType?: "up-right" | "right" | "none";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export const LiquidGlassButton = React.forwardRef<
  HTMLButtonElement,
  LiquidGlassButtonProps
>(
  (
    {
      className,
      variant = "primary",
      href,
      isExternal,
      arrowType,
      icon,
      iconPosition = "right",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Determine default arrow if not specified
    const resolvedArrow =
      arrowType !== undefined
        ? arrowType
        : variant === "secondary"
        ? "right"
        : "up-right";

    const variantClass = {
      primary: "btn-liquid-glass btn-liquid-glass-primary",
      secondary: "btn-liquid-glass btn-liquid-glass-secondary",
      navbar: "btn-liquid-glass btn-liquid-glass-navbar",
    }[variant];

    const arrowIcon =
      resolvedArrow === "up-right" ? (
        <ArrowUpRight
          className={cn(
            "btn-arrow-up-right shrink-0 transition-transform duration-200",
            variant === "secondary"
              ? "h-4 w-4 text-neutral-500 group-hover:text-amber-700 dark:text-neutral-400 dark:group-hover:text-gold-400"
              : "h-4 w-4 text-amber-700 dark:text-gold-400"
          )}
        />
      ) : resolvedArrow === "right" ? (
        <ArrowRight
          className={cn(
            "btn-arrow-right shrink-0 transition-transform duration-200",
            variant === "secondary"
              ? "h-4 w-4 text-neutral-500 group-hover:text-amber-700 dark:text-neutral-400 dark:group-hover:text-gold-400"
              : "h-4 w-4 text-amber-700 dark:text-gold-400"
          )}
        />
      ) : null;

    const renderedIcon = icon || arrowIcon;

    const content = (
      <>
        {renderedIcon && iconPosition === "left" && (
          <span className="btn-icon shrink-0">{renderedIcon}</span>
        )}
        <span className="truncate">{children}</span>
        {renderedIcon && iconPosition === "right" && (
          <span className="btn-icon shrink-0">{renderedIcon}</span>
        )}
      </>
    );

    const combinedClassName = cn("group", variantClass, className);

    if (href) {
      return (
        <Link
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={combinedClassName}
          aria-disabled={disabled}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type={props.type || "button"}
        className={combinedClassName}
        disabled={disabled}
        {...props}
      >
        {content}
      </button>
    );
  }
);

LiquidGlassButton.displayName = "LiquidGlassButton";
