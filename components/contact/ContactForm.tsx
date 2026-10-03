"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { CustomSelect } from "@/components/ui/CustomSelect";

const SERVICE_OPTIONS = [
  { value: "web-development", label: "High-Performance Web Development" },
  { value: "gmb-seo", label: "Google Business Profile & Local SEO" },
  { value: "ecommerce", label: "E-Commerce & Digital Storefronts" },
  { value: "custom-software", label: "Custom Software & Web Applications" },
  { value: "ai-automation", label: "AI Workflows & Business Automation" },
  { value: "consulting-other", label: "Strategic Consulting / Other" },
];

interface ContactFormData {
  email: string;
  phone: string;
  name: string;
  service: string;
  message: string;
}

const INITIAL_FORM: ContactFormData = {
  email: "",
  phone: "",
  name: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all required fields (Name, Email, and Message).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: formData.service,
          message: formData.message.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setIsSuccess(true);
      setFormData(INITIAL_FORM);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while sending your message. Please try again or email us directly.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Success State Notification */}
      {isSuccess ? (
        <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-emerald-500/30 bg-emerald-500/[0.08] dark:bg-emerald-500/[0.06] backdrop-blur-sm text-left">
          <div className="flex items-start gap-3.5">
            <span className="p-2 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white">
                Message Received Successfully
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Thank you for contacting Digital Horizon Solutions. Our senior team has received your inquiry and will review your requirements within 24 business hours.
              </p>
              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
              >
                Send another message →
              </button>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
          {/* Error Banner */}
          {errorMessage && (
            <div className="flex items-center gap-2.5 p-3 sm:p-3.5 rounded-xl border border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-400 text-xs sm:text-sm">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Row 1: Full Name & Email (Side-by-side on sm+, stacked on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
              >
                Full Name <span className="text-amber-500">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className={cn(
                  "w-full h-12 px-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm text-neutral-900 dark:text-white transition-all",
                  "bg-neutral-100/90 dark:bg-neutral-900/80 border border-neutral-300/80 dark:border-white/10",
                  "placeholder:text-neutral-500 dark:placeholder:text-neutral-400",
                  "focus:border-amber-600 dark:focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:focus:ring-gold-400/20",
                  "disabled:opacity-60 disabled:cursor-not-allowed shadow-inner dark:shadow-none"
                )}
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
              >
                Email Address <span className="text-amber-500">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className={cn(
                  "w-full h-12 px-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm text-neutral-900 dark:text-white transition-all",
                  "bg-neutral-100/90 dark:bg-neutral-900/80 border border-neutral-300/80 dark:border-white/10",
                  "placeholder:text-neutral-500 dark:placeholder:text-neutral-400",
                  "focus:border-amber-600 dark:focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:focus:ring-gold-400/20",
                  "disabled:opacity-60 disabled:cursor-not-allowed shadow-inner dark:shadow-none"
                )}
              />
            </div>
          </div>

          {/* Row 2: Phone Number & Service of Interest (Side-by-side on sm+, stacked on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label
                htmlFor="contact-phone"
                className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
              >
                Phone Number <span className="text-neutral-400 font-normal">(Optional)</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
                className={cn(
                  "w-full h-12 px-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm text-neutral-900 dark:text-white transition-all",
                  "bg-neutral-100/90 dark:bg-neutral-900/80 border border-neutral-300/80 dark:border-white/10",
                  "placeholder:text-neutral-500 dark:placeholder:text-neutral-400",
                  "focus:border-amber-600 dark:focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:focus:ring-gold-400/20",
                  "disabled:opacity-60 disabled:cursor-not-allowed shadow-inner dark:shadow-none"
                )}
              />
            </div>

            <div>
              <label
                htmlFor="contact-service"
                className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
              >
                Service of Interest <span className="text-neutral-400 font-normal">(Optional)</span>
              </label>
              <CustomSelect
                id="contact-service"
                name="service"
                value={formData.service}
                onChange={(val) => {
                  setFormData((prev) => ({ ...prev, service: val }));
                  if (errorMessage) setErrorMessage(null);
                }}
                disabled={isSubmitting}
                placeholder="Select a service (Optional)"
                options={SERVICE_OPTIONS}
                triggerClassName="h-12 px-4 rounded-xl sm:rounded-2xl bg-neutral-100/90 dark:bg-neutral-900/80 border-neutral-300/80 dark:border-white/10"
              />
            </div>
          </div>

          {/* Row 3: Message Textarea (Full width) */}
          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-1.5"
            >
              Project Details or Message <span className="text-amber-500">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              placeholder="Tell us about your project objectives, timeline, existing tech stack, or specific challenges..."
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              className={cn(
                "w-full p-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm text-neutral-900 dark:text-white transition-all resize-y min-h-[140px]",
                "bg-neutral-100/90 dark:bg-neutral-900/80 border border-neutral-300/80 dark:border-white/10",
                "placeholder:text-neutral-500 dark:placeholder:text-neutral-400",
                "focus:border-amber-600 dark:focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:focus:ring-gold-400/20",
                "disabled:opacity-60 disabled:cursor-not-allowed shadow-inner dark:shadow-none"
              )}
            />
          </div>

          {/* Row 4: Submit CTA + Reassurance Badges */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full sm:w-auto h-12 px-8 rounded-full inline-flex items-center justify-center gap-2 font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer select-none",
                "bg-gradient-to-r from-amber-300 via-gold-400 to-amber-600 text-neutral-950 shadow-gold-glow hover:shadow-gold-glow-lg hover:brightness-105 active:scale-[0.98]",
                "disabled:opacity-60 disabled:pointer-events-none disabled:active:scale-100"
              )}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Submit Message</span>
                  <Send className="w-4 h-4 ml-0.5" />
                </>
              )}
            </button>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Replies within 24h
              </span>
              <span className="inline-block w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              <span>100% Confidential</span>
              <span className="hidden md:inline-block w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              <span className="hidden md:inline">Senior Technical Review</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
