import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Clock, Calendar, Share2, Tag, BookOpen } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { StrapiRichText } from "@/components/blog/StrapiRichText";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/strapi";

export const revalidate = 60; // Next.js ISR: Revalidate blog post every 60 seconds

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!slug) return { title: "Blog | Digital Horizon Solutions" };

  const post = await getBlogPostBySlug(slug, 60);
  if (!post) {
    return {
      title: "Article Not Found | Digital Horizon Solutions",
      description: "The requested article could not be found.",
    };
  }

  const title = post.seoTitle || `${post.title} | Digital Horizon Solutions`;
  const description = post.seoDescription || post.excerpt;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.rawDate,
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  if (!slug) notFound();

  const post = await getBlogPostBySlug(slug, 60);
  if (!post) notFound();

  // Fetch related posts (excluding current post)
  let relatedPosts: any[] = [];
  try {
    const allPostsResult = await getBlogPosts({ pageSize: 4, revalidate: 60 });
    relatedPosts = (allPostsResult?.posts || [])
      .filter((p) => p.slug !== post.slug)
      .slice(0, 3);
  } catch (e) {
    console.warn("[BlogPostPage] Could not fetch related posts:", e);
  }

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-gold-400/25 selection:text-white">
      {/* Universal Floating Navbar */}
      <Navbar />

      <main className="flex-1 pt-20 xs:pt-24 sm:pt-28 pb-12 sm:pb-16">
        <article className="mx-auto max-w-4xl px-3.5 xs:px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back Link */}
          <div className="mb-6 xs:mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-md"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>Back to all articles</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            {/* Category & Read Time Eyebrow */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-bold uppercase tracking-wider text-[11px] bg-amber-400/15 text-amber-600 dark:text-amber-400 border border-amber-400/30">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>
              <span className="text-neutral-400 dark:text-neutral-600">•</span>
              <span className="inline-flex items-center gap-1 text-neutral-600 dark:text-neutral-400 font-medium">
                <Clock className="h-3.5 w-3.5 text-neutral-400" />
                {post.readTime}
              </span>
              <span className="text-neutral-400 dark:text-neutral-600">•</span>
              <span className="inline-flex items-center gap-1 text-neutral-600 dark:text-neutral-400 font-medium">
                <Calendar className="h-3.5 w-3.5 text-neutral-400" />
                {post.date}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.18] sm:leading-[1.15]">
              {post.title}
            </h1>

            {/* Excerpt Lead */}
            {post.excerpt && (
              <p className="text-base sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                {post.excerpt}
              </p>
            )}

            {/* Author Profile Bar */}
            <div className="pt-2 sm:pt-4 pb-2 border-y border-neutral-200/80 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden border border-neutral-300 dark:border-white/20 shrink-0 shadow-sm bg-neutral-200 dark:bg-neutral-800">
                  <Image
                    src={post.author.avatarUrl}
                    alt={post.author.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-semibold text-neutral-950 dark:text-white">
                    {post.author.name}
                  </div>
                  {post.author.role && (
                    <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                      {post.author.role}
                    </div>
                  )}
                </div>
              </div>

              <div className="text-xs text-neutral-500 dark:text-neutral-400 hidden sm:flex items-center gap-1.5">
                <BookOpen className="h-4 w-4 text-amber-500" />
                <span>Verified Publication</span>
              </div>
            </div>
          </header>

          {/* Hero Cover Image */}
          {post.imageUrl && (
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl xs:rounded-3xl sm:rounded-[32px] border border-neutral-200/80 dark:border-white/10 shadow-lg bg-neutral-100 dark:bg-neutral-900 mb-10 sm:mb-14">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          )}

          {/* Article Main Body (Safe Strapi Rich Text Renderer) */}
          <div className="prose-content max-w-none text-neutral-900 dark:text-neutral-100">
            <StrapiRichText content={post.content} />
          </div>


          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <section className="mt-16 sm:mt-24 pt-10 sm:pt-12 border-t border-neutral-200/80 dark:border-white/10">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white mb-6 sm:mb-8">
                Recommended reading
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.slug}`}
                    className="group block rounded-2xl overflow-hidden border border-neutral-200/80 dark:border-white/10 bg-neutral-50/50 dark:bg-white/[0.02] hover:border-amber-400/50 transition-all p-4"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800 mb-3">
                      <Image
                        src={related.imageUrl}
                        alt={related.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-amber-500">
                      {related.category}
                    </span>
                    <h3 className="mt-1 text-sm sm:text-base font-bold text-neutral-950 dark:text-white group-hover:text-amber-500 transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </section>
          )}

        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
