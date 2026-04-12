//lib/data/about/aboutHeroData
import { client } from "@/lib/sanity";


// ✅ Types
export interface AboutHeroTheme {
  badgeBg?: string;
  badgeText?: string;
  heading?: string;
  highlightGradient?: string;
  description?: string;
}

export interface AboutHero {
  badgeText?: string;
  heading?: string;
  highlightText?: string;
  description?: string;
  theme?: AboutHeroTheme;
}


// ✅ GROQ Query
export const ABOUT_HERO_QUERY = `
*[_type == "aboutPage"][0]{
  "aboutHero": sections[_type == "aboutHero"][0]{
    badgeText,
    heading,
    highlightText,
    description,
    theme{
      badgeBg,
      badgeText,
      heading,
      highlightGradient,
      description
    }
  }
}
`;


// ✅ Fetch Function
export async function getAboutHero(): Promise<AboutHero | null> {
  const data = await client.fetch(ABOUT_HERO_QUERY);
  return data?.aboutHero || null;
}