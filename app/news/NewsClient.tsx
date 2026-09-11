"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NewsCard from "@/components/NewsCard";
import Pagination from "@/components/Pagination";
import { useLanguage } from "@/components/LanguageContext";
import news from "@/data/news";

const ITEMS_PER_PAGE = 4;

export default function NewsClient() {
  const { t, lang } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(news.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const pageItems = news.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of news section
    document.getElementById("news-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────────── */}
      <section
        className="section-alt"
        style={{ paddingTop: "140px", paddingBottom: "60px" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
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
              {lang === "si" ? "යාවත්කාලීන" : "Updates"}
            </span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3.4rem)",
                color: "var(--text-primary)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              {t("news_heading")}
            </h1>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                marginTop: "1rem",
              }}
            >
              {t("news_page")} {currentPage} {t("news_of")} {totalPages}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── News Grid ─────────────────────────────────────────── */}
      <section
        id="news-grid"
        className="section-base"
        style={{ padding: "60px 0 80px" }}
        aria-label="News articles"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {pageItems.length === 0 ? (
            <p style={{ color: "var(--text-muted)", textAlign: "center", padding: "60px 0" }}>
              {t("news_no_items")}
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
              {pageItems.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>
          )}

          {/* Pagination */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </section>
    </>
  );
}
