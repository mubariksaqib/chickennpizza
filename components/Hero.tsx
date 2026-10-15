"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black pt-24 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-8 gap-8 p-8 text-6xl">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              {["🍕", "🍔", "🍟", "🍗", "🥤", "🍰", "🌮", "🍩"][i % 8]}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block bg-orange-500/10 border border-orange-500/30 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6"
        >
          🔥 Fresh &amp; Hot Fast Food
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight text-white"
        >
          Welcome to <br />
          <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Chicken &amp; Pizza
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Freshly made, perfectly served. Your favourite fast food destination.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#menu"
            className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/40 hover:scale-105 transition"
          >
            Explore Menu <ArrowRight size={20} />
          </a>
          <a
            href="https://wa.me/923000000000"
            target="_blank"
            className="border-2 border-orange-500/50 text-orange-400 px-8 py-4 rounded-full font-semibold hover:bg-orange-500/10 transition flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} /> Order Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}