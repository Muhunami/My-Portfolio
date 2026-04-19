import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CursorGlow } from "@/components/cursor-glow";
import { PageTransition } from "@/components/page-transition";

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
  description:
    "Personal portfolio — building ideas in code, writing, and conversation.",
  keywords: [
    "portfolio",
    "Manuel Muhunami",
    "web development",
    "writing",
    "student",
  ],
  authors: [{ name: "Manuel Muhunami" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Manuel Muhunami | Portfolio",
    description:
      "I build ideas in code, writing, and conversation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manuel Muhunami | Portfolio",
    description:
      "Personal portfolio — code, writing, and conversation.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050508" },
    { media: "(prefers-color-scheme: light)", color: "#f6f6f8" },
  ],
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
        <ThemeProvider>
          <div className="noise" aria-hidden />
          <CursorGlow />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
