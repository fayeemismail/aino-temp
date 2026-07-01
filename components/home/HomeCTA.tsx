"use client";

import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import Link from "next/link";
import type { CTAData } from "@/lib/data/home/homeCTA";

interface HomeCTAProps {
  data: CTAData;
}

export function HomeCTA({ data }: HomeCTAProps) {
  const { heading, highlightText, description, primaryButton, secondaryButton, enableGlow, theme } = data;

  return (
    <section className="py-32 relative overflow-hidden" style={{ background: theme?.sectionBg }}>
      {enableGlow && (
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full blur-3xl pointer-events-none"
          style={{ background: theme?.glowGradient }}
        />
      )}

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl lg:text-6xl leading-tight" style={{ color: theme?.heading }}>
            {heading}{" "}
            {highlightText && (
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: theme?.highlightGradient }}
              >
                {highlightText}
              </span>
            )}
          </h2>

          {description && (
            <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: theme?.description }}>
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            {primaryButton?.link && primaryButton?.text && (
              <Link href={primaryButton.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 rounded-full font-medium flex items-center gap-2"
                  style={{ background: theme?.primaryBg, color: theme?.primaryText }}
                  data-track-click="cta_click"
                  data-track-category="engagement"
                  data-track-label={`Home CTA - ${primaryButton.text}`}
                >
                  {primaryButton.text}
                  <LuArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>
            )}

            {secondaryButton?.link && secondaryButton?.text ? (
              <Link href={secondaryButton.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full font-medium transition-all duration-300 border"
                  style={{
                    background: theme?.secondaryBg,
                    color: theme?.secondaryText,
                    borderColor: theme?.secondaryBorder,
                  }}
                  data-track-click="cta_click"
                  data-track-category="engagement"
                  data-track-label={`Home CTA Secondary - ${secondaryButton.text}`}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (theme?.secondaryHover) e.currentTarget.style.background = theme.secondaryHover;
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (theme?.secondaryBg) e.currentTarget.style.background = theme.secondaryBg;
                  }}
                >
                  {secondaryButton.text}
                </motion.button>
              </Link>
            ) : secondaryButton?.text ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-medium transition-all duration-300 border"
                style={{
                  background: theme?.secondaryBg,
                  color: theme?.secondaryText,
                  borderColor: theme?.secondaryBorder,
                }}
                data-track-click="cta_click"
                data-track-category="engagement"
                data-track-label={`Home CTA Secondary - ${secondaryButton.text}`}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  if (theme?.secondaryHover) e.currentTarget.style.background = theme.secondaryHover;
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                  if (theme?.secondaryBg) e.currentTarget.style.background = theme.secondaryBg;
                }}
              >
                {secondaryButton.text}
              </motion.button>
            ) : null}
          </div>
        </motion.div>
      </div>
    </section>
  );
}