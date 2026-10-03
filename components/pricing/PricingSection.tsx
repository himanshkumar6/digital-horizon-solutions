"use client";

import React, { useState } from "react";
import { Check, ArrowRight, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useQuote } from "@/components/cta/QuoteContext";
import { cn } from "@/lib/utils";

/*
 * =========================================================================
 * 3D ISOMETRIC CUBE ICON (THEME-ALIGNED METALLIC GOLD SHADING)
 * =========================================================================
 * Three distinct metallic facet shades providing rich physical depth:
 * - Top Facet: Warm light gold highlight (#E5C07B / #F4ECD2)
 * - Left Facet: True metallic bullion gold (#D4AF37 / #BE9828)
 * - Right Facet: Deep architectural bronze gold (#99781B / #705615)
 * =========================================================================
 */
function IsometricCubeIcon({
  className = "w-6 h-6",
  isFeatured = false,
}: {
  className?: string;
  isFeatured?: boolean;
}) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {/* Top Facet */}
      <path
        d="M12 2.2L19.5 6.5L12 10.8L4.5 6.5L12 2.2Z"
        fill={isFeatured ? "#F4ECD2" : "#D4AF37"}
      />
      {/* Left Facet */}
      <path
        d="M4.5 7.5L11.5 11.5V19.8L4.5 15.8V7.5Z"
        fill={isFeatured ? "#DAC373" : "#BE9828"}
      />
      {/* Right Facet */}
      <path
        d="M12.5 11.5L19.5 7.5V15.8L12.5 19.8V11.5Z"
        fill={isFeatured ? "#E7D8A2" : "#99781B"}
      />
    </svg>
  );
}

interface PlanTier {
  id: string;
  name: string;
  oneTimePriceUsd: number;
  maintenancePriceInr: number;
  subtitle: string;
  badge?: string;
  isFeatured?: boolean;
  features: string[];
}

// Current USD to INR conversion rate (~₹84 per USD)
const USD_TO_INR = 84;

