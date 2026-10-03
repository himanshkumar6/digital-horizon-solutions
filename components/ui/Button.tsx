import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "glass" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal,
      icon,
      iconPosition = "right",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium transition-all duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 rounded-lg gap-1.5 tracking-wide",
      md: "text-sm px-5 py-2.5 rounded-xl gap-2 tracking-wide",
      lg: "text-base px-6 py-3.5 rounded-xl gap-2.5 font-semibold tracking-wide",
    };

    const variantStyles = {
      primary:
        "bg-gradient-to-r from-amber-200 via-gold-400 to-amber-600 text-neutral-950 shadow-gold-glow hover:shadow-gold-glow-lg hover:brightness-105 font-semibold border border-amber-300/30",
      secondary:
        "bg-neutral-900/90 text-neutral-100 hover:text-white border border-neutral-700/80 hover:border-gold-400/60 hover:bg-neutral-800 shadow-sm",
      glass:
        "bg-white/[0.04] text-neutral-200 hover:text-white border border-white/10 hover:border-gold-400/40 hover:bg-white/[0.08] backdrop-blur-md",
      outline:
        "bg-transparent text-neutral-300 hover:text-white border border-neutral-800 hover:border-neutral-600",
      ghost:
        "bg-transparent text-neutral-400 hover:text-white hover:bg-white/[0.05]",
    };

    const combinedClasses = cn(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    );

    const content = (
      <>
        {icon && iconPosition === "left" && (
          <span className="shrink-0 transition-transform duration-200">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="shrink-0 transition-transform duration-200">
            {icon}
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={combinedClasses}
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
        className={combinedClasses}
        disabled={disabled}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
