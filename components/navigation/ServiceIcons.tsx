"use client";

import React from "react";
import {
  Sparkles,
  MapPin,
  Globe,
  ShoppingBag,
  ShoppingCart,
  Monitor,
  Terminal,
  Cpu,
  CheckCircle2,
  Calendar,
  TrendingUp,
  Layout,
  Building2,
  Home,
  Code2,
  Store,
  CreditCard,
  Package,
  Cloud,
  Users,
  Database,
  Zap,
  GitMerge,
  Bot,
} from "lucide-react";

/* =====================================================================
   AUTHENTIC CATEGORY ICONS (Matching Real Google & Modern Standards)
   ===================================================================== */

/** Google Business Profile: Official Google My Business Storefront with Awning & 'G' (from UXWing) */
export function GoogleBusinessProfileCategoryIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 122.88 107.25"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Base store building */}
      <path
        fill="#4989F5"
        d="M10.43 26.86h99c2.35 0 4.26 1.91 4.26 4.26v71.88c0 2.35-1.91 4.26-4.26 4.26h-99c-2.35 0-4.26-1.91-4.26-4.26V31.12c0-2.36 1.91-4.26 4.26-4.26z"
      />
      {/* Awning stripes */}
      <polygon fill="#3C4BA6" points="30.72,40.32 61.44,40.32 61.44,0 35.32,0 30.72,40.32" />
      <path fill="#7BABF7" d="M92.16,40.32H61.44V0h26.12L92.16,40.32z" />
      <path fill="#3F51B5" d="M113.73,7.78l-0.04-0.14C112.72,3.18,108.77,0,104.21,0H87.56l4.6,40.32h30.72L113.73,7.78z" />
      <path fill="#7BABF7" d="M9.15,7.78l0.04-0.14C10.17,3.18,14.11,0,18.68,0h16.64l-4.6,40.32H0L9.15,7.78z" />
      {/* Awning scallops */}
      <path fill="#709BE0" d="M30.78,40.31c0,8.48-6.87,15.35-15.35,15.35c-8.48,0-15.35-6.87-15.35-15.35H30.78z" />
      <path fill="#3C4BA6" d="M61.48,40.31c0,8.48-6.87,15.35-15.35,15.35c-8.48,0-15.35-6.87-15.35-15.35H61.48z" />
      <path fill="#709BE0" d="M92.18,40.31c0,8.48-6.87,15.35-15.35,15.35c-8.48,0-15.35-6.87-15.35-15.35H92.18z" />
      <path fill="#3C4BA6" d="M122.88,40.31c0,8.48-6.87,15.35-15.35,15.35c-8.48,0-15.35-6.87-15.35-15.35H122.88z" />
      {/* Official White Google G */}
      <path
        fill="#FFFFFF"
        d="M107.53,81.9c-0.05-0.73-0.14-1.4-0.27-2.25H90.51c0,2.34,0,4.9-0.01,7.24h9.7c-0.42,2.21-1.7,4.16-3.55,5.42c-1.86,1.26 0,-0.04-0.01,-0.04-1.19,0.78-2.53,1.3-3.93,1.53-0.68,0.12-1.38,0.19-2.08,0.19-0.73,0-1.46-0.07-2.17-0.21-1.42-0.29-2.77-0.88-3.96-1.72-1.75-1.24-3.11-2.98-3.89-4.98-0.06-0.16-0.12-0.31-0.17-0.47v-0.02l0.02-0.01c-0.38-1.11-0.57-2.29-0.57-3.46 0,-1.17 0.19,-2.34 0.57,-3.45 0.53,-1.57 1.42,-3.01 2.58,-4.19 2.72,-2.82 6.79,-3.88 10.55,-2.75 1.44,0.44 2.75,1.22 3.84,2.26l3.27-3.27c0.58-0.58 1.18-1.15 1.73-1.75-1.66-1.55-3.61-2.76-5.73-3.55-1.97-0.71-4.05-1.08-6.14-1.08-1.99,0-3.97,0.33-5.85,0.97-0.14,0.05-0.27,0.09-0.4,0.14-4.2,1.58-7.65,4.68-9.68,8.68-0.71,1.41-1.24,2.92-1.55,4.48-1.85,9.21 3.77,18.28 12.84,20.72 2.97,0.79 6.12,0.77 9.11,0.1 2.71,-0.61 5.23,-1.92 7.29,-3.79 2.15,-1.98 3.7-4.62 4.5-7.42 0.52-1.84 0.79-3.75 0.79-5.66C107.6,83.01 107.57,82.45 107.53,81.9z"
      />
    </svg>
  );
}

