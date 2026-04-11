"use client";

import { useEffect, useState } from "react";
import { LuArrowRight } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import type { BlogPreview as BlogPreviewData, BlogCard } from "@/lib/data/home/blogPreview";

interface BlogPreviewProps {
  data: BlogPreviewData;
}

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

interface FeaturedPostProps {
  post: BlogCard;
  theme: BlogPreviewData["theme"];
}

function FeaturedPost({ post, theme }: FeaturedPostProps) {
  return (
    <div
      className="relative h-full rounded-3xl overflow-hidden border"
      style={{
        background: theme?.featuredCardBg,
        borderColor: theme?.featuredCardBorder,
      }}
    >
      <div className="aspect-16/10 relative overflow-hidden">
        {post.image && (
          <Image
            src={post.image}
            alt={post.title ?? ""}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
        )}
        <div
          className="absolute inset-0"
          style={{ background: theme?.featuredOverlay }}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="flex items-center gap-4 mb-4">
          {post.category && (
            <span
              className="px-3 py-1 text-sm rounded-full"
              style={{ background: theme?.categoryBg, color: theme?.categoryText }}
            >
              {post.category}
            </span>
          )}
          {post.readTime && (
            <span className="text-sm" style={{ color: theme?.meta }}>
              {post.readTime}
            </span>
          )}
        </div>
        {post.title && (
          <h3
            className="text-3xl mb-3 transition-colors duration-300 group-hover:opacity-80"
            style={{ color: theme?.title }}
          >
            {post.title}
          </h3>
        )}
        {post.excerpt && (
          <p className="leading-relaxed" style={{ color: theme?.excerpt }}>
            {post.excerpt}
          </p>
        )}
      </div>
    </div>
  );
}

interface SecondaryPostProps {
  post: BlogCard;
  theme: BlogPreviewData["theme"];
}

function SecondaryPost({ post, theme }: SecondaryPostProps) {
  return (
    <div
      className="flex gap-4 p-6 backdrop-blur-lg rounded-2xl border transition-all duration-300"
      style={{ background: theme?.cardBg, borderColor: theme?.cardBorder }}
      onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
        if (theme?.cardHover) e.currentTarget.style.background = theme.cardHover;
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
        if (theme?.cardBg) e.currentTarget.style.background = theme.cardBg;
      }}
    >
      <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 relative">
        {post.image && (
          <Image
            src={post.image}
            alt={post.title ?? ""}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="96px"
          />
        )}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          {post.category && (
            <span className="text-xs" style={{ color: theme?.categoryText }}>
              {post.category}
            </span>
          )}
          {post.category && post.readTime && (
            <span className="text-xs" style={{ color: theme?.meta, opacity: 0.6 }}>•</span>
          )}
          {post.readTime && (
            <span className="text-xs" style={{ color: theme?.meta }}>
              {post.readTime}
            </span>
          )}
        </div>
        {post.title && (
          <h4
            className="transition-colors duration-300 leading-snug group-hover:opacity-80"
            style={{ color: theme?.title }}
          >
            {post.title}
          </h4>
        )}
      </div>
    </div>
  );
}

export function BlogPreview({ data }: BlogPreviewProps) {
  const isMobile = useIsMobile();
  const { heading, subheading, cta, enableFeatured, posts, theme } = data;

  const featuredPost = enableFeatured ? posts?.[0] : undefined;
  const secondaryPosts = enableFeatured ? posts?.slice(1) : posts;

  const header = (
    <div className="mb-16 flex items-end justify-between">
      <div>
        {heading && (
          <h2 className="text-4xl lg:text-5xl mb-4" style={{ color: theme?.heading }}>
            {heading}
          </h2>
        )}
        {subheading && (
          <p className="text-lg" style={{ color: theme?.subheading }}>
            {subheading}
          </p>
        )}
      </div>
      {cta?.link && cta?.text && (
        <Link href={cta.link}>
          <button
            className="hidden md:flex items-center gap-2 transition-colors duration-300"
            style={{ color: theme?.ctaText }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              if (theme?.ctaHover) e.currentTarget.style.color = theme.ctaHover;
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              if (theme?.ctaText) e.currentTarget.style.color = theme.ctaText;
            }}
          >
            {cta.text}
            <LuArrowRight className="w-5 h-5" />
          </button>
        </Link>
      )}
    </div>
  );

  if (isMobile) {
    return (
      <section className="py-32 relative" style={{ background: theme?.sectionBg }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {header}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {featuredPost && (
              <div className="lg:col-span-7 group cursor-pointer">
                <FeaturedPost post={featuredPost} theme={theme} />
              </div>
            )}
            {secondaryPosts && secondaryPosts.length > 0 && (
              <div className="lg:col-span-5 space-y-6">
                {secondaryPosts.map((post: BlogCard) => (
                  <div key={post.title} className="group cursor-pointer">
                    <SecondaryPost post={post} theme={theme} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Desktop — full motion
  const { motion } = require("framer-motion");

  return (
    <section className="py-32 relative" style={{ background: theme?.sectionBg }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            {heading && (
              <h2 className="text-4xl lg:text-5xl mb-4" style={{ color: theme?.heading }}>
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="text-lg" style={{ color: theme?.subheading }}>
                {subheading}
              </p>
            )}
          </div>
          {cta?.link && cta?.text && (
            <Link href={cta.link}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="hidden md:flex items-center gap-2 transition-colors duration-300"
                style={{ color: theme?.ctaText }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  if (theme?.ctaHover) e.currentTarget.style.color = theme.ctaHover;
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                  if (theme?.ctaText) e.currentTarget.style.color = theme.ctaText;
                }}
              >
                {cta.text}
                <LuArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 group cursor-pointer"
            >
              <FeaturedPost post={featuredPost} theme={theme} />
            </motion.div>
          )}

          {secondaryPosts && secondaryPosts.length > 0 && (
            <div className="lg:col-span-5 space-y-6">
              {secondaryPosts.map((post: BlogCard, index: number) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group cursor-pointer"
                >
                  <SecondaryPost post={post} theme={theme} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}