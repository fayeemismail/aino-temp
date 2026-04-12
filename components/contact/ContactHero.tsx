"use client";

import { LuMail } from "react-icons/lu";
import type { IconType } from "react-icons";
import type { ContactHero as ContactHeroData, ContactHeroHeading } from "@/lib/data/contact/contactHeroData";

interface ContactHeroProps {
  data: ContactHeroData;
}

const iconMap: Record<string, IconType> = {
  LuMail: LuMail,
};

export function ContactHero({ data }: ContactHeroProps) {
  const { badgeText, badgeIcon, heading, description, theme } = data;
  const Icon = badgeIcon ? iconMap[badgeIcon] : undefined;

  return (
    <section className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="max-w-3xl">

          {/* Badge */}
          {badgeText && (
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
              style={{ background: theme?.badgeBg, borderColor: theme?.badgeBorder }}
            >
              {Icon && <Icon className="w-4 h-4" style={{ color: theme?.badgeText }} />}
              <span className="text-sm" style={{ color: theme?.badgeText }}>
                {badgeText}
              </span>
            </div>
          )}

          {/* Heading */}
          {heading && heading.length > 0 && (
            <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-6 leading-tight">
              {heading.map((segment: ContactHeroHeading, index: number) =>
                segment.highlight ? (
                  <span
                    key={index}
                    className="text-transparent bg-clip-text"
                    style={{ backgroundImage: theme?.headingGradient }}
                  >
                    {index > 0 ? " " : ""}{segment.text}
                  </span>
                ) : (
                  <span key={index} style={{ color: theme?.headingPrimary }}>
                    {segment.text}{index < heading.length - 1 ? " " : ""}
                  </span>
                )
              )}
            </h1>
          )}

          {/* Description */}
          {description && (
            <p
              className="text-base sm:text-xl leading-relaxed"
              style={{ color: theme?.descriptionColor }}
            >
              {description}
            </p>
          )}

        </div>
      </div>
    </section>
  );
}