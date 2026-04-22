"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ClientsSection as ClientsSectionData, ClientCard } from "@/lib/data/home/clientSection";

interface ClientsSectionProps {
  data: ClientsSectionData;
}

export function ClientsSection({ data }: ClientsSectionProps) {
  const { title, subtitle, clients, theme } = data;

  if (!clients || clients.length === 0) return null;

  return (
    <section className="py-20 sm:py-32 relative" style={{ background: theme?.sectionBg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          {title && (
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl mb-4"
              style={{ color: theme?.heading }}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-base sm:text-lg" style={{ color: theme?.subtitle }}>
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client: ClientCard, index: number) => (
            <motion.div
              key={`${client.name}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border cursor-pointer"
              style={{ borderColor: theme?.cardBorder }}
            >
              <div className="relative aspect-4/3 w-full overflow-hidden">
                {client.image && (
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}

                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ background: theme?.overlayGradient }}
                />

                {client.tag && (
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 text-xs rounded-full backdrop-blur-sm"
                      style={{
                        background: theme?.tagBg,
                        color: theme?.tagText,
                        border: `1px solid ${theme?.cardBorder}`,
                      }}
                    >
                      {client.tag}
                    </span>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    className="text-xl sm:text-2xl mb-2 leading-snug"
                    style={{ color: theme?.nameColor }}
                  >
                    {client.name}
                  </h3>
                  {client.description && (
                    <p
                      className="text-sm leading-relaxed line-clamp-2"
                      style={{ color: theme?.descColor }}
                    >
                      {client.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}