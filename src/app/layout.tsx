import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          // Base layout with gradient background and refined spacing
          "min-h-screen bg-background bg-aurora font-sans antialiased px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <main className="mx-auto max-w-3xl py-12 sm:py-20">
              {children}
            </main>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
        <Script id="sw-unregister" strategy="afterInteractive">
          {`
            try {
              if (typeof window !== 'undefined' && window.location && window.location.hostname === 'localhost') {
                if ('serviceWorker' in navigator) {
                  navigator.serviceWorker.getRegistrations().then((regs) => {
                    for (const reg of regs) reg.unregister();
                  });
                }
                if (typeof caches !== 'undefined' && caches.keys) {
                  caches.keys().then((keys) => {
                    for (const key of keys) caches.delete(key);
                  });
                }
              }
            } catch (e) {
              // ignore
            }
          `}
        </Script>
      </body>
    </html>
  );
}
