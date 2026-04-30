// lib/data/contact/contactLocationData.ts
import { client } from "@/lib/sanity";

// ✅ Types

export interface LocationTheme {
  iconColor?: string;
  bg?: string;
  border?: string;
  textPrimary?: string;
  textSecondary?: string;
}

export interface LocationCard {
  icon?: string;
  title?: string;
  address?: string[];
  description?: string;
  theme?: LocationTheme;
}

export interface BusinessHours {
  icon?: string;
  title?: string;
  hours?: string[];
  timezone?: string;
  theme?: LocationTheme;
}

export interface ContactLocation {
  locationCard?: LocationCard;
  businessHours?: BusinessHours;
  background?: string;
}


// ✅ GROQ Query
export const CONTACT_LOCATION_QUERY = `
*[_type == "contactPage"][0]{
  "contactLocation": sections[_type == "contactLocation"][0]{

    locationCard{
      icon,
      title,
      address,
      description,
      theme{
        iconColor,
        bg,
        border,
        textPrimary,
        textSecondary
      }
    },

    businessHours{
      icon,
      title,
      hours,
      timezone,
      theme{
        iconColor,
        bg,
        border,
        textPrimary,
        textSecondary
      }
    },

    background
  }
}
`;


// ✅ Fetch Function
export async function getContactLocation(): Promise<ContactLocation | null> {
  const data = await client.fetch(CONTACT_LOCATION_QUERY, {}, { cache: "no-store"});
  return data?.contactLocation || null;
}