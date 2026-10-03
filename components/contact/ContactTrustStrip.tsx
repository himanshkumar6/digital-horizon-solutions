"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import {
  Globe,
  MapPin,
  CreditCard,
  Code2,
  Database,
  Cpu,
} from "lucide-react";

interface TrustPlatform {
  name: string;
  category: string;
  icon: React.ReactNode;
}

const TRUSTED_ECOSYSTEM: TrustPlatform[] = [
  {
    name: "Google Business",
    category: "Local Discovery & Maps",
    icon: <MapPin className="w-4 h-4 text-emerald-500" />,
  },
  {
    name: "Next.js & React",
    category: "High-Performance Web",
    icon: <Globe className="w-4 h-4 text-sky-500" />,
  },
  {
    name: "Razorpay & Stripe",
    category: "Verified Payment Rails",
    icon: <CreditCard className="w-4 h-4 text-amber-500" />,
  },
  {
    name: "TypeScript & APIs",
    category: "Robust Architecture",
    icon: <Code2 className="w-4 h-4 text-indigo-500" />,
  },
  {
    name: "PostgreSQL & Cloud",
    category: "Resilient Databases",
    icon: <Database className="w-4 h-4 text-purple-500" />,
  },
  {
    name: "AI & Automations",
    category: "Intelligent Workflows",
    icon: <Cpu className="w-4 h-4 text-rose-500" />,
  },
];

export function ContactTrustStrip() {
  return (
    <div className="relative -mt-4 sm:-mt-6 mb-8 sm:mb-12 z-20">
      <Container size="default">
        {/* Floating Reference-Accurate Trust Banner / Card */}
        <div className="rounded-2xl sm:rounded-3xl border border-neutral-200/90 dark:border-white/10 bg-white/95 dark:bg-neutral-900/85 backdrop-blur-md shadow-xl p-4 sm:p-5 lg:p-6 transition-all duration-300">
          <div className="text-center mb-3 sm:mb-4">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 font-semibold">
              ENGINEERED &amp; INTEGRATED WITH INDUSTRY-STANDARD PLATFORMS
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 lg:gap-3.5 items-center justify-center">
            {TRUSTED_ECOSYSTEM.map((platform, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-xl border border-neutral-100 dark:border-white/[0.04] bg-neutral-50/70 dark:bg-white/[0.02] hover:bg-neutral-100/80 dark:hover:bg-white/[0.05] transition-colors"
              >
                <div className="shrink-0 p-1.5 rounded-lg bg-white dark:bg-neutral-800 shadow-sm border border-neutral-200/60 dark:border-white/10">
                  {platform.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-neutral-900 dark:text-white truncate">
                    {platform.name}
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-neutral-500 dark:text-neutral-400 truncate">
                    {platform.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
