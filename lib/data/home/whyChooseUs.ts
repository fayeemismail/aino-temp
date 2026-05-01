import { client } from "@/lib/sanity";
import { cache } from "react";

export interface WhyChooseItem {
  title: string;
  description: string;
}

export interface WhyChooseTheme {
  backgroundDecoration?: string;
  heading?: string;
  subtitle?: string;
  cardBg?: string;
  cardBorder?: string;
  numberColor?: string;
  itemTitle?: string;
  itemDescription?: string;
  hoverOverlayGradient?: string;
}

export interface WhyChooseUsSection {
  title: string;
  subtitle: string;
  showBackgroundDecoration?: boolean;
  items: WhyChooseItem[];
  theme?: WhyChooseTheme;
}

export interface HomePageData {
  whyChooseUs: WhyChooseUsSection;
}



export const whyChooseUsQuery = `
  *[_type == "home"][0]{
    whyChooseUs{
      title,
      subtitle,
      showBackgroundDecoration,
      items[]{
        title,
        description
      },
      theme{
        backgroundDecoration,
        heading,
        subtitle,
        cardBg,
        cardBorder,
        numberColor,
        itemTitle,
        itemDescription,
        hoverOverlayGradient
      }
    }
  }
`;


export const getWhyChooseUs = cache(async (): Promise<WhyChooseUsSection | null> => {
  const data = await client.fetch(
    whyChooseUsQuery,
    {},
    {
      next: { revalidate: 60 },
    }
  );

  return data?.whyChooseUs ?? null;
});