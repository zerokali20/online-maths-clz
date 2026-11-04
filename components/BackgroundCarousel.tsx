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
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at center, #420408 0%, #200103 100%)",
      }}
    >
      {/* Current image */}
      <div className="absolute inset-0">
        {/* Ambient blurred backdrop to eliminate empty letterboxing */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            src={`/backgrounds/${images[currentIndex]}`}
            alt=""
            fill
            priority
            quality={50}
            className="object-cover scale-110 blur-2xl opacity-40"
            sizes="100vw"
          />
        </div>

        {/* Sharp contained banner — ensures top logos and bottom department text are fully visible */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            paddingTop: "78px",
            paddingBottom: "52px",
            paddingLeft: "12px",
            paddingRight: "12px",
          }}
        >
          <div
            className="relative w-full h-full max-w-[1920px]"
            style={{
              maxHeight: "calc(100svh - 130px)",
              maxWidth: "calc((100svh - 130px) * 16 / 9)",
              aspectRatio: "16 / 9",
            }}
          >
            <Image
              src={`/backgrounds/${images[currentIndex]}`}
              alt="Sumedha Karunanayake Award Banner"
              fill
              priority
              quality={95}
              className="object-contain object-center"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Soft vignette + bottom gradient for bottom-left text readability without obscuring faces */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(10, 5, 15, 0.6) 0%, rgba(10, 5, 15, 0.12) 35%, rgba(10, 5, 15, 0.1) 70%, rgba(10, 5, 15, 0.35) 100%)",
          }}
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
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Image
              src={`/backgrounds/${images[nextIndex]}`}
              alt=""
              fill
              quality={50}
              className="object-cover scale-110 blur-2xl opacity-40"
              sizes="100vw"
            />
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{
              paddingTop: "78px",
              paddingBottom: "52px",
              paddingLeft: "12px",
              paddingRight: "12px",
            }}
          >
            <div
              className="relative w-full h-full max-w-[1920px]"
              style={{
                maxHeight: "calc(100svh - 130px)",
                maxWidth: "calc((100svh - 130px) * 16 / 9)",
                aspectRatio: "16 / 9",
              }}
            >
              <Image
                src={`/backgrounds/${images[nextIndex]}`}
                alt=""
                fill
                quality={95}
                className="object-contain object-center"
                sizes="100vw"
              />
            </div>
          </div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(10, 5, 15, 0.6) 0%, rgba(10, 5, 15, 0.12) 35%, rgba(10, 5, 15, 0.1) 70%, rgba(10, 5, 15, 0.35) 100%)",
            }}
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
