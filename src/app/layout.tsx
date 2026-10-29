import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { ThemeProvider } from "@/components/layout/ThemeContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AtmosphereBackground } from "@/components/ui/AtmosphereBackground";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Suraj Vishwakarma | Full Stack Developer",
    template: "%s | Suraj Vishwakarma",
  },
  description:
    "Full Stack Developer and M.Sc. IT student crafting responsive web applications, intuitive interfaces, and dependable backend microservices with Next.js, React, Node.js, and Python.",
  keywords: [
    "Suraj Vishwakarma",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Python FastAPI",
    "Machine Learning Integration",
    "Cybersecurity Anomaly Detection",
    "IntelliTwin AI",
    "Web Development Mumbai",
    "TypeScript",
  ],
  authors: [{ name: "Suraj Vishwakarma", url: siteConfig.links.github }],
  creator: "Suraj Vishwakarma",
  publisher: "Suraj Vishwakarma",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Suraj Vishwakarma | Full Stack Developer",
    description:
      "Full Stack Developer crafting responsive interfaces, reliable backends, and thoughtful digital products.",
    siteName: siteConfig.brand,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Suraj Vishwakarma — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Vishwakarma | Full Stack Developer",
    description:
      "Full Stack Developer crafting responsive interfaces, reliable backends, and thoughtful digital products.",
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Suraj Vishwakarma",
    jobTitle: "Full Stack Developer",
    url: siteConfig.url,
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Abhinav College",
      location: "Bhayandar, Maharashtra, India",
    },
    knowsAbout: [
      "Full Stack Web Development",
      "Next.js",
      "React",
      "Node.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Machine Learning Explainability",
    ],
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brand,
    url: siteConfig.url,
    author: {
      "@type": "Person",
      name: "Suraj Vishwakarma",
    },
  };

  return (
    <html lang="en" className={`dark ${playfair.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body className="font-sans bg-maroon-950 text-ivory-200 antialiased selection:bg-maroon-600 selection:text-gold-300 min-h-screen flex flex-col relative overflow-x-hidden">
        <ThemeProvider>
          <ScrollProgress />
          <AtmosphereBackground />
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

