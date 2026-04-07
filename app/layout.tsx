import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://netfo.co"),
  title: {
    default: "Netfo — Modern ERP for Automotive Businesses",
    template: "%s | Netfo",
  },
  description:
    "Netfo is the all-in-one cloud ERP platform designed for automotive dealerships and distributors. Manage CRM, inventory, finance, HR, logistics, and more from a single dashboard.",
  keywords: [
    "ERP",
    "automotive ERP",
    "car dealership software",
    "vehicle management",
    "CRM",
    "inventory management",
    "dealership management system",
    "DMS",
    "auto dealer software",
    "fleet management",
    "automotive SaaS",
    "cloud ERP",
    "multi-tenant ERP",
    "vehicle sales",
    "automotive CRM",
    "dealer management",
    "auto finance",
    "vehicle inventory",
    "automotive logistics",
  ],
  authors: [{ name: "Netfo" }],
  creator: "Netfo",
  publisher: "Netfo",
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
    url: "https://netfo.co",
    siteName: "Netfo",
    title: "Netfo — Modern ERP for Automotive Businesses",
    description:
      "The all-in-one cloud ERP for automotive dealerships. CRM, inventory, finance, HR, logistics — all in one platform.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Netfo ERP Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Netfo — Modern ERP for Automotive Businesses",
    description:
      "The all-in-one cloud ERP for automotive dealerships. CRM, inventory, finance, HR, logistics — all in one platform.",
    images: ["/og-image.png"],
    creator: "@netfo",
  },
  alternates: {
    canonical: "https://netfo.co",
  },
  icons: {
    icon: "/logo-icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Netfo",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Cloud-based ERP platform designed for automotive dealerships and distributors. Includes CRM, inventory, finance, HR, and logistics modules.",
    url: "https://netfo.co",
    offers: {
      "@type": "Offer",
      description: "Custom pricing based on dealership size and needs. Contact us for a quote.",
      url: "https://netfo.co/pricing",
    },
    publisher: {
      "@type": "Organization",
      name: "Netfo",
      url: "https://netfo.co",
      logo: {
        "@type": "ImageObject",
        url: "https://netfo.co/logo.png",
      },
    },
    featureList: [
      "CRM & Lead Management",
      "Vehicle Inventory Management",
      "Finance & Accounting",
      "Human Resources",
      "Procurement & Purchasing",
      "Logistics & Fleet Management",
      "AI-Powered Analytics",
      "Multi-Tenant Architecture",
    ],
  };

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Netfo",
    url: "https://netfo.co",
    logo: "https://netfo.co/logo.png",
    description:
      "Modern cloud ERP platform for automotive businesses worldwide.",
    sameAs: [
      "https://x.com/netfo",
      "https://linkedin.com/company/netfo",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "netfo.solutions@gmail.com",
      telephone: "+971544030094",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
