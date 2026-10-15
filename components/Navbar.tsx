"use client";

import { useState, useEffect } from "react";
import { Menu as MenuIcon, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Offers", href: "#offers" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center font-extrabold text-white">
            C&amp;P
          </div>
          <span className="text-lg font-extrabold text-white">
            Chicken <span className="text-orange-500">&amp;</span> Pizza
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <a
                href={link.href}
                className="text-gray-300 font-medium hover:text-orange-500 transition"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
          <a
            href="#contact"
            className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-5 py-2 rounded-full font-medium shadow-lg shadow-orange-500/30 flex items-center gap-2 hover:scale-105 transition"
          >
            <Phone size={16} /> Order Now
          </a>
        </ul>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-gray-300 font-medium hover:text-orange-500 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <a
                href="#contact"
                className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-5 py-2 rounded-full font-medium text-center"
              >
                📞 Order Now
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}