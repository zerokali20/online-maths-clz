"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    if (isAnimating || !mounted) return;

    // Get button position for circular reveal origin
    if (buttonRef.current && overlayRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
      const y = ((rect.top + rect.height / 2) / window.innerHeight) * 100;
      overlayRef.current.style.setProperty("--origin-x", `${x}%`);
      overlayRef.current.style.setProperty("--origin-y", `${y}%`);
    }

    setIsAnimating(true);
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

    // Animate the overlay circle
    if (overlayRef.current) {
      const overlay = overlayRef.current;
      const bgColor = nextTheme === "dark" ? "#0f172a" : "#f8fafc";
      overlay.style.background = bgColor;
      overlay.style.transition = "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
      overlay.style.transform = "scale(3)";

      setTimeout(() => {
        setTheme(nextTheme);
        overlay.style.transition =
          "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
        overlay.style.transform = "scale(0)";
        setTimeout(() => {
          setIsAnimating(false);
        }, 300);
      }, 300);
    } else {
      setTheme(nextTheme);
      setIsAnimating(false);
    }
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl" style={{ background: "var(--border)" }} />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <>
      {/* Circular reveal overlay */}
      <div
        ref={overlayRef}
        className="theme-transition-overlay"
        aria-hidden="true"
      />

      {/* Toggle button */}
      <button
        ref={buttonRef}
        id="theme-toggle"
        onClick={handleToggle}
        disabled={isAnimating}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        className="relative flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden cursor-pointer"
        style={{
          background: "var(--bg-secondary)",
          border: "1px solid var(--border)",
          transition: "background 0.3s ease, border-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.08)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(99,102,241,0.3)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
        }}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Sun size={18} color="#fbbf24" strokeWidth={2.2} />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Moon size={18} color="#818cf8" strokeWidth={2.2} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </>
  );
}
