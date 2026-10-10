"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { navLinks, siteConfig } from "@/data/portfolio";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  /* ── scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── active section observer ── */
  useEffect(() => {
    const sectionIds = ["hero", ...navLinks.map((l) => l.href.replace("#", ""))];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = useCallback((href: string) => {
    setMobileOpen(false);
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "border-b border-[var(--border-color)] bg-[var(--bg-primary)]/92 backdrop-blur-md py-3.5 shadow-[0_1px_0_0_rgba(0,0,0,0.03)]"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 lg:px-10">
        {/* Editorial Logo / Identity */}
        <button
          onClick={() => handleNav("#hero")}
          className="group flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
          aria-label={`${siteConfig.name} - Return to top`}
        >
          <div className="flex flex-col">
            <span className="font-display text-base font-bold tracking-tight text-[var(--text-primary)] transition-colors group-hover:text-[var(--text-secondary)]">
              {siteConfig.name}
              <span className="text-[var(--accent)] font-mono ml-0.5">.</span>
            </span>
            <span className="font-mono text-[11px] tracking-wider uppercase text-[var(--text-muted)]">
              SWE / ARCHITECTURE
            </span>
          </div>
        </button>

        {/* Desktop Editorial Navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className={`group relative flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm ${
                      isActive
                        ? "text-[var(--text-primary)] font-semibold"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] transition-colors ${
                        isActive
                          ? "text-[var(--text-primary)] font-bold"
                          : "text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]"
                      }`}
                    >
                      {link.number}
                    </span>
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-[var(--accent)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Controls: Theme Toggle & Mobile Trigger */}
        <div className="flex items-center gap-2">
          {mounted ? (
            <button
              onClick={toggleTheme}
              aria-label={
                resolvedTheme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
              className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors hover:bg-[var(--hover-state)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              {resolvedTheme === "dark" ? (
                <FiSun className="h-4 w-4 text-[var(--accent)]" />
              ) : (
                <FiMoon className="h-4 w-4 text-[var(--text-secondary)]" />
              )}
            </button>
          ) : (
            <div className="h-9 w-9" />
          )}

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors hover:bg-[var(--hover-state)] md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            {mobileOpen ? (
              <FiX className="h-4 w-4" />
            ) : (
              <FiMenu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-[var(--border-color)] bg-[var(--bg-primary)] px-6 py-5 md:hidden"
          >
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <li key={link.href}>
                      <button
                        onClick={() => handleNav(link.href)}
                        className={`flex w-full items-center justify-between border-b border-[var(--border-color)]/60 py-3 text-left text-sm font-medium transition-colors ${
                          isActive
                            ? "text-[var(--text-primary)] font-semibold"
                            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="font-mono text-xs text-[var(--text-muted)]">
                            {link.number}
                          </span>
                          <span>{link.label}</span>
                        </span>
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-4 pt-2 text-right">
              <span className="font-mono text-[10px] tracking-wider uppercase text-[var(--text-muted)]">
                {siteConfig.role}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
