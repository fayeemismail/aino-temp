"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutStory() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl text-white">From Vision to Reality</h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                What started as a small team of passionate developers has evolved into
                a full-service technology agency trusted by businesses worldwide. Our
                journey has been driven by curiosity, innovation, and an unwavering
                commitment to excellence.
              </p>
              <p>
                Over the years, we&apos;ve worked across industries — from startups
                disrupting their markets to established enterprises transforming their
                operations. Each project has taught us something new and reinforced our
                core belief: great technology is built with empathy, insight, and
                collaboration.
              </p>
              <p>
                Today, Ainorax stands at the intersection of cutting-edge technology
                and practical business solutions. We don&apos;t just build software —
                we build partnerships that last.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1625461291092-13d0c45608b3?w=1080&q=80"
                alt="Modern workspace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#15233e] via-transparent to-transparent" />
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10"
            >
              <div className="text-4xl font-bold text-amber-400 mb-1">150+</div>
              <div className="text-sm text-white/70">Projects Completed</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -top-6 -right-6 bg-linear-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl p-6 rounded-2xl border border-white/10"
            >
              <div className="text-4xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-white/70">Client Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
