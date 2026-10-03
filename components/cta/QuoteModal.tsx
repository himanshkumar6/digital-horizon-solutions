"use client";

import React, { useEffect, useState } from "react";
import { useQuote } from "./QuoteContext";
import { X, CheckCircle, ArrowRight, Sparkles, AlertCircle } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CustomSelect } from "@/components/ui/CustomSelect";

const BUDGET_OPTIONS = [
  "Under ₹1 Lakh",
  "₹1 – ₹4 Lakhs",
  "₹4 – ₹12 Lakhs",
  "₹12 Lakhs+",
  "Flexible / Need Guidance",
];

const TIMELINE_OPTIONS = [
  "Immediate (Within 2 weeks)",
  "1 – 2 Months",
  "3+ Months",
  "Exploring Options",
];

export function QuoteModal() {
  const { isOpen, closeQuote, selectedService } = useQuote();

  const [activeServices, setActiveServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [selectedTimeline, setSelectedTimeline] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Mount guard — prevents SSR/hydration mismatch
  useEffect(() => setMounted(true), []);

  // Sync selectedService prop with state when modal opens
  useEffect(() => {
    if (selectedService) {
      const matched = SERVICES.find(
        (s) =>
          s.id.toLowerCase() === selectedService.toLowerCase() ||
          s.title.toLowerCase() === selectedService.toLowerCase()
      );
      if (matched) {
        setActiveServices([matched.id]);
      } else {
        setActiveServices([selectedService]);
      }
    }
  }, [selectedService]);

  // Handle ESC key and bulletproof scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeQuote();
      }
    };

    if (isOpen) {
      // 1. FREEZE LENIS SMOOTH SCROLL (The Culprit!)
      const lenis = (
        window as unknown as {
          __lenis?: { stop: () => void; start: () => void };
        }
      ).__lenis;
      lenis?.stop();

      // 2. Lock both HTML and Body so background never moves
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
        // Resume Lenis smooth scroll
        lenis?.start();

        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.overflow = originalBodyOverflow;
        document.body.style.paddingRight = originalBodyPaddingRight;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, closeQuote]);

  if (!mounted || !isOpen) return null;

  const toggleService = (id: string) => {
    setActiveServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim() || !email.trim()) {
      setErrorMessage("Please enter your full name and business email.");
      return;
    }

    setIsSubmitting(true);

    try {
      const readableServices = activeServices.map((id) => {
        const s = SERVICES.find((srv) => srv.id === id);
        return s ? s.title : id;
      });

      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          services: readableServices,
          budget: selectedBudget,
          timeline: selectedTimeline,
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          company: company.trim(),
          notes: notes.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setErrorMessage(null);
    setActiveServices([]);
    setSelectedBudget("");
    setSelectedTimeline("");
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setNotes("");
    closeQuote();
  };

  return (
    <div
      data-lenis-prevent="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={closeQuote}
        aria-hidden="true"
        onTouchMove={(e) => e.preventDefault()}
      />

      {/* Modal Surface */}
      <div
        data-lenis-prevent="true"
        className="relative w-full max-w-2xl lg:max-w-3xl rounded-2xl sm:rounded-3xl border border-neutral-200/90 dark:border-white/10 bg-white/95 dark:bg-neutral-950/95 shadow-2xl backdrop-blur-2xl z-10 h-[calc(100dvh-24px)] sm:h-auto max-h-[calc(100dvh-24px)] sm:max-h-[90vh] flex flex-col overflow-hidden"
      >
        {/* Subtle Ambient Light */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-72 rounded-full bg-gold-400/10 blur-[80px]" />

        {isSubmitted ? (
          <div
            data-lenis-prevent="true"
            className="flex flex-col items-center justify-center py-8 sm:py-12 px-4 sm:px-8 text-center overflow-y-auto max-h-[85dvh] modal-custom-scrollbar"
          >
            <div className="mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gold-400/10 text-amber-600 dark:text-amber-300 ring-1 ring-gold-400/30">
              <CheckCircle className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-neutral-900 dark:text-white">
              Free Audit Request Received
            </h3>
            <p className="mt-2.5 sm:mt-3 max-w-md text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Thank you, <span className="text-neutral-900 dark:text-white font-medium">{name || "there"}</span>. We review every request carefully and our senior team will deliver your comprehensive digital audit and growth roadmap within 24 business hours.
            </p>

            <div className="mt-5 sm:mt-6 rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-100/80 dark:bg-neutral-900/60 p-3.5 sm:p-4 text-xs text-neutral-700 dark:text-neutral-300 max-w-md w-full text-left space-y-1.5">
              <div className="font-mono uppercase text-neutral-500 dark:text-neutral-400 font-semibold mb-1">
                Summary:
              </div>
              <div>
                Services:{" "}
                <span className="text-amber-700 dark:text-amber-200 font-medium">
                  {activeServices.length > 0
                    ? activeServices
                        .map((id) => {
                          const s = SERVICES.find((srv) => srv.id === id);
                          return s ? s.title : id;
                        })
                        .join(", ")
                    : "Full Consultation"}
                </span>
              </div>
              {company && (
                <div>
                  Company: <span className="text-neutral-900 dark:text-white font-medium">{company}</span>
                </div>
              )}
              <div>
                Contact: <span className="text-neutral-900 dark:text-white font-medium">{email}</span>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-200 via-gold-400 to-amber-600 px-7 py-2.5 text-xs sm:text-sm font-semibold text-neutral-950 hover:brightness-105 active:scale-[0.98] transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="flex flex-col flex-1 min-h-0">
            {/* Header - Fixed at top of modal */}
            <div className="relative shrink-0 border-b border-neutral-200/80 dark:border-white/10 px-4 py-3.5 sm:px-6 sm:py-4 md:px-8 md:py-5 bg-white/60 dark:bg-neutral-950/60 backdrop-blur-md">
              <div className="flex items-center justify-between gap-3 mb-1.5">
                <div className="inline-flex items-center gap-1 sm:gap-1.5 rounded-full border border-gold-400/30 bg-gold-400/10 px-2 sm:px-2.5 py-0.5 text-[8.5px] xs:text-[9px] sm:text-[10px] font-mono uppercase tracking-wide sm:tracking-wider text-amber-700 dark:text-amber-200 min-w-0">
                  <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-gold-400 shrink-0" />
                  <span className="truncate">Complimentary Digital Audit &amp; Strategy</span>
                </div>
                {/* Close Button cleanly in header */}
                <button
                  type="button"
                  onClick={closeQuote}
                  className="rounded-full p-1.5 sm:p-2 text-neutral-500 dark:text-neutral-400 transition-colors hover:bg-neutral-100 dark:hover:bg-white/10 hover:text-neutral-950 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-gold-400 -mr-1"
                  aria-label="Close quote modal"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
              <h3
                id="modal-title"
                className="text-sm xs:text-base sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-neutral-900 dark:text-white leading-tight"
              >
                Claim Your Free Audit &amp; Growth Strategy
              </h3>
              <p className="mt-1 text-[10px] xs:text-[11px] sm:text-xs md:text-sm text-neutral-600 dark:text-neutral-400 leading-snug sm:leading-relaxed">
                Select your focus areas below. Our team will analyze your digital footprint and deliver an actionable audit and roadmap with zero obligations.
              </p>
            </div>

            {/* Form wrapping Scrollable Body and Pinned Footer */}
            <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">
              {/* Scrollable Body with custom scrollbar */}
              <div
                data-lenis-prevent="true"
                className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 space-y-4 sm:space-y-5 overscroll-contain modal-custom-scrollbar"
              >
                {/* Error Banner */}
                {errorMessage && (
                  <div className="flex items-center gap-2.5 p-3 rounded-xl border border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-400 text-xs sm:text-sm">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
                {/* Step 1: Services */}
                <div>
                  <label className="block text-[9px] xs:text-[10px] sm:text-xs font-mono uppercase tracking-normal sm:tracking-wider text-neutral-700 dark:text-neutral-300 font-semibold mb-2 sm:mb-2.5">
                    1. Which services do you need? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                    {SERVICES.map((s) => {
                      const isSelected =
                        activeServices.includes(s.id) ||
                        activeServices.includes(s.title);
                      return (
                        <button
                          type="button"
                          key={s.id}
                          onClick={() => toggleService(s.id)}
                          className={cn(
                            "flex items-start gap-2.5 sm:gap-3 rounded-xl border p-2.5 sm:p-3 text-left transition-all text-xs",
                            isSelected
                              ? "border-gold-400/80 bg-gold-400/10 text-neutral-900 dark:text-white shadow-sm ring-1 ring-gold-400/30"
                              : "border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-neutral-900/60 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                          )}
                        >
                          <div
                            className={cn(
                              "mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 rounded border flex items-center justify-center transition-colors",
                              isSelected
                                ? "border-gold-400 bg-gold-400"
                                : "border-neutral-400 dark:border-neutral-600 bg-transparent"
                            )}
                          >
                            {isSelected && (
                              <span className="h-1.5 w-1.5 rounded-full bg-neutral-950" />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-semibold text-neutral-900 dark:text-white text-xs sm:text-sm truncate sm:whitespace-normal">
                              {s.title}
                            </div>
                            <div className="text-[10px] sm:text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 leading-snug line-clamp-1 sm:line-clamp-2">
                              {s.tagline}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Budget & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-[10px] xs:text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 font-semibold mb-1.5">
                      Estimated Budget Range
                    </label>
                    <CustomSelect
                      value={selectedBudget}
                      onChange={setSelectedBudget}
                      placeholder="Select an approximate range"
                      options={BUDGET_OPTIONS}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] xs:text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 font-semibold mb-1.5">
                      Target Timeline
                    </label>
                    <CustomSelect
                      value={selectedTimeline}
                      onChange={setSelectedTimeline}
                      placeholder="Select expected launch window"
                      options={TIMELINE_OPTIONS}
                    />
                  </div>
                </div>

                {/* Step 3: Contact Details */}
                <div className="space-y-2.5 sm:space-y-3 pt-1">
                  <label className="block text-[10px] xs:text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 font-semibold">
                    2. Your Contact Information
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full min-h-[42px] rounded-xl border border-neutral-300 dark:border-white/10 bg-neutral-50 dark:bg-neutral-900/80 px-3.5 py-2 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400 transition-colors"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Business Email *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full min-h-[42px] rounded-xl border border-neutral-300 dark:border-white/10 bg-neutral-50 dark:bg-neutral-900/80 px-3.5 py-2 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400 transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full min-h-[42px] rounded-xl border border-neutral-300 dark:border-white/10 bg-neutral-50 dark:bg-neutral-900/80 px-3.5 py-2 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400 transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Company / Website / Google Maps Link"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full min-h-[42px] rounded-xl border border-neutral-300 dark:border-white/10 bg-neutral-50 dark:bg-neutral-900/80 px-3.5 py-2 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400 transition-colors"
                    />
                  </div>

                  <textarea
                    rows={2}
                    placeholder="Tell us briefly about what you are looking to audit, build or solve..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full min-h-[60px] rounded-xl border border-neutral-300 dark:border-white/10 bg-neutral-50 dark:bg-neutral-900/80 px-3.5 py-2 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:border-gold-400 focus:outline-none focus:ring-1 focus:ring-gold-400 resize-none transition-colors"
                  />
                </div>
              </div>

              {/* Sticky Footer with Submit Button */}
              <div className="shrink-0 px-4 py-3 sm:px-6 sm:py-3.5 md:px-8 border-t border-neutral-200/80 dark:border-white/10 bg-neutral-50/95 dark:bg-neutral-950/95 backdrop-blur-md flex items-center justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-gradient-to-r from-amber-200 via-gold-400 to-amber-600 px-5 sm:px-7 py-2.5 sm:py-3 text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-wide sm:tracking-wider text-neutral-950 shadow-gold-glow hover:brightness-105 active:scale-[0.98] transition-all disabled:opacity-60 shrink-0"
                >
                  {isSubmitting ? (
                    "Processing..."
                  ) : (
                    <>
                      <span className="whitespace-nowrap">Claim Free Audit &amp; Strategy</span>
                      <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
