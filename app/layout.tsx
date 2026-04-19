import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components/cursor-glow";
import { SiteShell } from "@/components/site-shell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://muhunami.github.io/My-Portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Manuel Muhunami | Portfolio",
    template: "%s — Manuel Muhunami",
  },
  description: "I love solving problems. Portfolio of Manuel Muhunami.",
  keywords: [
    "portfolio",
    "Manuel Muhunami",
    "computer science",
    "Kenya",
    "student",
  ],
  authors: [{ name: "Manuel Muhunami" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Manuel Muhunami | Portfolio",
    description: "I love solving problems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manuel Muhunami | Portfolio",
    description: "I love solving problems.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050508",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} font-sans min-h-screen antialiased`}
        style={
          {
            "--font-clash": '"Clash Display", system-ui, sans-serif',
            "--font-satoshi": '"Satoshi", system-ui, sans-serif',
          } as React.CSSProperties
        }
      >
        <SiteShell>
          <div className="noise" aria-hidden />
          <CursorGlow />
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
