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
  qualifications: string[];
  teachingPhilosophy: string;
  /** Path to tutor photo — place in /public/images/ */
  photoPath: string;
  photoAlt: string;
}

// TODO: Replace all placeholder values below with real content.
const about: AboutData = {
  name: "Sumedha Karunanayake",
  yearsExperience: "25+",
  statLabel: "Years of Experience",
  bio: `Sumedha Karunanayake is a highly experienced and dedicated mathematics tutor 
who has been guiding Grade 6 to Grade 11 students for over 25 years. 
His patient, methodical teaching style focuses on building strong 
mathematical foundations, ensuring every student truly understands 
the concepts rather than just memorising formulas.

Through his years of experience, he has helped hundreds of students 
improve their grades, gain confidence, and develop a genuine love 
for mathematics that serves them throughout their academic careers.`,

  qualifications: [
    // TODO: Replace with real qualifications
    "B.Sc. in Mathematics (Placeholder)",
    "Diploma in Education (Placeholder)",
    "25+ Years of Teaching Experience",
    "Expert in O/L and Grade 6–9 Mathematics",
  ],

  teachingPhilosophy: `Every student has the ability to understand and enjoy Mathematics — 
my goal is to find the right approach for each individual learner. 
I believe in patience, encouragement, and making complex ideas 
approachable through real-world examples and step-by-step guidance.`,

  photoPath: "/images/tutor.jpg",
  photoAlt: "Sumedha Karunanayake — Mathematics Tutor",
};

export default about;
