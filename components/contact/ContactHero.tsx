"use client";

import { LuMail } from "react-icons/lu";

export function ContactHero() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-8">
            <LuMail className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-400">Get In Touch</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white mb-6 leading-tight">
            Let&apos;s Start a{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-400">
              Conversation
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-xl text-white/70 leading-relaxed">
            Have a project in mind? Want to discuss how we can help transform your
            business? We&apos;d love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
}