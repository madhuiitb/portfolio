'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import Card from '@/components/Card';
import IconsBar from '@/components/IconsBar';
import TorchControl from '@/components/TorchControl';
import GalaxyBackground from '@/components/GalaxyBackground';
import ContactSection from '@/components/ContactSection';
import { PROJECT_DETAILS } from '../lib/constants';
import styles from './page.module.css';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [brightness, setBrightness] = useState(1.2);
  const [beamSize, setBeamSize] = useState(420);
  const [isGlowOn, setIsGlowOn] = useState(true);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? PROJECT_DETAILS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === PROJECT_DETAILS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="top" className={styles.page}>
      <GalaxyBackground />

      <TorchControl
        brightness={brightness}
        setBrightness={setBrightness}
        size={beamSize}
        setSize={setBeamSize}
        isTorchOn={isGlowOn}
        setIsTorchOn={setIsGlowOn}
      />

      {/* 1. About / Hero Section */}
      <div id="about" className="pt-16">
        <HeroSection />
      </div>

      {/* 2. Projects Carousel Section */}
      <section id="projects" className="relative w-full max-w-5xl mx-auto px-4 py-10 flex flex-col items-center select-none">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-white tracking-tight">Featured Projects</h2>
        </div>

        <div className="relative flex items-center justify-center gap-4 overflow-visible py-8 w-full min-h-[380px]">
          {PROJECT_DETAILS.map((item, index) => {
            const distance = index - activeIndex;
            const isCenter = distance === 0;

            return (
              <motion.div
                key={item.id || item.title || index}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                animate={{
                  scale: isCenter ? 1.06 : 0.86,
                  opacity: Math.abs(distance) > 2 ? 0 : isCenter ? 1 : 0.45,
                  x: distance * 70,
                  rotateY: distance * -12,
                  zIndex: PROJECT_DETAILS.length - Math.abs(distance),
                }}
                transition={{ type: 'spring', stiffness: 140, damping: 25 }}
                className="cursor-pointer absolute sm:relative"
                style={{ display: Math.abs(distance) > 2 ? 'none' : 'block' }}
              >
                <Card
                  title={item.title}
                  tags={item.tags}
                  description={item.description}
                  links={item.links}
                  isFeatured={isCenter}
                  torchBrightness={brightness}
                  torchSize={beamSize}
                  isTorchOn={isGlowOn}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Navigation Bar */}
        <div className="flex items-center gap-6 mt-6 z-10">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors shadow-lg"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {PROJECT_DETAILS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2.5 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors shadow-lg"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </section>

      {/* 3. AlgoJS Coming Soon Section */}
      <section id="algojs" className="py-20 max-w-2xl mx-auto px-4 text-center">
        <div className="p-8 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-xl">
          <span className="px-3 py-1 text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded-full uppercase tracking-widest">
            Coming Soon
          </span>
          <h2 className="text-xl font-bold text-white mt-4 mb-2">AlgoJS / Algorithms in TypeScript</h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            A curated collection of advanced data structures, sorting algorithms, and optimized problem solutions implemented in JavaScript & TypeScript.
          </p>
        </div>
      </section>

      {/* 4. Machine Coding Coming Soon Section */}
      <section id="machinecoding" className="py-12 max-w-2xl mx-auto px-4 text-center">
        <div className="p-8 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-xl">
          <span className="px-3 py-1 text-[10px] font-mono font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full uppercase tracking-widest">
            Coming Soon
          </span>
          <h2 className="text-xl font-bold text-white mt-4 mb-2">Machine Coding Components</h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Production-grade frontend machine coding solutions (like Polls, Typeaheads, File Explorers, and Carousels) built from scratch with clean state management.
          </p>
        </div>
      </section>

      {/* 5. Animated Contact Form Section */}
      <ContactSection />

      {/* Architecture & Philosophy Section */}
      <section className="py-16 max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-xl font-bold text-slate-100 mb-3 tracking-tight">
          Architecture & Philosophy
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
          Building interfaces that perform reliably under high concurrency demands clean state boundaries, careful DOM management, and predictable render cycles.
        </p>
      </section>

      <div className={styles.sideBar}>
        <IconsBar />
      </div>
    </div>
  );
}