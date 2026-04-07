"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { recentPosts } from "@/lib/data/blog-data";
import { LuCalendar, LuClock } from "react-icons/lu";

export function RecentPosts() {
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
          <h2 className="text-3xl lg:text-4xl text-white">Recent Articles</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 h-full flex flex-col">
                {/* Thumbnail */}
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#15233e]/80 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-amber-400/20 backdrop-blur-sm text-amber-400 text-xs rounded-full border border-amber-400/20">
                    {post.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg text-white mb-3 leading-snug group-hover:text-amber-400 transition-colors duration-300 flex-1">
                    {post.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-white/40 text-xs mt-auto pt-4 border-t border-white/5">
                    <span className="flex items-center gap-1">
                      <LuCalendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <LuClock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span className="ml-auto text-white/50">{post.author}</span>
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
