"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("pizza");

  const categories = [
    { id: "pizza", name: "Pizza" },
    { id: "chicken", name: "Fried Chicken" },
    { id: "burgers", name: "Burgers" },
    { id: "sides", name: "Sides" },
    { id: "drinks", name: "Drinks" },
  ];

  const menuItems: any = {
    pizza: [
      { name: "Chicken Tikka Pizza", price: "Rs. 1200", desc: "Loaded with chicken tikka & cheese", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" },
      { name: "Fajita Pizza", price: "Rs. 1100", desc: "Spicy fajita chicken & veggies", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80" },
      { name: "Cheese Lover Pizza", price: "Rs. 1000", desc: "Extra cheese, extra love", img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&q=80" },
      { name: "Pepperoni Pizza", price: "Rs. 1300", desc: "Classic pepperoni with mozzarella", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80" },
    ],
    chicken: [
      { name: "Fried Chicken (4 pcs)", price: "Rs. 800", desc: "Crispy golden fried chicken", img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80" },
      { name: "Hot Wings (8 pcs)", price: "Rs. 600", desc: "Spicy buffalo wings", img: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=600&q=80" },
      { name: "Chicken Nuggets", price: "Rs. 400", desc: "Tender chicken nuggets", img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=80" },
      { name: "Chicken Strips", price: "Rs. 550", desc: "Juicy chicken strips", img: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=600&q=80" },
    ],
    burgers: [
      { name: "Zinger Burger", price: "Rs. 450", desc: "Crispy chicken fillet burger", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80" },
      { name: "Beef Burger", price: "Rs. 550", desc: "Juicy grilled beef patty", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80" },
      { name: "Chicken Cheese Burger", price: "Rs. 500", desc: "Chicken with melted cheese", img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80" },
      { name: "Double Patty Burger", price: "Rs. 700", desc: "Double the taste", img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80" },
    ],
    sides: [
      { name: "Loaded Fries", price: "Rs. 350", desc: "Fries with cheese & chicken", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80" },
      { name: "French Fries", price: "Rs. 200", desc: "Crispy golden fries", img: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=600&q=80" },
      { name: "Onion Rings", price: "Rs. 300", desc: "Crispy battered onion rings", img: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=600&q=80" },
      { name: "Garlic Bread", price: "Rs. 250", desc: "Cheesy garlic bread", img: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=600&q=80" },
    ],
    drinks: [
      { name: "Soft Drink", price: "Rs. 100", desc: "Chilled soft drinks", img: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=600&q=80" },
      { name: "Fresh Lime", price: "Rs. 150", desc: "Fresh lemon juice", img: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=80" },
      { name: "Mango Shake", price: "Rs. 250", desc: "Fresh mango milkshake", img: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600&q=80" },
      { name: "Cold Coffee", price: "Rs. 300", desc: "Iced coffee with cream", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80" },
    ],
  };

  return (
    <section id="menu" className="py-24 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our <span className="text-orange-500">Menu</span>
          </h2>
          <p className="text-gray-400 text-lg">Choose your favorite category</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg shadow-orange-500/40"
                  : "bg-zinc-900 text-gray-300 hover:bg-zinc-800 border border-zinc-800"
              }`}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {menuItems[activeCategory].map((item: any, i: number) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-zinc-900 rounded-2xl p-4 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all border border-zinc-800 hover:border-orange-500/50"
              >
                <div className="relative h-48 w-full mb-4 overflow-hidden rounded-xl">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-red-600 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {item.price}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
                <button className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-2 rounded-full font-semibold hover:scale-105 transition flex items-center justify-center gap-2">
                  <Phone size={16} /> Order Now
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}