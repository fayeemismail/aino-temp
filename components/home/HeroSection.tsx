"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LuArrowRight, LuBrain, LuCode, LuShield, LuSparkles, LuZap } from "react-icons/lu";
import { Hero } from "@/lib/data/home/heroData";
import { useEffect, useState } from "react";

const floatingIcons = [LuCode, LuBrain, LuZap, LuShield];

interface HeroSectionProps {
  hero: Hero;
}

export function HeroSection({ hero }: HeroSectionProps) {
  const {
    badge,
    description,
    heading,
    primaryButton,
    showFloatingIcons = true,
    theme,
  } = hero;

  // const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);


  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  if (!heading 
    // || heading.length === 0 
    // || !isMounted
  ) return null;

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 lg:py-20 py-0 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left Content */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">

          {/* Badge */}
          {badge && (
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mx-auto lg:mx-0 border"
              style={{
                backgroundColor: theme.badgeBg,
                borderColor: theme.badgeBorder,
              }}
            >
              <LuSparkles className="w-4 h-4" style={{ color: theme.badgeText }} />
              <span className="text-sm" style={{ color: theme.badgeText }}>
                {badge.text}
              </span>
            </div>
          )}

          {/* Heading - Most Flexible */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl leading-tight">
            {heading.map((line, i) => (
              <span
                key={i}
                className="block"
                style={{
                  color: line.highlight ? "transparent" : "#ffffff",
                  backgroundImage: line.highlight ? theme.headingGradient : "none",
                  WebkitBackgroundClip: line.highlight ? "text" : "unset",
                  backgroundClip: line.highlight ? "text" : "unset",
                }}
              >
                {line.text}
              </span>
            ))}
          </h1>

          {/* Description */}
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
            style={{ color: theme.description }}
          >
            {description}
          </p>

          {/* Button - Fully Flexible */}
          {primaryButton && (
            <div className="flex justify-center lg:justify-start">
              <Link href={primaryButton.link}>
                <button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="group relative px-8 py-4 text-white rounded-full overflow-hidden font-medium text-base sm:text-lg transition-all duration-300"
                  style={{
                    backgroundImage: isHovered
                      ? theme.buttonHover
                      : theme.buttonBg,
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {primaryButton.text}
                    <LuArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Right Visual */}
        <div className="hidden lg:block lg:col-span-5 relative">
          <div className="relative aspect-square">
            {/* Rings & Glow unchanged */}
            {[0, 8, 16].map((inset, i) => (
              <motion.div
                key={inset}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                className={`absolute rounded-full border-2 border-dashed ${i === 0 ? "border-blue-400/20" : i === 1 ? "border-purple-400/20" : "border-pink-400/20"
                  }`}
                style={{ inset: `${inset * 4}px` }}
              />
            ))}

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-32 h-32 bg-linear-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"
              />
            </div>

            {/* Floating Icons */}
            {showFloatingIcons &&
              floatingIcons.map((Icon, index) => (
                <motion.div
                  key={index}
                  animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3 + index, repeat: Infinity, delay: index * 0.2 }}
                  className="absolute"
                  style={{ top: `${25 + index * 15}%`, left: `${15 + index * 20}%` }}
                >
                  <div className="w-16 h-16 bg-white/5 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/10">
                    <Icon className="w-8 h-8" style={{ color: theme.iconColor }} />
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}