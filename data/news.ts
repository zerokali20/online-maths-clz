// ─────────────────────────────────────────────────────────────
//  news.ts — News / updates data
//  Add new news items to the TOP of the array (most recent first).
//  No component code changes needed.
// ─────────────────────────────────────────────────────────────

export type NewsCategory = "class" | "results" | "video";

export interface NewsItem {
  id: string;
  title: string;
  date: string; // ISO date string e.g. "2025-06-15"
  category: NewsCategory;
  description: string;
  /** Optional external URL (e.g. YouTube video, results announcement) */
  link?: string;
  /** Optional thumbnail image path — place images in /public/news/ */
  thumbnail?: string;
}

// ─── Placeholder news items — replace with real content ───────
// Add new items at the TOP. Oldest items at the bottom.
const news: NewsItem[] = [
  {
    id: "news-8",
    title: "New Grade 11 Class Starting September 2025",
    date: "2025-08-20",
    category: "class",
    description:
      "A new batch for Grade 11 Mathematics is starting in September 2025. Limited seats available — contact us to reserve your spot. Classes will be held every Saturday and Sunday morning.",
    link: undefined,
    thumbnail: undefined, // TODO: Add thumbnail image
  },
  {
    id: "news-7",
    title: "2025 O/L Mathematics Revision — Special Session",
    date: "2025-07-15",
    category: "class",
    description:
      "A special intensive revision session for O/L 2025 candidates will be held over two weekends in August. Topics covered: Algebra, Geometry, Statistics, and Data handling.",
    link: undefined,
    thumbnail: undefined,
  },
  {
    id: "news-6",
    title: "Outstanding 2024 O/L Results — 95% Distinction Rate",
    date: "2025-06-30",
    category: "results",
    description:
      "We are proud to announce that 95% of our 2024 O/L students achieved A or B grades in Mathematics. Congratulations to all our students on their remarkable performance!",
    link: undefined,
    thumbnail: undefined,
  },
  {
    id: "news-5",
    title: "New YouTube Video: Solving Simultaneous Equations",
    date: "2025-06-10",
    category: "video",
    description:
      "A new tutorial video on solving simultaneous equations using the substitution and elimination methods is now live on YouTube. Free for all students!",
    link: "https://youtube.com", // TODO: Replace with real YouTube link
    thumbnail: undefined,
  },
  {
    id: "news-4",
    title: "Grade 9 Term 2 Classes Now Open",
    date: "2025-05-18",
    category: "class",
    description:
      "Term 2 classes for Grade 9 have commenced. New students are welcome to join. Classes focus on advanced algebra, functions, and coordinate geometry.",
    link: undefined,
    thumbnail: undefined,
  },
  {
    id: "news-3",
    title: "2024 Grade 8 Term Test — Excellent Results",
    date: "2025-04-25",
    category: "results",
    description:
      "Our Grade 8 students performed exceptionally well in the recent term test, with an average score of 88%. We congratulate all students and their families.",
    link: undefined,
    thumbnail: undefined,
  },
  {
    id: "news-2",
    title: "New Video: Introduction to Trigonometry for Grade 10",
    date: "2025-03-14",
    category: "video",
    description:
      "A beginner-friendly introduction to Trigonometry for Grade 10 students. Covers sine, cosine, tangent and their applications with worked examples.",
    link: "https://youtube.com", // TODO: Replace with real YouTube link
    thumbnail: undefined,
  },
  {
    id: "news-1",
    title: "Welcome to Our New Website!",
    date: "2025-01-01",
    category: "class",
    description:
      "We are excited to launch our new website! Stay updated with the latest class schedules, exam tips, video tutorials, and more. Bookmark this page!",
    link: undefined,
    thumbnail: undefined,
  },
];

export default news;
