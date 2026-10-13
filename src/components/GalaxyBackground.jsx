'use client';

import { useEffect, useRef } from 'react';

export default function GalaxyBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Highly visible twinkling galaxy stars
    const stars = Array.from({ length: 140 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      alpha: Math.random(),
      maxAlpha: Math.random() * 0.8 + 0.2,
      speed: (Math.random() * 0.012 + 0.004) * (Math.random() > 0.5 ? 1 : -1),
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep vibrant nebula glow background
      const grad1 = ctx.createRadialGradient(width * 0.3, height * 0.4, 80, width * 0.3, height * 0.4, 600);
      grad1.addColorStop(0, 'rgba(34, 211, 238, 0.12)');
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(width * 0.75, height * 0.6, 80, width * 0.75, height * 0.6, 650);
      grad2.addColorStop(0, 'rgba(99, 102, 241, 0.1)');
      grad2.addColorStop(1, 'transparent');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Update and draw stars + flowing connecting starlight lines
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        star.alpha += star.speed;
        if (star.alpha > star.maxAlpha || star.alpha < 0.15) {
          star.speed = -star.speed;
        }

        // Draw connecting flow lines between close stars
        for (let j = i + 1; j < stars.length; j++) {
          const other = stars[j];
          const dx = star.x - other.x;
          const dy = star.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.strokeStyle = `rgba(34, 211, 238, ${(1 - dist / 130) * 0.15})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Draw star particle
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(star.alpha)})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-20 w-full h-full pointer-events-none" />;
}