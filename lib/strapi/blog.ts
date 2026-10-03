import {
  strapiFetch,
  getStrapiMediaUrl,
  FALLBACK_BLOG_IMAGE,
  FALLBACK_AVATAR_IMAGE,
} from "./client";
import {
  StrapiCollectionResponse,
  StrapiBlogPostAttributes,
  StrapiCategoryAttributes,
  StrapiEntity,
  BlogPost,
  NormalizedCategory,
} from "./types";

/**
 * Format ISO date string into human-readable date e.g. "20 Jan 2026"
 */
export function formatBlogDate(isoDateString?: string | null): string {
  if (!isoDateString) return "Recent";
  try {
    const d = new Date(isoDateString);
    if (isNaN(d.getTime())) return "Recent";
    return d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "Recent";
  }
}

/**
 * Normalizes a raw Strapi blog post entity into a clean, UI-ready BlogPost object.
 * Guaranteed null-safe for all fields.
 */
export function normalizeBlogPost(entity: StrapiEntity<StrapiBlogPostAttributes>): BlogPost {
  const { id, attributes } = entity;
  if (!attributes) {
    return {
      id: String(id),
      slug: `post-${id}`,
      title: "Untitled Post",
      excerpt: "",
      category: "Insights",
      imageUrl: FALLBACK_BLOG_IMAGE,
      author: {
        name: "Digital Horizon Team",
        avatarUrl: FALLBACK_AVATAR_IMAGE,
        role: "Editorial Team",
      },
      date: "Recent",
      rawDate: new Date().toISOString(),
      readTime: "5 min read",
      featured: false,
      content: [],
    };
  }

  // Safe category
  const categoryName =
    attributes.category?.data?.attributes?.name || "Insights";
  const categorySlug =
    attributes.category?.data?.attributes?.slug || undefined;

  // Safe author
  const authorData = attributes.author?.data;
  const authorName = authorData?.attributes?.name || "Digital Horizon Team";
  const authorRole = authorData?.attributes?.role || undefined;
  const authorAvatarUrl = getStrapiMediaUrl(
    authorData?.attributes?.avatar,
    FALLBACK_AVATAR_IMAGE
  );

  // Safe cover image
  const imageUrl = getStrapiMediaUrl(
    attributes.coverImage,
    FALLBACK_BLOG_IMAGE
  );

  // Safe read time
  const readTimeNumber = attributes.readTime;
  const readTimeStr =
    readTimeNumber && readTimeNumber > 0
      ? `${readTimeNumber} min read`
      : "5 min read";

  // Date
  const dateStr = formatBlogDate(attributes.publishedAt || attributes.createdAt);

  return {
    id: String(id),
    slug: attributes.slug || `post-${id}`,
    title: attributes.title || "Untitled Post",
    excerpt: attributes.excerpt || "",
    category: categoryName,
    categorySlug,
    imageUrl,
    author: {
      name: authorName,
      avatarUrl: authorAvatarUrl,
      role: authorRole,
    },
    date: dateStr,
    rawDate: attributes.publishedAt || attributes.createdAt || new Date().toISOString(),
    readTime: readTimeStr,
    featured: Boolean(attributes.featured),
    content: attributes.content || [],
    seoTitle: attributes.seoTitle || undefined,
    seoDescription: attributes.seoDescription || undefined,
  };
}

export interface GetBlogPostsOptions {
  category?: string;
  page?: number;
  pageSize?: number;
  revalidate?: number;
}

/**
 * Fetch published blog posts from Strapi with relations and pagination.
 */
export async function getBlogPosts(
  options: GetBlogPostsOptions = {}
): Promise<{ posts: BlogPost[]; total: number }> {
  const { category, page = 1, pageSize = 25, revalidate = 60 } = options;

  const params = new URLSearchParams();
  params.append("populate[coverImage]", "*");
  params.append("populate[author][populate][avatar]", "*");
  params.append("populate[category]", "*");
  params.append("sort[0]", "publishedAt:desc");
  params.append("pagination[page]", String(page));
  params.append("pagination[pageSize]", String(pageSize));

  if (category && category !== "All") {
    // Check both name and slug for flexibility
    params.append("filters[$or][0][category][name][$eqi]", category);
    params.append("filters[$or][1][category][slug][$eqi]", category);
  }

  const endpoint = `/api/blog-posts?${params.toString()}`;
  const response = await strapiFetch<StrapiCollectionResponse<StrapiBlogPostAttributes>>(
    endpoint,
    { revalidate }
  );

  if (!response || !response.data || !Array.isArray(response.data)) {
    return { posts: [], total: 0 };
  }

  const posts = response.data.map(normalizeBlogPost);
  const total = response.meta?.pagination?.total ?? posts.length;

  return { posts, total };
}

/**
 * Fetch a single blog post by its unique slug.
 */
export async function getBlogPostBySlug(
  slug: string,
  revalidate: number = 60
): Promise<BlogPost | null> {
  if (!slug || typeof slug !== "string") return null;

  const params = new URLSearchParams();
  params.append("filters[slug][$eq]", slug);
  params.append("populate[coverImage]", "*");
  params.append("populate[author][populate][avatar]", "*");
  params.append("populate[category]", "*");

  const endpoint = `/api/blog-posts?${params.toString()}`;
  const response = await strapiFetch<StrapiCollectionResponse<StrapiBlogPostAttributes>>(
    endpoint,
    { revalidate }
  );

  if (!response || !response.data || response.data.length === 0) {
    return null;
  }

  return normalizeBlogPost(response.data[0]);
}

/**
 * Fetch the featured blog post.
 * Prefers posts with featured=true; falls back to the latest published post.
 */
export async function getFeaturedBlogPost(
  revalidate: number = 60
): Promise<BlogPost | null> {
  const params = new URLSearchParams();
  params.append("filters[featured][$eq]", "true");
  params.append("populate[coverImage]", "*");
  params.append("populate[author][populate][avatar]", "*");
  params.append("populate[category]", "*");
  params.append("sort[0]", "publishedAt:desc");
  params.append("pagination[limit]", "1");

  const endpoint = `/api/blog-posts?${params.toString()}`;
  const response = await strapiFetch<StrapiCollectionResponse<StrapiBlogPostAttributes>>(
    endpoint,
    { revalidate }
  );

  if (response && response.data && response.data.length > 0) {
    return normalizeBlogPost(response.data[0]);
  }

  // Fallback to latest post if no explicitly marked featured post exists
  const fallback = await getBlogPosts({ pageSize: 1, revalidate });
  return fallback.posts[0] || null;
}

/**
 * Fetch all published categories.
 */
export async function getCategories(
  revalidate: number = 60
): Promise<NormalizedCategory[]> {
  const endpoint = `/api/categories?sort[0]=name:asc`;
  const response = await strapiFetch<StrapiCollectionResponse<StrapiCategoryAttributes>>(
    endpoint,
    { revalidate }
  );

  if (!response || !response.data || !Array.isArray(response.data)) {
    return [];
  }

  return response.data.map((item) => ({
    id: item.id,
    name: item.attributes.name,
    slug: item.attributes.slug,
  }));
}
