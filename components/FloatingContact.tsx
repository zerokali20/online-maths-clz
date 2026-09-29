"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { WhatsAppIcon, YouTubeIcon, FacebookIcon } from "@/components/icons/SocialIcons";
import contact from "@/data/contact";

const WHATSAPP_NUMBER = "94716413100";
const WHATSAPP_MESSAGE = "Hello! I would like to know more about Mathematics classes.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const YOUTUBE_URL = contact.socials?.youtube || "https://www.youtube.com/@SumedhaKarunanayake-1";
const FACEBOOK_URL = contact.socials?.facebook || "https://www.facebook.com/share/1DfPSNZPdL/";

export default function FloatingContact() {
  const { lang } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const buttons = [
    {
      id: "whatsapp",
      label: lang === "si" ? "WhatsApp මගින් විමසන්න" : "Chat on WhatsApp",
      sublabel: "+94 71 641 3100",
      href: WHATSAPP_URL,
      bg: "#25D366",
      hoverBg: "#1fb855",
      icon: <WhatsAppIcon size={24} />,
      show: true,
    },
    {
      id: "youtube",
      label: lang === "si" ? "YouTube නාලිකාවට පිවිසෙන්න" : "Visit YouTube Channel",
      sublabel: "@SumedhaKarunanayake-1",
      href: YOUTUBE_URL,
      bg: "#FF0000",
      hoverBg: "#cc0000",
      icon: <YouTubeIcon size={24} colored={false} />,
      show: true,
    },
    {
      id: "facebook",
      label: lang === "si" ? "Facebook පිටුවට පිවිසෙන්න" : "Visit Facebook Page",
      sublabel: "Sumedha Karunanayake",
      href: FACEBOOK_URL,
      bg: "#1877F2",
      hoverBg: "#1465cc",
      icon: <FacebookIcon size={22} variant="f" />,
      show: true,
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.75rem",
        right: "1.75rem",
        zIndex: 9000,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "12px",
      }}
    >
      {/* Chat action buttons (appear when expanded) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "flex-end",
            }}
          >
            {buttons.filter((b) => b.show).map((btn, i) => (
              <motion.a
                key={btn.id}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                title={btn.label}
                style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}
                onClick={btn.href === "#" ? (e) => e.preventDefault() : undefined}
              >
                {/* Label pill */}
                <div
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: "9999px",
                    padding: "6px 14px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {btn.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.7rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {btn.sublabel}
                  </span>
                </div>

                {/* Icon button */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: btn.bg,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 4px 16px ${btn.bg}55`,
                    flexShrink: 0,
                    cursor: btn.href === "#" ? "default" : "pointer",
                    opacity: btn.href === "#" ? 0.6 : 1,
                  }}
                >
                  {btn.icon}
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating toggle button */}
      <motion.button
        onClick={() => setIsExpanded((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: isExpanded
            ? "0 6px 24px rgba(99,102,241,0.5)"
            : [
                "0 4px 20px rgba(99,102,241,0.35)",
                "0 6px 28px rgba(99,102,241,0.55)",
                "0 4px 20px rgba(99,102,241,0.35)",
              ],
        }}
        transition={{ duration: 2, repeat: isExpanded ? 0 : Infinity, ease: "easeInOut" }}
        aria-label={isExpanded ? "Close contact options" : "Contact us"}
        style={{
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6366f1, #4f46e5)",
          border: "none",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          position: "relative",
        }}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X size={24} strokeWidth={2.2} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <MessageCircle size={24} strokeWidth={2} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring when closed */}
        {!isExpanded && (
          <motion.div
            animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: "2px solid #6366f1",
              pointerEvents: "none",
            }}
          />
        )}
      </motion.button>
    </div>
  );
}
