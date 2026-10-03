import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { MetricsStrip } from "@/components/metrics/MetricsStrip";
import { ServicesSection } from "@/components/services/ServicesSection";
import { ProcessSection } from "@/components/process/ProcessSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { Footer } from "@/components/navigation/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-gold-400/25 selection:text-white">
      {/* Floating Modern Sticky Navbar */}
      <Navbar />

      <main id="main-content" className="flex-1 w-full">
        {/* SECTION 01 — HERO */}
        <HeroSection />

        {/* SECTION 02 — TRUST / METRICS */}
        <MetricsStrip />

        {/* SECTION 03 — SERVICES */}
        <ServicesSection />

        {/* SECTION 04 — PROCESS WAVE STEPPER */}
        <ProcessSection />

        {/* SECTION 05 — PRICING & INVESTMENT */}
        <PricingSection />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