/** Website Development: Modern desktop browser window with controls and code </> */
export function WebsiteDevCategoryIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3.5" width="20" height="15" rx="3" className="fill-slate-800 dark:fill-[#1e2330]" stroke="#38BDF8" strokeWidth="1.3" />
      <line x1="2" y1="8" x2="22" y2="8" stroke="#38BDF8" strokeOpacity="0.4" strokeWidth="1" />
      <circle cx="5.5" cy="5.75" r="1" fill="#EF4444" />
      <circle cx="8.5" cy="5.75" r="1" fill="#F59E0B" />
      <circle cx="11.5" cy="5.75" r="1" fill="#10B981" />
      <path d="M8 12.5l-2.2 1.5 2.2 1.5" stroke="#38BDF8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 12.5l2.2 1.5-2.2 1.5" stroke="#38BDF8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="13" y1="11.5" x2="11" y2="16.5" stroke="#F59E0B" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 21h6" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 18.5v2.5" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** E-Commerce: Real online shopping cart with items & checkout */
export function EcommerceCategoryIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="20" r="1.75" fill="#F59E0B" />
      <circle cx="18" cy="20" r="1.75" fill="#F59E0B" />
      <path d="M2.5 3.5h3l2.2 10.5a1.5 1.5 0 001.5 1.2h9.1a1.5 1.5 0 001.5-1.1l1.7-6.6H6.2" stroke="#10B981" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 7.5h5" stroke="#F59E0B" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M13.5 5v5" stroke="#F59E0B" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** Software Development: Application module window with code architecture </> */
export function SoftwareDevCategoryIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="3.5" width="19" height="17" rx="3.5" className="fill-indigo-950 dark:fill-[#1b1838]" stroke="#818CF8" strokeWidth="1.3" />
      <line x1="2.5" y1="8" x2="21.5" y2="8" stroke="#818CF8" strokeOpacity="0.4" strokeWidth="1" />
      <circle cx="5.5" cy="5.75" r="0.9" fill="#818CF8" />
      <circle cx="8" cy="5.75" r="0.9" fill="#818CF8" fillOpacity="0.5" />
      <path d="M8.5 12.5l-2.2 1.5 2.2 1.5" stroke="#C084FC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.5 12.5l2.2 1.5-2.2 1.5" stroke="#C084FC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="13.25" y1="11" x2="10.75" y2="17" stroke="#22D3EE" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/** AI & Automation: Authentic Google Gemini / AI 4-pointed sparkle star */
export function AiAutomationCategoryIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="geminiSparkleGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38BDF8" />
          <stop offset="0.5" stopColor="#818CF8" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <path
        d="M12 2C12 7.2 7.2 12 2 12C7.2 12 12 16.8 12 22C12 16.8 16.8 12 22 12C16.8 12 12 7.2 12 2Z"
        fill="url(#geminiSparkleGrad)"
      />
      <path
        d="M19.5 2.5C19.5 4.2 18.2 5.5 16.5 5.5C18.2 5.5 19.5 6.8 19.5 8.5C19.5 6.8 20.8 5.5 22.5 5.5C20.8 5.5 19.5 4.2 19.5 2.5Z"
        fill="#FBBF24"
      />
    </svg>
  );
}

export function renderCategoryIcon(categoryId: string, className = "h-6 w-6") {
  switch (categoryId) {
    case "gmb":
      return <GoogleBusinessProfileCategoryIcon className={className} />;
    case "web-dev":
      return <WebsiteDevCategoryIcon className={className} />;
    case "ecommerce":
      return <EcommerceCategoryIcon className={className} />;
    case "software":
      return <SoftwareDevCategoryIcon className={className} />;
    case "automation":
      return <AiAutomationCategoryIcon className={className} />;
    default:
      return <Sparkles className={className} />;
  }
}

