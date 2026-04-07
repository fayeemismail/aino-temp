"use client";

import { motion } from "framer-motion";
import { LuBot, LuDatabase, LuLock, LuSmartphone, LuTrendingUp, LuZap } from "react-icons/lu";

const capabilities = [
  { icon: LuSmartphone, title: "Mobile-First Design", description: "Optimized for all devices" },
  { icon: LuDatabase, title: "Database Design", description: "Scalable data architecture" },
  { icon: LuBot, title: "Chatbot Development", description: "AI-powered conversations" },
  { icon: LuTrendingUp, title: "Analytics Integration", description: "Data-driven insights" },
  { icon: LuLock, title: "Security & Compliance", description: "Enterprise-grade protection" },
  { icon: LuZap, title: "Performance Optimization", description: "Lightning-fast experiences" },
];

export function AdditionalCapabilities() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Additional Capabilities
          </h2>
          <p className="text-white/60 text-lg">
            Specialized expertise across the technology spectrum
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-linear-to-br from-amber-400/20 to-orange-400/20 rounded-xl flex items-center justify-center shrink-0"
                >
                  <cap.icon className="w-6 h-6 text-amber-400" />
                </motion.div>
                <div>
                  <h3 className="text-white mb-1 group-hover:text-amber-400 transition-colors duration-300">
                    {cap.title}
                  </h3>
                  <p className="text-white/60 text-sm">{cap.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
