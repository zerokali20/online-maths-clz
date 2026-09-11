"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAME = "Sumedha Karunanayake";
const SUBTITLE = "Mathematics Tutor";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => setDone(true), 800);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    setVisible(false);
    setTimeout(() => setDone(true), 400);
  };

  if (done) return null;

  return (
    <AnimatePresence mode="wait" onExitComplete={() => setDone(true)}>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999, background: "#0f172a",
            display: "flex", flexDirection: "column", alignItems: "center",
            justifyContent: "center", overflow: "hidden",
            pointerEvents: visible ? "auto" : "none",
          }}
          aria-hidden={!visible}
        >
          {/* Skip button in corner */}
          <button
            onClick={handleSkip}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "rgba(255, 255, 255, 0.7)",
              borderRadius: "9999px",
              padding: "6px 16px",
              fontSize: "0.75rem",
              fontFamily: "var(--font-display)",
              cursor: "pointer",
              letterSpacing: "0.05em",
              zIndex: 10000,
            }}
          >
            Skip &rarr;
          </button>
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            style={{
              fontFamily: "var(--font-display)", fontSize: "0.7rem", fontWeight: 600,
              letterSpacing: "0.45em", textTransform: "uppercase", color: "#6366f1", marginBottom: "1.5rem",
            }}
          >Welcome</motion.p>

          <h1 aria-label={NAME} style={{
            fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.8rem, 6vw, 4.5rem)",
            color: "white", letterSpacing: "-0.02em", lineHeight: 1,
            display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0 0.3em",
            marginBottom: "1.25rem", padding: "0 1rem",
          }}>
            {NAME.split(" ").map((word, wi) => (
              <span key={wi} style={{ display: "inline-flex", overflow: "hidden" }} aria-hidden="true">
                {word.split("").map((char, ci) => {
                  const globalIdx = NAME.split(" ").slice(0, wi).reduce((a: number, w: string) => a + w.length + 1, 0) + ci;
                  return (
                    <motion.span key={ci} initial={{ y: "110%" }} animate={{ y: 0 }}
                      transition={{ delay: 0.3 + globalIdx * 0.04, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                      style={{ display: "inline-block" }}
                    >{char}</motion.span>
                  );
                })}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ clipPath: "inset(-0.25em 100% -0.35em -0.1em)" }}
            animate={{ clipPath: "inset(-0.25em -0.1% -0.35em -0.1em)" }}
            transition={{ delay: 1.1, duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
            style={{
              fontFamily: "var(--font-sans)", fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
              color: "rgba(255,255,255,0.55)", letterSpacing: "0.12em", textTransform: "uppercase",
            }}
          >{SUBTITLE}</motion.p>

          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "rgba(255,255,255,0.08)" }}>
            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ duration: 2.3, ease: "linear" }}
              style={{ height: "100%", background: "linear-gradient(90deg, #6366f1, #8b5cf6)", transformOrigin: "left" }}
            />
          </div>

          <motion.span
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            style={{
              position: "absolute", bottom: "1.5rem", right: "1.5rem",
              fontFamily: "var(--font-display)", fontSize: "0.7rem",
              color: "rgba(255,255,255,0.3)", letterSpacing: "0.2em",
            }}
          >SK</motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
