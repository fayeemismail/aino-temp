"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LuArrowRight } from "react-icons/lu";
import type { AboutPreview as AboutPreviewData } from "@/lib/data/home/aboutPreviewData";

interface AboutPreviewProps {
  data: AboutPreviewData;
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

export function AboutPreview({ data }: AboutPreviewProps) {
  const isMobile = useIsMobile();
  const { badge, title, descriptionPrimary, descriptionSecondary, image, enableFloatingBadge, experience, cta, theme } = data;

  const floatingBadge = (
    <div
      className="absolute bottom-0 right-0 p-5 lg:p-8 rounded-2xl shadow-2xl"
      style={{ background: theme?.floatingBadgeGradient }}
    >
      <div className="text-4xl font-bold" style={{ color: theme?.floatingBadgeText }}>
        {experience?.value}
      </div>
      <div className="text-sm" style={{ color: theme?.floatingBadgeText, opacity: 0.8 }}>
        {experience?.label}
      </div>
    </div>
  );

  return (
    <section className="py-32 relative" style={{ background: theme?.sectionBg }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image column */}
          <div className="relative pb-8 pr-8 lg:pb-10 lg:pr-10">
            <div className="aspect-4/3 rounded-3xl overflow-hidden relative">
              <Image
                src={image}
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: theme?.imageOverlay }}
              />
            </div>

            {enableFloatingBadge && (
              isMobile ? (
                floatingBadge
              ) : (
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-0 right-0 p-5 lg:p-8 rounded-2xl shadow-2xl"
                  style={{ background: theme?.floatingBadgeGradient }}
                >
                  <div className="text-4xl font-bold" style={{ color: theme?.floatingBadgeText }}>
                    {experience?.value}
                  </div>
                  <div className="text-sm" style={{ color: theme?.floatingBadgeText, opacity: 0.8 }}>
                    {experience?.label}
                  </div>
                </motion.div>
              )
            )}
          </div>

          {/* Text column */}
          <div className="space-y-6">
            {badge?.text && (
              <div
                className="inline-block px-4 py-2 rounded-full text-sm"
                style={{
                  background: theme?.badgeBg,
                  border: `1px solid ${theme?.badgeBorder}`,
                  color: theme?.badgeText,
                }}
              >
                {badge.text}
              </div>
            )}

            {title && (
              <h2 className="text-4xl lg:text-5xl leading-tight" style={{ color: theme?.title }}>
                {title}
              </h2>
            )}

            {descriptionPrimary && (
              <p className="leading-relaxed text-lg" style={{ color: theme?.descriptionPrimary }}>
                {descriptionPrimary}
              </p>
            )}

            {descriptionSecondary && (
              <p className="leading-relaxed" style={{ color: theme?.descriptionSecondary }}>
                {descriptionSecondary}
              </p>
            )}

            {cta?.link && cta?.text && (
              <Link href={cta.link}>
                <button
                  className="group flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300"
                  style={{
                    background: theme?.ctaBg,
                    borderColor: theme?.ctaBorder,
                    color: theme?.ctaText,
                  }}
                  onMouseEnter={e => { if (theme?.ctaHover) e.currentTarget.style.background = theme.ctaHover; }}
                  onMouseLeave={e => { if (theme?.ctaBg) e.currentTarget.style.background = theme.ctaBg; }}
                >
                  {cta.text}
                  <LuArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}