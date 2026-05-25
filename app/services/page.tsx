import { AdditionalCapabilities } from "@/components/service/AdditionalCapabilities";
import { MainServices } from "@/components/service/MainServices";
import { ServicesHero } from "@/components/service/ServiceHero";
import { ServicesComingSoon } from "@/components/service/ServicesComingSoon";
import { ServicesCTA } from "@/components/service/ServicesCTA";
import { REVALIDATE_TIME_SERVICE } from "@/lib/config/site";
import { getAdditionalCapabilities } from "@/lib/data/service/additionalCapabilitiesData";
import { getMainServices } from "@/lib/data/service/mainServicesData";
import { getServicesComingSoon } from "@/lib/data/service/servicesComingSoonData";
import { getServicesCTA } from "@/lib/data/service/servicesCTAData";
import { getServicesHero } from "@/lib/data/service/servicesHeroData";

export const metadata = {
  title: "Services – Web, AI & Digital Solutions | Ainorax",
  description:
    "Explore Ainorax services including web development, AI solutions, cloud, and digital transformation.",
};

export const revalidate = REVALIDATE_TIME_SERVICE; // services don't change often

export default async function ServicesPage() {
  const [
    hero,
    services,
    additional,
    comingSoon,
    cta
  ] = await Promise.all([
    getServicesHero(),
    getMainServices(),
    getAdditionalCapabilities(),
    getServicesComingSoon(),
    getServicesCTA()
  ]);

  return (
    <div className="min-h-screen pt-20">
      {hero && <ServicesHero data={hero} />}
      {services && <MainServices data={services} />}
      {additional && <AdditionalCapabilities data={additional} />}
      {comingSoon && <ServicesComingSoon data={comingSoon} />}
      {cta && <ServicesCTA data={cta} />}
    </div>
  );
}