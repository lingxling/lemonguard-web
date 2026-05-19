import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LemonGuard — Used Car Inspection App",
  description:
    "Walk through 112 expert checks, score the car live, and generate a PDF report you can use to negotiate the price down. Available on the App Store for iPhone.",
  keywords: ["used car inspection", "car buying checklist", "vehicle inspection app", "pre-purchase inspection"],
  openGraph: {
    title: "LemonGuard — Used Car Inspection App",
    description:
      "Walk through 112 expert checks, score the car live, and generate a PDF report you can use to negotiate the price down.",
    type: "website",
    locale: "en_US",
    siteName: "LemonGuard",
  },
  twitter: {
    card: "summary_large_image",
    title: "LemonGuard — Used Car Inspection App",
    description: "112 expert checks. Live score. PDF report. Don't get burned buying a used car.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "LemonGuard",
  operatingSystem: "iOS",
  applicationCategory: "UtilitiesApplication",
  description:
    "A structured used-car inspection app. Walk through 112 expert checks, score the vehicle in real time, and export a PDF report to negotiate the price.",
  offers: [
    { "@type": "Offer", price: "0", priceCurrency: "USD", name: "First 3 inspections free" },
    { "@type": "Offer", price: "7.99", priceCurrency: "USD", name: "Lifetime unlock" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Apply a stored dark preference before first paint to avoid a
            flash. Light is the default, so no class means light. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
