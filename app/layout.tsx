import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";

const oswald = Oswald({ subsets: ["latin"], variable: "--font-caption" });

import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "ZOUGGAB Messaoud . Web Developer",
  description: "Coding Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className={cn(GeistSans.variable, oswald, "font-sans h-full")}>{children}</body>
    </html>
  );
}
