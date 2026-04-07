//components/home/HeroSection
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LuArrowRight, LuBrain, LuCode, LuShield, LuSparkles, LuZap } from "react-icons/lu";

const floatingIcons = [LuCode, LuBrain, LuZap, LuShield];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20"
          >
            <LuSparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-400">Innovation Meets Excellence</span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl leading-tight">
            {["Transforming Ideas", "into Intelligent", "Digital Experiences."].map(
              (line, i) => (
                <motion.span
                  key={line}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className={`block ${
                    i === 1
                      ? "text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-400"
                      : "text-white"
                  }`}
                >
                  {line}
                </motion.span>
              )
            )}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-white/70 leading-relaxed max-w-2xl"
          >
            We are a full-service technology agency specializing in modern web
            development, cutting-edge AI solutions, and data-driven growth. We
            build scalable software that drives real business results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-linear-to-r from-amber-400 to-orange-500 text-[#15233e] rounded-full overflow-hidden font-medium"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let&apos;s Build Your Future
                  <LuArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-orange-500 to-amber-400"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right visual: animated rings + floating icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-square">
            {/* Rings */}
            {[0, 8, 16].map((inset, i) => (
              <motion.div
                key={inset}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                className={`absolute inset-${inset} rounded-full border-2 border-dashed ${
                  i === 0
                    ? "border-amber-400/20"
                    : i === 1
                    ? "border-blue-400/20"
                    : "border-purple-400/20"
                }`}
                style={{ inset: `${inset * 4}px` }}
              />
            ))}

            {/* Center glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-32 h-32 bg-linear-to-r from-amber-400 to-orange-400 rounded-full blur-3xl"
              />
            </div>

            {/* Floating icons */}
            {floatingIcons.map((Icon, index) => (
              <motion.div
                key={index}
                animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3 + index, repeat: Infinity, delay: index * 0.2 }}
                className="absolute"
                style={{ top: `${25 + index * 15}%`, left: `${15 + index * 20}%` }}
              >
                <div className="w-16 h-16 bg-white/5 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/10">
                  <Icon className="w-8 h-8 text-amber-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
