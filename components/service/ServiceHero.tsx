"use client";

import { LuZap } from "react-icons/lu";

export function ServicesHero() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">

      <div className="max-w-7xl mx-auto md:px-4 px-4 lg:px-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-8">
          <LuZap className="w-4 h-4 text-amber-400" />
          <span className="text-sm text-amber-400">What We Offer</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white mb-6 sm:mb-8 leading-tight max-w-4xl">
          Solutions Built for{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-400">
            Your Growth
          </span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-2xl">
          From concept to deployment, we provide end-to-end technology services
          designed to accelerate your business and deliver measurable results.
        </p>
      </div>
    </section>
  );
}