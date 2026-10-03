"use client";

import React from "react";
import { Star, MapPin, Navigation } from "lucide-react";
import { BRAND_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

const GOOGLE_MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Digital%20Horizon%20Solutions,%20221,%20Gali%20Number%202,%20Ghaziabad,%20Uttar%20Pradesh,%20India&t=&z=16&ie=UTF8&iwloc=&output=embed";

const GOOGLE_BUSINESS_PLACE_URL =
  "https://www.google.com/maps/search/?api=1&query=Digital+Horizon+Solutions&query_place_id=ChIJ07MVVQDxDDkRXEZjSk148cI";

export function ContactMap() {
  return (
    <section
      id="map-section"
      className="w-full mt-10 sm:mt-14 mb-14 sm:mb-20 scroll-mt-24"
      aria-label="Studio Location Map"
    >
      <div className="relative w-full rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-xl">
        {/* 1. Header Bar: Brand, 5.0 Rating Verification & Direct Google Maps Direction Link */}
        <div className="px-4 py-3 sm:px-6 sm:py-3.5 bg-neutral-50/95 dark:bg-neutral-950/95 border-b border-neutral-200/80 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
              <MapPin className="w-4 h-4" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h5 className="text-xs sm:text-sm font-bold text-neutral-950 dark:text-white leading-tight">
                  {BRAND_INFO.name}
                </h5>
                <div className="hidden xs:flex items-center gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                  ))}
                  <span className="text-[10px] font-bold text-neutral-800 dark:text-neutral-200 ml-1">
                    5.0
                  </span>
                </div>
              </div>
              <p className="text-[10px] sm:text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                {BRAND_INFO.address}
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <a
              href={GOOGLE_BUSINESS_PLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-neutral-900 dark:text-white bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-white/10 shadow-sm transition-all"
            >
              <span>Get Directions</span>
              <Navigation className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            </a>
          </div>
        </div>

        {/* 2. Pure Clean Google Map Embed (Without Any Locator/Sidebar Panel) */}
        <div className="relative w-full h-[360px] xs:h-[400px] sm:h-[460px] lg:h-[520px] bg-neutral-100 dark:bg-neutral-950">
          <iframe
            title="Digital Horizon Solutions Google Maps Location"
            src={GOOGLE_MAPS_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full block"
          />
        </div>
      </div>
    </section>
  );
}
