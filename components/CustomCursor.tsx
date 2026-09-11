"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const isTouch = useRef(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 500, damping: 38, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 38, mass: 0.4 });

  useEffect(() => {
    const onTouch = () => { isTouch.current = true; setVisible(false); };
    window.addEventListener("touchstart", onTouch, { once: true });

    const onMove = (e: MouseEvent) => {
      if (isTouch.current) return;
      mouseX.set(e.clientX); mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => { if (!isTouch.current) setVisible(true); };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!(t.closest("a, button, [role='button'], input, textarea, select, label")));
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      window.removeEventListener("touchstart", onTouch);
    };
  }, [mouseX, mouseY, visible]);

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "fixed", top: 0, left: 0, zIndex: 99999, pointerEvents: "none",
        x: springX, y: springY, translateX: "-50%", translateY: "-50%",
      }}
    >
      <motion.div
        animate={{
          width: hovering ? 36 : clicking ? 14 : 24,
          height: hovering ? 36 : clicking ? 14 : 24,
          opacity: visible ? 1 : 0,
          background: hovering ? "rgba(99,102,241,0.15)" : "transparent",
          borderColor: hovering ? "rgba(99,102,241,0.8)" : "rgba(255,255,255,0.6)",
        }}
        transition={{ duration: 0.2 }}
        style={{
          borderRadius: "50%", border: "1.5px solid",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}
      >
        <motion.div
          animate={{
            width: clicking ? 3 : hovering ? 4 : 6,
            height: clicking ? 3 : hovering ? 4 : 6,
            opacity: visible ? 1 : 0,
            background: hovering ? "#6366f1" : "white",
          }}
          transition={{ duration: 0.15 }}
          style={{
            borderRadius: "50%",
            boxShadow: hovering ? "0 0 8px rgba(99,102,241,0.8)" : "0 0 6px rgba(255,255,255,0.6)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
