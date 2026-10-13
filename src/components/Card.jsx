'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Card({ title, description, tags, links, isFeatured, torchBrightness = 1, torchSize = 400, isTorchOn = true }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const descString = typeof description === 'string' ? description : String(description || '');

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6, scale: isFeatured ? 1.02 : 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      className={`relative overflow-hidden w-[330px] sm:w-[370px] min-h-[310px] rounded-2xl bg-black/95 backdrop-blur-xl border transition-colors duration-300 p-6 flex flex-col justify-between cursor-pointer ${
        isFeatured 
          ? 'border-cyan-500/50 shadow-[0_20px_50px_rgba(34,211,238,0.18)]' 
          : 'border-white/15'
      }`}
    >
      {/* Upgraded Cyberpunk Cyan/Indigo Surface Glow matching black aesthetic */}
      {isTorchOn && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-200 rounded-2xl z-0"
          style={{
            background: `radial-gradient(${torchSize}px circle at ${position.x}px ${position.y}px, rgba(34, 211, 238, ${0.28 * torchBrightness}), rgba(99, 102, 241, ${0.15 * torchBrightness}) 45%, transparent 80%)`,
          }}
        />
      )}

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-base font-semibold text-slate-100 tracking-tight leading-snug">
            {title}
          </h3>
          <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
        </div>

        {/* Slower, Hacker-Green Letter Reveal Animation on Hover */}
        <p className="text-xs text-slate-400 leading-relaxed font-normal mb-6 flex flex-wrap">
          {descString.split('').map((char, idx) => (
            <motion.span
              key={idx}
              initial={{ color: '#94a3b8', y: 0 }}
              animate={isHovered ? { color: ['#94a3b8', '#22dc4a', '#94a3b8'], y: [0, -1.5, 0] } : { color: '#94a3b8', y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.015, ease: 'easeInOut' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </p>
      </div>

      <div className="relative z-10">
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tags?.map((tag, idx) => {
            const tagName = typeof tag === 'object' ? (tag.name || tag.label || 'Tech') : tag;
            return (
              <span
                key={idx}
                className="px-2.5 py-0.5 text-[11px] font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full"
              >
                {tagName}
              </span>
            );
          })}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
          {links?.code && (
            <a
              href={links.code}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              Code
            </a>
          )}
          {links?.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}