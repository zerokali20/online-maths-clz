"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  /** Target numeric value to count up to */
  target: number;
  /** Optional suffix like "+" or "%" */
  suffix?: string;
  /** Optional prefix like "$" */
  prefix?: string;
  /** Duration in seconds (default 1.8s) */
  duration?: number;
  /** Format thousands with commas (e.g. 10,000) */
  formatNumber?: boolean;
}

export default function Counter({
  target,
  suffix = "",
  prefix = "",
  duration = 1.8,
  formatNumber = true,
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    // Smooth exponential ease-out: quick at first, settles smoothly at the end
    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / (duration * 1000);
      const progress = Math.min(elapsed, 1);
      const eased = easeOutExpo(progress);
      const current = Math.floor(eased * target);

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target, duration]);

  const display = formatNumber ? count.toLocaleString() : count.toString();

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
