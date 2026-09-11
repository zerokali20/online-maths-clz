"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Star, Users, Award } from "lucide-react";
import BackgroundCarousel from "@/components/BackgroundCarousel";
import Typewriter from "@/components/Typewriter";
import NewsCard from "@/components/NewsCard";
import { useLanguage } from "@/components/LanguageContext";
import news from "@/data/news";
import about from "@/data/about";

const fadeInUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
};

export default function HomePage() {
  const { t, lang } = useLanguage();
  const latestNews = news.slice(0, 4);

  return (
    <>
      {/* ── Hero Section ──────────────────────────────────────── */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: "100svh" }}
        aria-label="Hero section"
      >
        {/* Rotating background */}
        <BackgroundCarousel />

        {/* Hero content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              backdropFilter: "blur(8px)",
            }}
          >
            <Star size={14} color="#fbbf24" fill="#fbbf24" />
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "0.05em",
              }}
            >
              {about.yearsExperience} {about.statLabel}
            </span>
          </motion.div>

          {/* Tutor name with typewriter */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
              fontWeight: 800,
              color: "white",
              marginBottom: "1.25rem",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            <Typewriter
              text="Sumedha Karunanayake"
              speed={70}
              once
              cursorClassName=""
              className=""
            />
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.7 }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: "rgba(255,255,255,0.85)",
              marginBottom: "2.5rem",
              maxWidth: "600px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.6,
              textShadow: "0 1px 8px rgba(0,0,0,0.3)",
            }}
          >
            {t("hero_tagline")}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact" id="hero-cta-primary" className="btn-primary">
              {t("hero_cta")}
              <ArrowRight size={17} strokeWidth={2.5} />
            </Link>
            <Link href="/about" id="hero-cta-secondary"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white transition-all duration-200"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.95rem",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.3)",
                backdropFilter: "blur(8px)",
                textDecoration: "none",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.2)"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.12)"}
            >
              {t("home_about_cta")}
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown size={28} color="rgba(255,255,255,0.6)" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats Banner ──────────────────────────────────────── */}
      <section
        id="stats-banner"
        aria-label="Key statistics"
        style={{ background: "linear-gradient(135deg, #4f46e5, #6366f1)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
            {[
              { icon: Award, value: "23+", label: "Years Teaching" },
              { icon: Users, value: "10,000+", label: "Students Guided" },
              { icon: Star, value: "95%", label: "Distinction Rate" },
            ].map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-2xl mb-1"
                  style={{ background: "rgba(255,255,255,0.15)" }}
                >
                  <Icon size={22} strokeWidth={2} />
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "2.2rem", lineHeight: 1 }}>
                  {value}
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", opacity: 0.85 }}>
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Preview ─────────────────────────────────────── */}
      <section
        id="about-preview"
        className="section-base"
        aria-label="About preview"
        style={{ padding: "80px 0" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              {...fadeInUp}
              whileInView={fadeInUp.animate}
              initial={fadeInUp.initial}
              viewport={{ once: true }}
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
                {t("home_about_heading")}
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                  color: "var(--text-primary)",
                  marginBottom: "1.25rem",
                  lineHeight: 1.15,
                }}
              >
                {about.yearsExperience}{" "}
                <span className="gradient-text">{about.statLabel}</span>
              </h2>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                }}
              >
                {t("home_about_lead")}
              </p>
              <Link href="/about" id="home-about-cta" className="btn-primary">
                {t("home_about_cta")}
                <ArrowRight size={17} strokeWidth={2.5} />
              </Link>
            </motion.div>

            {/* Visual content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ padding: "20px 0", textAlign: "center" }}
            >
              {/* Tutor photo */}
              <div
                className="mx-auto mb-6 flex items-center justify-center rounded-full"
                style={{
                  width: "126px",
                  height: "126px",
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  padding: "3px",
                  flexShrink: 0,
                }}
              >
                <div
                  className="rounded-full overflow-hidden"
                  style={{ width: "120px", height: "120px", position: "relative" }}
                >
                  <Image
                    src={about.photoPath}
                    alt={about.photoAlt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="120px"
                    priority
                  />
                </div>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  color: "var(--text-primary)",
                  marginBottom: "6px",
                }}
              >
                {about.name}
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "20px" }}>
                Mathematics Tutor • Grade 6–11
              </p>
              {/* Qualification pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                {(lang === "si" && about.qualifications_si ? about.qualifications_si : about.qualifications).slice(0, 3).map((q) => (
                  <span
                    key={q}
                    style={{
                      background: "rgba(99,102,241,0.08)",
                      border: "1px solid rgba(99,102,241,0.2)",
                      color: "#6366f1",
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    {q}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Latest News ───────────────────────────────────────── */}
      <section
        id="home-news"
        className="section-alt"
        aria-label="Latest news"
        style={{ padding: "80px 0" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4"
          >
            <div>
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3"
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
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
                  color: "var(--text-primary)",
                  lineHeight: 1.15,
                }}
              >
                {t("home_news_heading")}
              </h2>
            </div>
            <Link
              href="/news"
              id="home-news-cta"
              className="btn-secondary"
              style={{ whiteSpace: "nowrap", flexShrink: 0 }}
            >
              {t("home_news_cta")}
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section
        id="cta-banner"
        aria-label="Call to action"
        style={{ padding: "80px 0" }}
        className="section-base"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card text-center"
            style={{
              padding: "60px 40px",
              background: "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.08) 100%)",
              borderColor: "rgba(99,102,241,0.2)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                color: "var(--text-primary)",
                marginBottom: "1rem",
                lineHeight: 1.15,
              }}
            >
              Ready to Excel in{" "}
              <span className="gradient-text">Mathematics?</span>
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                marginBottom: "2rem",
                maxWidth: "500px",
                margin: "0 auto 2rem",
                lineHeight: 1.7,
              }}
            >
              Get in touch today to start your journey towards mathematical
              excellence. Classes available for Grade 6–11.
            </p>
            <Link href="/contact" id="cta-contact-btn" className="btn-primary">
              {t("hero_cta")}
              <ArrowRight size={17} strokeWidth={2.5} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
