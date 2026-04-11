// components/home/ServicesPreview.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LuArrowLeft, LuArrowRight, LuBrain, LuCloud, LuCode, LuShoppingCart } from "react-icons/lu";
import { ServicesData, ServicesSection } from "@/types/home/serviceTypes";

const iconMap: Record<string, React.ElementType> = {
  code: LuCode,
  brain: LuBrain,
  cart: LuShoppingCart,
  cloud: LuCloud,
};

interface ServicesPreviewProps {
  services: ServicesSection | null;
}

export function ServicesPreview({ services }: ServicesPreviewProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Do not render if no content
  if (!services || !services.items || services.items.length === 0) {
    return null;
  }

  // Filter out invalid items and normalize data
  const validItems = services.items
    .filter((item): item is NonNullable<typeof item> => 
      !!item && !!item.title && !!item.description && !!item.gradient
    )
    .map(item => ({
      title: item.title!,
      description: item.description!,
      icon: item.icon || 'code',
      gradient: item.gradient!,
    }));

  if (validItems.length === 0) return null;

  const data: ServicesData = {
    title: services.title || "What We Do",
    description: services.description || "",
    items: validItems,
    showScrollHint: services.showScrollHint ?? true,
    theme: services.theme || {},
  };

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
    <section 
      className="py-32 relative" 
      style={{ backgroundColor: data.theme?.sectionBg }}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 
              className="text-4xl lg:text-5xl mb-4"
              style={{ color: data.theme?.heading }}
            >
              {data.title}
            </h2>
            {data.description && (
              <p 
                className="text-lg max-w-2xl"
                style={{ color: data.theme?.description }}
              >
                {data.description}
              </p>
            )}
          </motion.div>
        </div>

        {/* Navigation Buttons & Scroll Area - Same as before */}
        <div className="max-w-7xl mx-auto relative">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-full -ml-3 w-11 h-11 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:border-white/40 disabled:opacity-20"
            style={{
              backgroundColor: data.theme?.arrowBg,
              borderColor: data.theme?.arrowBorder,
              color: data.theme?.arrowText,
            }}
            aria-label="Scroll left"
          >
            <LuArrowLeft className="w-5 h-5" />
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-full mr-3 w-11 h-11 items-center justify-center rounded-full border backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:border-white/40 disabled:opacity-20"
            style={{
              backgroundColor: data.theme?.arrowBg,
              borderColor: data.theme?.arrowBorder,
              color: data.theme?.arrowText,
            }}
            aria-label="Scroll right"
          >
            <LuArrowRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
          >
            {validItems.map((service, index) => {
              const Icon = iconMap[service.icon] || LuCode;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="service-card w-full lg:w-80 xl:w-96 shrink-0 snap-start group"
                >
                  <div 
                    className="relative h-full p-8 backdrop-blur-md rounded-3xl border overflow-hidden"
                    style={{
                      backgroundColor: data.theme?.cardBg,
                      borderColor: data.theme?.cardBorder,
                    }}
                  >
                    <div
                      className="absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                      style={{ backgroundImage: service.gradient }}
                    />

                    <div className="relative mb-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ backgroundImage: service.gradient }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>

                    <h3 
                      className="text-2xl mb-3 transition-all duration-300 group-hover:bg-clip-text group-hover:bg-linear-to-r"
                      style={{ 
                        color: data.theme?.heading,
                      }}
                    >
                      {service.title}
                    </h3>
                    <p style={{ color: data.theme?.description }} className="leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {data.showScrollHint && (
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 flex lg:hidden items-center justify-center gap-2"
              style={{ color: data.theme?.scrollHintText }}
            >
              <LuArrowRight className="w-4 h-4" />
              <span className="text-sm">Scroll to explore</span>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}