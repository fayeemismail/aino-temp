"use client";

import { motion } from "framer-motion";
import { LuLightbulb } from "react-icons/lu";

export function AboutHero() {
  return (
    <section className="py-32 relative overflow-hidden">
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-8"
          >
            <LuLightbulb className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-400">Our Story</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl lg:text-7xl text-white mb-8 leading-tight"
          >
            Building the Future,{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-400">
              One Solution at a Time
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-white/70 leading-relaxed"
          >
            Ainorax was founded on the belief that technology should empower businesses,
            not complicate them. We&apos;re a team of innovators, problem-solvers, and
            dreamers committed to creating digital experiences that make a difference.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
