import { ContactCTA } from "@/components/contact/ContactCTA";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactLocation } from "@/components/contact/ContactLocation";
import { ContactMain } from "@/components/contact/ContactMain";
import { getContactCTA } from "@/lib/data/contact/contactCTAData";
import { getContactHero } from "@/lib/data/contact/contactHeroData";
import { getContactLocation } from "@/lib/data/contact/contactLocationData";
import { getContactMain } from "@/lib/data/contact/contactMainData";

export const metadata = {
  title: "Contact Ainorax – Start Your Project",
  description:
    "Contact Ainorax to build your next web, AI, or digital solution.",
};

export default async function ContactPage() {
  const hero = await getContactHero();
  const main = await getContactMain();
  const contactLocation = await getContactLocation();
  const cta = await getContactCTA();

  return (
    <div className="min-h-screen pt-20">
      {hero && <ContactHero data={hero} />}
      {main && <ContactMain data={main} />}
      {contactLocation && <ContactLocation data={contactLocation} />}
      {cta && <ContactCTA data={cta} />}
    </div>
  );
}