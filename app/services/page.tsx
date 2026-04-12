import { AdditionalCapabilities } from "@/components/service/AdditionalCapabilities";
import { MainServices } from "@/components/service/MainServices";
import { ServicesHero } from "@/components/service/ServiceHero";
import { ServicesComingSoon } from "@/components/service/ServicesComingSoon";
import { ServicesCTA } from "@/components/service/ServicesCTA";
import { getAdditionalCapabilities } from "@/lib/data/service/additionalCapabilitiesData";
import { getMainServices } from "@/lib/data/service/mainServicesData";
import { getServicesComingSoon } from "@/lib/data/service/servicesComingSoonData";
import { getServicesCTA } from "@/lib/data/service/servicesCTAData";
import { getServicesHero } from "@/lib/data/service/servicesHeroData";

export const metadata = {
  title: "Services – Ainorax",
  description:
    "Explore Ainorax's full range of services: web & mobile development, AI & data, digital commerce, cloud, QA, and support.",
};

export default async function ServicesPage() {
  const hero = await getServicesHero();
  const services = await getMainServices();
  const additional = await getAdditionalCapabilities();
  const comingSoon = await getServicesComingSoon();
  const cta = await getServicesCTA();

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