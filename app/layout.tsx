import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { getNavbar } from "@/lib/data/common/navbarData";
import Loader from "@/components/common/Loader";
import { getBackground } from "@/lib/data/common/bgData";
import { getFooter } from "@/lib/data/common/footerData";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ainorax.com"),
  alternates: {
    canonical: "https://ainorax.com",
  },

  title: {
    default: "Ainorax – Intelligent Digital Experiences",
    template: "%s | Ainorax",
  },

  description:
    "Ainorax is a full-service technology agency specializing in modern web development, AI solutions, and data-driven growth.",

  keywords: [
    "Ainorax",
    "Web Development",
    "AI Solutions",
    "Digital Agency",
    "Software Development",
  ],

  openGraph: {
    title: "Ainorax – Intelligent Digital Experiences",
    description:
      "Transforming ideas into intelligent digital experiences with AI and modern development.",
    url: "https://www.ainorax.com",
    siteName: "Ainorax",
    images: [
      {
        url: "https://www.ainorax.com/og-image.png", // ⚠️ create this
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ainorax – Intelligent Digital Experiences",
    description:
      "AI-powered solutions, web development, and digital transformation.",
    images: ["https://www.ainorax.com/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export const revalidate = 300; 

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [
    navbarData,
    bg,
    footer
  ] = await Promise.all([
    getNavbar(),
    getBackground(),
    getFooter()
  ]);

  return (
    <html lang="en" suppressHydrationWarning>


      <body
        className="min-h-screen"
        style={{ backgroundColor: bg?.bgColor, color: "white" }}
        suppressHydrationWarning
      >
        <Navbar initialData={navbarData} />
        <main>
          <GoogleTagManager gtmId="GTM-MHDFDVJT" />
          {children}
          <GoogleAnalytics gaId="G-N9JEHEQ812" />
          {/* <Loader /> */}
        </main>
        {footer && <Footer data={footer} />}
      </body>
    </html>
  );
}