// lib/data/blog/recentPostsData.ts
import { client } from "@/lib/sanity";
import { cache } from "react";

// ✅ Types
export interface RecentPostTheme {
  // Card
  cardBg?: string;
  cardHoverBg?: string;
  cardBorder?: string;

  // Image Overlay
  overlayGradient?: string;

  // Category
  categoryBg?: string;
  categoryText?: string;
  categoryBorder?: string;

  // Title
  titleColor?: string;
  titleHoverColor?: string;

  // Excerpt
  excerptColor?: string;

  // Meta
  metaColor?: string;
  authorColor?: string;
}

export interface RecentPostItem {
  title?: string;
  excerpt?: string;

  category?: string;
  readTime?: string;
  date?: string;
  author?: string;

  image?: string;

  theme?: RecentPostTheme;
}

export interface RecentPostsSection {
  heading?: string;
  posts?: RecentPostItem[];
}


// ✅ GROQ Query
export const RECENT_POSTS_QUERY = `
*[_type == "blogPage"][0]{
  "recentPosts": sections[_type == "recentPostsSection"][0]{

    heading,

    posts[]{
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
        cardHoverBg,
        cardBorder,
        overlayGradient,
        categoryBg,
        categoryText,
        categoryBorder,
        titleColor,
        titleHoverColor,
        excerptColor,
        metaColor,
        authorColor
      }
    }
  }
}
`;


// ✅ Fetch Function
export const getRecentPosts = cache(async (): Promise<RecentPostsSection | null> => {
  const data = await client.fetch(
    RECENT_POSTS_QUERY,
    {},
    {
      next: { revalidate: 60 },
    }
  );

  return data?.recentPosts ?? null;
});