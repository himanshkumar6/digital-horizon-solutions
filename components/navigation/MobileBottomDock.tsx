"use client";

import React from "react";
import { Home, Sparkles, BookOpen, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

interface MobileBottomDockProps {
  activeSection: string;
  isServicesOpen: boolean;
  isMoreOpen: boolean;
  onOpenServices: () => void;
  onOpenMore: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export function MobileBottomDock({
  activeSection,
  isServicesOpen,
  isMoreOpen,
  onOpenServices,
  onOpenMore,
  onNavigateSection,
}: MobileBottomDockProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isAnyModalOpen = isServicesOpen || isMoreOpen;

  const dockItems = [
    {
      id: "home",
      label: "Home",
      icon: Home,
      isActive:
        pathname === "/" &&
        (activeSection === "home" || !activeSection) &&
        !isAnyModalOpen,
      action: () => {
        if (pathname === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          onNavigateSection("home");
        } else {
          router.push("/");
        }
      },
    },
    {
      id: "services",
      label: "Services",
      icon: Sparkles,
      isActive: isServicesOpen,
      action: () => {
        onOpenServices();
      },
      hasBadge: true,
    },
    {
      id: "blogs",
      label: "Blogs",
      icon: BookOpen,
      isActive: pathname.startsWith("/blog") && !isAnyModalOpen,
      action: () => {
        router.push("/blog");
      },
    },
    {
      id: "more",
      label: "More",
      icon: LayoutGrid,
      isActive: isMoreOpen,
      action: () => {
        onOpenMore();
      },
    },
  ];

  return (
    <aside
      aria-label="Mobile Navigation Dock"
      className={cn(
        "lg:hidden fixed bottom-[max(0.5rem,env(safe-area-inset-bottom,0.5rem))] left-1/2 -translate-x-1/2 z-40 w-[calc(100%-1.5rem)] xs:w-[calc(100%-2rem)] max-w-[360px] xs:max-w-[380px] transition-all duration-300",
        isAnyModalOpen
          ? "opacity-0 pointer-events-none translate-y-8 scale-95"
          : "opacity-100 translate-y-0 scale-100"
      )}
    >
      {/* Outer Floating Liquid Glass Capsule */}
      <nav
        aria-label="Bottom Navigation Bar"
        className="relative flex items-center justify-between rounded-full p-1 liquid-glass-capsule shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
      >
        {dockItems.map((item) => {
          const Icon = item.icon;
          const active = item.isActive;

          return (
            <button
              key={item.id}
              type="button"
              onClick={item.action}
              className={cn(
                "flex-1 min-h-[42px] xs:min-h-[44px] min-w-[38px] xs:min-w-[42px] flex flex-col items-center justify-center py-1 px-1 xs:px-1.5 rounded-full transition-all duration-200 select-none cursor-pointer relative group",
                active
                  ? "liquid-glass-active scale-100 font-bold"
                  : "liquid-glass-item hover:scale-[1.02] active:scale-95"
              )}
              aria-current={active ? "page" : undefined}
            >
              <div className="relative flex items-center justify-center">
                <Icon
                  className={cn(
                    "h-4 w-4 xs:h-4.5 xs:w-4.5 transition-transform duration-200 stroke-[1.8]",
                    active
                      ? "text-amber-400 dark:text-amber-300 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                      : "text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-950 dark:group-hover:text-white"
                  )}
                />
                {item.hasBadge && !active && (
                  <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b] ring-2 ring-neutral-900/60" />
                )}
              </div>

              <span
                className={cn(
                  "text-[9px] xs:text-[9.5px] leading-tight tracking-tight mt-0.5 transition-colors font-medium",
                  active
                    ? "font-bold text-white dark:text-white"
                    : "text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white"
                )}
              >
                {item.label}
              </span>

              {active && (
                <span className="w-1 h-1 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b] mt-0.5 animate-pulse" />
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
