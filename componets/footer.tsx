"use client";

import { motion } from "framer-motion";

export default function Page() {
    return (
        <footer className="bg-gray-800 text-white py-4 sm:py-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 text-center text-sm sm:text-base"
        >
          <footer style={{ background: '#232a36', color: '#fff', padding: '48px 0 24px 0', marginTop: 48 }}>
            <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', flexWrap: 'wrap', gap: 48, justifyContent: 'space-between' }}>
              <div style={{ minWidth: 220, marginBottom: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <img src="/globe.svg" alt="Logo" style={{ height: 28, width: 28 }} />
                  <span style={{ fontWeight: 700, fontSize: 20 }}>Voyare Travel</span>
                </div>
                <div style={{ color: '#bfc5d2', fontSize: 15, marginBottom: 8 }}>
                  &copy; {new Date().getFullYear()} Voyare Travel. All rights reserved.
                </div>
              </div>
              <div style={{ minWidth: 180, marginBottom: 24 }}>
                <div style={{ fontWeight: 600, marginBottom: 10 }}>Quick Links</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#bfc5d2', fontSize: 15 }}>
                  <li><a href="#home" style={{ color: '#bfc5d2', textDecoration: 'none' }}>Home</a></li>
                  <li><a href="#about" style={{ color: '#bfc5d2', textDecoration: 'none' }}>About</a></li>
                  <li><a href="#services" style={{ color: '#bfc5d2', textDecoration: 'none' }}>Services</a></li>
                  <li><a href="#vision" style={{ color: '#bfc5d2', textDecoration: 'none' }}>Vision</a></li>
                  <li><a href="#testimonials" style={{ color: '#bfc5d2', textDecoration: 'none' }}>Testimonials</a></li>
                  <li><a href="#contact" style={{ color: '#bfc5d2', textDecoration: 'none' }}>Contact</a></li>
                </ul>
              </div>
              <div style={{ minWidth: 220, marginBottom: 24 }}>
                <div style={{ fontWeight: 600, marginBottom: 10 }}>Contact</div>
                <div style={{ color: '#bfc5d2', fontSize: 15, marginBottom: 6 }}>info@voyare.com</div>
                <div style={{ color: '#bfc5d2', fontSize: 15, marginBottom: 6 }}>+123 456 7890</div>
                <div style={{ color: '#bfc5d2', fontSize: 15 }}>123 Main St, City, Country</div>
              </div>
            </div>
          </footer>
        </motion.div>
      </footer>
    );
}
