import { client } from "@/lib/sanity";

// ✅ Types

export interface AboutProcessStepTheme {
  gradient?: string;
  hoverGradient?: string;
  cardBg?: string;
  cardHoverBg?: string;
  borderColor?: string;
  textColor?: string;
  numberColor?: string;
  glowGradient?: string;
}

export interface AboutProcessStep {
  number?: string;
  title?: string;
  description?: string;
  theme?: AboutProcessStepTheme;
}

export interface AboutProcessTheme {
  headingColor?: string;
  subheadingColor?: string;
  defaultCardBg?: string;
  defaultBorder?: string;
  floatingBg?: {
    color?: string;
  };
}

export interface AboutProcess {
  heading?: string;
  subheading?: string;
  steps?: AboutProcessStep[];
  theme?: AboutProcessTheme;
}


// ✅ GROQ Query

export const ABOUT_PROCESS_QUERY = `
*[_type == "aboutPage"][0]{
  "aboutProcess": sections[_type == "aboutProcess"][0]{
    heading,
    subheading,
    steps[]{
      number,
      title,
      description,
      theme{
        gradient,
        hoverGradient,
        cardBg,
        cardHoverBg,
        borderColor,
        textColor,
        numberColor,
        glowGradient
      }
    },
    theme{
      headingColor,
      subheadingColor,
      defaultCardBg,
      defaultBorder,
      floatingBg{
        color
      }
    }
  }
}
`;


// ✅ Fetch Function

export async function getAboutProcess(): Promise<AboutProcess | null> {
  const data = await client.fetch(ABOUT_PROCESS_QUERY);
  return data?.aboutProcess || null;
}