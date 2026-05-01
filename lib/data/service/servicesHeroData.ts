// lib/data/services/servicesHeroData.ts
import { client } from "@/lib/sanity";
import { cache } from "react";

// ✅ Types
export interface ServicesHeroHeading {
  text?: string;
  highlight?: boolean;
}

export interface ServicesHeroTheme {
  badgeBg?: string;
  badgeBorder?: string;
  badgeText?: string;

  headingPrimary?: string;
  headingGradient?: string;

  description?: string;

  iconColor?: string;
}

export interface ServicesHero {
  badgeText?: string;
  heading?: ServicesHeroHeading[];
  description?: string;
  theme?: ServicesHeroTheme;
}


// ✅ GROQ Query
export const SERVICES_HERO_QUERY = `
*[_type == "servicesPage"][0]{
  "servicesHero": sections[_type == "servicesHero"][0]{
    
    // Flatten badge
    "badgeText": badge.text,

    // Heading array
    heading[]{
      text,
      highlight
    },

    description,

    theme{
      badgeBg,
      badgeBorder,
      badgeText,
      headingPrimary,
      headingGradient,
      description,
      iconColor
    }
  }
}
`;


// ✅ Fetch Function
export const getServicesHero = cache(async (): Promise<ServicesHero | null> => {
  const data = await client.fetch(
    SERVICES_HERO_QUERY,
    {},
    {
      next: { revalidate: 60 },
    }
  );

  return data?.servicesHero ?? null;
});