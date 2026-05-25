// types/services.ts

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface ServicesTheme {
  // Section
  sectionBg?: string;

  // Heading
  headingColor?: string;
  headingGradient?: string;

  // Description
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

export interface ServicesData {
  title?: string;
  description?: string;
  items?: ServiceItem[];
  showScrollHint?: boolean;
  theme?: ServicesTheme;
}

// Optional: Raw Sanity return type
export type ServicesSection = {
  title?: string | null;
  description?: string | null;
  items?: Array<{
    title?: string | null;
    description?: string | null;
    icon?: string | null;
    gradient?: string | null;
  } | null> | null;
  showScrollHint?: boolean | null;
  theme?: ServicesTheme | null;
};