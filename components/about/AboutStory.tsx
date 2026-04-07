"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function AboutStory() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const motionProps = isMobile
    ? {} // No animation on mobile
    : {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
      };

  const statMotionProps = isMobile
    ? {}
    : {
        initial: { opacity: 0, scale: 0.8 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.6 },
      };

  return (
    <section className="py-16 md:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            {...motionProps}
            className="space-y-6 order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl text-white leading-tight">
              From Vision to Reality
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed text-[15px] md:text-base">
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

          {/* Image Side */}
          <motion.div
            {...motionProps}
            className="relative order-1 lg:order-2"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1625461291092-13d0c45608b3?w=1080&q=80"
                alt="Modern workspace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0f1c33] via-transparent to-transparent" />
            </div>

            {/* Floating Stats - Fully Responsive */}
            <motion.div
              {...statMotionProps}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-4 -left-3 sm:-bottom-6 sm:-left-6 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-white/10 shadow-xl"
            >
              <div className="text-3xl sm:text-4xl font-bold text-amber-400 mb-1">150+</div>
              <div className="text-sm text-white/70 whitespace-nowrap">Projects Completed</div>
            </motion.div>

            <motion.div
              {...statMotionProps}
              transition={{ delay: 0.4 }}
              className="absolute -top-4 -right-3 sm:-top-6 sm:-right-6 bg-linear-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-white/10 shadow-xl"
            >
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">98%</div>
              <div className="text-sm text-white/70 whitespace-nowrap">Client Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}