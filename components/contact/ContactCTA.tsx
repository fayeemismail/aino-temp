"use client";

import { motion } from "framer-motion";
import type { ContactCTA as ContactCTAData } from "@/lib/data/contact/contactCTAData";

interface ContactCTAProps {
  data: ContactCTAData;
}

export function ContactCTA({ data }: ContactCTAProps) {
  const { headingBefore, headingHighlight, description, theme } = data;

  return (
    <section className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {(headingBefore || headingHighlight) && (
            <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight" style={{ color: theme?.textPrimary }}>
              {headingBefore}{" "}
              {headingHighlight && (
                <span
                  className="text-transparent bg-clip-text"
                  style={{ backgroundImage: theme?.gradientText }}
                >
                  {headingHighlight}
                </span>
              )}
            </h2>
          )}
          {description && (
            <p className="text-xl leading-relaxed" style={{ color: theme?.textSecondary }}>
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}