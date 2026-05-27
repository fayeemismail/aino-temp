// components/common/Loader.tsx
"use client";

import { motion } from "framer-motion";
import { LuZap } from "react-icons/lu";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const visited = sessionStorage.getItem("ainorax_visited");

    if (visited) {
      // Returning visitor → hide loader immediately
      setLoading(false);
      return;
    }

    // First time visitor
    setIsFirstVisit(true);
    sessionStorage.setItem("ainorax_visited", "true");

    const handleLoad = () => {
      setLoading(false);
    };

    // If page is already loaded
    if (document.readyState === "complete") {
      setTimeout(() => setLoading(false), 400); // Small grace period for smooth feel
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: isFirstVisit ? 0.8 : 0 }}
      className="fixed inset-0 z-100 flex items-center justify-center bg-[#15233e]"
      onAnimationComplete={() => {
        if (!isFirstVisit) setLoading(false);
      }}
    >
      <div className="relative flex flex-col items-center">
        <div className="relative mb-10">
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="w-20 h-20 rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/30"
          >
            <div className="text-4xl font-light tracking-tighter text-white">
              Ainor<span className="text-blue-400">ax</span>
            </div>
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.8, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute inset-0 -m-6 rounded-[22px] border border-blue-400/30"
          />
        </div>

        <div className="flex items-center gap-3 mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
          >
            <LuZap className="w-5 h-5 text-blue-400" />
          </motion.div>
          <p className="text-white/70 text-sm tracking-[4px] font-medium uppercase">
            Loading...
          </p>
        </div>

        <div className="w-64 h-px bg-white/10 relative overflow-hidden rounded">
          <motion.div
            className="absolute top-0 left-0 h-full bg-linear-to- from-blue-400 via-purple-400 to-blue-400"
            animate={{ width: ["0%", "100%"], x: ["-100%", "0%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <p className="mt-10 text-[10px] text-white/40 tracking-widest">
          AINORAX
        </p>
      </div>
    </motion.div>
  );
}