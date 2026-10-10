"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { milestones } from "@/data/portfolio";

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={ref}
      aria-labelledby="experience-heading"
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
              <span className="text-[var(--text-primary)] font-semibold">04</span>
              <span>/</span>
              <span>CHRONOLOGICAL MILESTONES</span>
            </div>
            <h2
              id="experience-heading"
              className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
            >
              Academic & Engineering Milestones
            </h2>
          </div>
          <p className="max-w-md text-sm text-[var(--text-secondary)]">
            A verified trajectory documenting computer science foundations, applied development, and systems study.
          </p>
        </motion.div>

        {/* Structured Chronological Timeline */}
        <div className="border-t border-[var(--border-color)]">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
              className="group border-b border-[var(--border-color)] py-8 transition-colors hover:bg-[var(--bg-surface-subtle)]/40 px-4 -mx-4 rounded"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8 items-start">
                {/* Period & Category (Span 3) */}
                <div className="md:col-span-3 font-mono text-xs space-y-1.5">
                  <span className="font-semibold text-[var(--text-primary)] block">
                    {milestone.period}
                  </span>
                  <span className="inline-block rounded bg-[var(--bg-surface)] px-2 py-0.5 border border-[var(--border-color)] text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                    {milestone.type}
                  </span>
                  <div className="text-[11px] text-[var(--text-muted)]">
                    {milestone.location}
                  </div>
                </div>

                {/* Role & Organization (Span 4) */}
                <div className="md:col-span-4">
                  <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
                    {milestone.role}
                  </h3>
                  <div className="font-mono text-xs text-[var(--text-secondary)] mt-1">
                    {milestone.organization}
                  </div>
                </div>

                {/* Scope & Details (Span 5) */}
                <div className="md:col-span-5 space-y-4">
                  <ul className="space-y-2 text-xs text-[var(--text-secondary)] leading-relaxed">
                    {milestone.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-[var(--accent)] font-bold">›</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {milestone.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] rounded border border-[var(--border-color)] bg-[var(--bg-primary)] px-2 py-0.5 text-[var(--text-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
