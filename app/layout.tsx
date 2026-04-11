// layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { getNavbar } from "@/lib/data/common/navbarData";
import Loader from "@/components/common/Loader";

export const metadata: Metadata = {
  title: "Ainorax – Transforming Ideas into Intelligent Digital Experiences",
  description:
    "Ainorax is a full-service technology agency specializing in modern web development, cutting-edge AI solutions, and data-driven growth.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbarData = await getNavbar();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="min-h-screen bg-[#15233e]"
        style={{ backgroundColor: "#15233e", color: "white" }}
        suppressHydrationWarning
      >
        <Navbar initialData={navbarData} />
        <main>
          <Loader />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}