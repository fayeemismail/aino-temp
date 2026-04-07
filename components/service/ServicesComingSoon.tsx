"use client";

import { motion } from "framer-motion";
import { LuLoader, LuSettings } from "react-icons/lu";
import { useEffect, useState } from "react";

const upcomingTech = ["Blockchain", "IoT Solutions", "AR/VR", "Quantum Computing"];

export function ServicesComingSoon() {
  const [particles, setParticles] = useState<Array<{ left: string; bottom: string }>>([]);

  // Generate random positions ONLY on the client after hydration
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }).map(() => ({
      left: `${Math.random() * 100}%`,
      bottom: "0%", // You can also randomize this if you want variety
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
              className="absolute inset-0 bg-linear-to-r from-transparent via-amber-400/10 to-transparent"
            />

            {/* Render particles only after client-side generation */}
            {particles.map((pos, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [-20, -100], 
                  opacity: [0, 1, 0], 
                  scale: [0, 1, 0] 
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                className="absolute w-2 h-2 bg-amber-400 rounded-full"
                style={{ 
                  left: pos.left,
                  bottom: pos.bottom 
                }}
              />
            ))}
          </div>

          {/* Rest of your content remains unchanged */}
          <div className="relative p-5 lg:p-16 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10">
            <div className="text-center space-y-8">
              {/* Spinning icon */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="inline-flex"
              >
                <div className="relative">
                  <LuSettings className="w-16 h-16 text-amber-400" />
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-amber-400 rounded-full blur-xl"
                  />
                </div>
              </motion.div>

              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="inline-flex items-center gap-2 lg:gap-2 px-1 lg:px-4 py-0 lg:py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6"
                >
                  <LuLoader className="w-4 h-4 text-amber-400 animate-spin" />
                  <span className="text-sm text-amber-400">In Progress</span>
                </motion.div>

                <h3 className="text-2xl md:text-4xl lg:text-5xl text-white mb-4">
                  Services{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-400">
                    Expanding Soon
                  </span>
                </h3>
                <p className="text-md lg:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
                  We&apos;re continuously expanding our services to bring more advanced
                  solutions and cutting-edge technologies to help your business thrive
                  in the digital age.
                </p>
              </div>

              {/* Animated progress bar */}
              <div className="max-w-md mx-auto">
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="h-full w-1/3 bg-linear-to-r from-amber-400 to-orange-400 rounded-full"
                  />
                </div>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                {upcomingTech.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/60"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}