"use client";

import { motion } from "framer-motion";
import {
  YouTubeIcon,
  FacebookIcon,
  InstagramIcon,
  GmailIcon,
  PhoneIcon,
  WhatsAppIcon,
  GoogleMapsIcon,
} from "@/components/icons/SocialIcons";
import { useLanguage } from "@/components/LanguageContext";
import contact from "@/data/contact";

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.6 },
};

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  color?: string;
}

function ContactItem({ icon, label, value, href, color = "#6366f1" }: ContactItemProps) {
  const inner = (
    <div
      className="flex items-start gap-4 group"
      style={{ padding: "16px 8px" }}
    >
      <div
        className="flex items-center justify-center rounded-2xl flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
        style={{
          width: "52px",
          height: "52px",
          background: `${color}18`,
          border: `1px solid ${color}30`,
        }}
      >
        {icon}
      </div>
      <div>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "4px",
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1rem",
            color: "var(--text-primary)",
          }}
        >
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
        {inner}
      </a>
    );
  }
  return inner;
}

export default function ContactClient() {
  const { t } = useLanguage();

  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────────── */}
      <section
        className="section-alt"
        style={{ paddingTop: "140px", paddingBottom: "80px" }}
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
              {t("nav_contact")}
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
              {t("contact_heading")}
            </h1>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "1.05rem",
                maxWidth: "520px",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Reach out to enquire about available classes, schedules, and
              fees. All details will be confirmed upon contact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Info ──────────────────────────────────────── */}
      <section className="section-base" style={{ padding: "0 0 80px" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 justify-items-center mb-16">
            <motion.div {...fadeInUp} className="w-full max-w-xs">
              <ContactItem
                icon={<GmailIcon size={26} />}
                label={t("contact_email_label")}
                value={contact.email}
                href={`mailto:${contact.email}`}
                color="#ea4335"
              />
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1, duration: 0.6 }} className="w-full max-w-xs">
              <ContactItem
                icon={<PhoneIcon size={26} />}
                label={t("contact_phone_label")}
                value={contact.phone}
                href={`tel:${contact.phone}`}
                color="#10b981"
              />
            </motion.div>

            {contact.whatsapp && (
              <motion.div {...fadeInUp} transition={{ delay: 0.15, duration: 0.6 }} className="w-full max-w-xs">
                <ContactItem
                  icon={<WhatsAppIcon size={26} />}
                  label="WhatsApp"
                  value={contact.whatsapp}
                  href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                  color="#25d366"
                />
              </motion.div>
            )}

            <motion.div {...fadeInUp} transition={{ delay: 0.2, duration: 0.6 }} className="w-full max-w-xs">
              <ContactItem
                icon={<GoogleMapsIcon size={26} />}
                label={t("contact_address_label")}
                value={contact.address}
                href={contact.mapEmbedUrl || "https://maps.google.com/?q=Mirigama,+Sri+Lanka"}
                color="#4285f4"
              />
            </motion.div>
          </div>

          {/* Social links */}
          {contact.socials &&
            Object.values(contact.socials).some(Boolean) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-card"
                style={{ padding: "32px", textAlign: "center" }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "var(--text-primary)",
                    marginBottom: "20px",
                  }}
                >
                  Follow on Social Media
                </h3>
                <div className="flex items-center justify-center gap-4">
                  {contact.socials.youtube && (
                    <a
                      href={contact.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="contact-youtube"
                      aria-label="YouTube Channel"
                      className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all duration-200"
                      style={{
                        background: "rgba(239,68,68,0.1)",
                        border: "1px solid rgba(239,68,68,0.25)",
                        color: "#ef4444",
                        textDecoration: "none",
                        fontFamily: "var(--font-display)",
                        fontSize: "0.875rem",
                      }}
                      onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = "rgba(239,68,68,0.2)"}
                      onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "rgba(239,68,68,0.1)"}
                    >
                      <YouTubeIcon size={20} colored={true} />
                      YouTube
                    </a>
                  )}
                  {contact.socials.facebook && (
                    <a
                      href={contact.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="contact-facebook"
                      aria-label="Facebook Page"
                      className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all duration-200"
                      style={{
                        background: "rgba(59,130,246,0.1)",
                        border: "1px solid rgba(59,130,246,0.25)",
                        color: "#3b82f6",
                        textDecoration: "none",
                        fontFamily: "var(--font-display)",
                        fontSize: "0.875rem",
                      }}
                    >
                      <FacebookIcon size={18} colored={true} />
                      Facebook
                    </a>
                  )}
                  {contact.socials.instagram && (
                    <a
                      href={contact.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="contact-instagram"
                      aria-label="Instagram Profile"
                      className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all duration-200"
                      style={{
                        background: "rgba(236,72,153,0.1)",
                        border: "1px solid rgba(236,72,153,0.25)",
                        color: "#ec4899",
                        textDecoration: "none",
                        fontFamily: "var(--font-display)",
                        fontSize: "0.875rem",
                      }}
                    >
                      <InstagramIcon size={18} />
                      Instagram
                    </a>
                  )}
                </div>
              </motion.div>
            )}

          {/* TODO: Contact form placeholder */}
          {/* TODO: A contact form can be added here later. See /data/contact.ts for details. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card mt-12"
            style={{
              padding: "32px",
              marginTop: "48px",
              background: "linear-gradient(135deg, rgba(99,102,241,0.05), rgba(139,92,246,0.05))",
              borderColor: "rgba(99,102,241,0.2)",
            }}
          >
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.875rem",
                textAlign: "center",
                fontStyle: "italic",
                fontFamily: "var(--font-sans)",
              }}
            >
              💬 Prefer to reach out directly? Send a message via WhatsApp or
              email — we typically respond within 24 hours.
              <br />
              <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>
                {/* TODO: Contact form can be added here later */}
                A contact form will be available soon.
              </span>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
