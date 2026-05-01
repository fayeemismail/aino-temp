import { client } from "@/lib/sanity";
import { cache } from "react";

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

export const getAboutClosing = cache(async (): Promise<AboutClosing | null> => {
  const data = await client.fetch(
    ABOUT_CLOSING_QUERY,
    {},
    {
      next: { revalidate: 60 },
    }
  );

  return data?.aboutClosing ?? null;
});