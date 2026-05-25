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

  // Heading
  headingColor?: string;
  headingGradient?: string;

  description?: string;

  // Card
  cardBg?: string;
  cardBorder?: string;
  cardHoverOverlay?: string;

  // Icon
  iconGradient?: string;

  // Title hover gradient
  titleHoverGradient?: string;

  // Arrows
  arrowBg?: string;
  arrowBorder?: string;
  arrowText?: string;

  // Scroll hint
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

        headingColor,
        headingGradient,

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

export const getServices = cache(
  async (): Promise<ServicesSection | null> => {
    const data: HomeData = await client.fetch(
      servicesQuery,
      {},
      {
        next: { revalidate: 60 },
      }
    );

    return data?.services ?? null;
  }
);