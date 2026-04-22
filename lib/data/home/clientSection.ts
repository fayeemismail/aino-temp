import { client } from "@/lib/sanity";

// ✅ Types

export interface ClientCard {
  name: string;
  description?: string;
  tag?: string;
  image?: string;
}

export interface ClientsTheme {
  sectionBg?: string;
  heading?: string;
  subtitle?: string;
  cardBorder?: string;
  overlayGradient?: string;
  tagBg?: string;
  tagText?: string;
  nameColor?: string;
  descColor?: string;
}

export interface ClientsSection {
  title?: string;
  subtitle?: string;
  clients?: ClientCard[];
  theme?: ClientsTheme;
}


// ✅ GROQ Query

export const CLIENTS_SECTION_QUERY = `
*[_type == "home"][0]{
  clientsSection{
    title,
    subtitle,
    clients[]{
      name,
      description,
      tag,
      "image": image.asset->url
    },
    theme{
      sectionBg,
      heading,
      subtitle,
      cardBorder,
      overlayGradient,
      tagBg,
      tagText,
      nameColor,
      descColor
    }
  }
}
`;


// ✅ Fetch Function

export const getClientsSection = async (): Promise<ClientsSection | null> => {
  try {
    const data = await client.fetch(CLIENTS_SECTION_QUERY);
    return data?.clientsSection || null;
  } catch (error) {
    console.error("Error fetching clients section:", error);
    return null;
  }
};