//components/home/BlogPreview
"use client";

import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: "The Future of AI in Enterprise Software",
    excerpt:
      "How artificial intelligence is reshaping business operations and creating new opportunities for growth.",
    category: "AI & Innovation",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1761912149936-8f662fc2a13e?w=1080&q=80",
  },
  {
    title: "Building Scalable Web Applications",
    excerpt: "Best practices for architecture and performance optimization.",
    category: "Development",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1625645262499-c2a1e2eb09a7?w=1080&q=80",
  },
  {
    title: "Cloud Infrastructure 101",
    excerpt: "Understanding modern cloud architecture and deployment strategies.",
    category: "Cloud",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1771189956777-575006b6b145?w=1080&q=80",
  },
];

export function BlogPreview() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <h2 className="text-4xl lg:text-5xl text-white mb-4">Latest Insights</h2>
            <p className="text-white/60 text-lg">
              Thoughts, stories, and ideas from our team
            </p>
          </div>
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="hidden md:flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors duration-300"
            >
              View All Posts
              <LuArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured post */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 group cursor-pointer"
          >
            <div className="relative h-full bg-white/5 rounded-3xl overflow-hidden border border-white/10">
              <div className="aspect-16/10 relative overflow-hidden">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#15233e] via-[#15233e]/50 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-amber-400/20 text-amber-400 text-sm rounded-full">
                    {blogPosts[0].category}
                  </span>
                  <span className="text-white/60 text-sm">{blogPosts[0].readTime}</span>
                </div>
                <h3 className="text-3xl text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                  {blogPosts[0].title}
                </h3>
                <p className="text-white/70 leading-relaxed">{blogPosts[0].excerpt}</p>
              </div>
            </div>
          </motion.div>

          {/* Secondary posts */}
          <div className="lg:col-span-5 space-y-6">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div className="flex gap-4 p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="96px"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-amber-400">{post.category}</span>
                      <span className="text-xs text-white/40">•</span>
                      <span className="text-xs text-white/60">{post.readTime}</span>
                    </div>
                    <h4 className="text-white group-hover:text-amber-400 transition-colors duration-300 leading-snug">
                      {post.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
