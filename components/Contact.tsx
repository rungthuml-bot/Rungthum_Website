"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { contactData, socialLinks } from "@/data/portfolio";
import { FiSend, FiMessageCircle, FiCheck } from "react-icons/fi";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to an API
    console.log("Form submitted:", formState);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  const inputClasses =
    "w-full rounded-xl border border-gray-200/80 bg-white/80 px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 backdrop-blur-sm transition-all focus:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 dark:border-gray-700/80 dark:bg-gray-900/80 dark:text-white dark:placeholder-gray-500 dark:focus:border-indigo-500 dark:focus:ring-indigo-500/20";

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden px-6 py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/5 blur-3xl" />
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
            <FiMessageCircle className="h-3.5 w-3.5" />
            Contact
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {contactData.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            {contactData.description}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5 rounded-3xl border border-gray-200/50 bg-white/40 p-8 backdrop-blur-sm dark:border-gray-800/50 dark:bg-gray-900/40"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                className={inputClasses}
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formState.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={inputClasses}
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className={`${inputClasses} resize-none`}
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-500/30 active:scale-[0.98] disabled:opacity-70"
            >
              {submitted ? (
                <>
                  <FiCheck className="h-4 w-4" />
                  Message Sent!
                </>
              ) : (
                <>
                  <FiSend className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              {/* Email card */}
              <div className="rounded-2xl border border-gray-200/50 bg-white/60 p-6 backdrop-blur-sm dark:border-gray-800/50 dark:bg-gray-900/60">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Email me at
                </h3>
                <a
                  href={`mailto:${contactData.email}`}
                  className="mt-1 text-lg font-semibold text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  {contactData.email}
                </a>
              </div>

              {/* Social links */}
              <div className="rounded-2xl border border-gray-200/50 bg-white/60 p-6 backdrop-blur-sm dark:border-gray-800/50 dark:bg-gray-900/60">
                <h3 className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                  Find me on
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200/50 bg-gray-50/80 text-gray-600 transition-all hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 dark:border-gray-700/50 dark:bg-gray-800/80 dark:text-gray-400 dark:hover:border-indigo-800 dark:hover:bg-indigo-950/50 dark:hover:text-indigo-400"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Availability */}
              <div className="rounded-2xl border border-emerald-200/50 bg-emerald-50/60 p-6 backdrop-blur-sm dark:border-emerald-800/30 dark:bg-emerald-950/20">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                    Available for new opportunities
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
