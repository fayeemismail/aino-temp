// lib/config/site.ts

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.ainorax.com";

export const GTM_ID =
  process.env.NEXT_PUBLIC_GTM_ID || "GTM-MHDFDVJT";

export const GA_ID =
  process.env.NEXT_PUBLIC_GA_ID || "G-N9JEHEQ812";

// Revalidate Time
export const REVALIDATE_TIME_LAYOUT = Number(
  process.env.NEXT_PUBLIC_REVALIDATE_LAYOUT || 604800
);

export const REVALIDATE_TIME_HOME = Number(
  process.env.NEXT_PUBLIC_REVALIDATE_HOME || 604800
);

export const REVALIDATE_TIME_SERVICE = Number(
  process.env.NEXT_PUBLIC_REVALIDATE_SERVICE || 1209600
);

export const REVALIDATE_TIME_ABOUT = Number(
  process.env.NEXT_PUBLIC_REVALIDATE_ABOUT || 604800
);

export const REVALIDATE_TIME_BLOG = Number(
  process.env.NEXT_PUBLIC_REVALIDATE_BLOG || 604800
);

export const REVALIDATE_TIME_CONTACT = Number(
  process.env.NEXT_PUBLIC_REVALIDATE_CONTACT || 604800
);

