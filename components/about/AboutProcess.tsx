"use client";

import { motion } from "framer-motion";
import type { AboutProcess as AboutProcessData, AboutProcessStep } from "@/lib/data/about/aboutProcessData";

interface AboutProcessProps {
  data: AboutProcessData;
}

export function AboutProcess({ data }: AboutProcessProps) {
  const { heading, subheading, steps, theme } = data;

  return (
    <section className="py-32 relative overflow-hidden">
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: theme?.floatingBg?.color }}
      />

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps?.map((step: AboutProcessStep, index: number) => (
            <motion.div
              key={step.number ?? index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div
                className="relative p-8 backdrop-blur-lg rounded-3xl border overflow-hidden transition-all duration-500"
                style={{
                  background: step.theme?.cardBg ?? theme?.defaultCardBg,
                  borderColor: step.theme?.borderColor ?? theme?.defaultBorder,
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  if (step.theme?.cardHoverBg) e.currentTarget.style.background = step.theme.cardHoverBg;
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.background = step.theme?.cardBg ?? theme?.defaultCardBg ?? "";
                }}
              >
                {/* Large number bg */}
                {step.number && (
                  <div
                    className="absolute top-4 right-4 text-8xl font-bold select-none"
                    style={{ color: step.theme?.numberColor }}
                  >
                    {step.number}
                  </div>
                )}

                {/* Gradient bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  className="h-1 w-20 rounded-full mb-6 origin-left"
                  style={{ background: step.theme?.gradient }}
                />

                {step.title && (
                  <h3
                    className="text-2xl mb-3 relative z-10 transition-all duration-300"
                    style={{ color: step.theme?.textColor }}
                    onMouseEnter={(e: React.MouseEvent<HTMLHeadingElement>) => {
                      if (step.theme?.hoverGradient) {
                        e.currentTarget.style.backgroundImage = step.theme.hoverGradient;
                        e.currentTarget.style.webkitBackgroundClip = "text";
                        e.currentTarget.style.webkitTextFillColor = "transparent";
                        e.currentTarget.style.backgroundClip = "text";
                        e.currentTarget.style.color = "transparent";
                      }
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLHeadingElement>) => {
                      e.currentTarget.style.backgroundImage = "";
                      e.currentTarget.style.webkitBackgroundClip = "";
                      e.currentTarget.style.webkitTextFillColor = "";
                      e.currentTarget.style.backgroundClip = "";
                      e.currentTarget.style.color = step.theme?.textColor ?? "";
                    }}
                  >
                    {step.title}
                  </h3>
                )}

                {step.description && (
                  <p className="leading-relaxed relative z-10" style={{ color: step.theme?.textColor }}>
                    {step.description}
                  </p>
                )}

                <motion.div
                  animate={{ opacity: [0, 0.3, 0], scale: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full blur-3xl"
                  style={{ background: step.theme?.glowGradient }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}