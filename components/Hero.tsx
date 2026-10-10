"use client";

import { motion } from "framer-motion";
import { heroData } from "@/data/portfolio";
import { FiArrowDown, FiArrowRight, FiTerminal, FiCheckCircle } from "react-icons/fi";

export default function Hero() {
  const scrollTo = (href: string) => {
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[92vh] flex-col justify-between pt-28 pb-16 lg:pt-36 lg:pb-20 border-b border-[var(--border-color)]"
    >
      <div className="mx-auto w-full max-w-[1240px] px-6 lg:px-10">
        {/* Top Status & Context Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-color)] pb-4 font-mono text-xs text-[var(--text-muted)]"
        >
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            <span className="tracking-wide uppercase text-[var(--text-secondary)]">
              {heroData.status}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="tracking-wider">{heroData.label}</span>
            <span className="text-[var(--border-color)]">•</span>
            <span>KHON KAEN (UTC+7)</span>
          </div>
        </motion.div>

        {/* Main Editorial Grid: 7:5 Proportional Composition */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column (Span 7): Typography & Core Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
                {heroData.greeting}
              </span>
              <span className="h-px w-8 bg-[var(--border-color)]" />
              <span className="font-mono text-xs font-semibold text-[var(--text-primary)]">
                {heroData.name}
              </span>
            </div>

            <h1
              id="hero-heading"
              className="font-display text-[42px] leading-[1.08] font-extrabold tracking-tight text-[var(--text-primary)] sm:text-[58px] lg:text-[72px]"
            >
              Architecting <br className="hidden sm:inline" />
              reliable software <br className="hidden sm:inline" />
              with{" "}
              <span className="underline decoration-[var(--accent)] decoration-4 underline-offset-8">
                clarity
              </span>
              .
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              {heroData.summary}
            </p>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo(heroData.cta.primary.href)}
                className="group inline-flex items-center gap-2.5 rounded-md bg-[var(--accent)] px-6 py-3.5 text-xs font-bold tracking-wide uppercase text-[var(--accent-fg)] transition-all hover:brightness-105 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <span>{heroData.cta.primary.label}</span>
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo(heroData.cta.secondary.href)}
                className="inline-flex items-center gap-2 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] px-6 py-3.5 text-xs font-semibold tracking-wide text-[var(--text-primary)] transition-colors hover:bg-[var(--hover-state)] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <span>{heroData.cta.secondary.label}</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column (Span 5): Architectural System Inspector */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 w-full"
          >
            <div className="overflow-hidden rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-editorial">
              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-[var(--border-color)] bg-[var(--bg-surface-subtle)] px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#E57373]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#FFB74D]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#81C784]" />
                  <span className="ml-2 font-mono text-[11px] text-[var(--text-muted)]">
                    engine/contract.ts
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-[var(--text-muted)]">
                  <FiTerminal className="h-3 w-3" />
                  <span>TSC: PASS</span>
                </div>
              </div>

              {/* Code & Architectural Blueprint display */}
              <div className="p-5 font-mono text-xs leading-relaxed text-[var(--text-secondary)] space-y-4">
                <div className="border-b border-[var(--border-color)]/60 pb-3">
                  <span className="text-[var(--text-muted)]">{"// Systems engineering manifest"}</span>
                  <p className="mt-1 text-[var(--text-primary)] font-medium">
                    <span className="text-[#3B82F6] dark:text-[#60A5FA]">const</span> developer = {"{"}
                    <br />
                    &nbsp;&nbsp;name: <span className="text-[#059669] dark:text-[#34D399]">&quot;Rungthum&quot;</span>,
                    <br />
                    &nbsp;&nbsp;stack: [<span className="text-[#059669] dark:text-[#34D399]">&quot;TypeScript&quot;</span>, <span className="text-[#059669] dark:text-[#34D399]">&quot;Next.js&quot;</span>, <span className="text-[#059669] dark:text-[#34D399]">&quot;Prisma&quot;</span>],
                    <br />
                    &nbsp;&nbsp;focus: <span className="text-[#059669] dark:text-[#34D399]">&quot;Resilient Web Architectures&quot;</span>
                    <br />
                    {"}"};
                  </p>
                </div>

                {/* Subsystem status badges */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                    Verified Competencies
                  </span>
                  <div className="grid grid-cols-1 gap-2 pt-1">
                    {heroData.focusAreas.map((area, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between rounded border border-[var(--border-color)] bg-[var(--bg-primary)] px-3 py-1.5 text-[11px]"
                      >
                        <span className="text-[var(--text-primary)]">{area}</span>
                        <span className="inline-flex items-center gap-1 text-[10px] text-[var(--text-muted)]">
                          <FiCheckCircle className="h-3 w-3 text-[var(--accent)]" />
                          <span>Active</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-[var(--text-muted)] flex items-center justify-between">
                  <span>Build Target: ES2024 / Node 20</span>
                  <span className="font-bold text-[var(--text-primary)]">v14.2 Next.js</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Editorial Index Strip */}
      <div className="mx-auto mt-16 w-full max-w-[1240px] px-6 lg:px-10">
        <div className="flex items-center justify-between border-t border-[var(--border-color)] pt-6 font-mono text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-6">
            <span>INDEX / 01-05</span>
            <span className="hidden sm:inline">TYPE-SAFE CLIENT & SERVER</span>
          </div>

          <button
            onClick={() => scrollTo("#projects")}
            className="group flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded"
            aria-label="Scroll to selected works"
          >
            <span>DISCOVER WORKS</span>
            <FiArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
