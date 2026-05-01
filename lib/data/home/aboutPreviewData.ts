//lib/data/home/aboutPreviewData
import { client } from "@/lib/sanity";
import { cache } from "react";



export interface AboutPreview {
  image: any; // later you can type with SanityImageAsset
  badge?: {
    text?: string;
  };
  title?: string;
  descriptionPrimary?: string;
  descriptionSecondary?: string;
  cta?: {
    text?: string;
    link?: string;
    variant?: "primary" | "secondary" | "outline";
  };
  experience?: {
    value?: string;
    label?: string;
  };
  enableFloatingBadge?: boolean;
  theme?: {
    sectionBg?: string;
    imageOverlay?: string;
    badgeBg?: string;
    badgeBorder?: string;
    badgeText?: string;
    title?: string;
    descriptionPrimary?: string;
    descriptionSecondary?: string;
    ctaBg?: string;
    ctaHover?: string;
    ctaText?: string;
    ctaBorder?: string;
    floatingBadgeGradient?: string;
    floatingBadgeText?: string;
  };
}


export const ABOUT_QUERY = `
*[_type == "home"][0]{
  aboutPreview{
    "image": image.asset->url,
    badge{
      text
    },
    title,
    descriptionPrimary,
    descriptionSecondary,
    cta{
      text,
      link,
      variant
    },
    experience{
      value,
      label
    },
    enableFloatingBadge,
    theme{
      sectionBg,
      imageOverlay,
      badgeBg,
      badgeBorder,
      badgeText,
      title,
      descriptionPrimary,
      descriptionSecondary,
      ctaBg,
      ctaHover,
      ctaText,
      ctaBorder,
      floatingBadgeGradient,
      floatingBadgeText
    }
  }
}
`;



export const getAboutPreview = cache(async (): Promise<AboutPreview | null> => {
  const data = await client.fetch(
    ABOUT_QUERY,
    {},
    {
      next: { revalidate: 60 },
    }
  );

  return data?.aboutPreview ?? null;
});