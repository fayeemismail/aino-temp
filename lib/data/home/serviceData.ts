import { client } from "@/lib/sanity";
import { cache } from "react";

export interface ServiceItem {
  title: string;
  description: string;
  icon: "code" | "brain" | "cart" | "cloud" | "megaphone" | "search";
  gradient: string;
}

export interface ServicesTheme {
  sectionBg?: string;
  heading?: string;
  description?: string;
  cardBg?: string;
  cardBorder?: string;
  cardHoverOverlay?: string;
  iconGradient?: string;
  titleHoverGradient?: string;
  arrowBg?: string;
  arrowBorder?: string;
  arrowText?: string;
  scrollHintText?: string;
}

export interface ServicesSection {
  title?: string;
  description?: string;
  showScrollHint?: boolean;
  theme?: ServicesTheme;
  items?: ServiceItem[];
}

export interface HomeData {
  services?: ServicesSection;
}


export const servicesQuery = `
  *[_type == "home"][0]{
    services{
      title,
      description,
      showScrollHint,
      theme{
        sectionBg,
        heading,
        description,
        cardBg,
        cardBorder,
        cardHoverOverlay,
        iconGradient,
        titleHoverGradient,
        arrowBg,
        arrowBorder,
        arrowText,
        scrollHintText
      },
      items[]{
        title,
        description,
        icon,
        gradient
      }
    }
  }
`;



export const getServices = cache(async (): Promise<ServicesSection | null> => {
  const data: HomeData = await client.fetch(
    servicesQuery,
    {},
    {
      next: { revalidate: 60 }, // revalidate every 60 seconds
    }
  );

  return data?.services ?? null;
});