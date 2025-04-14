import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sacramento Real Estate Services | SellYourHouse | Stress-Free Home Selling",
  description:
    "Comprehensive Sacramento real estate services including luxury property marketing, stress-free traditional sales, direct cash offers, and personalized selling strategies.",
  keywords:
    "Sacramento real estate services, luxury property marketing Sacramento, cash home buyers Sacramento, stress-free home selling, Sacramento property valuation, real estate investment Sacramento",
  openGraph: {
    title: "Sacramento Real Estate Services | SellYourHouse",
    description:
      "Comprehensive Sacramento real estate services including luxury property marketing, stress-free traditional sales, and direct cash offers.",
    url: "https://sellyourhousesacramento.com/services",
    type: "website",
  },
}

export default function ServicesPage() {
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
              className="text-sm font-light tracking-wider text-gray-600 hover:text-gold-600 transition-colors"
            >
              PROPERTIES
            </Link>
            <Link
              href="/services"
              className="text-sm font-light tracking-wider text-gold-600 hover:text-gold-600 transition-colors"
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
              COMPREHENSIVE SACRAMENTO <span className="text-gold-300">REAL ESTATE</span> SERVICES
            </h1>
            <p className="text-xl font-light text-white/90 mb-10 max-w-3xl mx-auto">
              Tailored solutions for every Sacramento homeowner, from luxury marketing to stress-free sales.
            </p>
          </div>
          <div className="absolute inset-0 -z-10">
            <Image
              src="/placeholder.svg?height=800&width=1920&text=Sacramento+Real+Estate+Services"
              alt="Sacramento real estate services - luxury property marketing and stress-free home selling"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="h-px w-12 bg-gold-400"></div>
                <span className="mx-4 text-sm font-light tracking-[0.2em] text-gold-600">OUR SERVICES</span>
                <div className="h-px w-12 bg-gold-400"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 mb-6">
                Stress-Free Sacramento Real Estate Solutions
              </h2>
              <p className="text-lg font-light text-gray-600 max-w-3xl mx-auto">
                From traditional listings to direct cash offers, we provide tailored solutions for every Sacramento
                homeowner's unique situation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Luxury Property Marketing",
                  description:
                    "Sophisticated marketing strategies designed specifically for high-end Sacramento properties, including professional staging, cinematic videography, and targeted exposure to qualified buyers.",
                  icon: "✨",
                  link: "#luxury-marketing",
                },
                {
                  title: "Stress-Free Traditional Sales",
                  description:
                    "Our signature white-glove approach to the conventional selling process, featuring expert pricing, strategic marketing, skilled negotiation, and seamless transaction management.",
                  icon: "🏡",
                  link: "#traditional-sales",
                },
                {
                  title: "Direct Cash Offers",
                  description:
                    "When time is of the essence, our network of Sacramento investors can provide competitive cash offers with flexible closing timelines and no repairs or showings required.",
                  icon: "💰",
                  link: "#cash-offers",
                },
                {
                  title: "Investment Property Sales",
                  description:
                    "Specialized marketing and positioning of Sacramento income properties to attract serious investors, with comprehensive financial analysis and ROI projections.",
                  icon: "📈",
                  link: "#investment-properties",
                },
                {
                  title: "Relocation Assistance",
                  description:
                    "Comprehensive support for homeowners moving to or from the Sacramento region, including coordination with employers, area orientation, and seamless property transitions.",
                  icon: "🚚",
                  link: "#relocation",
                },
                {
                  title: "Property Valuation",
                  description:
                    "Detailed Sacramento market analysis utilizing proprietary data and comparative market insights to determine your home's optimal positioning and pricing strategy.",
                  icon: "📊",
                  link: "#valuation",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gold-100 hover:border-gold-300 transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="mb-6 text-3xl">{service.icon}</div>
                    <h3 className="text-xl font-light tracking-wide text-gray-900 mb-4">{service.title}</h3>
                    <p className="font-light text-gray-600 mb-6">{service.description}</p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-gold-600 font-light group-hover:text-gold-700 transition-colors"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Luxury Property Marketing */}
        <section id="luxury-marketing" className="py-24 bg-gray-50">
          <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center mb-6">
                  <div className="h-px w-12 bg-gold-400"></div>
                  <span className="ml-4 text-sm font-light tracking-[0.2em] text-gold-600">LUXURY MARKETING</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 mb-8">
                  Sophisticated Marketing for Sacramento's Finest Properties
                </h2>
                <p className="text-lg font-light leading-relaxed text-gray-600 mb-8">
                  Our luxury property marketing service is designed to showcase Sacramento's most exceptional homes to
                  qualified buyers locally, nationally, and internationally.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Professional Staging & Design",
                      description:
                        "Expert staging that highlights your property's unique features and appeals to luxury buyers.",
                    },
                    {
                      title: "Cinematic Videography & Photography",
                      description:
                        "Stunning visual content that captures the essence and lifestyle of your Sacramento property.",
                    },
                    {
                      title: "Targeted Luxury Buyer Network",
                      description:
                        "Direct marketing to our exclusive network of high-net-worth individuals and luxury agents.",
                    },
                    {
                      title: "Global Digital Marketing",
                      description:
                        "Sophisticated online campaigns targeting qualified buyers across premium platforms.",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gold-100 text-gold-600">
                          <Check className="h-4 w-4" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                        <p className="mt-1 font-light text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Button className="bg-gold-500 hover:bg-gold-600 text-white border-none rounded-none px-8">
                    Request Luxury Marketing Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] relative z-10">
                  <Image
                    src="/placeholder.svg?height=800&width=640&text=Luxury+Property+Marketing"
                    alt="Sacramento luxury property marketing - professional staging and photography"
                    width={640}
                    height={800}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="absolute top-10 -right-10 bottom-10 left-10 border border-gold-200 -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Traditional Sales */}
        <section id="traditional-sales" className="py-24 bg-white">
          <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="aspect-[4/5] relative z-10">
                  <Image
                    src="/placeholder.svg?height=800&width=640&text=Stress+Free+Home+Selling"
                    alt="Stress-free Sacramento home selling process with expert guidance"
                    width={640}
                    height={800}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="absolute top-10 -left-10 bottom-10 right-10 border border-gold-200 -z-10"></div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center mb-6">
                  <div className="h-px w-12 bg-gold-400"></div>
                  <span className="ml-4 text-sm font-light tracking-[0.2em] text-gold-600">TRADITIONAL SALES</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 mb-8">
                  Stress-Free Traditional Home Selling in Sacramento
                </h2>
                <p className="text-lg font-light leading-relaxed text-gray-600 mb-8">
                  Our signature approach transforms the conventional home selling process into a seamless, rewarding
                  experience for Sacramento homeowners.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Strategic Pricing & Positioning",
                      description:
                        "Data-driven pricing strategy based on Sacramento market trends and your property's unique features.",
                    },
                    {
                      title: "Comprehensive Marketing Plan",
                      description:
                        "Multi-channel marketing approach designed to maximize your property's exposure to qualified buyers.",
                    },
                    {
                      title: "Expert Negotiation",
                      description:
                        "Skilled negotiation to secure optimal terms and maximize your Sacramento property's value.",
                    },
                    {
                      title: "Seamless Transaction Management",
                      description:
                        "Dedicated coordination of all details from contract to closing for a stress-free experience.",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gold-100 text-gold-600">
                          <Check className="h-4 w-4" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                        <p className="mt-1 font-light text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Button className="bg-gold-500 hover:bg-gold-600 text-white border-none rounded-none px-8">
                    Schedule a Selling Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cash Offers */}
        <section id="cash-offers" className="py-24 bg-gray-50">
          <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center mb-6">
                  <div className="h-px w-12 bg-gold-400"></div>
                  <span className="ml-4 text-sm font-light tracking-[0.2em] text-gold-600">CASH OFFERS</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 mb-8">
                  Quick, Competitive Cash Offers for Sacramento Homes
                </h2>
                <p className="text-lg font-light leading-relaxed text-gray-600 mb-8">
                  When time is of the essence, our direct cash offer program provides Sacramento homeowners with a fast,
                  certain sale without the hassle of traditional listing.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Fast Closing Timeline",
                      description:
                        "Close on your Sacramento property in as little as 7 days or on your preferred timeline.",
                    },
                    {
                      title: "No Repairs or Renovations",
                      description: "Sell your Sacramento home as-is with no need for costly repairs or improvements.",
                    },
                    {
                      title: "No Showings or Open Houses",
                      description:
                        "Skip the inconvenience of preparing your home for multiple showings and open houses.",
                    },
                    {
                      title: "Guaranteed Sale",
                      description:
                        "Eliminate the uncertainty of buyer financing fall-through with our guaranteed cash purchase.",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gold-100 text-gold-600">
                          <Check className="h-4 w-4" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                        <p className="mt-1 font-light text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Button className="bg-gold-500 hover:bg-gold-600 text-white border-none rounded-none px-8">
                    Get Your Cash Offer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] relative z-10">
                  <Image
                    src="/placeholder.svg?height=800&width=640&text=Sacramento+Cash+Home+Buyers"
                    alt="Sacramento cash home buyers - quick and competitive offers"
                    width={640}
                    height={800}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="absolute top-10 -right-10 bottom-10 left-10 border border-gold-200 -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Comparison */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 mb-6">
                Which Sacramento Selling Option Is Right For You?
              </h2>
              <p className="text-lg font-light text-gray-600 max-w-3xl mx-auto">
                Compare our services to find the perfect solution for your unique Sacramento real estate needs.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-left font-light text-gray-600">Service Features</th>
                    <th className="p-4 text-center bg-gold-50 font-medium text-gold-800">Luxury Marketing</th>
                    <th className="p-4 text-center bg-gray-50 font-medium text-gray-800">Traditional Sale</th>
                    <th className="p-4 text-center bg-gray-50 font-medium text-gray-800">Cash Offer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-light text-gray-900">Typical Timeline</td>
                    <td className="p-4 text-center bg-gold-50 font-light">30-90 days</td>
                    <td className="p-4 text-center bg-gray-50 font-light">30-60 days</td>
                    <td className="p-4 text-center bg-gray-50 font-light">7-14 days</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-light text-gray-900">Preparation Required</td>
                    <td className="p-4 text-center bg-gold-50 font-light">Professional staging</td>
                    <td className="p-4 text-center bg-gray-50 font-light">Basic staging</td>
                    <td className="p-4 text-center bg-gray-50 font-light">None</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-light text-gray-900">Showings</td>
                    <td className="p-4 text-center bg-gold-50 font-light">Private appointments</td>
                    <td className="p-4 text-center bg-gray-50 font-light">Multiple showings</td>
                    <td className="p-4 text-center bg-gray-50 font-light">Single viewing</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-light text-gray-900">Repairs Needed</td>
                    <td className="p-4 text-center bg-gold-50 font-light">Minimal</td>
                    <td className="p-4 text-center bg-gray-50 font-light">Negotiable</td>
                    <td className="p-4 text-center bg-gray-50 font-light">None</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-light text-gray-900">Marketing Exposure</td>
                    <td className="p-4 text-center bg-gold-50 font-light">Premium global</td>
                    <td className="p-4 text-center bg-gray-50 font-light">Standard local</td>
                    <td className="p-4 text-center bg-gray-50 font-light">None</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-light text-gray-900">Price Potential</td>
                    <td className="p-4 text-center bg-gold-50 font-light">Maximum</td>
                    <td className="p-4 text-center bg-gray-50 font-light">Market value</td>
                    <td className="p-4 text-center bg-gray-50 font-light">Below market</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-4 font-light text-gray-900">Ideal For</td>
                    <td className="p-4 text-center bg-gold-50 font-light">Luxury properties</td>
                    <td className="p-4 text-center bg-gray-50 font-light">Most homeowners</td>
                    <td className="p-4 text-center bg-gray-50 font-light">Quick sales</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="mx-auto max-w-screen-xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
              Ready to Discuss Your Sacramento Real Estate Needs?
            </h2>
            <p className="text-xl font-light text-white/80 mb-10 max-w-3xl mx-auto">
              Our team of Sacramento real estate experts is ready to help you determine the best approach for your
              specific situation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gold-500 hover:bg-gold-600 text-white border-none rounded-none px-8 w-full sm:w-auto"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-none px-8 w-full sm:w-auto"
              >
                Learn More About Our Process
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
                Sacramento's premier real estate agency specializing in stress-free home selling solutions for
                homeowners throughout California's capital region.
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
