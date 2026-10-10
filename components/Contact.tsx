"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { contactData, socialLinks } from "@/data/portfolio";
import { FiMail, FiCopy, FiCheck, FiArrowUpRight, FiSend } from "react-icons/fi";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API not permitted
    }
  };

  const handleDraftEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${contactData.email}?subject=${encodeURIComponent(
      subject || "Engineering Opportunity / Inquiry"
    )}&body=${encodeURIComponent(body || "Hello Rungthum,\n\n")}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      ref={ref}
      aria-labelledby="contact-heading"
      className="relative px-6 py-20 lg:py-28"
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
              <span className="text-[var(--text-primary)] font-semibold">05</span>
              <span>/</span>
              <span>COMMUNICATION CHANNELS</span>
            </div>
            <h2
              id="contact-heading"
              className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
            >
              {contactData.heading}
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-muted)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            <span className="text-[var(--text-secondary)]">{contactData.availability}</span>
          </div>
        </motion.div>

        {/* 2-Column Editorial Communication Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Direct Inquiries & Channels (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-8"
          >
            <div>
              <p className="text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
                {contactData.description}
              </p>

              {/* Primary Direct Email Card */}
              <div className="mt-8 rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 shadow-editorial">
                <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                  Primary Institutional Email
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`mailto:${contactData.email}`}
                    className="font-mono text-sm sm:text-base font-semibold text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors underline decoration-[var(--border-color)] underline-offset-4"
                  >
                    {contactData.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 rounded border border-[var(--border-color)] bg-[var(--bg-primary)] px-3 py-1.5 font-mono text-xs text-[var(--text-primary)] transition-colors hover:bg-[var(--hover-state)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? (
                      <>
                        <FiCheck className="h-3.5 w-3.5 text-[var(--accent)]" />
                        <span className="font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <FiCopy className="h-3.5 w-3.5 text-[var(--text-muted)]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Verified External Channels */}
            <div className="border-t border-[var(--border-color)] pt-6">
              <div className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] mb-4">
                Verified Repositories & Profiles:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded border border-[var(--border-color)] bg-[var(--bg-surface)] p-3.5 transition-colors hover:border-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="h-4 w-4 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]" />
                        <div>
                          <span className="block font-sans text-xs font-semibold text-[var(--text-primary)]">
                            {social.label}
                          </span>
                          <span className="block font-mono text-[10px] text-[var(--text-muted)]">
                            {social.handle}
                          </span>
                        </div>
                      </div>
                      <FiArrowUpRight className="h-3.5 w-3.5 text-[var(--text-muted)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Pre-Populated Direct Dispatcher (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-editorial">
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3 mb-6 font-mono text-xs text-[var(--text-muted)]">
                <span>COMPOSE DIRECT DISPATCH</span>
                <span className="text-[var(--text-secondary)]">VIA MAIL CLIENT</span>
              </div>

              <form onSubmit={handleDraftEmail} className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Software Internship / Engineering Project"
                    className="w-full rounded border border-[var(--border-color)] bg-[var(--bg-primary)] px-3.5 py-2.5 font-sans text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-colors focus:border-[var(--text-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1.5"
                  >
                    Brief Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Write a message to launch directly into your email client..."
                    className="w-full resize-none rounded border border-[var(--border-color)] bg-[var(--bg-primary)] px-3.5 py-2.5 font-sans text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-colors focus:border-[var(--text-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 text-xs font-bold uppercase tracking-wide text-[var(--accent-fg)] transition-all hover:brightness-105 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  >
                    <FiSend className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    <span>Open in Email Client ({contactData.email})</span>
                  </button>
                  <p className="mt-2 text-center font-mono text-[11px] text-[var(--text-muted)]">
                    Direct dispatch. No credentials stored, no deceptive console logs.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
