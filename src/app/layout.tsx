import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { companyConfig } from "@/data/company";

export const metadata: Metadata = {
  title: {
    default: `${companyConfig.name} | Ethiopian Green Coffee Exporter`,
    template: `%s | ${companyConfig.name}`,
  },
  description:
    "Licensed Ethiopian Arabica green coffee exporter. Direct sourcing from Yirgacheffe, Sidama, Guji, and Limu. Specialty Grade 1 & 2 coffees for international importers, roasters, and distributors.",
  keywords: [
    "Ethiopian coffee exporter",
    "Ethiopian green coffee beans",
    "Ethiopian Arabica coffee",
    "Ethiopian coffee wholesale",
    "Ethiopian coffee supplier",
    "Yirgacheffe coffee export",
    "Sidama coffee beans",
    "Guji specialty coffee",
    "Limu washed coffee",
    "Specialty green coffee beans",
  ],
  authors: [{ name: companyConfig.name }],
  creator: companyConfig.name,
  metadataBase: new URL("https://ethiopiancoffee-export.example"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ethiopiancoffee-export.example",
    siteName: companyConfig.name,
    title: `${companyConfig.name} | Authentic Ethiopian Specialty Coffee Export`,
    description: companyConfig.shortDescription,
    images: [
      {
        url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Ethiopian Specialty Coffee Highlands",
      },
    ],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ethiopiancoffee-export.example/#organization",
        name: companyConfig.name,
        url: "https://ethiopiancoffee-export.example",
        logo: "https://ethiopiancoffee-export.example/logo.png",
        description: companyConfig.shortDescription,
        address: {
          "@type": "PostalAddress",
          streetAddress: companyConfig.headquarters.address,
          addressLocality: companyConfig.headquarters.city,
          addressCountry: "ET",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: companyConfig.contact.phone,
          contactType: "sales",
          email: companyConfig.contact.email,
          availableLanguage: ["English", "Amharic"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://ethiopiancoffee-export.example/#website",
        url: "https://ethiopiancoffee-export.example",
        name: companyConfig.name,
        publisher: {
          "@id": "https://ethiopiancoffee-export.example/#organization",
        },
      },
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-coffee-darkest text-coffee-ivory font-sans antialiased selection:bg-coffee-gold selection:text-coffee-darkest flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
