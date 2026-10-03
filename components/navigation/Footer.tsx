"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { useQuote } from "@/components/cta/QuoteContext";
import { BRAND_INFO } from "@/lib/constants";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const { openQuote } = useQuote();

  return (
    <>
      <footer
        className="relative w-full overflow-hidden bg-[#f8f9fa] dark:bg-[#07080a] text-neutral-600 dark:text-neutral-400 border-t border-neutral-200/90 dark:border-white/[0.06] transition-colors duration-250 pb-[max(5.5rem,calc(env(safe-area-inset-bottom)+5rem))] lg:pb-8"
        aria-label="Footer Navigation"
      >
        {/* Subtle Ambient Gold Lighting Gradient (DHS Signature Atmosphere) */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none"
          aria-hidden="true"
        >
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[380px] opacity-35 dark:opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at 50% 100%, rgba(212, 175, 55, 0.16) 0%, rgba(229, 130, 36, 0.07) 45%, transparent 75%)",
            }}
          />
        </div>

        <Container size="default" className="pt-12 sm:pt-16 lg:pt-20">
          {/* =====================================================================
              TOP ROW: BRAND ANCHOR BLOCK & PRIMARY NAVIGATION
              ===================================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16">
            {/* BRAND BLOCK: Dominant Identity Anchor (Left 4 cols on Desktop) */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-4 sm:space-y-5">
              <div className="space-y-3.5">
                {/* Official DHS Navbar Logo */}
                <div className="inline-block">
                  <Logo size="lg" className="w-auto h-10 xs:h-11 sm:h-12" />
                </div>

                {/* Tagline Badge */}
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-gold-400/10 text-amber-700 dark:text-gold-300 border border-gold-400/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-gold-400 animate-pulse" />
                    <span>{BRAND_INFO.tagline}</span>
                  </span>
                </div>

                {/* Mission Statement */}
                <p className="text-xs sm:text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm">
                  Engineering high-performance web applications, local search
                  dominance, and automated business workflows for companies
                  ready to scale beyond today.
                </p>
              </div>

              {/* Fast Action CTA + Live Response Metric */}
              <div className="pt-1 flex flex-col xs:flex-row xs:items-center gap-3">
                <button
                  type="button"
                  onClick={() => openQuote()}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 via-gold-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 shadow-md hover:shadow-gold-400/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer min-h-[44px]"
                >
                  <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
                  <span>Get Free Audit</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-900" />
                </button>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-neutral-500 dark:text-neutral-400 px-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Avg response &lt; 24h</span>
                </div>
              </div>
            </div>

            {/* NAVIGATION COLUMNS (Right 8 cols on Desktop) */}
            <div className="lg:col-span-8">
              {/* Responsive Subgrid: 2 cols on mobile, 3 cols on tablet & desktop */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
                {/* Column 1: Services */}
                <div className="space-y-3.5">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-950 dark:text-white font-bold flex items-center gap-1.5">
                    <span>Services</span>
                  </h3>
                  <ul className="space-y-1 text-xs sm:text-[13px]">
                    <li>
                      <Link
                        href="/#services"
                        className="py-1.5 inline-block text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-gold-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
                      >
                        Google Business Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#services"
                        className="py-1.5 inline-block text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-gold-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
                      >
                        High-Speed Web Apps
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#services"
                        className="py-1.5 inline-block text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-gold-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
                      >
                        E-Commerce Platforms
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#services"
                        className="py-1.5 inline-block text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-gold-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
                      >
                        Custom Software &amp; SaaS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#services"
                        className="py-1.5 inline-block text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-gold-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
                      >
                        AI Workflows &amp; Automation
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 2: Company Navigation */}
                <div className="space-y-3.5">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-950 dark:text-white font-bold">
                    Company
                  </h3>
                  <ul className="space-y-1 text-xs sm:text-[13px]">
                    <li>
                      <Link
                        href="/"
                        className="py-1.5 inline-block text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-gold-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#why-us"
                        className="py-1.5 inline-block text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-gold-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
                      >
                        About Digital Horizon
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#work"
                        className="py-1.5 inline-block text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-gold-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
                      >
                        Selected Work
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#process"
                        className="py-1.5 inline-block text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-gold-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
                      >
                        Our Process
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#pricing"
                        className="py-1.5 inline-block text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-gold-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
                      >
                        Transparent Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="py-1.5 inline-block text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-gold-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
                      >
                        Contact Direct
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 3: Resources & Proposal (Full width on mobile below the 2-col row) */}
                <div className="col-span-2 md:col-span-1 space-y-3.5 pt-4 md:pt-0 border-t md:border-t-0 border-neutral-200/70 dark:border-white/[0.04]">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-950 dark:text-white font-bold">
                    Resources &amp; Insights
                  </h3>
                  <ul className="space-y-1 text-xs sm:text-[13px]">
                    <li>
                      <Link
                        href="/blog"
                        className="py-1.5 inline-block text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-gold-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
                      >
                        Engineering Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#faq"
                        className="py-1.5 inline-block text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-gold-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
                      >
                        Frequently Asked Questions
                      </Link>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => openQuote()}
                        className="py-1.5 inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-gold-300 transition-colors text-left cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
                      >
                        <span>Request Project Proposal</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      </button>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/918595698811?text=Hello%20Digital%20Horizon%20Solutions%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 inline-flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
                      >
                        <span>WhatsApp Consultation</span>
                        <ExternalLink className="w-3 h-3 text-emerald-500 shrink-0" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================================
              MIDDLE ROW: HIGH-TRUST DEDICATED DIRECT CONTACT STRIP
              ===================================================================== */}
          <div className="mt-10 sm:mt-12 lg:mt-14 p-5 sm:p-6 lg:p-7 rounded-2xl bg-white/80 dark:bg-white/[0.02] border border-neutral-200/90 dark:border-white/[0.08] backdrop-blur-sm shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {/* Item 1: Direct Email */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 dark:bg-gold-400/10 border border-amber-500/20 dark:border-gold-400/20 flex items-center justify-center shrink-0 text-amber-600 dark:text-gold-400 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    Direct Email
                  </p>
                  <a
                    href={`mailto:${BRAND_INFO.contactEmail}`}
                    className="text-xs sm:text-[13px] font-medium text-neutral-900 dark:text-neutral-200 hover:text-amber-600 dark:hover:text-gold-300 transition-colors break-all sm:break-normal block mt-0.5"
                  >
                    {BRAND_INFO.contactEmail}
                  </a>
                </div>
              </div>

              {/* Item 2: Direct Hotline */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 dark:bg-gold-400/10 border border-amber-500/20 dark:border-gold-400/20 flex items-center justify-center shrink-0 text-amber-600 dark:text-gold-400 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    Hotline &amp; WhatsApp
                  </p>
                  <a
                    href={`tel:${BRAND_INFO.contactPhone.replace(/[^+\d]/g, "")}`}
                    className="text-xs sm:text-[13px] font-medium text-neutral-900 dark:text-neutral-200 hover:text-amber-600 dark:hover:text-gold-300 transition-colors block mt-0.5 whitespace-nowrap"
                  >
                    {BRAND_INFO.contactPhone}
                  </a>
                </div>
              </div>

              {/* Item 3: Studio Location */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 dark:bg-gold-400/10 border border-amber-500/20 dark:border-gold-400/20 flex items-center justify-center shrink-0 text-amber-600 dark:text-gold-400 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    Studio Location
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      BRAND_INFO.address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-[13px] font-medium text-neutral-900 dark:text-neutral-200 hover:text-amber-600 dark:hover:text-gold-300 transition-colors block mt-0.5 leading-snug"
                  >
                    {BRAND_INFO.address}
                  </a>
                </div>
              </div>

              {/* Item 4: Business Working Hours */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 dark:bg-gold-400/10 border border-amber-500/20 dark:border-gold-400/20 flex items-center justify-center shrink-0 text-amber-600 dark:text-gold-400 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    Operating Schedule
                  </p>
                  <p className="text-xs sm:text-[13px] font-medium text-neutral-900 dark:text-neutral-200 block mt-0.5">
                    Mon – Sat: 10:00 AM – 10:00 PM
                  </p>
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block">
                    Sunday Closed (IST)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================================
              LOWER ROW: COPYRIGHT, LEGAL LINKS & CIRCULAR SOCIAL ICONS
              ===================================================================== */}
          <div className="w-full h-px bg-neutral-200/90 dark:bg-white/[0.08] my-8 sm:my-10" />

          <div className="flex flex-col-reverse md:flex-row md:items-center justify-between items-center text-center md:text-left gap-5 pb-6 sm:pb-8">
            {/* Left: Copyright & Legal Utility Links (Centered on mobile, left on desktop) */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-xs text-neutral-600 dark:text-neutral-400 text-center sm:text-left">
              <span className="font-mono text-[11px] sm:text-xs">
                &copy; {new Date().getFullYear()} {BRAND_INFO.name}. All rights
                reserved.
              </span>
              <span className="hidden sm:inline text-neutral-300 dark:text-neutral-700">
                •
              </span>
              <div className="flex items-center justify-center sm:justify-start gap-3 whitespace-nowrap">
                <Link
                  href="/privacy"
                  className="hover:text-amber-600 dark:hover:text-gold-300 transition-colors underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
                >
                  Privacy Policy
                </Link>
                <span className="text-neutral-300 dark:text-neutral-700">•</span>
                <Link
                  href="/terms"
                  className="hover:text-amber-600 dark:hover:text-gold-300 transition-colors underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold-400 rounded"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Right: Circular Social Icons (Centered on mobile, right on desktop) */}
            <div
              className="flex items-center justify-center gap-3 sm:gap-3.5 shrink-0"
              aria-label="Social Media Channels"
            >
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/145236103/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Digital Horizon Solutions on LinkedIn"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-[#0077B5]/30 bg-[#0077B5]/8 text-[#0077B5] dark:text-[#0A9CE0] hover:border-[#0077B5]/60 hover:bg-[#0077B5]/15 hover:scale-110 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0077B5]"
              >
                <svg
                  className="w-[19px] h-[19px] sm:w-5 sm:h-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 1.6 1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/digitalhorizonsolution"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Digital Horizon Solutions on Instagram"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-[#E1306C]/30 bg-[#E1306C]/8 text-[#E1306C] hover:border-[#E1306C]/60 hover:bg-[#E1306C]/15 hover:scale-110 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1306C]"
              >
                <svg
                  className="w-[19px] h-[19px] sm:w-5 sm:h-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* WhatsApp Direct Line */}
              <a
                href="https://wa.me/918882646253?text=Hello%20Digital%20Horizon%20Solutions%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Direct WhatsApp message to Digital Horizon Solutions"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border border-[#25D366]/30 bg-[#25D366]/8 text-[#25D366] hover:border-[#25D366]/60 hover:bg-[#25D366]/15 hover:scale-110 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
              >
                <svg
                  className="w-[19px] h-[19px] sm:w-5 sm:h-5 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.53c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.18-.47-.3z" />
                </svg>
              </a>
            </div>
          </div>
        </Container>

        {/* =====================================================================
            BOTTOM ROW: GRAND ARCHITECTURAL BRAND MARQUEE (UNIVERSAL LEFT -> RIGHT LOOP)
            Continuous Left -> Right Infinite Loop across Mobile, Tablet & Desktop
            ===================================================================== */}
        <div className="w-full overflow-hidden select-none pointer-events-none pt-6 sm:pt-8 lg:pt-10 pb-2 sm:pb-3 border-t border-neutral-200/60 dark:border-white/[0.04]">
          <div className="w-full">
            {/* Accessible single instance for screen readers */}
            <span className="sr-only">Digital Horizon Solutions</span>

            {/* Reduced-Motion Static Fallback: centered, non-moving */}
            <div
              className="hidden motion-reduce:flex items-center justify-center gap-2 sm:gap-4 md:gap-6 px-4 py-2 sm:py-4 flex-wrap"
              aria-hidden="true"
            >
              <span className="text-[clamp(17px,4vw,56px)] font-black tracking-[-0.01em] uppercase text-neutral-500/80 dark:text-white/40">
                DIGITAL
              </span>
              <span className="text-amber-600/50 dark:text-[#d4af37]/60 text-xs sm:text-lg md:text-2xl">✦</span>
              <span className="text-[clamp(17px,4vw,56px)] font-black tracking-[-0.01em] uppercase text-neutral-700 dark:text-white/70">
                HORIZON
              </span>
              <span className="text-amber-600/50 dark:text-[#d4af37]/60 text-xs sm:text-lg md:text-2xl">✦</span>
              <span className="text-[clamp(19px,4.5vw,64px)] font-black tracking-[0.03em] uppercase bg-gradient-to-b from-amber-700 via-amber-600 to-amber-500 dark:from-[#fde68a] dark:via-[#d4af37] dark:to-[#b45309] bg-clip-text text-transparent">
                SOLUTIONS
              </span>
            </div>

            {/* Universal Seamless Left -> Right Continuous Marquee Track */}
            <div
              className="dhs-marquee-mask relative w-full overflow-hidden py-1.5 sm:py-3 lg:py-4 motion-reduce:hidden"
              aria-hidden="true"
            >
              <div className="flex items-center w-max animate-dhs-marquee-ltr">
                {/* SET A (Digital alag, Horizon alag, Solutions alag) */}
                {[0, 1, 2, 3].map((idx) => (
                  <div key={`univ-word-a-${idx}`} className="flex items-center shrink-0">
                    <span className="text-[clamp(22px,4.5vw,78px)] font-black tracking-[-0.01em] uppercase text-neutral-500/80 dark:text-white/40 px-2 sm:px-3 md:px-5">
                      DIGITAL
                    </span>
                    <span className="text-amber-600/50 dark:text-[#d4af37]/60 text-xs sm:text-base md:text-2xl px-1 sm:px-2 md:px-3">
                      ✦
                    </span>
                    <span className="text-[clamp(22px,4.5vw,78px)] font-black tracking-[-0.01em] uppercase text-neutral-700 dark:text-white/70 px-2 sm:px-3 md:px-5">
                      HORIZON
                    </span>
                    <span className="text-amber-600/50 dark:text-[#d4af37]/60 text-xs sm:text-base md:text-2xl px-1 sm:px-2 md:px-3">
                      ✦
                    </span>
                    <span className="text-[clamp(24px,5vw,86px)] font-black tracking-[0.03em] uppercase bg-gradient-to-b from-amber-700 via-amber-600 to-amber-500 dark:from-[#fde68a] dark:via-[#d4af37] dark:to-[#b45309] bg-clip-text text-transparent filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.25)] dark:drop-shadow-[0_4px_16px_rgba(212,175,55,0.3)] px-2 sm:px-3 md:px-5">
                      SOLUTIONS
                    </span>
                    <span className="text-amber-600/50 dark:text-[#d4af37]/60 text-xs sm:text-base md:text-2xl px-1 sm:px-2 md:px-3">
                      ✦
                    </span>
                  </div>
                ))}

                {/* SET B (Exact Duplicate for 100% Seamless Infinite Left -> Right Loop) */}
                {[0, 1, 2, 3].map((idx) => (
                  <div key={`univ-word-b-${idx}`} className="flex items-center shrink-0">
                    <span className="text-[clamp(22px,4.5vw,78px)] font-black tracking-[-0.01em] uppercase text-neutral-500/80 dark:text-white/40 px-2 sm:px-3 md:px-5">
                      DIGITAL
                    </span>
                    <span className="text-amber-600/50 dark:text-[#d4af37]/60 text-xs sm:text-base md:text-2xl px-1 sm:px-2 md:px-3">
                      ✦
                    </span>
                    <span className="text-[clamp(22px,4.5vw,78px)] font-black tracking-[-0.01em] uppercase text-neutral-700 dark:text-white/70 px-2 sm:px-3 md:px-5">
                      HORIZON
                    </span>
                    <span className="text-amber-600/50 dark:text-[#d4af37]/60 text-xs sm:text-base md:text-2xl px-1 sm:px-2 md:px-3">
                      ✦
                    </span>
                    <span className="text-[clamp(24px,5vw,86px)] font-black tracking-[0.03em] uppercase bg-gradient-to-b from-amber-700 via-amber-600 to-amber-500 dark:from-[#fde68a] dark:via-[#d4af37] dark:to-[#b45309] bg-clip-text text-transparent filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.25)] dark:drop-shadow-[0_4px_16px_rgba(212,175,55,0.3)] px-2 sm:px-3 md:px-5">
                      SOLUTIONS
                    </span>
                    <span className="text-amber-600/50 dark:text-[#d4af37]/60 text-xs sm:text-base md:text-2xl px-1 sm:px-2 md:px-3">
                      ✦
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}
