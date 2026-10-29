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
  /** Optional thumbnail image path or URL — place local images in /public/images/news/ */
  thumbnail?: string;
  /** Optional multiple images array for galleries/multi-image news */
  images?: string[];
  /** Optional object position for thumbnail preview e.g. "top center" or "center 15%" */
  thumbnailPosition?: string;
  /** Optional YouTube video ID — enables YouTube-style card with play button */
  youtubeId?: string;
}

// ─── News items ───────────────────────────────────────────────
const rawNews: NewsItem[] = [
  {
    id: "news-yt-9-day7",
    title: "Grade 9 Day 7 | Paper Discussion | Sumedha Karunanayake",
    title_si: "9 ශ්‍රේණිය - 7 වන දිනය | ප්‍රශ්න පත්‍ර සාකච්ඡාව | Sumedha Karunanayake",
    date: "2026-10-24",
    category: "video",
    description:
      "Grade 9 Day 7 model and past paper discussion seminar conducted by 2019 Central Province Best Mathematics Teacher (Shilpabhimana Award Winner) Sumedha Karunanayake. Watch free on YouTube!",
    description_si:
      "9 ශ්‍රේණිය සිසුන් සඳහා 7 වන දින පසුගිය විභාග සහ ආදර්ශ ප්‍රශ්න පත්‍ර සාකච්ඡාව. 2019 වසරේ මධ්‍යම පළාත් හොඳම ගණිත ගුරුවරයා (ශිල්පාභිමාන සම්මානයෙන් පිදුම් ලැබූ) සුමේධ කරුණානායක ගුරුතුමන් විසින් මෙහෙයවනු ලැබේ. නොමිලේ නැරඹීමට දැන්ම පිවිසෙන්න!",
    link: "https://youtu.be/IemutxwYVJc",
    thumbnail: "https://img.youtube.com/vi/IemutxwYVJc/maxresdefault.jpg",
    youtubeId: "IemutxwYVJc",
  },
  {
    id: "news-yt-10-day8",
    title: "Grade 10 Day 8 | Sumedha Karunanayake",
    title_si: "10 ශ්‍රේණිය - 8 වන දිනය | Sumedha Karunanayake",
    date: "2026-10-20",
    category: "video",
    description:
      "Grade 10 Day 8 mathematics seminar conducted by Sumedha Karunanayake, 2019 Central Province Best Mathematics Teacher. Covering essential O/L topics and worked problem solving. Watch free on YouTube!",
    description_si:
      "10 ශ්‍රේණිය සිසුන් සඳහා 8 වන දින ගණිත සම්මන්ත්‍රණ වීඩියෝව. 2019 වසරේ මධ්‍යම පළාත් හොඳම ගණිත ගුරුවරයා (ශිල්පාභිමාන සම්මානයෙන් පිදුම් ලැබූ) සුමේධ කරුණානායක ගුරුතුමන් විසින් මෙහෙයවනු ලැබේ. නොමිලේ නැරඹීමට දැන්ම ක්ලික් කරන්න!",
    link: "https://youtu.be/SlSD-ozXPak",
    thumbnail: "https://img.youtube.com/vi/SlSD-ozXPak/maxresdefault.jpg",
    youtubeId: "SlSD-ozXPak",
  },
  {
    id: "news-yt-smart-tips",
    title: "4 Smart Tips to Solve Maths Problems | Sumedha Karunanayake",
    title_si: "ගණන් හදන්න Smart Tips 4 ක් | Sumedha Karunanayake",
    date: "2026-10-16",
    category: "video",
    description:
      "4 smart and practical tips to easily solve mathematics problems by Sumedha Karunanayake, 2019 Central Province Best Mathematics Teacher (Shilpabhimana Award Winner). Watch free on YouTube!",
    description_si:
      "ගණිත ගැටලු පහසුවෙන් විසඳා ගැනීමට වැදගත් වන Smart Tips 4ක්. 2019 වසරේ මධ්‍යම පළාත් හොඳම ගණිත ගුරුවරයා (ශිල්පාභිමාන සම්මානයෙන් පිදුම් ලැබූ) සුමේධ කරුණානායක ගුරුතුමන් විසින් ඉදිරිපත් කෙරේ. දැන්ම නරඹන්න!",
    link: "https://youtu.be/-3_NtrtCgM4",
    thumbnail: "https://img.youtube.com/vi/-3_NtrtCgM4/maxresdefault.jpg",
    youtubeId: "-3_NtrtCgM4",
  },
  {
    id: "news-yt-11-day6",
    title: "Grade 11 Day 6 | Sumedha Karunanayake",
    title_si: "11 ශ්‍රේණිය - 6 වන දිනය | Sumedha Karunanayake",
    date: "2026-10-15",
    category: "video",
    description:
      "Grade 11 Day 6 mathematics seminar conducted by Sumedha Karunanayake. Covering essential exam techniques and worked question practice. Watch online on YouTube!",
    description_si:
      "11 ශ්‍රේණිය සිසුන් සඳහා 6 වන දින ගණිත සම්මන්ත්‍රණය සුමේධ කරුණානායක ගුරුතුමන් විසින් මෙහෙයවනු ලැබේ. විභාග කෙටි ක්‍රම සහ ගැටලු සාකච්ඡාව නොමිලේ නැරඹීමට දැන්ම පිවිසෙන්න!",
    link: "https://youtu.be/_PzQwBjOCCU",
    thumbnail: "https://img.youtube.com/vi/_PzQwBjOCCU/maxresdefault.jpg",
    youtubeId: "_PzQwBjOCCU",
  },
  {
    id: "news-yt-9-day5",
    title: "Grade 9 Day 5 | Sets (කුලක) | Sumedha Karunanayake",
    title_si: "9 ශ්‍රේණිය - 5 වන දිනය | කුලක | Sumedha Karunanayake",
    date: "2026-10-04",
    category: "video",
    description:
      "Grade 9 Day 5 lesson on Sets (කුලක) conducted by 2019 Central Province Best Mathematics Teacher (Shilpabhimana Award Winner) Sumedha Karunanayake. Watch free on YouTube!",
    description_si:
      "2019 වසරේ මධ්‍යම පළාත් හොඳම ගණිත ගුරුවරයා (ශිල්පාභිමාන සම්මානයෙන් පිදුම් ලැබූ) සුමේධ කරුණානායක ගුරුතුමන් විසින් මෙහෙයවනු ලබන 9 ශ්‍රේණිය 5 වන දින කුලක පාඩම. නොමිලේ නැරඹීමට දැන්ම ක්ලික් කරන්න!",
    link: "https://youtu.be/S_Mv9wQAW6M",
    thumbnail: "https://img.youtube.com/vi/S_Mv9wQAW6M/maxresdefault.jpg",
    youtubeId: "S_Mv9wQAW6M",
  },
  {
    id: "news-yt-11-day4",
    title: "Grade 11 Day 4 | Sabaragamuwa Province Past Paper Discussion | Sumedha Karunanayake",
    title_si: "11 ශ්‍රේණිය - 4 වන දිනය | සබරගමුව Paper Answers | Sumedha Karunanayake",
    date: "2026-10-02",
    category: "video",
    description:
      "Grade 11 O/L Sabaragamuwa Province exam paper discussion and comprehensive worked answers by Sumedha Karunanayake. Watch online on YouTube!",
    description_si:
      "11 ශ්‍රේණිය O/L සිසුන් සඳහා සබරගමුව පළාත් ප්‍රශ්න පත්‍ර සාකච්ඡාව සහ සම්පූර්ණ පිළිතුරු විවරණය සුමේධ කරුණානායක ගුරුතුමන් විසිනි. නොමිලේ නැරඹීමට දැන්ම පිවිසෙන්න!",
    link: "https://youtu.be/rQ3tkSfrh24",
    thumbnail: "https://img.youtube.com/vi/rQ3tkSfrh24/maxresdefault.jpg",
    youtubeId: "rQ3tkSfrh24",
  },
  {
    id: "news-yt-10-day4",
    title: "Grade 10 Day 4 | Sumedha Karunanayake",
    title_si: "10 ශ්‍රේණිය - 4 වන දිනය | Sumedha Karunanayake",
    date: "2026-09-27",
    category: "video",
    description:
      "Grade 10 Day 4 online mathematics seminar video conducted by 2019 Central Province Best Mathematics Teacher (Shilpabhimana Award Winner) Sumedha Karunanayake. Watch free on YouTube!",
    description_si:
      "2019 වසරේ මධ්‍යම පළාත් හොඳම ගණිත ගුරුවරයා (ශිල්පාභිමාන සම්මානයෙන් පිදුම් ලැබූ) සුමේධ කරුණානායක ගුරුතුමන් විසින් මෙහෙයවනු ලබන 10 ශ්‍රේණිය 4 වන දින සම්මන්ත්‍රණ වීඩියෝව. නොමිලේ නැරඹීමට දැන්ම ක්ලික් කරන්න!",
    link: "https://youtu.be/FM5uvgMyDxQ",
    thumbnail: "https://img.youtube.com/vi/FM5uvgMyDxQ/maxresdefault.jpg",
    youtubeId: "FM5uvgMyDxQ",
  },
  {
    id: "news-yt-9-day3",
    title: "Grade 9 Day 3 (Inequalities) | Sumedha Karunanayake | Mathematics",
    title_si: "9 ශ්‍රේණිය - 3 වන දිනය (අසමානතා) | Sumedha Karunanayake | Mathematics",
    date: "2026-09-25",
    category: "video",
    description:
      "Grade 9 Day 3 comprehensive tutorial on Inequalities (අසමානතා) conducted by Sumedha Karunanayake. Watch online on YouTube to learn step-by-step methods!",
    description_si:
      "9 ශ්‍රේණිය 3 වන දිනය - අසමානතා පාඩම. මධ්‍යම පළාත් හොඳම ගණිත ගුරුවර සුමේධ කරුණානායක ගුරුතුමන් විසින් මෙහෙයවනු ලැබේ. නොමිලේ නැරඹීමට YouTube නාලිකාවට පිවිසෙන්න!",
    link: "https://youtu.be/2A39KqRDu-4",
    thumbnail: "https://img.youtube.com/vi/2A39KqRDu-4/maxresdefault.jpg",
    youtubeId: "2A39KqRDu-4",
  },
  {
    id: "news-yt-10-day2",
    title: "Grade 10 Day 2 Mathematics | Sumedha Karunanayake",
    title_si: "10 ශ්‍රේණිය - 2 වන දිනය ගණිතය | Sumedha Karunanayake",
    date: "2026-09-19",
    category: "video",
    description:
      "Grade 10 Day 2 Mathematics seminar session by Sumedha Karunanayake. Covering crucial syllabus areas, shortcut techniques, and worked model papers.",
    description_si:
      "10 ශ්‍රේණියේ සිසුන් සඳහා 2 වන දින ගණිත සම්මන්ත්‍රණය සුමේධ කරුණානායක ගුරුතුමන් විසින් මෙහෙයවනු ලැබේ. විභාග ගැටලු සහ කෙටි ක්‍රම ආවරණය කෙරේ.",
    link: "https://youtu.be/Tyn2QKJHLeA",
    thumbnail: "https://img.youtube.com/vi/Tyn2QKJHLeA/maxresdefault.jpg",
    youtubeId: "Tyn2QKJHLeA",
  },
  {
    id: "news-yt-algebraic-fractions",
    title: "Algebraic Fractions Short Method & Answers | Sumedha Karunanayake",
    title_si: "වීජීය භාග කෙටි ක්‍රමය පිළිතුරු | Sumedha Karunanayake",
    date: "2026-09-18",
    category: "video",
    description:
      "Quick shortcut methods and complete answer discussion for algebraic fractions by Sumedha Karunanayake. Master algebraic fractions with ease!",
    description_si:
      "වීජීය භාග කෙටි ක්‍රමයෙන් විසඳීම හා පිළිතුරු සාකච්ඡාව. මධ්‍යම පළාත් හොඳම ගණිත ගුරුවර සුමේධ කරුණානායක ගුරුතුමන් විසින් මෙහෙයවනු ලැබේ.",
    link: "https://youtu.be/ZHhuu5HspHs",
    thumbnail: "https://img.youtube.com/vi/ZHhuu5HspHs/maxresdefault.jpg",
    youtubeId: "ZHhuu5HspHs",
  },
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
    id: "news-5",
    title_si: "වීජීය භාග සහිත සරල සමීකරණ මේ විදියට විසදන්න 😎 | Sumedha Karunanayake",
    title: "Solve Simple Equations with Fractions This Way 😎 | Sumedha Karunanayake",
    date: "2026-09-15",
    category: "video",
    description_si:
      "වීජීය භාග සහිත සරල සමීකරණ පහසුවෙන් විසදා ගන්නේ කෙසේද? සුමේධ කරුණානායක ගුරුතුමන්ගේ Night Spark වැඩසටහනේ ආරම්භක වීඩියෝව. සියලුම සිසුන්ට නොමිලේ!",
    description:
      "How to easily solve simple equations with fractional coefficients? Watch the brand-new YouTube video from the Night Spark Program by Sumedha Karunanayake — click now to watch it for free!",
    link: "https://youtu.be/1scdMy77Chw",
    thumbnail: "https://img.youtube.com/vi/1scdMy77Chw/maxresdefault.jpg",
    youtubeId: "1scdMy77Chw",
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
