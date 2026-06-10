"use client";

import { siteConfig, footerLinks, socialLinks } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-gray-200/50 bg-white/60 backdrop-blur-sm dark:border-gray-800/50 dark:bg-gray-950/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <span className="text-indigo-500">&lt;</span>
            {siteConfig.name}
            <span className="text-indigo-500">/&gt;</span>
          </button>

          {/* Nav links */}
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Social icons */}
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
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-indigo-600 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-indigo-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gray-200/50 dark:bg-gray-800/50" />

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500 dark:text-gray-500">
          © {currentYear} {siteConfig.name}. All rights reserved. Built with{" "}
          <span className="font-medium text-gray-700 dark:text-gray-400">
            Next.js
          </span>
          ,{" "}
          <span className="font-medium text-gray-700 dark:text-gray-400">
            Tailwind CSS
          </span>{" "}
          &{" "}
          <span className="font-medium text-gray-700 dark:text-gray-400">
            Framer Motion
          </span>
          .
        </p>
      </div>
    </footer>
  );
}
