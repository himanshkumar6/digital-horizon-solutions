import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getStrapiMediaUrl } from "@/lib/strapi/client";
import type {
  StrapiBlock,
  StrapiBlockInlineNode,
  StrapiBlockTextChild,
  StrapiBlockLinkChild,
} from "@/lib/strapi/types";

interface StrapiRichTextProps {
  content?: StrapiBlock[] | string | null;
  className?: string;
}

/**
 * Render inline child nodes (text with decorators and links)
 */
function renderInlineChild(child: StrapiBlockInlineNode, index: number): React.ReactNode {
  if (!child) return null;

  if (child.type === "link") {
    const linkChild = child as StrapiBlockLinkChild;
    const isExternal =
      linkChild.url.startsWith("http://") ||
      linkChild.url.startsWith("https://") ||
      linkChild.url.startsWith("//");

    return (
      <Link
        key={index}
        href={linkChild.url}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="text-amber-500 hover:text-amber-400 underline underline-offset-4 decoration-amber-500/50 hover:decoration-amber-400 transition-colors font-medium"
      >
        {linkChild.children?.map((c, i) => renderInlineChild(c, i))}
      </Link>
    );
  }

  // Text node
  const textChild = child as StrapiBlockTextChild;
  let element: React.ReactNode = textChild.text;

  if (textChild.bold) {
    element = <strong className="font-bold text-neutral-950 dark:text-white">{element}</strong>;
  }
  if (textChild.italic) {
    element = <em className="italic">{element}</em>;
  }
  if (textChild.underline) {
    element = <span className="underline underline-offset-2">{element}</span>;
  }
  if (textChild.strikethrough) {
    element = <span className="line-through opacity-80">{element}</span>;
  }
  if (textChild.code) {
    element = (
      <code className="px-1.5 py-0.5 rounded-md bg-neutral-200/80 dark:bg-neutral-800 text-amber-600 dark:text-amber-300 font-mono text-xs sm:text-sm font-medium">
        {element}
      </code>
    );
  }

  return <React.Fragment key={index}>{element}</React.Fragment>;
}

/**
 * Renders a single Strapi block node
 */
function renderBlock(block: StrapiBlock, index: number): React.ReactNode {
  if (!block || !block.type) return null;

  switch (block.type) {
    case "paragraph": {
      // If paragraph contains only newline breaks or empty text, maintain paragraph rhythm
      return (
        <p
          key={index}
          className="text-base sm:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 mb-6 font-normal"
        >
          {block.children?.map((child, i) => renderInlineChild(child, i))}
        </p>
      );
    }

    case "heading": {
      const level = (block as any).level || 2;
      const headingChildren = block.children?.map((child, i) => renderInlineChild(child, i));

      switch (level) {
        case 1:
          return (
            <h1
              key={index}
              className="text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white mt-10 mb-4 leading-tight"
            >
              {headingChildren}
            </h1>
          );
        case 2:
          return (
            <h2
              key={index}
              className="text-xl xs:text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white mt-10 mb-4 leading-snug"
            >
              {headingChildren}
            </h2>
          );
        case 3:
          return (
            <h3
              key={index}
              className="text-lg xs:text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 mt-8 mb-3"
            >
              {headingChildren}
            </h3>
          );
        case 4:
          return (
            <h4
              key={index}
              className="text-base xs:text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 mt-6 mb-2"
            >
              {headingChildren}
            </h4>
          );
        default:
          return (
            <h5
              key={index}
              className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 mt-4 mb-2"
            >
              {headingChildren}
            </h5>
          );
      }
    }

    case "list": {
      const isOrdered = (block as any).format === "ordered";
      const items = (block as any).children || [];

      if (isOrdered) {
        return (
          <ol
            key={index}
            className="list-decimal pl-6 space-y-2.5 my-6 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed"
          >
            {items.map((item: any, i: number) => (
              <li key={i}>
                {item.children?.map((child: any, j: number) => renderInlineChild(child, j))}
              </li>
            ))}
          </ol>
        );
      }

      return (
        <ul
          key={index}
          className="list-disc pl-6 space-y-2.5 my-6 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed marker:text-amber-500"
        >
          {items.map((item: any, i: number) => (
            <li key={i}>
              {item.children?.map((child: any, j: number) => renderInlineChild(child, j))}
            </li>
          ))}
        </ul>
      );
    }

    case "quote": {
      return (
        <blockquote
          key={index}
          className="relative my-8 border-l-4 border-amber-400 bg-neutral-100/70 dark:bg-neutral-900/60 rounded-r-2xl py-4 px-6 text-base sm:text-lg italic text-neutral-800 dark:text-neutral-200"
        >
          <div className="font-normal leading-relaxed">
            {block.children?.map((child, i) => renderInlineChild(child, i))}
          </div>
        </blockquote>
      );
    }

    case "code": {
      return (
        <pre
          key={index}
          className="my-6 p-4 sm:p-5 rounded-2xl bg-neutral-950 border border-neutral-800 overflow-x-auto text-xs sm:text-sm font-mono text-amber-200/95 leading-relaxed shadow-lg"
        >
          <code>
            {block.children?.map((child, i) =>
              (child as StrapiBlockTextChild).text || ""
            ).join("")}
          </code>
        </pre>
      );
    }

    case "image": {
      const img = (block as any).image;
      if (!img?.url) return null;
      const imageUrl = getStrapiMediaUrl(img.url);
      const alt = img.alternativeText || img.name || "Blog image illustration";

      return (
        <figure key={index} className="my-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-200/80 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900 shadow-md">
            <Image
              src={imageUrl}
              alt={alt}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
            />
          </div>
          {img.caption && (
            <figcaption className="mt-2 text-center text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 italic">
              {img.caption}
            </figcaption>
          )}
        </figure>
      );
    }

    default:
      return null;
  }
}

/**
 * Universal Rich Text component for Strapi v4/v5 blocks with string fallbacks.
 */
export function StrapiRichText({ content, className = "" }: StrapiRichTextProps) {
  if (!content) {
    return null;
  }

  // Handle parsed array of blocks
  if (Array.isArray(content)) {
    if (content.length === 0) return null;
    return (
      <div className={`prose-container max-w-none ${className}`}>
        {content.map((block, i) => renderBlock(block, i))}
      </div>
    );
  }

  // If content is passed as a string (JSON string or plain text)
  if (typeof content === "string") {
    const trimmed = content.trim();
    if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
      try {
        const parsed = JSON.parse(trimmed);
        if (Array.isArray(parsed)) {
          return (
            <div className={`prose-container max-w-none ${className}`}>
              {parsed.map((block, i) => renderBlock(block, i))}
            </div>
          );
        }
      } catch {
        // Fall through to plain text formatting
      }
    }

    // Render plain text by splitting into double-newline paragraphs
    const paragraphs = trimmed
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean);

    return (
      <div className={`prose-container max-w-none ${className}`}>
        {paragraphs.map((para, i) => {
          // If paragraph has "Heading — Body" pattern e.g. "Introduction — Modern web..."
          const dashIndex = para.indexOf(" — ");
          if (dashIndex > 0 && dashIndex < 40) {
            const headingPart = para.slice(0, dashIndex);
            const restPart = para.slice(dashIndex + 3);
            return (
              <div key={i} className="mb-6">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white mt-6 mb-2">
                  {headingPart}
                </h3>
                <p className="text-base sm:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 font-normal">
                  {restPart}
                </p>
              </div>
            );
          }

          return (
            <p
              key={i}
              className="text-base sm:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 mb-6 font-normal"
            >
              {para}
            </p>
          );
        })}
      </div>
    );
  }

  return null;
}
