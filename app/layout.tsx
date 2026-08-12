import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Script from "next/script";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mahadevbookie.shop'),
  alternates: { canonical: '/' },
  verification: {
    google: "LWP8JEdqRLw2lsy_izXalQ2n_aVlWsaTGeYUH-F4DNw",
  },
  title: "Mahadev Bookie | Online Cricket Betting, Casino & Sports Betting",
  description: "Join Mahadev Bookie for secure online cricket betting, live sports betting, casino games, instant betting IDs, competitive odds, and fast withdrawals in India.",
  keywords: "Mahadev Book, Mahadev Bookie, Mahadev Book ID, Mahadev Book Login, Mahadev Book Register, Buy Mahadev Book ID",
  authors: [{ name: "Mahadev Bookie" }],
  creator: "Mahadev Bookie",
  robots: "index, follow",
  openGraph: {
    title: "Mahadev Bookie | Online Cricket Betting, Casino & Sports Betting",
    description: "Join Mahadev Bookie for secure online cricket betting, live sports betting, casino games, instant betting IDs, competitive odds, and fast withdrawals in India.",
    url: "https://mahadevbookie.shop",
    siteName: "Mahadev Bookie",
    locale: "en_IN",
    type: "website",
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://mahadevbookie.shop/#organization",
      "name": "Mahadev Bookie",
      "alternateName": "Mahadev Book",
      "url": "https://mahadevbookie.shop/",
      "description": "Mahadev Bookie provides secure online cricket betting IDs, sports betting, live casino games and betting services for users across India.",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Support",
        "telephone": "+91-7589045547",
        "url": "https://wa.me/917589045547",
        "areaServed": "IN",
        "availableLanguage": [
          "English",
          "Hindi"
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://mahadevbookie.shop/#website",
      "url": "https://mahadevbookie.shop/",
      "name": "Mahadev Bookie",
      "publisher": {
        "@id": "https://mahadevbookie.shop/#organization"
      },
      "inLanguage": "en-IN",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://mahadevbookie.shop/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://mahadevbookie.shop/#webpage",
      "url": "https://mahadevbookie.shop/",
      "name": "Mahadev Bookie | Online Cricket Betting, Casino & Sports Betting",
      "description": "Join Mahadev Bookie for secure online cricket betting, live sports betting, casino games, instant betting IDs, competitive odds, and fast withdrawals in India.",
      "isPartOf": {
        "@id": "https://mahadevbookie.shop/#website"
      },
      "about": {
        "@id": "https://mahadevbookie.shop/#organization"
      },
      "breadcrumb": {
        "@id": "https://mahadevbookie.shop/#breadcrumb"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mahadevbookie.shop/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://mahadevbookie.shop/"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://mahadevbookie.shop/#service",
      "name": "Online Cricket Betting & Casino Services",
      "provider": {
        "@id": "https://mahadevbookie.shop/#organization"
      },
      "description": "Mahadev Bookie offers online cricket betting IDs, sports betting, live casino games, poker access and fast deposits and withdrawals for users across India.",
      "serviceType": [
        "Cricket Betting ID",
        "Sports Betting",
        "Live Cricket Betting",
        "Online Casino",
        "Teen Patti",
        "Poker",
        "Fast Withdrawals"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://mahadevbookie.shop/",
        "availableLanguage": [
          "English",
          "Hindi"
        ]
      }
    },
    {
      "@type": "SiteNavigationElement",
      "@id": "https://mahadevbookie.shop/#navigation",
      "name": [
        "Home",
        "About",
        "Blog",
        "Contact",
        "FAQ",
        "Mahadev Betting App",
        "Mahadev Book ID",
        "Mastering Live Cricket Betting"
      ],
      "url": [
        "https://mahadevbookie.shop/",
        "https://mahadevbookie.shop/about",
        "https://mahadevbookie.shop/blog",
        "https://mahadevbookie.shop/contact",
        "https://mahadevbookie.shop/faq",
        "https://mahadevbookie.shop/mahadev-betting-app",
        "https://mahadevbookie.shop/mahadev-book-id",
        "https://mahadevbookie.shop/mastering-live-cricket-betting"
      ]
    },
    {
      "@type": "RegisterAction",
      "@id": "https://mahadevbookie.shop/#register",
      "name": "Register for a Mahadev Bookie Betting ID",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wa.me/917589045547",
        "actionPlatform": [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform"
        ]
      },
      "agent": {
        "@id": "https://mahadevbookie.shop/#organization"
      },
      "result": {
        "@type": "Thing",
        "name": "Mahadev Bookie Betting ID"
      }
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://mahadevbookie.shop/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Mahadev Book Online Betting ID?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Mahadev Book Online Betting ID is a verified account that provides access to cricket betting, sports betting, casino games, poker and other betting services. Users can deposit funds, place bets and manage their betting activities securely."
      }
    },
    {
      "@type": "Question",
      "name": "How does Mahadev Book work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mahadev Book helps users obtain a betting ID through WhatsApp. After registration, users can add funds using supported payment methods, access betting platforms with their credentials and request withdrawals through customer support."
      }
    },
    {
      "@type": "Question",
      "name": "How do I register for a new Online Betting ID?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Click any Get ID button on the website to connect with a verified WhatsApp agent. Share your basic details, choose your deposit amount and your betting ID is generally created within a few minutes."
      }
    },
    {
      "@type": "Question",
      "name": "What games can I play with my Mahadev Book ID?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mahadev Book ID gives access to cricket betting, football betting, tennis, e-sports, Teen Patti, Andar Bahar, poker, live casino games and other popular betting markets."
      }
    },
    {
      "@type": "Question",
      "name": "How do I deposit money into my Mahadev Book account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Deposits can be made using verified UPI IDs, Google Pay or bank transfers provided by the support team. Once payment is confirmed, betting funds are credited to the account."
      }
    },
    {
      "@type": "Question",
      "name": "How do I withdraw my winnings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Withdrawals can be requested through WhatsApp by sharing your betting ID and withdrawal amount. After verification, funds are transferred to your registered UPI ID or bank account."
      }
    },
    {
      "@type": "Question",
      "name": "Is Mahadev Book legal in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Online betting laws in India differ from state to state. Users should review the regulations applicable in their state before participating in online betting activities."
      }
    },
    {
      "@type": "Question",
      "name": "Is Mahadev Book safe and trusted?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mahadev Book uses secure systems and encrypted connections to help protect user information and transactions, providing a reliable betting experience for its users."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased dark`}
      style={{ colorScheme: 'dark' }}
    >
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050505] text-zinc-100 font-sans selection:bg-teal-500/20 selection:text-teal-300">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-E18NG8NNV3" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-E18NG8NNV3');
        `}
      </Script>
    </html>
  );
}
