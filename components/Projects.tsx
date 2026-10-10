"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "@/data/portfolio";
import { FiExternalLink, FiGithub, FiLayers, FiCheck, FiFolder } from "react-icons/fi";

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const featuredProject = projects.find((p) => p.featured) || projects[0];
  const secondaryProjects = projects.filter((p) => p.id !== featuredProject.id);

  return (
    <section
      id="projects"
      ref={ref}
      aria-labelledby="projects-heading"
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
              <span className="text-[var(--text-primary)] font-semibold">01</span>
              <span>/</span>
              <span>SELECTED PROJECTS</span>
            </div>
            <h2
              id="projects-heading"
              className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
            >
              Engineered Works & Explorations
            </h2>
          </div>
          <p className="max-w-md text-sm text-[var(--text-secondary)]">
            A curated index of full-stack implementations, architectural experiments, and open-source systems.
          </p>
        </motion.div>

        {/* Featured Project Showcase (Large Visual Architecture Span) */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 overflow-hidden rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-editorial"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Architectural Schematic / Visual Treatment (Span 7) */}
            <div className="lg:col-span-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[var(--border-color)] bg-[var(--bg-surface-subtle)] p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4 font-mono text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[var(--text-primary)]">{featuredProject.id}</span>
                  <span>{"//"}</span>
                  <span className="uppercase tracking-wider">{featuredProject.category}</span>
                </div>
                <span className="rounded bg-[var(--bg-primary)] px-2 py-0.5 border border-[var(--border-color)]">
                  {featuredProject.year}
                </span>
              </div>

              {/* Deliberate Editorial Schematic Visual */}
              <div className="my-8 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] p-5">
                <div className="flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)] border-b border-[var(--border-color)] pb-2 mb-3">
                  <span className="flex items-center gap-1.5">
                    <FiLayers className="h-3.5 w-3.5 text-[var(--accent)]" />
                    <span>SYSTEM TOPOLOGY</span>
                  </span>
                  <span className="text-[var(--text-primary)] font-semibold">SERVER-FIRST / NEXT.JS</span>
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between rounded bg-[var(--bg-surface)] p-2.5 border border-[var(--border-color)]/60">
                    <span className="text-[var(--text-secondary)]">Client Boundary</span>
                    <span className="text-[var(--accent-fg)] bg-[var(--accent)] px-1.5 py-0.5 rounded text-[10px] font-bold">
                      Interactive Leaf Components
                    </span>
                  </div>
                  <div className="text-center font-mono text-[10px] text-[var(--text-muted)]">↓ Server Actions / Safe RPC</div>
                  <div className="flex items-center justify-between rounded bg-[var(--bg-surface)] p-2.5 border border-[var(--border-color)]/60">
                    <span className="text-[var(--text-secondary)]">Data Access Layer</span>
                    <span className="text-[var(--text-primary)] font-semibold">Prisma ORM & PostgreSQL</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs rounded border border-[var(--border-color)] bg-[var(--bg-primary)] px-2.5 py-1 text-[var(--text-secondary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Information & Action Pane (Span 5) */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="mb-2 inline-block font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                  {featuredProject.type}
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                  {featuredProject.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {featuredProject.description}
                </p>

                {/* Architecture Highlights */}
                <div className="mt-6 border-t border-[var(--border-color)] pt-5">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] mb-3">
                    Architectural Decisions:
                  </h4>
                  <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
                    {featuredProject.architectureHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <FiCheck className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-[var(--accent)]" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Direct Touch-Accessible Action Buttons (Never hidden under hover overlay) */}
              <div className="mt-8 pt-5 border-t border-[var(--border-color)] flex flex-wrap items-center gap-3">
                {featuredProject.github && (
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-[var(--accent-fg)] transition-all hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    aria-label={`View ${featuredProject.title} repository`}
                  >
                    <FiGithub className="h-4 w-4" />
                    <span>View Repository</span>
                  </a>
                )}
                {featuredProject.demo && (
                  <a
                    href={featuredProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-2.5 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:bg-[var(--hover-state)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    aria-label={`View ${featuredProject.title} demo`}
                  >
                    <FiExternalLink className="h-4 w-4" />
                    <span>Live Verification</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.article>

        {/* Secondary Projects Grid (2-Column Asymmetrical Grid) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {secondaryProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.2 + index * 0.1 }}
              className="flex flex-col justify-between rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-7 shadow-editorial transition-all hover:border-[var(--text-muted)]"
            >
              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3 font-mono text-xs text-[var(--text-muted)]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[var(--text-primary)]">{project.id}</span>
                    <span>{"//"}</span>
                    <span>{project.category}</span>
                  </div>
                  <span>{project.year}</span>
                </div>

                {/* Content */}
                <div className="pt-4">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                    {project.type}
                  </div>
                  <h3 className="mt-1 font-display text-xl font-bold tracking-tight text-[var(--text-primary)]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {project.summary}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mt-4 pt-3 border-t border-[var(--border-color)]/70">
                  <ul className="space-y-1.5 text-xs text-[var(--text-secondary)] font-mono">
                    {project.architectureHighlights.slice(0, 2).map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--text-muted)]">›</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tags and Accessible Links */}
              <div className="mt-6 pt-4 border-t border-[var(--border-color)]">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] rounded bg-[var(--bg-surface-subtle)] px-2 py-0.5 text-[var(--text-secondary)] border border-[var(--border-color)]/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between font-mono text-xs">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors underline decoration-[var(--border-color)] underline-offset-4"
                      aria-label={`Source code for ${project.title}`}
                    >
                      <FiGithub className="h-3.5 w-3.5" />
                      <span>Code Repository</span>
                    </a>
                  ) : (
                    <span className="text-[var(--text-muted)]">Architecture Document</span>
                  )}

                  <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
                    VERIFIED
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
