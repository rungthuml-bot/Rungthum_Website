"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "@/data/portfolio";
import { FiBriefcase } from "react-icons/fi";

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative overflow-hidden bg-gray-50/50 px-6 py-24 dark:bg-gray-900/30 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/50 bg-indigo-50/80 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:border-indigo-800/50 dark:bg-indigo-950/50 dark:text-indigo-300">
            <FiBriefcase className="h-3.5 w-3.5" />
            Experience
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Work history
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            My professional journey building products and growing as a
            developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-indigo-500/20 via-indigo-500/40 to-indigo-500/20 md:left-1/2 md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.2 }}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 hidden md:left-1/2 md:block">
                    <div className="relative -translate-x-1/2">
                      <div className="h-4 w-4 rounded-full border-[3px] border-indigo-500 bg-white dark:bg-gray-950" />
                      <div className="absolute inset-0 animate-ping rounded-full bg-indigo-500/30" />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="rounded-3xl border border-gray-200/50 bg-white/60 p-6 backdrop-blur-sm transition-all hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-gray-800/50 dark:bg-gray-900/60 dark:hover:border-indigo-800 sm:p-8">
                      {/* Date badge */}
                      <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-300">
                        {exp.date}
                      </span>
                      <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-indigo-600/80 dark:text-indigo-400/80">
                        {exp.company}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {exp.achievements.map((item, j) => (
                          <li
                            key={j}
                            className="flex gap-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400"
                          >
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden w-[calc(50%-2rem)] md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
