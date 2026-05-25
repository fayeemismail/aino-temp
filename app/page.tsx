import { AboutPreview } from "@/components/home/AboutPreview";
import { BlogPreview } from "@/components/home/BlogPreview";
import { ClientsSection } from "@/components/home/ClientSection";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeCTA } from "@/components/home/HomeCTA";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { getAboutPreview } from "@/lib/data/home/aboutPreviewData";
import { getBlogPreview } from "@/lib/data/home/blogPreview";
import { getClientsSection } from "@/lib/data/home/clientSection";
import { getCTA } from "@/lib/data/home/homeCTA";
import { getHero } from "@/lib/data/home/heroData";
import { getServices } from "@/lib/data/home/serviceData";
import { getWhyChooseUs } from "@/lib/data/home/whyChooseUs";
import { REVALIDATE_TIME_HOME } from "@/lib/config/site";

export const revalidate = REVALIDATE_TIME_HOME;

export default async function Home() {
  const [
    hero,
    services,
    whyChooseUs,
    about,
    clients,
    blog,
    cta
  ] = await Promise.all([
    getHero(),
    getServices(),
    getWhyChooseUs(),
    getAboutPreview(),
    getClientsSection(),
    getBlogPreview(),
    getCTA()
  ]);

  return (
    <main>
      {hero && <HeroSection hero={hero} />}
      {services && <ServicesPreview services={services} />}
      {whyChooseUs && <WhyChooseUs data={whyChooseUs} />}
      {about && <AboutPreview data={about} />}
      {clients && <ClientsSection data={clients} />}
      {blog && <BlogPreview data={blog} />}
      {cta && <HomeCTA data={cta} />}
    </main>
  );
}