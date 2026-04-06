//components/home/HomeCTA
"use client";

import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import Link from "next/link";

export function HomeCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-linear-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl lg:text-6xl text-white leading-tight">
            Ready to start your{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-400">
              next big project?
            </span>
          </h2>

          <p className="text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            Whether you need a simple website or a complex AI-driven application,
            our team of experts is ready to bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-linear-to-r from-amber-400 to-orange-500 text-[#15233e] rounded-full font-medium flex items-center gap-2"
              >
                Contact Us Today
                <LuArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full border border-white/20 font-medium transition-all duration-300"
            >
              Get a Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
