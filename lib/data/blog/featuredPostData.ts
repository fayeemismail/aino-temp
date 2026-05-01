// lib/data/blog/featuredPostData.ts
import { client } from "@/lib/sanity";
import { cache } from "react";

// ✅ Types
export interface FeaturedPostTheme {
  // Card
  cardBg?: string;
  cardBorder?: string;

  // Image Overlay
  overlayGradient?: string;

  // Category Badge
  categoryBg?: string;
  categoryText?: string;

  // Meta
  metaText?: string;

  // Title
  titleColor?: string;
  titleHoverColor?: string;

  // Excerpt
  excerptColor?: string;
}

export interface FeaturedPost {
  title?: string;
  excerpt?: string;

  category?: string;
  readTime?: string;
  date?: string;
  author?: string;

  image?: string;

  theme?: FeaturedPostTheme;
}


// ✅ GROQ Query
export const FEATURED_POST_QUERY = `
*[_type == "blogPage"][0]{
  "featuredPost": sections[_type == "featuredPostSection"][0]{

    title,
    excerpt,

    category,
    readTime,
    date,
    author,

    // ✅ Flatten image
    "image": image.asset->url,

    theme{
      cardBg,
      cardBorder,
      overlayGradient,
      categoryBg,
      categoryText,
      metaText,
      titleColor,
      titleHoverColor,
      excerptColor
    }
  }
}
`;


// ✅ Fetch Function
export const getFeaturedPost = cache(async (): Promise<FeaturedPost | null> => {
  const data = await client.fetch(
    FEATURED_POST_QUERY,
    {},
    {
      next: { revalidate: 60 },
    }
  );

  return data?.featuredPost ?? null;
});