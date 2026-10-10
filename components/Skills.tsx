"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={ref}
      aria-labelledby="skills-heading"
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
              <span className="text-[var(--text-primary)] font-semibold">03</span>
              <span>/</span>
              <span>TECHNICAL TAXONOMY</span>
            </div>
            <h2
              id="skills-heading"
              className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
            >
              Technologies & Tooling
            </h2>
          </div>
          <p className="max-w-md text-sm text-[var(--text-secondary)]">
            A substantiated collection of frameworks, runtimes, and tools applied in active development and architecture.
          </p>
        </motion.div>

        {/* Structured 3-Column Editorial Taxonomy */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + groupIndex * 0.1 }}
              className="flex flex-col rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-7 shadow-editorial"
            >
              {/* Group Header */}
              <div className="border-b border-[var(--border-color)] pb-4">
                <div className="font-mono text-[11px] text-[var(--text-muted)]">
                  GROUP 0{groupIndex + 1}
                </div>
                <h3 className="font-display mt-1 text-lg font-bold text-[var(--text-primary)]">
                  {group.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">
                  {group.description}
                </p>
              </div>

              {/* Items List */}
              <ul className="mt-5 space-y-3">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <li
                      key={skill.name}
                      className="group flex items-center justify-between rounded border border-[var(--border-color)]/60 bg-[var(--bg-primary)] px-3.5 py-2.5 transition-colors hover:border-[var(--text-muted)] hover:bg-[var(--bg-surface-subtle)]"
                    >
                      <div className="flex items-center gap-3">
                        {Icon && (
                          <Icon className="h-4 w-4 text-[var(--text-secondary)] transition-colors group-hover:text-[var(--text-primary)]" />
                        )}
                        <span className="font-sans text-xs font-semibold text-[var(--text-primary)]">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                        {skill.category}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Systems Evaluation Note */}
        <div className="mt-12 rounded border border-[var(--border-color)] bg-[var(--bg-surface-subtle)] p-5 text-xs text-[var(--text-secondary)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono">
          <div className="flex items-center gap-2">
            <span className="text-[var(--accent-fg)] bg-[var(--accent)] px-2 py-0.5 rounded text-[10px] font-bold">
              STANDARDS
            </span>
            <span>TypeScript strict mode & ESLint zero-warning policy maintained across all repositories.</span>
          </div>
          <span className="text-[var(--text-muted)] text-[11px]">Next.js 14 / Node 20 LTS</span>
        </div>
      </div>
    </section>
  );
}
