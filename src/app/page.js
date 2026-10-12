'use client';

import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import Card from '@/components/Card';
import IconsBar from '@/components/IconsBar';
import { PROJECT_DETAILS } from '../lib/constants';
import styles from './page.module.css';

// Framer Motion Stagger Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 240, damping: 20 },
  },
};

export default function Home() {
  return (
    <div className={styles.page}>
      {/* A. Hero Section */}
      <HeroSection />

      {/* B & C. Staggered Entrance & Interactive Project Cards */}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`${styles.main} horizontal-scroll-container`}
      >
       {PROJECT_DETAILS.map((item, index) => (
        <motion.div 
          key={item.id || item.title || index} 
          variants={cardVariants} 
          className="h-full"
        >
          <Card
            title={item.title}
            tags={item.tags}
            description={item.description}
            links={item.links}
          />
        </motion.div>
      ))}
      </motion.main>

      {/* D. Scroll Storytelling Section */}
      {/* D. Scroll Storytelling Section */}
<section style={{ padding: '60px 20px', maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
  <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#f8fafc', marginBottom: '12px', letterSpacing: '-0.01em' }}>
    Architecture & Philosophy
  </h2>
  <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.7', margin: 0 }}>
    Building interfaces that perform reliably under high concurrency demands clean state boundaries, careful DOM management, and predictable render cycles.
  </p>
</section>

      {/* Social Sidebar */}
      <div className={styles.sideBar}>
        <IconsBar />
      </div>
    </div>
  );
}