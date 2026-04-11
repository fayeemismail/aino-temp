import { client } from "@/lib/sanity";


// ✅ Types
export interface CTAButton {
  text?: string;
  link?: string;
  variant?: "primary" | "secondary" | "outline";
}

export interface CTATheme {
  sectionBg?: string;
  glowGradient?: string;
  heading?: string;
  highlightGradient?: string;
  description?: string;
  primaryBg?: string;
  primaryText?: string;
  secondaryBg?: string;
  secondaryHover?: string;
  secondaryText?: string;
  secondaryBorder?: string;
}

export interface CTAData {
  heading?: string;
  highlightText?: string;
  description?: string;

  primaryButton?: CTAButton;
  secondaryButton?: CTAButton;

  enableGlow?: boolean;

  theme?: CTATheme;
}


// ✅ GROQ Query
export const CTA_QUERY = `
*[_type == "home"][0]{
  cta{
    heading,
    highlightText,
    description,

    primaryButton{
      text,
      link,
      variant
    },

    secondaryButton{
      text,
      link,
      variant
    },

    enableGlow,

    theme{
      sectionBg,
      glowGradient,
      heading,
      highlightGradient,
      description,
      primaryBg,
      primaryText,
      secondaryBg,
      secondaryHover,
      secondaryText,
      secondaryBorder
    }
  }
}
`;


// ✅ Fetch Function
export async function getCTA(): Promise<CTAData | null> {
  const data = await client.fetch(CTA_QUERY);
  return data?.cta || null;
}