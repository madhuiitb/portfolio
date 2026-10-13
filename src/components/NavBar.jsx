'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'AlgoJS', href: '#algo' },
  { name: 'Projects', href: '#projects' },
  { name: 'MachineCoding', href: '#mc' },
  { name: 'Contact', href: '#contact' },
];

export default function NavBar() {
  return (
    <motion.header 
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: '16px',
        left: '0',
        right: '0',
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 16px',
      }}
    >
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '850px',
        padding: '8px 20px',
        borderRadius: '9999px',
        backgroundColor: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
      }}>
        {/* Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <span style={{ fontWeight: '700', fontSize: '13px', letterSpacing: '0.05em', color: '#f8fafc' }}>
            MADHU
          </span>
        </Link>

        {/* Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              style={{ fontSize: '12px', fontWeight: '500', color: '#94a3b8', textDecoration: 'none' }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <a
          href="#contact"
          style={{
            padding: '5px 14px',
            fontSize: '12px',
            fontWeight: '600',
            borderRadius: '9999px',
            background: 'linear-gradient(90deg, #06b6d4, #6366f1)',
            color: '#ffffff',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          Contact
        </a>
      </nav>
    </motion.header>
  );
}