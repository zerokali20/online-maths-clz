"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Images, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import gallery, { type GalleryPhoto, type GalleryCategory } from "@/data/gallery";

type FilterKey = "all" | GalleryCategory;

const CATEGORIES: { key: FilterKey; labelKey: "gallery_all" | "gallery_class" | "gallery_whiteboard" | "gallery_students" | "gallery_events" }[] = [
  { key: "all",        labelKey: "gallery_all" },
  { key: "class",      labelKey: "gallery_class" },
  { key: "whiteboard", labelKey: "gallery_whiteboard" },
  { key: "students",   labelKey: "gallery_students" },
  { key: "events",     labelKey: "gallery_events" },
];

// Gradient placeholders per category (shown when src is empty)
const PLACEHOLDER_GRADIENTS: Record<GalleryCategory | "all", string> = {
  all:        "linear-gradient(135deg, #6366f1, #8b5cf6)",
  class:      "linear-gradient(135deg, #6366f1, #4f46e5)",
  whiteboard: "linear-gradient(135deg, #0ea5e9, #6366f1)",
  students:   "linear-gradient(135deg, #10b981, #0ea5e9)",
  events:     "linear-gradient(135deg, #f59e0b, #ef4444)",
};

const FLOAT_DELAYS = [0, 0.4, 0.8, 1.2, 0.2, 0.6, 1.0, 0.3, 0.9];

function PlaceholderCard({ photo, idx }: { photo: GalleryPhoto; idx: number }) {
  const delay = FLOAT_DELAYS[idx % FLOAT_DELAYS.length];
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 4 + (idx % 3) * 0.6,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      style={{
        background: PLACEHOLDER_GRADIENTS[photo.category],
        borderRadius: "12px",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        opacity: 0.85,
      }}
    >
      <Images size={32} color="rgba(255,255,255,0.7)" strokeWidth={1.5} />
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "0.75rem",
          color: "rgba(255,255,255,0.6)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          textAlign: "center",
          padding: "0 1rem",
        }}
      >
        {photo.caption ?? photo.alt}
      </span>
    </motion.div>
  );
}

