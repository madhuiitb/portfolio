'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
      tl.fromTo(titleRef.current, { y: 35, opacity: 0 }, { y: 0, opacity: 1, delay: 0.15 })
        .fromTo(subtitleRef.current, { y: 25, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.6')
        .fromTo(descRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.6');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-12 pb-16 text-center max-w-3xl mx-auto px-4">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[450px] h-[220px] bg-gradient-to-r from-cyan-500/15 to-indigo-500/15 blur-[100px] rounded-full pointer-events-none" />

      {/* Name & Greeting */}
      <h1 ref={titleRef} className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3 leading-tight">
        Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-300 to-indigo-500">Madhu Kalapala</span>
      </h1>
      
      {/* Role & Expertise Badges */}
      <div ref={subtitleRef} className="flex flex-wrap items-center justify-center gap-2 mb-4">
        <span className="px-3 py-1 text-xs sm:text-sm font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded-full tracking-wide">
          Senior Software Engineer
        </span>
        <span className="text-slate-500">·</span>
        <span className="text-xs sm:text-sm font-medium text-slate-300">
          Frontend & AI Engineering
        </span>
      </div>

      {/* Professional Summary */}
      <p ref={descRef} className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-normal">
        With 7+ years of experience building scalable, high-performance web applications using React, Next.js, and TypeScript. Combining strong engineering fundamentals with AI-assisted development to build intelligent, reliable, and user-focused digital products.
      </p>
    </section>
  );
}