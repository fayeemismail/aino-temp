import { client } from "@/lib/sanity";

// ✅ Types

export interface AboutClosingCTATheme {
  bgGradient?: string;
  textColor?: string;
  hoverGradient?: string;
}

export interface AboutClosingCTA {
  text?: string;
  link?: string;
  theme?: AboutClosingCTATheme;
}

export interface AboutClosingTheme {
  background?: string;
  headingColor?: string;
  descriptionColor?: string;
  iconColor?: string;
  iconBg?: string;
  glow?: string;
}

export interface AboutClosing {
  heading?: string;
  description?: string;
  icon?: string;
  cta?: AboutClosingCTA;
  theme?: AboutClosingTheme;
}


// ✅ GROQ Query

export const ABOUT_CLOSING_QUERY = `
*[_type == "aboutPage"][0]{
  "aboutClosing": sections[_type == "aboutClosing"][0]{
    heading,
    description,
    icon,
    cta{
      text,
      link,
      theme{
        bgGradient,
        textColor,
        hoverGradient
      }
    },
    theme{
      background,
      headingColor,
      descriptionColor,
      iconColor,
      iconBg,
      glow
    }
  }
}
`;


// ✅ Fetch Function

export async function getAboutClosing(): Promise<AboutClosing | null> {
  const data = await client.fetch(ABOUT_CLOSING_QUERY, {}, { cache: "no-store"});
  return data?.aboutClosing || null;
}