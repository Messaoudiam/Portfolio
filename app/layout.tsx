// next
import type { Metadata } from "next";

// fonts
import { Oswald } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

// css
import "./globals.css";

const oswald = Oswald({ subsets: ["latin"], variable: "--font-caption" });

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Messaoud Zouggab ⸱ Web Developer",
  description: "Coding Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          oswald.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
