"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { categories } from "@/lib/data/blog-data";

export function BlogCategories() {
  const [active, setActive] = useState("All Posts");

  // If there is no data, render nothing (empty)
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <section className="pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(category)}
              className={`px-6 py-3 rounded-full text-sm transition-all duration-300 ${
                active === category
                  ? "bg-linear-to-r from-amber-400 to-orange-500 text-[#15233e] font-medium"
                  : "bg-white/5 hover:bg-white/10 text-white/80 border border-white/10"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}