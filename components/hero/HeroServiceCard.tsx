"use client";

import React, { useEffect, useRef } from "react";
import { X, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceBubbleData {
  id: string;
  category: string;
  title: string;
  badge?: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

interface HeroServiceCardProps {
  service: ServiceBubbleData | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export function HeroServiceCard({
  service,
  isOpen,
  onClose,
  onOpenQuote,
}: HeroServiceCardProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-card-title"
    >
      {/* Subtle Backdrop Dimmer */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity animate-in fade-in duration-200"
        aria-hidden="true"
      />

      {/* Liquid Glass Service Detail Card */}
      <div
        ref={modalRef}
        className={cn(
          "relative z-10 w-full max-w-lg rounded-3xl p-6 sm:p-8 text-left",
          "liquid-glass-panel bg-white dark:bg-[#0d0f15] border border-neutral-200 dark:border-white/15",
          "shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)]",
          "animate-in fade-in zoom-in-95 duration-250 ease-out"
        )}
      >
        {/* Top Header: Category Tag, Badge & Close Button */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
              {service.category}
            </span>
            {service.badge && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/25">
                {service.badge}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 min-w-[36px] min-h-[36px] rounded-full flex items-center justify-center liquid-glass-circle text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-all cursor-pointer"
            aria-label="Close service details"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Center: Service Icon + Title */}
        <div className="flex items-start gap-4 mb-4">
          <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-white/[0.05] border border-neutral-200 dark:border-white/10 p-2 shadow-inner">
            {service.icon}
          </div>
          <div>
            <h3
              id="service-card-title"
              className="text-xl sm:text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-white"
            >
              {service.title}
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>

        {/* Deliverables / Key Services List */}
        <div className="my-5 pt-4 border-t border-neutral-200/70 dark:border-white/10">
          <h4 className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3 font-semibold">
            Key Deliverables & Scope
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.features.map((feat, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="truncate">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              setTimeout(() => {
                onOpenQuote();
              }, 150);
            }}
            className="flex-1 h-11 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-gold-400 to-amber-600 px-6 text-xs sm:text-sm font-bold text-neutral-950 shadow-[0_4px_16px_rgba(212,175,55,0.4),inset_0_1px_1px_rgba(255,255,255,0.6)] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Get Free Audit</span>
            <ArrowUpRight className="h-4 w-4 text-neutral-950" />
          </button>

          <a
            href="#services"
            onClick={onClose}
            className="h-11 px-5 inline-flex items-center justify-center rounded-full text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white border border-neutral-300 dark:border-white/10 hover:border-neutral-400 dark:hover:border-white/25 transition-all"
          >
            Explore All Services
          </a>
        </div>
      </div>
    </div>
  );
}