export default function GalleryClient() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered =
    activeFilter === "all"
      ? gallery
      : gallery.filter((p) => p.category === activeFilter);

  const openLightbox = useCallback((idx: number) => setLightboxIdx(idx), []);
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);

  const goPrev = useCallback(() => {
    setLightboxIdx((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  }, [filtered.length]);

  const goNext = useCallback(() => {
    setLightboxIdx((i) => (i !== null ? (i + 1) % filtered.length : null));
  }, [filtered.length]);

  const currentPhoto = lightboxIdx !== null ? filtered[lightboxIdx] : null;

  // Keyboard navigation & Esc to close
  useEffect(() => {
    if (lightboxIdx === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIdx, closeLightbox, goPrev, goNext]);

  // Anti-theft warning toast state
  const [showWarning, setShowWarning] = useState(false);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowWarning(true);
    setTimeout(() => setShowWarning(false), 2500);
  };

  const cardHeightForAspect = (aspect?: string) => {
    if (aspect === "portrait") return "320px";
    if (aspect === "landscape") return "200px";
    return "240px";
  };

  return (
    <>
      {/* ── Page Hero ───────────────────────────────────────── */}
      <section
        className="section-alt"
        style={{ paddingTop: "140px", paddingBottom: "60px" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5"
              style={{
                background: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.2)",
                fontFamily: "var(--font-display)",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#6366f1",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {t("nav_gallery")}
            </span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3.4rem)",
                color: "var(--text-primary)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
              }}
            >
              {t("gallery_heading")}
            </h1>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1rem",
                maxWidth: "480px",
                margin: "0 auto",
              }}
            >
              {t("gallery_subheading")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter Tabs ─────────────────────────────────────── */}
      <section className="section-base" style={{ padding: "40px 0 0" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap gap-2 justify-center"
          >
            {CATEGORIES.map(({ key, labelKey }) => {
              const active = activeFilter === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    padding: "8px 20px",
                    borderRadius: "40px",
                    border: active ? "none" : "1px solid var(--border)",
                    background: active
                      ? "linear-gradient(135deg, #6366f1, #4f46e5)"
                      : "var(--bg-card)",
                    color: active ? "white" : "var(--text-secondary)",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    boxShadow: active ? "0 4px 12px rgba(99,102,241,0.35)" : "none",
                  }}
                >
                  {t(labelKey)}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Gallery Grid ────────────────────────────────────── */}
      <section className="section-base" style={{ padding: "40px 0 80px" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((photo, idx) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 6) * 0.08, duration: 0.5 }}
                  className="glass-card overflow-hidden group select-none"
                  style={{
                    height: cardHeightForAspect(photo.aspect),
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onClick={() => openLightbox(idx)}
                  onContextMenu={handleContextMenu}
                  whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.18)" }}
                >
                  {photo.src ? (
                    <>
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="group-hover:scale-105 protected-image pointer-events-none select-none"
                        draggable={false}
                      />
                      {/* Transparent security layer prevents dragging or saving */}
                      <div className="protect-overlay" />

                      {/* Hover overlay */}
                      <div
                        className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none"
                        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)" }}
                      >
                        <p
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "0.875rem",
                            fontWeight: 600,
                            color: "white",
                          }}
                        >
                          {photo.caption ?? photo.alt}
                        </p>
                      </div>
                    </>
                  ) : (
                    <PlaceholderCard photo={photo} idx={idx} />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p style={{ textAlign: "center", color: "var(--text-muted)", padding: "60px 0" }}>
              No photos in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* ── Security Toast Warning ──────────────────────────── */}
      <AnimatePresence>
        {showWarning && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              bottom: "2rem",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10001,
              background: "rgba(15, 23, 42, 0.95)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "9999px",
              padding: "10px 20px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              color: "white",
              fontSize: "0.825rem",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.02em",
            }}
          >
            <ShieldCheck size={16} color="#6366f1" />
            <span>Images are protected by copyright. Saving or downloading is disabled.</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Lightbox (Pure Photo Pop-up without extra box color) ─ */}
      <AnimatePresence>
        {lightboxIdx !== null && currentPhoto && (
          <motion.div
            key="lightbox"
            className="lightbox-backdrop select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            onContextMenu={handleContextMenu}
          >
            {/* Pure Floating Photo Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                maxWidth: "92vw",
                maxHeight: "88vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
              }}
            >
              {currentPhoto.src ? (
                /* Pure Photo with Shadow and Rounded Edges - NO solid box background */
                <div
                  style={{
                    position: "relative",
                    maxWidth: "90vw",
                    maxHeight: "80vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={currentPhoto.src}
                    alt={currentPhoto.alt}
                    draggable={false}
                    className="protected-image select-none pointer-events-none"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "80vh",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                      borderRadius: "8px",
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
                      display: "block",
                    }}
                  />
                  {/* Invisible transparent shield over the image preventing drag & click actions */}
                  <div
                    className="protect-overlay"
                    style={{ borderRadius: "8px" }}
                    onContextMenu={handleContextMenu}
                  />
                </div>
              ) : (
                /* Placeholder Card only shown when photo has no src yet */
                <div
                  style={{
                    width: "min(90vw, 550px)",
                    height: "min(60vh, 380px)",
                    borderRadius: "16px",
                    background: PLACEHOLDER_GRADIENTS[currentPhoto.category],
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                    padding: "2rem",
                    textAlign: "center",
                  }}
                >
                  <Images size={56} color="rgba(255,255,255,0.7)" strokeWidth={1.2} />
                  <p
                    style={{
                      color: "white",
                      marginTop: "16px",
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                    }}
                  >
                    {currentPhoto.caption ?? currentPhoto.alt}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.6)", marginTop: "6px", fontSize: "0.85rem" }}>
                    {t("gallery_placeholder")}
                  </p>
                </div>
              )}

              {/* Caption & Counter under image */}
              <div
                style={{
                  marginTop: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "4px",
                  textAlign: "center",
                }}
              >
                {currentPhoto.caption && (
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.95)",
                      textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                      margin: 0,
                    }}
                  >
                    {currentPhoto.caption}
                  </p>
                )}
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "0.1em",
                    margin: 0,
                  }}
                >
                  {lightboxIdx + 1} / {filtered.length}
                </p>
              </div>
            </motion.div>

            {/* Close button */}
            <button
              onClick={closeLightbox}
              aria-label={t("gallery_close")}
              style={{
                position: "fixed",
                top: "1.5rem",
                right: "1.5rem",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.2s, transform 0.2s",
                zIndex: 1002,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.25)";
                e.currentTarget.style.transform = "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <X size={20} strokeWidth={2} />
            </button>

            {/* Prev / Next Buttons */}
            {filtered.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  aria-label="Previous photo"
                  style={{
                    position: "fixed",
                    left: "1.5rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "background 0.2s, transform 0.2s",
                    zIndex: 1002,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.25)";
                    e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                    e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                  }}
                >
                  <ChevronLeft size={22} strokeWidth={2.2} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  aria-label="Next photo"
                  style={{
                    position: "fixed",
                    right: "1.5rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "background 0.2s, transform 0.2s",
                    zIndex: 1002,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.25)";
                    e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.12)";
                    e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                  }}
                >
                  <ChevronRight size={22} strokeWidth={2.2} />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
