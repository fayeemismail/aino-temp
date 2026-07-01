"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";
import type { IconType } from "react-icons";
import type { FooterData, FooterLink, SocialLink, FooterBottomLink } from "@/lib/data/common/footerData";

interface FooterProps {
  data: FooterData;
}

const iconMap: Record<string, IconType> = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaTwitter: FaTwitter,
  FaMailBulk: FaMailBulk,
};

export function Footer({ data }: FooterProps) {
  const { brand, quickLinks, socialLinks, contact, bottom, theme } = data;

  return (
    <footer
      className="relative border-t"
      style={{ background: theme?.background, borderColor: theme?.border }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:gap-12">

          {/* Brand + Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {(brand?.main || brand?.highlight) && (
              <div className="text-xl sm:text-2xl tracking-tight mb-4">
                <span className="font-light" style={{ color: theme?.textPrimary }}>
                  {brand?.main}
                </span>
                <span style={{ color: theme?.highlight }}>{brand?.highlight}</span>
              </div>
            )}

            {brand?.description && (
              <p
                className="leading-relaxed mb-6 sm:mb-8 max-w-md text-sm sm:text-base"
                style={{ color: theme?.textSecondary }}
              >
                {brand.description}
              </p>
            )}

            {/* Social Links */}
            {socialLinks && socialLinks.length > 0 && (
              <div className="flex items-center gap-3 sm:gap-4">
                {socialLinks.map((social: SocialLink, index: number) => {
                  const Icon = social.icon ? iconMap[social.icon] : undefined;
                  return (
                    <motion.a
                      key={social.label ?? index}
                      href={social.href ?? "#"}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-300 group"
                      style={{ background: theme?.socialBg }}
                      onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                        if (theme?.socialHoverBg) e.currentTarget.style.background = theme.socialHoverBg;
                      }}
                      onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                        if (theme?.socialBg) e.currentTarget.style.background = theme.socialBg;
                      }}
                      aria-label={social.label}
                      data-track-click="social_click"
                      data-track-category="social"
                      data-track-label={`Footer Social - ${social.label}`}
                    >
                      {Icon && (
                        <Icon
                          className="w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300"
                          style={{ color: theme?.socialIcon }}
                          onMouseEnter={(e: React.MouseEvent<SVGElement>) => {
                            if (theme?.socialIconHover) (e.currentTarget as SVGElement).style.color = theme.socialIconHover;
                          }}
                          onMouseLeave={(e: React.MouseEvent<SVGElement>) => {
                            if (theme?.socialIcon) (e.currentTarget as SVGElement).style.color = theme.socialIcon;
                          }}
                        />
                      )}
                    </motion.a>
                  );
                })}
              </div>
            )}
          </motion.div>

          {/* Quick Links & Contact */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12">

            {/* Quick Links */}
            {quickLinks && quickLinks.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3
                  className="mb-4 font-medium text-sm sm:text-base"
                  style={{ color: theme?.textPrimary }}
                >
                  Quick Links
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {quickLinks.map((link: FooterLink) => (
                    <li key={link.path}>
                      <Link
                        href={link.path ?? "#"}
                        className="text-xs sm:text-sm transition-colors duration-300"
                        style={{ color: theme?.textSecondary }}
                        onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          if (theme?.highlight) e.currentTarget.style.color = theme.highlight;
                        }}
                        onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          if (theme?.textSecondary) e.currentTarget.style.color = theme.textSecondary;
                        }}
                        data-track-click="footer_nav_click"
                        data-track-category="navigation"
                        data-track-label={`Footer QuickLink - ${link.label}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Contact Info */}
            {contact && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3
                  className="mb-4 font-medium text-sm sm:text-base"
                  style={{ color: theme?.textPrimary }}
                >
                  Get In Touch
                </h3>
                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                  {contact.email && (
                    <p style={{ color: theme?.textSecondary }}>{contact.email}</p>
                  )}
                  {contact.phone && (
                    <p style={{ color: theme?.textSecondary }}>{contact.phone}</p>
                  )}
                  {contact.location && (
                    <p style={{ color: theme?.textSecondary }}>{contact.location}</p>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        {bottom && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t flex flex-col gap-3 text-xs sm:text-sm"
            style={{ borderColor: theme?.border }}
          >
            {bottom.copyright && (
              <p style={{ color: theme?.textMuted }}>{bottom.copyright}</p>
            )}
            {bottom.links && bottom.links.length > 0 && (
              <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2">
                {bottom.links.map((link: FooterBottomLink) => (
                  <a
                    key={link.label}
                    href={link.href ?? "#"}
                    className="transition-colors duration-300"
                    style={{ color: theme?.textMuted }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      if (theme?.highlight) e.currentTarget.style.color = theme.highlight;
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      if (theme?.textMuted) e.currentTarget.style.color = theme.textMuted;
                    }}
                    data-track-click="footer_bottom_click"
                    data-track-category="navigation"
                    data-track-label={`Footer Bottom - ${link.label}`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </footer>
  );
}