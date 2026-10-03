/**
 * Strapi v4 Type Definitions for Digital Horizon Solutions
 */

export interface StrapiMediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface StrapiMediaAttributes {
  name: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: StrapiMediaFormat;
    small?: StrapiMediaFormat;
    medium?: StrapiMediaFormat;
    large?: StrapiMediaFormat;
  } | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string | null;
  provider: string;
  createdAt: string;
  updatedAt: string;
}

export interface StrapiEntity<T> {
  id: number;
  attributes: T;
}

export type StrapiRelationSingle<T> = {
  data: StrapiEntity<T> | null;
};

export type StrapiRelationMulti<T> = {
  data: StrapiEntity<T>[];
};

export type StrapiMediaData = StrapiEntity<StrapiMediaAttributes>;

export type StrapiMediaField =
  | { data: StrapiMediaData | null }
  | { data: StrapiMediaData[] | null }
  | null;

export interface StrapiCategoryAttributes {
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string | null;
}

export interface StrapiAuthorAttributes {
  name: string;
  role?: string | null;
  avatar?: StrapiMediaField;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string | null;
}

// Strapi Rich Text Blocks
export interface StrapiBlockTextChild {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}

export interface StrapiBlockLinkChild {
  type: "link";
  url: string;
  children: StrapiBlockTextChild[];
}

export type StrapiBlockInlineNode = StrapiBlockTextChild | StrapiBlockLinkChild;

export interface StrapiParagraphBlock {
  type: "paragraph";
  children: StrapiBlockInlineNode[];
}

export interface StrapiHeadingBlock {
  type: "heading";
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: StrapiBlockInlineNode[];
}

export interface StrapiListBlock {
  type: "list";
  format: "ordered" | "unordered";
  children: Array<{
    type: "list-item";
    children: StrapiBlockInlineNode[];
  }>;
}

export interface StrapiQuoteBlock {
  type: "quote";
  children: StrapiBlockInlineNode[];
}

export interface StrapiCodeBlock {
  type: "code";
  children: StrapiBlockInlineNode[];
}

export interface StrapiImageBlock {
  type: "image";
  image?: {
    name?: string;
    alternativeText?: string | null;
    url: string;
    width?: number;
    height?: number;
    formats?: Record<string, StrapiMediaFormat>;
  };
  children?: StrapiBlockInlineNode[];
}

export type StrapiBlock =
  | StrapiParagraphBlock
  | StrapiHeadingBlock
  | StrapiListBlock
  | StrapiQuoteBlock
  | StrapiCodeBlock
  | StrapiImageBlock
  | { type: string; children?: any[]; [key: string]: any };

export interface StrapiBlogPostAttributes {
  title: string;
  slug: string;
  excerpt: string;
  readTime?: number | null;
  featured?: boolean | null;
  content: StrapiBlock[] | string;
  coverImage?: StrapiMediaField;
  seoTitle?: string | null;
  seoDescription?: string | null;
  author?: StrapiRelationSingle<StrapiAuthorAttributes>;
  category?: StrapiRelationSingle<StrapiCategoryAttributes>;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string | null;
}

export interface StrapiPaginationMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface StrapiCollectionResponse<T> {
  data: StrapiEntity<T>[];
  meta?: StrapiPaginationMeta;
  error?: {
    status: number;
    name: string;
    message: string;
    details?: any;
  };
}

export interface StrapiSingleResponse<T> {
  data: StrapiEntity<T> | null;
  meta?: Record<string, any>;
  error?: {
    status: number;
    name: string;
    message: string;
    details?: any;
  };
}

/**
 * Normalized application-level types consumed by React components
 */
export interface NormalizedAuthor {
  id: number;
  name: string;
  role?: string;
  avatarUrl: string;
}

export interface NormalizedCategory {
  id: number;
  name: string;
  slug: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug?: string;
  imageUrl: string;
  author: {
    name: string;
    avatarUrl: string;
    role?: string;
  };
  date: string;
  rawDate: string;
  readTime: string;
  featured: boolean;
  content: StrapiBlock[] | string;
  seoTitle?: string;
  seoDescription?: string;
}
