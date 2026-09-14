// ─────────────────────────────────────────────────────────────
//  news.ts — News / updates data
//  Add new news items to the TOP of the array (most recent first).
//  No component code changes needed.
// ─────────────────────────────────────────────────────────────

export type NewsCategory = "class" | "results" | "video";

export interface NewsItem {
  id: string;
  title: string;
  title_si?: string;
  date: string; // ISO date string e.g. "2026-09-14"
  category: NewsCategory;
  description: string;
  description_si?: string;
  /** Optional external URL (e.g. YouTube video, results announcement) */
  link?: string;
  /** Optional thumbnail image path — place images in /public/images/news/ */
  thumbnail?: string;
  /** Optional multiple images array for galleries/multi-image news */
  images?: string[];
  /** Optional object position for thumbnail preview e.g. "top center" or "center 15%" */
  thumbnailPosition?: string;
}

// ─── News items ───────────────────────────────────────────────
const rawNews: NewsItem[] = [
  {
    id: "news-7",
    title: "2026 free session time table",
    title_si: "2026 නොමිලේ සම්මන්ත්‍රණ කාලසටහන",
    date: "2026-09-15",
    category: "class",
    description:
      "Time table for grade 9,10,11 students online session live at zoom. Covering Grade 9 (Thursday & Sunday), Grade 10 (Monday, Thursday & Sunday), and Grade 11 (Tuesday, Wednesday & Saturday). Contact for more details.",
    description_si:
      "9, 10, 11 ශ්‍රේණිවල සිසුන් සඳහා Zoom ඔස්සේ සජීවීව පැවැත්වෙන නොමිලේ අත්වැල කාලසටහන. 9 ශ්‍රේණිය (බ්‍රහස්පතින්දා සහ ඉරිදා), 10 ශ්‍රේණිය (සඳුදා, බ්‍රහස්පතින්දා සහ ඉරිදා), සහ 11 ශ්‍රේණිය (අඟහරුවාදා, බදාදා සහ සෙනසුරාදා) ආවරණය කෙරේ. වැඩි විස්තර සඳහා සම්බන්ධ වන්න.",
    link: undefined,
    thumbnail: "/images/news/time-table-2026.jpg",
    images: ["/images/news/time-table-2026.jpg"],
    thumbnailPosition: "center center",
  },
  {
    id: "news-8",
    title: "Free online sessions for grade 9,10,11",
    title_si: "9, 10, 11 ශ්‍රේණි සඳහා නොමිලේ මාර්ගගත සම්මන්ත්‍රණ",
    date: "2026-09-14",
    category: "class",
    description:
      "New free session Live with zoom, recording upload to youtube. Covering syllabus, past exam paper discussion, model paper practice, and Night Spark program.",
    description_si:
      "Zoom ඔස්සේ සජීවීව පැවැත්වෙන නව නොමිලේ සම්මන්ත්‍රණ මාලාව, පටිගත කිරීම් YouTube වෙත උඩුගත කෙරේ. විෂය නිර්දේශය, පසුගිය විභාග ප්‍රශ්න පත්‍ර සාකච්ඡාව, ආදර්ශ ප්‍රශ්න පත්‍ර පුහුණුව සහ Night Spark විශේෂ වැඩසටහන ආවරණය කෙරේ.",
    link: undefined,
    thumbnail: "/images/news/free-sessions.jpg",
    thumbnailPosition: "center 15%",
  },
  {
    id: "news-6",
    title: "Outstanding 2025 O/L Results Top Performance",
    title_si: "2025 අ.පො.ස. සා/පෙළ විශිෂ්ට ප්‍රතිඵල ඉහළම දක්ෂතා",
    date: "2026-09-12",
    category: "results",
    description:
      "Top results 2025 O/L students attended to our physical classes.",
    description_si:
      "අපගේ භෞතික පන්තිවලට සහභාගී වූ 2025 අ.පො.ස. සා/පෙළ සිසුන්ගේ ඉහළම විශිෂ්ට ප්‍රතිඵල.",
    link: undefined,
    thumbnail: "/images/news/results-2025.jpg",
    images: ["/images/news/results-2025.jpg"],
    thumbnailPosition: "top center",
  },
  {
    id: "news-5",
    title: "New YouTube Video: Solving Simultaneous Equations",
    title_si: "නව YouTube වීඩියෝව: සමගාමී සමීකරණ විසඳීම",
    date: "2025-06-10",
    category: "video",
    description:
      "A new tutorial video on solving simultaneous equations using the substitution and elimination methods is now live on YouTube. Free for all students!",
    description_si:
      "ආදේශ ක්‍රමය සහ ඉවත් කිරීමේ ක්‍රමය භාවිතයෙන් සමගාමී සමීකරණ විසඳීම පිළිබඳ නව නිබන්ධන වීඩියෝව දැන් YouTube ඔස්සේ නැරඹිය හැක. සියලුම සිසුන්ට නොමිලේ!",
    link: "https://youtube.com", // TODO: Replace with real YouTube link
    thumbnail: undefined,
  },
  {
    id: "news-4",
    title: "Grade 9 Term 2 Classes Now Open",
    title_si: "9 ශ්‍රේණිය 2 වන වාර පන්ති දැන් ආරම්භ වේ",
    date: "2025-05-18",
    category: "class",
    description:
      "Term 2 classes for Grade 9 have commenced. New students are welcome to join. Classes focus on advanced algebra, functions, and coordinate geometry.",
    description_si:
      "9 ශ්‍රේණිය සඳහා 2 වන වාරයේ පන්ති ආරම්භ වී ඇත. නව සිසුන්ට සම්බන්ධ විය හැක. වීජ ගණිතය, ශ්‍රිත සහ ඛණ්ඩාංක ජ්‍යාමිතිය කෙරෙහි විශේෂ අවධානයක් යොමු කෙරේ.",
    link: undefined,
    thumbnail: undefined,
  },
  {
    id: "news-3",
    title: "2024 Grade 8 Term Test — Excellent Results",
    title_si: "2024 8 ශ්‍රේණිය වාර විභාගය — විශිෂ්ට ප්‍රතිඵල",
    date: "2025-04-25",
    category: "results",
    description:
      "Our Grade 8 students performed exceptionally well in the recent term test, with an average score of 88%. We congratulate all students and their families.",
    description_si:
      "පසුගිය වාර විභාගයේදී අපගේ 8 ශ්‍රේණියේ සිසුන් සාමාන්‍ය 88% ක ලකුණු ප්‍රතිශතයක් ලබා ගනිමින් ඉතා ඉහළ දක්ෂතා දැක්වූහ. සියලුම සිසුන්ට සහ දෙමාපියන්ට අපගේ උණුසුම් සුබ පැතුම්.",
    link: undefined,
    thumbnail: undefined,
  },
  {
    id: "news-2",
    title: "New Video: Introduction to Trigonometry for Grade 10",
    title_si: "නව වීඩියෝව: 10 ශ්‍රේණිය ත්‍රිකෝණමිතිය හැඳින්වීම",
    date: "2025-03-14",
    category: "video",
    description:
      "A beginner-friendly introduction to Trigonometry for Grade 10 students. Covers sine, cosine, tangent and their applications with worked examples.",
    description_si:
      "10 ශ්‍රේණියේ සිසුන් සඳහා ත්‍රිකෝණමිතිය පිළිබඳ සරල හැඳින්වීමක්. සයින්, කෝසයින්, ටැංජන සහ ඒවායේ භාවිතයන් උදාහරණ සහිතව විස්තර කෙරේ.",
    link: "https://youtube.com", // TODO: Replace with real YouTube link
    thumbnail: undefined,
  },
  {
    id: "news-1",
    title: "Welcome to Our New Website!",
    title_si: "අපගේ නව වෙබ් අඩවියට ඔබව සාදරයෙන් පිළිගනිමු!",
    date: "2025-01-01",
    category: "class",
    description:
      "We are excited to launch our new website! Stay updated with the latest class schedules, exam tips, video tutorials, and more. Bookmark this page!",
    description_si:
      "අපගේ නව වෙබ් අඩවිය එළිදැක්වීම ගැන අපි සතුටු වෙමු! නවතම පන්ති කාලසටහන්, විභාග උපදෙස්, වීඩියෝ පාඩම් සහ තවත් බොහෝ දේ දැන ගැනීමට අප හා එක්වන්න!",
    link: undefined,
    thumbnail: undefined,
  },
];

// Automatically sort all news items by latest date descending
const news: NewsItem[] = [...rawNews].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default news;
