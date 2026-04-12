// lib/data/contact/contactMainData.ts
import { client } from "@/lib/sanity";

// ✅ Types

export interface ComingSoonPanel {
  badgeText?: string;
  heading?: string;
  highlightText?: string;
  description?: string;
}

export interface RightIntro {
  heading?: string;
  description?: string;
}

export interface ContactCardTheme {
  gradient?: string;
  borderColor?: string;
  hoverBg?: string;
}

export interface ContactCard {
  icon?: string;
  title?: string;
  value?: string;
  description?: string;
  theme?: ContactCardTheme;
}

export interface QuickResponseTheme {
  gradient?: string;
  bg?: string;
  border?: string;
}

export interface QuickResponse {
  title?: string;
  description?: string;
  theme?: QuickResponseTheme;
}

export interface ContactMain {
  comingSoon?: ComingSoonPanel;
  rightIntro?: RightIntro;
  contactCards?: ContactCard[];
  quickResponse?: QuickResponse;
}


// ✅ GROQ Query
export const CONTACT_MAIN_QUERY = `
*[_type == "contactPage"][0]{
  "contactMain": sections[_type == "contactMain"][0]{

    // ✅ Coming Soon (flatten badge)
    comingSoon{
      "badgeText": badge.text,
      heading,
      highlightText,
      description
    },

    // ✅ Right Intro
    rightIntro{
      heading,
      description
    },

    // ✅ Contact Cards
    contactCards[]{
      icon,
      title,
      value,
      description,
      theme{
        gradient,
        borderColor,
        hoverBg
      }
    },

    // ✅ Quick Response
    quickResponse{
      title,
      description,
      theme{
        gradient,
        bg,
        border
      }
    }
  }
}
`;


// ✅ Fetch Function
export async function getContactMain(): Promise<ContactMain | null> {
  const data = await client.fetch(CONTACT_MAIN_QUERY);
  return data?.contactMain || null;
}