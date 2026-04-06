"use client";

import { motion } from "framer-motion";

const process = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We dive deep into understanding your business goals, challenges, and opportunities to create a comprehensive strategic roadmap.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "Design & Architecture",
    description:
      "Crafting intuitive user experiences and robust technical architectures that balance innovation with practicality.",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "Building with precision using modern technologies, agile methodologies, and rigorous quality assurance practices.",
    color: "from-amber-500 to-orange-500",
  },
  {
    number: "04",
    title: "Launch & Growth",
    description:
      "Seamless deployment with ongoing support, optimization, and strategic guidance to ensure continued success.",
    color: "from-emerald-500 to-teal-500",
  },
];

export function AboutProcess() {
  return (
    <section className="py-32 relative overflow-hidden">
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-4">How We Work</h2>
          <p className="text-white/60 text-lg">
            A proven approach to delivering exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {process.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="relative p-8 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500">
                {/* Large number bg */}
                <div className="absolute top-4 right-4 text-8xl font-bold text-white/5 select-none">
                  {step.number}
                </div>

                {/* linear bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  className={`h-1 w-20 bg-linear-to-r ${step.color} rounded-full mb-6 origin-left`}
                />

                <h3 className="text-2xl text-white mb-3 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-amber-400 group-hover:to-orange-400 transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed relative z-10">
                  {step.description}
                </p>

                <motion.div
                  animate={{ opacity: [0, 0.3, 0], scale: [0.8, 1, 0.8] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className={`absolute -bottom-12 -right-12 w-48 h-48 bg-linear-to-br ${step.color} rounded-full blur-3xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
