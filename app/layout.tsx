import type React from "react"
import type { Metadata } from "next"
import { Cormorant } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const cormorant = Cormorant({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SellYourHouse | Stress-Free Sacramento Real Estate | Luxury Properties",
  description:
    "Unlock the door to stress-free home selling in Sacramento. Expert real estate services for luxury properties, quick sales, and maximum value in California's capital region.",
  keywords:
    "Sacramento real estate, sell your house Sacramento, stress-free home selling, luxury homes Sacramento, cash offers, Sacramento property value, home value calculator, East Sacramento, Land Park, Sierra Oaks Vista, Arden Oaks, Granite Bay",
  openGraph: {
    title: "SellYourHouse | Stress-Free Sacramento Real Estate | Luxury Properties",
    description:
      "Unlock the door to stress-free home selling in Sacramento. Expert real estate services for luxury properties, quick sales, and maximum value.",
    url: "https://sellyourhousesacramento.com",
    siteName: "SellYourHouse Sacramento",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://sellyourhousesacramento.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SellYourHouse Sacramento - Luxury Real Estate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SellYourHouse | Stress-Free Sacramento Real Estate",
    description: "Sacramento's premier luxury real estate agency for stress-free home selling.",
    images: ["https://sellyourhousesacramento.com/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://sellyourhousesacramento.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://sellyourhousesacramento.com" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Sacramento" />
        <meta name="geo.position" content="38.5816;-121.4944" />
        <meta name="ICBM" content="38.5816, -121.4944" />
        <meta name="author" content="SellYourHouse Sacramento Real Estate" />
        <meta name="robots" content="index, follow" />
        <Script id="schema-script" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "SellYourHouse Sacramento",
              "image": "https://sellyourhousesacramento.com/images/logo.png",
              "url": "https://sellyourhousesacramento.com",
              "telephone": "+19165263450",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1234 Capitol Avenue",
                "addressLocality": "Sacramento",
                "addressRegion": "CA",
                "postalCode": "95814",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "38.5816",
                "longitude": "-121.4944"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/sellyourhousesacramento",
                "https://www.instagram.com/sellyourhousesacramento",
                "https://www.linkedin.com/company/sellyourhousesacramento"
              ],
              "priceRange": "$$",
              "areaServed": ["Sacramento", "East Sacramento", "Land Park", "Sierra Oaks Vista", "Arden Oaks", "Granite Bay", "Midtown", "Natomas", "Elk Grove"],
              "description": "Sacramento's premier real estate agency specializing in stress-free home selling solutions for homeowners throughout California's capital region.",
              "slogan": "Unlock the door to stress-free home selling in Sacramento!",
              "knowsAbout": ["Sacramento Real Estate", "Luxury Homes", "Property Valuation", "Home Selling", "Cash Offers"]
            }
          `}
        </Script>
      </head>
      <body className={cormorant.className}>{children}</body>
    </html>
  )
}


import './globals.css'