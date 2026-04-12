// lib/data/global/bgData.ts
import { client } from "@/lib/sanity";

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
export async function getBackground(): Promise<BackgroundData | null> {
  const data = await client.fetch(BACKGROUND_QUERY);
  return data || null;
}