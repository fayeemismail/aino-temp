// lib/data/global/bgData.ts
import { client } from "@/lib/sanity";
import { cache } from "react";

// ✅ Types
export interface BackgroundData {
  bgColor?: string;
}


// ✅ GROQ Query
export const BACKGROUND_QUERY = `
*[_type == "background"][0]{
  bgColor
}
`;


// ✅ Fetch Function
export const getBackground = cache(async (): Promise<BackgroundData | null> => {
  const data = await client.fetch(
    BACKGROUND_QUERY,
    {},
    {
      next: { revalidate: 60 },
    }
  );

  return data ?? null;
});