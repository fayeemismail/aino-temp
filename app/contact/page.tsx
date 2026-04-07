import { ContactCTA } from "@/components/contact/ContactCTA";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactLocation } from "@/components/contact/ContactLocation";
import { ContactMain } from "@/components/contact/ContactMain";


export const metadata = {
  title: "Contact – Ainorax",
  description:
    "Get in touch with Ainorax. We'd love to hear about your project and discuss how we can help.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <ContactHero />
      <ContactMain />
      <ContactLocation />
      <ContactCTA />
    </div>
  );
}
