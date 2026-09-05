"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import backgrounds from "@/data/backgrounds.json";

const INTERVAL_MS = 15000; // 15 seconds per image
const FADE_MS = 1200; // 1.2 second crossfade

export default function BackgroundCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const images = backgrounds as string[];

  useEffect(() => {
    if (images.length <= 1) return;

    const scheduleNext = () => {
      timerRef.current = setTimeout(() => {
        const next = (currentIndex + 1) % images.length;
        setNextIndex(next);
        setIsTransitioning(true);

        // After fade completes, update current and reset next
        setTimeout(() => {
          setCurrentIndex(next);
          setNextIndex(null);
          setIsTransitioning(false);
        }, FADE_MS);
      }, INTERVAL_MS);
    };

    scheduleNext();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, images.length]);

  if (images.length === 0) {
    return (
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #1e293b 100%)",
        }}
      />
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Current image */}
      <div className="absolute inset-0">
        <Image
          src={`/backgrounds/${images[currentIndex]}`}
          alt=""
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10, 10, 30, 0.55)" }}
        />
      </div>

      {/* Next image (fades in during transition) */}
      {nextIndex !== null && (
        <div
          className="absolute inset-0"
          style={{
            opacity: isTransitioning ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease-in-out`,
          }}
        >
          <Image
            src={`/backgrounds/${images[nextIndex]}`}
            alt=""
            fill
            quality={85}
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(10, 10, 30, 0.55)" }}
          />
        </div>
      )}

      {/* Subtle gradient overlay at bottom for text */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: "40%",
          background:
            "linear-gradient(to top, rgba(10,10,30,0.5) 0%, transparent 100%)",
        }}
      />

      {/* Dot indicators */}
      {images.length > 1 && (
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10"
          aria-hidden="true"
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (timerRef.current) clearTimeout(timerRef.current);
                setCurrentIndex(i);
              }}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === currentIndex ? "24px" : "8px",
                height: "8px",
                background:
                  i === currentIndex
                    ? "rgba(255,255,255,0.9)"
                    : "rgba(255,255,255,0.4)",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
              aria-label={`Background image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
