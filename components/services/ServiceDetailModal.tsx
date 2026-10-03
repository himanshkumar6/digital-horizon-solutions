"use client";

import React, { useEffect } from "react";
import { ServiceItem } from "@/lib/constants";
import { X, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { useQuote } from "@/components/cta/QuoteContext";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  const { openQuote } = useQuote();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && service) {
        onClose();
      }
    };
    if (service) {
      const lenis = (
        window as unknown as {
          __lenis?: { stop: () => void; start: () => void };
        }
      ).__lenis;
      lenis?.stop();

      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalBodyOverflow = document.body.style.overflow;
      const originalBodyPaddingRight = document.body.style.paddingRight;

      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        lenis?.start();
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.overflow = originalBodyOverflow;
        document.body.style.paddingRight = originalBodyPaddingRight;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      data-lenis-prevent="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
        onTouchMove={(e) => e.preventDefault()}
      />

      {/* Modal Surface */}
      <div
        data-lenis-prevent="true"
        className="relative w-full max-w-2xl rounded-2xl border border-neutral-200/90 dark:border-white/10 bg-white/95 dark:bg-neutral-950/95 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl z-10 max-h-[92vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 text-neutral-500 dark:text-neutral-400 transition-colors hover:bg-neutral-100 dark:hover:bg-white/10 hover:text-neutral-950 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gold-400"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="border-b border-neutral-200 dark:border-white/10 pb-5">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-600 dark:text-gold-400 font-semibold mb-1.5">
            <span>Specialization {service.number}</span>
            <span>•</span>
            <span>{service.subtitle}</span>
          </div>
          <h3
            id="service-modal-title"
            className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-neutral-900 dark:text-white"
          >
            {service.title}
          </h3>
          <p className="mt-1 text-sm font-mono text-neutral-600 dark:text-neutral-400">
            {service.tagline}
          </p>
        </div>

        {/* Overview */}
        <div className="py-5 space-y-4">
          <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {service.description}
          </p>

          {/* Business Impact Box */}
          <div className="rounded-xl border border-gold-400/30 bg-gold-400/[0.08] dark:bg-gold-400/[0.04] p-4 text-xs text-neutral-800 dark:text-neutral-200">
            <span className="font-mono uppercase font-bold text-amber-700 dark:text-amber-200 block mb-1">
              Commercial Outcome:
            </span>
            {service.businessImpact}
          </div>

          {/* Core Scope & Deliverables */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold mb-2.5">
                Key Capabilities
              </h4>
              <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold mb-2.5">
                Included Deliverables
              </h4>
              <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                {service.deliverables.map((deliv, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0 mt-1.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 border-t border-neutral-200 dark:border-white/10">
          <div className="flex items-center gap-2 text-[11px] text-neutral-500 dark:text-neutral-400">
            <ShieldCheck className="h-4 w-4 text-gold-400" />
            <span>Custom-tailored scope for your business stage</span>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              openQuote(service.id);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-200 via-gold-400 to-amber-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-950 shadow-gold-glow hover:brightness-105"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
