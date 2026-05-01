// lib/data/blog/blogHeroData.ts
import { client } from "@/lib/sanity";
import { cache } from "react";

// ✅ Types
export interface BlogHeroHeading {
  text?: string;
  highlight?: boolean;
}

export interface BlogHeroTheme {
  // Badge
  badgeBg?: string;
  badgeBorder?: string;
  badgeText?: string;

  // Heading
  headingPrimary?: string;
  headingGradient?: string;

  // Description
  descriptionColor?: string;

  // Background Glow
  glowGradient?: string;
}

export interface BlogHero {
  badgeText?: string;
  heading?: BlogHeroHeading[];
  description?: string;
  theme?: BlogHeroTheme;
}


// ✅ GROQ Query
export const BLOG_HERO_QUERY = `
*[_type == "blogPage"][0]{
  "blogHero": sections[_type == "blogHero"][0]{

    // ✅ Flatten badge
    "badgeText": badge.text,

    // ✅ Heading array
    heading[]{
      text,
      highlight
    },

    description,

    // 🎨 Theme
    theme{
      badgeBg,
      badgeBorder,
      badgeText,
      headingPrimary,
      headingGradient,
      descriptionColor,
      glowGradient
    }
  }
}
`;


// ✅ Fetch Function
export const getBlogHero = cache(async (): Promise<BlogHero | null> => {
  const data = await client.fetch(
    BLOG_HERO_QUERY,
    {},
    {
      next: { revalidate: 60 },
    }
  );

  return data?.blogHero ?? null;
});