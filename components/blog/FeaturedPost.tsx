"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { featuredPost } from "@/lib/data/blog-data";

export function FeaturedPost() {
  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group cursor-pointer"
        >
          <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10">
            <div className="aspect-16/7 relative overflow-hidden">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#15233e] via-[#15233e]/50 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-amber-400/20 text-amber-400 text-sm rounded-full">
                  {featuredPost.category}
                </span>
                <span className="text-white/60 text-sm">{featuredPost.readTime}</span>
                <span className="text-white/40 text-sm hidden sm:inline">
                  {featuredPost.date} · {featuredPost.author}
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                {featuredPost.title}
              </h3>
              <p className="text-white/70 leading-relaxed max-w-3xl">
                {featuredPost.excerpt}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
