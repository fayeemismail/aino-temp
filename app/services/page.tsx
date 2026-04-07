import { AdditionalCapabilities } from "@/components/service/AdditionalCapabilities";
import { MainServices } from "@/components/service/MainServices";
import { ServicesHero } from "@/components/service/ServiceHero";
import { ServicesComingSoon } from "@/components/service/ServicesComingSoon";
import { ServicesCTA } from "@/components/service/ServicesCTA";


export const metadata = {
  title: "Services – Ainorax",
  description:
    "Explore Ainorax's full range of services: web & mobile development, AI & data, digital commerce, cloud, QA, and support.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      <ServicesHero />
      <MainServices />
      <AdditionalCapabilities />
      <ServicesComingSoon />
      <ServicesCTA />
    </div>
  );
}
