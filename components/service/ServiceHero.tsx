"use client";

import { LuZap } from "react-icons/lu";
import type { ServicesHero as ServicesHeroData, ServicesHeroHeading } from "@/lib/data/service/servicesHeroData";

interface ServicesHeroProps {
  data: ServicesHeroData;
}

export function ServicesHero({ data }: ServicesHeroProps) {
  const { badgeText, heading, description, theme } = data;

  return (
    <section className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto md:px-4 px-4 lg:px-12">

        {/* Badge */}
        {badgeText && (
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
            style={{ background: theme?.badgeBg, borderColor: theme?.badgeBorder }}
          >
            <LuZap className="w-4 h-4" style={{ color: theme?.iconColor }} />
            <span className="text-sm" style={{ color: theme?.badgeText }}>
              {badgeText}
            </span>
          </div>
        )}

        {/* Heading */}
        {heading && heading.length > 0 && (
          <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-6 sm:mb-8 leading-tight max-w-4xl">
            {heading.map((segment: ServicesHeroHeading, index: number) => (
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
            ))}
          </h1>
        )}

        {/* Description */}
        {description && (
          <p
            className="text-base sm:text-xl leading-relaxed max-w-2xl"
            style={{ color: theme?.description }}
          >
            {description}
          </p>
        )}

      </div>
    </section>
  );
}