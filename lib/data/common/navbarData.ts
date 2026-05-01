import { client } from "@/lib/sanity";
import { cache } from "react";

export interface NavbarLogo {
  textPrimary: string;
  textSecondary: string;
  link: string;
  image?: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface NavbarTheme {
  background: string;
  backgroundScrolled: string;
  mobileBackground: string;

  text: string;
  textSecondary: string;
  textHover: string;
  textActive: string;

  accent: string;
  border: string;

  gradient: string;
  hoverUnderline: string;
}

export interface Navbar {
  logo: NavbarLogo;
  navItems: NavItem[];
  variant: "transparent" | "solid" | "glass";
  theme: NavbarTheme;
}



const navbarQuery = `
*[_type == "navbar"][0]{
  logo{
    textPrimary,
    textSecondary,
    link,
    "image": image.asset->url
  },

  navItems[]{
    label,
    path
  },

  variant,

  theme{
    background,
    backgroundScrolled,
    mobileBackground,

    text,
    textSecondary,
    textHover,
    textActive,

    accent,
    border,

    gradient,
    hoverUnderline
  }
}
`;


export const getNavbar = cache(async (): Promise<Navbar | null> => {
  try {
    const data = await client.fetch(
      navbarQuery,
      {},
      {
        next: { revalidate: 60 },
      }
    );

    return data ?? null;
  } catch (error) {
    console.error("Navbar fetch error:", error);
    return null;
  }
});