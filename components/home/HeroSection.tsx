// components/home/HeroSection
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LuArrowRight, LuBrain, LuCode, LuShield, LuSparkles, LuZap } from "react-icons/lu";

const floatingIcons = [LuCode, LuBrain, LuZap, LuShield];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left content - Takes full width on mobile */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20 mx-auto lg:mx-0">
            <LuSparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400">Innovation Meets Excellence</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl leading-tight">
            {["Transforming Ideas", "into Intelligent", "Digital Experiences."].map(
              (line, i) => (
                <span
                  key={line}
                  className={`block ${
                    i === 1
                      ? "text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400"
                      : "text-white"
                  }`}
                >
                  {line}
                </span>
              )
            )}
          </h1>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            We are a full-service technology agency specializing in modern web
            development, cutting-edge AI solutions, and data-driven growth. We
            build scalable software that drives real business results.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Link href="/contact">
              <button className="group relative px-8 py-4 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-full overflow-hidden font-medium text-base sm:text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  Let&apos;s Build Your Future
                  <LuArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Right visual - Hidden completely on mobile & tablet, visible only on lg+ */}
        <div className="hidden lg:block lg:col-span-5 relative">
          <div className="relative aspect-square">

            {/* Rings */}
            {[0, 8, 16].map((inset, i) => (
              <motion.div
                key={inset}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                className={`absolute rounded-full border-2 border-dashed ${
                  i === 0
                    ? "border-blue-400/20"
                    : i === 1
                    ? "border-purple-400/20"
                    : "border-pink-400/20"
                }`}
                style={{ inset: `${inset * 4}px` }}
              />
            ))}

            {/* Center glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-32 h-32 bg-linear-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"
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
                  <Icon className="w-8 h-8 text-[#1760fc] " />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}