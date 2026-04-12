"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { AboutStory as AboutStoryData, AboutStoryStat } from "@/lib/data/about/aboutStoryData";

interface AboutStoryProps {
  data: AboutStoryData;
}

export function AboutStory({ data }: AboutStoryProps) {
  const [isMobile, setIsMobile] = useState(true);
  const { heading, paragraphs, image, stats, theme } = data;

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const motionProps = isMobile
    ? {}
    : {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
      };

  const statMotionProps = isMobile
    ? {}
    : {
        initial: { opacity: 0, scale: 0.8 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.6 },
      };

  const imageUrl = image?.asset?.url;

  return (
    <section className="py-16 md:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text Content */}
          <motion.div {...motionProps} className="space-y-6 order-2 lg:order-1">
            {heading && (
              <h2
                className="text-4xl md:text-5xl leading-tight"
                style={{ color: theme?.headingColor }}
              >
                {heading}
              </h2>
            )}
            {paragraphs && paragraphs.length > 0 && (
              <div className="space-y-4 leading-relaxed text-[15px] md:text-base">
                {paragraphs.map((paragraph: string, index: number) => (
                  <p key={index} style={{ color: theme?.textColor }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </motion.div>

          {/* Image Side */}
          <motion.div {...motionProps} className="relative order-1 lg:order-2">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt="Modern workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              )}
              <div
                className="absolute inset-0"
                style={{ background: theme?.imageOverlay }}
              />
            </div>

            {/* Floating Stats */}
            {stats?.map((stat: AboutStoryStat, index: number) => (
              <motion.div
                key={index}
                {...statMotionProps}
                transition={{ delay: 0.2 + index * 0.2 }}
                className={`absolute backdrop-blur-xl p-5 sm:p-6 rounded-2xl border shadow-xl ${
                  index === 0
                    ? "-bottom-4 -left-3 sm:-bottom-6 sm:-left-6"
                    : "-top-4 -right-3 sm:-top-6 sm:-right-6"
                }`}
                style={{
                  background: stat.theme?.bgGradient ?? theme?.cardBg,
                  borderColor: stat.theme?.borderColor ?? theme?.cardBorder,
                }}
              >
                {stat.value && (
                  <div
                    className="text-3xl sm:text-4xl font-bold mb-1"
                    style={{ color: stat.theme?.valueColor }}
                  >
                    {stat.value}
                  </div>
                )}
                {stat.label && (
                  <div
                    className="text-sm whitespace-nowrap"
                    style={{ color: stat.theme?.labelColor ?? theme?.textColor }}
                  >
                    {stat.label}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}