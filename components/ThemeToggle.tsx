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

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isAnimating || !mounted) return;

    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

    // Native Document View Transition API with circular clip-path (kavithakanchana.me effect)
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      setIsAnimating(true);
      const transition = (document as unknown as {
        startViewTransition: (callback: () => void) => { ready: Promise<void>; finished: Promise<void> };
      }).startViewTransition(() => {
        setTheme(nextTheme);
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 500,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      });

      transition.finished.finally(() => {
        setIsAnimating(false);
      });
      return;
    }

    // Fallback animation for browsers without startViewTransition
    if (buttonRef.current && overlayRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
      const y = ((rect.top + rect.height / 2) / window.innerHeight) * 100;
      overlayRef.current.style.setProperty("--origin-x", `${x}%`);
      overlayRef.current.style.setProperty("--origin-y", `${y}%`);
    }

    setIsAnimating(true);
    if (overlayRef.current) {
      const overlay = overlayRef.current;
      const bgColor = nextTheme === "dark" ? "#09090b" : "#ffffff";
      overlay.style.background = bgColor;
      overlay.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
      overlay.style.transform = "scale(3)";

      setTimeout(() => {
        setTheme(nextTheme);
        overlay.style.transition = "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)";
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
      <div className="w-8 h-8 rounded-full opacity-0" />
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
        className="relative flex items-center justify-center w-9 h-9 rounded-full cursor-pointer transition-colors duration-200"
        style={{
          background: "transparent",
          border: "none",
          color: "var(--text-primary)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "var(--border)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
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
