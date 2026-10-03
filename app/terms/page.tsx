import type { Metadata } from "next";
import Link from "next/link";
import { BRAND_INFO } from "@/lib/constants";
import { FileText, Code2, Layers, Wrench, AlertTriangle, ArrowLeft, CheckCircle2, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Digital Horizon Solutions",
  description:
    "Digital Horizon Solutions Terms of Service & Engagement. Transparent milestone-based project delivery with 100% IP ownership upon completion.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    icon: Layers,
    title: "1. Scope of Digital Solutions",
    content:
      "Digital Horizon Solutions delivers high-performance website engineering, Google Business Profile local search optimization, custom web applications, e-commerce architectures, and automated business workflows as outlined in your agreed Statement of Work (SOW). All services are defined, scoped, and signed off before development commences.",
  },
  {
    icon: Code2,
    title: "2. Intellectual Property & Code Ownership",
    content:
      "Upon final payment of milestone invoices, all custom software, Next.js/React components, application source code, visual assets, database schemas, and documentation created for your project become 100% your exclusive property. We retain no rights, licenses, or claims over your delivered codebase.",
  },
  {
    icon: Layers,
    title: "3. Milestone Deliveries & Revisions",
    content:
      "Projects proceed through structured development phases: Architecture → UI/UX Implementation → Quality Assurance → Production Deployment. Each milestone includes designated review cycles to ensure deliverables align with commercial requirements. Scope changes beyond the agreed SOW are handled through a formal change-order process.",
  },
  {
    icon: Wrench,
    title: "4. Warranty & Post-Launch Support",
    content:
      "All deployed custom solutions include a complimentary 30-day post-launch warranty covering bug fixes, server deployment stabilization, and Core Web Vitals verification. Extended maintenance packages are available upon request and are governed by a separate Service Level Agreement (SLA).",
  },
  {
    icon: AlertTriangle,
    title: "5. Limitation of Liability",
    content:
      "Digital Horizon Solutions shall not be liable for indirect, incidental, or consequential damages arising from service delivery, including but not limited to loss of revenue, data loss, or business interruption, beyond the total value of the applicable project invoice. Our liability is limited to the correction of defects within the warranted scope.",
  },
  {
    icon: Scale,
    title: "6. Governing Law & Dispute Resolution",
    content:
      "These terms are governed by applicable Indian law. Any disputes arising from project engagements shall first be addressed through a good-faith resolution process. If unresolved within 30 days, disputes will be submitted to arbitration in New Delhi, India, under the Arbitration and Conciliation Act, 1996.",
  },
];

export default function TermsPage() {
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
            <FileText className="w-3 h-3" />
            <span>Legal Document</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-900 dark:text-white leading-tight">
            Terms of Service
            <br />
            <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 dark:from-amber-300 dark:via-gold-400 dark:to-amber-500 bg-clip-text text-transparent">
              & Engagement
            </span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            Every project is backed by a clear Statement of Work, fixed
            milestones, and 100% intellectual property ownership guaranteed upon
            completion.
          </p>

          {/* Commitment banner */}
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-amber-500/8 dark:bg-gold-400/8 border border-amber-500/20 dark:border-gold-400/20">
            <p className="font-semibold text-amber-700 dark:text-gold-300 text-sm mb-1">
              Transparent Engineering Engagements
            </p>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              No hidden clauses. No ambiguous deliverables. Every engagement is
              scoped, documented, and agreed upon before a single line of code
              is written.
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
                <p className="text-sm sm:text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {section.content}
                </p>
              </section>
            );
          })}
        </div>

        {/* Contact note */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl border border-neutral-200/80 dark:border-white/[0.07] bg-white/60 dark:bg-white/[0.02] text-sm text-neutral-600 dark:text-neutral-400">
          Questions about these terms?{" "}
          <a
            href={`mailto:${BRAND_INFO.contactEmail}`}
            className="text-amber-600 dark:text-gold-300 underline underline-offset-2 font-medium hover:text-amber-700 dark:hover:text-amber-200 transition-colors"
          >
            {BRAND_INFO.contactEmail}
          </a>
        </div>

        {/* Footer strip */}
        <div className="mt-10 sm:mt-14 pt-6 border-t border-neutral-200/60 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>Last Updated: January 2026 · {BRAND_INFO.name}</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-neutral-500">
            <Link
              href="/privacy"
              className="hover:text-amber-600 dark:hover:text-gold-300 transition-colors underline underline-offset-2"
            >
              Privacy Policy
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
