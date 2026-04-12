// lib/data/contact/contactCTAData.ts
import { client } from "@/lib/sanity";

// ✅ Types
export interface ContactCTATheme {
  textPrimary?: string;
  textSecondary?: string;
  gradientText?: string;
}

export interface ContactCTA {
  headingBefore?: string;
  headingHighlight?: string;
  description?: string;
  theme?: ContactCTATheme;
}


// ✅ GROQ Query
export const CONTACT_CTA_QUERY = `
*[_type == "contactPage"][0]{
  "contactCTA": sections[_type == "contactCTA"][0]{

    // ✅ Flatten heading
    "headingBefore": heading.beforeHighlight,
    "headingHighlight": heading.highlight,

    description,

    theme{
      textPrimary,
      textSecondary,
      gradientText
    }
  }
}
`;


// ✅ Fetch Function
export async function getContactCTA(): Promise<ContactCTA | null> {
  const data = await client.fetch(CONTACT_CTA_QUERY);
  return data?.contactCTA || null;
}