import "~/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { type Metadata } from "next";
import { Kanit } from "next/font/google";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import Providers from "~/lib/providers";

export const metadata: Metadata = {
  title: "Anri Vachnadze",
  description: "Mid-Level Full-stack developer from Georgia",
  icons: [
    { rel: "icon", url: "/logo/favicon.ico" },
    { rel: "apple-touch-icon", url: "/logo/favicon.ico" },
  ],
  keywords: [
    "Front end developer",
    "Back end developer",
    "Full stack developer",
    "Next.js",
    "React",
    "React.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Sass",
    "Git",
    "GitHub",
    "Responsive Design",
    "Web Development",
    "UI/UX Design",
    "Figma",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "REST APIs",
    "GraphQL",
    "Heroku",
    "Vercel",
    "Netlify",
    "AWS",
    "Docker",
    "Testing",
    "Jest",
    "Cypress",
    "Project Management",
    "Communication Skills",
    "Problem-Solving",
    "Teamwork",
    "Creativity",
    "Adaptability",
  ],
  authors: [{ name: "anriuss", url: "https://anrius.vercel.app" }],
  creator: "anriuss",
  publisher: "anriuss",
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
  openGraph: {
    title: "Anri Vachnadze | Portfolio",
    description: "Mid-Level Full-stack developer from Georgia",
    url: "https://anrius.vercel.app",
    siteName: "Anri Vachnadze | Portfolio",
    images: [
      {
        url: "https://anrius.vercel.app/logo/banner.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Anri Vachnadze | Portfolio",
    description: "Mid-Level Full-stack developer from Georgia",
    images: ["https://anrius.vercel.app/logo/banner.jpg"],
    // TODO: Add creator and site when twitter account is created
    // creator: "@yourtwitter",
    // site: "@yourtwitter",
  },
};

const KanitConfig = Kanit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${KanitConfig.className}`}>
      <body>
        <Analytics />
        <SpeedInsights />
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
