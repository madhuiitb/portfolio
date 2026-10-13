'use client';

import { motion } from 'framer-motion';

export default function Card({ title, description, tags, links }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        width: '340px',
        minWidth: '340px',
        borderRadius: '16px',
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(12px)',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        justify: 'space-between',
        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)',
      }}
    >
      <div>
        {/* Header Icon & Title */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '12px' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#f8fafc', margin: 0, lineHeight: 1.3 }}>
            {title}
          </h3>
          <div style={{ padding: '6px', borderRadius: '8px', backgroundColor: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.2)', flexShrink: 0 }}>
            {/* Inline Code SVG with Fixed Width/Height */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
        </div>

        {/* Description */}
        <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: '0 0 20px 0', fontWeight: '400' }}>
          {description}
        </p>
      </div>

      <div>
        {/* Tag Pill Badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {tags?.map((tag, idx) => {
            // Safely extract string label from string OR object [{ name: 'React', ... }]
            const tagName = typeof tag === 'object' ? (tag.name || tag.label || 'Tech') : tag;
            return (
              <span
                key={idx}
                style={{
                  padding: '3px 10px',
                  fontSize: '11px',
                  fontWeight: '500',
                  color: '#67e8f9',
                  backgroundColor: 'rgba(34, 211, 238, 0.1)',
                  border: '1px solid rgba(34, 211, 238, 0.2)',
                  borderRadius: '9999px',
                }}
              >
                {tagName}
              </span>
            );
          })}
        </div>

        {/* Card Footer Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {links?.code && (
            <a
              href={links.code}
              target="_blank"
              rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '500', color: '#cbd5e1', textDecoration: 'none' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Code
            </a>
          )}
          {links?.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '500', color: '#22d3ee', textDecoration: 'none' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}