const PLANS: PlanTier[] = [
  {
    id: "startup",
    name: "Startup",
    oneTimePriceUsd: 99,
    maintenancePriceInr: 1499,
    subtitle:
      "Essential high-speed digital foundation and core analytics to validate and launch your brand.",
    isFeatured: false,
    features: [
      "All analytics & SEO features",
      "Up to 250K tracked events",
      "Standard Technical Support",
      "Responsive Web & Mobile App",
      "Lighthouse 95+ Speed Guarantee",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    oneTimePriceUsd: 199,
    maintenancePriceInr: 2999,
    subtitle:
      "Designed for scaling businesses requiring advanced conversion pipelines and priority engineering.",
    badge: "MOST POPULAR",
    isFeatured: true,
    features: [
      "Everything on Startup plan",
      "Up to 100MM tracked events",
      "Priority 24/7 Engineering Support",
      "Up to 10 team seats included",
      "Headless CMS & Multi-Currency Checkout",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    oneTimePriceUsd: 399,
    maintenancePriceInr: 6999,
    subtitle:
      "Tailored for high-scale operators needing custom software architecture, AI workflows, and SLAs.",
    isFeatured: false,
    features: [
      "Everything on Growth plan",
      "Up to 1B tracked events",
      "Dedicated Senior Tech Lead Access",
      "Up to 50 team seats included",
      "Autonomous AI & Custom Cloud DevOps",
    ],
  },
];

interface ComparisonFeature {
  name: string;
  startup: string | boolean;
  growth: string | boolean;
  enterprise: string | boolean;
}

const COMPARISON_CATEGORIES: { category: string; features: ComparisonFeature[] }[] = [
  {
    category: "Architecture & Speed",
    features: [
      { name: "Next.js 15 High-Speed Core", startup: true, growth: true, enterprise: true },
      { name: "Lighthouse 95+ Core Web Vitals", startup: true, growth: true, enterprise: true },
      { name: "Monthly Traffic Capacity", startup: "250K", growth: "100M", enterprise: "Unlimited" },
      { name: "Dedicated Staging Sandbox", startup: false, growth: true, enterprise: true },
    ],
  },
  {
    category: "Integrations & Commerce",
    features: [
      { name: "Payment Checkout (Stripe/Razorpay)", startup: "Standard", growth: "Multi-Currency", enterprise: "Global Multi-Tenant" },
      { name: "Headless CMS Studio", startup: false, growth: true, enterprise: true },
      { name: "Custom API & Webhook Pipelines", startup: "3 Webhooks", growth: "Unlimited", enterprise: "Custom Microservices" },
      { name: "Autonomous AI Agent Workflows", startup: false, growth: "Optional Add-on", enterprise: "Included Full Pipeline" },
    ],
  },
  {
    category: "Support & Engineering SLAs",
    features: [
      { name: "100% Code & IP Ownership", startup: true, growth: true, enterprise: true },
      { name: "Milestone-Escrow Releases", startup: true, growth: true, enterprise: true },
      { name: "Engineering Response Time", startup: "24-48 Hours", growth: "Priority (< 4 Hrs)", enterprise: "Dedicated 1-Hour SLA" },
      { name: "Direct Tech Lead Slack/Discord", startup: false, growth: true, enterprise: true },
    ],
  },
];

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"onetime" | "maintenance">("onetime");
  const [showComparison, setShowComparison] = useState(false);
  const { openQuote } = useQuote();

  return (
    <section
      id="pricing"
      style={{
        scrollMarginTop: "calc(var(--navbar-height, 72px) + 32px)",
      }}
      className="relative w-full bg-background pt-10 sm:pt-12 md:pt-14 lg:pt-16 pb-16 sm:pb-24 lg:pb-28 overflow-hidden select-none px-3 sm:px-6 transition-colors duration-300"
      aria-labelledby="pricing-heading"
    >
      {/* Dark-only subtle ambient gold glow (Strictly hidden in Light Mode to keep light canvas 100% clean) */}
      <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:flex items-center justify-center overflow-hidden">
        <div
          className="w-[700px] h-[500px] rounded-full blur-[150px] opacity-15"
          style={{
            background:
              "radial-gradient(circle, var(--gold) 0%, rgba(212, 175, 55, 0.12) 50%, transparent 75%)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto w-full max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] px-2 sm:px-4 lg:px-6">
        {/* ============================================================
            01. SECTION HEADING (RESPONSIVE FIT FOR MOBILE/TABLET/DESKTOP)
            ============================================================ */}
        <div className="mb-8 sm:mb-10 lg:mb-12 w-full flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            eyebrow="TRANSPARENT PRICING"
            title="SIMPLE, TRANSPARENT PRICING"
            goldAccentText="TRANSPARENT PRICING"
            titleClassName="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl tracking-tight sm:whitespace-nowrap"
            subtitle="Choose a plan that fits your business needs and budget. Celebrate Gandhi Jayanti with flat 20% OFF on all one-time engineering packages."
          />

          {/* ============================================================
              02. THEME-MATCHED BILLING TOGGLE (ONE TIME / MAINTENANCE)
              ============================================================ */}
          <div className="mt-5 sm:mt-8 inline-flex items-center p-1 sm:p-1.5 rounded-full bg-neutral-200/80 dark:bg-white/[0.06] border border-neutral-300/80 dark:border-white/10 shadow-sm max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setBillingCycle("onetime")}
              className={cn(
                "px-3.5 xs:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none flex items-center gap-1.5 shrink-0",
                billingCycle === "onetime"
                  ? "bg-gold-500 text-neutral-950 shadow-sm font-bold"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              )}
            >
              <span>One Time</span>
              <span
                className={cn(
                  "text-[9.5px] xs:text-[10px] font-mono uppercase px-1.5 py-0.5 rounded-full font-bold",
                  billingCycle === "onetime"
                    ? "bg-neutral-950/20 text-neutral-950"
                    : "bg-gold-500/20 text-gold-700 dark:text-gold-300"
                )}
              >
                20% OFF
              </span>
            </button>

            <button
              type="button"
              onClick={() => setBillingCycle("maintenance")}
              className={cn(
                "px-3.5 xs:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none shrink-0",
                billingCycle === "maintenance"
                  ? "bg-gold-500 text-neutral-950 shadow-sm font-bold"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              )}
            >
              Maintenance
            </button>
          </div>
        </div>

        {/* ============================================================
            03. THE 3 CARDS (RESPONSIVE GRID: MOBILE STACK, TABLET, DESKTOP)
            - Left: Startup (Pure White / Deep Obsidian)
            - Middle: Growth (Hero Obsidian Velvet with Bullion Gold Rim & Solid Gold CTA)
            - Right: Enterprise (Pure White / Deep Obsidian)
            ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-3 lg:gap-6 xl:gap-8 items-stretch pt-2 max-w-md mx-auto md:max-w-none w-full">
          {PLANS.map((plan) => {
            const isFeatured = plan.isFeatured;
            // Base One Time Price converted from original USD to INR (~₹84 rate)
            const baseOneTimeInr = Math.round(plan.oneTimePriceUsd * USD_TO_INR);
            // Gandhi Jayanti 20% OFF discounted One Time Price
            const discountedOneTimeInr = Math.round(baseOneTimeInr * 0.8);
            // Distinct monthly maintenance retainer
            const maintenanceInr = plan.maintenancePriceInr;

            const activePrice =
              billingCycle === "onetime" ? discountedOneTimeInr : maintenanceInr;

            return (
              <div
                key={plan.id}
                data-dark-card={isFeatured ? "true" : undefined}
                className={cn(
                  "group relative rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-5 sm:p-7 md:p-4 lg:p-7 xl:p-9 flex flex-col justify-between transition-all duration-300",
                  // Liquid Glass Visual System with Featured Hierarchy
                  isFeatured
                    ? "pricing-liquid-glass-featured text-white md:-translate-y-2.5 lg:-translate-y-4"
                    : "pricing-liquid-glass text-neutral-900 dark:text-white"
                )}
              >
                {/* Specular Liquid Glass Top Rim Highlight (Safely inset within rounded corners) */}
                <div className="pointer-events-none absolute inset-x-8 top-0 h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-white/50 to-transparent z-10" aria-hidden="true" />

                {/* Floating "Most Popular" Pill on Active Hero Card */}
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <span
                      style={{
                        backgroundColor: "#09090b",
                        color: "#FDE68A",
                        borderColor: "rgba(245, 214, 120, 0.5)",
                      }}
                      className="font-mono text-[9px] sm:text-[10px] md:text-[8.5px] lg:text-[11px] font-bold tracking-wider uppercase px-3 sm:px-4 py-0.5 sm:py-1 rounded-full shadow-lg flex items-center gap-1.5 border whitespace-nowrap"
                    >
                      <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-300 text-amber-300" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Top Section */}
                <div>
                  {/* Icon + Title Header Row */}
                  <div className="flex items-center gap-3 sm:gap-3.5 mb-4 sm:mb-6">
                    <div
                      className={cn(
                        "w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 shadow-sm border",
                        isFeatured
                          ? "bg-black/20 border-white/25 text-white"
                          : "bg-gold-500/10 dark:bg-gold-500/15 border-gold-500/20 text-gold-600 dark:text-gold-400"
                      )}
                    >
                      <IsometricCubeIcon
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        isFeatured={isFeatured}
                      />
                    </div>
                    <h3
                      style={isFeatured ? { color: "#ffffff" } : undefined}
                      className={cn(
                        "text-lg sm:text-xl md:text-lg lg:text-2xl font-extrabold tracking-tight",
                        isFeatured ? "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" : "text-neutral-900 dark:text-white"
                      )}
                    >
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price Block */}
                  <div className="flex flex-col gap-1.5">
                    {billingCycle === "onetime" && (
                      <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                        <span
                          style={isFeatured ? { color: "rgba(255, 255, 255, 0.6)" } : undefined}
                          className={cn(
                            "text-xs sm:text-sm md:text-xs lg:text-base font-semibold line-through tracking-tight font-sans shrink-0",
                            isFeatured ? "text-white/60" : "text-neutral-400 dark:text-neutral-500"
                          )}
                        >
                          ₹{baseOneTimeInr.toLocaleString("en-IN")}
                        </span>
                        <span
                          style={
                            isFeatured
                              ? {
                                  backgroundColor: "rgba(255, 255, 255, 0.20)",
                                  color: "#FFFFFF",
                                  borderColor: "rgba(255, 255, 255, 0.40)",
                                }
                              : undefined
                          }
                          className={cn(
                            "inline-flex items-center gap-1 text-[9px] xs:text-[10px] sm:text-[11px] md:text-[8.5px] lg:text-[10.5px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full border leading-tight shrink-0 whitespace-nowrap",
                            isFeatured
                              ? "border-white/40 bg-white/20 text-white"
                              : "border-gold-500/35 bg-gold-500/15 text-gold-700 dark:text-gold-300"
                          )}
                        >
                          <span>🇮🇳 Gandhi Jayanti: 20% OFF</span>
                        </span>
                      </div>
                    )}

                    {billingCycle === "maintenance" && (
                      <div className="flex items-center gap-1.5">
                        <span
                          style={
                            isFeatured
                              ? {
                                  backgroundColor: "rgba(255, 255, 255, 0.20)",
                                  color: "#FFFFFF",
                                  borderColor: "rgba(255, 255, 255, 0.40)",
                                }
                              : undefined
                          }
                          className={cn(
                            "inline-flex items-center gap-1 text-[9px] xs:text-[10px] sm:text-[11px] md:text-[8.5px] lg:text-[10.5px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full border leading-tight shrink-0 whitespace-nowrap",
                            isFeatured
                              ? "border-white/40 bg-white/20 text-white"
                              : "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400"
                          )}
                        >
                          <span>Ongoing Support & Maintenance</span>
                        </span>
                      </div>
                    )}

                    <div className="flex items-baseline gap-1 sm:gap-1.5 flex-wrap">
                      <span
                        style={isFeatured ? { color: "#ffffff" } : undefined}
                        className={cn(
                          "text-3xl xs:text-4xl md:text-2xl lg:text-4xl xl:text-5xl font-black tracking-tight font-sans",
                          isFeatured ? "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" : "text-neutral-950 dark:text-white"
                        )}
                      >
                        ₹{activePrice.toLocaleString("en-IN")}
                      </span>
                      <span
                        style={isFeatured ? { color: "#FDE68A" } : undefined}
                        className={cn(
                          "text-xs md:text-[10.5px] lg:text-sm font-semibold shrink-0",
                          isFeatured ? "text-amber-200" : "text-neutral-500 dark:text-neutral-400"
                        )}
                      >
                        {billingCycle === "onetime" ? "/ one-time" : "/ month"}
                      </span>
                    </div>
                  </div>

                  {/* Subtitle / Description */}
                  <p
                    style={isFeatured ? { color: "#FDF4DD" } : undefined}
                    className={cn(
                      "mt-3 text-xs sm:text-[13px] md:text-[11.5px] lg:text-[13px] leading-relaxed min-h-[38px] sm:min-h-[44px] md:min-h-[58px] lg:min-h-[44px]",
                      isFeatured ? "text-amber-50/95 font-medium" : "text-neutral-600 dark:text-neutral-400"
                    )}
                  >
                    {plan.subtitle}
                  </p>

                  {/* Horizontal Divider */}
                  <div
                    style={isFeatured ? { backgroundColor: "rgba(255, 255, 255, 0.25)" } : undefined}
                    className={cn(
                      "my-4 sm:my-6 h-px w-full",
                      isFeatured ? "bg-white/25" : "bg-neutral-200/90 dark:bg-white/10"
                    )}
                  />

                  {/* Features List with Rounded-Square Theme Checkboxes */}
                  <div className="space-y-3 sm:space-y-3.5 md:space-y-2.5 lg:space-y-3.5">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 sm:gap-3">
                        <div
                          style={isFeatured ? { backgroundColor: "#ffffff", color: "#78350F" } : undefined}
                          className={cn(
                            "w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-md flex items-center justify-center shrink-0 shadow-sm mt-0.5",
                            isFeatured
                              ? "bg-white text-amber-900"
                              : "bg-gold-500/15 text-gold-700 dark:text-gold-300 border border-gold-500/30"
                          )}
                        >
                          <Check
                            className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]"
                            style={isFeatured ? { color: "#78350F" } : undefined}
                          />
                        </div>
                        <span
                          style={isFeatured ? { color: "#FFFFFF" } : undefined}
                          className={cn(
                            "text-xs md:text-[11px] lg:text-[13.5px] leading-snug font-semibold",
                            isFeatured
                              ? "text-white"
                              : "text-neutral-800 dark:text-neutral-200 font-medium"
                          )}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-6 sm:mt-8 pt-1">
                  <button
                    type="button"
                    onClick={() =>
                      openQuote(
                        `${plan.name} Plan (₹${activePrice.toLocaleString("en-IN")}${
                          billingCycle === "maintenance" ? "/mo" : ""
                        }) - ${
                          billingCycle === "onetime"
                            ? "One Time (Gandhi Jayanti 20% OFF)"
                            : "Monthly Maintenance Retainer"
                        }`
                      )
                    }
                    className={cn(
                      "btn-liquid-glass w-full",
                      isFeatured
                        ? "pricing-btn-liquid-glass-featured"
                        : "pricing-btn-liquid-glass-standard"
                    )}
                  >
                    <span>Get started</span>
                    <ArrowRight
                      className={cn(
                        "w-4 h-4 pricing-btn-arrow shrink-0",
                        isFeatured ? "text-neutral-950" : "text-gold-400"
                      )}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ============================================================
            04. "VIEW PLANS COMPARISON" PILL BUTTON (THEME-ALIGNED)
            ============================================================ */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={() => setShowComparison((prev) => !prev)}
            className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-neutral-100 dark:bg-white/[0.06] text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white border border-neutral-200 dark:border-white/10 hover:border-gold-500/40 shadow-xs hover:shadow-sm transition-all duration-200 flex items-center gap-2 cursor-pointer"
          >
            <span>{showComparison ? "Hide plans comparison" : "View plans comparison"}</span>
            {showComparison ? (
              <ChevronUp className="w-4 h-4 text-gold-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gold-500" />
            )}
          </button>
        </div>

        {/* ============================================================
            05. PLANS COMPARISON SECTION & TABLE (THEME-ALIGNED)
            ============================================================ */}
        {showComparison && (
          <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-white/10 transition-all duration-300">
            <div className="text-center mb-8 sm:mb-10 px-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
                Plans comparison
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
                Comprehensive side-by-side feature matrix. Compare technical deliverables across all tiers.
              </p>
            </div>

            {/* Responsive Table Container */}
            <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-[#0d0f17] shadow-sm -mx-2 sm:mx-0">
              <table className="w-full text-left border-collapse min-w-[580px] sm:min-w-[640px]">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/[0.02]">
                    <th className="py-3 px-3.5 sm:py-4 sm:px-6 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-bold w-2/5">
                      Features & Capabilities
                    </th>
                    <th className="py-3 px-3.5 sm:py-4 sm:px-6 text-[11px] sm:text-xs font-bold text-neutral-900 dark:text-white text-center w-1/5">
                      Startup
                    </th>
                    <th className="py-3 px-3.5 sm:py-4 sm:px-6 text-[11px] sm:text-xs font-bold text-gold-600 dark:text-gold-400 text-center w-1/5 bg-gold-500/[0.08] dark:bg-gold-500/[0.08]">
                      Growth ★
                    </th>
                    <th className="py-3 px-3.5 sm:py-4 sm:px-6 text-[11px] sm:text-xs font-bold text-neutral-900 dark:text-white text-center w-1/5">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 dark:divide-white/10 text-xs sm:text-[13px]">
                  {COMPARISON_CATEGORIES.map((category, catIdx) => (
                    <React.Fragment key={catIdx}>
                      {/* Category Header Row */}
                      <tr className="bg-neutral-100/70 dark:bg-white/[0.04]">
                        <td
                          colSpan={4}
                          className="py-2.5 px-6 font-mono text-[11px] uppercase tracking-wider font-bold text-neutral-700 dark:text-neutral-300"
                        >
                          {category.category}
                        </td>
                      </tr>

                      {/* Feature Rows */}
                      {category.features.map((feat, fIdx) => (
                        <tr
                          key={fIdx}
                          className="hover:bg-neutral-50/80 dark:hover:bg-white/[0.02] transition-colors"
                        >
                          <td className="py-3.5 px-6 font-medium text-neutral-800 dark:text-neutral-200">
                            {feat.name}
                          </td>

                          {/* Startup Column */}
                          <td className="py-3.5 px-6 text-center text-neutral-600 dark:text-neutral-400">
                            {typeof feat.startup === "boolean" ? (
                              feat.startup ? (
                                <div className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-gold-500 text-neutral-950 shadow-xs">
                                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                                </div>
                              ) : (
                                <span className="text-neutral-300 dark:text-neutral-600 font-bold">—</span>
                              )
                            ) : (
                              <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                                {feat.startup}
                              </span>
                            )}
                          </td>

                          {/* Growth Column (Highlighted with Gold Tint) */}
                          <td className="py-3.5 px-6 text-center bg-gold-500/[0.04] dark:bg-gold-500/[0.04]">
                            {typeof feat.growth === "boolean" ? (
                              feat.growth ? (
                                <div className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-gold-500 text-neutral-950 font-bold shadow-xs">
                                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                                </div>
                              ) : (
                                <span className="text-neutral-300 dark:text-neutral-600 font-bold">—</span>
                              )
                            ) : (
                              <span className="font-bold text-gold-600 dark:text-gold-400">
                                {feat.growth}
                              </span>
                            )}
                          </td>

                          {/* Enterprise Column */}
                          <td className="py-3.5 px-6 text-center text-neutral-600 dark:text-neutral-400">
                            {typeof feat.enterprise === "boolean" ? (
                              feat.enterprise ? (
                                <div className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-gold-500 text-neutral-950 shadow-xs">
                                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                                </div>
                              ) : (
                                <span className="text-neutral-300 dark:text-neutral-600 font-bold">—</span>
                              )
                            ) : (
                              <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                                {feat.enterprise}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom In-Table CTA Trigger */}
            <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
              <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                Need a custom enterprise SLA or tailored engineering milestones?
              </span>
              <button
                type="button"
                onClick={() => openQuote("Enterprise Custom SLA Inquiry")}
                className="text-xs sm:text-sm font-bold text-gold-600 dark:text-gold-400 underline underline-offset-4 hover:text-gold-500 transition-colors cursor-pointer"
              >
                Schedule Technical Discovery Call →
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
