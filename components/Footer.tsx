"use client";

import Link from "next/link";
import { Calculator, Mail, Phone, MapPin, ExternalLink, Play, Globe } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import contact from "@/data/contact";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        transition: "var(--transition-theme)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4" style={{ textDecoration: "none" }}>
              <div
                className="flex items-center justify-center rounded-xl"
                style={{
                  width: "38px",
                  height: "38px",
                  background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                  boxShadow: "0 2px 12px rgba(99,102,241,0.3)",
                  flexShrink: 0,
                }}
              >
                <Calculator size={20} color="white" strokeWidth={2.2} />
              </div>
              <div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1rem",
                  color: "var(--text-primary)",
                  lineHeight: 1.1,
                }}>
                  Sumedha Karunanayake
                </div>
              </div>
            </Link>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7 }}>
              {t("footer_tagline")}
            </p>

            {/* Socials */}
            {contact.socials && (
              <div className="flex gap-2 mt-4">
                {contact.socials.youtube && (
                  <a
                    href={contact.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "#ef4444"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#ef4444"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)"; }}
                  >
                    <Play size={15} strokeWidth={2} />
                  </a>
                )}
                {contact.socials.facebook && (
                  <a
                    href={contact.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                  >
                    <Globe size={15} strokeWidth={2} />
                  </a>
                )}
                {contact.socials.instagram && (
                  <a
                    href={contact.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                  >
                    <ExternalLink size={15} strokeWidth={2} />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Quick links */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "0.875rem",
              color: "var(--text-primary)",
              marginBottom: "16px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}>
              {t("footer_quick_links")}
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
                gap: "10px 16px",
              }}
            >
              {[
                { href: "/", label: t("nav_home") },
                { href: "/about", label: t("nav_about") },
                { href: "/gallery", label: t("nav_gallery") },
                { href: "/news", label: t("nav_news") },
                { href: "/contact", label: t("nav_contact") },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="link-wipe"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      display: "inline-block",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-primary)"}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)"}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "0.875rem",
              color: "var(--text-primary)",
              marginBottom: "16px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}>
              {t("contact_heading")}
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li className="flex items-start gap-2.5">
                <Mail size={15} style={{ color: "#6366f1", marginTop: "2px", flexShrink: 0 }} strokeWidth={2} />
                <a
                  href={`mailto:${contact.email}`}
                  style={{ fontSize: "0.875rem", color: "var(--text-secondary)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#6366f1"}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)"}
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={15} style={{ color: "#6366f1", marginTop: "2px", flexShrink: 0 }} strokeWidth={2} />
                <a
                  href={`tel:${contact.phone}`}
                  style={{ fontSize: "0.875rem", color: "var(--text-secondary)", textDecoration: "none" }}
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} style={{ color: "#6366f1", marginTop: "2px", flexShrink: 0 }} strokeWidth={2} />
                <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                  {contact.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            {t("footer_copy")}
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            Built by{" "}
            <a
              href="https://www.linkedin.com/in/bhagya-karunanayake-b52085270/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--text-secondary)",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#6366f1"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)"}
            >
              Bhagya Karunanayake
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
