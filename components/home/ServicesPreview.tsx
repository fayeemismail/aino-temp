//components/home/ServicePreview
"use client";

import { motion } from "framer-motion";
import { LuArrowRight, LuBrain, LuCloud, LuCode, LuShoppingCart } from "react-icons/lu";

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
  return (
    <section className="py-32 relative bg-[#0a083767] ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 ">
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

        {/* Horizontal scroll container */}
        <div
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
              className="min-w-87.5 lg:min-w-100 snap-start group"
            >
              <div className="relative h-full p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden">
                {/* linear overlay on hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-linear-to-br ${service.color} rounded-2xl flex items-center justify-center relative overflow-hidden`}
                  >
                    <service.icon className="w-8 h-8 text-white relative z-10" />
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-white rounded-2xl"
                    />
                  </motion.div>
                </div>

                <h3 className="text-2xl text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-amber-400 group-hover:to-orange-400 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>

                {/* Corner decoration */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.2 }}
                  className="absolute -bottom-4 -right-4 w-32 h-32 bg-linear-to-br from-amber-400 to-transparent rounded-full blur-2xl"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex items-center justify-center gap-2 text-white/40"
        >
          <LuArrowRight className="w-4 h-4" />
          <span className="text-sm">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
