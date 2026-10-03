import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "gold" | "subtle" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 tracking-wider",
    md: "text-xs px-3 py-1 tracking-wider",
  };

  const variantStyles = {
    default:
      "bg-white/[0.04] text-neutral-300 border border-white/10 backdrop-blur-sm",
    gold:
      "bg-gold-400/10 text-amber-200 border border-gold-400/30",
    subtle:
      "bg-neutral-900/80 text-neutral-400 border border-neutral-800",
    outline:
      "bg-transparent text-neutral-400 border border-neutral-700/60",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-mono uppercase font-medium",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            variant === "gold" ? "bg-gold-400 animate-pulse" : "bg-neutral-400"
          )}
        />
      )}
      {children}
    </span>
  );
}
