"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { aboutData } from "@/data/portfolio";
import { FiCompass, FiShield, FiCpu, FiBookOpen } from "react-icons/fi";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="about"
      ref={ref}
      aria-labelledby="about-heading"
      className="relative border-b border-[var(--border-color)] px-6 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-14 flex flex-col justify-between gap-4 border-b border-[var(--border-color)] pb-6 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-2 flex items-center gap-2 font-mono text-xs text-[var(--text-muted)]">
              <span className="text-[var(--text-primary)] font-semibold">02</span>
              <span>/</span>
              <span>PERSPECTIVE & BACKGROUND</span>
            </div>
            <h2
              id="about-heading"
              className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
            >
              Engineering Philosophy & Context
            </h2>
          </div>
          <div className="font-mono text-xs text-[var(--text-muted)]">
            <span>AFFILIATION: </span>
            <span className="text-[var(--text-secondary)] font-medium">KHON KAEN UNIVERSITY (KKU)</span>
          </div>
        </motion.div>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Personal Narrative & Typographic Monogram Card (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            {/* Editorial Typographic Visual Card */}
            <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-editorial">
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4 font-mono text-xs text-[var(--text-muted)]">
                <span>IDENTITY / DEV-ID</span>
                <span className="text-[var(--accent-fg)] bg-[var(--accent)] px-2 py-0.5 rounded text-[10px] font-bold">
                  ACTIVE
                </span>
              </div>

              {/* Monogram & Title */}
              <div className="my-8 flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded border border-[var(--border-color)] bg-[var(--bg-surface-subtle)] font-display text-2xl font-bold text-[var(--text-primary)]">
                  RT<span className="text-[var(--accent)] font-mono text-sm">_</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">
                    Rungthum
                  </h3>
                  <p className="font-mono text-xs text-[var(--text-secondary)]">
                    Software Engineer & Student
                  </p>
                  <p className="font-mono text-[11px] text-[var(--text-muted)]">
                    Khon Kaen, Thailand
                  </p>
                </div>
              </div>

              {/* Academic & Professional Context */}
              <div className="space-y-3 border-t border-[var(--border-color)] pt-4 text-xs font-mono text-[var(--text-secondary)]">
                <div className="flex items-center justify-between">
                  <span className="text-[var(--text-muted)]">Institution:</span>
                  <span className="text-[var(--text-primary)]">Khon Kaen University</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--text-muted)]">Core Focus:</span>
                  <span className="text-[var(--text-primary)]">Web Systems & Architecture</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--text-muted)]">Availability:</span>
                  <span className="text-[var(--text-primary)]">Internships & Junior Roles</span>
                </div>
              </div>
            </div>

            {/* Technical Interests */}
            <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface-subtle)] p-6">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-3">
                Current Technical Focus:
              </h4>
              <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                {aboutData.interests.map((interest, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[var(--accent)] font-bold">›</span>
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Working Principles & Intro (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-8"
          >
            <div>
              <p className="text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
                {aboutData.introduction}
              </p>
            </div>

            {/* Working Principles */}
            <div className="space-y-6 border-t border-[var(--border-color)] pt-8">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)]">
                CORE WORKING PRINCIPLES
              </h4>

              <div className="grid grid-cols-1 gap-6">
                {aboutData.principles.map((principle, index) => (
                  <div
                    key={index}
                    className="group rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] p-5 transition-all hover:border-[var(--text-muted)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[var(--text-muted)]">
                        0{index + 1}
                      </span>
                      <h5 className="font-display text-base font-bold text-[var(--text-primary)]">
                        {principle.title}
                      </h5>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                      {principle.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
