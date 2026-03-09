import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seoul Soul Match | The Definitive Guide to Seoul Neighborhoods",
  description: "Discover which Seoul neighborhood fits your unique personality and lifestyle. An expert-curated guide for digital nomads, expats, and urban explorers looking for their perfect spot in Seoul. Updated 2026.",
  keywords: ["Seoul Neighborhood Guide", "Living in Seoul", "Digital Nomad Seoul", "Seoul District Analysis", "Gangnam", "Hannam", "Hongdae", "Seongsu", "Euljiro"],
  authors: [{ name: "SeoulSoul Expert Team" }],
  other: {
    "google-adsense-account": "ca-pub-3625148910460381",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for Google (E-E-A-T)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Seoul Soul Match",
    "url": "https://seoulsoulmatch.com",
    "description": "Expert-curated guide to Seoul neighborhoods based on lifestyle and urban data.",
    "publisher": {
      "@type": "Organization",
      "name": "SeoulSoul Team",
      "logo": {
        "@type": "ImageObject",
        "url": "https://seoulsoulmatch.com/logo.png"
      }
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best neighborhood in Seoul for digital nomads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Seongsu-dong and Hongdae are top choices due to their creative atmosphere and coworking infrastructure."
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8VPMSNNXBN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8VPMSNNXBN');
          `}
        </Script>

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3625148910460381"
          crossOrigin="anonymous"
        ></script>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-mono`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
