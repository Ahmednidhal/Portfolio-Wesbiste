"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-background/70 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-wider text-foreground">
          AHMED<span className="text-gold">.</span>
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
          <Link href="#about" className="text-foreground/70 hover:text-gold transition-colors">
            ABOUT
          </Link>
          <Link href="#skills" className="text-foreground/70 hover:text-gold transition-colors">
            SKILLS
          </Link>
          <Link href="#portfolio" className="text-foreground/70 hover:text-gold transition-colors">
            PORTFOLIO
          </Link>
          <Link href="#experience" className="text-foreground/70 hover:text-gold transition-colors">
            EXPERIENCE
          </Link>
          <Link href="#contact" className="text-foreground/70 hover:text-gold transition-colors">
            CONTACT
          </Link>
        </div>
        <button className="md:hidden text-foreground">
          {/* Simple hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
