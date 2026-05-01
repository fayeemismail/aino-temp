import { client } from "@/lib/sanity";
import { cache } from "react";

// ✅ Types

export interface AboutStatTheme {
  valueGradient?: string;
  labelColor?: string;
}

export interface AboutStat {
  value?: string;
  label?: string;
  theme?: AboutStatTheme;
}

export interface AboutStatsTheme {
  cardBgGradient?: string;
  borderColor?: string;
  glow?: string;
  defaultValueGradient?: string;
  labelColor?: string;
}

export interface AboutStats {
  stats?: AboutStat[];
  theme?: AboutStatsTheme;
}


// ✅ GROQ Query

export const ABOUT_STATS_QUERY = `
*[_type == "aboutPage"][0]{
  "aboutStats": sections[_type == "aboutStats"][0]{
    stats[]{
      value,
      label,
      theme{
        valueGradient,
        labelColor
      }
    },
    theme{
      cardBgGradient,
      borderColor,
      glow,
      defaultValueGradient,
      labelColor
    }
  }
}
`;


// ✅ Fetch Function

export const getAboutStats = cache(async (): Promise<AboutStats | null> => {
  const data = await client.fetch(
    ABOUT_STATS_QUERY,
    {},
    {
      next: { revalidate: 60 },
    }
  );

  return data?.aboutStats ?? null;
});