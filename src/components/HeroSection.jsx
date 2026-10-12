'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
      tl.fromTo(titleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, delay: 0.2 })
        .fromTo(subtitleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.6');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} style={{ paddingTop: '40px', paddingBottom: '30px', textAlign: 'center', maxWidth: '800px', margin: '0 auto', paddingLeft: '16px', paddingRight: '16px' }}>
      {/* Background Radial Glow */}
      <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)', width: '400px', height: '200px', background: 'linear-gradient(90deg, rgba(6,182,212,0.15), rgba(99,102,241,0.15))', filter: 'blur(80px)', borderRadius: '9999px', pointerEvents: 'none', zIndex: -1 }} />

      <h1 ref={titleRef} style={{ fontSize: '32px', fontWeight: '800', letterSpacing: '-0.02em', color: '#ffffff', marginBottom: '12px', lineHeight: 1.2 }}>
        Engineering <span style={{ background: 'linear-gradient(90deg, #22d3ee, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>High-Performance</span> Interfaces
      </h1>
      
      <p ref={subtitleRef} style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
        A showcase of high-concurrency tools, interactive dashboards, and scalable full-stack applications.
      </p>
    </section>
  );
}