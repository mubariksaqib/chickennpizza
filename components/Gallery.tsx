"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80",
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
    "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80",
    "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=600&q=80",
    "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80",
    "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=600&q=80",
    "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80",
  ];

  return (
    <section id="gallery" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our <span className="text-orange-500">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg">A glimpse of our delicious food</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-orange-500/20 transition-all cursor-pointer group"
            >
              <img
                src={img}
                alt={`Food ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}