import { AboutClosing } from "@/components/about/AboutClosing";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutProcess } from "@/components/about/AboutProcess";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutValues } from "@/components/about/AboutValues";

export const metadata = {
  title: "About – Ainorax",
  description:
    "Learn about Ainorax — our story, mission, values, and the team behind your digital transformation.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutProcess />
      <AboutStats />
      <AboutClosing /> 
    </div>
  );
}
