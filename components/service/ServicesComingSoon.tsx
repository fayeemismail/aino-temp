"use client";

import { motion } from "framer-motion";
import { LuLoader, LuSettings } from "react-icons/lu";
import { useEffect, useState } from "react";
import type { ServicesComingSoon as ServicesComingSoonData, ComingSoonHeading } from "@/lib/data/service/servicesComingSoonData";

interface ServicesComingSoonProps {
  data: ServicesComingSoonData;
}

export function ServicesComingSoon({ data }: ServicesComingSoonProps) {
  const { badgeText, heading, description, technologies, theme } = data;
  const [particles, setParticles] = useState<Array<{ left: string; bottom: string }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }).map(() => ({
      left: `${Math.random() * 100}%`,
      bottom: "0%",
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to right, transparent, ${theme?.particleColor}1a, transparent)`,
              }}
            />
            {particles.map((pos, i) => (
              <motion.div
                key={i}
                animate={{ y: [-20, -100], opacity: [0, 1, 0], scale: [0, 1, 0] }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                className="absolute w-2 h-2 rounded-full"
                style={{ left: pos.left, bottom: pos.bottom, background: theme?.particleColor }}
              />
            ))}
          </div>

          {/* Card */}
          <div
            className="relative p-5 lg:p-16 backdrop-blur-xl rounded-3xl border"
            style={{ background: theme?.cardBgGradient, borderColor: theme?.cardBorder }}
          >
            <div className="text-center space-y-8">

              {/* Spinning icon */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="inline-flex"
              >
                <div className="relative">
                  <LuSettings className="w-16 h-16" style={{ color: theme?.iconColor }} />
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full blur-xl"
                    style={{ background: theme?.iconGlow }}
                  />
                </div>
              </motion.div>

              <div>
                {/* Badge */}
                {badgeText && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-1 lg:px-4 py-0 lg:py-2 rounded-full border mb-6"
                    style={{ background: theme?.badgeBg, borderColor: theme?.badgeBorder }}
                  >
                    <LuLoader className="w-4 h-4 animate-spin" style={{ color: theme?.badgeText }} />
                    <span className="text-sm" style={{ color: theme?.badgeText }}>
                      {badgeText}
                    </span>
                  </motion.div>
                )}

                {/* Heading */}
                {heading && heading.length > 0 && (
                  <h3 className="text-2xl md:text-4xl lg:text-5xl mb-4">
                    {heading.map((segment: ComingSoonHeading, index: number) =>
                      segment.highlight ? (
                        <span
                          key={index}
                          className="text-transparent bg-clip-text"
                          style={{ backgroundImage: theme?.headingGradient }}
                        >
                          {index > 0 ? " " : ""}{segment.text}
                        </span>
                      ) : (
                        <span key={index} style={{ color: theme?.headingPrimary }}>
                          {segment.text}{index < heading.length - 1 ? " " : ""}
                        </span>
                      )
                    )}
                  </h3>
                )}

                {/* Description */}
                {description && (
                  <p
                    className="text-md lg:text-xl leading-relaxed max-w-2xl mx-auto"
                    style={{ color: theme?.descriptionColor }}
                  >
                    {description}
                  </p>
                )}
              </div>

              {/* Progress bar */}
              <div className="max-w-md mx-auto">
                <div
                  className="h-2 rounded-full overflow-hidden"
                  style={{ background: theme?.progressBg }}
                >
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="h-full w-1/3 rounded-full"
                    style={{ background: theme?.progressGradient }}
                  />
                </div>
              </div>

              {/* Tech tags */}
              {technologies && technologies.length > 0 && (
                <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                  {technologies.map((tech: string, index: number) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                      className="px-4 py-2 rounded-full text-sm border"
                      style={{
                        background: theme?.tagBg,
                        borderColor: theme?.tagBorder,
                        color: theme?.tagText,
                      }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}