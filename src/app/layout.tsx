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
  title: "Yousiefaz Portfolio",
  description:
    "Frontend Developer crafting efficient, user-focused web solutions with clean design and smart functionality.",

  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Yousiefaz Portfolio",
    description:
      "Frontend Developer crafting efficient, user-focused web solutions with clean design and smart functionality.",
    url: "https://www.yousiefaz.online",
    siteName: "Yousiefaz",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yousiefaz Portfolio Preview",
      },
    ],
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
          "relative text-muted-foreground font-sans",
          raleway.variable,
        )}
      >
        <SpeedInsights />
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MobileNav />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
