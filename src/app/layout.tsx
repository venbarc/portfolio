
import "./globals.css";
import type { Metadata } from "next";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "#0a0a0a!important", color: "#f3f4f6" }}   
      >
        <div className="bg-[#0a0a0a] text-gray-100">
          {children}
        </div>
      </body>
    </html>
  );
}
