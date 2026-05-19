"use client";
import { useState, useEffect } from "react";
import { IOS_AVAILABLE } from "@/lib/constants";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  // Light is the default theme; only a stored "dark" preference flips it.
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setIsLight(false);
    }
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("dark", !next);
    localStorage.setItem("theme", next ? "light" : "dark");
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "var(--nav-blur-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-lg font-bold tracking-tight" style={{ color: "var(--text)" }}>
          <span style={{ color: "var(--amber)" }}>Lemon</span>Guard
        </span>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors hover:opacity-80"
            style={{ background: "var(--surface2)", border: "1px solid var(--border)" }}
            aria-label="Toggle light/dark mode"
          >
            {isLight ? <MoonIcon /> : <SunIcon />}
          </button>

          {/* Scrolls to the #download section, which holds the per-platform
              (App Store / Android) buttons. One nav button, two platforms below. */}
          <a
            href="#download"
            className="text-sm font-semibold px-5 py-2 rounded-full cursor-pointer transition-opacity hover:opacity-80"
            style={{ background: "var(--amber)", color: "#0E0F11" }}
          >
            {IOS_AVAILABLE ? "Download Free →" : "Get the App →"}
          </a>
        </div>
      </div>
    </nav>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
