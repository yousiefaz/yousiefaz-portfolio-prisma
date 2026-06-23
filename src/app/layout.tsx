import type { Metadata } from "next";

import { Raleway } from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import MobileNav from "@/components/navigation/mobile-nav";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yousiefaz.online"),

  title: {
    default: "Youisefaz | Frontend Developer",
    template: "%s | Youisefaz",
  },

  description:
    "Frontend Developer (React, Next.js, TypeScript) building fast, scalable, and modern web applications.",

  applicationName: "Youisefaz",

  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Frontend Engineer",
    "UI Engineer",
    "Web Developer Egypt",
    "Portfolio",
  ],

  authors: [
    {
      name: "Yousief AboAlyazed (Youisefaz)",
      url: "https://yousiefaz.online",
    },
  ],

  creator: "YAZ",
  publisher: "Youisefaz",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://yousiefaz.online",
    siteName: "Youisefaz",
    title: "Youisefaz | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and modern web performance.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Youisefaz Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@yaz",
    title: "Youisefaz | Frontend Developer",
    description:
      "Frontend Developer specializing in React, Next.js, and modern web performance.",
    images: ["/og.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="selection:bg-primary selection:text-white"
    >
      <body
        className={cn(
          "relative min-h-screen text-muted-foreground font-sans",
          raleway.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MobileNav />
          <main className="relative">{children}</main>
        </ThemeProvider>

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
