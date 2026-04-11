// types/services.ts

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;        // 'code' | 'brain' | 'cart' | 'cloud'
  gradient: string;
}

export interface ServicesTheme {
  arrowBg?: string;
  arrowBorder?: string;
  arrowText?: string;
  cardBg?: string;
  cardBorder?: string;
  cardHoverOverlay?: string;
  description?: string;
  heading?: string;
  iconGradient?: string;
  scrollHintText?: string;
  sectionBg?: string;
  titleHoverGradient?: string;
}

export interface ServicesData {
  title?: string;
  description?: string;
  items?: ServiceItem[];
  showScrollHint?: boolean;
  theme?: ServicesTheme;
}

// Optional: Type for what Sanity actually returns
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