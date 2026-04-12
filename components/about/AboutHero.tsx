"use client";

import { motion } from "framer-motion";
import { LuLightbulb } from "react-icons/lu";
import type { AboutHero as AboutHeroData } from "@/lib/data/about/aboutHeroData";

interface AboutHeroProps {
  data: AboutHeroData;
}

export function AboutHero({ data }: AboutHeroProps) {
  const { badgeText, heading, highlightText, description, theme } = data;

  return (
    <section className="py-32 relative overflow-hidden">
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: theme?.badgeBg, opacity: 0.1 }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          {badgeText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
              style={{
                background: theme?.badgeBg,
                borderColor: theme?.badgeText,
                opacity: undefined,
              }}
            >
              <LuLightbulb className="w-4 h-4" style={{ color: theme?.badgeText }} />
              <span className="text-sm" style={{ color: theme?.badgeText }}>
                {badgeText}
              </span>
            </motion.div>
          )}

          {heading && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-5xl lg:text-7xl mb-8 leading-tight"
              style={{ color: theme?.heading }}
            >
              {heading}{" "}
              {highlightText && (
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: theme?.highlightGradient }}
                >
                  {highlightText}
                </span>
              )}
            </motion.h1>
          )}

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl leading-relaxed"
              style={{ color: theme?.description }}
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}