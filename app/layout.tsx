import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QuoteProvider } from "@/components/cta/QuoteContext";
import { ThemeProvider } from "@/components/theme/ThemeContext";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { QuoteModal } from "@/components/cta/QuoteModal";
import { BRAND_INFO } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Digital Horizon Solutions | Websites, GMB, E-Commerce & Automation",
  description:
    "Digital Horizon Solutions builds practical digital systems for real businesses. From Google Business Profile optimization and high-performance websites to e-commerce, custom software, and AI workflows.",
  metadataBase: new URL("https://digitalhorizonsolutions.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  keywords: [
    "Digital Horizon Solutions",
    "Website Development",
    "Google Business Profile",
    "GMB Optimization",
    "Local SEO",
    "E-Commerce Development",
    "Custom Software Development",
    "AI Automation",
    "Business Digital Solutions",
  ],
  authors: [{ name: "Digital Horizon Solutions" }],
  creator: "Digital Horizon Solutions",
  publisher: "Digital Horizon Solutions",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digitalhorizonsolutions.com",
    title: "Digital Horizon Solutions | Websites, GMB, E-Commerce & Automation",
    description:
      "Modern digital solutions agency serving established businesses, SMEs, millennial founders, and digital-first startups.",
    siteName: "Digital Horizon Solutions",
    images: [
      {
        url: "/logo-original.png",
        width: 1024,
        height: 589,
        alt: "Digital Horizon Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Horizon Solutions | Websites, GMB, E-Commerce & Automation",
    description:
      "Modern digital solutions agency engineering high-performance websites, local search discovery, e-commerce, and software.",
    images: ["/logo-original.png"],
  },
};

// Structured Schema.org data for Organization & LocalBusiness
const schemaJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://digitalhorizonsolutions.com/#organization",
      name: "Digital Horizon Solutions",
      url: "https://digitalhorizonsolutions.com",
      logo: "https://digitalhorizonsolutions.com/logo.svg",
      description: BRAND_INFO.heroDescription,
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: BRAND_INFO.contactEmail,
          contactType: "customer service",
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://digitalhorizonsolutions.com/#service",
      name: "Digital Horizon Solutions",
      url: "https://digitalhorizonsolutions.com",
      description:
        "Digital solutions agency providing Google Business Profile optimization, website development, e-commerce stores, custom software, and AI automation.",
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "19:00",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('dhs_theme');if(s==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-background text-foreground antialiased selection:bg-gold-400/20 selection:text-white`}
      >
        <ThemeProvider>
          <QuoteProvider>
            <SmoothScrollProvider>
              {children}
              <QuoteModal />
            </SmoothScrollProvider>
          </QuoteProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
