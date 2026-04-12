"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ServicesCTA as ServicesCTAData } from "@/lib/data/service/servicesCTAData";

interface ServicesCTAProps {
  data: ServicesCTAData;
}

export function ServicesCTA({ data }: ServicesCTAProps) {
  const { heading, description, primaryButton, theme } = data;

  return (
    <section className="py-16 sm:py-24 lg:py-32 relative" style={{ background: theme?.background }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {heading && (
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl leading-tight"
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

          {primaryButton?.link && (
            <Link href={primaryButton.link}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full font-medium"
                style={{ background: theme?.buttonGradient, color: theme?.buttonTextColor }}
              >
                {primaryButton.text}
              </motion.button>
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}