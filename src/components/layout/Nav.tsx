"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        scrolled ? "bg-cream/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-pad)] flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl tracking-wide text-ink relative z-50">
          Obras Vivas
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {["Proceso", "Obras", "Mapa", "Equipo"].map((item) => (
            <button
              key={item}
              onClick={(e) => {
                e.preventDefault();
                const target = `#${item.toLowerCase()}`;
                if ((window as unknown as { lenis: { scrollTo: (t: string) => void } }).lenis) {
                  (window as unknown as { lenis: { scrollTo: (t: string) => void } }).lenis.scrollTo(target);
                } else {
                  document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-xs uppercase tracking-widest text-ink hover:text-gold transition-colors"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden z-50 relative w-8 h-8 flex flex-col justify-center items-end gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={clsx("h-px bg-ink transition-all duration-300 origin-right", menuOpen ? "w-6 -rotate-45 -translate-y-[1px]" : "w-6")} />
          <span className={clsx("h-px bg-ink transition-all duration-300", menuOpen ? "w-0 opacity-0" : "w-4")} />
          <span className={clsx("h-px bg-ink transition-all duration-300 origin-right", menuOpen ? "w-6 rotate-45 translate-y-[1px]" : "w-5")} />
        </button>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 bg-cream/98 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {["Proceso", "Obras", "Mapa", "Equipo"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(false);
                      setTimeout(() => {
                        const target = `#${item.toLowerCase()}`;
                        if ((window as unknown as { lenis: { scrollTo: (t: string) => void } }).lenis) {
                          (window as unknown as { lenis: { scrollTo: (t: string) => void } }).lenis.scrollTo(target);
                        } else {
                          document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
                        }
                      }, 100);
                    }}
                    className="font-serif text-4xl text-ink hover:text-gold transition-colors"
                  >
                    {item}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
