// ─────────────────────────────────────────────────────────────
//  about.ts — Tutor biography and qualifications data
//  Edit this file to update About page content.
//  No component code changes needed.
// ─────────────────────────────────────────────────────────────

export interface AboutData {
  name: string;
  yearsExperience: string;
  /** Shown as a prominent badge/stat */
  statLabel: string;
  /** Main bio paragraph — supports basic HTML if needed */
  bio: string;
  /** Sinhala bio */
  bio_si?: string;
  qualifications: string[];
  /** Sinhala qualifications */
  qualifications_si?: string[];
  teachingPhilosophy: string;
  /** Path to tutor photo — place in /public/images/ */
  photoPath: string;
  photoAlt: string;
}

// TODO: Replace all placeholder values below with real content.
const about: AboutData = {
  name: "Sumedha Karunanayake",
  yearsExperience: "23+",
  statLabel: "Years of Experience",
  bio: `Sumedha Karunanayake is a highly experienced and dedicated mathematics tutor 
who has been guiding Grade 6 to Grade 11 students for over 23+ years. 
His patient, methodical teaching style focuses on building strong 
mathematical foundations, ensuring every student truly understands 
the concepts rather than just memorising formulas.

Through his years of experience, he has helped thousands of students 
improve their grades, gain confidence, and develop a genuine love 
for mathematics that serves them throughout their academic careers.`,

  bio_si: `සුමේධ කරුණානායක යනු වසර 23කට අධික කාලයක් පුරා 6 ශ්‍රේණියේ සිට 11 ශ්‍රේණිය දක්වා සිසුන්ට මඟ පෙන්වන, ඉමහත් පළපුරුද්දක් සහ කැපවීමක් සහිත ගණිත ගුරුවරයෙකි. ඔහුගේ ඉවසිලිවන්ත සහ ක්‍රමානුකූල ඉගැන්වීම් රටාව තුළින් ශක්තිමත් ගණිතමය පදනමක් ගොඩනැගීමට මූලිකත්වය දෙන අතර, සූත්‍ර කටපාඩම් කිරීමට පමණක් සීමා නොවී සෑම සිසුවෙකුටම විෂය සංකල්ප නිසි ලෙස අවබෝධ කරවීම සහතික කරයි.

ඔහුගේ දීර්ඝකාලීන පළපුරුද්ද තුළින්, දහස් ගණනක් වූ සිසුන්ගේ ලකුණු මට්ටම් ඉහළ නැංවීමටත්, ඔවුන් තුළ ආත්ම විශ්වාසය ගොඩනැගීමටත්, සිසුන්ගේ මුළු අධ්‍යාපනික ජීවිතයටම මහෝපකාරී වන සැබෑ ගණිතමය ඇල්මක් ඇති කිරීමටත් ඔහු සමත්ව ඇත.`,

  qualifications: [
    "Best Central Province Mathematics Teacher Award — Shilpabhimani (ශිල්පාභිමානී) Event",
    "Experience as Mathematics Teacher Advisor (ගණිත ගුරු උපදේශක) — Kotmale Zone",
    "Diploma in Education (Placeholder)",
    "23+ Years of Teaching Experience",
    "Expert in O/L and Grade 6–9 Mathematics",
  ],

  qualifications_si: [
    "ශිල්පාභිමානී සම්මාන උළෙලේදී මධ්‍යම පළාතේ හොඳම ගණිත ගුරුවරයා සම්මානයෙන් පිදුම් ලැබීම",
    "කොත්මලේ කලාප ගණිත ගුරු උපදේශක ලෙස සේවය කළ පළපුරුද්ද",
    "අධ්‍යාපන ඩිප්ලෝමාව (Diploma in Education)",
    "වසර 23+ ක ඉගැන්වීමේ විශිෂ්ට පළපුරුද්ද",
    "අ.පො.ස. සා/පෙළ සහ 6–9 ශ්‍රේණි ගණිත විශේෂඥ",
  ],

  teachingPhilosophy: `Every student has the ability to understand and enjoy Mathematics — 
my goal is to find the right approach for each individual learner. 
I believe in patience, encouragement, and making complex ideas 
approachable through real-world examples and step-by-step guidance.`,

  photoPath: "/images/tutor.jpg",
  photoAlt: "Sumedha Karunanayake — Mathematics Tutor",
};

export default about;
