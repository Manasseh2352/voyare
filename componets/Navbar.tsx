'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';


export default function Navbar() {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#vision', label: 'Vision' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Highlight active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const scrollPos = window.scrollY + 120;
      for (let i = 0; i < navLinks.length; i++) {
        const section = document.querySelector(navLinks[i].href) as HTMLElement | null;
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (top <= scrollPos && top + height > scrollPos) {
            setActive(navLinks[i].href);
            return;
          }
        }
      }
      setActive('');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <nav className={`backdrop-blur bg-white/80 border-b mx-20 top-10 rounded-full border-gray-200 px-8 h-18 flex items-center justify-between sticky top-0 z-50 transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
        <div className="flex items-center gap-4">
          <img src="/globe.svg" alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-xl text-gray-900">Voyare Travel</span>
        </div>
        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {navLinks.map(link => (
            <li key={link.href} className="navbar-link">
              <a
                href={link.href}
                className={`font-medium text-base transition-colors duration-200 px-2 py-1 rounded ${active === link.href ? 'text-blue-600 bg-blue-50' : 'text-gray-900 hover:text-blue-600'}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Hamburger Icon (mobile only) */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 bg-transparent border-none cursor-pointer z-50 relative"
        >
          <span className={`block w-7 h-1 bg-gray-900 my-1 rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-7 h-1 bg-gray-900 my-1 rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-1 bg-gray-900 my-1 rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
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
                className="fixed inset-0 bg-black bg-opacity-30 z-40"
              />
              {/* Drawer slides in from right */}
              <motion.div
                key="drawer"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 flex flex-col p-8"
              >
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="self-end text-3xl text-gray-900 mb-8 bg-transparent border-none cursor-pointer"
                >
                  &times;
                </button>
                <ul className="flex flex-col gap-6">
                  {navLinks.map(link => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className={`font-medium text-lg transition-colors duration-200 px-2 py-1 rounded ${active === link.href ? 'text-blue-600 bg-blue-50' : 'text-gray-900 hover:text-blue-600'}`}
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
      </nav>
  );
}
