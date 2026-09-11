import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/components/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import CustomCursor from "@/components/CustomCursor";
import FloatingContact from "@/components/FloatingContact";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sumedha Karunanayake — Mathematics Tutor",
    template: "%s | Sumedha Karunanayake",
  },
  description:
    "Expert Mathematics tuition for Grade 6 to Grade 11 students by Sumedha Karunanayake — 23+ years of teaching experience in Sri Lanka.",
  keywords: [
    "math tutor",
    "mathematics",
    "grade 6",
    "grade 11",
    "O/L",
    "Sri Lanka",
    "Sumedha Karunanayake",
  ],
  openGraph: {
    title: "Sumedha Karunanayake — Mathematics Tutor",
    description:
      "Expert Mathematics tuition for Grade 6 to Grade 11 students. 23+ years of experience.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="theme"
        >
          <LanguageProvider>
            <SplashScreen />
            <CustomCursor />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <FloatingContact />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
