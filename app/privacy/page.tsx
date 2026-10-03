import type { Metadata } from "next";
import Link from "next/link";
import { BRAND_INFO } from "@/lib/constants";
import { ShieldCheck, Lock, Eye, Database, Mail, ArrowLeft, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Digital Horizon Solutions",
  description:
    "Digital Horizon Solutions Privacy & Data Protection Policy. We never sell, lease, or monetize client data under any circumstance.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    icon: Database,
    title: "1. Information We Collect",
    content:
      "When you request a quote, project proposal, or contact us, we collect your name, business email, telephone number, company details, and project requirements. This information is strictly used to evaluate your project scope and deliver technical recommendations tailored to your business.",
  },
  {
    icon: Lock,
    title: "2. Non-Disclosure & Code Confidentiality",
    content:
      "All proprietary business models, user data, server credentials, API keys, and repository source code provided during our engagements are protected by mutual non-disclosure obligations. We implement cryptographic key management and secure access controls across all active client repositories.",
  },
  {
    icon: Eye,
    title: "3. Cookies & Performance Telemetry",
    content:
      "Our website uses lightweight, essential first-party cookies to preserve your theme preferences (Dark Mode / Light Mode) and measure anonymized Core Web Vitals to maintain sub-second page speeds. We do not use third-party invasive tracking pixels, advertising networks, or behavioral profiling tools.",
  },
  {
    icon: Mail,
    title: "4. Direct Inquiries & Data Rights",
    content: null,
    contactSection: true,
  },
  {
    icon: ShieldCheck,
    title: "5. Data Security",
    content:
      "All data transmitted through our contact and audit request forms is encrypted via TLS 1.3. Stored inquiry data is retained only for the duration necessary to process your request and deliver our services. We never share client data with advertising platforms or data brokers.",
  },
  {
    icon: CheckCircle2,
    title: "6. Changes to This Policy",
    content:
      "We may update this policy periodically to reflect changes in our practices or legal requirements. We will notify existing clients of significant updates via email. Continued use of our services after changes constitutes acceptance of the revised policy.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#07080a] text-neutral-700 dark:text-neutral-300">
      {/* Ambient background */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 dark:opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.18) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Nav bar */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-200/80 dark:border-white/[0.06] bg-[#f8f9fa]/90 dark:bg-[#07080a]/90 backdrop-blur-md">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-4">
          <Link
            href="/"
            aria-label="Back to homepage"
            className="text-lg font-black uppercase tracking-tight text-neutral-900 dark:text-white hover:text-amber-600 dark:hover:text-gold-300 transition-colors"
          >
            Digital Horizon Solutions
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-gold-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        {/* Hero */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-gold-400/10 text-amber-700 dark:text-gold-300 border border-gold-400/25 mb-4">
            <ShieldCheck className="w-3 h-3" />
            <span>Legal Document</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-900 dark:text-white leading-tight">
            Privacy & Data
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 dark:from-amber-300 dark:via-gold-400 dark:to-amber-500 bg-clip-text text-transparent">
              Protection Policy
            </span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            {BRAND_INFO.name} is committed to enterprise-grade data protection.
            We never sell, lease, or monetize client data under any
            circumstance.
          </p>

          {/* Commitment banner */}
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-amber-500/8 dark:bg-gold-400/8 border border-amber-500/20 dark:border-gold-400/20">
            <p className="font-semibold text-amber-700 dark:text-gold-300 text-sm mb-1">
              Client Confidentiality Commitment
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              Every client engagement is protected by strict confidentiality
              obligations. Your business data, technical specifications, and
              communications are never disclosed to third parties.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6 sm:space-y-8">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <section
                key={section.title}
                className="rounded-2xl border border-neutral-200/80 dark:border-white/[0.07] bg-white/80 dark:bg-white/[0.025] p-5 sm:p-6 lg:p-8 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-amber-600 dark:text-gold-400 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
                    {section.title}
                  </h2>
                </div>
                {section.contactSection ? (
                  <p className="text-sm sm:text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                    You may request complete erasure of your project inquiry
                    data or a copy of stored communication records at any time
                    by contacting us at{" "}
                    <a
                      href={`mailto:${BRAND_INFO.contactEmail}`}
                      className="text-amber-600 dark:text-gold-300 underline underline-offset-2 font-medium hover:text-amber-700 dark:hover:text-amber-200 transition-colors"
                    >
                      {BRAND_INFO.contactEmail}
                    </a>
                    . We will process your request within 7 business days.
                  </p>
                ) : (
                  <p className="text-sm sm:text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {section.content}
                  </p>
                )}
              </section>
            );
          })}
        </div>

        {/* Footer strip */}
        <div className="mt-10 sm:mt-14 pt-6 border-t border-neutral-200/60 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>Last Updated: January 2026 · {BRAND_INFO.name}</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-neutral-500">
            <Link
              href="/terms"
              className="hover:text-amber-600 dark:hover:text-gold-300 transition-colors underline underline-offset-2"
            >
              Terms of Service
            </Link>
            <Link
              href="/"
              className="hover:text-amber-600 dark:hover:text-gold-300 transition-colors"
            >
              ← Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
