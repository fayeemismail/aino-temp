"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

export function AboutStats() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative p-16 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
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
                  className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-400 mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
