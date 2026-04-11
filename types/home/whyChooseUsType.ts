export interface WhyChooseUsItem {
  title: string;
  description: string;
}

export interface WhyChooseUsTheme {
  backgroundDecoration?: string;
  cardBg?: string;
  cardBorder?: string;
  heading?: string;
  hoverOverlayGradient?: string;
  itemDescription?: string;
  itemTitle?: string;
  numberColor?: string;
  subtitle?: string;
}

export interface WhyChooseUsData {
  items: WhyChooseUsItem[];
  title: string;
  subtitle: string;
  showBackgroundDecoration?: boolean;        // Made optional to match real Sanity data
  theme?: WhyChooseUsTheme;                   // Made optional for safety
}