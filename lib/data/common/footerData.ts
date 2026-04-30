// lib/data/global/footerData.ts
import { client } from "@/lib/sanity";

// ✅ Types

export interface FooterBrand {
  main?: string;
  highlight?: string;
  description?: string;
}

export interface FooterLink {
  label?: string;
  path?: string;
}

export interface SocialLink {
  icon?: string;
  href?: string;
  label?: string;
}

export interface FooterContact {
  email?: string;
  phone?: string;
  location?: string;
}

export interface FooterBottomLink {
  label?: string;
  href?: string;
}

export interface FooterBottom {
  copyright?: string;
  links?: FooterBottomLink[];
}

export interface FooterTheme {
  background?: string;
  border?: string;

  textPrimary?: string;
  textSecondary?: string;
  textMuted?: string;

  highlight?: string;

  socialBg?: string;
  socialHoverBg?: string;
  socialIcon?: string;
  socialIconHover?: string;
}

export interface FooterData {
  brand?: FooterBrand;
  quickLinks?: FooterLink[];
  socialLinks?: SocialLink[];
  contact?: FooterContact;
  bottom?: FooterBottom;
  theme?: FooterTheme;
}


// ✅ GROQ Query
export const FOOTER_QUERY = `
*[_type == "footer"][0]{

  brand{
    main,
    highlight,
    description
  },

  quickLinks[]{
    label,
    path
  },

  socialLinks[]{
    icon,
    href,
    label
  },

  contact{
    email,
    phone,
    location
  },

  bottom{
    copyright,
    links[]{
      label,
      href
    }
  },

  theme{
    background,
    border,
    textPrimary,
    textSecondary,
    textMuted,
    highlight,
    socialBg,
    socialHoverBg,
    socialIcon,
    socialIconHover
  }
}
`;


// ✅ Fetch Function
export async function getFooter(): Promise<FooterData | null> {
  const data = await client.fetch(FOOTER_QUERY, {}, { cache: "no-store"});
  return data || null;
}