/* =====================================================================
   AUTHENTIC SUB-SERVICE ICONS (Genuine, High-Quality, Scaled)
   ===================================================================== */

/** 1. GMB: Creation & Setup (Google Maps Pin with verified store check) */
export function GmbCreationSetupIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill="#EA4335"
      />
      <circle cx="12" cy="9" r="3.2" fill="#FFFFFF" />
      <path
        d="M10.8 9.2l1 1 2.2-2.2"
        stroke="#4285F4"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse cx="12" cy="22" rx="4" ry="1" fill="#000000" fillOpacity="0.2" />
    </svg>
  );
}

/** 2. GMB: Optimization (Google Search Rank lens with golden 5-star rating) */
export function GmbOptimizationIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="6" stroke="#4285F4" strokeWidth="1.8" />
      <line x1="14.5" y1="14.5" x2="20.5" y2="20.5" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M10 6.5l1 2.2 2.4.3-1.7 1.7.4 2.4-2.1-1.1-2.1 1.1.4-2.4-1.7-1.7 2.4-.3 1-2.2z"
        fill="#FBBC05"
      />
      <circle cx="19" cy="5" r="1.8" fill="#34A853" />
      <path d="M19 4v2M18 5h2" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
}

/** 3. GMB: Audit (Verified diagnostic shield with checklist) */
export function GmbAuditIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2.5l7 3v6c0 5-3.5 8.8-7 10-3.5-1.2-7-5-7-10v-6l7-3z"
        fill="#34A853"
        fillOpacity="0.15"
        stroke="#34A853"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 11.5l2.5 2.5 4.5-4.5"
        stroke="#34A853"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="7.5" y1="6.5" x2="11.5" y2="6.5" stroke="#4285F4" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** 4. GMB: Management (Google business calendar with live updates & notifications) */
export function GmbManagementIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4.5" width="18" height="16" rx="3" stroke="#4285F4" strokeWidth="1.6" fill="#4285F4" fillOpacity="0.08" />
      <line x1="3" y1="9.5" x2="21" y2="9.5" stroke="#4285F4" strokeWidth="1.4" />
      <line x1="7.5" y1="2.5" x2="7.5" y2="5" stroke="#EA4335" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="16.5" y1="2.5" x2="16.5" y2="5" stroke="#EA4335" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="8" cy="13.5" r="1.3" fill="#FBBC05" />
      <circle cx="12" cy="13.5" r="1.3" fill="#34A853" />
      <circle cx="16" cy="13.5" r="1.3" fill="#4285F4" />
      <rect x="7" y="16.5" width="6" height="1.8" rx="0.9" fill="#4285F4" />
      <circle cx="16.5" cy="17" r="1" fill="#EA4335" />
    </svg>
  );
}

/** 5. GMB: Local SEO (Google 3-Pack Maps Radar & Ascending Growth Rank) */
export function LocalSeoIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M3 20.5h18" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="5" y="13.5" width="3" height="7" rx="1" fill="#4285F4" />
      <rect x="10.5" y="9.5" width="3" height="11" rx="1" fill="#34A853" />
      <rect x="16" y="5.5" width="3" height="15" rx="1" fill="#FBBC05" />
      <path d="M6 10l5-4 4 2 4.5-5" stroke="#EA4335" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5 3h3v3" stroke="#EA4335" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** 6. Web Dev: Landing Pages (High-conversion landing page with CTA click beacon) */
export function LandingPagesIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="2.5" width="18" height="19" rx="3" stroke="#0284C7" strokeWidth="1.6" fill="#0284C7" fillOpacity="0.08" />
      <line x1="3" y1="7" x2="21" y2="7" stroke="#0284C7" strokeWidth="1.2" strokeOpacity="0.4" />
      <rect x="6" y="10" width="7" height="2" rx="1" fill="#0284C7" />
      <rect x="6" y="13.5" width="12" height="1.5" rx="0.75" fill="#94A3B8" fillOpacity="0.6" />
      <rect x="6" y="17" width="6.5" height="2.5" rx="1.25" fill="#F59E0B" />
      <path d="M14.5 13.5l3.5 3.5-1.5 1.5 2.5 1-1 2.5-2.5-1-1.5 1.5-1-7z" fill="#0284C7" stroke="#FFFFFF" strokeWidth="0.8" />
    </svg>
  );
}

