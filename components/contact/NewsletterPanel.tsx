"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function NewsletterPanel() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Newsletter subscription simulation / API hook
      // When backend newsletter integration is configured, dispatch POST request here.
      await new Promise((resolve) => setTimeout(resolve, 700));

      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
    } catch {
      setIsSubmitting(false);
      setError("Could not complete subscription. Please try again.");
    }
  };

  return (
    <div
      className={cn(
        "relative rounded-3xl p-6 sm:p-8 xl:p-10 flex flex-col justify-between h-full overflow-hidden transition-all duration-300",
        "bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900",
        "border border-neutral-800 dark:border-white/15",
        "shadow-2xl text-white"
      )}
    >
      {/* Background Subtle Atmospheric Gold Tint */}
      <div className="pointer-events-none absolute -right-16 -top-16 w-56 h-56 rounded-full bg-gold-400/[0.08] blur-[80px]" aria-hidden="true" />

      <div>
        {/* Top Eyebrow Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 border border-white/10 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bi-Weekly Digest</span>
        </div>

        {/* Reference-Accurate Heading: Our Newsletters */}
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Our Newsletters
        </h3>

        {/* Short Description */}
        <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
          Join founders, product leaders, and operators who receive our actionable breakdowns on Google Maps dominance, Next.js performance, and conversion architecture.
        </p>
      </div>

      {/* Subscription Form or Success State */}
      <div className="mt-6 sm:mt-8 pt-4 border-t border-white/10">
        {isSubscribed ? (
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-xs">
              <span className="font-bold block">You are subscribed!</span>
              <span className="text-emerald-300/90 text-[11px]">Check your inbox for our latest digital playbook.</span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="space-y-3" noValidate>
            {error && (
              <p className="text-[11px] text-red-400 font-medium">{error}</p>
            )}

            <div>
              <label htmlFor="newsletter-email" className="sr-only">
                Email Address
              </label>
              <div className="relative">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                  }}
                  disabled={isSubmitting}
                  className={cn(
                    "w-full h-12 px-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm transition-all",
                    "bg-white text-neutral-950 placeholder:text-neutral-500",
                    "focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400",
                    "disabled:opacity-60 shadow-inner"
                  )}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full h-12 rounded-full inline-flex items-center justify-center gap-2 font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer select-none",
                "bg-gradient-to-r from-amber-300 via-gold-400 to-amber-600 text-neutral-950 shadow-gold-glow hover:shadow-gold-glow-lg hover:brightness-105 active:scale-[0.99]",
                "disabled:opacity-60 disabled:pointer-events-none"
              )}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-neutral-950" />
                  <span>Subscribing...</span>
                </>
              ) : (
                <>
                  <span>Subscribe to Newsletters</span>
                  <Mail className="w-4 h-4 text-neutral-950 ml-0.5" />
                </>
              )}
            </button>
          </form>
        )}

        <div className="mt-3.5 text-[10px] text-neutral-400 text-center font-mono">
          🔒 Zero spam. Unsubscribe with 1-click anytime.
        </div>
      </div>
    </div>
  );
}
