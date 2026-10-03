"use client";

import React, { useEffect, useState } from "react";
import { X, ShieldCheck, FileText, CheckCircle2, Lock } from "lucide-react";
import { BRAND_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface LegalModalProps {
  isOpen: boolean;
  activeTab: "privacy" | "terms";
  onClose: () => void;
  onTabChange: (tab: "privacy" | "terms") => void;
}

export function LegalModal({
  isOpen,
  activeTab,
  onClose,
  onTabChange,
}: LegalModalProps) {
  // ESC key and backdrop scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto"
    >
      {/* Liquid Glass Ambient Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-950/70 dark:bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-3xl bg-white dark:bg-[#0c0d12] border border-neutral-200/90 dark:border-white/10 shadow-2xl overflow-hidden z-10 transition-all duration-300 animate-in fade-in-0 zoom-in-95">
        {/* Header Strip */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 sm:py-5 border-b border-neutral-200/90 dark:border-white/10 bg-neutral-50/70 dark:bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gold-400/10 dark:bg-gold-400/15 border border-gold-400/20 flex items-center justify-center text-amber-600 dark:text-gold-400">
              {activeTab === "privacy" ? (
                <ShieldCheck className="w-4 h-4" />
              ) : (
                <FileText className="w-4 h-4" />
              )}
            </div>
            <div>
              <h2
                id="legal-modal-title"
                className="text-base sm:text-lg font-bold text-neutral-950 dark:text-white leading-tight"
              >
                {activeTab === "privacy"
                  ? "Privacy & Data Protection Policy"
                  : "Terms of Service & Engagement"}
              </h2>
              <p className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                {BRAND_INFO.name} • Official Legal Standards
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close legal policy dialog"
            className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-500 hover:text-neutral-900 dark:hover:text-white bg-neutral-200/60 dark:bg-white/10 hover:bg-neutral-200 dark:hover:bg-white/20 transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center px-5 sm:px-7 pt-3 border-b border-neutral-200/60 dark:border-white/[0.06] bg-neutral-50/40 dark:bg-white/[0.01]">
          <button
            type="button"
            onClick={() => onTabChange("privacy")}
            className={cn(
              "px-3.5 py-2 text-xs sm:text-sm font-semibold transition-all border-b-2 cursor-pointer flex items-center gap-1.5",
              activeTab === "privacy"
                ? "border-amber-500 text-amber-600 dark:text-gold-400 dark:border-gold-400"
                : "border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300"
            )}
          >
            <Lock className="w-3 h-3" />
            <span>Privacy Policy</span>
          </button>
          <button
            type="button"
            onClick={() => onTabChange("terms")}
            className={cn(
              "px-3.5 py-2 text-xs sm:text-sm font-semibold transition-all border-b-2 cursor-pointer flex items-center gap-1.5",
              activeTab === "terms"
                ? "border-amber-500 text-amber-600 dark:text-gold-400 dark:border-gold-400"
                : "border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-300"
            )}
          >
            <FileText className="w-3 h-3" />
            <span>Terms of Service</span>
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-7 py-5 space-y-5 text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {activeTab === "privacy" ? (
            <>
              <div className="p-3.5 rounded-xl bg-amber-500/10 dark:bg-gold-400/10 border border-amber-500/20 dark:border-gold-400/20 text-neutral-800 dark:text-neutral-200">
                <p className="font-medium text-amber-700 dark:text-gold-300 text-xs sm:text-sm mb-1">
                  Client Confidentiality Commitment
                </p>
                <p className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400">
                  Digital Horizon Solutions adheres to rigorous enterprise privacy
                  standards. We never sell, lease, or monetize client data under
                  any circumstance.
                </p>
              </div>

              <section className="space-y-1.5">
                <h3 className="font-bold text-neutral-950 dark:text-white text-sm">
                  1. Information We Collect
                </h3>
                <p>
                  When you request a quote, project proposal, or contact us, we
                  collect your name, business email, telephone number, company
                  details, and project requirements. This information is strictly
                  used to evaluate your project scope and deliver technical
                  recommendations.
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="font-bold text-neutral-950 dark:text-white text-sm">
                  2. Non-Disclosure &amp; Code Confidentiality
                </h3>
                <p>
                  All proprietary business models, user data, server credentials,
                  API keys, and repository source code provided during our
                  engagements are protected by mutual non-disclosure obligations.
                  We implement cryptographic key management and secure access
                  controls across all active client repositories.
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="font-bold text-neutral-950 dark:text-white text-sm">
                  3. Cookies &amp; Performance Telemetry
                </h3>
                <p>
                  Our website uses lightweight, essential first-party cookies to
                  preserve your theme preferences (Dark Mode / Light Mode) and
                  measure anonymized Core Web Vitals to maintain sub-second page
                  speeds. We do not use third-party invasive tracking pixels.
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="font-bold text-neutral-950 dark:text-white text-sm">
                  4. Direct Inquiries &amp; Data Rights
                </h3>
                <p>
                  You may request complete erasure of your project inquiry data
                  or request a copy of stored communication records at any time
                  by contacting{" "}
                  <a
                    href={`mailto:${BRAND_INFO.contactEmail}`}
                    className="text-amber-600 dark:text-gold-300 underline font-medium"
                  >
                    {BRAND_INFO.contactEmail}
                  </a>
                  .
                </p>
              </section>
            </>
          ) : (
            <>
              <div className="p-3.5 rounded-xl bg-amber-500/10 dark:bg-gold-400/10 border border-amber-500/20 dark:border-gold-400/20 text-neutral-800 dark:text-neutral-200">
                <p className="font-medium text-amber-700 dark:text-gold-300 text-xs sm:text-sm mb-1">
                  Transparent Engineering Engagements
                </p>
                <p className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400">
                  Every project is backed by a clear Statement of Work, fixed
                  milestones, and 100% intellectual property ownership
                  guaranteed upon completion.
                </p>
              </div>

              <section className="space-y-1.5">
                <h3 className="font-bold text-neutral-950 dark:text-white text-sm">
                  1. Scope of Digital Solutions
                </h3>
                <p>
                  Digital Horizon Solutions delivers high-performance website
                  engineering, Google Business Profile local search optimization,
                  custom web applications, e-commerce architectures, and
                  automated business workflows as outlined in your agreed
                  Statement of Work (SOW).
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="font-bold text-neutral-950 dark:text-white text-sm">
                  2. Intellectual Property &amp; Code Ownership
                </h3>
                <p>
                  Upon final payment of milestone invoices, all custom software,
                  Next.js/React components, application source code, visual
                  assets, database schemas, and documentation created for your
                  project become 100% your exclusive property.
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="font-bold text-neutral-950 dark:text-white text-sm">
                  3. Milestone Deliveries &amp; Revisions
                </h3>
                <p>
                  Projects proceed through structured development phases
                  (Architecture → UI/UX Implementation → Quality Assurance →
                  Production Deployment). Each milestone includes designated
                  review cycles to ensure deliverables align with commercial
                  requirements.
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="font-bold text-neutral-950 dark:text-white text-sm">
                  4. Warranty &amp; Post-Launch Support
                </h3>
                <p>
                  All deployed custom solutions include a complimentary 30-day
                  post-launch warranty covering bug fixes, server deployment
                  stabilization, and Core Web Vitals verification.
                </p>
              </section>
            </>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-5 sm:px-7 py-3.5 border-t border-neutral-200/90 dark:border-white/10 bg-neutral-50/70 dark:bg-white/[0.02] flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-500">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Last Updated: January 2026</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-full text-xs font-semibold bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90 transition-opacity cursor-pointer"
          >
            Acknowledge &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
}
