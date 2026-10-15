"use client";

import { motion } from "framer-motion";
import { Tag, Percent, Gift } from "lucide-react";

export default function Offers() {
  const offers = [
    {
      icon: <Percent size={32} />,
      title: "50% OFF",
      desc: "On your first order above Rs. 1500",
      code: "WELCOME50",
      color: "from-red-600 to-orange-500",
    },
    {
      icon: <Gift size={32} />,
      title: "Free Delivery",
      desc: "On orders above Rs. 1000 in city area",
      code: "FREEDEL",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: <Tag size={32} />,
      title: "Buy 1 Get 1",
      desc: "On all large pizzas every Tuesday",
      code: "BOGO",
      color: "from-red-500 to-pink-500",
    },
  ];

  return (
    <section id="offers" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Special <span className="text-orange-500">Offers</span>
          </h2>
          <p className="text-gray-400 text-lg">Grab these deals before they're gone!</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative bg-gradient-to-br ${offer.color} rounded-2xl p-8 text-white shadow-xl overflow-hidden`}
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="mb-4 opacity-90">{offer.icon}</div>
                <h3 className="text-3xl font-bold mb-2">{offer.title}</h3>
                <p className="text-white/90 mb-6">{offer.desc}</p>
                <div className="bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                  <span className="text-xs uppercase tracking-wider opacity-80">Code:</span>{" "}
                  <span className="font-bold">{offer.code}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}