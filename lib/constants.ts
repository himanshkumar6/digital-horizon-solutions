export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string[];
  businessImpact: string;
  iconName: string;
  imageSrc?: string;
  imageDarkSrc?: string;
  imageLightSrc?: string;
}

export interface ServiceEcosystemItem {
  title: string;
  description: string;
  badge?: string;
  iconName?: string;
}

export interface ServiceEcosystemCategory {
  title: string;
  id: string;
  iconName: string;
  headerTag: string;
  items: ServiceEcosystemItem[];
  spotlight: {
    badge: string;
    title: string;
    description: string;
    ctaText: string;
  };
}

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  targetAudience: string;
  servicesIncluded: string[];
  href: string;
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel: string;
  isPlaceholder: boolean;
}

export interface ApproachStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverable: string;
}

export interface CaseStudyItem {
  id: string;
  category: string;
  title: string;
  client: string;
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  technologies: string[];
  impactPlaceholder: string;
  isPlaceholder: boolean;
}

export interface WhyUsPrinciple {
  number: string;
  title: string;
  summary: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  businessType: string;
  location: string;
  initials: string;
  isPlaceholder: boolean;
}

/* =====================================================================
   CORE NAVIGATION
   ===================================================================== */
export const NAV_LINKS = [
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "/contact" },
];

/* =====================================================================
   SERVICE ECOSYSTEM (5 Core Pillars & Sub-Services for Navigation)
   ===================================================================== */
