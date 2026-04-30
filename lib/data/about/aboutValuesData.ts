import { client } from "@/lib/sanity";

// ✅ Types

export interface AboutValueCardTheme {
  cardBg?: string;
  cardHoverBg?: string;
  borderColor?: string;
  iconBgGradient?: string;
  iconColor?: string;
  titleColor?: string;
  titleHoverColor?: string;
  textColor?: string;
  glowGradient?: string;
}

export interface AboutValue {
  icon?: string;
  title?: string;
  description?: string;
  theme?: AboutValueCardTheme;
}

export interface AboutValuesTheme {
  headingColor?: string;
  subheadingColor?: string;
  defaultCardBg?: string;
  defaultBorder?: string;
}

export interface AboutValues {
  heading?: string;
  subheading?: string;
  values?: AboutValue[];
  theme?: AboutValuesTheme;
}


// ✅ GROQ Query

export const ABOUT_VALUES_QUERY = `
*[_type == "aboutPage"][0]{
  "aboutValues": sections[_type == "aboutValues"][0]{
    heading,
    subheading,
    values[]{
      icon,
      title,
      description,
      theme{
        cardBg,
        cardHoverBg,
        borderColor,
        iconBgGradient,
        iconColor,
        titleColor,
        titleHoverColor,
        textColor,
        glowGradient
      }
    },
    theme{
      headingColor,
      subheadingColor,
      defaultCardBg,
      defaultBorder
    }
  }
}
`;


// ✅ Fetch Function

export async function getAboutValues(): Promise<AboutValues | null> {
  const data = await client.fetch(ABOUT_VALUES_QUERY, {}, { cache: "no-store"});
  return data?.aboutValues || null;
}