"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Loader2, Sparkles, Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  author: {
    name: string;
    avatarUrl: string;
    role?: string;
  };
  date: string;
  readTime: string;
  featured?: boolean;
}

export interface BlogCollectionProps {
  initialPosts?: BlogPostItem[];
  featuredPost?: BlogPostItem | null;
  categories?: string[];
}

const FEATURED_POST: BlogPostItem = {
  id: "featured-1",
  slug: "breaking-into-product-design-advice-from-founder",
  title: "Breaking Into Product Design: Advice from Untitled Founder, Frankie",
  excerpt:
    "Let's get one thing out of the way: you don't need a fancy Bachelor's Degree to get into Product Design. We sat down with Frankie Sullivan to talk about gatekeeping in product design and how anyone can get into this growing industry.",
  category: "Design",
  imageUrl:
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1600&auto=format&fit=crop",
  author: {
    name: "Frankie Sullivan",
    avatarUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=160&auto=format&fit=crop",
    role: "Founder & Design Director",
  },
  date: "20 Jan 2026",
  readTime: "8 min read",
  featured: true,
};

const INITIAL_BLOG_POSTS: BlogPostItem[] = [
  {
    id: "post-1",
    slug: "migrating-to-linear-101",
    title: "Migrating to Linear 101",
    excerpt:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started smoothly without disrupting development pipelines.",
    category: "Software Engineering",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "Phoenix Baker",
      avatarUrl:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=160&auto=format&fit=crop",
    },
    date: "19 Jan 2026",
    readTime: "5 min read",
  },
  {
    id: "post-2",
    slug: "building-your-api-stack",
    title: "Building your API Stack",
    excerpt:
      "The rise of RESTful APIs and GraphQL has been met by a rise in specialized developer tools for creating, testing, monitoring, and scaling them.",
    category: "Software Engineering",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "Lana Steiner",
      avatarUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=160&auto=format&fit=crop",
    },
    date: "18 Jan 2026",
    readTime: "7 min read",
  },
  {
    id: "post-3",
    slug: "bill-walsh-leadership-lessons",
    title: "Bill Walsh leadership lessons",
    excerpt:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty? The Standard of Performance applies directly to tech teams.",
    category: "Leadership",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "Alec Whitten",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=160&auto=format&fit=crop",
    },
    date: "17 Jan 2026",
    readTime: "6 min read",
  },
  {
    id: "post-4",
    slug: "pm-mental-models",
    title: "PM mental models",
    excerpt:
      "Mental models are simple expressions of complex processes or relationships that help product managers make decisive engineering tradeoffs.",
    category: "Product",
    imageUrl:
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "Demi Wilkinson",
      avatarUrl:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=160&auto=format&fit=crop",
    },
    date: "16 Jan 2026",
    readTime: "6 min read",
  },
  {
    id: "post-5",
    slug: "what-is-wireframing",
    title: "What is Wireframing?",
    excerpt:
      "Introduction to Wireframing and its core UX principles. Learn how structural fidelity accelerates stakeholder approval before writing a single line of code.",
    category: "Design",
    imageUrl:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "Candice Wu",
      avatarUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=160&auto=format&fit=crop",
    },
    date: "15 Jan 2026",
    readTime: "4 min read",
  },
  {
    id: "post-6",
    slug: "how-collaboration-makes-us-better-designers",
    title: "How collaboration makes us better designers",
    excerpt:
      "Cross-functional collaboration between developers and product designers can make our delivery faster, and our individual solutions substantially sharper.",
    category: "Design",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "Natali Craig",
      avatarUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=160&auto=format&fit=crop",
    },
    date: "14 Jan 2026",
    readTime: "5 min read",
  },
  {
    id: "post-7",
    slug: "subsecond-nextjs-web-performance",
    title: "Engineering Sub-Second Web Speed with Next.js",
    excerpt:
      "How static rendering, server components, and bundle splitting reduce Largest Contentful Paint to under 600ms for high-conversion web platforms.",
    category: "Software Engineering",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "Drew Cano",
      avatarUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=160&auto=format&fit=crop",
    },
    date: "13 Jan 2026",
    readTime: "8 min read",
  },
  {
    id: "post-8",
    slug: "our-top-10-javascript-frameworks-to-use",
    title: "Our top 10 Javascript frameworks to use",
    excerpt:
      "JavaScript frameworks make modern development scalable with extensive ecosystem toolkits, runtime optimizations, and component primitives.",
    category: "Software Engineering",
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "Orlando Diggs",
      avatarUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=160&auto=format&fit=crop",
    },
    date: "12 Jan 2026",
    readTime: "7 min read",
  },
  {
    id: "post-9",
    slug: "podcast-creating-a-better-cx-community",
    title: "Podcast: Creating a better CX Community",
    excerpt:
      "Starting an engaged customer experience community doesn't need to be complicated. Here is the operational framework we use to foster customer loyalty.",
    category: "Customer Success",
    imageUrl:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=800&auto=format&fit=crop",
    author: {
      name: "Lori Bryson",
      avatarUrl:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=160&auto=format&fit=crop",
    },
    date: "11 Jan 2026",
    readTime: "12 min listen",
  },
];

