"use client";

import React from "react";
import {
  GoogleBusinessProfileCategoryIcon,
  WebsiteDevCategoryIcon,
  EcommerceCategoryIcon,
  SoftwareDevCategoryIcon,
  AiAutomationCategoryIcon,
} from "@/components/navigation/ServiceIcons";
import {
  TrendingUp,
  Layout,
  Code2,
  Zap,
  CheckCircle2,
  Sparkles,
  Monitor,
  CreditCard,
  Users,
  Database,
  Store,
} from "lucide-react";
import { ServiceBubbleData } from "./HeroServiceCard";
import { cn } from "@/lib/utils";

interface BubbleConfig extends ServiceBubbleData {
  pathClass: string;
  positionStyle: React.CSSProperties;
  sizeClass: string;
  visibilityClass: string;
}

const BUBBLE_ECOSYSTEM: BubbleConfig[] = [
  // =========================================================================
  // CLUSTER 1: LEFT FLANK CONSTELLATION (>= 1 cm / 38px physical clearance)
  // Clean, organized floating constellation without overlapping or collisions
  // =========================================================================

  // 1. Google Business Profile (Top-Left Major Anchor — Mobile Tier 1)
  {
    id: "gmb",
    title: "Google Business Profile",
    category: "Local Visibility",
    badge: "Essential",
    description:
      "Complete profile setup, verification assistance, and Google Maps optimization to attract nearby customers.",
    features: [
      "GMB Creation & Setup",
      "Profile & Category Optimization",
      "Google Maps 3-Pack Ranking",
      "Local Citation Consistency",
      "Review Generation Framework",
    ],
    icon: <GoogleBusinessProfileCategoryIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9" />,
    pathClass: "bubble-path-1",
    positionStyle: { left: "2%", top: "7%" },
    sizeClass: "w-[76px] h-[76px] sm:w-[125px] sm:h-[125px] md:w-[175px] md:h-[175px] lg:w-[225px] lg:h-[225px] xl:w-[260px] xl:h-[260px]",
    visibilityClass: "block", // Mobile Corner 1
  },

  // 2. GMB Health Audit (Left Inset — >= 1cm gap from GMB)
  {
    id: "gmb-audit",
    title: "GMB Health Audit",
    category: "Profile Health",
    badge: "Free",
    description:
      "Comprehensive diagnostic audit of your Google Business profile covering ranking signals, citations, and reviews.",
    features: [
      "Profile Completeness Score",
      "Citation Inconsistency Check",
      "Local Competitor Benchmarking",
      "Keyword Ranking Breakdown",
      "Actionable Optimization Roadmap",
    ],
    icon: <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-emerald-500 dark:text-emerald-400" />,
    pathClass: "bubble-path-3",
    positionStyle: { left: "19%", top: "14%" },
    sizeClass: "w-[72px] h-[72px] sm:w-[115px] sm:h-[115px] md:w-[155px] md:h-[155px] lg:w-[205px] lg:h-[205px] xl:w-[235px] xl:h-[235px]",
    visibilityClass: "hidden lg:block", // 1024px+
  },

  // 3. Local SEO & Maps (Mid-Left Outer — >= 1cm gap below GMB)
  {
    id: "local-seo",
    title: "Local SEO & Maps",
    category: "Search Dominance",
    badge: "High ROI",
    description:
      "Dominate local searches with geo-targeted keywords, regional directory listings, and organic ranking signals.",
    features: [
      "Geo-Targeted Keywords",
      "NAP Directory Citations",
      "Local Competitor Analysis",
      "Voice Search Optimization",
      "Rank Tracking Dashboard",
    ],
    icon: (
      <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-amber-500 dark:text-amber-400" />
    ),
    pathClass: "bubble-path-2",
    positionStyle: { left: "3%", top: "40%" },
    sizeClass: "w-[72px] h-[72px] sm:w-[115px] sm:h-[115px] md:w-[155px] md:h-[155px] lg:w-[205px] lg:h-[205px] xl:w-[235px] xl:h-[235px]",
    visibilityClass: "hidden sm:block", // 640px+
  },

  // 4. Landing Pages (Left Mid Inset — >= 1cm gap from Local SEO)
  {
    id: "landing-pages",
    title: "Landing Pages",
    category: "Conversion Engineering",
    badge: "Fast",
    description:
      "Ultra-fast, conversion-focused landing pages engineered to maximize returns on paid ads and organic campaigns.",
    features: [
      "Sub-Second Load Times",
      "Persuasive Value Layouts",
      "Seamless Lead Form Routing",
      "A/B Testing Ready",
      "Mobile-First Responsive",
    ],
    icon: <Layout className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 text-sky-500 dark:text-sky-400" />,
    pathClass: "bubble-path-4",
    positionStyle: { left: "21%", top: "46%" },
    sizeClass: "w-[68px] h-[68px] sm:w-[105px] sm:h-[105px] md:w-[145px] md:h-[145px] lg:w-[185px] lg:h-[185px] xl:w-[210px] xl:h-[210px]",
    visibilityClass: "hidden md:block", // 768px+
  },

  // 5. GMB Optimization (Left Lower Flank — >= 1cm gap from Landing Pages)
  {
    id: "gmb-opt",
    title: "GMB Optimization",
    category: "Growth Signals",
    badge: "Popular",
    description:
      "Weekly posts, photo geotagging, Q&A seeding, and active review management to climb the local 3-pack.",
    features: [
      "Geotagged Photo Updates",
      "Weekly Product & Service Posts",
      "Review Automation & Replies",
      "Primary & Secondary Categories",
      "Google Maps Authority Growth",
    ],
    icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 text-amber-600 dark:text-gold-400" />,
    pathClass: "bubble-path-5",
    positionStyle: { left: "6%", bottom: "20%" },
    sizeClass: "w-[68px] h-[68px] sm:w-[105px] sm:h-[105px] md:w-[145px] md:h-[145px] lg:w-[185px] lg:h-[185px] xl:w-[210px] xl:h-[210px]",
    visibilityClass: "hidden xl:block", // 1280px+
  },

  // 6. Website Development (Bottom-Left Major Anchor — Mobile Tier 1)
  {
    id: "web-dev",
    title: "Website Development",
    category: "Full-Stack Web",
    badge: "Core Solution",
    description:
      "Modern, scalable web applications built with Next.js, TypeScript, and elegant responsive design systems.",
    features: [
      "Next.js App Router Architecture",
      "100/100 Core Web Vitals",
      "Semantic SEO Markup",
      "Custom CMS Integration",
      "Zero Template Lock-in",
    ],
    icon: <WebsiteDevCategoryIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9" />,
    pathClass: "bubble-path-4",
    positionStyle: { left: "2%", bottom: "4%" },
    sizeClass: "w-[76px] h-[76px] sm:w-[125px] sm:h-[125px] md:w-[175px] md:h-[175px] lg:w-[225px] lg:h-[225px] xl:w-[260px] xl:h-[260px]",
    visibilityClass: "block", // Mobile Corner 2
  },

  // =========================================================================
  // CLUSTER 2: CENTER-LOWER FIELD (Sub-CTA Corridor with >= 1cm clearance)
  // =========================================================================

  // 7. Custom Software (Lower Center-Left — >= 1cm gap from Web Dev)
  {
    id: "custom-software",
    title: "Custom Software",
    category: "Internal Systems",
    badge: "Scalable",
    description:
      "Bespoke software architecture, internal portals, client dashboards, and automated database workflows.",
    features: [
      "Custom Business Logic",
      "Role-Based Access Control",
      "Secure REST & GraphQL APIs",
      "PostgreSQL / MongoDB Backends",
      "High Concurrency Telemetry",
    ],
    icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-emerald-500 dark:text-emerald-400" />,
    pathClass: "bubble-path-5",
    positionStyle: { left: "24%", bottom: "4%" },
    sizeClass: "w-[72px] h-[72px] sm:w-[115px] sm:h-[115px] md:w-[155px] md:h-[155px] lg:w-[205px] lg:h-[205px] xl:w-[235px] xl:h-[235px]",
    visibilityClass: "hidden md:block", // 768px+
  },

  // 8. Business Websites (Bottom Center Anchor — >= 1cm gap from Custom Software)
  {
    id: "biz-web",
    title: "Business Websites",
    category: "Brand Authority",
    badge: "Credibility",
    description:
      "Professional multi-page websites that build instant corporate trust and communicate your business value clearly.",
    features: [
      "Multi-Page Architecture",
      "Lead Capture Funnels",
      "Fast CDN Asset Delivery",
      "Editorial Brand Polish",
      "SEO Structured Data",
    ],
    icon: <Monitor className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 text-indigo-600 dark:text-indigo-400" />,
    pathClass: "bubble-path-7",
    positionStyle: { left: "43%", bottom: "3%" },
    sizeClass: "w-[68px] h-[68px] sm:w-[105px] sm:h-[105px] md:w-[145px] md:h-[145px] lg:w-[185px] lg:h-[185px] xl:w-[210px] xl:h-[210px]",
    visibilityClass: "hidden xl:block", // 1280px+
  },

  // 9. Workflow Automation (Lower Center-Right — >= 1cm gap from Business Websites)
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    category: "Operations",
    badge: "Efficiency",
    description:
      "Seamless integrations between CRMs, email services, webhooks, and billing systems with zero downtime.",
    features: [
      "Webhook & Event Triggers",
      "CRM & ERP Synchronization",
      "Instant Team Alerts",
      "Automated Lead Enqueueing",
      "Failover Error Handling",
    ],
    icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-amber-500 dark:text-amber-400" />,
    pathClass: "bubble-path-1",
    positionStyle: { right: "24%", bottom: "4%" },
    sizeClass: "w-[72px] h-[72px] sm:w-[115px] sm:h-[115px] md:w-[155px] md:h-[155px] lg:w-[205px] lg:h-[205px] xl:w-[235px] xl:h-[235px]",
    visibilityClass: "hidden md:block", // 768px+
  },

  // =========================================================================
  // CLUSTER 3: RIGHT FLANK CONSTELLATION (>= 1 cm / 38px physical clearance)
  // =========================================================================

  // 10. E-Commerce Systems (Top-Right Major Anchor — Mobile Tier 1)
  {
    id: "ecommerce",
    title: "E-Commerce Systems",
    category: "Online Stores",
    badge: "High Revenue",
    description:
      "Turn visitors into buyers with speed-optimized store layouts, instant checkout, and payment gateways.",
    features: [
      "Razorpay & Stripe Integration",
      "Fast 1-Click Checkout Flow",
      "Real-Time Inventory Tracking",
      "Automated Order Notifications",
      "Abandoned Cart Recovery",
    ],
    icon: <EcommerceCategoryIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9" />,
    pathClass: "bubble-path-6",
    positionStyle: { right: "2%", top: "7%" },
    sizeClass: "w-[76px] h-[76px] sm:w-[125px] sm:h-[125px] md:w-[175px] md:h-[175px] lg:w-[225px] lg:h-[225px] xl:w-[260px] xl:h-[260px]",
    visibilityClass: "block", // Mobile Corner 3
  },

  // 11. Payment Gateways (Right Upper Inset — >= 1cm gap from E-Commerce)
  {
    id: "payments",
    title: "Payment Gateways",
    category: "Fintech & Billing",
    badge: "Secure",
    description:
      "Robust payment processing with Razorpay, Stripe, PayPal, UPI, and automated invoice reconciliation.",
    features: [
      "PCI-DSS Compliant Flows",
      "Razorpay, Stripe & UPI",
      "Automated Webhook Receipts",
      "Instant Refund Handling",
      "Fraud Detection Rules",
    ],
    icon: <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-emerald-600 dark:text-emerald-400" />,
    pathClass: "bubble-path-5",
    positionStyle: { right: "19%", top: "14%" },
    sizeClass: "w-[72px] h-[72px] sm:w-[115px] sm:h-[115px] md:w-[155px] md:h-[155px] lg:w-[205px] lg:h-[205px] xl:w-[235px] xl:h-[235px]",
    visibilityClass: "hidden lg:block", // 1024px+
  },

  // 12. SaaS Architecture (Mid-Right Outer — >= 1cm gap below E-Commerce)
  {
    id: "saas",
    title: "SaaS Architecture",
    category: "Cloud Platforms",
    badge: "Enterprise",
    description:
      "From MVP conception to high-throughput multi-tenant SaaS platforms with automated subscription billing.",
    features: [
      "Multi-Tenant Tenant Isolation",
      "Automated Billing & Invoicing",
      "Scalable Serverless Pipelines",
      "Granular Audit Logs",
      "Enterprise Grade Security",
    ],
    icon: <SoftwareDevCategoryIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9" />,
    pathClass: "bubble-path-7",
    positionStyle: { right: "3%", top: "40%" },
    sizeClass: "w-[76px] h-[76px] sm:w-[125px] sm:h-[125px] md:w-[175px] md:h-[175px] lg:w-[225px] lg:h-[225px] xl:w-[260px] xl:h-[260px]",
    visibilityClass: "hidden md:block", // 768px+
  },

  // 13. Online Store Engines (Right Mid Inset — >= 1cm gap from SaaS)
  {
    id: "online-store",
    title: "Online Store Engines",
    category: "Storefronts",
    badge: "Turnkey",
    description:
      "High-converting product catalog, customer accounts, and order fulfilment automation built for retail scale.",
    features: [
      "Custom Product Catalogs",
      "Filter & Search Architecture",
      "Customer Account Hub",
      "Instant Tax & Shipping Rules",
      "Discount & Coupon System",
    ],
    icon: <Store className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-amber-500" />,
    pathClass: "bubble-path-2",
    positionStyle: { right: "21%", top: "46%" },
    sizeClass: "w-[72px] h-[72px] sm:w-[115px] sm:h-[115px] md:w-[155px] md:h-[155px] lg:w-[205px] lg:h-[205px] xl:w-[235px] xl:h-[235px]",
    visibilityClass: "hidden sm:block", // 640px+
  },

  // 14. CRM Platforms (Right Lower Flank — >= 1cm gap from Online Store)
  {
    id: "crm",
    title: "CRM Platforms",
    category: "Sales Pipelines",
    badge: "Pipelines",
    description:
      "Custom CRM portals designed for managing inbound leads, customer relationships, and sales telemetry.",
    features: [
      "Automated Lead Ingestion",
      "Visual Deal Stages & Boards",
      "Client Communication History",
      "Sales Activity Reports",
      "Team Collaboration Access",
    ],
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-sky-600 dark:text-sky-400" />,
    pathClass: "bubble-path-8",
    positionStyle: { right: "6%", bottom: "20%" },
    sizeClass: "w-[72px] h-[72px] sm:w-[115px] sm:h-[115px] md:w-[155px] md:h-[155px] lg:w-[205px] lg:h-[205px] xl:w-[235px] xl:h-[235px]",
    visibilityClass: "hidden lg:block", // 1024px+
  },

  // 15. ERP Systems (Right Lower Inset — >= 1cm gap from CRM)
  {
    id: "erp",
    title: "ERP Systems",
    category: "Operations",
    badge: "Workflows",
    description:
      "Centralized ERP platforms connecting project management, inventory, finance, and company operations.",
    features: [
      "Resource & Project Planning",
      "Departmental Permissions",
      "Real-Time Analytics Dashboards",
      "Automated PDF Invoicing",
      "Data Export & Backup APIs",
    ],
    icon: <Database className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 text-purple-600 dark:text-purple-400" />,
    pathClass: "bubble-path-3",
    positionStyle: { right: "20%", bottom: "6%" },
    sizeClass: "w-[68px] h-[68px] sm:w-[105px] sm:h-[105px] md:w-[145px] md:h-[145px] lg:w-[185px] lg:h-[185px] xl:w-[210px] xl:h-[210px]",
    visibilityClass: "hidden xl:block", // 1280px+
  },

  // 16. AI & Automations (Bottom-Right Major Anchor — Mobile Tier 1)
  {
    id: "ai-automation",
    title: "AI & Automations",
    category: "Intelligent Systems",
    badge: "Next-Gen",
    description:
      "Automate manual business tasks with custom AI agents, automated customer intake, and smart data pipelines.",
    features: [
      "Autonomous AI Agents",
      "Automated Customer Intake",
      "Intelligent Document Parsing",
      "Continuous Background Jobs",
      "Cross-Platform Automations",
    ],
    icon: <AiAutomationCategoryIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-9 lg:h-9" />,
    pathClass: "bubble-path-8",
    positionStyle: { right: "2%", bottom: "4%" },
    sizeClass: "w-[80px] h-[80px] sm:w-[130px] sm:h-[130px] md:w-[185px] md:h-[185px] lg:w-[235px] lg:h-[235px] xl:w-[270px] xl:h-[270px]",
    visibilityClass: "block", // Mobile Corner 4
  },
];

