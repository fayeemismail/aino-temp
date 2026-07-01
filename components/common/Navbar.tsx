// components/common/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import type { Navbar as NavbarType } from "@/lib/data/common/navbarData";
import Image from "next/image";

interface NavbarProps {
  initialData: NavbarType | null;
}

export function Navbar({ initialData }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarData, setNavbarData] = useState<NavbarType | null>(initialData);

  // No need to fetch again - data comes from server
  // If you want real-time updates, you could still fetch on client as fallback

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Don't render until we have the navbar data
  if (!navbarData) {
    return null;
  }

  const { logo, navItems, theme, variant } = navbarData;

  // Determine background based on scroll and variant
  const getBackground = () => {
    if (scrolled) {
      return theme.backgroundScrolled;
    }
    if (variant === "transparent") {
      return theme.background;
    }
    if (variant === "solid") {
      return theme.background;
    }
    if (variant === "glass") {
      return theme.background;
    }
    return "transparent";
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
      style={{
        background: getBackground(),
        backdropFilter: variant === "glass" && !scrolled ? "blur(0px)" : 
                      variant === "glass" || scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "none"
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link 
            href={logo.link} 
            className="group"
            data-track-click="nav_click"
            data-track-category="navigation"
            data-track-label="Header - Logo"
          >
            {logo.image ? (
              <Image 
                src={logo.image} 
                alt={`${logo.textPrimary}${logo.textSecondary}`}
                height={100}
                width={100}
                className="h-10 w-auto"
              />
            ) : (
              <div className="text-2xl tracking-tight">
                <span className="font-light" style={{ color: theme.text }}>
                  {logo.textPrimary}
                </span>
                <span style={{ color: theme.accent }}>
                  {logo.textSecondary}
                </span>
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="relative group py-1"
                  data-track-click="nav_click"
                  data-track-category="navigation"
                  data-track-label={`Desktop - ${item.label}`}
                >
                  <span
                    className="text-sm tracking-wide transition-colors duration-300"
                    style={{
                      color: isActive ? theme.textActive : theme.textSecondary
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = theme.textHover;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = theme.textSecondary;
                      }
                    }}
                  >
                    {item.label}
                  </span>

                  {/* Active indicator */}
                  {isActive && (
                    <div 
                      className="absolute -bottom-1 left-0 right-0 h-0.5"
                      style={{ background: theme.gradient }}
                    />
                  )}

                  {/* Hover underline */}
                  {!isActive && (
                    <div 
                      className="absolute -bottom-1 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                      style={{ background: theme.hoverUnderline }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -mr-2"
            aria-label="Toggle menu"
            style={{ color: theme.text }}
            data-track-click="nav_menu_toggle"
            data-track-category="navigation"
            data-track-label={`Mobile Menu Toggle`}
          >
            {isMenuOpen ? <LuX size={28} /> : <LuMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden border-t"
          style={{
            background: theme.mobileBackground,
            borderColor: theme.border,
            backdropFilter: "blur(12px)"
          }}
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg tracking-wide py-1 transition-colors"
                  data-track-click="nav_click"
                  data-track-category="navigation"
                  data-track-label={`Mobile - ${item.label}`}
                  style={{
                    color: isActive ? theme.textActive : theme.textSecondary
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = theme.textHover;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = theme.textSecondary;
                    }
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}