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
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full cursor-pointer select-none transition-colors duration-200"
      style={{
        background: "transparent",
        border: "none",
        fontFamily: "var(--font-display)",
        fontSize: "0.75rem",
        fontWeight: 600,
        letterSpacing: "0.08em",
        color: "var(--text-secondary)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
      }}
    >
      <span style={{ color: isEN ? "var(--text-primary)" : "var(--text-muted)", fontWeight: isEN ? 700 : 500 }}>
        EN
      </span>
      <span style={{ color: "var(--text-muted)", opacity: 0.5 }}>/</span>
      <span style={{ color: !isEN ? "var(--text-primary)" : "var(--text-muted)", fontWeight: !isEN ? 700 : 500 }}>
        සිං
      </span>
    </button>
  );
}
