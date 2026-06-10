"use client";

import { motion } from "framer-motion";
import { heroData } from "@/data/portfolio";
import { FiArrowRight, FiMail } from "react-icons/fi";

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Animated background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/5" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/5" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/5 blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Greeting badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/50 bg-indigo-50/80 px-4 py-1.5 text-sm font-medium text-indigo-700 backdrop-blur-sm dark:border-indigo-800/50 dark:bg-indigo-950/50 dark:text-indigo-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
            </span>
            {heroData.greeting}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl"
        >
          {heroData.name}
          <span className="mt-2 block bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
            {heroData.role}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400"
        >
          {heroData.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={() => scrollTo(heroData.cta.primary.href)}
            className="group inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-500/30 active:scale-[0.98]"
          >
            {heroData.cta.primary.label}
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => scrollTo(heroData.cta.secondary.href)}
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white/80 px-8 py-3.5 text-sm font-semibold text-gray-700 backdrop-blur-sm transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 active:scale-[0.98] dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-300 dark:hover:border-indigo-700 dark:hover:bg-indigo-950/50 dark:hover:text-indigo-300"
          >
            <FiMail className="h-4 w-4" />
            {heroData.cta.secondary.label}
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20"
        >
          <button
            onClick={() => scrollTo("#about")}
            className="mx-auto flex flex-col items-center gap-2 text-gray-400 transition-colors hover:text-indigo-500"
          >
            <span className="text-xs font-medium uppercase tracking-widest">
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-6 w-4 rounded-full border-2 border-current p-0.5"
            >
              <div className="mx-auto h-1.5 w-0.5 rounded-full bg-current" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
