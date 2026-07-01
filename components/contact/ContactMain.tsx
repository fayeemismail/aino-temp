"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LuLoader, LuMail, LuMapPin, LuPhone, LuSend } from "react-icons/lu";
import type { IconType } from "react-icons";
import type { ContactMain as ContactMainData, ContactCard } from "@/lib/data/contact/contactMainData";

interface ContactMainProps {
  data: ContactMainData;
}

const iconMap: Record<string, IconType> = {
  LuMail: LuMail,
  LuPhone: LuPhone,
  LuMapPin: LuMapPin,
};

export function ContactMain({ data }: ContactMainProps) {
  const { comingSoon, rightIntro, contactCards, quickResponse } = data;
  const [particles, setParticles] = useState<Array<{ left: string }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="pb-16 sm:pb-24 lg:pb-32">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Coming soon panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Particle background */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              {particles.map((particle, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -150], opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: "easeOut",
                  }}
                  className="absolute w-1 h-1 rounded-full"
                  style={{ left: particle.left, bottom: "0%", background: "#22D3EE" }}
                />
              ))}
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
                style={{ background: "linear-gradient(to right, transparent, rgba(34,211,238,0.1), transparent)" }}
              />
            </div>

            <div className="relative p-8 sm:p-12 lg:p-16 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
              {/* Corner decorations */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-cyan-400/20 to-transparent rounded-bl-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-0 w-32 h-32 bg-linear-to-tr from-amber-400/20 to-transparent rounded-tr-full"
              />

              <div className="relative z-10 space-y-6 sm:space-y-8">
                <motion.div
                  animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex"
                >
                  <div className="relative">
                    <LuSend className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400" />
                    <motion.div
                      animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-cyan-400 rounded-full blur-xl"
                    />
                  </div>
                </motion.div>

                <div>
                  {comingSoon?.badgeText && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-4 sm:mb-6">
                      <LuLoader className="w-4 h-4 text-cyan-400 animate-spin" />
                      <span className="text-sm text-cyan-400">{comingSoon.badgeText}</span>
                    </div>
                  )}

                  {(comingSoon?.heading || comingSoon?.highlightText) && (
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">
                      {comingSoon?.heading}{" "}
                      {comingSoon?.highlightText && (
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400">
                          {comingSoon.highlightText}
                        </span>
                      )}
                    </h2>
                  )}

                  {comingSoon?.description && (
                    <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                      {comingSoon.description}
                    </p>
                  )}
                </div>

                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-12 -right-12 w-48 h-48 bg-linear-to-br from-cyan-400 to-blue-400 rounded-full blur-3xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            {(rightIntro?.heading || rightIntro?.description) && (
              <div>
                {rightIntro?.heading && (
                  <h2 className="text-2xl sm:text-3xl text-white mb-4">{rightIntro.heading}</h2>
                )}
                {rightIntro?.description && (
                  <p className="text-white/60 leading-relaxed">{rightIntro.description}</p>
                )}
              </div>
            )}

            <div className="space-y-4">
              {contactCards?.map((contact: ContactCard, index: number) => {
                const Icon = contact.icon ? iconMap[contact.icon] : undefined;
                return (
                  <motion.div
                    key={contact.title ?? index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                    className="group relative p-5 sm:p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 transition-all duration-300 cursor-pointer"
                    onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                      if (contact.theme?.hoverBg) e.currentTarget.style.background = contact.theme.hoverBg;
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    }}
                    data-track-click="contact_card_click"
                    data-track-category="engagement"
                    data-track-label={`Contact Card - ${contact.title}: ${contact.value}`}
                  >
                    <div className="flex items-start gap-4">
                      {Icon && (
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: contact.theme?.gradient }}
                        >
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </motion.div>
                      )}
                      <div className="flex-1 min-w-0">
                        {contact.title && (
                          <h3 className="text-white mb-1 font-medium text-sm sm:text-base">{contact.title}</h3>
                        )}
                        {contact.value && (
                          <p className="text-base sm:text-lg text-amber-400 mb-1 truncate">{contact.value}</p>
                        )}
                        {contact.description && (
                          <p className="text-xs sm:text-sm text-white/50">{contact.description}</p>
                        )}
                      </div>
                    </div>
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"
                      style={{ background: contact.theme?.gradient }}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Quick response */}
            {quickResponse && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="p-5 sm:p-6 backdrop-blur-lg rounded-2xl border"
                style={{
                  background: quickResponse.theme?.bg,
                  borderColor: quickResponse.theme?.border,
                }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: quickResponse.theme?.gradient }}
                  >
                    <LuLoader className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>
                  <div>
                    {quickResponse.title && (
                      <h3 className="text-white mb-2 font-medium text-sm sm:text-base">{quickResponse.title}</h3>
                    )}
                    {quickResponse.description && (
                      <p className="text-white/70 text-xs sm:text-sm leading-relaxed">{quickResponse.description}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}