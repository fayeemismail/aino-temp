// lib/data/services/servicesComingSoonData.ts
import { client } from "@/lib/sanity";

// ✅ Types
export interface ComingSoonHeading {
  text?: string;
  highlight?: boolean;
}

export interface ServicesComingSoonTheme {
  // Card
  cardBgGradient?: string;
  cardBorder?: string;

  // Badge
  badgeBg?: string;
  badgeBorder?: string;
  badgeText?: string;

  // Heading
  headingPrimary?: string;
  headingGradient?: string;

  // Description
  descriptionColor?: string;

  // Icon
  iconColor?: string;
  iconGlow?: string;

  // Progress
  progressBg?: string;
  progressGradient?: string;

  // Tags
  tagBg?: string;
  tagBorder?: string;
  tagText?: string;

  // Particles
  particleColor?: string;
}

export interface ServicesComingSoon {
  badgeText?: string;
  heading?: ComingSoonHeading[];
  description?: string;
  technologies?: string[];
  theme?: ServicesComingSoonTheme;
}


// ✅ GROQ Query
export const SERVICES_COMING_SOON_QUERY = `
*[_type == "servicesPage"][0]{
  "servicesComingSoon": sections[_type == "servicesComingSoon"][0]{

    // ✅ Flatten badge
    "badgeText": badge.text,

    // ✅ Heading array
    heading[]{
      text,
      highlight
    },

    description,

    // ✅ Tech tags
    technologies,

    // 🎨 Theme
    theme{
      cardBgGradient,
      cardBorder,

      badgeBg,
      badgeBorder,
      badgeText,

      headingPrimary,
      headingGradient,

      descriptionColor,

      iconColor,
      iconGlow,

      progressBg,
      progressGradient,

      tagBg,
      tagBorder,
      tagText,

      particleColor
    }
  }
}
`;


// ✅ Fetch Function
export async function getServicesComingSoon(): Promise<ServicesComingSoon | null> {
  const data = await client.fetch(SERVICES_COMING_SOON_QUERY, {}, { cache: "no-store"});
  return data?.servicesComingSoon || null;
}