/** 7. Web Dev: Business Websites (Multi-section corporate web layout with navigation dots) */
export function BusinessWebsitesIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="3.5" width="19" height="17" rx="3" stroke="#0EA5E9" strokeWidth="1.6" fill="#0EA5E9" fillOpacity="0.08" />
      <line x1="2.5" y1="8" x2="21.5" y2="8" stroke="#0EA5E9" strokeWidth="1" strokeOpacity="0.3" />
      <circle cx="5.5" cy="5.75" r="1" fill="#EF4444" />
      <circle cx="8.5" cy="5.75" r="1" fill="#F59E0B" />
      <circle cx="11.5" cy="5.75" r="1" fill="#10B981" />
      <rect x="5" y="10.5" width="6.5" height="7.5" rx="1.5" fill="#0EA5E9" fillOpacity="0.2" stroke="#0EA5E9" strokeWidth="1" />
      <rect x="12.5" y="10.5" width="6.5" height="7.5" rx="1.5" fill="#6366F1" fillOpacity="0.2" stroke="#6366F1" strokeWidth="1" />
    </svg>
  );
}

/** 8. Web Dev: Corporate Websites (Enterprise architectural headquarters & portal window) */
export function CorporateWebsitesIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="6" width="11" height="15" rx="1.5" stroke="#4F46E5" strokeWidth="1.6" fill="#4F46E5" fillOpacity="0.08" />
      <rect x="14" y="2.5" width="7" height="18.5" rx="1.5" stroke="#6366F1" strokeWidth="1.6" fill="#6366F1" fillOpacity="0.12" />
      <circle cx="6.5" cy="9.5" r="1" fill="#818CF8" />
      <circle cx="10.5" cy="9.5" r="1" fill="#818CF8" />
      <circle cx="6.5" cy="13.5" r="1" fill="#818CF8" />
      <circle cx="10.5" cy="13.5" r="1" fill="#818CF8" />
      <circle cx="17.5" cy="6" r="1" fill="#38BDF8" />
      <circle cx="17.5" cy="9.5" r="1" fill="#38BDF8" />
      <circle cx="17.5" cy="13" r="1" fill="#38BDF8" />
      <rect x="6.5" y="17.5" width="4" height="3.5" rx="0.5" fill="#F59E0B" />
    </svg>
  );
}

/** 9. Web Dev: Real Estate Websites (Architectural property with map beacon) */
export function RealEstateWebsitesIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M3 10l9-7 9 7v10a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 20V10z" stroke="#10B981" strokeWidth="1.6" fill="#10B981" fillOpacity="0.08" strokeLinejoin="round" />
      <rect x="9.5" y="13.5" width="5" height="8" rx="0.5" stroke="#10B981" strokeWidth="1.4" fill="#065F46" fillOpacity="0.2" />
      <circle cx="14" cy="17.5" r="0.6" fill="#F59E0B" />
      <circle cx="12" cy="7.5" r="1.8" fill="#F59E0B" />
    </svg>
  );
}

/** 10. Web Dev: Custom Websites (Tailored code craft with atomic symbol & brackets) */
export function CustomWebsitesIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="3.5" width="19" height="17" rx="3.5" stroke="#8B5CF6" strokeWidth="1.6" fill="#8B5CF6" fillOpacity="0.08" />
      <path d="M7.5 12l-2.5 2 2.5 2" stroke="#8B5CF6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5 12l2.5 2-2.5 2" stroke="#8B5CF6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="13.5" y1="11" x2="10.5" y2="17" stroke="#EC4899" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="6.5" r="1.5" fill="#38BDF8" />
    </svg>
  );
}

