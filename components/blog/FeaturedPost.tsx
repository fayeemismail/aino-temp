"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { FeaturedPost as FeaturedPostData } from "@/lib/data/blog/featuredPostData";

interface FeaturedPostProps {
  data: FeaturedPostData;
}

export function FeaturedPost({ data }: FeaturedPostProps) {
  const { title, excerpt, category, readTime, date, author, image, theme } = data;

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
          <div
            className="relative backdrop-blur-lg rounded-3xl overflow-hidden border"
            style={{ background: theme?.cardBg, borderColor: theme?.cardBorder }}
          >
            <div className="aspect-16/7 relative overflow-hidden">
              {image && (
                <Image
                  src={image}
                  alt={title ?? ""}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}
              <div
                className="absolute inset-0"
                style={{ background: theme?.overlayGradient }}
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-4 mb-4">
                {category && (
                  <span
                    className="px-3 py-1 text-sm rounded-full"
                    style={{ background: theme?.categoryBg, color: theme?.categoryText }}
                  >
                    {category}
                  </span>
                )}
                {readTime && (
                  <span className="text-sm" style={{ color: theme?.metaText }}>
                    {readTime}
                  </span>
                )}
                {(date || author) && (
                  <span className="text-sm hidden sm:inline" style={{ color: theme?.metaText, opacity: 0.7 }}>
                    {[date, author].filter(Boolean).join(" · ")}
                  </span>
                )}
              </div>

              {title && (
                <h3
                  className="text-2xl lg:text-3xl mb-3 transition-colors duration-300"
                  style={{ color: theme?.titleColor }}
                  onMouseEnter={(e: React.MouseEvent<HTMLHeadingElement>) => {
                    if (theme?.titleHoverColor) e.currentTarget.style.color = theme.titleHoverColor;
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLHeadingElement>) => {
                    if (theme?.titleColor) e.currentTarget.style.color = theme.titleColor;
                  }}
                >
                  {title}
                </h3>
              )}

              {excerpt && (
                <p className="leading-relaxed max-w-3xl" style={{ color: theme?.excerptColor }}>
                  {excerpt}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};