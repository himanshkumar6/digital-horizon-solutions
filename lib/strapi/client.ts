import {
  StrapiMediaField,
  StrapiMediaData,
} from "./types";

/**
 * Returns the normalized Strapi base URL.
 * Server prefers STRAPI_API_URL, then NEXT_PUBLIC_STRAPI_URL, fallback to http://localhost:1337
 */
export function getStrapiBaseUrl(): string {
  const url =
    (typeof window === "undefined"
      ? process.env.STRAPI_API_URL || process.env.NEXT_PUBLIC_STRAPI_URL
      : process.env.NEXT_PUBLIC_STRAPI_URL) || "http://localhost:1337";

  return url.replace(/\/+$/, "");
}

/**
 * Fallback image when no media is uploaded
 */
export const FALLBACK_BLOG_IMAGE =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop";

export const FALLBACK_AVATAR_IMAGE =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=160&auto=format&fit=crop";

/**
 * Safely resolves any Strapi media URL (relative or absolute) to a browser-ready URL.
 */
export function getStrapiMediaUrl(
  input?: StrapiMediaField | StrapiMediaData | string | null,
  fallback: string = FALLBACK_BLOG_IMAGE
): string {
  if (!input) return fallback;

  let rawUrl: string | null = null;

  if (typeof input === "string") {
    rawUrl = input;
  } else if ("attributes" in input) {
    rawUrl = input.attributes?.url || null;
  } else if ("data" in input && input.data) {
    if (Array.isArray(input.data)) {
      rawUrl = input.data[0]?.attributes?.url || null;
    } else {
      rawUrl = input.data.attributes?.url || null;
    }
  }

  if (!rawUrl || typeof rawUrl !== "string" || rawUrl.trim() === "") {
    return fallback;
  }

  const trimmed = rawUrl.trim();

  // Already an absolute URL (e.g. S3, Cloudinary, external CDN)
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }

  // Relative URL from Strapi local provider (e.g. /uploads/image.png)
  const baseUrl = getStrapiBaseUrl();
  const normalizedPath = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return `${baseUrl}${normalizedPath}`;
}

export interface StrapiFetchOptions extends RequestInit {
  revalidate?: number | false;
  tags?: string[];
}

/**
 * Centralized fetch helper for Strapi REST API with timeout, ISR caching and defensive error handling.
 */
export async function strapiFetch<T>(
  path: string,
  options: StrapiFetchOptions = {}
): Promise<T | null> {
  const baseUrl = getStrapiBaseUrl();
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${baseUrl}${cleanPath}`;

  const { revalidate = 60, tags, headers, ...restOptions } = options;

  const requestHeaders: Record<string, string> = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...(headers as Record<string, string>),
  };

  // If server-side token is configured, attach authorization header
  const token = typeof window === "undefined" ? process.env.STRAPI_API_TOKEN : undefined;
  if (token && !requestHeaders.Authorization) {
    requestHeaders.Authorization = `Bearer ${token}`;
  }

  const fetchInit: RequestInit & { next?: { revalidate?: number | false; tags?: string[] } } = {
    ...restOptions,
    headers: requestHeaders,
    signal: AbortSignal.timeout(8000), // 8s defensive timeout
  };

  // Next.js caching / ISR control
  if (revalidate !== undefined) {
    fetchInit.next = {
      revalidate,
      ...(tags ? { tags } : {}),
    };
  }

  try {
    const res = await fetch(url, fetchInit);

    if (!res.ok) {
      if (res.status === 404) {
        return null;
      }
      console.warn(
        `[Strapi Client] API returned status ${res.status} for ${cleanPath}: ${res.statusText}`
      );
      return null;
    }

    const data: T = await res.json();
    return data;
  } catch (error: any) {
    // Gracefully handle offline Strapi, timeouts, DNS failures
    if (error?.name === "TimeoutError" || error?.name === "AbortError") {
      console.warn(`[Strapi Client] Request timed out for ${url}`);
    } else {
      console.warn(`[Strapi Client] Network/Connection failure for ${url}:`, error?.message || error);
    }
    return null;
  }
}