export const SERVICE_ECOSYSTEM: ServiceEcosystemCategory[] = [
  {
    title: "Google Business Profile",
    id: "gmb",
    iconName: "MapPin",
    headerTag: "LOCAL VISIBILITY & MAP DOMINANCE",
    items: [
      {
        title: "GMB Creation & Setup",
        description: "Complete profile setup with accurate business information, categories, services, and verification guidance.",
        badge: "Essential",
        iconName: "MapPin",
      },
      {
        title: "GMB Optimization",
        description: "Optimize your profile, categories, services, and local presence to improve search visibility.",
        badge: "Popular",
        iconName: "Sparkles",
      },
      {
        title: "GMB Audit",
        description: "A detailed profile health check covering accuracy, completeness, visibility, and local SEO opportunities.",
        badge: "Free",
        iconName: "CheckCircle2",
      },
      {
        title: "GMB Management",
        description: "Ongoing profile management with posts, photos, updates, and review-focused improvements.",
        iconName: "Calendar",
      },
      {
        title: "Local SEO",
        description: "Improve your local search presence so nearby customers can discover your business more easily.",
        badge: "High ROI",
        iconName: "TrendingUp",
      },
    ],
    spotlight: {
      badge: "LOCAL DISCOVERY HUB",
      title: "Rank in the Google 3-Pack & capture nearby buyers.",
      description: "90% of local customers choose from the top 3 Google Maps results. Get found first.",
      ctaText: "Get Free GMB Audit",
    },
  },
  {
    title: "Website Development",
    id: "web-dev",
    iconName: "Monitor",
    headerTag: "HIGH-PERFORMANCE BUSINESS WEBSITES",
    items: [
      {
        title: "Landing Pages",
        description: "Focused single-page websites designed to turn visitors into enquiries, leads, or customers.",
        badge: "High Convert",
        iconName: "Layout",
      },
      {
        title: "Business Websites",
        description: "Professional multi-page websites that build credibility and give your business a strong online presence.",
        badge: "Popular",
        iconName: "Monitor",
      },
      {
        title: "Corporate Websites",
        description: "Scalable websites designed to communicate your brand, services, expertise, and business value.",
        iconName: "Building2",
      },
      {
        title: "Real Estate Websites",
        description: "Property-focused websites with listings, search, location information, enquiries, and lead-generation features.",
        iconName: "Home",
      },
      {
        title: "Custom Websites",
        description: "Purpose-built websites designed around your business requirements, workflows, and customer experience.",
        badge: "Bespoke",
        iconName: "Code2",
      },
    ],
    spotlight: {
      badge: "WEB EXCELLENCE",
      title: "Modern, lightning-fast sites built to convert.",
      description: "Engineered for sub-second load times, instant trust, and clean visitor conversion.",
      ctaText: "Get Free Website Audit",
    },
  },
  {
    title: "E-Commerce",
    id: "ecommerce",
    iconName: "ShoppingCart",
    headerTag: "DIGITAL COMMERCE & STORE ENGINES",
    items: [
      {
        title: "E-Commerce Websites",
        description: "Complete online stores built to showcase products, accept orders, and grow your online business.",
        badge: "Turnkey",
        iconName: "ShoppingCart",
      },
      {
        title: "Online Store Development",
        description: "Scalable storefronts with product catalogs, search, customer accounts, cart, checkout, and order management.",
        badge: "Popular",
        iconName: "Store",
      },
      {
        title: "Payment Integration",
        description: "Secure payment integration with suitable gateways for smooth and reliable online checkout.",
        iconName: "CreditCard",
      },
      {
        title: "Product & Order Systems",
        description: "Connected product and order workflows for managing inventory, orders, customers, and fulfilment.",
        iconName: "Package",
      },
    ],
    spotlight: {
      badge: "COMMERCE HUB",
      title: "Turn traffic into transactions with frictionless commerce.",
      description: "High-speed checkout flows, unified inventory, and automated customer order notifications.",
      ctaText: "Get Free Store Audit",
    },
  },
  {
    title: "Software Development",
    id: "software",
    iconName: "Code2",
    headerTag: "CUSTOM BUSINESS SYSTEMS & PLATFORMS",
    items: [
      {
        title: "SaaS Development",
        description: "Scalable web applications built around subscriptions, users, roles, dashboards, and business workflows.",
        badge: "Full-Stack",
        iconName: "Cloud",
      },
      {
        title: "CRM Development",
        description: "Custom CRM systems for managing leads, customers, sales pipelines, communication, and follow-ups.",
        badge: "Popular",
        iconName: "Users",
      },
      {
        title: "ERP Development",
        description: "Connected business systems for managing operations, resources, projects, finance, and internal workflows.",
        iconName: "Database",
      },
      {
        title: "Custom Software",
        description: "Purpose-built software designed to solve your specific business processes and replace manual work.",
        badge: "Custom",
        iconName: "Code2",
      },
    ],
    spotlight: {
      badge: "SOFTWARE ARCHITECTURE",
      title: "Software tailored to your exact operational workflow.",
      description: "Stop paying monthly per-user SaaS license fees for tools that don't fit your business.",
      ctaText: "Discuss Custom Software",
    },
  },
  {
    title: "AI & Automation",
    id: "automation",
    iconName: "Sparkles",
    headerTag: "INTELLIGENT WORKFLOWS & AUTONOMOUS AGENTS",
    items: [
      {
        title: "AI Automation",
        description: "AI-powered workflows that reduce repetitive tasks and help your team work more efficiently.",
        badge: "New",
        iconName: "Sparkles",
      },
      {
        title: "Business Automation",
        description: "Connect your business tools and automate repetitive processes, data movement, notifications, and follow-ups.",
        badge: "Popular",
        iconName: "Zap",
      },
      {
        title: "Workflow Automation",
        description: "Automated workflows that connect apps, trigger actions, move information, and keep processes running smoothly.",
        iconName: "GitMerge",
      },
      {
        title: "Custom AI Solutions",
        description: "AI-powered tools tailored to your business data, processes, and specific operational requirements.",
        badge: "Bespoke",
        iconName: "Bot",
      },
    ],
    spotlight: {
      badge: "AGENTIC AI HUB",
      title: "Put repetitive workflows on 24/7 autonomous autopilot.",
      description: "Connect your emails, WhatsApp, CRM, and databases into an intelligent automated system.",
      ctaText: "Explore AI Automation",
    },
  },
];

/* =====================================================================
   SECTION 03 — SERVICES
   ===================================================================== */
