"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LuBrain, LuCircleCheck, LuCloud, LuCode, LuMegaphone, LuSearch, LuShoppingCart } from "react-icons/lu";
import type { IconType } from "react-icons";
import type { MainServiceItem } from "@/lib/data/service/mainServicesData";

interface MainServicesProps {
  data: MainServiceItem[];
}

const iconMap: Record<string, IconType> = {
  LuCode: LuCode,
  LuBrain: LuBrain,
  LuShoppingCart: LuShoppingCart,
  LuCloud: LuCloud,
  megaphone: LuMegaphone,
  search: LuSearch
};

export function MainServices({ data }: MainServicesProps) {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        {data.map((service: MainServiceItem, index: number) => {
          const isEven = index % 2 === 0;
          const Icon = service.icon ? iconMap[service.icon] : undefined;

          return (
            <motion.div
              key={service.title ?? index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div className={isEven ? "" : "lg:order-2"}>
                <div className="relative aspect-16/10 rounded-3xl overflow-hidden group">
                  {service.image && (
                    <Image
                      src={service.image}
                      alt={service.title ?? ""}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  )}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{ background: service.gradient }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${isEven ? "" : "lg:order-1"}`}>
                {Icon && (
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: service.theme?.iconBgGradient }}
                  >
                    <Icon className="w-8 h-8" style={{ color: service.theme?.iconColor }} />
                  </div>
                )}

                {service.title && (
                  <h2 className="text-3xl lg:text-4xl text-white">{service.title}</h2>
                )}

                {service.description && (
                  <p className="text-white/70 leading-relaxed text-lg">{service.description}</p>
                )}

                {service.features && service.features.length > 0 && (
                  <ul className="space-y-3">
                    {service.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-center gap-3 text-white/80">
                        <LuCircleCheck
                          className="w-5 h-5 shrink-0"
                          style={{ color: service.theme?.checkIconColor }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}