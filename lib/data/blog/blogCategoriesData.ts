// lib/data/blog/blogCategoriesData.ts
import { client } from "@/lib/sanity";

// ✅ Types
export interface BlogCategoriesTheme {
  // Active
  activeGradient?: string;
  activeText?: string;

  // Inactive
  bg?: string;
  hoverBg?: string;
  text?: string;
  border?: string;
}

export interface BlogCategories {
  defaultActive?: string;
  categories?: string[];
  theme?: BlogCategoriesTheme;
}


// ✅ GROQ Query
export const BLOG_CATEGORIES_QUERY = `
*[_type == "blogPage"][0]{
  "blogCategories": sections[_type == "blogCategories"][0]{

    defaultActive,

    categories,

    theme{
      activeGradient,
      activeText,
      bg,
      hoverBg,
      text,
      border
    }
  }
}
`;


// ✅ Fetch Function
export async function getBlogCategories(): Promise<BlogCategories | null> {
  const data = await client.fetch(BLOG_CATEGORIES_QUERY);
  return data?.blogCategories || null;
}