export const SERVICES: ServiceItem[] = [
  {
    id: "gmb",
    number: "01",
    title: "Google Business Profile",
    subtitle: "Local Discovery & Maps Dominance",
    tagline: "Audit • Setup • Optimization • Local SEO",
    description:
      "Transform your local map presence so nearby customers find you first. Complete setup, verification support, geo-targeted optimization, and continuous profile management.",
    features: [
      "GMB Creation & Verification Guidance",
      "Comprehensive 30-Point Local Audit",
      "Local SEO & Maps 3-Pack Optimization",
      "Category, Service & Attribute Tuning",
      "Review Generation & Reputation Strategy",
      "Monthly Profile Management & Geo-Posts",
    ],
    deliverables: [
      "Verified Google Business Listing",
      "High-Resolution Geo-tagged Visuals",
      "Complete Local Citation Alignment",
      "Monthly Local Search Performance Report",
    ],
    businessImpact:
      "Direct phone calls, map direction requests, and walk-in foot traffic from high-intent local buyers.",
    iconName: "MapPin",
    imageSrc: "/services/service-01-gmb.jpg",
    imageDarkSrc: "/services/service-01-gmb.jpg",
    imageLightSrc: "/services/service-01-gmb-light.jpg",
  },
  {
    id: "web-dev",
    number: "02",
    title: "Website Development",
    subtitle: "High-Performance Business Websites",
    tagline: "Landing Pages • Business Websites • Custom Websites",
    description:
      "Modern, responsive web experiences engineered for credibility and conversion. Fast-loading, accessible, and structured specifically for your business model.",
    features: [
      "High-Conversion Custom Landing Pages",
      "Multi-Page Responsive Business Websites",
      "Real Estate & Directory Portals",
      "Custom Next.js & React Web Applications",
      "Sub-Second Speed & Core Web Vitals",
      "Technical SEO & OpenGraph Architecture",
    ],
    deliverables: [
      "Mobile-First Responsive Layout",
      "Sub-Second Page Load Speeds",
      "Technical SEO & OpenGraph Setup",
      "Modern Content Architecture",
    ],
    businessImpact:
      "Instant commercial trust, lower bounce rates, and inbound inquiries from qualified prospects.",
    iconName: "Globe",
    imageSrc: "/services/service-02-web.jpg",
    imageDarkSrc: "/services/service-02-web.jpg",
    imageLightSrc: "/services/service-02-web-light.jpg",
  },
  {
    id: "ecommerce",
    number: "03",
    title: "E-Commerce Development",
    subtitle: "Scalable Direct-To-Consumer Stores",
    tagline: "Online Stores • Payments • Product Systems",
    description:
      "End-to-end digital commerce engines with frictionless checkout, inventory tracking, secure multi-currency payment gateways, and order management.",
    features: [
      "Turnkey Digital Storefronts & Catalogs",
      "Product Variants & Inventory Architecture",
      "Razorpay, Stripe & Multi-Gateway Integration",
      "Frictionless Cart & Fast Checkout Flow",
      "Customer Account & Order Tracking Portals",
      "Automated Order Notifications & Sync",
    ],
    deliverables: [
      "Turnkey Digital Storefront",
      "Customer Account & Order Dashboard",
      "Automated Order Confirmation & Emails",
      "Mobile Checkout Flow Optimization",
    ],
    businessImpact:
      "Higher average order value, reduced cart abandonment, and automated order fulfillment.",
    iconName: "ShoppingBag",
    imageSrc: "/services/service-03-ecommerce.jpg",
    imageDarkSrc: "/services/service-03-ecommerce.jpg",
    imageLightSrc: "/services/service-03-ecommerce-light.jpg",
  },
  {
    id: "software",
    number: "04",
    title: "Software Development",
    subtitle: "Custom Business Systems & Platforms",
    tagline: "SaaS • CRM • ERP • Custom Systems",
    description:
      "Purpose-built software that replaces clunky spreadsheets and fragmented tools with a single unified, secure platform built around your operational workflows.",
    features: [
      "Custom SaaS Application Architecture",
      "Tailored CRM & Lead Pipeline Platforms",
      "ERP & Operational Resource Modules",
      "Executive Dashboards & Internal Tooling",
      "Role-Based Access Control & User Auth",
      "REST / Webhook API & Database Integration",
    ],
    deliverables: [
      "Clean Production Software Codebase",
      "Scalable Relational Database Schemas",
      "API Integration & Webhook Endpoints",
      "Deployment Pipeline & Technical Documentation",
    ],
    businessImpact:
      "Elimination of duplicate manual work, zero software licensing waste, and scalable operational control.",
    iconName: "Terminal",
    imageSrc: "/services/service-04-software.jpg",
    imageDarkSrc: "/services/service-04-software.jpg",
    imageLightSrc: "/services/service-04-software-light.jpg",
  },
  {
    id: "automation",
    number: "05",
    title: "AI & Automation",
    subtitle: "Intelligent Workflows & Tools",
    tagline: "AI Workflows • Business Automation • Intelligent Tools",
    description:
      "Practical artificial intelligence and automated pipelines connecting your emails, CRM, spreadsheets, and customer communications into an autonomous machine.",
    features: [
      "End-to-End Business Workflow Automation",
      "Custom AI Knowledge Assistants & Responders",
      "Multi-App Integrations (CRM, Sheets, WhatsApp)",
      "Automated Document Extraction & Data Pipelines",
      "Lead Routing & Webhook Event Triggers",
      "24/7 Autonomous Process Monitoring",
    ],
    deliverables: [
      "Autonomous 24/7 Automated Workflows",
      "Custom Trained Knowledge Base / Responders",
      "Error-Handling & Notification Triggers",
      "Workflow Monitoring & Run History",
    ],
    businessImpact:
      "Dozens of manual hours saved weekly, instant customer response times, and zero dropped leads.",
    iconName: "Sparkles",
    imageSrc: "/services/service-05-automation.jpg",
    imageDarkSrc: "/services/service-05-automation.jpg",
    imageLightSrc: "/services/service-05-automation-light.jpg",
  },
];

