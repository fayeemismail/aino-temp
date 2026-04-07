"use client";

import { motion } from "framer-motion";

export function ContactCTA() {
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Ready to Transform Your{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-400">
              Digital Presence?
            </span>
          </h2>
          <p className="text-xl text-white/70 leading-relaxed">
            Let&apos;s discuss how Ainorax can help bring your vision to life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
