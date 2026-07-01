"use client";

import { motion } from "framer-motion";
import { LuAward } from "react-icons/lu";
import type { IconType } from "react-icons";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import type { AboutClosing as AboutClosingData } from "@/lib/data/about/aboutClosingData";

interface AboutClosingProps {
  data: AboutClosingData;
}

const iconMap: Record<string, IconType> = {
  award: LuAward,
};

export function AboutClosing({ data }: AboutClosingProps) {
  const { heading, description, icon, cta, theme } = data;
  const Icon = icon ? iconMap[icon] : undefined;

  return (
    <section className="py-32 relative" style={{ background: theme?.background }}>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: theme?.glow }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {Icon && (
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: theme?.iconBg }}
            >
              <Icon className="w-10 h-10" style={{ color: theme?.iconColor }} />
            </div>
          )}

          {heading && (
            <h2
              className="text-4xl lg:text-5xl leading-tight"
              style={{ color: theme?.headingColor }}
            >
              {heading}
            </h2>
          )}

          {description && (
            <p className="text-xl leading-relaxed" style={{ color: theme?.descriptionColor }}>
              {description}
            </p>
          )}

          {cta?.link && cta?.text && (
            <div className="pt-4">
              <Link href={cta.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300"
                  style={{ background: cta.theme?.bgGradient, color: cta.theme?.textColor }}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (cta.theme?.hoverGradient) e.currentTarget.style.background = cta.theme.hoverGradient;
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (cta.theme?.bgGradient) e.currentTarget.style.background = cta.theme.bgGradient;
                  }}
                  data-track-click="cta_click"
                  data-track-category="engagement"
                  data-track-label={`About Closing CTA - ${cta.text}`}
                >
                  {cta.text}
                  <LuArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}