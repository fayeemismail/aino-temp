// lib/data/contact/contactHeroData.ts
import { client } from "@/lib/sanity";
import { cache } from "react";

// ✅ Types
export interface ContactHeroHeading {
  text?: string;
  highlight?: boolean;
}

export interface ContactHeroTheme {
  // Badge
  badgeBg?: string;
  badgeBorder?: string;
  badgeText?: string;

  // Heading
  headingPrimary?: string;
  headingGradient?: string;

  // Description
  descriptionColor?: string;
}

export interface ContactHero {
  badgeText?: string;
  badgeIcon?: string;
  heading?: ContactHeroHeading[];
  description?: string;
  theme?: ContactHeroTheme;
}


// ✅ GROQ Query
export const CONTACT_HERO_QUERY = `
*[_type == "contactPage"][0]{
  "contactHero": sections[_type == "contactHero"][0]{

    // ✅ Flatten badge
    "badgeText": badge.text,
    "badgeIcon": badge.icon,

    // ✅ Heading array
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
      descriptionColor
    }
  }
}
`;


// ✅ Fetch Function

export const getContactHero = cache(async (): Promise<ContactHero | null> => {
  const data = await client.fetch(
    CONTACT_HERO_QUERY,
    {},
    {
      next: { revalidate: 60 },
    }
  );

  return data?.contactHero ?? null;
});