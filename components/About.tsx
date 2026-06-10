"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { aboutData } from "@/data/portfolio";
import { FiUser } from "react-icons/fi";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden px-6 py-24 lg:py-32"
    >
      {/* bg decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/50 bg-indigo-50/80 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:border-indigo-800/50 dark:bg-indigo-950/50 dark:text-indigo-300">
            <FiUser className="h-3.5 w-3.5" />
            About Me
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Get to know me
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="aspect-square overflow-hidden rounded-3xl border border-gray-200/50 bg-gradient-to-br from-indigo-100 via-purple-50 to-indigo-100 shadow-2xl shadow-indigo-500/10 dark:border-gray-800/50 dark:from-indigo-950/50 dark:via-gray-900 dark:to-indigo-950/50">
              {/* Placeholder avatar graphic */}
              <div className="flex h-full w-full items-center justify-center">
                <div className="relative">
                  <div className="h-40 w-40 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FiUser className="h-20 w-20 text-indigo-500/60 dark:text-indigo-400/60" />
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative floating element */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl border border-indigo-200/50 bg-indigo-50/80 backdrop-blur-sm dark:border-indigo-800/50 dark:bg-indigo-950/50" />
            <div className="absolute -left-4 -top-4 h-16 w-16 rounded-2xl border border-purple-200/50 bg-purple-50/80 backdrop-blur-sm dark:border-purple-800/50 dark:bg-purple-950/50" />
          </motion.div>

          {/* Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              {aboutData.bio}
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {aboutData.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="rounded-2xl border border-gray-200/50 bg-white/60 p-4 text-center backdrop-blur-sm transition-colors hover:border-indigo-200 dark:border-gray-800/50 dark:bg-gray-900/60 dark:hover:border-indigo-800"
                >
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-500 sm:text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
