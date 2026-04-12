"use client";

import { LuMapPin, LuPhone } from "react-icons/lu";
import type { IconType } from "react-icons";
import type { ContactLocation as ContactLocationData } from "@/lib/data/contact/contactLocationData";

interface ContactLocationProps {
  data: ContactLocationData;
}

const iconMap: Record<string, IconType> = {
  LuMapPin: LuMapPin,
  LuPhone: LuPhone,
};

export function ContactLocation({ data }: ContactLocationProps) {
  const { locationCard, businessHours, background } = data;

  const LocationIcon = locationCard?.icon ? iconMap[locationCard.icon] : undefined;
  const HoursIcon = businessHours?.icon ? iconMap[businessHours.icon] : undefined;

  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 w-96 h-96 rounded-full blur-3xl"
        style={{ background }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Location Card */}
          {locationCard && (
            <div
              className="p-8 backdrop-blur-lg rounded-3xl border"
              style={{ background: locationCard.theme?.bg, borderColor: locationCard.theme?.border }}
            >
              {LocationIcon && (
                <LocationIcon className="w-12 h-12 mb-6" style={{ color: locationCard.theme?.iconColor }} />
              )}
              {locationCard.title && (
                <h3 className="text-2xl mb-4 font-medium" style={{ color: locationCard.theme?.textPrimary }}>
                  {locationCard.title}
                </h3>
              )}
              {locationCard.address && locationCard.address.length > 0 && (
                <p className="leading-relaxed mb-4" style={{ color: locationCard.theme?.textSecondary }}>
                  {locationCard.address.map((line: string, i: number) => (
                    <span key={i}>
                      {line}
                      {i < locationCard.address!.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              )}
              {locationCard.description && (
                <p className="text-sm" style={{ color: locationCard.theme?.textSecondary, opacity: 0.85 }}>
                  {locationCard.description}
                </p>
              )}
            </div>
          )}

          {/* Business Hours Card */}
          {businessHours && (
            <div
              className="p-8 backdrop-blur-lg rounded-3xl border"
              style={{ background: businessHours.theme?.bg, borderColor: businessHours.theme?.border }}
            >
              {HoursIcon && (
                <div className="inline-block mb-6">
                  <HoursIcon className="w-12 h-12" style={{ color: businessHours.theme?.iconColor }} />
                </div>
              )}
              {businessHours.title && (
                <h3 className="text-2xl mb-4 font-medium" style={{ color: businessHours.theme?.textPrimary }}>
                  {businessHours.title}
                </h3>
              )}
              {businessHours.hours && businessHours.hours.length > 0 && (
                <div className="space-y-2" style={{ color: businessHours.theme?.textSecondary }}>
                  {businessHours.hours.map((line: string, i: number) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )}
              {businessHours.timezone && (
                <p className="text-sm mt-4" style={{ color: businessHours.theme?.textSecondary, opacity: 0.85 }}>
                  {businessHours.timezone}
                </p>
              )}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}