"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Calendar, Play, BookOpen, Trophy, X, ShieldCheck, ChevronLeft, ChevronRight, Images } from "lucide-react";
import type { NewsItem, NewsCategory } from "@/data/news";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

interface NewsCardProps {
  item: NewsItem;
}

const categoryConfig: Record<
  NewsCategory,
  {
    labelKey: "news_category_class" | "news_category_results" | "news_category_video";
    className: string;
    Icon: React.FC<{ size?: number; strokeWidth?: number }>;
  }
> = {
  class: {
    labelKey: "news_category_class",
    className: "badge-class",
    Icon: BookOpen,
  },
  results: {
    labelKey: "news_category_results",
    className: "badge-results",
    Icon: Trophy,
  },
  video: {
    labelKey: "news_category_video",
    className: "badge-video",
    Icon: Play,
  },
};

function formatDate(dateStr: string, lang: string = "en"): string {
  try {
    return new Date(dateStr).toLocaleDateString(lang === "si" ? "si-LK" : "en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function NewsCard({ item }: NewsCardProps) {
  const { t, lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [direction, setDirection] = useState(0);
  const config = categoryConfig[item.category];
  const { Icon } = config;

  const displayTitle = (lang === "si" && item.title_si) ? item.title_si : item.title;
  const displayDescription = (lang === "si" && item.description_si) ? item.description_si : item.description;

  const allImages = item.images && item.images.length > 0
    ? item.images
    : item.thumbnail
    ? [item.thumbnail]
    : [];

  const changeImage = (newIdx: number, newDirection: number) => {
    setDirection(newDirection);
    setActiveImgIdx(newIdx);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
      if (allImages.length > 1) {
        if (e.key === "ArrowLeft") {
          changeImage((activeImgIdx - 1 + allImages.length) % allImages.length, -1);
        }
        if (e.key === "ArrowRight") {
          changeImage((activeImgIdx + 1) % allImages.length, 1);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, allImages.length, activeImgIdx]);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowWarning(true);
    setTimeout(() => setShowWarning(false), 2500);
  };

  const handleCardClick = () => {
    setActiveImgIdx(0);
    setDirection(0);
    setIsOpen(true);
  };

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -4, boxShadow: "0 12px 36px rgba(0,0,0,0.12)" }}
        onClick={handleCardClick}
        className="glass-card flex flex-col h-full overflow-hidden cursor-pointer group"
        style={{ padding: 0 }}
      >
        {/* Square / cropped image box if thumbnail exists */}
        {item.thumbnail ? (
          <div
            className="relative w-full overflow-hidden bg-slate-900 select-none"
            style={{ aspectRatio: "4 / 3", minHeight: "220px" }}
            onContextMenu={handleContextMenu}
          >
            <Image
              src={item.thumbnail}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
              style={{
                objectFit: "cover",
                objectPosition: item.thumbnailPosition || "top center",
              }}
              className="group-hover:scale-105 transition-transform duration-500 protected-image select-none pointer-events-none"
              draggable={false}
            />
            {/* Transparent click protector */}
            <div className="protect-overlay" />

            {/* Category badge overlay on image */}
            <div className="absolute top-3 left-3 z-30 pointer-events-none">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${config.className}`}
                style={{ fontFamily: "var(--font-display)", backdropFilter: "blur(8px)" }}
              >
                <Icon size={12} strokeWidth={2.5} />
                {t(config.labelKey)}
              </span>
            </div>

            {/* Multiple images indicator badge */}
            {allImages.length > 1 && (
              <div className="absolute bottom-3 right-3 z-30 pointer-events-none">
                <span
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(0, 0, 0, 0.65)",
                    color: "white",
                    backdropFilter: "blur(6px)",
                    fontFamily: "var(--font-display)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <Images size={13} strokeWidth={2} />
                  {allImages.length}
                </span>
              </div>
            )}
          </div>
        ) : (
          <div className="p-6 pb-0">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${config.className}`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              <Icon size={12} strokeWidth={2.5} />
              {t(config.labelKey)}
            </span>
          </div>
        )}

        {/* Card content: Headline + Date */}
        <div className="flex flex-col flex-1 p-6">
          <h3
            className="font-bold mb-2 leading-snug group-hover:text-indigo-500 transition-colors duration-200"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.1rem",
              color: "var(--text-primary)",
            }}
          >
            {displayTitle}
          </h3>

          <div
            className="flex items-center gap-1.5 mt-auto pt-2"
            style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}
          >
            <Calendar size={13} strokeWidth={2} />
            <time dateTime={item.date}>{formatDate(item.date, lang)}</time>
          </div>
        </div>
      </motion.article>

      {/* Security Toast Warning */}
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

      {/* Detail Pop-up Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
            onContextMenu={handleContextMenu}
            style={{ padding: "1.5rem" }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 sm:p-8"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close"
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-colors"
                style={{
                  background: "var(--border)",
                  color: "var(--text-primary)",
                  border: "none",
                  zIndex: 30,
                }}
              >
                <X size={18} strokeWidth={2.2} />
              </button>

              {/* Modal Image Carousel with animated slide & crossfade */}
              {allImages.length > 0 && (
                <div className="relative mb-6">
                  <div
                    className="relative w-full rounded-xl overflow-hidden select-none"
                    style={{
                      maxHeight: "55vh",
                      height: "400px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(0, 0, 0, 0.05)",
                    }}
                    onContextMenu={handleContextMenu}
                  >
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                      <motion.img
                        key={allImages[activeImgIdx]}
                        src={allImages[activeImgIdx]}
                        alt={`${item.title} - ${activeImgIdx + 1}`}
                        custom={direction}
                        initial={{
                          opacity: 0,
                          x: direction > 0 ? 50 : direction < 0 ? -50 : 0,
                          scale: 0.98,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          x: direction > 0 ? -50 : direction < 0 ? 50 : 0,
                          scale: 0.98,
                        }}
                        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                        draggable={false}
                        className="protected-image select-none pointer-events-none rounded-xl"
                        style={{
                          maxHeight: "55vh",
                          maxWidth: "100%",
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </AnimatePresence>
                    <div className="protect-overlay rounded-xl" onContextMenu={handleContextMenu} />
                  </div>

                  {/* Previous / Next buttons for multiple images */}
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          changeImage((activeImgIdx - 1 + allImages.length) % allImages.length, -1);
                        }}
                        aria-label="Previous image"
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
                        style={{
                          background: "rgba(0, 0, 0, 0.65)",
                          color: "white",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          backdropFilter: "blur(6px)",
                          zIndex: 25,
                        }}
                      >
                        <ChevronLeft size={20} strokeWidth={2.2} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          changeImage((activeImgIdx + 1) % allImages.length, 1);
                        }}
                        aria-label="Next image"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
                        style={{
                          background: "rgba(0, 0, 0, 0.65)",
                          color: "white",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          backdropFilter: "blur(6px)",
                          zIndex: 25,
                        }}
                      >
                        <ChevronRight size={20} strokeWidth={2.2} />
                      </button>

                      {/* Dot indicators / thumbnails */}
                      <div className="flex items-center justify-center gap-2 mt-3">
                        {allImages.map((img, i) => (
                          <button
                            key={img}
                            onClick={() => changeImage(i, i > activeImgIdx ? 1 : -1)}
                            className="w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer"
                            style={{
                              background: activeImgIdx === i ? "#6366f1" : "var(--border)",
                              transform: activeImgIdx === i ? "scale(1.4)" : "scale(1)",
                              border: "none",
                            }}
                            aria-label={`View image ${i + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Badge & Date */}
              <div className="flex items-center gap-3 mb-3">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${config.className}`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <Icon size={12} strokeWidth={2.5} />
                  {t(config.labelKey)}
                </span>
                <span
                  className="flex items-center gap-1 text-xs"
                  style={{ color: "var(--text-muted)" }}
                >
                  <Calendar size={13} strokeWidth={2} />
                  <time dateTime={item.date}>{formatDate(item.date, lang)}</time>
                </span>
              </div>

              {/* Title */}
              <h2
                className="font-extrabold mb-4 leading-snug"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
                  color: "var(--text-primary)",
                }}
              >
                {displayTitle}
              </h2>

              {/* Full News Body */}
              <p
                className="leading-relaxed whitespace-pre-line"
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                }}
              >
                {displayDescription}
              </p>

              {/* External Link */}
              {item.link && (
                <div className="mt-6 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-transform hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                      color: "white",
                      textDecoration: "none",
                      boxShadow: "0 4px 14px rgba(99,102,241,0.35)",
                    }}
                  >
                    {t("news_read_more")}
                    <ExternalLink size={14} strokeWidth={2.2} />
                  </Link>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