/** 11. E-Commerce: E-commerce Websites (Shopping bag with handles & discount tag) */
export function EcommerceWebsitesIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M5 8h14l-1.2 12.2a2 2 0 01-2 1.8H8.2a2 2 0 01-2-1.8L5 8z" stroke="#059669" strokeWidth="1.6" fill="#059669" fillOpacity="0.08" />
      <path d="M8.5 8.5V6a3.5 3.5 0 017 0v2.5" stroke="#059669" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="13.5" r="2.5" fill="#F59E0B" />
      <path d="M11 13.5h2M12 12.5v2" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/** 12. E-Commerce: Online Store Development (Shopping cart with colorful product parcels) */
export function OnlineStoreDevIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="20" r="1.8" fill="#F59E0B" />
      <circle cx="18" cy="20" r="1.8" fill="#F59E0B" />
      <path d="M2.5 3.5h3l2.2 10.5a1.5 1.5 0 001.5 1.2h9.1a1.5 1.5 0 001.5-1.1l1.7-6.6H6.2" stroke="#10B981" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="9.5" y="6" width="3.5" height="4" rx="0.75" fill="#38BDF8" />
      <rect x="14" y="5" width="3.5" height="5" rx="0.75" fill="#A855F7" />
    </svg>
  );
}

/** 13. E-Commerce: Payment Integration (Card checkout with EMV chip & contactless wave) */
export function PaymentIntegrationIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="5" width="19" height="14" rx="3" stroke="#D97706" strokeWidth="1.6" fill="#D97706" fillOpacity="0.08" />
      <line x1="2.5" y1="9.5" x2="21.5" y2="9.5" stroke="#D97706" strokeWidth="1.5" />
      <rect x="5.5" y="12.5" width="3.5" height="3" rx="0.75" fill="#F59E0B" />
      <path d="M15 13a2.5 2.5 0 010 3" stroke="#10B981" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M17 12a4.5 4.5 0 010 5" stroke="#10B981" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/** 14. E-Commerce: Product & Order Systems (Fulfillment box with tracking check) */
export function ProductOrderSystemsIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.5l8 4.5v10l-8 4.5-8-4.5V7l8-4.5z" stroke="#059669" strokeWidth="1.6" fill="#059669" fillOpacity="0.08" strokeLinejoin="round" />
      <path d="M12 2.5v19M4 7l8 4.5 8-4.5" stroke="#059669" strokeWidth="1.4" />
      <circle cx="12" cy="11.5" r="2.5" fill="#F59E0B" />
      <path d="M10.8 11.5l0.8 0.8 1.8-1.8" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** 15. Software: SaaS Development (Cloud multi-tenant platform with database sync) */
export function SaasDevIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 18a4.5 4.5 0 01-.5-8.97A6 6 0 0117.5 8a5 5 0 014 4.9 4.5 4.5 0 01-4 5.1H6.5z" stroke="#6366F1" strokeWidth="1.6" fill="#6366F1" fillOpacity="0.08" />
      <path d="M9.5 13.5l2.5-2.5 2.5 2.5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 11v5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="18" cy="7.5" r="1.5" fill="#F59E0B" />
    </svg>
  );
}

/** 16. Software: CRM Development (Customer relationship hub with user network) */
export function CrmDevIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="6.5" r="3" stroke="#8B5CF6" strokeWidth="1.6" fill="#8B5CF6" fillOpacity="0.1" />
      <path d="M6 19c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#8B5CF6" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="5" cy="11" r="1.8" fill="#38BDF8" />
      <circle cx="19" cy="11" r="1.8" fill="#F59E0B" />
      <line x1="6.8" y1="11" x2="9.2" y2="9.5" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="1 1" />
      <line x1="17.2" y1="11" x2="14.8" y2="9.5" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="1 1" />
    </svg>
  );
}