interface HeroBubbleFieldProps {
  onSelectService: (service: ServiceBubbleData) => void;
}

export function HeroBubbleField({ onSelectService }: HeroBubbleFieldProps) {
  return (
    <div
      className="absolute inset-0 mx-auto w-full max-w-[2200px] px-2 sm:px-4 lg:px-8 pt-12 sm:pt-16 md:pt-20 pb-4 overflow-hidden pointer-events-none z-10"
      aria-hidden="true"
    >
      {BUBBLE_ECOSYSTEM.map((bubble) => (
        <div
          key={bubble.id}
          className={cn(
            "absolute transition-opacity duration-300 aspect-square shrink-0 rounded-full flex items-center justify-center overflow-hidden",
            bubble.visibilityClass,
            bubble.sizeClass
          )}
          style={{
            ...bubble.positionStyle,
            aspectRatio: "1 / 1",
            borderRadius: "50%",
          }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelectService(bubble);
            }}
            className={cn(
              "w-full h-full aspect-square shrink-0 rounded-full overflow-hidden group pointer-events-auto service-bubble p-1.5 sm:p-2.5 md:p-3 text-center flex flex-col items-center justify-center select-none",
              bubble.pathClass
            )}
            style={{
              aspectRatio: "1 / 1",
              borderRadius: "50%",
            }}
            aria-label={`Explore ${bubble.title} service`}
            title={`Click to explore ${bubble.title}`}
          >
            {/* Suspended Icon inside glass with subtle depth */}
            <div className="relative z-10 flex items-center justify-center shrink-0 transition-transform duration-300 ease-out group-hover:scale-110 drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_6px_12px_rgba(0,0,0,0.7)]">
              {bubble.icon}
            </div>

            {/* Direct Service Title inside the Bubble (Constrained width so it never breaks 1:1 circle geometry) */}
            <span className="relative z-10 mt-1 max-w-[80%] px-1 text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-extrabold tracking-tight text-neutral-950 dark:text-white truncate dark:drop-shadow-md select-none block text-center leading-tight">
              {bubble.title}
            </span>

            {/* Micro Badge inside Bubble (Constrained width) */}
            {bubble.badge && (
              <span className="relative z-10 mt-0.5 hidden sm:inline-flex max-w-[75%] truncate items-center px-1.5 py-0.5 rounded-full text-[7.5px] sm:text-[8.5px] md:text-[9.5px] font-bold bg-amber-100 dark:bg-amber-500/20 text-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30 select-none shadow-sm">
                {bubble.badge}
              </span>
            )}

            {/* Hover Floating Action Cue (Visible on pointer devices) */}
            <span className="pointer-events-none absolute -bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-bottom-4 transition-all duration-200 whitespace-nowrap px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide liquid-glass-capsule text-neutral-950 dark:text-neutral-100 border border-neutral-300/90 dark:border-white/20 shadow-lg bg-white/95 dark:bg-neutral-900/90">
              Explore ↗
            </span>
          </button>
        </div>
      ))}
    </div>
  );
}
