import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "interactive";
  glow?: boolean;
}

export function GlassCard({
  children,
  className,
  variant = "default",
  glow = false,
  ...props
}: GlassCardProps) {
  const variantStyles = {
    default:
      "bg-neutral-900/40 border border-white/[0.07] backdrop-blur-md shadow-card",
    elevated:
      "bg-neutral-900/70 border border-white/10 backdrop-blur-lg shadow-xl",
    interactive:
      "glass-card hover:border-gold-400/30 hover:bg-neutral-900/60 cursor-pointer",
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl p-6 transition-all duration-300",
        variantStyles[variant],
        glow && "relative before:absolute before:-inset-px before:rounded-2xl before:bg-gradient-to-b before:from-gold-400/20 before:to-transparent before:-z-10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
