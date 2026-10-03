import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { Container } from "@/components/ui/Container";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfoCards } from "@/components/contact/ContactInfoCards";
import { ContactMap } from "@/components/contact/ContactMap";

export const metadata: Metadata = {
  title: "Contact Us | Digital Horizon Solutions",
  description:
    "Get in touch with Digital Horizon Solutions for high-performance websites, Google Business Profile optimization, e-commerce, custom software, and AI workflows.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Digital Horizon Solutions",
    description:
      "Start a conversation with Digital Horizon Solutions. Fast response times, clear technical recommendations, and practical digital systems.",
    url: "https://digitalhorizonsolutions.in/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-gold-400/25 selection:text-white">
      {/* 1. Existing DHS Sticky Navbar */}
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* 2. Large Contact Us Hero with Decorative Accents */}
        <ContactHero />

        {/* 3. Main Contact Container (Consistently Aligned) */}
        <Container size="default" className="pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-28">
          {/* Focused Contact Form Area with Balanced Width */}
          <div id="contact-form-section" className="max-w-5xl xl:max-w-6xl mx-auto scroll-mt-24 sm:scroll-mt-32">
            <div className="text-center mb-8 sm:mb-10">
              <span className="font-mono text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold block mb-1.5">
                Direct Inquiry &amp; Communications
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
                Send Us A Message
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto">
                Fill in your project details below and our senior engineering team will schedule a discovery call or deliver a preliminary digital roadmap.
              </p>
            </div>

            <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-white/95 dark:bg-neutral-900/70 border border-neutral-200/90 dark:border-white/10 shadow-xl backdrop-blur-md overflow-hidden">
              {/* Subtle ambient decorative gradient highlights inside the card */}
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gold-400/10 dark:bg-gold-400/5 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-amber-500/10 dark:bg-amber-500/5 blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* 4. Contact Information Cards (3 Horizontal Cards: Phone, Email, Location) */}
          <ContactInfoCards />

          {/* 5. Large Map / Location Section */}
          <ContactMap />
        </Container>
      </main>

      {/* 6. Existing DHS Footer */}
      <Footer />
    </div>
  );
}
