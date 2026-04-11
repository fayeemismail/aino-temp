import { AboutPreview } from "@/components/home/AboutPreview";
import { BlogPreview } from "@/components/home/BlogPreview";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeCTA } from "@/components/home/HomeCTA";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { getAboutPreview } from "@/lib/data/home/aboutPreviewData";
import { getBlogPreview } from "@/lib/data/home/blogPreview";
import { getCTA } from "@/lib/data/home/homeCTA";
import { getHero } from "@/lib/data/home/heroData";
import { getServices } from "@/lib/data/home/serviceData";
import { getWhyChooseUs } from "@/lib/data/home/whyChooseUs";

export default async function Home() {
  const hero = await getHero();
  const services = await getServices();
  const whyChooseUs = await getWhyChooseUs();
  const about = await getAboutPreview();
  const blog = await getBlogPreview();
  const cta = await getCTA();

  return (
    <main>
      {hero && <HeroSection hero={hero} />}
      {services && <ServicesPreview services={services} />}
      {whyChooseUs && <WhyChooseUs data={whyChooseUs} />}
      {about && <AboutPreview data={about} />}
      {blog && <BlogPreview data={blog} />}
      {cta && <HomeCTA data={cta} />}
    </main>
  );
}