// lib/data/services/mainServicesData.ts
import { client } from "@/lib/sanity";
import { cache } from "react";

// ✅ Types
export interface MainServiceItemTheme {
  iconBgGradient?: string;
  iconColor?: string;
  checkIconColor?: string;
}

export interface MainServiceItem {
  icon?: string;
  title?: string;
  description?: string;
  features?: string[];
  image?: string;
  gradient?: string;
  theme?: MainServiceItemTheme;
}

export interface MainServices {
  services?: MainServiceItem[];
}


// ✅ GROQ Query
export const MAIN_SERVICES_QUERY = `
*[_type == "servicesPage"][0]{
  "mainServices": sections[_type == "mainServices"][0]{
    services[]{
      icon,
      title,
      description,
      features,

      // ✅ Image URL flatten
      "image": image.asset->url,

      gradient,

      theme{
        iconBgGradient,
        iconColor,
        checkIconColor
      }
    }
  }
}
`;


// ✅ Fetch Function
export const getMainServices = cache(async (): Promise<MainServiceItem[] | null> => {
  const data = await client.fetch(
    MAIN_SERVICES_QUERY,
    {},
    {
      next: { revalidate: 60 },
    }
  );

  return data?.mainServices?.services ?? null;
});