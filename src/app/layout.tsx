
import "./globals.css";
import type { Metadata } from "next";
import HideNextDevTools from "./HideNextDevTools";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ben Obre - Full Stack Developer",
  description: "Full Stack Developer",
  icons: {
    icon: "/img/letter-b.png", 
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-gray-100`}
      >
        <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
          <HideNextDevTools />
          {children}
        </div>
      </body>
    </html>
  );
}
