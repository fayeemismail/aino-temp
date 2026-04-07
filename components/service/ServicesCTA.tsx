"use client";

import { motion } from "framer-motion";

export function ServicesCTA() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/70 leading-relaxed">
            Let&apos;s discuss how our services can help transform your business.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-linear-to-r from-amber-400 to-orange-500 text-[#15233e] rounded-full font-medium"
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
