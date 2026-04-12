"use client";

import { motion } from "framer-motion";
import { LuEye, LuTarget, LuUsers } from "react-icons/lu";
import type { IconType } from "react-icons";
import type { AboutValues as AboutValuesData, AboutValue } from "@/lib/data/about/aboutValuesData";

interface AboutValuesProps {
  data: AboutValuesData;
}

const iconMap: Record<string, IconType> = {
  target: LuTarget,
  eye: LuEye,
  users: LuUsers,
};

export function AboutValues({ data }: AboutValuesProps) {
  const { heading, subheading, values, theme } = data;

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {heading && (
            <h2 className="text-4xl lg:text-5xl mb-4" style={{ color: theme?.headingColor }}>
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="text-lg" style={{ color: theme?.subheadingColor }}>
              {subheading}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values?.map((value: AboutValue, index: number) => {
            const Icon = value.icon ? iconMap[value.icon] : undefined;

            return (
              <motion.div
                key={value.title ?? index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative"
              >
                <div
                  className="relative p-8 backdrop-blur-lg rounded-3xl border overflow-hidden h-full transition-all duration-500"
                  style={{
                    background: value.theme?.cardBg ?? theme?.defaultCardBg,
                    borderColor: value.theme?.borderColor ?? theme?.defaultBorder,
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    if (value.theme?.cardHoverBg) e.currentTarget.style.background = value.theme.cardHoverBg;
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.background = value.theme?.cardBg ?? theme?.defaultCardBg ?? "";
                  }}
                >
                  {Icon && (
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.8 }}
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                      style={{ background: value.theme?.iconBgGradient }}
                    >
                      <Icon className="w-8 h-8" style={{ color: value.theme?.iconColor }} />
                    </motion.div>
                  )}

                  {value.title && (
                    <h3
                      className="text-2xl mb-4 transition-colors duration-300"
                      style={{ color: value.theme?.titleColor }}
                      onMouseEnter={(e: React.MouseEvent<HTMLHeadingElement>) => {
                        if (value.theme?.titleHoverColor) e.currentTarget.style.color = value.theme.titleHoverColor;
                      }}
                      onMouseLeave={(e: React.MouseEvent<HTMLHeadingElement>) => {
                        if (value.theme?.titleColor) e.currentTarget.style.color = value.theme.titleColor;
                      }}
                    >
                      {value.title}
                    </h3>
                  )}

                  {value.description && (
                    <p className="leading-relaxed" style={{ color: value.theme?.textColor }}>
                      {value.description}
                    </p>
                  )}

                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-3xl"
                    style={{ background: value.theme?.glowGradient }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}