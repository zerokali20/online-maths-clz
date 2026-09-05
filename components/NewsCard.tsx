"use client";

import Link from "next/link";
import { ExternalLink, Calendar, Play, BookOpen, Trophy } from "lucide-react";
import type { NewsItem, NewsCategory } from "@/data/news";
import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";

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

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function NewsCard({ item }: NewsCardProps) {
  const { t } = useLanguage();
  const config = categoryConfig[item.category];
  const { Icon } = config;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="glass-card flex flex-col h-full"
      style={{ padding: "24px" }}
    >
      {/* Category badge */}
      <div className="flex items-center gap-3 mb-3">
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${config.className}`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          <Icon size={12} strokeWidth={2.5} />
          {t(config.labelKey)}
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-bold mb-2 leading-snug"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.05rem",
          color: "var(--text-primary)",
        }}
      >
        {item.title}
      </h3>

      {/* Date */}
      <div
        className="flex items-center gap-1.5 mb-3"
        style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}
      >
        <Calendar size={13} strokeWidth={2} />
        <time dateTime={item.date}>{formatDate(item.date)}</time>
      </div>

      {/* Description */}
      <p
        className="flex-1 leading-relaxed"
        style={{
          color: "var(--text-secondary)",
          fontSize: "0.9rem",
        }}
      >
        {item.description}
      </p>

      {/* Link */}
      {item.link && (
        <Link
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-4 font-semibold transition-all duration-200 hover:gap-2.5"
          style={{
            color: "#6366f1",
            fontSize: "0.875rem",
            fontFamily: "var(--font-display)",
            textDecoration: "none",
          }}
        >
          {t("news_read_more")}
          <ExternalLink size={14} strokeWidth={2.2} />
        </Link>
      )}
    </motion.article>
  );
}
