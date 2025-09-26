"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
  <footer className="pt-12 pb-6 mt-12  text-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4"
      >
        <div className="flex flex-wrap gap-12 justify-between items-start max-w-6xl mx-auto">
          {/* Logo and copyright */}
          <div className="min-w-[220px] mb-6">
            <div className="flex items-center gap-3 mb-3">
              <img src="/globe.svg" alt="Logo" className="h-7 w-7" />
              <span className="font-bold text-xl">Voyare</span>
            </div>
            <div className="text-[#bfc5d2] text-[15px] mb-2">&copy; {new Date().getFullYear()} Voyare Travel. All rights reserved.</div>
          </div>
          {/* Quick Links */}
          
          {/* Contact Info */}
          <div className="min-w-[220px] mb-6">
            <div className="font-semibold mb-2">Contact</div>
            <div className="text-[#bfc5d2] text-[15px] mb-1">info@voyare.com</div>
            <div className="text-[#bfc5d2] text-[15px] mb-1">+123 456 7890</div>
            <div className="text-[#bfc5d2] text-[15px]">123 Main St, City, Country</div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