const CATEGORIES = [
  "All",
  "Design",
  "Product",
  "Software Engineering",
  "Customer Success",
  "Leadership",
] as const;

export function BlogCollection({
  initialPosts,
  featuredPost,
  categories: customCategories,
}: BlogCollectionProps = {}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // If initialPosts was provided, use it; otherwise fallback to INITIAL_BLOG_POSTS
  const allPosts =
    initialPosts && initialPosts.length > 0
      ? initialPosts
      : INITIAL_BLOG_POSTS;

  // Resolve featured post
  const featured =
    featuredPost !== undefined
      ? featuredPost
      : FEATURED_POST;

  // Filter out featured post from the grid if both exist and match by slug/id
  const gridSourcePosts = React.useMemo(() => {
    if (!featured) return allPosts;
    const filtered = allPosts.filter(
      (p) => p.slug !== featured.slug && p.id !== featured.id
    );
    // If filtering out featured leaves the grid empty but we have at least 1 post, show all
    return filtered.length > 0 ? filtered : allPosts;
  }, [allPosts, featured]);

  // Dynamically compute category tabs
  const availableCategories = React.useMemo(() => {
    if (customCategories && customCategories.length > 0) {
      return ["All", ...customCategories.filter((c) => c !== "All")];
    }
    const catSet = new Set<string>();
    allPosts.forEach((p) => {
      if (p.category) catSet.add(p.category);
    });
    if (catSet.size > 0) {
      return ["All", ...Array.from(catSet)];
    }
    return Array.from(CATEGORIES);
  }, [allPosts, customCategories]);

  const filteredPosts =
    selectedCategory === "All"
      ? gridSourcePosts
      : gridSourcePosts.filter((post) => post.category === selectedCategory);

  const displayedPosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 3);
      setIsLoadingMore(false);
    }, 450);
  };

  return (
    <div className="w-full">
      {/* 1. Large Hero Featured Card */}
      {featured && (
        <section className="relative w-full" aria-label="Featured Story">
          <Link
            href={`/blog/${featured.slug}`}
            data-dark-card
            className="group relative block w-full overflow-hidden rounded-2xl xs:rounded-3xl sm:rounded-[36px] bg-neutral-950 border border-neutral-200/80 dark:border-white/10 shadow-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2"
          >
            {/* Background Photography Container */}
            <div className="relative min-h-[360px] xs:min-h-[400px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[580px] w-full flex flex-col justify-end p-5 xs:p-6 sm:p-10 md:p-14 lg:p-16">
              <Image
                src={featured.imageUrl}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              {/* Subtle gradient overlay to keep image bright and vibrant while ensuring text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/30 via-45% to-transparent pointer-events-none" />

              {/* Inner Content Block */}
              <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-5 sm:gap-8">
                <div className="max-w-3xl space-y-2.5 xs:space-y-3 sm:space-y-4">
                  {/* Eyebrow / Tag */}
                  <div className="inline-flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold tracking-wider text-amber-400 text-white-fixed uppercase">
                      Featured
                    </span>
                    <span className="text-white/50 text-white-fixed">•</span>
                    <span className="text-xs sm:text-sm text-neutral-200 text-white-fixed font-medium">
                      {featured.category}
                    </span>
                  </div>

                  {/* Main Headline */}
                  <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-white-fixed leading-[1.18] sm:leading-[1.14] drop-shadow-md group-hover:text-amber-200 transition-colors">
                    {featured.title}
                  </h1>

                  {/* Subtitle Description */}
                  <p className="text-xs xs:text-sm sm:text-base text-neutral-200 text-white-fixed leading-relaxed line-clamp-2 xs:line-clamp-3 sm:line-clamp-4 max-w-2xl drop-shadow-sm font-normal">
                    {featured.excerpt}
                  </p>

                  {/* Author Info */}
                  <div className="pt-1 xs:pt-2 flex items-center gap-2.5 xs:gap-3">
                    <div className="relative h-7 w-7 xs:h-8 xs:w-8 sm:h-9 sm:w-9 rounded-full overflow-hidden border border-white/30 shrink-0 shadow-sm bg-neutral-800">
                      <Image
                        src={featured.author.avatarUrl}
                        alt={featured.author.name}
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>
                    <div className="text-xs sm:text-sm text-white text-white-fixed flex items-center">
                      <span className="font-semibold text-white text-white-fixed">
                        {featured.author.name}
                      </span>
                      <span className="text-white/50 text-white-fixed mx-2">•</span>
                      <span className="text-neutral-300 text-white-fixed font-medium text-xs">
                        {featured.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Action Arrow Button */}
                <div className="hidden md:flex shrink-0 items-center justify-center self-end mb-2">
                  <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md flex items-center justify-center text-white text-white-fixed transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-neutral-950 group-hover:border-amber-300 shadow-lg">
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* 2. Section Heading & Category Filter Tabs */}
      <section className="mt-10 xs:mt-12 sm:mt-16 lg:mt-20 mb-8 sm:mb-10">
        <div className="space-y-4 sm:space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
              Recent blog posts
            </h2>
            <p className="mt-1.5 sm:mt-2 text-xs xs:text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Discover engineering deep-dives, product design patterns, and scaling playbooks.
            </p>
          </div>

          {/* Category Filter Chips with Horizontal Scroll Edge Padding & Touch Target Comfort */}
          <div className="relative -mx-3.5 px-3.5 xs:-mx-4 xs:px-4 sm:mx-0 sm:px-0">
            <div
              role="tablist"
              aria-label="Filter blog posts by category"
              className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 border-b border-neutral-200/80 dark:border-white/10 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overscroll-x-contain"
            >
              {availableCategories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="blog-posts-grid"
                    data-active-pill={isActive ? "true" : undefined}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setVisibleCount(6);
                    }}
                    className={cn(
                      "min-h-[42px] px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2",
                      isActive
                        ? "category-active-pill bg-black text-white text-white-fixed border border-black dark:bg-white dark:text-neutral-950 dark:border-white shadow-sm"
                        : "text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white bg-neutral-200/60 hover:bg-neutral-200 dark:bg-white/5 dark:hover:bg-white/10 border border-neutral-300 dark:border-white/10"
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Blog Grid or Empty State */}
      <section>
        {displayedPosts.length > 0 ? (
          <div
            id="blog-posts-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8"
          >
            {displayedPosts.map((post) => (
              <article
                key={post.id}
                aria-labelledby={`post-title-${post.id}`}
                className="group relative flex flex-col justify-between h-full rounded-2xl transition-all duration-250"
              >
                <div>
                  {/* Image Container with Rounded Corners & Zoom on Hover */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-900 shadow-xs border border-neutral-200/80 dark:border-white/10 mb-3.5 sm:mb-4">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    {/* Category badge with fixed pure white text & solid backdrop */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider bg-black/85 bg-dark-fixed text-white text-white-fixed backdrop-blur-md border border-white/20 shadow-md">
                      {post.category}
                    </span>
                  </div>

                  {/* Article Content */}
                  <div className="space-y-1.5 sm:space-y-2">
                    <h3
                      id={`post-title-${post.id}`}
                      className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug line-clamp-2"
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="focus:outline-none focus-visible:underline after:absolute after:inset-0 after:z-10"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed font-normal">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Author Row */}
                <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="relative h-6 w-6 sm:h-7 sm:w-7 rounded-full overflow-hidden shrink-0 border border-neutral-300 dark:border-white/20 shadow-xs bg-neutral-200 dark:bg-neutral-800">
                      <Image
                        src={post.author.avatarUrl}
                        alt={post.author.name}
                        fill
                        sizes="28px"
                        className="object-cover"
                      />
                    </div>
                    <div className="font-medium text-xs">
                      <span className="font-semibold text-neutral-950 dark:text-neutral-100">
                        {post.author.name}
                      </span>
                      <span className="text-neutral-400 dark:text-neutral-500 mx-1.5">•</span>
                      <span className="text-neutral-500 dark:text-neutral-400 font-normal">
                        {post.date}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 shrink-0">
                    {post.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Intentional Empty State for Zero-Result Categories */
          <div className="py-14 sm:py-20 text-center rounded-2xl sm:rounded-3xl border border-dashed border-neutral-300 dark:border-white/10 bg-neutral-50/50 dark:bg-white/[0.02]">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200/80 dark:bg-white/10 text-neutral-700 dark:text-neutral-300 mb-4">
              <Newspaper className="h-6 w-6 text-amber-500" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
              No articles found
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-sm mx-auto">
              We haven&apos;t published articles under &ldquo;{selectedCategory}&rdquo; yet. Check back soon or browse all topics.
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory("All")}
              className="mt-5 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:opacity-90 transition-opacity cursor-pointer"
            >
              <span>View all articles</span>
            </button>
          </div>
        )}

        {/* 4. "Load more" Button */}
        {hasMore && (
          <div className="mt-12 sm:mt-16 text-center">
            <button
              type="button"
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              aria-live="polite"
              aria-busy={isLoadingMore}
              className="min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed bg-white text-neutral-900 border border-neutral-300/80 shadow-xs hover:bg-neutral-50 hover:border-neutral-400 hover:text-black dark:bg-neutral-900 dark:text-neutral-100 dark:border-white/15 dark:shadow-none dark:hover:bg-neutral-800 dark:hover:border-white/25 dark:hover:text-white"
            >
              {isLoadingMore ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin text-neutral-600 dark:text-neutral-400" />
                  <span>Loading...</span>
                </>
              ) : (
                <span>Load more</span>
              )}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
