import { client } from "@/lib/sanity";
import { cache } from "react";

// lib/data/home/heroData.ts (update with these types)
export interface HeroHeading {
  text: string;
  highlight: boolean;
}

export interface HeroBadge {
  text: string;
}

export interface HeroButton {
  text: string;
  link: string;
  variant: 'primary' | 'secondary';
}

export interface HeroTheme {
  badgeBg: string;           // e.g. "#60A5FA10"
  badgeBorder: string;       // e.g. "#60A5FA33"
  badgeText: string;         // e.g. "#60A5FA"
  iconColor: string;         // e.g. "#1760FC"
  description: string;       // e.g. "#E5E7EB"
  buttonBg: string;
  buttonHover: string;

  // Most flexible approach:
  headingGradient: string;   // Full CSS value
  buttonGradient: string;    // Full CSS value
}

export interface Hero {
  badge: HeroBadge;
  description: string;
  heading: HeroHeading[];
  primaryButton: HeroButton;
  showFloatingIcons: boolean;
  theme: HeroTheme;
}

export const HERO_QUERY = `
  *[_type == "home"][0]{
    hero{
      badge{
        text
      },
      heading[]{
        text,
        highlight
      },
      description,
      primaryButton{
        text,
        link,
        variant
      },
      theme{
        badgeBg,
        badgeBorder,
        badgeText,
        headingPrimary,
        headingGradient,
        description,
        buttonBg,
        buttonHover,
        iconColor
      },
      showFloatingIcons
    }
  }
`;

export const getHero = cache(async (): Promise<Hero | null> => {
  const data = await client.fetch(HERO_QUERY, {}, {
    next: { revalidate: 60 }
  });

  return data?.hero ?? null;
});