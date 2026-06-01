// lib/data/home/blogPreview.ts

import { client } from "@/lib/sanity";
import { cache } from "react";

export interface BlogCard {
  title?: string;
  excerpt?: string;
  category?: string;
  readTime?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  slug?: string;
}

export interface BlogPreview {
  heading?: string;
  subheading?: string;

  cta?: {
    text?: string;
    link?: string;
    variant?: "primary" | "secondary" | "outline";
  };

  enableFeatured?: boolean;

  posts?: BlogCard[];

  theme?: {
    sectionBg?: string;

    heading?: string;
    subheading?: string;

    ctaText?: string;
    ctaHover?: string;

    featuredCardBg?: string;
    featuredCardBorder?: string;
    featuredOverlay?: string;

    categoryBg?: string;
    categoryText?: string;

    title?: string;
    titleHover?: string;
    excerpt?: string;
    meta?: string;

    cardBg?: string;
    cardBorder?: string;
    cardHover?: string;
  };
}

export const BLOG_PREVIEW_QUERY = `
*[_type == "home"][0]{
  blogPreview{
    heading,
    subheading,

    cta{
      text,
      link,
      variant
    },

    enableFeatured,

    posts[]{
      title,
      excerpt,
      category,
      readTime,
      "image": image.asset->url,
      "imageWidth": image.asset->metadata.dimensions.width,
      "imageHeight": image.asset->metadata.dimensions.height,
      "slug": slug.current
    },

    theme{
      sectionBg,

      heading,
      subheading,

      ctaText,
      ctaHover,

      featuredCardBg,
      featuredCardBorder,
      featuredOverlay,

      categoryBg,
      categoryText,

      title,
      titleHover,
      excerpt,
      meta,

      cardBg,
      cardBorder,
      cardHover
    }
  }
}
`;

export const getBlogPreview = cache(async (): Promise<BlogPreview | null> => {
  const data = await client.fetch(
    BLOG_PREVIEW_QUERY,
    {},
    {
      next: { revalidate: 60 },
    }
  );

  return data?.blogPreview ?? null;
});