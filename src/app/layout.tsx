import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GridBackground } from "@/components/ui/GridBackground";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ECT Security - Event Control Team",
  description: "Professional security services and event management solutions",
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
      >
        <GridBackground>{children}</GridBackground>
      </body>
    </html>
  );
}