/* =====================================================================
   SOLUTIONS (Outcome-based groupings)
   ===================================================================== */
export const SOLUTIONS: SolutionItem[] = [
  {
    id: "grow-local",
    title: "Grow Your Local Business",
    description:
      "Dominate local search, get found on Google Maps, and convert nearby searchers into loyal customers.",
    targetAudience: "Clinics, Showrooms, Restaurants, Local Service Providers",
    servicesIncluded: ["Google Business Profile", "Local SEO", "High-Converting Landing Page"],
    href: "#services",
  },
  {
    id: "online-presence",
    title: "Build Your Online Presence",
    description:
      "Replace an outdated website with an authoritative, fast, editorial digital flagship that builds trust.",
    targetAudience: "Established Companies, Professional Firms, Consultancies",
    servicesIncluded: ["Custom Business Website", "Technical SEO", "Brand Digital Strategy"],
    href: "#services",
  },
  {
    id: "sell-online",
    title: "Sell Online",
    description:
      "Launch or migrate to a modern e-commerce storefront with high conversion and automated payment collection.",
    targetAudience: "D2C Brands, Retailers, Product Manufacturers",
    servicesIncluded: ["E-Commerce Store", "Payment Gateway", "Order & Inventory Systems"],
    href: "#services",
  },
  {
    id: "custom-software",
    title: "Build Custom Software",
    description:
      "Design and deploy bespoke software that matches your exact operational processes without monthly seat fees.",
    targetAudience: "Fast-Growing Businesses, Logistics, Service Teams",
    servicesIncluded: ["Custom CRM/ERP", "Internal Web Tools", "SaaS Architecture"],
    href: "#services",
  },
  {
    id: "automate-business",
    title: "Automate Your Business",
    description:
      "Connect your fragmented tools and let practical AI workflows handle lead qualification and repetitive tasks.",
    targetAudience: "Modern Founders, Real Estate Agencies, Operations Leads",
    servicesIncluded: ["AI Automation", "Workflow Pipelines", "Integration Tools"],
    href: "#services",
  },
];

/* =====================================================================
   SECTION 02 — TRUST / METRICS (Placeholder/Demo values per instructions)
   ===================================================================== */
export const METRICS: MetricItem[] = [
  {
    value: "3+",
    label: "Projects Delivered",
    sublabel: "Websites, software & automations",
    isPlaceholder: false,
  },
  {
    value: "3+",
    label: "Active Clients",
    sublabel: "Local businesses to digital-first brands",
    isPlaceholder: false,
  },
  {
    value: "05",
    label: "Core Verticals",
    sublabel: "From local SEO to custom AI",
    isPlaceholder: false,
  },
  {
    value: "1.5+",
    label: "Years Experience",
    sublabel: "Digital design & software engineering",
    isPlaceholder: false,
  },
];

