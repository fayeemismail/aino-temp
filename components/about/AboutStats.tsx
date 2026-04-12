"use client";

import { motion } from "framer-motion";
import type { AboutStats as AboutStatsData, AboutStat } from "@/lib/data/about/aboutStatsData";

interface AboutStatsProps {
  data: AboutStatsData;
}

export function AboutStats({ data }: AboutStatsProps) {
  const { stats, theme } = data;

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          className="relative p-16 backdrop-blur-xl rounded-3xl border overflow-hidden"
          style={{
            background: theme?.cardBgGradient,
            borderColor: theme?.borderColor,
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
            style={{ background: theme?.glow }}
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stats?.map((stat: AboutStat, index: number) => (
              <motion.div
                key={stat.label ?? index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                  className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text mb-2"
                  style={{
                    backgroundImage: stat.theme?.valueGradient ?? theme?.defaultValueGradient,
                  }}
                >
                  {stat.value}
                </motion.div>
                {stat.label && (
                  <div style={{ color: stat.theme?.labelColor ?? theme?.labelColor }}>
                    {stat.label}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}