/** 17. Software: ERP Development (Central enterprise database cylinders & metric engine) */
export function ErpDevIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.5" stroke="#0284C7" strokeWidth="1.6" fill="#0284C7" fillOpacity="0.12" />
      <path d="M4.5 5.5v5c0 1.38 3.36 2.5 7.5 2.5s7.5-1.12 7.5-2.5v-5" stroke="#0284C7" strokeWidth="1.6" />
      <path d="M4.5 10.5v5c0 1.38 3.36 2.5 7.5 2.5s7.5-1.12 7.5-2.5v-5" stroke="#0284C7" strokeWidth="1.6" />
      <circle cx="16.5" cy="15.5" r="2.5" fill="#10B981" />
      <path d="M15.5 15.5l0.8 0.8 1.4-1.4" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** 18. Software: Custom Software (Terminal developer prompt with modular stack) */
export function CustomSoftwareIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="3.5" width="19" height="17" rx="3.5" stroke="#4F46E5" strokeWidth="1.6" fill="#4F46E5" fillOpacity="0.08" />
      <line x1="2.5" y1="8" x2="21.5" y2="8" stroke="#4F46E5" strokeWidth="1" strokeOpacity="0.4" />
      <circle cx="5.5" cy="5.75" r="0.9" fill="#EF4444" />
      <circle cx="8" cy="5.75" r="0.9" fill="#F59E0B" />
      <path d="M6.5 12l2.5 2-2.5 2" stroke="#22D3EE" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="11" y1="16" x2="15" y2="16" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/** 19. AI: AI Automation (Neural cognitive processor chip with pulse rays) */
export function AiAutomationSubIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="5.5" y="5.5" width="13" height="13" rx="3" stroke="#8B5CF6" strokeWidth="1.6" fill="#8B5CF6" fillOpacity="0.1" />
      <circle cx="12" cy="12" r="3.2" fill="#8B5CF6" />
      <path d="M12 9.8v4.4M9.8 12h4.4" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="8.5" y1="2.5" x2="8.5" y2="5.5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="15.5" y1="2.5" x2="15.5" y2="5.5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8.5" y1="18.5" x2="8.5" y2="21.5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="15.5" y1="18.5" x2="15.5" y2="21.5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2.5" y1="8.5" x2="5.5" y2="8.5" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2.5" y1="15.5" x2="5.5" y2="15.5" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18.5" y1="8.5" x2="21.5" y2="8.5" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18.5" y1="15.5" x2="21.5" y2="15.5" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** 20. AI: Business Automation (Electric automation gear mechanism) */
export function BusinessAutomationIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="8" stroke="#F59E0B" strokeWidth="1.6" fill="#F59E0B" fillOpacity="0.08" strokeDasharray="3 2" />
      <path d="M13 3l-5 8h4.5l-1.5 8 6.5-9.5h-4.5l2-6.5z" fill="#F59E0B" stroke="#D97706" strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}

/** 21. AI: Workflow Automation (Multi-node connected webhook workflow) */
export function WorkflowAutomationIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <circle cx="5" cy="12" r="2.5" fill="#3B82F6" />
      <circle cx="19" cy="6.5" r="2.5" fill="#10B981" />
      <circle cx="19" cy="17.5" r="2.5" fill="#8B5CF6" />
      <path d="M7.5 12h3.5a3 3 0 003-3V6.5h2.5" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 12a3 3 0 013 3v2.5h2.5" stroke="#94A3B8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="11" cy="12" r="1.2" fill="#F59E0B" />
    </svg>
  );
}

/** 22. AI: Custom AI Solutions (Intelligent autonomous bot agent with vision halo) */
export function CustomAiSolutionsIcon({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="4.5" y="6" width="15" height="13" rx="4" stroke="#06B6D4" strokeWidth="1.6" fill="#06B6D4" fillOpacity="0.08" />
      <line x1="12" y1="2.5" x2="12" y2="6" stroke="#06B6D4" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="2.5" r="1.3" fill="#F59E0B" />
      <circle cx="9" cy="11.5" r="1.5" fill="#06B6D4" />
      <circle cx="15" cy="11.5" r="1.5" fill="#06B6D4" />
      <path d="M8.5 15.5c1 1 2.5 1.5 3.5 1.5s2.5-.5 3.5-1.5" stroke="#06B6D4" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="20.5" cy="12.5" r="1" fill="#A855F7" />
      <circle cx="3.5" cy="12.5" r="1" fill="#A855F7" />
    </svg>
  );
}

