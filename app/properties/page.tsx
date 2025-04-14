import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Bed, Bath, Square, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Luxury Sacramento Properties | SellYourHouse | Exclusive Real Estate Listings",
  description:
    "Browse Sacramento's most exclusive luxury properties. Find high-end homes in East Sacramento, Land Park, Sierra Oaks Vista, and other prestigious neighborhoods.",
  keywords:
    "Sacramento luxury properties, high-end Sacramento real estate, luxury homes Sacramento, East Sacramento mansions, Land Park estates, Sierra Oaks Vista properties",
  openGraph: {
    title: "Luxury Sacramento Properties | SellYourHouse",
    description:
      "Discover Sacramento's most exclusive luxury properties in prestigious neighborhoods like East Sacramento, Land Park, and Sierra Oaks Vista.",
    url: "https://sellyourhousesacramento.com/properties",
    type: "website",
  },
}

export default function PropertiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-gold-100 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-24 max-w-screen-xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center">
            <div className="mr-2 h-10 w-10">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <path d="M20 0L40 20L35 25L20 10L5 25L0 20L20 0Z" fill="#D4AC5F" />
                <path d="M10 25L20 15L30 25V40H10V25Z" fill="#D4AC5F" />
              </svg>
            </div>
            <span className="text-xl font-light tracking-[0.2em] text-gray-900">SELLYOURHOUSE</span>
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/properties"
              className="text-sm font-light tracking-wider text-gold-600 hover:text-gold-600 transition-colors"
            >
              PROPERTIES
            </Link>
            <Link
              href="/services"
              className="text-sm font-light tracking-wider text-gray-600 hover:text-gold-600 transition-colors"
            >
              SERVICES
            </Link>
            <Link
              href="/about"
              className="text-sm font-light tracking-wider text-gray-600 hover:text-gold-600 transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="/testimonials"
              className="text-sm font-light tracking-wider text-gray-600 hover:text-gold-600 transition-colors"
            >
              TESTIMONIALS
            </Link>
            <Link
              href="/contact"
              className="text-sm font-light tracking-wider text-gray-600 hover:text-gold-600 transition-colors"
            >
              CONTACT
            </Link>
          </nav>
          <div className="hidden md:flex items-center">
            <Link
              href="/calculator"
              className="bg-gold-50 hover:bg-gold-100 text-gold-800 px-5 py-2.5 text-sm font-light tracking-wider transition-colors"
            >
              HOME VALUE CALCULATOR
            </Link>
          </div>
          <button className="block md:hidden text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-gray-900">
          <div className="absolute inset-0 bg-black/60 z-0"></div>
          <div className="relative z-10 mx-auto max-w-screen-xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white leading-tight mb-6">
              EXCLUSIVE SACRAMENTO <span className="text-gold-300">LUXURY</span> PROPERTIES
            </h1>
            <p className="text-xl font-light text-white/90 mb-10 max-w-3xl mx-auto">
              Discover Sacramento's most prestigious homes in the region's most coveted neighborhoods.
            </p>
          </div>
          <div className="absolute inset-0 -z-10">
            <Image
              src="/placeholder.svg?height=800&width=1920&text=Sacramento+Luxury+Properties"
              alt="Luxury Sacramento real estate properties showcase"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Property Filters */}
        <section className="py-12 bg-white border-b border-gold-100">
          <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="md:col-span-5 mb-4">
                <h2 className="text-2xl font-light text-gray-900">Find Your Perfect Sacramento Property</h2>
              </div>
              <div>
                <label htmlFor="neighborhood" className="block text-sm font-light text-gray-600 mb-2">
                  Neighborhood
                </label>
                <select
                  id="neighborhood"
                  className="w-full border border-gray-200 p-2 font-light text-gray-900 focus:border-gold-400 focus:outline-none focus:ring-0"
                >
                  <option value="">All Neighborhoods</option>
                  <option value="east-sacramento">East Sacramento</option>
                  <option value="land-park">Land Park</option>
                  <option value="sierra-oaks">Sierra Oaks Vista</option>
                  <option value="arden-oaks">Arden Oaks</option>
                  <option value="granite-bay">Granite Bay</option>
                </select>
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-light text-gray-600 mb-2">
                  Price Range
                </label>
                <select
                  id="price"
                  className="w-full border border-gray-200 p-2 font-light text-gray-900 focus:border-gold-400 focus:outline-none focus:ring-0"
                >
                  <option value="">Any Price</option>
                  <option value="1000000-2000000">$1M - $2M</option>
                  <option value="2000000-3000000">$2M - $3M</option>
                  <option value="3000000-5000000">$3M - $5M</option>
                  <option value="5000000-10000000">$5M - $10M</option>
                  <option value="10000000+">$10M+</option>
                </select>
              </div>
              <div>
                <label htmlFor="beds" className="block text-sm font-light text-gray-600 mb-2">
                  Bedrooms
                </label>
                <select
                  id="beds"
                  className="w-full border border-gray-200 p-2 font-light text-gray-900 focus:border-gold-400 focus:outline-none focus:ring-0"
                >
                  <option value="">Any</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                  <option value="6">6+</option>
                </select>
              </div>
              <div>
                <label htmlFor="baths" className="block text-sm font-light text-gray-600 mb-2">
                  Bathrooms
                </label>
                <select
                  id="baths"
                  className="w-full border border-gray-200 p-2 font-light text-gray-900 focus:border-gold-400 focus:outline-none focus:ring-0"
                >
                  <option value="">Any</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-light text-gray-600 mb-2">Search</label>
                <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white border-none rounded-none">
                  Find Properties
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-light tracking-wide text-gray-900 mb-4">Featured Sacramento Luxury Homes</h2>
              <p className="text-lg font-light text-gray-600 max-w-3xl">
                Explore our curated selection of Sacramento's most exceptional properties, each offering unparalleled
                luxury and distinctive character.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: "grandview-estate",
                  title: "The Grandview Estate",
                  location: "East Sacramento",
                  price: "$4,850,000",
                  beds: 6,
                  baths: 7.5,
                  sqft: "8,500",
                  features: ["Private 2-acre grounds", "Wine cellar", "Infinity pool"],
                  description:
                    "Perched atop Sacramento's most prestigious hills, this architectural masterpiece offers panoramic views of the American River and Sierra Nevada mountains.",
                },
                {
                  id: "riverside-mansion",
                  title: "Riverside Mansion",
                  location: "American River",
                  price: "$6,200,000",
                  beds: 5,
                  baths: 6,
                  sqft: "7,200",
                  features: ["200 feet of river frontage", "Private dock", "Guest house"],
                  description:
                    "This waterfront estate offers unparalleled luxury living on Sacramento's American River with direct river access and meticulously landscaped gardens.",
                },
                {
                  id: "sierra-oaks-villa",
                  title: "Sierra Oaks Villa",
                  location: "Sierra Oaks Vista",
                  price: "$3,975,000",
                  beds: 4,
                  baths: 5.5,
                  sqft: "5,800",
                  features: ["Gated community", "Tennis court", "Smart home"],
                  description:
                    "Nestled in the prestigious Sierra Oaks Vista neighborhood, this Mediterranean-inspired villa offers the perfect blend of luxury and comfort.",
                },
                {
                  id: "fabulous-40s-estate",
                  title: "Fabulous 40s Estate",
                  location: "East Sacramento",
                  price: "$3,450,000",
                  beds: 5,
                  baths: 4.5,
                  sqft: "4,800",
                  features: ["Historic architecture", "Chef's kitchen", "Wine cellar"],
                  description:
                    "This historic East Sacramento estate in the coveted Fabulous 40s neighborhood combines classic architecture with modern luxury amenities.",
                },
                {
                  id: "land-park-manor",
                  title: "Land Park Manor",
                  location: "Land Park",
                  price: "$2,950,000",
                  beds: 4,
                  baths: 4,
                  sqft: "4,200",
                  features: ["Park views", "Pool & spa", "Outdoor kitchen"],
                  description:
                    "Located in Sacramento's prestigious Land Park neighborhood, this elegant manor offers sophisticated living spaces and premium finishes throughout.",
                },
                {
                  id: "granite-bay-retreat",
                  title: "Granite Bay Retreat",
                  location: "Granite Bay",
                  price: "$5,750,000",
                  beds: 6,
                  baths: 7,
                  sqft: "8,200",
                  features: ["Folsom Lake views", "Private vineyard", "Home theater"],
                  description:
                    "This spectacular Granite Bay estate offers resort-style living with breathtaking views of Folsom Lake and the Sierra Nevada mountains.",
                },
              ].map((property, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3]">
                      <Image
                        src={`/placeholder.svg?height=600&width=800&text=${property.title.replace(
                          / /g,
                          "+",
                        )}+Sacramento`}
                        alt={`${property.title} - ${property.location} - Luxury Sacramento real estate property`}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-gold-500 text-white px-4 py-1 text-sm font-light">
                      {property.price}
                    </div>
                    <button
                      aria-label="Save property"
                      className="absolute top-4 left-4 bg-white/80 hover:bg-white text-gold-600 p-2 rounded-full transition-colors"
                    >
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="p-6 border border-t-0 border-gold-100 bg-white">
                    <h3 className="text-xl font-light tracking-wide text-gray-900 mb-2">{property.title}</h3>
                    <div className="flex items-center mb-4">
                      <MapPin className="h-4 w-4 text-gold-500 mr-1" />
                      <p className="text-gold-600 font-light">{property.location}</p>
                    </div>
                    <p className="font-light text-gray-600 mb-4">{property.description}</p>
                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{property.beds} Beds</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{property.baths} Baths</span>
                      </div>
                      <div className="flex items-center">
                        <Square className="h-4 w-4 mr-1 text-gray-400" />
                        <span>{property.sqft} Sq Ft</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gold-100">
                      <ul className="space-y-2">
                        {property.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <div className="mr-2 h-1 w-1 rounded-full bg-gold-400"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <Link
                        href={`/properties/${property.id}`}
                        className="inline-flex items-center text-gold-600 hover:text-gold-700 font-light"
                      >
                        View Property Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Button className="bg-transparent hover:bg-gold-50 text-gold-600 border border-gold-200 rounded-none px-8">
                Load More Properties
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Neighborhoods Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light tracking-wide text-gray-900 mb-4">
                Prestigious Sacramento Neighborhoods
              </h2>
              <p className="text-lg font-light text-gray-600 max-w-3xl mx-auto">
                Explore Sacramento's most coveted neighborhoods, each with its own distinctive character and charm.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "East Sacramento",
                  description:
                    "Known for the historic Fabulous 40s area with tree-lined streets and stately homes, East Sacramento offers upscale living close to downtown.",
                  properties: 24,
                },
                {
                  name: "Land Park",
                  description:
                    "This established neighborhood features elegant homes surrounding the beautiful William Land Park, with easy access to downtown Sacramento.",
                  properties: 18,
                },
                {
                  name: "Sierra Oaks Vista",
                  description:
                    "An exclusive enclave featuring custom luxury estates on generous lots with mature landscaping and proximity to the American River.",
                  properties: 15,
                },
                {
                  name: "Arden Oaks",
                  description:
                    "This prestigious neighborhood offers secluded luxury living with large estates on acre-plus lots shaded by heritage oak trees.",
                  properties: 12,
                },
                {
                  name: "Granite Bay",
                  description:
                    "Located near Folsom Lake, Granite Bay features spectacular custom estates with breathtaking views and resort-style amenities.",
                  properties: 21,
                },
                {
                  name: "Midtown",
                  description:
                    "For those seeking urban luxury, Midtown offers sophisticated penthouses and renovated historic homes in Sacramento's cultural center.",
                  properties: 9,
                },
              ].map((neighborhood, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3]">
                      <Image
                        src={`/placeholder.svg?height=600&width=800&text=${neighborhood.name.replace(
                          / /g,
                          "+",
                        )}+Sacramento`}
                        alt={`${neighborhood.name} - Luxury Sacramento neighborhood`}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button className="bg-gold-500 hover:bg-gold-600 text-white border-none rounded-none">
                        Explore Neighborhood
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 border border-t-0 border-gold-100 bg-white">
                    <h3 className="text-xl font-light tracking-wide text-gray-900 mb-2">{neighborhood.name}</h3>
                    <p className="font-light text-gray-600 mb-4">{neighborhood.description}</p>
                    <p className="text-gold-600 font-light">{neighborhood.properties} Luxury Properties Available</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="mx-auto max-w-screen-xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
              Looking to Sell Your Sacramento Luxury Property?
            </h2>
            <p className="text-xl font-light text-white/80 mb-10 max-w-3xl mx-auto">
              Our specialized marketing approach for luxury properties ensures maximum exposure to qualified buyers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gold-500 hover:bg-gold-600 text-white border-none rounded-none px-8 w-full sm:w-auto"
              >
                Request a Luxury Property Valuation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-none px-8 w-full sm:w-auto"
              >
                Learn About Our Luxury Marketing
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-6 lg:px-8 py-16">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="mr-2 h-10 w-10">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                    <path d="M20 0L40 20L35 25L20 10L5 25L0 20L20 0Z" fill="#D4AC5F" />
                    <path d="M10 25L20 15L30 25V40H10V25Z" fill="#D4AC5F" />
                  </svg>
                </div>
                <span className="text-xl font-light tracking-[0.2em] text-white">SELLYOURHOUSE</span>
              </div>
              <p className="font-light text-white/70 mb-6 max-w-md">
                Sacramento's premier real estate agency specializing in luxury properties and stress-free home selling
                solutions throughout California's capital region.
              </p>
              <p className="font-light text-white/70">DRE License #01234567</p>
            </div>
            <div>
              <h3 className="text-sm font-light tracking-[0.2em] text-gold-400 mb-6">QUICK LINKS</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="font-light text-white/70 hover:text-gold-300 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/properties" className="font-light text-white/70 hover:text-gold-300 transition-colors">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="font-light text-white/70 hover:text-gold-300 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="font-light text-white/70 hover:text-gold-300 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/calculator" className="font-light text-white/70 hover:text-gold-300 transition-colors">
                    Home Value Calculator
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-light tracking-[0.2em] text-gold-400 mb-6">SACRAMENTO AREAS</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="font-light text-white/70 hover:text-gold-300 transition-colors">
                    East Sacramento
                  </Link>
                </li>
                <li>
                  <Link href="#" className="font-light text-white/70 hover:text-gold-300 transition-colors">
                    Land Park
                  </Link>
                </li>
                <li>
                  <Link href="#" className="font-light text-white/70 hover:text-gold-300 transition-colors">
                    Midtown
                  </Link>
                </li>
                <li>
                  <Link href="#" className="font-light text-white/70 hover:text-gold-300 transition-colors">
                    Sierra Oaks Vista
                  </Link>
                </li>
                <li>
                  <Link href="#" className="font-light text-white/70 hover:text-gold-300 transition-colors">
                    Granite Bay
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm font-light text-white/50">
                &copy; {new Date().getFullYear()} SellYourHouse Sacramento. All rights reserved.
              </p>
              <div className="flex gap-8">
                <Link href="#" className="text-sm font-light text-white/50 hover:text-gold-300 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm font-light text-white/50 hover:text-gold-300 transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-sm font-light text-white/50 hover:text-gold-300 transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
