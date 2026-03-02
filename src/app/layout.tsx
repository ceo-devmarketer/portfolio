import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "DEVMARKETER.",
  description:
    "High-end professional portfolio for Web Development and Digital Marketing.",
  icons: {
    icon: "/dm.png",
    shortcut: "/dm.png",
    apple: "/dm.png",
  },
};

import CustomCursor from "@/components/CustomCursor";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased cursor-none bg-deep-dark text-white`}
      >
        <CustomCursor />
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
          <footer className="border-t border-white/5 bg-black/40 px-4 py-4 text-[11px] sm:text-xs text-gray-400">
            <div className="mx-auto flex max-w-5xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-mono tracking-[0.18em] uppercase text-gray-500">
                Devmarketer · Mahedi Hasan
              </span>
              <div className="flex flex-wrap gap-3">
                <Link href="/terms" className="hover:text-neon-blue transition-colors">
                  Terms
                </Link>
                <Link href="/privacy" className="hover:text-neon-blue transition-colors">
                  Privacy
                </Link>
                <Link href="/shop" className="hover:text-neon-blue transition-colors">
                  Shop
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
