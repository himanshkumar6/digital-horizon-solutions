"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { useQuote } from "@/components/cta/QuoteContext";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { SERVICE_ECOSYSTEM } from "@/lib/constants";
import {
  renderCategoryIcon,
  renderSubServiceIcon,
} from "@/components/navigation/ServiceIcons";
import { MobileBottomDock } from "@/components/navigation/MobileBottomDock";
import { MobileServicesPanel } from "@/components/navigation/MobileServicesPanel";
import { MobileMorePanel } from "@/components/navigation/MobileMorePanel";
import { LiquidGlassButton } from "@/components/ui/LiquidGlassButton";
import { ChevronDown, ChevronRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { openQuote } = useQuote();
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [activeDropdown, setActiveDropdown] = useState<"services" | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("gmb");
  const [servicesPanelOpen, setServicesPanelOpen] = useState(false);
  const [morePanelOpen, setMorePanelOpen] = useState(false);

  const activeCategoryData =
    SERVICE_ECOSYSTEM.find((c) => c.id === selectedCategory) ||
    SERVICE_ECOSYSTEM[0];

  const dropdownRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Dynamically measure navbar height and publish to CSS variable for pixel-perfect safe clearances
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty("--navbar-height", `${height}px`);
      }
    };
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight, { passive: true });
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  // Monitor scroll for section highlighting and navbar elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Only perform section scroll spy if on the homepage
      if (pathname !== "/") return;

      const sections = [
        { id: "pricing", offset: 300 },
        { id: "process", offset: 300 },
        { id: "services", offset: 300 },
      ];

      const scrollPos = window.scrollY + 250;
      let currentSection = "home";

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el && scrollPos >= el.offsetTop) {
          currentSection = sec.id;
          break;
        }
      }

      if (window.scrollY < 200) {
        currentSection = "home";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation: ESC closes desktop dropdown
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeDropdown !== null) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeDropdown]);

  const closeAll = () => {
    setActiveDropdown(null);
  };

  const handleNavigateSection = (sectionId: string) => {
    if (sectionId === "contact") {
      router.push("/contact");
      return;
    }
    if (pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        const lenis = (
          window as unknown as {
            __lenis?: {
              scrollTo: (
                target: HTMLElement,
                options?: { offset?: number; duration?: number; easing?: (t: number) => number }
              ) => void;
            };
          }
        ).__lenis;

        const navH =
          parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue(
              "--navbar-height"
            )
          ) || 72;

        if (lenis) {
          lenis.scrollTo(el, {
            offset: -(navH + 24), // Dynamic safe offset avoiding header collision
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <>
      {/* Top Floating Capsule Bar (Desktop: Full Nav; Mobile: Logo + ThemeToggle) */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-40 px-1.5 sm:px-3 lg:px-6 pt-[max(0.35rem,env(safe-area-inset-top,0px))] sm:pt-2 transition-all duration-300 pointer-events-none"
      >
        <div
          ref={dropdownRef}
          className={cn(
            "pointer-events-auto mx-auto w-full max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1440px] rounded-full transition-all duration-300 relative py-1 px-2 sm:px-3 lg:px-4",
            isScrolled || activeDropdown !== null || pathname === "/contact"
              ? "liquid-glass-capsule shadow-2xl"
              : "bg-transparent border border-transparent shadow-none"
          )}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Left: Brand Logo SVG (With responsive constraint) */}
            <div className="shrink-0 flex items-center">
              <Logo size="md" />
            </div>

            {/* Center: Desktop Nav links with liquid-glass active pill (>= 1024px) */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-sm font-medium tracking-normal"
              aria-label="Main Navigation"
            >
              {/* Home link with liquid glass active pill highlight */}
              <Link
                href="/"
                onClick={() => {
                  if (pathname === "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setActiveSection("home");
                  }
                  closeAll();
                }}
                onMouseEnter={() => setActiveDropdown(null)}
                className={cn(
                  "h-9 px-4 inline-flex items-center justify-center rounded-full text-xs xl:text-sm select-none transition-all duration-200",
                  pathname === "/" && activeSection === "home"
                    ? "liquid-glass-active font-bold"
                    : "liquid-glass-item"
                )}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="static">
                <button
                  type="button"
                  onClick={() => {
                    if (activeDropdown !== "services") {
                      setActiveDropdown("services");
                    } else {
                      handleNavigateSection("services");
                      closeAll();
                    }
                  }}
                  onMouseEnter={() => setActiveDropdown("services")}
                  className={cn(
                    "h-9 px-4 inline-flex items-center justify-center gap-1.5 rounded-full text-xs xl:text-sm select-none cursor-pointer transition-all duration-200",
                    activeSection === "services" || activeDropdown === "services"
                      ? "liquid-glass-active font-bold"
                      : "liquid-glass-item"
                  )}
                  aria-expanded={activeDropdown === "services"}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200 opacity-80",
                      activeDropdown === "services" && "rotate-180 text-amber-400 opacity-100"
                    )}
                  />
                </button>

                {/* Services Mega-Panel: Full-Navbar Width Liquid Glass Panel */}
                {activeDropdown === "services" && (
                  <div
                    onMouseEnter={() => setActiveDropdown("services")}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute inset-x-0 top-full mt-3 w-full rounded-3xl liquid-glass-panel bg-white dark:bg-[#0d0f15] p-6 xl:p-8 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-[''] flex gap-8 items-stretch"
                  >
                    {/* ZONE 1: Left Categories Sidebar */}
                    <div className="w-64 xl:w-72 shrink-0 flex flex-col justify-between">
                      <div className="space-y-1">
                        {SERVICE_ECOSYSTEM.map((cat) => (
                          <button
                            key={cat.id}
                            type="button"
                            onMouseEnter={() => setSelectedCategory(cat.id)}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={cn(
                              "w-full flex items-center justify-between gap-3 px-3.5 py-3 rounded-xl text-xs font-semibold transition-all text-left group select-none cursor-pointer",
                              selectedCategory === cat.id
                                ? "bg-amber-500/15 dark:bg-amber-400/15 text-amber-700 dark:text-amber-200 border border-amber-500/30 dark:border-amber-400/25 shadow-sm font-bold"
                                : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/70 dark:hover:bg-white/[0.04]"
                            )}
                          >
                            <div className="flex items-center gap-3 truncate">
                              <span className="shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                                {renderCategoryIcon(cat.id, "h-7 w-7")}
                              </span>
                              <span className="truncate">{cat.title}</span>
                            </div>
                            <ChevronRight
                              className={cn(
                                "h-3.5 w-3.5 transition-transform shrink-0",
                                selectedCategory === cat.id
                                  ? "text-amber-600 dark:text-amber-400 translate-x-0.5 opacity-100"
                                  : "opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 text-neutral-400"
                              )}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* ZONE 2: Right Sub-Services Grid */}
                    <div className="flex-1 min-w-0 pl-8 border-l border-neutral-200/80 dark:border-white/10 flex flex-col justify-between">
                      <div>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                          {activeCategoryData.items.map((item) => (
                            <Link
                              key={item.title}
                              href={`/#${activeCategoryData.id}`}
                              onClick={() => {
                                handleNavigateSection(activeCategoryData.id);
                                closeAll();
                              }}
                              className="group/item flex items-start gap-4 rounded-xl p-3 -m-1 transition-all hover:bg-neutral-100/80 dark:hover:bg-white/[0.05]"
                            >
                              <div className="mt-0.5 shrink-0 flex items-center justify-center transition-transform duration-200 group-hover/item:scale-110">
                                {renderSubServiceIcon(item.title, item.iconName, "h-11 w-11")}
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-xs font-bold text-neutral-900 dark:text-white group-hover/item:text-amber-600 dark:group-hover/item:text-amber-300 transition-colors">
                                    {item.title}
                                  </span>
                                  {item.badge && (
                                    <span className="px-1.5 py-0.5 text-[9px] font-semibold rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] leading-relaxed text-neutral-500 dark:text-neutral-400 mt-1 line-clamp-2 xl:line-clamp-none">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Process */}
              <Link
                href="/#process"
                onClick={() => {
                  handleNavigateSection("process");
                  closeAll();
                }}
                onMouseEnter={() => setActiveDropdown(null)}
                className={cn(
                  "h-9 px-4 inline-flex items-center justify-center rounded-full text-xs xl:text-sm select-none transition-all duration-200",
                  activeSection === "process"
                    ? "liquid-glass-active font-bold"
                    : "liquid-glass-item"
                )}
              >
                Process
              </Link>

              {/* Pricing */}
              <Link
                href="/#pricing"
                onClick={() => {
                  handleNavigateSection("pricing");
                  closeAll();
                }}
                onMouseEnter={() => setActiveDropdown(null)}
                className={cn(
                  "h-9 px-4 inline-flex items-center justify-center rounded-full text-xs xl:text-sm select-none transition-all duration-200",
                  activeSection === "pricing"
                    ? "liquid-glass-active font-bold"
                    : "liquid-glass-item"
                )}
              >
                Pricing
              </Link>

              {/* Blog */}
              <Link
                href="/blog"
                onClick={closeAll}
                onMouseEnter={() => setActiveDropdown(null)}
                className={cn(
                  "h-9 px-4 inline-flex items-center justify-center rounded-full text-xs xl:text-sm select-none transition-all duration-200",
                  pathname.startsWith("/blog")
                    ? "liquid-glass-active font-bold"
                    : "liquid-glass-item"
                )}
              >
                Blog
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={closeAll}
                onMouseEnter={() => setActiveDropdown(null)}
                className={cn(
                  "h-9 px-4 inline-flex items-center justify-center rounded-full text-xs xl:text-sm select-none transition-all duration-200",
                  pathname === "/contact"
                    ? "liquid-glass-active font-bold"
                    : "liquid-glass-item"
                )}
              >
                Contact
              </Link>
            </nav>

            {/* Right Desktop: Theme Toggle + Liquid Glass CTA Button (>= 1024px) */}
            <div className="hidden lg:flex items-center gap-2.5">
              <ThemeToggle size="sm" />
              <LiquidGlassButton
                variant="navbar"
                onClick={() => openQuote()}
              >
                Get Free Audit
              </LiquidGlassButton>
            </div>

            {/* Right Mobile: Theme Toggle Only (< 1024px) - Clean top bar with no duplicate hamburger */}
            <div className="flex lg:hidden items-center">
              <ThemeToggle size="sm" />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Floating Bottom Dock (< 1024px) */}
      <MobileBottomDock
        activeSection={activeSection}
        isServicesOpen={servicesPanelOpen}
        isMoreOpen={morePanelOpen}
        onOpenServices={() => {
          setMorePanelOpen(false);
          setServicesPanelOpen(true);
        }}
        onOpenMore={() => {
          setServicesPanelOpen(false);
          setMorePanelOpen(true);
        }}
        onNavigateSection={handleNavigateSection}
      />

      {/* Mobile Services Bottom Sheet (< 1024px) */}
      <MobileServicesPanel
        isOpen={servicesPanelOpen}
        onClose={() => setServicesPanelOpen(false)}
        initialCategoryId={selectedCategory}
      />

      {/* Mobile More Bottom Sheet (< 1024px) */}
      <MobileMorePanel
        isOpen={morePanelOpen}
        onClose={() => setMorePanelOpen(false)}
        onNavigateSection={(sectionId) => {
          setMorePanelOpen(false);
          handleNavigateSection(sectionId);
        }}
      />
    </>
  );
}
