export interface HeroHeading {
  highlight: boolean;
  text: string;
}

export interface HeroButton {
  link: string;
  text: string;
  variant?: 'primary' | 'secondary';
}

export interface HeroTheme {
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  buttonBg: string;
  buttonHover: string;
  description: string;
  headingGradient: string;
  headingPrimary: string;
  iconColor: string;
}

export interface HeroData {
  badge?: { text?: string };
  description?: string;
  heading?: HeroHeading[];
  primaryButton?: HeroButton;
  showFloatingIcons?: boolean;
  theme?: HeroTheme;
}