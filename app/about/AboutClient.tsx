"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, BookOpen, Lightbulb, CheckCircle } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import about from "@/data/about";

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function AboutClient() {
  const { t, lang } = useLanguage();

  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────────── */}
      <section
        className="section-alt"
        style={{
          paddingTop: "140px",
          paddingBottom: "80px",
        }}
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
              {t("nav_about")}
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
              {t("about_heading")}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── Main Content ──────────────────────────────────────── */}
      <section className="section-base" style={{ padding: "80px 0" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: profile card */}
            <motion.div
              {...fadeInUp}
              className="flex flex-col gap-6"
            >
              {/* Avatar / Photo */}
              <div
                className="glass-card flex flex-col items-center text-center"
                style={{ padding: "40px 32px" }}
              >
                {/* Tutor Photo */}
                <div
                  className="flex items-center justify-center rounded-full mb-5"
                  style={{
                    width: "148px",
                    height: "148px",
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    padding: "3px",
                    flexShrink: 0,
                  }}
                >
                  <div
                    className="rounded-full overflow-hidden"
                    style={{ width: "142px", height: "142px", position: "relative" }}
                  >
                    <Image
                      src={about.photoPath}
                      alt={about.photoAlt}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="142px"
                      priority
                    />
                  </div>
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "1.35rem",
                    color: "var(--text-primary)",
                    marginBottom: "4px",
                  }}
                >
                  {about.name}
                </h2>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.875rem",
                    marginBottom: "20px",
                  }}
                >
                  Mathematics Tutor • Grade 6–11
                </p>

                {/* Experience badge */}
                <div
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                    boxShadow: "0 4px 16px rgba(99,102,241,0.4)",
                  }}
                >
                  <Award size={20} color="white" strokeWidth={2} />
                  <div className="text-left">
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 800,
                        fontSize: "1.6rem",
                        color: "white",
                        lineHeight: 1,
                      }}
                    >
                      {about.yearsExperience}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.7rem",
                        color: "rgba(255,255,255,0.8)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {t("about_years")}
                    </div>
                  </div>
                </div>
              </div>

              {/* Qualifications */}
              <div
                className="glass-card"
                style={{ padding: "28px" }}
              >
                <h3
                  className="flex items-center gap-2 mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--text-primary)",
                  }}
                >
                  <BookOpen size={18} color="#6366f1" strokeWidth={2} />
                  {t("about_qualifications_heading")}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {(lang === "si" && about.qualifications_si ? about.qualifications_si : about.qualifications).map((q) => (
                    <li
                      key={q}
                      className="flex items-start gap-2.5"
                      style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.5 }}
                    >
                      <CheckCircle
                        size={15}
                        color="#10b981"
                        strokeWidth={2.5}
                        style={{ marginTop: "3px", flexShrink: 0 }}
                      />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Award Winning Moment Card */}
              <div
                className="glass-card overflow-hidden"
                style={{ padding: "22px" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Award size={18} color="#f59e0b" strokeWidth={2.2} />
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    {lang === "si" ? "සම්මානනීය මොහොත" : "Award-Winning Moment"}
                  </h3>
                </div>

                <div
                  className="relative rounded-xl overflow-hidden mb-3 select-none"
                  style={{ aspectRatio: "4/3", width: "100%", background: "rgba(0,0,0,0.2)" }}
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <Image
                    src="/images/gallery/Award.jpg"
                    alt="Best Central Province Mathematics Teacher Award at Shilpabhimani Event"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 20%" }}
                    className="protected-image"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                  <div className="protect-overlay" />
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    color: "var(--text-primary)",
                    marginBottom: "4px",
                    lineHeight: 1.4,
                  }}
                >
                  {lang === "si"
                    ? "මධ්‍යම පළාතේ හොඳම ගණිත ගුරු සම්මානය"
                    : "Best Central Province Mathematics Teacher"}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.78rem",
                    color: "#6366f1",
                    fontWeight: 600,
                  }}
                >
                  {lang === "si" ? "ශිල්පාභිමානී සම්මාන උළෙල" : "Shilpabhimani (ශිල්පාභිමානී) Event"}
                </p>
              </div>
            </motion.div>

            {/* Right: bio + philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-2 flex flex-col gap-8"
            >
              {/* Biography */}
              <div className="glass-card" style={{ padding: "40px" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "1.6rem",
                    color: "var(--text-primary)",
                    marginBottom: "20px",
                  }}
                >
                  {lang === "si" ? (
                    <>
                      <span className="gradient-text">{about.name}</span> ගැන
                    </>
                  ) : (
                    <>
                      About <span className="gradient-text">{about.name}</span>
                    </>
                  )}
                </h2>
                {((lang === "si" && about.bio_si ? about.bio_si : about.bio))
                  .split("\n\n")
                  .map((para, i, arr) => (
                    <p
                      key={i}
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "1rem",
                        lineHeight: 1.8,
                        marginBottom: i < arr.length - 1 ? "1.25rem" : 0,
                      }}
                    >
                      {para.trim()}
                    </p>
                  ))}
              </div>

              {/* Teaching Philosophy */}
              <div className="glass-card" style={{ padding: "40px" }}>
                <h3
                  className="flex items-center gap-2 mb-5"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "var(--text-primary)",
                  }}
                >
                  <Lightbulb size={22} color="#fbbf24" strokeWidth={2} />
                  {t("about_teaching_heading")}
                </h3>
                {/* TODO: Replace placeholder teaching philosophy via /data/about.ts */}
                {about.teachingPhilosophy.split("\n").map((line, i) => (
                  <p
                    key={i}
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "1rem",
                      lineHeight: 1.8,
                      marginBottom: "0.5rem",
                      fontStyle: "italic",
                    }}
                  >
                    &quot;{line.trim()}&quot;
                  </p>
                ))}
              </div>

              {/* Grades taught */}
              <div
                className="glass-card"
                style={{
                  padding: "32px",
                  background: "linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.06))",
                  borderColor: "rgba(99,102,241,0.2)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "var(--text-primary)",
                    marginBottom: "16px",
                  }}
                >
                  Grades Taught
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11 (O/L)"].map((grade) => (
                    <span
                      key={grade}
                      className="px-4 py-2 rounded-xl font-semibold"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.875rem",
                        background: "rgba(99,102,241,0.1)",
                        border: "1px solid rgba(99,102,241,0.25)",
                        color: "#6366f1",
                      }}
                    >
                      {grade}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
