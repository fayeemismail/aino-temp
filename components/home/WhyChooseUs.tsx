"use client";
import { motion } from "framer-motion";
import { type WhyChooseUsData } from "@/types/home/whyChooseUsType";

interface WhyChooseUsProps {
  data: WhyChooseUsData | null;
}

export function WhyChooseUs({ data }: WhyChooseUsProps) {
  if (!data) return null;

  const {
    items = [],
    title = "",
    subtitle = "",
    showBackgroundDecoration = true,   // default only for rendering logic, not visual
    theme = {},
  } = data;

  if (items.length === 0) return null;

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background decoration — exact same as original */}
      {showBackgroundDecoration && theme.backgroundDecoration && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{ background: theme.backgroundDecoration }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl mb-4"
            style={{ color: theme.heading ?? "#FFFFFF" }}
          >
            {title}
          </h2>
          <p
            className="text-base sm:text-lg"
            style={{ color: theme.subtitle ?? "rgba(255, 255, 255, 0.6)" }}
          >
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative group"
            >
              <div
                className="relative p-6 sm:p-8 rounded-3xl border overflow-hidden h-full"
                style={{
                  backgroundColor: theme.cardBg ?? "rgba(255, 255, 255, 0.05)",
                  borderColor: theme.cardBorder ?? "rgba(255, 255, 255, 0.1)",
                }}
              >
                {/* Number decoration — exact same positioning & size */}
                <div
                  className="absolute -top-4 -right-4 text-7xl sm:text-8xl font-bold select-none pointer-events-none"
                  style={{ color: theme.numberColor ?? "rgba(251, 191, 36, 0.1)" }}
                >
                  0{index + 1}
                </div>

                <h3
                  className="text-xl sm:text-2xl mb-4 relative z-10"
                  style={{ color: theme.itemTitle ?? "#FFFFFF" }}
                >
                  {item.title}
                </h3>

                <p
                  className="leading-relaxed relative z-10 text-sm sm:text-base"
                  style={{ color: theme.itemDescription ?? "rgba(255, 255, 255, 0.6)" }}
                >
                  {item.description}
                </p>

                {/* Hover overlay — exact same as original */}
                {theme.hoverOverlayGradient && (
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                    style={{ background: theme.hoverOverlayGradient }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}