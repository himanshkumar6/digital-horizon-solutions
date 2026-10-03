import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  eyebrowClassName?: string;
  goldAccentText?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
  eyebrowClassName,
  goldAccentText,
}: SectionHeadingProps) {
  // If a specific word/phrase should be highlighted in gold:
  let renderedTitle: React.ReactNode = title;
  if (goldAccentText && title.includes(goldAccentText)) {
    const parts = title.split(goldAccentText);
    renderedTitle = (
      <>
        {parts[0]}
        <span className="text-gold-gradient font-bold">{goldAccentText}</span>
        {parts[1]}
      </>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
          <p
            className={cn(
              "font-sans text-xs sm:text-[13px] uppercase tracking-wide text-neutral-500 dark:text-neutral-400 font-semibold",
              eyebrowClassName
            )}
          >
            {eyebrow}
          </p>
        </div>
      )}

      <h2
        className={cn(
          "text-2xl xs:text-3xl font-extrabold uppercase tracking-tight text-neutral-950 dark:text-white sm:text-4xl lg:text-5xl leading-[1.12]",
          titleClassName
        )}
      >
        {renderedTitle}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "text-sm xs:text-base text-neutral-600 dark:text-neutral-400 sm:text-lg leading-relaxed font-normal mt-1",
            align === "center" ? "max-w-3xl mx-auto" : "max-w-3xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