const ICON_MAP: Record<string, React.ReactNode> = {
  MapPin: <MapPin className="h-3.5 w-3.5" />,
  Globe: <Globe className="h-3.5 w-3.5" />,
  ShoppingBag: <ShoppingBag className="h-3.5 w-3.5" />,
  ShoppingCart: <ShoppingCart className="h-3.5 w-3.5" />,
  Monitor: <Monitor className="h-3.5 w-3.5" />,
  Terminal: <Terminal className="h-3.5 w-3.5" />,
  Cpu: <Cpu className="h-3.5 w-3.5" />,
  Sparkles: <Sparkles className="h-3.5 w-3.5" />,
  CheckCircle2: <CheckCircle2 className="h-3.5 w-3.5" />,
  Calendar: <Calendar className="h-3.5 w-3.5" />,
  TrendingUp: <TrendingUp className="h-3.5 w-3.5" />,
  Layout: <Layout className="h-3.5 w-3.5" />,
  Building2: <Building2 className="h-3.5 w-3.5" />,
  Home: <Home className="h-3.5 w-3.5" />,
  Code2: <Code2 className="h-3.5 w-3.5" />,
  Store: <Store className="h-3.5 w-3.5" />,
  CreditCard: <CreditCard className="h-3.5 w-3.5" />,
  Package: <Package className="h-3.5 w-3.5" />,
  Cloud: <Cloud className="h-3.5 w-3.5" />,
  Users: <Users className="h-3.5 w-3.5" />,
  Database: <Database className="h-3.5 w-3.5" />,
  Zap: <Zap className="h-3.5 w-3.5" />,
  GitMerge: <GitMerge className="h-3.5 w-3.5" />,
  Bot: <Bot className="h-3.5 w-3.5" />,
};

export function renderIcon(name?: string, fallback = <Sparkles className="h-3.5 w-3.5" />) {
  if (!name) return fallback;
  return ICON_MAP[name] || fallback;
}

/** Render authentic sub-service icon matching the exact business service */
export function renderSubServiceIcon(title: string, iconName?: string, className = "h-11 w-11") {
  switch (title) {
    // Google Business Profile
    case "GMB Creation & Setup":
      return <GmbCreationSetupIcon className={className} />;
    case "GMB Optimization":
      return <GmbOptimizationIcon className={className} />;
    case "GMB Audit":
      return <GmbAuditIcon className={className} />;
    case "GMB Management":
      return <GmbManagementIcon className={className} />;
    case "Local SEO":
      return <LocalSeoIcon className={className} />;

    // Website Development
    case "Landing Pages":
      return <LandingPagesIcon className={className} />;
    case "Business Websites":
      return <BusinessWebsitesIcon className={className} />;
    case "Corporate Websites":
      return <CorporateWebsitesIcon className={className} />;
    case "Real Estate Websites":
      return <RealEstateWebsitesIcon className={className} />;
    case "Custom Websites":
      return <CustomWebsitesIcon className={className} />;

    // E-Commerce
    case "E-commerce Websites":
    case "E-Commerce Websites":
      return <EcommerceWebsitesIcon className={className} />;
    case "Online Store Development":
      return <OnlineStoreDevIcon className={className} />;
    case "Payment Integration":
      return <PaymentIntegrationIcon className={className} />;
    case "Product & Order Systems":
      return <ProductOrderSystemsIcon className={className} />;

    // Software Development
    case "SaaS Development":
      return <SaasDevIcon className={className} />;
    case "CRM Development":
      return <CrmDevIcon className={className} />;
    case "ERP Development":
      return <ErpDevIcon className={className} />;
    case "Custom Software":
      return <CustomSoftwareIcon className={className} />;

    // AI & Automation
    case "AI Automation":
      return <AiAutomationSubIcon className={className} />;
    case "Business Automation":
      return <BusinessAutomationIcon className={className} />;
    case "Workflow Automation":
      return <WorkflowAutomationIcon className={className} />;
    case "Custom AI Solutions":
      return <CustomAiSolutionsIcon className={className} />;

    default:
      return renderIcon(iconName, <Sparkles className={className} />);
  }
}
