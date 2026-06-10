"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillCategories } from "@/data/portfolio";
import { FiCode } from "react-icons/fi";

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative overflow-hidden bg-gray-50/50 px-6 py-24 dark:bg-gray-900/30 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/5 blur-3xl" />
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
            <FiCode className="h-3.5 w-3.5" />
            Skills
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Technologies I work with
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            I leverage modern tools and frameworks to build robust, scalable
            applications across the full stack.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + catIndex * 0.15 }}
              className="group rounded-3xl border border-gray-200/50 bg-white/60 p-8 backdrop-blur-sm transition-all hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-gray-800/50 dark:bg-gray-900/60 dark:hover:border-indigo-800"
            >
              <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 + catIndex * 0.15 + i * 0.08,
                      }}
                      className="flex flex-col items-center gap-3 rounded-2xl border border-transparent bg-gray-50/80 p-4 transition-all hover:border-indigo-200/50 hover:bg-indigo-50/50 dark:bg-gray-800/50 dark:hover:border-indigo-800/50 dark:hover:bg-indigo-950/30"
                    >
                      <Icon className="h-8 w-8 text-gray-700 transition-colors group-hover:text-indigo-600 dark:text-gray-300 dark:group-hover:text-indigo-400" />
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
