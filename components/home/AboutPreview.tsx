// components/home/AboutPreview
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LuArrowRight } from "react-icons/lu";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export function AboutPreview() {
  const isMobile = useIsMobile();

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image column */}
          <div className="relative pb-8 pr-8 lg:pb-10 lg:pr-10">
            <div className="aspect-4/3 rounded-3xl overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1759884247387-a5d791ffb2bc?w=1080&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#15233e] via-transparent to-transparent" />
            </div>

            {/* Floating badge — animated only on desktop */}
            {isMobile ? (
              <div className="absolute bottom-0 right-0 bg-linear-to-br from-amber-400 to-orange-500 p-5 lg:p-8 rounded-2xl shadow-2xl">
                <div className="text-4xl font-bold text-[#15233e]">5+</div>
                <div className="text-sm text-[#15233e]/80">Years Experience</div>
              </div>
            ) : (
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-0 bg-linear-to-br from-amber-400 to-orange-500 p-5 lg:p-8 rounded-2xl shadow-2xl"
              >
                <div className="text-4xl font-bold text-[#15233e]">5+</div>
                <div className="text-sm text-[#15233e]/80">Years Experience</div>
              </motion.div>
            )}
          </div>

          {/* Text column */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-400/10 border border-blue-400/20 text-blue-400 text-sm">
              About Ainorax
            </div>

            <h2 className="text-4xl lg:text-5xl text-white leading-tight">
              Crafting Tomorrow&apos;s Digital Solutions Today
            </h2>

            <p className="text-white/70 leading-relaxed text-lg">
              Founded with a vision to bridge the gap between innovative technology
              and practical business solutions, Ainorax has grown into a trusted
              partner for companies seeking digital transformation.
            </p>

            <p className="text-white/60 leading-relaxed">
              Our team of experts combines deep technical knowledge with a passion
              for creating exceptional user experiences that drive measurable results.
            </p>

            <Link href="/about">
              <button className="group flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full border border-white/10 transition-all duration-300">
                Learn More About Us
                <LuArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}