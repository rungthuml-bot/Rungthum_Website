"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "@/data/portfolio";
import { FiGithub, FiExternalLink, FiLayers } from "react-icons/fi";

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative overflow-hidden px-6 py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-3xl" />
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
            <FiLayers className="h-3.5 w-3.5" />
            Projects
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Featured work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            A selection of projects I&apos;ve built, from full-stack web apps to
            developer tools and AI-powered platforms.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200/50 bg-white/60 backdrop-blur-sm transition-all hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 dark:border-gray-800/50 dark:bg-gray-900/60 dark:hover:border-indigo-800"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50 dark:from-indigo-950/50 dark:via-gray-900 dark:to-purple-950/50">
                <div className="flex h-full items-center justify-center">
                  <FiLayers className="h-12 w-12 text-indigo-300/60 transition-transform group-hover:scale-110 dark:text-indigo-700/60" />
                </div>
                {/* Hover overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-indigo-950/70 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white/20 p-3 text-white transition-colors hover:bg-white/30"
                    aria-label={`View ${project.title} source code`}
                  >
                    <FiGithub className="h-5 w-5" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white/20 p-3 text-white transition-colors hover:bg-white/30"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <FiExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
