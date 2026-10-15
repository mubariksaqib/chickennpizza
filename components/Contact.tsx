"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const contacts = [
    { icon: <MapPin size={24} />, title: "Location", text: "123 Food Street, Your City" },
    { icon: <Phone size={24} />, title: "Phone", text: "+92 300 0000000" },
    { icon: <Mail size={24} />, title: "Email", text: "hello@chickenandpizza.com" },
    { icon: <Clock size={24} />, title: "Hours", text: "Mon-Sun: 11:00 AM - 11:00 PM" },
  ];

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Contact <span className="text-orange-500">Us</span>
          </h2>
          <p className="text-gray-400 text-lg">Get in touch with us</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {contacts.map((c) => (
              <div
                key={c.title}
                className="flex items-start gap-4 p-5 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-orange-500/50 transition"
              >
                <div className="text-orange-500 mt-1">{c.icon}</div>
                <div>
                  <h4 className="font-bold text-white">{c.title}</h4>
                  <p className="text-gray-400">{c.text}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white focus:border-orange-500 focus:outline-none transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white focus:border-orange-500 focus:outline-none transition"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white focus:border-orange-500 focus:outline-none transition"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl bg-black border border-zinc-800 text-white focus:border-orange-500 focus:outline-none transition resize-none"
            ></textarea>
            <button className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition flex items-center justify-center gap-2">
              <Send size={18} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}