/* =====================================================================
   SECTION 04 — APPROACH
   ===================================================================== */
export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: "01",
    title: "Understand",
    tagline: "Uncover commercial bottlenecks and exact goals.",
    description:
      "We begin by understanding how your business actually makes money, who your buyers are, and where current friction exists. No generic assumptions.",
    deliverable: "Strategic Discovery Brief & Technical Audit",
  },
  {
    step: "02",
    title: "Strategize",
    tagline: "Define the right digital architecture.",
    description:
      "We map the most effective path forward—whether that requires local visibility, a bespoke corporate site, or an internal workflow automation engine.",
    deliverable: "Architecture Blueprint, Wireframes & Scope",
  },
  {
    step: "03",
    title: "Design & Build",
    tagline: "Create the experience and technology.",
    description:
      "We design clean, editorial interfaces and write robust, production-quality code. Every component is optimized for performance, accessibility, and speed.",
    deliverable: "Production-Ready Digital Solution & System Integration",
  },
  {
    step: "04",
    title: "Launch & Improve",
    tagline: "Launch, measure and continuously improve.",
    description:
      "We deploy to modern edge infrastructure, test every user journey, and provide ongoing refinement to ensure real business outcomes.",
    deliverable: "Live Deployment, Analytics Setup & Handover Training",
  },
];

/* =====================================================================
   SECTION 05 — FEATURED WORK (Placeholder/Demo projects per instructions)
   ===================================================================== */
