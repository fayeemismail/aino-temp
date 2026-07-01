"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { BlogCategories as BlogCategoriesData } from "@/lib/data/blog/blogCategoriesData";

interface BlogCategoriesProps {
  data: BlogCategoriesData;
}

export function BlogCategories({ data }: BlogCategoriesProps) {
  const { defaultActive, categories, theme } = data;
  const [active, setActive] = useState(defaultActive ?? "");

  if (!categories || categories.length === 0) return null;

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
          {categories.map((category: string, index: number) => {
            const isActive = active === category;
            return (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(category)}
                className="px-6 py-3 rounded-full text-sm transition-all duration-300 border"
                data-track-click="blog_category_click"
                data-track-category="engagement"
                data-track-label={`Blog Category - ${category}`}
                style={
                  isActive
                    ? {
                        background: theme?.activeGradient,
                        color: theme?.activeText,
                        borderColor: "transparent",
                        fontWeight: 500,
                      }
                    : {
                        background: theme?.bg,
                        color: theme?.text,
                        borderColor: theme?.border,
                      }
                }
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  if (!isActive && theme?.hoverBg) e.currentTarget.style.background = theme.hoverBg;
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                  if (!isActive && theme?.bg) e.currentTarget.style.background = theme.bg;
                }}
              >
                {category}
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}