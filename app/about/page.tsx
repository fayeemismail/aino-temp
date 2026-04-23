import { AboutClosing } from "@/components/about/AboutClosing";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutProcess } from "@/components/about/AboutProcess";
import { AboutStats } from "@/components/about/AboutStats";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutValues } from "@/components/about/AboutValues";
import { getAboutClosing } from "@/lib/data/about/aboutClosingData";
import { getAboutHero } from "@/lib/data/about/aboutHeroData";
import { getAboutProcess } from "@/lib/data/about/aboutProcessData";
import { getAboutStats } from "@/lib/data/about/aboutStatsData";
import { getAboutStory } from "@/lib/data/about/aboutStoryData";
import { getAboutValues } from "@/lib/data/about/aboutValuesData";

export const metadata = {
  title: "About Ainorax – Our Story & Vision",
  description:
    "Discover Ainorax's mission, values, and team driving digital transformation through AI and modern technology.",
  openGraph: {
    title: "About Ainorax",
    description:
      "Learn about our journey, mission, and innovative approach.",
    url: "https://www.ainorax.com/about",
  },
};

export default async function AboutPage() {
  const aboutHero = await getAboutHero();
  const aboutStory = await getAboutStory();
  const aboutValues = await getAboutValues();
  const aboutProcess = await getAboutProcess();
  const aboutStats = await getAboutStats();
  const closing = await getAboutClosing();

  return (
    <div className="min-h-screen pt-20">
      {aboutHero && <AboutHero data={aboutHero} />}
      {aboutStory && <AboutStory data={aboutStory} />}
      {aboutValues && <AboutValues data={aboutValues} />}
      {aboutProcess && <AboutProcess data={aboutProcess} />}
      {aboutStats && <AboutStats data={aboutStats} />}
      {closing && <AboutClosing data={closing} />}
    </div>
  );
}