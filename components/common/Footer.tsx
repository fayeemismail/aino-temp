"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";

const quickLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

const socialLinks = [
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaMailBulk, href: "#", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0d1829] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:gap-12">
          {/* Brand + Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xl sm:text-2xl tracking-tight mb-4">
              <span className="text-white font-light">Ainor</span>
              <span className="text-amber-400">ax</span>
            </div>
            <p className="text-white/60 leading-relaxed mb-6 sm:mb-8 max-w-md text-sm sm:text-base">
              Transforming ideas into intelligent digital experiences through
              modern web development and cutting-edge AI solutions.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-amber-400/20 flex items-center justify-center transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 group-hover:text-amber-400 transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links & Contact */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-white mb-4 font-medium text-sm sm:text-base">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-white/60 hover:text-amber-400 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-white mb-4 font-medium text-sm sm:text-base">Get In Touch</h3>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <p className="text-white/60">hello@ainorax.com</p>
                <p className="text-white/60">+1 (555) 123-4567</p>
                <p className="text-white/60">San Francisco, CA</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/5 flex flex-col gap-3 text-xs sm:text-sm"
        >
          <p className="text-white/40">© 2026 Ainorax. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 text-white/40">
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}