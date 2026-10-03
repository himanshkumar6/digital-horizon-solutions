import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 text-center">
      {/* Brand Logo */}
      <div className="mb-8">
        <Logo size="lg" />
      </div>

      <div className="relative max-w-md rounded-2xl border border-white/10 bg-neutral-950/70 p-8 shadow-2xl backdrop-blur-xl">
        <div className="font-mono text-5xl font-extrabold text-gold-400 mb-2">
          404
        </div>

        <h1 className="text-xl font-bold uppercase tracking-tight text-white mb-3">
          Page Beyond The Horizon
        </h1>

        <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
          The page or resource you are looking for does not exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:brightness-110 transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
