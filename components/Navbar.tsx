"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calculator } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./LanguageContext";

const NAV_ITEMS = [
  { href: "/", labelKey: "nav_home" as const },
  { href: "/about", labelKey: "nav_about" as const },
  { href: "/news", labelKey: "nav_news" as const },
  { href: "/gallery", labelKey: "nav_gallery" as const },
  { href: "/contact", labelKey: "nav_contact" as const },
];

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", menuOpen);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled
            ? "var(--navbar-bg)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
          boxShadow: scrolled ? "var(--shadow)" : "none",
        }}
      >
        <nav
          className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between"
          style={{ height: "76px" }}
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            id="nav-logo"
            className="flex items-center gap-3 group"
            style={{ textDecoration: "none" }}
          >
            <div
              className="flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105"
              style={{
                width: "36px",
                height: "36px",
                background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                color: "white",
              }}
            >
              <Calculator size={19} color="white" strokeWidth={2.2} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  lineHeight: 1.15,
                  color: scrolled ? "var(--text-primary)" : "white",
                  transition: "color 0.3s ease",
                  letterSpacing: "-0.01em",
                }}
              >
                Sumedha Karunanayake
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  fontSize: "0.68rem",
                  color: scrolled ? "var(--text-muted)" : "rgba(255,255,255,0.7)",
                  transition: "color 0.3s ease",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                Mathematics
              </div>
            </div>
          </Link>

          {/* Desktop nav links - Studio Mirellez style (clean, no boxes, animated underline wipe) */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(({ href, labelKey }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  id={`nav-${labelKey}`}
                  className="link-wipe text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: scrolled
                      ? active
                        ? "var(--text-primary)"
                        : "var(--text-secondary)"
                      : active
                        ? "#ffffff"
                        : "rgba(255, 255, 255, 0.8)",
                    textDecoration: "none",
                    padding: "6px 0",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = scrolled ? "var(--text-primary)" : "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLAnchorElement).style.color = scrolled ? "var(--text-secondary)" : "rgba(255, 255, 255, 0.8)";
                    }
                  }}
                >
                  {t(labelKey)}
                  {active && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0"
                      style={{
                        height: "1.5px",
                        background: scrolled ? "var(--text-primary)" : "#ffffff",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop controls */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />
            <div style={{ width: "1px", height: "16px", background: scrolled ? "var(--border)" : "rgba(255,255,255,0.2)" }} />
            <ThemeToggle />
          </div>

          {/* Mobile: controls + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              id="mobile-menu-toggle"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex items-center justify-center w-9 h-9 cursor-pointer"
              style={{
                background: "transparent",
                border: "none",
                color: scrolled ? "var(--text-primary)" : "white",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} strokeWidth={2} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} strokeWidth={2} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)" }}
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-in panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 35 }}
              className="fixed top-0 right-0 bottom-0 z-50 md:hidden flex flex-col"
              style={{
                width: "min(320px, 85vw)",
                background: "var(--bg-card)",
                borderLeft: "1px solid var(--border)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              {/* Panel header */}
              <div
                className="flex items-center justify-between px-6 py-5"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--text-primary)",
                  }}
                >
                  Menu
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="flex items-center justify-center w-9 h-9 rounded-lg"
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                    cursor: "pointer",
                  }}
                >
                  <X size={16} strokeWidth={2.2} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 flex flex-col px-4 py-4 gap-1" aria-label="Mobile navigation">
                {NAV_ITEMS.map(({ href, labelKey }, i) => {
                  const active = isActive(href);
                  return (
                    <motion.div
                      key={href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <Link
                        href={href}
                        id={`mobile-nav-${labelKey}`}
                        className="flex items-center px-4 py-3 rounded-xl font-semibold transition-all duration-200"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1rem",
                          color: active ? "#6366f1" : "var(--text-primary)",
                          background: active ? "rgba(99,102,241,0.1)" : "transparent",
                          textDecoration: "none",
                        }}
                      >
                        {t(labelKey)}
                        {active && (
                          <span
                            className="ml-auto rounded-full"
                            style={{ width: "6px", height: "6px", background: "#6366f1" }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Language toggle in panel */}
              <div
                className="px-6 py-5 flex items-center gap-3"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.875rem",
                    color: "var(--text-secondary)",
                    fontWeight: 500,
                  }}
                >
                  Language
                </span>
                <LanguageToggle />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
