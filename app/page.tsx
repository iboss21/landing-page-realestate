import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone, Mail, MapPin, Star, Check, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-gold-100 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-24 max-w-screen-xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center">
            <div className="mr-2 h-10 w-10">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <path d="M20 0L40 20L35 25L20 10L5 25L0 20L20 0Z" fill="#D4AC5F" />
                <path d="M10 25L20 15L30 25V40H10V25Z" fill="#D4AC5F" />
              </svg>
            </div>
            <span className="text-xl font-light tracking-[0.2em] text-gray-900">SELLYOURHOUSE</span>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="#properties"
              className="text-sm font-light tracking-wider text-gray-600 hover:text-gold-600 transition-colors"
            >
              PROPERTIES
            </Link>
            <Link
              href="#services"
              className="text-sm font-light tracking-wider text-gray-600 hover:text-gold-600 transition-colors"
            >
              SERVICES
            </Link>
            <Link
              href="#about"
              className="text-sm font-light tracking-wider text-gray-600 hover:text-gold-600 transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-light tracking-wider text-gray-600 hover:text-gold-600 transition-colors"
            >
              TESTIMONIALS
            </Link>
            <Link
              href="#contact"
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
        <section className="relative h-screen min-h-[600px] max-h-[800px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
          <div className="relative z-20 h-full flex flex-col justify-center">
            <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center mb-6">
                  <div className="h-px w-12 bg-gold-400"></div>
                  <span className="ml-4 text-sm font-light tracking-[0.2em] text-gold-300">+1 (916) 526-3450</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-white leading-tight mb-6">
                  UNLOCK THE DOOR TO <span className="text-gold-300">STRESS-FREE</span> HOME SELLING IN SACRAMENTO
                </h1>
                <p className="text-xl font-light text-white/90 mb-10 max-w-2xl">
                  Welcome to Sacramento's premier luxury real estate agency. We transform the complex selling process
                  into a seamless, rewarding experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gold-500 hover:bg-gold-600 text-white border-none rounded-none px-8 w-full sm:w-auto"
                  >
                    Get Your Free Valuation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-none px-8 w-full sm:w-auto"
                  >
                    Explore Our Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/placeholder.svg?height=1080&width=1920&text=Luxury+Sacramento+Estate"
            alt="Luxury Sacramento real estate - elegant home exterior with professional landscaping"
            fill
            className="object-cover object-center"
            priority
          />
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white border-b border-gold-100">
          <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "$1.2B+", label: "In Sacramento Property Sales" },
                { value: "2,500+", label: "Satisfied Homeowners" },
                { value: "15+", label: "Years in Sacramento Real Estate" },
                { value: "98%", label: "Client Satisfaction Rate" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-light text-gold-600 mb-2">{stat.value}</p>
                  <p className="text-sm font-light text-gray-600 tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="about" className="py-24 bg-white">
          <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center mb-6">
                  <div className="h-px w-12 bg-gold-400"></div>
                  <span className="ml-4 text-sm font-light tracking-[0.2em] text-gold-600">WHY CHOOSE US</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 mb-8">
                  Sacramento's Most Trusted Luxury Real Estate Agency
                </h2>
                <p className="text-lg font-light leading-relaxed text-gray-600 mb-8">
                  At SellYourHouse, we've redefined the Sacramento real estate experience. Our approach combines
                  white-glove service with deep market expertise to deliver exceptional results for discerning clients.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Stress-Free Process",
                      description:
                        "Our proprietary selling system eliminates the typical stresses of real estate transactions.",
                    },
                    {
                      title: "Unmatched Market Knowledge",
                      description:
                        "With over 15 years in Sacramento real estate, we leverage insider insights for your advantage.",
                    },
                    {
                      title: "Personalized Strategy",
                      description:
                        "Every property receives a custom marketing plan tailored to its unique features and target buyers.",
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
                  <Button className="bg-transparent hover:bg-gold-50 text-gold-600 border border-gold-200 rounded-none px-8">
                    Learn More About Our Approach
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] relative z-10">
                  <Image
                    src="/placeholder.svg?height=800&width=640&text=Luxury+Real+Estate+Team"
                    alt="Sacramento luxury real estate experts providing personalized service"
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

        {/* Services Section */}
        <section id="services" className="py-24 bg-gray-50">
          <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="h-px w-12 bg-gold-400"></div>
                <span className="mx-4 text-sm font-light tracking-[0.2em] text-gold-600">OUR SERVICES</span>
                <div className="h-px w-12 bg-gold-400"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 mb-6">
                Comprehensive Sacramento Real Estate Solutions
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
                  link: "#",
                },
                {
                  title: "Stress-Free Traditional Sales",
                  description:
                    "Our signature white-glove approach to the conventional selling process, featuring expert pricing, strategic marketing, skilled negotiation, and seamless transaction management.",
                  icon: "🏡",
                  link: "#",
                },
                {
                  title: "Direct Cash Offers",
                  description:
                    "When time is of the essence, our network of Sacramento investors can provide competitive cash offers with flexible closing timelines and no repairs or showings required.",
                  icon: "💰",
                  link: "#",
                },
                {
                  title: "Investment Property Sales",
                  description:
                    "Specialized marketing and positioning of Sacramento income properties to attract serious investors, with comprehensive financial analysis and ROI projections.",
                  icon: "📈",
                  link: "#",
                },
                {
                  title: "Relocation Assistance",
                  description:
                    "Comprehensive support for homeowners moving to or from the Sacramento region, including coordination with employers, area orientation, and seamless property transitions.",
                  icon: "🚚",
                  link: "#",
                },
                {
                  title: "Property Valuation",
                  description:
                    "Detailed Sacramento market analysis utilizing proprietary data and comparative market insights to determine your home's optimal positioning and pricing strategy.",
                  icon: "📊",
                  link: "#",
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
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section id="properties" className="py-24 bg-white">
          <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <div className="inline-flex items-center mb-6">
                  <div className="h-px w-12 bg-gold-400"></div>
                  <span className="ml-4 text-sm font-light tracking-[0.2em] text-gold-600">FEATURED LISTINGS</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900">
                  Exceptional Sacramento Properties
                </h2>
              </div>
              <div className="mt-6 md:mt-0">
                <Button className="bg-transparent hover:bg-gold-50 text-gold-600 border border-gold-200 rounded-none px-8">
                  View All Properties
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "The Grandview Estate",
                  location: "East Sacramento",
                  price: "$4,850,000",
                  beds: 6,
                  baths: 7.5,
                  sqft: "8,500",
                  features: ["Private 2-acre grounds", "Wine cellar", "Infinity pool"],
                },
                {
                  title: "Riverside Mansion",
                  location: "American River",
                  price: "$6,200,000",
                  beds: 5,
                  baths: 6,
                  sqft: "7,200",
                  features: ["200 feet of river frontage", "Private dock", "Guest house"],
                },
                {
                  title: "Sierra Oaks Villa",
                  location: "Sierra Oaks Vista",
                  price: "$3,975,000",
                  beds: 4,
                  baths: 5.5,
                  sqft: "5,800",
                  features: ["Gated community", "Tennis court", "Smart home"],
                },
              ].map((property, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3]">
                      <Image
                        src={`/placeholder.svg?height=600&width=800&text=Luxury+Sacramento+Property+${index + 1}`}
                        alt={`${property.title} - ${property.location} - Luxury Sacramento real estate`}
                        width={800}
                        height={600}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-gold-500 text-white px-4 py-1 text-sm font-light">
                      {property.price}
                    </div>
                  </div>
                  <div className="p-6 border border-t-0 border-gold-100 bg-white">
                    <h3 className="text-xl font-light tracking-wide text-gray-900 mb-2">{property.title}</h3>
                    <p className="text-gold-600 font-light mb-4">{property.location}</p>
                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                      <span>{property.beds} Beds</span>
                      <span>{property.baths} Baths</span>
                      <span>{property.sqft} Sq Ft</span>
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="h-px w-12 bg-gold-400"></div>
                <span className="mx-4 text-sm font-light tracking-[0.2em] text-gold-600">OUR PROCESS</span>
                <div className="h-px w-12 bg-gold-400"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 mb-6">
                The Stress-Free Sacramento Selling Experience
              </h2>
              <p className="text-lg font-light text-gray-600 max-w-3xl mx-auto">
                Our signature process transforms the complex journey of selling your Sacramento home into a seamless,
                rewarding experience
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gold-200 md:block hidden"></div>

              <div className="space-y-24">
                {[
                  {
                    step: "01",
                    title: "Personalized Consultation",
                    description:
                      "We begin with understanding your unique Sacramento property and specific goals to create a tailored selling strategy.",
                  },
                  {
                    step: "02",
                    title: "Strategic Preparation",
                    description:
                      "Our team optimizes your property's presentation with professional staging, photography, and pre-marketing preparations.",
                  },
                  {
                    step: "03",
                    title: "Premium Marketing Exposure",
                    description:
                      "Your Sacramento property receives sophisticated marketing through our exclusive channels and targeted luxury networks.",
                  },
                  {
                    step: "04",
                    title: "Expert Negotiation",
                    description:
                      "We leverage our deep Sacramento market knowledge to secure optimal terms and maximize your property's value.",
                  },
                  {
                    step: "05",
                    title: "Seamless Closing",
                    description:
                      "Our transaction specialists handle every detail to ensure a smooth, stress-free closing process and successful transition.",
                  },
                ].map((step, index) => (
                  <div key={index} className="relative">
                    <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-gold-200 bg-white text-gold-600 font-light">
                        {step.step}
                      </div>
                    </div>
                    <div className={`md:w-5/12 ${index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                      <div className="rounded-sm border border-gold-100 bg-white p-8">
                        <div className="md:hidden mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-50 text-gold-600 font-light">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-light tracking-wide text-gray-900 mb-4">{step.title}</h3>
                        <p className="font-light text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 bg-white">
          <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="h-px w-12 bg-gold-400"></div>
                <span className="mx-4 text-sm font-light tracking-[0.2em] text-gold-600">CLIENT EXPERIENCES</span>
                <div className="h-px w-12 bg-gold-400"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 mb-6">
                What Sacramento Homeowners Say
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "SellYourHouse transformed what I expected to be a stressful process into a truly seamless experience. Their market knowledge and personalized approach resulted in multiple offers and a sale price that exceeded my expectations by over $100,000.",
                  author: "Jonathan Reynolds",
                  property: "Sold in Sierra Oaks Vista for $4.2M",
                  rating: 5,
                },
                {
                  quote:
                    "After trying to sell with another Sacramento agency for months, SellYourHouse sold my luxury property in just 9 days at full asking price. Their marketing strategy and negotiation skills are unmatched in the Sacramento market.",
                  author: "Maria Sanchez",
                  property: "Sold in East Sacramento for $2.8M",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div key={index} className="relative rounded-sm border border-gold-100 bg-white p-8 md:p-10">
                  <div className="absolute -top-4 -left-4 text-6xl text-gold-200">"</div>
                  <div className="relative z-10">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-gold-400 fill-gold-400" />
                      ))}
                    </div>
                    <p className="text-lg font-light italic leading-relaxed text-gray-700 mb-6">{testimonial.quote}</p>
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.author}</p>
                      <p className="text-gold-600">{testimonial.property}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="mx-auto max-w-screen-xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6">
              Ready for a <span className="text-gold-300">Stress-Free</span> Sacramento Home Sale?
            </h2>
            <p className="text-xl font-light text-white/80 mb-10 max-w-3xl mx-auto">
              Discover how our proven process can help you sell your Sacramento property for maximum value with minimum
              hassle.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gold-500 hover:bg-gold-600 text-white border-none rounded-none px-8 w-full sm:w-auto"
              >
                Get Your Free Home Valuation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-none px-8 w-full sm:w-auto"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="mx-auto max-w-screen-xl px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <div className="inline-flex items-center mb-6">
                  <div className="h-px w-12 bg-gold-400"></div>
                  <span className="ml-4 text-sm font-light tracking-[0.2em] text-gold-600">CONTACT US</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-gray-900 mb-8">
                  Unlock Stress-Free Home Selling Today
                </h2>
                <p className="text-lg font-light leading-relaxed text-gray-600 mb-10">
                  Whether you're looking to sell your luxury property or need a quick, hassle-free sale, our team of
                  Sacramento real estate experts is ready to help you achieve your goals.
                </p>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <Phone className="mr-4 h-5 w-5 text-gold-600" />
                    <div>
                      <p className="text-sm font-light tracking-[0.2em] text-gold-600 mb-2">CALL US</p>
                      <p className="font-light text-gray-900 text-lg">+1 (916) 526-3450</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="mr-4 h-5 w-5 text-gold-600" />
                    <div>
                      <p className="text-sm font-light tracking-[0.2em] text-gold-600 mb-2">EMAIL</p>
                      <p className="font-light text-gray-900 text-lg">info@sellyourhousesacramento.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="mr-4 h-5 w-5 text-gold-600" />
                    <div>
                      <p className="text-sm font-light tracking-[0.2em] text-gold-600 mb-2">SACRAMENTO OFFICE</p>
                      <p className="font-light text-gray-900 text-lg">1234 Capitol Avenue, Sacramento, CA 95814</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-gold-100 bg-white p-8">
                <h3 className="text-2xl font-light text-gray-900 mb-6">Get Your Stress-Free Selling Plan</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-light tracking-[0.2em] text-gold-600 mb-2">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full border-0 border-b border-gray-200 bg-transparent py-2 font-light text-gray-900 focus:border-gold-400 focus:outline-none focus:ring-0"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-light tracking-[0.2em] text-gold-600 mb-2">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full border-0 border-b border-gray-200 bg-transparent py-2 font-light text-gray-900 focus:border-gold-400 focus:outline-none focus:ring-0"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-light tracking-[0.2em] text-gold-600 mb-2">
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full border-0 border-b border-gray-200 bg-transparent py-2 font-light text-gray-900 focus:border-gold-400 focus:outline-none focus:ring-0"
                        placeholder="Your phone"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="property" className="block text-sm font-light tracking-[0.2em] text-gold-600 mb-2">
                      PROPERTY ADDRESS
                    </label>
                    <input
                      type="text"
                      id="property"
                      className="w-full border-0 border-b border-gray-200 bg-transparent py-2 font-light text-gray-900 focus:border-gold-400 focus:outline-none focus:ring-0"
                      placeholder="Property address (optional)"
                    />
                  </div>
                  <div>
                    <label htmlFor="timeframe" className="block text-sm font-light tracking-[0.2em] text-gold-600 mb-2">
                      SELLING TIMEFRAME
                    </label>
                    <select
                      id="timeframe"
                      className="w-full border-0 border-b border-gray-200 bg-transparent py-2 font-light text-gray-900 focus:border-gold-400 focus:outline-none focus:ring-0"
                    >
                      <option value="">Select your timeframe</option>
                      <option value="immediate">Immediately</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6-12months">6-12 months</option>
                      <option value="exploring">Just exploring options</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-light tracking-[0.2em] text-gold-600 mb-2">
                      YOUR MESSAGE
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full border-0 border-b border-gray-200 bg-transparent py-2 font-light text-gray-900 focus:border-gold-400 focus:outline-none focus:ring-0"
                      placeholder="Tell us about your property and selling goals"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="bg-gold-500 hover:bg-gold-600 text-white border-none rounded-none px-8 w-full"
                  >
                    Get Your Stress-Free Selling Plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
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
                  <Link href="#" className="font-light text-white/70 hover:text-gold-300 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#properties" className="font-light text-white/70 hover:text-gold-300 transition-colors">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="font-light text-white/70 hover:text-gold-300 transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="font-light text-white/70 hover:text-gold-300 transition-colors">
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

      {/* Cookie Consent Banner */}
      <div className="fixed bottom-4 right-4 z-50 max-w-md rounded-sm border border-gold-100 bg-white p-6 shadow-lg">
        <h3 className="text-lg font-medium text-gray-900 mb-2">This website uses cookies.</h3>
        <p className="text-sm font-light text-gray-600 mb-4">
          We use cookies to analyze website traffic and optimize your website experience. By accepting our use of
          cookies, your data will be aggregated with all other user data.
        </p>
        <div className="flex gap-4">
          <Button variant="outline" className="border-gray-200 text-gray-600 hover:bg-gray-50 rounded-none">
            Decline
          </Button>
          <Button className="bg-gold-500 hover:bg-gold-600 text-white border-none rounded-none">Accept</Button>
        </div>
      </div>
    </div>
  )
}
