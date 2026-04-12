import { client } from "@/lib/sanity";

// ✅ Types

export interface AboutStoryStatTheme {
  bgGradient?: string;
  valueColor?: string;
  labelColor?: string;
  borderColor?: string;
}

export interface AboutStoryStat {
  value?: string;
  label?: string;
  theme?: AboutStoryStatTheme;
}

export interface AboutStoryTheme {
  headingColor?: string;
  textColor?: string;
  imageOverlay?: string;
  cardBg?: string;
  cardBorder?: string;
}

export interface AboutStory {
  heading?: string;
  paragraphs?: string[];
  image?: {
    asset?: {
      url?: string;
    };
  };
  stats?: AboutStoryStat[];
  theme?: AboutStoryTheme;
}


// ✅ GROQ Query

export const ABOUT_STORY_QUERY = `
*[_type == "aboutPage"][0]{
  "aboutStory": sections[_type == "aboutStory"][0]{
    heading,
    paragraphs,
    image{
      asset->{
        url
      }
    },
    stats[]{
      value,
      label,
      theme{
        bgGradient,
        valueColor,
        labelColor,
        borderColor
      }
    },
    theme{
      headingColor,
      textColor,
      imageOverlay,
      cardBg,
      cardBorder
    }
  }
}
`;


// ✅ Fetch Function

export async function getAboutStory(): Promise<AboutStory | null> {
  const data = await client.fetch(ABOUT_STORY_QUERY);
  return data?.aboutStory || null;
}