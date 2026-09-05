"use client";

import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();
  const isEN = lang === "en";

  return (
    <button
      id="language-toggle"
      onClick={toggleLang}
      aria-label={isEN ? "Switch to Sinhala" : "Switch to English"}
      className="relative flex items-center h-9 rounded-full px-1 cursor-pointer select-none"
      style={{
        width: "80px",
        background: "var(--bg-secondary)",
        border: "1px solid var(--border)",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* Sliding pill */}
      <motion.span
        layout
        animate={{ x: isEN ? 0 : 40 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="absolute flex items-center justify-center h-7 rounded-full text-white"
        style={{
          width: "36px",
          left: "4px",
          background: "linear-gradient(135deg, #6366f1, #4f46e5)",
          boxShadow: "0 2px 8px rgba(99,102,241,0.4)",
          fontSize: "0.65rem",
          fontWeight: 700,
          letterSpacing: "0.05em",
          fontFamily: "var(--font-display)",
        }}
      >
        {isEN ? "EN" : "සිං"}
      </motion.span>

      {/* Labels */}
      <span
        className="absolute left-2 text-xs font-semibold transition-opacity duration-200"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.65rem",
          letterSpacing: "0.05em",
          color: isEN ? "transparent" : "var(--text-secondary)",
          userSelect: "none",
        }}
      >
        EN
      </span>
      <span
        className="absolute right-2 text-xs font-semibold transition-opacity duration-200"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.65rem",
          color: isEN ? "var(--text-secondary)" : "transparent",
          userSelect: "none",
        }}
      >
        සිං
      </span>
    </button>
  );
}
