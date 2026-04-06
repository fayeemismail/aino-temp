// components/common/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#15233e]/80 backdrop-blur-xl shadow-lg "
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="group">
            <div className="text-2xl tracking-tight">
              <span className="text-white font-light">Ainor</span>
              <span className="text-amber-400">ax</span>
            </div>
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
                >
                  <span
                    className={`text-sm tracking-wide transition-colors duration-300 ${
                      isActive ? "text-amber-400" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-400" />
                  )}

                  {/* Hover underline */}
                  {!isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <LuX size={28} /> : <LuMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#15233e]/95 backdrop-blur-xl">
          <div className="px-6 py-8 flex flex-col gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg tracking-wide transition-colors py-1 ${
                    isActive ? "text-amber-400" : "text-white/80 hover:text-white"
                  }`}
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