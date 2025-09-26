'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';


const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#vision', label: 'Vision' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Lock scroll when menu is open
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <nav style={{ background: '#fff', borderBottom: '1px solid #e5e7eb', padding: '0 32px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <img src="/globe.svg" alt="Logo" style={{ height: 32, width: 32 }} />
        <span style={{ fontWeight: 700, fontSize: 22, color: '#232a36' }}>Voyare Travel</span>
      </div>
      {/* Desktop Nav */}
      <ul
        style={{
          display: 'flex',
          gap: 32,
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
        className="navbar-desktop"
      >
        {navLinks.map(link => (
          <li key={link.href} className="navbar-link">
            <a href={link.href} style={{ color: '#232a36', fontWeight: 500, textDecoration: 'none', fontSize: 16 }}>{link.label}</a>
          </li>
        ))}
      </ul>
      {/* Hamburger Icon (mobile only) */}
      <button
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          zIndex: 102,
        }}
        className="navbar-hamburger"
      >
        <span style={{ display: 'block', width: 28, height: 3, background: '#232a36', margin: '6px 0', borderRadius: 2 }}></span>
        <span style={{ display: 'block', width: 28, height: 3, background: '#232a36', margin: '6px 0', borderRadius: 2 }}></span>
        <span style={{ display: 'block', width: 28, height: 3, background: '#232a36', margin: '6px 0', borderRadius: 2 }}></span>
      </button>
      {/* Overlay and Side Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(0,0,0,0.3)',
                zIndex: 101,
              }}
            />
            {/* Drawer slides in from right */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                height: '100vh',
                width: 260,
                background: '#fff',
                boxShadow: '-2px 0 16px rgba(0,0,0,0.08)',
                zIndex: 102,
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                style={{
                  alignSelf: 'flex-end',
                  background: 'none',
                  border: 'none',
                  fontSize: 28,
                  color: '#232a36',
                  marginBottom: 32,
                  cursor: 'pointer',
                }}
              >
                &times;
              </button>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 24 }}>
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      style={{ color: '#232a36', fontWeight: 500, textDecoration: 'none', fontSize: 20 }}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .navbar-desktop {
            display: none !important;
          }
          .navbar-hamburger {
            display: block !important;
          }
        }
        @media (min-width: 901px) {
          .navbar-hamburger {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;