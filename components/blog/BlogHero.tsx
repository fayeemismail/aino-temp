"use client";

import { LuTrendingUp } from "react-icons/lu";

export function BlogHero() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow effect - kept as static div */}
      <div 
        className="absolute top-25 left-1/2 -translate-x-1/2 lg:w-100 lg:h-100 w-70 h-70 md:w-50 md:h-50 bg-linear-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-400/10 border border-purple-400/20 mb-8">
            <LuTrendingUp className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400">Insights &amp; Articles</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white mb-6 leading-tight">
            Thoughts, Stories{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-400">
              &amp; Ideas
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-xl text-white/70 leading-relaxed">
            Exploring the latest trends in technology, development practices, and
            digital innovation from the Ainorax team.
          </p>
        </div>
      </div>
    </section>
  );
}