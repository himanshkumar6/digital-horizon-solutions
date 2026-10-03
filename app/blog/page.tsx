import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { FinalCTA } from "@/components/cta/FinalCTA";
import { BlogCollection } from "@/components/blog/BlogCollection";
import {
  getBlogPosts,
  getFeaturedBlogPost,
  getCategories,
} from "@/lib/strapi";
import type { Metadata } from "next";

export const revalidate = 60; // Next.js ISR: Revalidate blog listing every 60 seconds

export const metadata: Metadata = {
  title: "Blog & Insights | Digital Horizon Solutions",
  description:
    "Expert articles, engineering breakdowns, product design, and digital growth strategies from Digital Horizon Solutions.",
  openGraph: {
    title: "Blog & Insights | Digital Horizon Solutions",
    description:
      "Expert articles, engineering breakdowns, product design, and digital growth strategies from Digital Horizon Solutions.",
    type: "website",
  },
};

export default async function BlogPage() {
  // Defensive server-side fetching with fallback
  let strapiPosts: any[] = [];
  let strapiFeatured: any = null;
  let strapiCategories: string[] = [];

  try {
    const [postsResult, featuredResult, categoriesResult] = await Promise.all([
      getBlogPosts({ pageSize: 50, revalidate: 60 }),
      getFeaturedBlogPost(60),
      getCategories(60),
    ]);

    strapiPosts = postsResult?.posts || [];
    strapiFeatured = featuredResult || (strapiPosts.length > 0 ? strapiPosts[0] : null);
    strapiCategories = categoriesResult?.map((c) => c.name) || [];
  } catch (error) {
    console.warn("[BlogPage] Error fetching blog data from Strapi:", error);
  }

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-gold-400/25 selection:text-white">
      {/* Universal Floating Navbar */}
      <Navbar />

      <main className="flex-1 pt-20 xs:pt-24 sm:pt-28 pb-10 sm:pb-14">
        <div className="mx-auto max-w-7xl px-3.5 xs:px-4 sm:px-6 lg:px-8">
          <BlogCollection
            initialPosts={strapiPosts.length > 0 ? strapiPosts : undefined}
            featuredPost={strapiFeatured}
            categories={strapiCategories.length > 0 ? strapiCategories : undefined}
          />

          {/* Bottom Final CTA — Encapsulated card matching Hero architecture with balanced spacing */}
          <div className="mt-12 xs:mt-14 sm:mt-18">
            <FinalCTA variant="card" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
