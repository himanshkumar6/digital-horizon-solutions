"use client";

import React, { useState, useEffect, useRef } from "react";
import { useQuote } from "@/components/cta/QuoteContext";
import { SERVICE_ECOSYSTEM } from "@/lib/constants";
import {
  renderCategoryIcon,
  renderSubServiceIcon,
} from "@/components/navigation/ServiceIcons";
import { X, ChevronDown, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileServicesPanelProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategoryId?: string;
}

export function MobileServicesPanel({
  isOpen,
  onClose,
  initialCategoryId,
}: MobileServicesPanelProps) {
  const { openQuote } = useQuote();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Set initial category if provided when opening, otherwise keep collapsed
  useEffect(() => {
    if (isOpen) {
      setExpandedCategory(initialCategoryId || null);
    }
  }, [isOpen, initialCategoryId]);

  // Lock body scroll with scroll restoration
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // ESC key dismiss & Focus Trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  const handleNavigateToAnchor = (anchorId: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(anchorId) || document.getElementById("services");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  const handleCtaClick = () => {
    onClose();
    setTimeout(() => {
      openQuote();
    }, 150);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end lg:hidden">
      {/* Backdrop overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        aria-hidden="true"
      />

      {/* Slide-Up Bottom Sheet Panel (Liquid Glass Surface) */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Services Menu"
        className="relative z-10 w-full max-h-[78vh] xs:max-h-[75vh] flex flex-col rounded-t-[24px] xs:rounded-t-[28px] liquid-glass-panel text-neutral-900 dark:text-white shadow-[0_-20px_50px_rgba(0,0,0,0.6)] animate-in slide-in-from-bottom duration-250 ease-out"
      >
        {/* Top Drag Handle Indicator */}
        <div className="shrink-0 pt-2 pb-0.5 flex justify-center">
          <div className="w-8 h-1 rounded-full bg-neutral-400/40 dark:bg-white/20" />
        </div>

        {/* Clean, Direct Header: Just "Services" + Liquid Glass Close Button */}
        <div className="shrink-0 px-4 py-2 border-b border-neutral-200/80 dark:border-white/10 flex items-center justify-between">
          <h2 className="text-sm xs:text-base font-bold tracking-tight text-neutral-900 dark:text-white">
            Services
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 xs:w-8 xs:h-8 rounded-full flex items-center justify-center liquid-glass-circle text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white active:scale-95 transition-all cursor-pointer"
            aria-label="Close services menu"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Services List with Direct Accordion Dropdown on Click */}
        <div className="flex-1 overflow-y-auto px-3.5 py-2 space-y-1.5 overscroll-contain">
          {SERVICE_ECOSYSTEM.map((category) => {
            const isExpanded = expandedCategory === category.id;

            return (
              <div
                key={category.id}
                className={cn(
                  "rounded-xl border transition-all duration-200 overflow-hidden",
                  isExpanded
                    ? "border-amber-500/40 dark:border-amber-400/30 bg-neutral-50/80 dark:bg-white/[0.03] shadow-sm"
                    : "border-neutral-200/80 dark:border-white/10 bg-white dark:bg-neutral-900/40 hover:border-neutral-300 dark:hover:border-white/20"
                )}
              >
                {/* Service Row Button: Click opens dropdown right below it */}
                <button
                  type="button"
                  onClick={() => toggleCategory(category.id)}
                  className="w-full min-h-[44px] px-3 py-2 flex items-center justify-between gap-2.5 text-left transition-colors cursor-pointer select-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="shrink-0 flex items-center justify-center">
                      {renderCategoryIcon(category.id, "h-4.5 w-4.5")}
                    </span>
                    <span className="text-xs xs:text-[13px] font-semibold text-neutral-900 dark:text-white truncate">
                      {category.title}
                    </span>
                  </div>

                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 text-neutral-500 dark:text-neutral-400 transition-transform duration-200 shrink-0",
                      isExpanded && "rotate-180 text-amber-600 dark:text-amber-400"
                    )}
                  />
                </button>

                {/* Dropdown Content: Revealed right underneath the clicked service */}
                {isExpanded && (
                  <div className="px-2.5 pb-2 pt-0.5 border-t border-neutral-200/60 dark:border-white/10 space-y-1 animate-in fade-in duration-150">
                    {category.items.map((item) => (
                      <button
                        key={item.title}
                        type="button"
                        onClick={() => handleNavigateToAnchor(category.id)}
                        className="w-full flex items-start gap-2.5 p-2 rounded-lg hover:bg-neutral-100/90 dark:hover:bg-white/[0.06] text-left transition-colors cursor-pointer group"
                      >
                        <div className="shrink-0 mt-0.5 w-7 h-7 rounded-md flex items-center justify-center bg-neutral-100 dark:bg-white/[0.05] border border-neutral-200/60 dark:border-white/10 group-hover:scale-105 transition-transform">
                          {renderSubServiceIcon(item.title, item.iconName, "h-4 w-4")}
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-[11.5px] xs:text-xs font-semibold text-neutral-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="px-1.5 py-0 text-[8.5px] font-semibold rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[10px] xs:text-[10.5px] leading-tight text-neutral-500 dark:text-neutral-400 mt-0.5 line-clamp-1 xs:line-clamp-2">
                            {item.description}
                          </p>
                        </div>

                        <ArrowUpRight className="h-3 w-3 text-neutral-400 group-hover:text-amber-500 shrink-0 mt-1 transition-colors" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Clean Sticky Bottom Liquid Glass CTA Button */}
        <div className="shrink-0 px-3.5 py-2 border-t border-neutral-200/80 dark:border-white/10 bg-white/70 dark:bg-neutral-950/70 backdrop-blur-md pb-[max(0.6rem,env(safe-area-inset-bottom,0.6rem))]">
          <button
            type="button"
            onClick={handleCtaClick}
            className="w-full min-h-[38px] xs:min-h-[40px] inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-amber-300 via-gold-400 to-amber-600 py-2 px-4 text-xs xs:text-[13px] font-bold text-neutral-950 shadow-[0_3px_12px_rgba(212,175,55,0.35),inset_0_1px_1px_rgba(255,255,255,0.6)] hover:brightness-110 border border-amber-200/50 active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Get Free Audit ↗</span>
          </button>
        </div>
      </div>
    </div>
  );
}
