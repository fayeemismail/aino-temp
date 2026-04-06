"use client";

import { motion } from "framer-motion";
import { LuAward } from "react-icons/lu";

export function AboutClosing() {
  return (
    <section className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <LuAward className="w-16 h-16 text-amber-400 mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl text-white leading-tight">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-xl text-white/70 leading-relaxed">
            We&apos;re more than a service provider — we&apos;re your partners in
            innovation. Ready to transform your vision into reality?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
