// lib/data/services/additionalCapabilitiesData.ts
import { client } from "@/lib/sanity";

// ✅ Types
export interface CapabilityTheme {
  // Card
  bg?: string;
  hoverBg?: string;
  border?: string;

  // Text
  titleColor?: string;
  titleHoverColor?: string;
  descriptionColor?: string;

  // Icon
  iconBgGradient?: string;
  iconColor?: string;
}

export interface CapabilityItem {
  icon?: string;
  title?: string;
  description?: string;
  theme?: CapabilityTheme;
}

export interface AdditionalCapabilitiesTheme {
  headingColor?: string;
  descriptionColor?: string;
}

export interface AdditionalCapabilities {
  heading?: string;
  description?: string;
  sectionTheme?: AdditionalCapabilitiesTheme;
  capabilities?: CapabilityItem[];
}


// ✅ GROQ Query
export const ADDITIONAL_CAPABILITIES_QUERY = `
*[_type == "servicesPage"][0]{
  "additionalCapabilities": sections[_type == "additionalCapabilities"][0]{
    
    heading,
    description,

    sectionTheme{
      headingColor,
      descriptionColor
    },

    capabilities[]{
      icon,
      title,
      description,

      theme{
        bg,
        hoverBg,
        border,
        titleColor,
        titleHoverColor,
        descriptionColor,
        iconBgGradient,
        iconColor
      }
    }
  }
}
`;


// ✅ Fetch Function
export async function getAdditionalCapabilities(): Promise<AdditionalCapabilities | null> {
  const data = await client.fetch(ADDITIONAL_CAPABILITIES_QUERY);
  return data?.additionalCapabilities || null;
}