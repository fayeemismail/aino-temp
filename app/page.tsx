import { AboutPreview } from "@/components/home/AboutPreview";
import { BlogPreview } from "@/components/home/BlogPreview";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeCTA } from "@/components/home/HomeCTA";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main >
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <AboutPreview />
      <BlogPreview />
      <HomeCTA />
    </main>
  );
}
