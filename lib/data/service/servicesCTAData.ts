// lib/data/services/servicesCTAData.ts
import { client } from "@/lib/sanity";
import { cache } from "react";

// ✅ Types
export interface CTAButton {
  link?: string;
  text?: string;
  variant?: string;
}

export interface ServicesCTATheme {
  background?: string;

  // Text
  headingColor?: string;
  descriptionColor?: string;

  // Button
  buttonGradient?: string;
  buttonTextColor?: string;
}

export interface ServicesCTA {
  heading?: string;
  description?: string;
  primaryButton?: CTAButton;
  theme?: ServicesCTATheme;
}


// ✅ GROQ Query
export const SERVICES_CTA_QUERY = `
*[_type == "servicesPage"][0]{
  "servicesCTA": sections[_type == "servicesCTA"][0]{

    heading,
    description,

    // ✅ Flatten button
    primaryButton{
      text,
      link,
      variant
    },

    theme{
      background,
      headingColor,
      descriptionColor,
      buttonGradient,
      buttonTextColor
    }
  }
}
`;


// ✅ Fetch Function
export const getServicesCTA = cache(async (): Promise<ServicesCTA | null> => {
  const data = await client.fetch(
    SERVICES_CTA_QUERY,
    {},
    {
      next: { revalidate: 60 },
    }
  );

  return data?.servicesCTA ?? null;
});