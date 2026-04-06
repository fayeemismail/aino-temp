"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "End-to-End Solutions",
    description:
      "From concept to deployment, we handle every aspect of your digital journey with expertise and precision.",
  },
  {
    title: "Forward-Thinking Tech",
    description:
      "We leverage cutting-edge technologies and innovative approaches to keep you ahead of the curve.",
  },
  {
    title: "Business-First Approach",
    description:
      "Every technical decision is driven by your business goals and measurable outcomes.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background decoration — contained */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "rgba(192,132,252,0.05)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Why Choose Ainorax
          </h2>
          <p className="text-white/60 text-base sm:text-lg">
            The difference is in the details
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
              <div className="relative p-6 sm:p-8 bg-white/5 rounded-3xl border border-white/10 overflow-hidden h-full">
                {/* Number decoration */}
                <div className="absolute -top-4 -right-4 text-7xl sm:text-8xl font-bold select-none pointer-events-none text-amber-400/10">
                  0{index + 1}
                </div>

                <h3 className="text-xl sm:text-2xl text-white mb-4 relative z-10">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed relative z-10 text-sm sm:text-base">
                  {item.description}
                </p>

                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{ background: "linear-gradient(to bottom right, rgba(251,191,36,0.05), rgba(249,115,22,0.05))" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}