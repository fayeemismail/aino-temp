// lib/data/global/loaderData.ts
import { client } from "@/lib/sanity";
import { cache } from "react";

// ✅ Types
export interface LoaderTheme {
  // Background
  background?: string;

  // Logo
  logoGradient?: string;
  logoTextColor?: string;
  logoHighlightColor?: string;

  // Ring
  ringColor?: string;

  // Loader row
  iconColor?: string;
  loadingTextColor?: string;

  // Progress
  progressGradient?: string;
  progressBg?: string;

  // Footer
  footerColor?: string;
}

export interface LoaderData {
  brandMain?: string;
  brandHighlight?: string;

  loadingText?: string;
  footerText?: string;

  theme?: LoaderTheme;
}


// ✅ GROQ Query
export const LOADER_QUERY = `
*[_type == "loader"][0]{

  // ✅ Flatten brand
  "brandMain": brand.main,
  "brandHighlight": brand.highlight,

  loadingText,
  footerText,

  theme{
    background,
    logoGradient,
    logoTextColor,
    logoHighlightColor,
    ringColor,
    iconColor,
    loadingTextColor,
    progressGradient,
    progressBg,
    footerColor
  }
}
`;


// ✅ Fetch Function
export const getLoader = cache(async (): Promise<LoaderData | null> => {
  const data = await client.fetch(
    LOADER_QUERY,
    {},
    {
      next: { revalidate: 60 },
    }
  );

  return data ?? null;
});