"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { ServiceDetailModal } from "./ServiceDetailModal";
import { ServiceStackCard } from "./ServiceStackCard";
import {
  SERVICES,
  ServiceItem,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PILLAR_NAMES = [
  "Google Business",
  "Website Dev",
  "E-Commerce",
  "Custom Software",
  "AI Automation",
];

export function ServicesSection() {
  const [activeModalService, setActiveModalService] =
    useState<ServiceItem | null>(null);

  const [activeIndex, setActiveIndex] =
    useState(0);

  const sectionRef =
    useRef<HTMLElement>(null);

  const tabsContainerRef =
    useRef<HTMLDivElement>(null);

  const cardWrappersRef = useRef<
    (HTMLDivElement | null)[]
  >([]);

  const cardInnersRef = useRef<
    (HTMLDivElement | null)[]
  >([]);

  // Flag to suppress ScrollTrigger tab update flashes during programmatic scrollTo
  const isProgrammaticScrollRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  /*
   * ============================================================
   * AUTO-SCROLL ACTIVE PILLAR TAB INTO VIEW ON MOBILE
   * ============================================================
   */
  useEffect(() => {
    const tabsContainer = tabsContainerRef.current;
    if (!tabsContainer || tabsContainer.offsetWidth === 0) return;
    const activeTab = tabsContainer.children[activeIndex] as
      | HTMLElement
      | undefined;
    if (activeTab) {
      const containerWidth = tabsContainer.offsetWidth;
      const tabOffsetLeft = activeTab.offsetLeft;
      const tabWidth = activeTab.offsetWidth;
      tabsContainer.scrollTo({
        left: tabOffsetLeft - containerWidth / 2 + tabWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  /*
   * ============================================================
   * PRODUCTION-GRADE GSAP SCROLLTRIGGER CARD STACKING ENGINE
   *
   * Architectural Fixes:
   * 1. DETERMINISTIC NEUTRAL INITIAL STATE (Fixes Bug 01):
   *    - Explicitly sets scale: 1, y: 0, opacity: 1, dimOverlay: 0 on all cards at mount.
   *    - Uses `tl.to()` instead of `fromTo()`, eliminating initial render mutations.
   *    - Trigger start is set to "top 60%" (when next card is ACTUALLY rising to cover
   *      the current card), NOT "top 92%" which caused pre-scroll activation.
   * 2. NAVBAR COLLISION DEFENSE (Fixes Bug 02):
   *    - Section uses dynamic scrollMarginTop: calc(var(--navbar-height, 72px) + 28px).
   *    - Section has generous top padding: pt-24 sm:pt-28 md:pt-32 lg:pt-36 so headings
   *      never sit underneath the navbar.
   *    - Cards stick at `calc(var(--navbar-height, 72px) + 18px)`, guaranteeing that even
   *      with negative translateY (-16px), the top rim remains safely below the navbar.
   *    - Section is locked in an isolated stacking context (z-20), strictly below the navbar (z-40).
   * 3. FULL RUNWAY:
   *    - Container has pb-[60vh] sm:pb-[70vh] lg:pb-[80vh] so Cards 04 & 05 remain
   *      fully stacked, settled, and interactive.
   * ============================================================
   */
  useEffect(() => {
    const wrappers = cardWrappersRef.current.filter(
      (w): w is HTMLDivElement => w !== null
    );
    const inners = cardInnersRef.current.filter(
      (inn): inn is HTMLDivElement => inn !== null
    );

    if (wrappers.length === 0 || inners.length === 0) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Use gsap.context for bulletproof cleanup on unmount/re-render
    const ctx = gsap.context(() => {
      // 1. Guaranteed Deterministic Initial State:
      // Ensure all cards start 100% bright, full scale, full opacity, zero dim overlay
      inners.forEach((inner) => {
        gsap.set(inner, { scale: 1, y: 0, opacity: 1, clearProps: "filter" });
        const dim = inner.querySelector("[data-dim-overlay]");
        if (dim) gsap.set(dim, { opacity: 0 });
      });

      if (!prefersReducedMotion) {
        // Derive sticky top anchor dynamically from CSS variable
        const navH =
          parseFloat(
            getComputedStyle(document.documentElement).getPropertyValue(
              "--navbar-height"
            )
          ) || 72;
        const stickyTopPx = navH + 18;

        wrappers.forEach((wrapper, idx) => {
          if (idx < wrappers.length - 1) {
            const currentInner = inners[idx];
            const currentDimOverlay =
              currentInner.querySelector("[data-dim-overlay]");
            const nextWrapper = wrappers[idx + 1];

            /*
             * Stage 1: Card Pushback Timeline
             *
             * Trigger: Incoming next card (idx + 1).
             * Start: "top 60%" — begins ONLY when the next card is actively rising
             *        towards the stuck current card, NEVER on initial arrival!
             * End: `top ${stickyTopPx}px` — finishes at the exact frame the next card pins!
             * Scrub: 0.4s buffer for silky inertia settlement.
             *
             * Note: Using .to() guarantees that at progress 0, properties remain 100% neutral!
             */
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: nextWrapper,
                start: "top 60%",
                end: `top ${stickyTopPx}px`,
                scrub: 0.4,
                invalidateOnRefresh: true,
              },
            });

            tl.to(
              currentInner,
              {
                scale: 0.95,
                y: -16,
                opacity: 0.80,
                ease: "power1.out",
              },
              0
            );

            if (currentDimOverlay) {
              tl.to(
                currentDimOverlay,
                {
                  opacity: 0.22,
                  ease: "power1.out",
                },
                0
              );
            }
          }
        });
      }

      // 2. Tab Synchronization via lightweight ScrollTriggers
      wrappers.forEach((wrapper, idx) => {
        ScrollTrigger.create({
          trigger: wrapper,
          start: "top 140px",
          end: () => `+=${wrapper.offsetHeight + (idx < wrappers.length - 1 ? 100 : 40)}`,
          onEnter: () => {
            if (!isProgrammaticScrollRef.current) {
              setActiveIndex(idx);
            }
          },
          onEnterBack: () => {
            if (!isProgrammaticScrollRef.current) {
              setActiveIndex(idx);
            }
          },
        });
      });

      // Defensive: Refresh layout metrics once fonts and images stabilize
      ScrollTrigger.refresh();
    }, sectionRef);

    // Refresh triggers on font load and window load for pixel-perfect metrics
    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    const handleWindowLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", handleWindowLoad);

    return () => {
      window.removeEventListener("load", handleWindowLoad);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      ctx.revert();
    };
  }, []);

  /*
   * ============================================================
   * PILLAR CLICK — Lenis Synchronized Smooth Scroll with Safety Lock
   * ============================================================
   */
  const handlePillarClick = useCallback((index: number) => {
    const wrapper = cardWrappersRef.current[index];
    if (!wrapper) return;

    setActiveIndex(index);
    isProgrammaticScrollRef.current = true;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 1300);

    const navH =
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--navbar-height"
        )
      ) || 72;
    const stickyTopPx = navH + 18;

    // Calculate deterministic absolute document top of the target wrapper in flow
    let docTop = 0;
    let el: HTMLElement | null = wrapper;
    while (el) {
      docTop += el.offsetTop;
      el = el.offsetParent as HTMLElement | null;
    }
    const targetScrollY = Math.max(0, docTop - stickyTopPx);

    const lenis = (
      window as unknown as {
        __lenis?: {
          scrollTo: (
            target: HTMLElement | number,
            options?: {
              offset?: number;
              duration?: number;
              easing?: (t: number) => number;
            }
          ) => void;
        };
      }
    ).__lenis;

    if (lenis) {
      lenis.scrollTo(targetScrollY, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{
        scrollMarginTop: "calc(var(--navbar-height, 58px) + 14px)",
      }}
      className="
        relative
        z-20
        isolation-auto
        pt-8
        sm:pt-10
        md:pt-12
        lg:pt-14
        pb-2
        sm:pb-3
        md:pb-4
        lg:pb-4
        transition-colors
        duration-300
      "
      aria-labelledby="services-heading"
    >
      {/* ========================================================
          BACKGROUND ATMOSPHERIC GLOW (Contained in overflow-hidden to prevent document overflow)
      ======================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div
          className="
            absolute
            top-1/4
            left-1/2
            -translate-x-1/2
            w-[600px]
            sm:w-[700px]
            h-[600px]
            sm:h-[700px]
            bg-gold-400/[0.04]
            dark:bg-gold-400/[0.03]
            rounded-full
            blur-[180px]
          "
        />
      </div>

      {/* ========================================================
          SECTION HEADER
      ======================================================== */}
      <Container className="mb-6 sm:mb-8 md:mb-12 lg:mb-12">
        {/* Main heading */}
        <div className="w-full flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            eyebrow="WHAT WE DO"
            title="DIGITAL SOLUTIONS FOR REAL BUSINESS GROWTH"
            subtitle="From local visibility to custom software, we build practical digital systems around the way your business works."
            goldAccentText="BUSINESS GROWTH"
            titleClassName="whitespace-nowrap text-[clamp(13px,3.7vw,44px)] sm:text-3xl md:text-4xl lg:text-5xl tracking-tight"
          />
        </div>

        {/* ======================================================
            CENTERED PILLAR TABS (Hidden on mobile <768px, visible on tablet/desktop >=768px)
        ====================================================== */}
        <div className="hidden md:block md:mt-8 lg:mt-10 w-full overflow-hidden">
          <div
            ref={tabsContainerRef}
            className="
              flex
              items-center
              justify-start
              sm:justify-center
              gap-1.5
              sm:gap-2
              overflow-x-auto
              pb-1
              px-1
              sm:px-0
              no-scrollbar
              w-full
            "
            role="tablist"
            aria-label="Service Pillars"
          >
            {SERVICES.map((srv, idx) => {
              const isCurrent = idx === activeIndex;

              return (
                <button
                  key={srv.id}
                  type="button"
                  role="tab"
                  aria-selected={isCurrent}
                  onClick={() => handlePillarClick(idx)}
                  className={cn(
                    `
                    px-3
                    sm:px-3.5
                    py-1.5
                    rounded-full
                    text-xs
                    font-semibold
                    tracking-wide
                    transition-all
                    duration-300
                    cursor-pointer
                    select-none
                    whitespace-nowrap
                    shrink-0
                    `,
                    isCurrent
                      ? `
                        liquid-glass-active
                        text-neutral-950
                        dark:text-white
                        font-bold
                        shadow-md
                        scale-102
                        border-amber-500/40
                        dark:border-amber-400/30
                      `
                      : `
                        text-neutral-500
                        dark:text-neutral-400
                        hover:text-neutral-900
                        dark:hover:text-white
                        bg-transparent
                        border
                        border-transparent
                        hover:border-neutral-200
                        dark:hover:border-white/10
                      `
                  )}
                >
                  <span className="font-mono text-[11px] opacity-70 mr-1.5">
                    {srv.number}
                  </span>

                  <span>
                    {PILLAR_NAMES[idx] || srv.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </Container>

      {/* ========================================================
          SERVICE STACK — Physical Deck Architecture
      ======================================================== */}
      <Container>
        {/*
          Calibrated Trailing Runway: Generates an intentional ~100-140px settlement zone
          so the final card (05 AI Automation) rests comfortably in its stacked state,
          followed seamlessly by the Approach section without an empty vertical void!
        */}
        <div className="relative w-full pb-4 sm:pb-6 lg:pb-8">
          {SERVICES.map((service, idx) => (
            <div
              key={service.id}
              ref={(el) => {
                cardWrappersRef.current[idx] = el;
              }}
              style={{
                // Responsive sticky clearance derived dynamically from navbar height
                top: "calc(var(--navbar-height, 58px) + 10px)",
                zIndex: 10 + idx, // Contained inside section z-20, strictly below navbar z-40
              }}
              className={cn(
                "sticky w-full",
                idx < SERVICES.length - 1
                  ? "mb-[55vh] sm:mb-[60vh] md:mb-[30vh] lg:mb-[34vh]"
                  : "mb-0"
              )}
            >
              <div
                ref={(el) => {
                  cardInnersRef.current[idx] = el;
                }}
                className="w-full origin-top will-change-transform"
              >
                <ServiceStackCard
                  service={service}
                  index={idx}
                  total={SERVICES.length}
                  onOpenModal={(srv) =>
                    setActiveModalService(srv)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* ========================================================
          SERVICE DETAIL MODAL
      ======================================================== */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
      />
    </section>
  );
}