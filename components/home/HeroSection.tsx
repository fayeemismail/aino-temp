// components/home/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LuArrowRight, LuBrain, LuCode, LuShield, LuSparkles, LuZap } from "react-icons/lu";

const floatingIcons = [LuCode, LuBrain, LuZap, LuShield];

export function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Static fallback for SSR / initial load
  if (!isClient) {
    return (
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20">
              <LuSparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-amber-400">Innovation Meets Excellence</span>
            </div>

            <h1 className="text-5xl lg:text-7xl leading-tight text-white">
              Transforming Ideas{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-400">
                into Intelligent
              </span>{" "}
              Digital Experiences.
            </h1>

            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              We are a full-service technology agency specializing in modern web
              development, cutting-edge AI solutions, and data-driven growth. We
              build scalable software that drives real business results.
            </p>

            <Link href="/contact">
              <button className="px-8 py-4 bg-linear-to-r from-amber-400 to-orange-500 text-[#15233e] rounded-full font-medium flex items-center gap-2">
                Let&apos;s Build Your Future
                <LuArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>

          {/* Empty placeholder on mobile during SSR */}
          <div className="hidden lg:block lg:col-span-5" />
        </div>
      </section>
    );
  }

  // Full animated version (client only)
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content - Always visible */}
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

          <h1 className="text-5xl lg:text-7xl leading-tight text-white">
            {["Transforming Ideas", "into Intelligent", "Digital Experiences."].map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.7 }}
                className={`block ${i === 1 ? "text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-400" : ""}`}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="text-lg text-white/70 leading-relaxed max-w-2xl"
          >
            We are a full-service technology agency specializing in modern web
            development, cutting-edge AI solutions, and data-driven growth. We
            build scalable software that drives real business results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
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

        {/* Right Visual: Hidden on small screens, shown on lg+ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="lg:block lg:col-span-5 relative flex justify-center"
        >
          <div className="relative w-[320px] h-80 lg:w-95 lg:h-95">
            
            {/* Rotating Rings */}
            {[0, 8, 16].map((offset, i) => (
              <motion.div
                key={i}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 25 + i * 6, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full border-2 border-dashed"
                style={{
                  inset: `${offset * 5}px`,
                  borderColor: i === 0 
                    ? "rgb(251 191 36 / 0.25)" 
                    : i === 1 
                    ? "rgb(96 165 250 / 0.25)" 
                    : "rgb(168 85 247 / 0.25)",
                }}
              />
            ))}

            {/* Center Glow */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.18, 1], opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="w-36 h-36 bg-linear-to-r from-amber-400 to-orange-400 rounded-full blur-3xl"
              />
            </div>

            {/* Floating Icons */}
            {floatingIcons.map((Icon, index) => (
              <motion.div
                key={index}
                animate={{ y: [0, -28, 0], rotate: [0, 15, -15, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 4 + index * 0.4, repeat: Infinity, delay: index * 0.3 }}
                className="absolute"
                style={{
                  top: `${26 + index * 15}%`,
                  left: `${16 + index * 20}%`,
                }}
              >
                <div className="w-16 h-16 bg-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/10">
                  <Icon className="w-8 h-8 text-amber-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-[radial-linear(#ffffff08_1px,transparent_1px)] bg-size-[60px_60px]pointer-events-none" />
    </section>
  );
}