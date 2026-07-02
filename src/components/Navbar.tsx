"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#community", label: "Community" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <nav
        className={`hidden items-center gap-1 rounded-full border px-2 py-2 backdrop-blur-md transition-all duration-500 md:flex ${
          scrolled ? "border-void-line bg-void/80" : "border-transparent bg-void/30"
        }`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            data-cursor-hover
            className="rounded-full px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-dim transition-colors hover:bg-void-card hover:text-moon"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
        aria-expanded={open}
        data-cursor-hover
        className={`flex items-center gap-2 rounded-full border px-5 py-3 backdrop-blur-md transition-colors md:hidden ${
          scrolled ? "border-void-line bg-void/80" : "border-void-line bg-void/50"
        }`}
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink-dim">Menu</span>
        <div className="flex flex-col gap-1">
          <span className={`h-px w-4 bg-ink transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`h-px w-4 bg-ink transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </div>
      </button>

      {open && (
        <div className="absolute left-1/2 top-16 flex w-[calc(100vw-2rem)] max-w-xs -translate-x-1/2 flex-col gap-1 rounded-3xl border border-void-line bg-void/95 p-3 backdrop-blur-md md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-center font-mono text-xs uppercase tracking-[0.18em] text-ink-dim hover:bg-void-card hover:text-moon"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
