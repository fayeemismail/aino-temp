"use client";

import { motion } from "framer-motion";
import { LuEye, LuTarget, LuUsers } from "react-icons/lu";

const values = [
  {
    icon: LuTarget,
    title: "Mission-Driven",
    description:
      "We exist to transform complex challenges into elegant, scalable solutions that drive real business value.",
  },
  {
    icon: LuEye,
    title: "Visionary Thinking",
    description:
      "Looking beyond today's trends to anticipate tomorrow's opportunities and prepare for the future.",
  },
  {
    icon: LuUsers,
    title: "Collaborative Spirit",
    description:
      "Your success is our success. We work as an extension of your team, not just a vendor.",
  },
];

export function AboutValues() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-4">What Drives Us</h2>
          <p className="text-white/60 text-lg">Our core values shape everything we do</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              <div className="relative p-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden h-full hover:bg-white/10 transition-all duration-500">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.8 }}
                  className="w-16 h-16 bg-linear-to-br from-amber-400/20 to-orange-400/20 rounded-2xl flex items-center justify-center mb-6"
                >
                  <value.icon className="w-8 h-8 text-amber-400" />
                </motion.div>

                <h3 className="text-2xl text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-white/60 leading-relaxed">{value.description}</p>

                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute -bottom-8 -right-8 w-32 h-32 bg-linear-to-br from-amber-400 to-orange-400 rounded-full blur-3xl"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
