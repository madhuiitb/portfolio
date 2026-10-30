
'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  EXPERIENCES,
  EXPERIENCE_ACCENTS,
} from '@/lib/experience';

export default function ExperienceSection() {
  const [hoveredId, setHoveredId] = useState(null);

const activeId = hoveredId;
  const reduceMotion = useReducedMotion();

  

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      {/* Heading */}
      <motion.header
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mb-16 sm:mb-24"
      >
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan-400">
          The journey so far
        </p>

        <h2
          id="experience-heading"
          className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl"
        >
          Experience<span className="text-cyan-400">.</span>
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
          From building workflow platforms to engineering scalable
          product experiences—with performance, architecture, and
          user experience at the core.
        </p>

        <p className="mt-5 font-mono text-[10px] uppercase tracking-wider text-slate-500 sm:text-xs">
          Hover or select a milestone to explore the work
        </p>
      </motion.header>

      {/* Minimal timeline */}
      <div className="relative">
        {/* Continuous connector */}
       

        {/* Straight animated timeline connector */}
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-[19px] top-8 w-px overflow-hidden sm:left-[23px]"
        >
          {/* Base line */}
          <div className="absolute inset-0 bg-cyan-400/15" />

          {/* Animated dotted line */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(to bottom, #22d3ee 50%, transparent 50%)',
              backgroundSize: '1px 10px',
              backgroundRepeat: 'repeat-y',
            }}
            animate={
              reduceMotion
                ? {}
                : { backgroundPositionY: ['0px', '10px'] }
            }
            transition={{
              duration: 1.2,
              ease: 'linear',
              repeat: Infinity,
            }}
          />
        </div>


        <div className="space-y-12 sm:space-y-16">
          {EXPERIENCES.map((experience, index) => {
            const accent = EXPERIENCE_ACCENTS[experience.accent] ;

            const isOpen = activeId === experience.id;

            const panelId = `experience-details-${experience.id}`;

            return (
              <motion.article
                key={experience.id}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 22 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : index * 0.06,
                }}
                className="relative pl-14 sm:pl-16"
                onMouseEnter={() => setHoveredId(experience.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Milestone */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full border bg-[#080d18] transition-shadow duration-300 sm:left-1 sm:h-12 sm:w-12"
                  style={{
                    borderColor: isOpen
                      ? accent.dot
                      : `${accent.dot}70`,
                    boxShadow: isOpen
                      ? `0 0 26px ${accent.glow}`
                      : 'none',
                  }}
                >
                  <motion.span
                    animate={
                      reduceMotion
                        ? {}
                        : isOpen
                          ? { scale: [1, 1.2, 1] }
                          : { scale: 1 }
                    }
                    transition={{
                      duration: 1.5,
                      repeat: isOpen ? Infinity : 0,
                    }}
                    className="h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"
                    style={{
                      backgroundColor: accent.dot,
                      boxShadow: `0 0 12px ${accent.dot}`,
                    }}
                  />
                </div>

                {/* Always-visible summary */}
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() =>
                    setSelectedId((current) =>
                      current === experience.id ? null : experience.id
                    )
                  }
                  onFocus={() => setHoveredId(experience.id)}
                  
                  className="group w-full rounded-xl py-1 text-left outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#080d18]"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p
                        className="font-mono text-[10px] uppercase tracking-[0.18em] sm:text-xs"
                        style={{ color: accent.dot }}
                      >
                        {experience.period}
                      </p>

                      <h3 className="mt-2 text-xl font-bold text-white transition-colors group-hover:text-cyan-100 sm:text-2xl">
                        {experience.company}
                      </h3>

                      <p className="mt-1 text-sm text-slate-300">
                        {experience.role}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {experience.employment}
                        <span className="mx-2 text-slate-700">/</span>
                        {experience.location}
                      </p>
                    </div>

                    <span
                      className="mt-2 inline-flex items-center gap-2 text-xs text-slate-400 transition-colors group-hover:text-white sm:mt-1"
                      style={{
                        color: isOpen ? accent.dot : undefined,
                      }}
                    >
                      {isOpen ? 'Hide details' : 'Explore projects'}

                      <motion.span
                        animate={{
                          rotate: isOpen ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                        aria-hidden="true"
                      >
                        ↓
                      </motion.span>
                    </span>
                  </div>
                </button>

                {/* Expandable project details */}
               
<AnimatePresence initial={false}>
  {isOpen && (
    <motion.div
      id={panelId}
      key={panelId}
      initial={reduceMotion ? false : { opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{
        duration: reduceMotion ? 0 : 0.3,
        ease: 'easeInOut',
      }}
      className="overflow-hidden"
    >
      <div className="pt-6">
        {experience.projects?.length > 0 ? (
          <div className="space-y-8">
            {experience.projects.map((project, projectIndex) => (
              <div
                key={project.id}
                className="border-l border-white/10 pl-5 sm:pl-7"
              >
                {/* <p
                  className="font-mono text-xs uppercase tracking-wider"
                  style={{ color: accent.dot }}
                >
                  Project {String(projectIndex + 1).padStart(2, '0')}
                </p> */}

                <h4 className="mt-2 text-lg font-semibold text-white">
                  {project.name}
                </h4>

                <ul className="mt-4 space-y-3">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm leading-7 text-slate-400"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-slate-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="border-l-2 pl-5 sm:pl-7"
            style={{ borderColor: `${accent.dot}60` }}
          >
            <h4 className="text-lg font-semibold text-white">
              {experience.project}
            </h4>

            <ul className="mt-4 space-y-3">
              {experience.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="text-sm leading-7 text-slate-400"
                >
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-white/10 px-2.5 py-1.5 text-xs text-slate-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )}
</AnimatePresence>


                {/* Subtle separator */}
                <div className="mt-8 h-px bg-gradient-to-r from-white/10 to-transparent sm:mt-10" />
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Closing statement */}
      <motion.p
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="ml-14 mt-12 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 sm:ml-16 sm:text-xs"
      >
        <span className="mr-2 text-cyan-400">✦</span>
        Always building. Always learning.
      </motion.p>
    </section>
  );
}