export const FEATURED_WORK: CaseStudyItem[] = [
  {
    id: "sol-resort",
    category: "Hospitality Website",
    title: "The Horizon Retreat — Luxury Boutique Resort",
    client: "Horizon Hospitality Group",
    description:
      "A cinematic, high-performance web experience with direct booking engine integration, immersive visual storytelling, and 45% lower bounce rates.",
    overview:
      "A premier boutique resort needed to escape commission-heavy travel aggregator platforms and establish an authoritative direct booking channel.",
    challenge:
      "Previous website was slow, failed on mobile viewports, and lacked seamless multi-currency payment integration.",
    solution:
      "Engineered an editorial, mobile-first website utilizing Next.js with sub-second image loading, automated reservation inquiries, and a curated amenities showcase.",
    deliverables: [
      "Custom 6-Page Brand Website",
      "Direct Reservation Engine Integration",
      "Local Map SEO & GMB Optimization",
      "Automated Guest Email Inquiries",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Stripe API", "Google Maps Platform"],
    impactPlaceholder: "DEMO IMPACT: +38% Direct Bookings • < 0.8s Mobile LCP",
    isPlaceholder: true,
  },
  {
    id: "apex-realty",
    category: "Real Estate Website",
    title: "Apex Urban Properties — Commercial & Residential",
    client: "Apex Realty Partners",
    description:
      "Modern property discovery platform with interactive neighborhood filtering, lead capture workflows, and automated agent distribution.",
    overview:
      "A growing real estate consultancy needed an authoritative digital showroom for high-value properties that could handle heavy image assets without lag.",
    challenge:
      "Visitors were abandoning listings because high-resolution property photos caused sluggish load times and complex inquiry forms.",
    solution:
      "Built a modern property catalog with instant facet search, WhatsApp lead triggers, and automated lead routing directly to assigned sales agents.",
    deliverables: [
      "Dynamic Property Showcase System",
      "Interactive Filter & Map Integration",
      "Automated Lead Capture & CRM Routing",
      "GMB Profile Restructuring for Local Keywords",
    ],
    technologies: ["React", "TypeScript", "PostgreSQL", "WhatsApp Cloud API"],
    impactPlaceholder: "DEMO IMPACT: 3.2x Lead Conversion • 65% Mobile Inquiries",
    isPlaceholder: true,
  },
  {
    id: "nordic-goods",
    category: "E-Commerce Website",
    title: "Nordic Living Essentials — Modern Home Store",
    client: "Nordic Consumer Goods",
    description:
      "High-speed digital storefront with seamless 2-step checkout, real-time inventory tracking, and integrated automated shipping notifications.",
    overview:
      "A lifestyle brand transitioning from retail distribution to direct-to-consumer online sales required a store that felt both premium and fast.",
    challenge:
      "Generic template stores suffered from checkout cart drops, clunky mobile navigation, and disconnected stock counts.",
    solution:
      "Crafted a bespoke e-commerce experience with instantaneous page transitions, one-click digital wallets, and automated inventory sync with warehouses.",
    deliverables: [
      "Custom Headless E-Commerce Storefront",
      "Secure Multi-Payment Gateway (UPI, Cards, EMI)",
      "Automated WhatsApp & Email Order Updates",
      "Complete Analytics & Purchase Event Tracking",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Razorpay", "Node.js Automation"],
    impactPlaceholder: "DEMO IMPACT: +24% Checkout Completion • 99.9% Uptime",
    isPlaceholder: true,
  },
];

/* =====================================================================
   SECTION 06 — WHY DIGITAL HORIZON
   ===================================================================== */
export const WHY_US_PRINCIPLES: WhyUsPrinciple[] = [
  {
    number: "01",
    title: "Business First",
    summary: "Technology should solve a real business problem.",
    description:
      "We don't build software or websites for the sake of trends. Every line of code and visual decision is tied to an actual commercial objective: getting leads, saving operational hours, or expanding revenue.",
  },
  {
    number: "02",
    title: "Built Around You",
    summary: "No unnecessary complexity.",
    description:
      "We avoid bloated template builders and rigid one-size-fits-all platforms. We engineer lean, purpose-built digital assets shaped around your exact day-to-day workflow.",
  },
  {
    number: "03",
    title: "Modern & Scalable",
    summary: "Build today with tomorrow in mind.",
    description:
      "Using modern web foundations and resilient architectures, what we create today will scale smoothly as your team grows, transaction volumes surge, or new services launch.",
  },
  {
    number: "04",
    title: "Long-Term Partner",
    summary: "Support beyond launch.",
    description:
      "A digital platform is an evolving asset. We don't disappear after deployment; we monitor performance, suggest continuous optimizations, and act as your ongoing digital technology partner.",
  },
];

/* =====================================================================
   SECTION 07 — TESTIMONIALS (Clearly labeled placeholders per prompt)
   ===================================================================== */
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-01",
    quote:
      "Digital Horizon Solutions helped us structure our online presence so customers actually understand what we do. Our inbound inquiries have become significantly more qualified.",
    clientName: "Client Name Placeholder",
    role: "Managing Director",
    businessType: "Industrial Manufacturing SME",
    location: "Regional Business",
    initials: "MP",
    isPlaceholder: true,
  },
  {
    id: "test-02",
    quote:
      "From setting up our local map visibility to delivering our business website, the process was transparent and direct. No technical jargon, just results.",
    clientName: "Client Name Placeholder",
    role: "Founder & Head of Operations",
    businessType: "Commercial Real Estate Firm",
    location: "Metro Region",
    initials: "AK",
    isPlaceholder: true,
  },
  {
    id: "test-03",
    quote:
      "The custom automation they built between our customer inquiries and our team dashboard saved us hours of manual back-and-forth every single week.",
    clientName: "Client Name Placeholder",
    role: "Co-Founder",
    businessType: "Modern Retail & D2C Brand",
    location: "Digital-First Startup",
    initials: "SR",
    isPlaceholder: true,
  },
];

/* =====================================================================
   BRAND CONSTANTS
   ===================================================================== */
export const BRAND_INFO = {
  name: "Digital Horizon Solutions",
  tagline: "Your Business Beyond Today",
  eyebrow: "STRATEGY • DESIGN • TECHNOLOGY • GROWTH",
  heroDescription:
    "We help businesses build a stronger digital presence through websites, local visibility, e-commerce, software and automation.",
  contactEmail: "contact@digitalhorizonsolutions.in",
  contactPhone: "+91 85956 98811",
  address: "221, Gali Number 2, Ghaziabad, Uttar Pradesh, India",
  hours: "Monday – Saturday, 10:00 AM – 10:00 PM (Sunday Closed)",
};
