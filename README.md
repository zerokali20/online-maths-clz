# Sumedha Karunanayake — Mathematics Tutor Website

A modern, responsive website for mathematics tutor **Sumedha Karunanayake**, built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🌗 Dark / Light mode with animated circular reveal effect
- 🌐 English / Sinhala (සිංහල) bilingual toggle (persisted in localStorage)
- 🖼️ Hero section with rotating background crossfade (pure opacity only, 15s interval)
- ⌨️ Typewriter animation for tutor's name
- 📰 News section with pagination (4 items/page)
- 📱 Fully responsive — mobile, tablet, desktop
- 🚀 Vercel-ready — zero config deployment

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```
/app            — Next.js App Router pages
  /             — Home (hero, stats, about preview, news preview)
  /about        — About page (bio, qualifications, teaching philosophy)
  /news         — News page (paginated, 4 per page)
  /contact      — Contact page (email, phone, address, social links)

/components     — Reusable React components
  Navbar.tsx          — Sticky navbar with mobile slide-in menu
  ThemeToggle.tsx     — Sun/moon toggle with circular reveal animation
  LanguageToggle.tsx  — EN ⇄ Sinhala pill-shaped toggle
  BackgroundCarousel.tsx — Crossfade background image carousel
  Typewriter.tsx      — Letter-by-letter typewriter with blinking cursor
  NewsCard.tsx        — Individual news item card
  Pagination.tsx      — Numbered pagination component
  Footer.tsx          — Site footer with links and contact info
  LanguageContext.tsx — Language state management (React Context)

/data           — All editable content (no component changes needed)
  i18n.ts         — All UI text in English and Sinhala
  about.ts        — Tutor bio, qualifications, teaching philosophy
  contact.ts      — Email, phone, address, social links
  news.ts         — News items array
  backgrounds.json — Auto-generated list of background images

/public
  /backgrounds/   — Drop background images here (see below)

/scripts
  generate-backgrounds.js — Prebuild script (auto-runs on npm run build)
```

---

## 🖼️ How to Add New Background Images

1. Drop any `.jpg`, `.jpeg`, `.png`, `.webp`, or `.avif` file into `/public/backgrounds/`
2. Run `npm run build` or `npm run dev`
3. The `prebuild` script auto-scans the folder and updates `data/backgrounds.json`
4. The new image is automatically included in the hero crossfade rotation

> **On Vercel:** just push to GitHub — the prebuild script runs automatically before every deployment.

---

## ✏️ How to Edit Content

### About Page
Edit `/data/about.ts`:
```ts
export default {
  name: "Sumedha Karunanayake",
  yearsExperience: "25+",
  bio: "Your real biography here...",
  qualifications: ["B.Sc. in Mathematics", ...],
  teachingPhilosophy: "Your teaching philosophy...",
  photoPath: "/images/tutor.jpg", // Place photo in /public/images/
};
```

### Contact Information
Edit `/data/contact.ts`:
```ts
export default {
  email: "real@email.com",
  phone: "+94 77 XXX XXXX",
  address: "Your real address",
  socials: {
    youtube: "https://youtube.com/@yourchannel",
    facebook: "https://facebook.com/yourpage",
  },
};
```

### News / Updates
Edit `/data/news.ts` — add new items at the **top** of the array:
```ts
{
  id: "news-unique-id",
  title: "Your news title",
  date: "2025-09-01", // ISO format
  category: "class" | "results" | "video",
  description: "Short description...",
  link: "https://youtube.com/watch?v=...", // optional
}
```

---

## 🌐 How to Add Sinhala Translations

Edit `/data/i18n.ts` — add your translation to both the `en` and `si` objects:

```ts
const translations = {
  en: {
    your_new_key: "English text",
    // ...
  },
  si: {
    your_new_key: "සිංහල පාඨය",
    // ...
  },
};
```

Then use it in components with the `t()` function:
```tsx
const { t } = useLanguage();
return <h1>{t("your_new_key")}</h1>;
```

---

## 🚀 Deploying to Vercel

### Option 1: GitHub Integration (Recommended)
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Select your repository — Vercel auto-detects Next.js and deploys

### Option 2: Vercel CLI
```bash
npm install -g vercel
vercel deploy
```

> The `prebuild` script (`node scripts/generate-backgrounds.js`) runs automatically before every Vercel build.

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16+ | React framework (App Router) |
| TypeScript | 5+ | Type safety |
| Tailwind CSS | 4+ | Utility-first CSS |
| Framer Motion | 13+ | Animations |
| Lucide React | Latest | Icons |
| next-themes | 0.4+ | Dark/light mode |
