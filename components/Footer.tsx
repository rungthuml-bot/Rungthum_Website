"use client";

import { siteConfig, footerLinks, socialLinks } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-surface-subtle)] px-6 py-12">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          {/* Brand & Identity */}
          <div className="space-y-1">
            <button
              onClick={() => scrollTo("#hero")}
              className="text-left font-display text-base font-bold tracking-tight text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm"
              aria-label="Back to top"
            >
              {siteConfig.name}
              <span className="text-[var(--accent)] font-mono ml-0.5">.</span>
            </button>
            <p className="font-mono text-xs text-[var(--text-muted)]">
              {siteConfig.role} — Khon Kaen, Thailand
            </p>
          </div>

          {/* Editorial Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-mono text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded-sm"
                  >
                    <span className="text-[var(--text-muted)] mr-1">{link.number}</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="rounded p-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider & Colophon */}
        <div className="mt-8 pt-8 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[var(--text-muted)]">
          <p>
            © {currentYear} {siteConfig.name}. Designed with Modern Editorial rigor.
          </p>
          <p>
            Next.js 14 • React 18 • TypeScript • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
