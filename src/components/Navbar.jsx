'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', id: 'top' },
  { label: 'About', id: 'about' },
  { label: 'AlgoJS', id: 'algojs' },
  { label: 'Projects', id: 'projects' },
  { label: 'MachineCoding', id: 'machinecoding' },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('top');
  const [hoveredTab, setHoveredTab] = useState(null);

  const scrollToSection = (id) => {
    setActiveTab(id);
    const targetId = id === 'top' ? 'about' : id;
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex items-center gap-1 px-3.5 py-2 rounded-full bg-slate-950/80 backdrop-blur-2xl border border-white/15 shadow-[0_15px_40px_rgba(0,0,0,0.8)] text-xs sm:text-sm text-slate-300 relative overflow-hidden"
      >
        {/* Subtle Ambient Glass Glow Behind Nav */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-indigo-500/10 pointer-events-none" />

        {/* Brand Logo */}
        <button
          onClick={() => scrollToSection('top')}
          className="relative font-extrabold text-white tracking-wider px-4 py-1.5 rounded-full hover:text-cyan-400 transition-colors z-10 group"
        >
          <span className="group-hover:scale-105 inline-block transition-transform duration-300">MADHU</span>
        </button>

        {/* Nav Links */}
        {NAV_ITEMS.map((item) => {
          const isSelected = activeTab === item.id;
          const isHovered = hoveredTab === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              onMouseEnter={() => setHoveredTab(item.id)}
              onMouseLeave={() => setHoveredTab(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="relative px-4 py-1.5 rounded-full font-medium transition-colors z-10"
            >
              {/* Hover Pill with Smooth Gliding Physics */}
              {isHovered && (
                <motion.div
                  layoutId="navHoverPill"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10 shadow-inner"
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                />
              )}

              {/* Active Selection Pill with Neon Cyan Aura */}
              {isSelected && (
                <motion.div
                  layoutId="navActivePill"
                  className="absolute inset-0 bg-cyan-500/20 border border-cyan-500/40 rounded-full -z-10 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}

              <span className={`relative z-10 transition-colors duration-300 ${isSelected ? 'text-cyan-300 font-semibold' : 'text-slate-300 hover:text-white'}`}>
                {item.label}
              </span>
            </motion.button>
          );
        })}

        {/* Contact CTA Button with Pulse Glow */}
        <motion.button
          onClick={() => scrollToSection('contact')}
          onMouseEnter={() => setHoveredTab('contact')}
          onMouseLeave={() => setHoveredTab(null)}
          whileHover={{ scale: 1.06, boxShadow: '0 0 25px rgba(34,211,238,0.5)' }}
          whileTap={{ scale: 0.95 }}
          className="relative ml-2 px-5 py-1.5 rounded-full font-semibold bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 shadow-lg shadow-cyan-500/25 transition-all z-10"
        >
          Contact
        </motion.button>
      </motion.nav>
    </header>
  );
}