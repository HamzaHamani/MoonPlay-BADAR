import type React from "react";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MoonPlay - Premium IPTV Service | 3000+ Live Channels & Movies",
  description:
    "Stream 3000+ live TV channels, sports, movies & series with MoonPlay IPTV. HD/4K quality, worldwide content, multi-device support. Start watching instantly!",
  keywords:
    "IPTV, live TV streaming, sports channels, movies online, TV series, HD streaming, 4K content, premium IPTV service, global channels, entertainment streaming",
  authors: [{ name: "MoonPlay Team" }],
  creator: "MoonPlay",
  publisher: "MoonPlay",
  metadataBase: new URL("https://moonplay.live"),
  alternates: {
    canonical: "https://moonplay.live",
  },
  openGraph: {
    title: "MoonPlay - Premium IPTV Service | 3000+ Live Channels & Movies",
    description:
      "Stream 3000+ live TV channels, sports, movies & series with MoonPlay IPTV. HD/4K quality, worldwide content, multi-device support. Start watching instantly!",
    url: "https://moonplay.live",
    siteName: "MoonPlay",
    images: [
      {
        url: "/og.jpg",
        width: 1280,
        height: 720,
        alt: "MoonPlay IPTV Service - Premium Streaming Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoonPlay - Premium IPTV Service | 3000+ Live Channels",
    description:
      "Stream 3000+ live TV channels, sports, movies & series with MoonPlay IPTV. HD/4K quality, worldwide content, multi-device support.",
    images: ["/og.jpg"],
    creator: "@moonplay",
    site: "@moonplay",
  },
  other: {
    // WhatsApp and Telegram specific metadata
    "og:image:alt": "MoonPlay IPTV Service - Premium Streaming Platform",
    "og:image:type": "image/jpeg",
    "og:image:width": "1280",
    "og:image:height": "720",
    // LinkedIn specific
    "article:author": "MoonPlay",
    // Telegram specific preview
    "telegram:channel": "@moonplay",
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
  verification: {
    google: "your-google-verification-code", // Replace with actual Google Search Console verification code
  },
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
