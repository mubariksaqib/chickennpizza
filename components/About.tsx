"use client";

import { motion } from "framer-motion";
import { Clock, Star, Pizza, Phone } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About <span className="text-orange-500">Us</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            Chicken &amp; Pizza ek premium fast food destination hai jahan aapko milega
            crispy fried chicken, cheesy pizzas, juicy burgers aur refreshing drinks.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Hum fresh ingredients use karte hain aur har order ko love ke saath banate hain.
            Fast delivery aur best taste — yahi hamari pehchaan hai.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: <Clock size={20} />, text: "Open 11 AM - 11 PM" },
              { icon: <Star size={20} />, text: "5 Star Rated" },
              { icon: <Pizza size={20} />, text: "Fresh Ingredients" },
              { icon: <Phone size={20} />, text: "Fast Delivery" },
            ].map((f) => (
              <div key={f.text} className="flex items-center gap-2 text-gray-300">
                <span className="text-orange-500">{f.icon}</span>
                <span className="text-sm font-medium">{f.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-96 rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80"
            alt="Pizza"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}