"use client";

import React, { useEffect, useRef } from "react";
import { useQuote } from "@/components/cta/QuoteContext";
import {
  X,
  Briefcase,
  Users,
  PhoneCall,
  Star,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileMorePanelProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export function MobileMorePanel({
  isOpen,
  onClose,
  onNavigateSection,
}: MobileMorePanelProps) {
  const { openQuote } = useQuote();
  const panelRef = useRef<HTMLDivElement>(null);

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

  const moreItems = [
    {
      id: "portfolio",
      title: "Portfolio",
      badge: "Case Studies",
      description:
        "Explore our recent client websites, e-commerce engines, and custom applications.",
      icon: Briefcase,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10 border-amber-500/20",
      action: () => onNavigateSection("portfolio"),
    },
    {
      id: "why-us",
      title: "About Us",
      badge: "Why DHS",
      description:
        "Our design philosophy, engineering standards, and why businesses trust us.",
      icon: Users,
      color: "text-sky-500",
      bgColor: "bg-sky-500/10 border-sky-500/20",
      action: () => onNavigateSection("why-us"),
    },
    {
      id: "contact",
      title: "Contact & Inquiry",
      badge: "Get in Touch",
      description:
        "Talk directly with our team for project estimates, scope, and technical roadmap.",
      icon: PhoneCall,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10 border-emerald-500/20",
      action: () => onNavigateSection("contact"),
    },
    {
      id: "testimonials",
      title: "Client Testimonials",
      badge: "Reviews",
      description:
        "See how our digital solutions delivered measurable ROI for business owners.",
      icon: Star,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10 border-yellow-500/20",
      action: () => onNavigateSection("testimonials"),
    },
  ];

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
        aria-label="More Navigation Menu"
        className="relative z-10 w-full max-h-[75vh] xs:max-h-[70vh] flex flex-col rounded-t-[24px] xs:rounded-t-[28px] liquid-glass-panel text-neutral-900 dark:text-white shadow-[0_-20px_50px_rgba(0,0,0,0.6)] animate-in slide-in-from-bottom duration-250 ease-out"
      >
        {/* Top Drag Handle Indicator */}
        <div className="shrink-0 pt-2 pb-0.5 flex justify-center">
          <div className="w-8 h-1 rounded-full bg-neutral-400/40 dark:bg-white/20" />
        </div>

        {/* Clean, Direct Header: Just "More" + Liquid Glass Close Button */}
        <div className="shrink-0 px-4 py-2 border-b border-neutral-200/80 dark:border-white/10 flex items-center justify-between">
          <h2 className="text-sm xs:text-base font-bold tracking-tight text-neutral-900 dark:text-white">
            More
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 xs:w-8 xs:h-8 rounded-full flex items-center justify-center liquid-glass-circle text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white active:scale-95 transition-all cursor-pointer"
            aria-label="Close more menu"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Navigation Items List (Portfolio, About Us, Contact, Testimonials) */}
        <div className="flex-1 overflow-y-auto px-3.5 py-2 space-y-1.5 overscroll-contain">
          {moreItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                type="button"
                onClick={item.action}
                className="w-full min-h-[46px] p-2.5 rounded-xl border border-neutral-200/80 dark:border-white/10 bg-white dark:bg-neutral-900/40 hover:bg-neutral-50 dark:hover:bg-white/[0.04] text-left transition-all cursor-pointer flex items-start gap-2.5 group select-none shadow-sm"
              >
                <div
                  className={cn(
                    "shrink-0 mt-0.5 w-7.5 h-7.5 rounded-lg flex items-center justify-center border transition-transform group-hover:scale-105",
                    item.bgColor
                  )}
                >
                  <Icon className={cn("h-4 w-4", item.color)} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-xs xs:text-[13px] font-bold text-neutral-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </span>
                    {item.badge && (
                      <span className="px-1.5 py-0 text-[8.5px] font-semibold rounded-full bg-neutral-200/70 dark:bg-white/10 text-neutral-700 dark:text-neutral-300">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] xs:text-[10.5px] leading-tight text-neutral-500 dark:text-neutral-400 mt-0.5 line-clamp-1 xs:line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 group-hover:text-amber-500 shrink-0 mt-1 transition-colors" />
              </button>
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
