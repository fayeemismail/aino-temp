import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Ainorax – Transforming Ideas into Intelligent Digital Experiences",
  description:
    "Ainorax is a full-service technology agency specializing in modern web development, cutting-edge AI solutions, and data-driven growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* inline style ensures bg color is set before ANY CSS loads — prevents white flash */}
      <body
        className="min-h-screen bg-[#15233e]"
        style={{ backgroundColor: "#15233e", color: "white" }}
        suppressHydrationWarning
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}