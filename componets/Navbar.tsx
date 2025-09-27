'use client';


import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
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

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Highlight active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const scrollPos = window.scrollY + 120;

      for (let i = 0; i < navLinks.length; i++) {
        const section = document.querySelector(navLinks[i].href);
        if (section instanceof HTMLElement) {
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

    <nav
  className={`backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 border px-4 py-2 md:px-8 md:py-3 fixed top-5 left-1/2 transform -translate-x-1/2 transition-shadow mt-0 rounded-full
  ${scrolled ? 'shadow-lg' : 'shadow'}
  ${open ? 'rounded-none' : 'rounded-2xl'}
  z-50 max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl
  flex items-center justify-between
  ${theme === 'dark' ? 'text-white border-gray-200' : 'text-black border-gray-800'}`}
    >
      <div className="flex w-full items-center justify-between">
        {/* Left: Logo & Title */}
        <div className="flex items-center gap-3 md:gap-4 min-w-[120px]">
          <img src="/globe.svg" alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-lg md:text-xl">Voyare</span>
        </div>

        {/* Center: Nav Links (desktop) */}
        <ul className="hidden md:flex gap-6 flex-1 justify-center">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-medium text-base transition-colors duration-200 px-4 py-2 rounded-lg 
                ${active === link.href ? 'bg-white/10 text-white font-bold' : 'text-gray-500 hover:bg-white/5'}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Theme Toggle & Hamburger */}
        <div className="flex items-center gap-2 md:gap-4 min-w-[60px] justify-end">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-400 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <span className="text-xl">🌙</span> : <span className="text-xl">☀️</span>}
          </button>
          {/* Hamburger (mobile only) */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-[60]"
          >
            <span className={`block w-7 h-1 bg-black rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : 'my-1'}`} />
            <span className={`block w-7 h-1 bg-black rounded transition-all duration-300 ${open ? 'opacity-0' : 'my-1'}`} />
            <span className={`block w-7 h-1 bg-black rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : 'my-1'}`} />
          </button>
        </div>
      </div>

      {/* Overlay + Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay (behind navbar now, so clickable) */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-white z-40"
            />
            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[85vw] max-w-xs bg-white text-black 
              shadow-2xl z-50 flex flex-col p-6 pt-8 border-l border-gray-800"
            >
              {/* <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="self-end text-3xl text-white mb-8"
              >
                &times;
              </button> */}
              <ul className="flex flex-col mt-10 gap-4">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block font-semibold text-base transition-colors duration-200 px-4 py-3 rounded-lg 
                      border border-white/10 bg-[#23232a] hover:bg-white/10 text-center 
                      ${active === link.href ? 'bg-white/10' : ''}`}
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
