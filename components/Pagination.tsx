"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const { t } = useLanguage();

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const btnBase: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    border: "1px solid var(--border)",
    background: "var(--bg-secondary)",
    color: "var(--text-secondary)",
    cursor: "pointer",
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: "0.875rem",
    transition: "all 0.2s ease",
  };

  const activeBtnStyle: React.CSSProperties = {
    ...btnBase,
    background: "linear-gradient(135deg, #6366f1, #4f46e5)",
    color: "white",
    border: "1px solid transparent",
    boxShadow: "0 2px 8px rgba(99,102,241,0.4)",
  };

  const arrowBtnBase: React.CSSProperties = {
    ...btnBase,
    width: "auto",
    padding: "0 14px",
    gap: "6px",
  };

  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}
    >
      {/* Previous */}
      <button
        id="pagination-prev"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label={t("news_prev")}
        style={{
          ...arrowBtnBase,
          opacity: currentPage === 1 ? 0.4 : 1,
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
        }}
        onMouseEnter={(e) => {
          if (currentPage !== 1)
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#6366f1";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
        }}
      >
        <ChevronLeft size={16} strokeWidth={2.5} />
        {t("news_prev")}
      </button>

      {/* Page numbers */}
      {pages.map((page) => (
        <button
          key={page}
          id={`pagination-page-${page}`}
          onClick={() => onPageChange(page)}
          aria-label={`${t("news_page")} ${page}`}
          aria-current={page === currentPage ? "page" : undefined}
          style={page === currentPage ? activeBtnStyle : btnBase}
          onMouseEnter={(e) => {
            if (page !== currentPage) {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "#6366f1";
              (e.currentTarget as HTMLButtonElement).style.color = "#6366f1";
            }
          }}
          onMouseLeave={(e) => {
            if (page !== currentPage) {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--text-secondary)";
            }
          }}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        id="pagination-next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label={t("news_next")}
        style={{
          ...arrowBtnBase,
          opacity: currentPage === totalPages ? 0.4 : 1,
          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
        }}
        onMouseEnter={(e) => {
          if (currentPage !== totalPages)
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#6366f1";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
        }}
      >
        {t("news_next")}
        <ChevronRight size={16} strokeWidth={2.5} />
      </button>
    </nav>
  );
}
