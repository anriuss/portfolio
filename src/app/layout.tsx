import "~/styles/globals.css";

import { type Metadata } from "next";
import { Kanit } from "next/font/google";
import Navbar from "~/components/navbar";

export const metadata: Metadata = {
  title: "Anri Vachnadze",
  description: "Mid-Level Full-stack developer from Georgia",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
  authors: [{ name: "MrAnri29", url: "https://anrius.vercel.app" }],
  creator: "MrAnri29",
  publisher: "MrAnri29",
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
        url: "https://anrius.vercel.app/logo.png",
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
    images: ["https://anrius.vercel.app/logo.png"],
    // TODO: Add creator and site when twitter account is created
    // creator: "@yourtwitter",
    // site: "@yourtwitter",
  },
};

const KanitConfig = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${KanitConfig.className}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
