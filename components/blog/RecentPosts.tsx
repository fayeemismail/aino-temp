"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LuCalendar, LuClock } from "react-icons/lu";
import type { RecentPostsSection, RecentPostItem } from "@/lib/data/blog/recentPostData";

interface RecentPostsProps {
  data: RecentPostsSection;
}

export function RecentPosts({ data }: RecentPostsProps) {
  const { heading, posts } = data;

  if (!posts || posts.length === 0) return null;

  return (
    <section className="pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {heading && (
            <h2 className="text-3xl lg:text-4xl text-white">{heading}</h2>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: RecentPostItem, index: number) => (
            <motion.article
              key={`${post.title}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
              data-track-click="blog_click"
              data-track-category="engagement"
              data-track-label={`Blog Post - ${post.title}`}
            >
              <div
                className="relative backdrop-blur-lg rounded-3xl overflow-hidden border transition-all duration-500 h-full flex flex-col"
                style={{ background: post.theme?.cardBg, borderColor: post.theme?.cardBorder }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  if (post.theme?.cardHoverBg) e.currentTarget.style.background = post.theme.cardHoverBg;
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  if (post.theme?.cardBg) e.currentTarget.style.background = post.theme.cardBg;
                }}
              >
                {/* Thumbnail */}
                <div className="aspect-video relative overflow-hidden">
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.title ?? ""}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div
                    className="absolute inset-0"
                    style={{ background: post.theme?.overlayGradient }}
                  />
                  {post.category && (
                    <span
                      className="absolute top-4 left-4 px-3 py-1 backdrop-blur-sm text-xs rounded-full border"
                      style={{
                        background: post.theme?.categoryBg,
                        color: post.theme?.categoryText,
                        borderColor: post.theme?.categoryBorder,
                      }}
                    >
                      {post.category}
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  {post.title && (
                    <h3
                      className="text-lg mb-3 leading-snug transition-colors duration-300 flex-1"
                      style={{ color: post.theme?.titleColor }}
                      onMouseEnter={(e: React.MouseEvent<HTMLHeadingElement>) => {
                        if (post.theme?.titleHoverColor) e.currentTarget.style.color = post.theme.titleHoverColor;
                      }}
                      onMouseLeave={(e: React.MouseEvent<HTMLHeadingElement>) => {
                        if (post.theme?.titleColor) e.currentTarget.style.color = post.theme.titleColor;
                      }}
                    >
                      {post.title}
                    </h3>
                  )}
                  {post.excerpt && (
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: post.theme?.excerptColor }}
                    >
                      {post.excerpt}
                    </p>
                  )}
                  <div
                    className="flex items-center gap-4 text-xs mt-auto pt-4 border-t border-white/5"
                    style={{ color: post.theme?.metaColor }}
                  >
                    {post.date && (
                      <span className="flex items-center gap-1">
                        <LuCalendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    )}
                    {post.readTime && (
                      <span className="flex items-center gap-1">
                        <LuClock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    )}
                    {post.author && (
                      <span
                        className="ml-auto"
                        style={{ color: post.theme?.authorColor }}
                      >
                        {post.author}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}