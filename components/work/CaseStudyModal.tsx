"use client";

import React, { useEffect } from "react";
import { CaseStudyItem } from "@/lib/constants";
import { X, CheckCircle2, ArrowRight, Layers, Cpu, ShieldCheck } from "lucide-react";
import { useQuote } from "@/components/cta/QuoteContext";

interface CaseStudyModalProps {
  caseStudy: CaseStudyItem | null;
  onClose: () => void;
}

export function CaseStudyModal({ caseStudy, onClose }: CaseStudyModalProps) {
  const { openQuote } = useQuote();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && caseStudy) {
        onClose();
      }
    };
    if (caseStudy) {
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
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <div
      data-lenis-prevent="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
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
        className="relative w-full max-w-3xl rounded-2xl border border-neutral-200/90 dark:border-white/10 bg-white/95 dark:bg-neutral-950/95 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl z-10 max-h-[92vh] overflow-y-auto"
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

        {/* Category & Demo Notice */}
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center rounded-full border border-gold-400/30 bg-gold-400/10 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-amber-700 dark:text-amber-200">
            {caseStudy.category}
          </span>
          {caseStudy.isPlaceholder && (
            <span className="text-[10px] font-mono uppercase text-neutral-500 bg-neutral-100 dark:bg-white/[0.04] px-2 py-0.5 rounded border border-neutral-200 dark:border-white/5">
              Prototype Case Study
            </span>
          )}
        </div>

        <h3
          id="case-study-title"
          className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-neutral-900 dark:text-white leading-tight"
        >
          {caseStudy.title}
        </h3>
        <p className="mt-1 text-xs font-mono text-neutral-600 dark:text-neutral-400">
          Client: {caseStudy.client}
        </p>

        {/* Demo Impact Banner */}
        <div className="mt-4 rounded-xl border border-gold-400/30 bg-gold-400/[0.08] dark:bg-gold-400/[0.06] p-3 text-xs font-mono text-amber-700 dark:text-amber-200 flex items-center justify-between">
          <span>{caseStudy.impactPlaceholder}</span>
        </div>

        {/* Challenge & Solution */}
        <div className="py-5 space-y-4 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold mb-1">
              The Commercial Challenge
            </h4>
            <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
              {caseStudy.challenge}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold mb-1">
              Engineered Solution
            </h4>
            <p className="leading-relaxed text-neutral-700 dark:text-neutral-300">
              {caseStudy.solution}
            </p>
          </div>

          {/* Deliverables & Tech */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold mb-2">
                Delivered Components
              </h4>
              <ul className="space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300">
                {caseStudy.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-gold-400 shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold mb-2">
                Technology Architecture
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {caseStudy.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900 px-2 py-1 font-mono text-[11px] text-neutral-700 dark:text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 border-t border-neutral-200 dark:border-white/10">
          <div className="flex items-center gap-2 text-[11px] text-neutral-500 dark:text-neutral-400">
            <ShieldCheck className="h-4 w-4 text-gold-400" />
            <span>Built on robust, scalable modern code</span>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              openQuote();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-200 via-gold-400 to-amber-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-950 shadow-gold-glow hover:brightness-105"
          >
            <span>Discuss A Similar Project</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
