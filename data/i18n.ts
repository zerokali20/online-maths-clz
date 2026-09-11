// ─────────────────────────────────────────────────────────────
//  i18n.ts  — All static UI strings in English and Sinhala
//  To add a new string: add it to the `en` and `si` objects.
//  To add a new language: duplicate the `si` block with a new key.
// ─────────────────────────────────────────────────────────────

export type Lang = "en" | "si";

const translations = {
  en: {
    // Navbar
    nav_home: "Home",
    nav_about: "About",
    nav_news: "News",
    nav_gallery: "Gallery",
    nav_contact: "Contact",


    // Hero
    hero_tagline: "Helping Grade 6–11 students master Mathematics",
    hero_cta: "Contact Now",
    hero_cta_alt: "View Classes",

    // About (preview on home)
    home_about_heading: "About the Tutor",
    home_about_lead:
      "With over 23+ years of experience, Sumedha Karunanayake has helped hundreds of students build confidence in Mathematics.",
    home_about_cta: "Learn More",

    // News (home section)
    home_news_heading: "Latest News & Updates",
    home_news_cta: "View All News",

    // About page
    about_heading: "About Sumedha Karunanayake",
    about_years: "23+ Years of Experience",
    about_bio_placeholder:
      "// TODO: Replace with real biography text. Placeholder: Sumedha Karunanayake is a highly experienced mathematics tutor who has been teaching Grade 6 to Grade 11 students for over 25 years. His patient and methodical teaching style has helped countless students achieve their academic goals and develop a genuine love for Mathematics.",
    about_qualifications_heading: "Qualifications",
    about_teaching_heading: "Teaching Philosophy",
    about_teaching_placeholder:
      "// TODO: Replace with real teaching philosophy. Placeholder: Every student has the ability to understand and enjoy Mathematics — my goal is to find the right approach for each individual learner.",
    about_photo_alt: "Sumedha Karunanayake — Math Tutor",

    // News page
    news_heading: "News & Updates",
    news_no_items: "No news items found.",
    news_prev: "Previous",
    news_next: "Next",
    news_page: "Page",
    news_of: "of",
    news_read_more: "Read More",
    news_category_class: "Class",
    news_category_results: "Results",
    news_category_video: "Video",

    // Contact page
    contact_heading: "Contact",
    contact_email_label: "Email",
    contact_phone_label: "Phone",
    contact_address_label: "Address",
    contact_form_coming: "// TODO: Contact form can be added here later.",

    // Gallery page
    gallery_heading: "Class Gallery",
    gallery_subheading: "Moments from the classroom",
    gallery_all: "All",
    gallery_class: "Classroom",
    gallery_whiteboard: "Whiteboard",
    gallery_students: "Students",
    gallery_events: "Events",
    gallery_placeholder: "Photo coming soon",
    gallery_close: "Close",

    // Footer
    footer_tagline: "Mathematics Tutor — Grade 6 to 11",
    footer_copy: "© 2025 Sumedha Karunanayake. All rights reserved.",
    footer_quick_links: "Quick Links",
  },

  si: {
    // Navbar
    nav_home: "මුල් පිටුව",
    nav_about: "පිළිබඳව",
    nav_news: "ප්‍රවෘත්ති",
    nav_gallery: "ගැලරිය",
    nav_contact: "සම්බන්ධ වන්න",

    // Hero
    hero_tagline: "6 ශ්‍රේණියේ සිට 11 ශ්‍රේණිය දක්වා ගණිතය ඉගෙනීමට සහාය",
    hero_cta: "දැන් සම්බන්ධ වන්න",
    hero_cta_alt: "පන්ති බලන්න",

    // About (preview on home)
    home_about_heading: "ගුරුවරයා ගැන",
    home_about_lead:
      "වසර 23කට අධික අත්දැකීම් සහිත සුමේධ කරුණානායක සිය ශිෂ්‍යයන්ට ගණිතය ආදරෙන් ඉගෙනීමට රුකුල් දෙයි.",
    home_about_cta: "තව දැනගන්න",

    // News (home section)
    home_news_heading: "නවතම ප්‍රවෘත්ති සහ යාවත්කාලීන",
    home_news_cta: "සියලු ප්‍රවෘත්ති බලන්න",

    // About page
    about_heading: "සුමේධ කරුණානායක ගැන",
    about_years: "වසර 23+ ක් අත්දැකීම්",
    about_bio_placeholder:
      "සුමේධ කරුණානායක යනු වසර 23කට අධික කාලයක් පුරා 6 ශ්‍රේණියේ සිට 11 ශ්‍රේණිය දක්වා සිසුන්ට මඟ පෙන්වන, ඉමහත් පළපුරුද්දක් සහ කැපවීමක් සහිත ගණිත ගුරුවරයෙකි. ඔහුගේ ඉවසිලිවන්ත සහ ක්‍රමානුකූල ඉගැන්වීම් රටාව තුළින් ශක්තිමත් ගණිතමය පදනමක් ගොඩනැගීමට මූලිකත්වය දෙන අතර, සූත්‍ර කටපාඩම් කිරීමට පමණක් සීමා නොවී සෑම සිසුවෙකුටම විෂය සංකල්ප නිසි ලෙස අවබෝධ කරවීම සහතික කරයි.\n\nඔහුගේ දීර්ඝකාලීන පළපුරුද්ද තුළින්, දහස් ගණනක් වූ සිසුන්ගේ ලකුණු මට්ටම් ඉහළ නැංවීමටත්, ඔවුන් තුළ ආත්ම විශ්වාසය ගොඩනැගීමටත්, සිසුන්ගේ මුළු අධ්‍යාපනික ජීවිතයටම මහෝපකාරී වන සැබෑ ගණිතමය ඇල්මක් ඇති කිරීමටත් ඔහු සමත්ව ඇත.",
    about_qualifications_heading: "සුදුසුකම්",
    about_teaching_heading: "ඉගැන්වීමේ දර්ශනය",
    about_teaching_placeholder:
      "// TODO: Replace with real teaching philosophy. Placeholder (Sinhala): සෑම ශිෂ්‍යයෙකුටම ගණිතය තේරුම් ගෙන ප්‍රිය කිරීමේ හැකියාව ඇත.",
    about_photo_alt: "සුමේධ කරුණානායක — ගණිත ගුරු",

    // News page
    news_heading: "ප්‍රවෘත්ති සහ යාවත්කාලීන",
    news_no_items: "ප්‍රවෘත්ති හමු නොවීය.",
    news_prev: "පෙර",
    news_next: "ඊළඟ",
    news_page: "පිටුව",
    news_of: "ක",
    news_read_more: "තව කියවන්න",
    news_category_class: "පන්තිය",
    news_category_results: "ප්‍රතිඵල",
    news_category_video: "වීඩියෝ",

    // Contact page
    contact_heading: "සම්බන්ධ වන්න",
    contact_email_label: "විද්‍යුත් තැපෑල",
    contact_phone_label: "දුරකථනය",
    contact_address_label: "ලිපිනය",
    contact_form_coming: "// TODO: Contact form can be added here later.",

    // Gallery page
    gallery_heading: "පන්ති ගැලරිය",
    gallery_subheading: "පන්ති කාමරෙන් මොහොත්",
    gallery_all: "සියල්ල",
    gallery_class: "පන්තිකාමරය",
    gallery_whiteboard: "ශ්‍රේෂ්ඨ ලෑල්ල",
    gallery_students: "ශිෂ්‍යයෝ",
    gallery_events: "සිදුවීම්",
    gallery_placeholder: "ඡායාරූපය ළඟදීම",
    gallery_close: "වසන්න",

    // Footer
    footer_tagline: "ගණිත ගුරු — ශ්‍රේණිය 6 සිට 11 දක්වා",
    footer_copy: "© 2025 සුමේධ කරුණානායක. සියලු හිමිකම් ඇවිරිණි.",
    footer_quick_links: "ඉක්මන් සබැඳි",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["en"];

export function t(lang: Lang, key: TranslationKey): string {
  return translations[lang][key] ?? translations["en"][key] ?? key;
}

export default translations;
