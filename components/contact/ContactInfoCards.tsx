"use client";

import React from "react";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { BRAND_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ContactCardItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
  href?: string;
  actionText?: string;
}

const CONTACT_INFO_DATA: ContactCardItem[] = [
  {
    id: "phone",
    icon: <Phone className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    label: "Mobile Number",
    value: BRAND_INFO.contactPhone,
    description: "Available Monday to Saturday, 10:00 AM – 10:00 PM (Sunday Closed) for direct consultation.",
    href: `tel:${BRAND_INFO.contactPhone.replace(/[^+\d]/g, "")}`,
    actionText: "Call Now",
  },
  {
    id: "email",
    icon: <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    label: "Official Email",
    value: BRAND_INFO.contactEmail,
    description: "Direct channel for project proposals and audits. Average response under 24 business hours.",
    href: `mailto:${BRAND_INFO.contactEmail}`,
    actionText: "Send Email",
  },
  {
    id: "location",
    icon: <MapPin className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
    label: "Location",
    value: BRAND_INFO.address,
    description: "Serving emerging brands, SMEs, and digital enterprises nationwide and internationally.",
    href: "#map-section",
    actionText: "View on Map",
  },
];

export function ContactInfoCards() {
  return (
    <div className="w-full mt-10 sm:mt-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {CONTACT_INFO_DATA.map((card) => {
          const content = (
            <div
              className={cn(
                "relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between h-full group transition-all duration-300",
                "bg-white/95 dark:bg-neutral-900/70 border border-neutral-200/90 dark:border-white/10",
                "shadow-md hover:shadow-xl hover:border-gold-400/40 dark:hover:border-gold-400/30",
                "hover:-translate-y-1"
              )}
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-neutral-100 dark:bg-white/[0.05] border border-neutral-200/80 dark:border-white/10 mb-4 shadow-sm group-hover:scale-105 transition-transform duration-200">
                  {card.icon}
                </div>

                {/* Subtitle / Category */}
                <span className="font-mono text-[10.5px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold block">
                  {card.label}
                </span>

                {/* Main Heading / Contact Value (Reference-Accurate Bold Metric) */}
                <h4 className="mt-1 text-sm xs:text-base md:text-sm lg:text-base xl:text-lg font-bold tracking-tight text-neutral-950 dark:text-white break-all sm:break-words">
                  {card.value}
                </h4>

                {/* Description Copy */}
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              {/* Action Cue */}
              {card.actionText && (
                <div className="mt-5 pt-4 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-semibold text-amber-700 dark:text-amber-400 group-hover:text-amber-800 dark:group-hover:text-gold-300 transition-colors">
                  <span>{card.actionText}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              )}
            </div>
          );

          if (card.href && card.href.startsWith("#")) {
            return (
              <a key={card.id} href={card.href} className="block h-full">
                {content}
              </a>
            );
          }

          if (card.href) {
            return (
              <a
                key={card.id}
                href={card.href}
                className="block h-full"
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {content}
              </a>
            );
          }

          return <div key={card.id}>{content}</div>;
        })}
      </div>
    </div>
  );
}
