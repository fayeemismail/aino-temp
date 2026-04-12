"use client";

import { motion } from "framer-motion";
import { LuBot, LuDatabase, LuLock, LuSmartphone, LuTrendingUp, LuZap } from "react-icons/lu";
import type { IconType } from "react-icons";
import type { AdditionalCapabilities as AdditionalCapabilitiesData, CapabilityItem } from "@/lib/data/service/additionalCapabilitiesData";

interface AdditionalCapabilitiesProps {
  data: AdditionalCapabilitiesData;
}

const iconMap: Record<string, IconType> = {
  LuSmartphone: LuSmartphone,
  LuDatabase: LuDatabase,
  LuBot: LuBot,
  LuTrendingUp: LuTrendingUp,
  LuLock: LuLock,
  LuZap: LuZap,
};

export function AdditionalCapabilities({ data }: AdditionalCapabilitiesProps) {
  const { heading, description, sectionTheme, capabilities } = data;

  return (
    <section className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {heading && (
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl mb-4"
              style={{ color: sectionTheme?.headingColor }}
            >
              {heading}
            </h2>
          )}
          {description && (
            <p className="text-lg" style={{ color: sectionTheme?.descriptionColor }}>
              {description}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities?.map((cap: CapabilityItem, index: number) => {
            const Icon = cap.icon ? iconMap[cap.icon] : undefined;

            return (
              <motion.div
                key={cap.title ?? index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 backdrop-blur-lg rounded-2xl border transition-all duration-300"
                style={{ background: cap.theme?.bg, borderColor: cap.theme?.border }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  if (cap.theme?.hoverBg) e.currentTarget.style.background = cap.theme.hoverBg;
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  if (cap.theme?.bg) e.currentTarget.style.background = cap.theme.bg;
                }}
              >
                <div className="flex items-start gap-4">
                  {Icon && (
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: cap.theme?.iconBgGradient }}
                    >
                      <Icon className="w-6 h-6" style={{ color: cap.theme?.iconColor }} />
                    </motion.div>
                  )}
                  <div>
                    {cap.title && (
                      <h3
                        className="mb-1 transition-colors duration-300"
                        style={{ color: cap.theme?.titleColor }}
                        onMouseEnter={(e: React.MouseEvent<HTMLHeadingElement>) => {
                          if (cap.theme?.titleHoverColor) e.currentTarget.style.color = cap.theme.titleHoverColor;
                        }}
                        onMouseLeave={(e: React.MouseEvent<HTMLHeadingElement>) => {
                          if (cap.theme?.titleColor) e.currentTarget.style.color = cap.theme.titleColor;
                        }}
                      >
                        {cap.title}
                      </h3>
                    )}
                    {cap.description && (
                      <p className="text-sm" style={{ color: cap.theme?.descriptionColor }}>
                        {cap.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}