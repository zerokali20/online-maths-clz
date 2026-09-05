"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  text: string;
  speed?: number; // ms per character
  /** If true, types once and stops. If false/undefined, loops. */
  once?: boolean;
  className?: string;
  cursorClassName?: string;
}

export default function Typewriter({
  text,
  speed = 80,
  once = true,
  className = "",
  cursorClassName = "",
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "erasing">(
    "typing"
  );
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (phase === "typing") {
      if (charIndex < text.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(text.slice(0, charIndex + 1));
          setCharIndex((i) => i + 1);
        }, speed);
      } else if (!once) {
        // Pause before erasing
        timeoutRef.current = setTimeout(() => {
          setPhase("pausing");
        }, 2000);
      }
    } else if (phase === "pausing") {
      timeoutRef.current = setTimeout(() => {
        setPhase("erasing");
      }, 500);
    } else if (phase === "erasing") {
      if (charIndex > 0) {
        timeoutRef.current = setTimeout(() => {
          setCharIndex((i) => i - 1);
          setDisplayed(text.slice(0, charIndex - 1));
        }, speed / 2);
      } else {
        setPhase("typing");
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, phase, text, speed, once]);

  return (
    <span className={className}>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.5,
          ease: "easeInOut",
        }}
        className={cursorClassName}
        style={{ display: "inline-block", marginLeft: "2px" }}
        aria-hidden="true"
      >
        |
      </motion.span>
    </span>
  );
}
