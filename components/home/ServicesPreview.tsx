// components/home/ServicePreview
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LuArrowLeft, LuArrowRight, LuBrain, LuCloud, LuCode, LuShoppingCart } from "react-icons/lu";

const services = [
  {
    title: "Web & Mobile Development",
    description: "Custom applications built with modern frameworks and scalable architecture",
    icon: LuCode,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Artificial Intelligence & Data",
    description: "Machine learning solutions and data-driven insights for intelligent automation",
    icon: LuBrain,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Digital Commerce & Connectivity",
    description: "E-commerce platforms and seamless integration solutions",
    icon: LuShoppingCart,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Cloud, QA & Support",
    description: "Infrastructure management, testing, and ongoing technical support",
    icon: LuCloud,
    color: "from-emerald-500 to-teal-500",
  },
];

export function ServicesPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".service-card");
    const amount = (card?.offsetWidth ?? 350) + 24;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-32 relative bg-[#0a083767]">
      {/* FIX: removed max-w-7xl from here so the scroll track can bleed to edges on mobile */}
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl lg:text-5xl text-white mb-4">What We Do</h2>
            <p className="text-white/60 text-lg max-w-2xl">
              Comprehensive solutions tailored to your unique needs
            </p>
          </motion.div>
        </div>

        {/* Scroll wrapper — FIX: use px on the nav button wrapper, not negative translate, to avoid overflow */}
        <div className="max-w-7xl mx-auto relative">
          {/* Left button — desktop only */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`
              hidden lg:flex
              absolute left-0 top-1/2 -translate-y-1/2 z-10
              -translate-x-full -ml-3
              w-11 h-11 items-center justify-center rounded-full
              border border-white/20 bg-white/10 backdrop-blur-md
              text-white transition-all duration-200
              hover:bg-white/20 hover:border-white/40
              disabled:opacity-20 disabled:cursor-default disabled:pointer-events-none
            `}
            aria-label="Scroll left"
          >
            <LuArrowLeft className="w-5 h-5" />
          </button>

          {/* Right button — desktop only */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`
              hidden lg:flex
              absolute right-0 top-1/2 -translate-y-1/2 z-10
              translate-x-full mr-3
              w-11 h-11 items-center justify-center rounded-full
              border border-white/20 bg-white/10 backdrop-blur-md
              text-white transition-all duration-200
              hover:bg-white/20 hover:border-white/40
              disabled:opacity-20 disabled:cursor-default disabled:pointer-events-none
            `}
            aria-label="Scroll right"
          >
            <LuArrowRight className="w-5 h-5" />
          </button>

          {/* Scroll track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                // FIX: w-[calc(100%-1px)] ensures exactly one card fills the viewport on mobile
                // lg:w-80 gives a comfortable fixed width on desktop without hardcoding pixels
                className="service-card w-[calc(100%)] lg:w-80 xl:w-96 shrink-0 snap-start group"
              >
                <div className="relative h-full p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-linear-to-br ${service.color} rounded-2xl flex items-center justify-center`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-amber-400 group-hover:to-orange-400 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile scroll hint */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 flex lg:hidden items-center justify-center gap-2 text-white/40"
          >
            <LuArrowRight className="w-4 h-4" />
            <span className="text-sm">Scroll to explore</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}