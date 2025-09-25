import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from '@/components/seo/StructuredData';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agami Robotics BD | আগামী রোবটিক্স বিডি - Inspiring Youth to Innovate",
  description: "Inspiring Youth to Innovate - Empowering Bangladeshi students with affordable robotics kits and Bengali tutorials. Building the future of STEM education in Bangladesh.",
  keywords: ["robotics", "STEM education", "Bangladesh", "robotics kits", "programming", "Bengali tutorials", "educational technology"],
  authors: [{ name: "Agami Robotics BD" }],
  openGraph: {
    title: "Agami Robotics BD | আগামী রোবটিক্স বিডি",
    description: "Empowering Bangladeshi students with affordable robotics kits and Bengali tutorials",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
