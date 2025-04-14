import Link from "next/link"
import { ArrowLeft, Calculator, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function CalculatorPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-gold-100 bg-white">
        <div className="mx-auto flex h-24 max-w-screen-xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-xl font-light tracking-[0.2em] text-gray-900">
            <ArrowLeft className="h-5 w-5" />
            SELLYOURHOUSE
          </Link>
          <div className="flex items-center gap-2 text-gold-600">
            <Calculator className="h-5 w-5" />
            <span className="text-sm font-light tracking-wider">HOME VALUE CALCULATOR</span>
          </div>
        </div>
      </header>

      <main className="flex-1 py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-light tracking-wide text-gray-900 md:text-4xl mb-4">
              Sacramento Home Value Calculator
            </h1>
            <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto">
              Get an accurate estimate of your Sacramento property's current market value in just a few minutes with our
              free calculator tool.
            </p>
          </div>

          <div className="border border-gold-100 bg-white p-8 shadow-sm">
            <form className="space-y-8">
              <div>
                <label htmlFor="address" className="block text-sm font-light tracking-[0.2em] text-gold-600 mb-2">
                  PROPERTY ADDRESS
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full border-0 border-b border-gray-200 bg-transparent py-2 font-light text-gray-900 focus:border-gold-400 focus:outline-none focus:ring-0"
                  placeholder="Enter your Sacramento property address"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="sqft" className="block text-sm font-light tracking-[0.2em] text-gold-600 mb-2">
                    SQUARE FOOTAGE
                  </label>
                  <input
                    type="number"
                    id="sqft"
                    className="w-full border-0 border-b border-gray-200 bg-transparent py-2 font-light text-gray-900 focus:border-gold-400 focus:outline-none focus:ring-0"
                    placeholder="e.g. 1,500"
                  />
                </div>
                <div>
                  <label htmlFor="bedrooms" className="block text-sm font-light tracking-[0.2em] text-gold-600 mb-2">
                    BEDROOMS
                  </label>
                  <select
                    id="bedrooms"
                    className="w-full border-0 border-b border-gray-200 bg-transparent py-2 font-light text-gray-900 focus:border-gold-400 focus:outline-none focus:ring-0"
                  >
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5+</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="bathrooms" className="block text-sm font-light tracking-[0.2em] text-gold-600 mb-2">
                    BATHROOMS
                  </label>
                  <select
                    id="bathrooms"
                    className="w-full border-0 border-b border-gray-200 bg-transparent py-2 font-light text-gray-900 focus:border-gold-400 focus:outline-none focus:ring-0"
                  >
                    <option value="">Select</option>
                    <option value="1">1</option>
                    <option value="1.5">1.5</option>
                    <option value="2">2</option>
                    <option value="2.5">2.5</option>
                    <option value="3">3</option>
                    <option value="3.5">3.5+</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="property-type"
                    className="block text-sm font-light tracking-[0.2em] text-gold-600 mb-2"
                  >
                    PROPERTY TYPE
                  </label>
                  <select
                    id="property-type"
                    className="w-full border-0 border-b border-gray-200 bg-transparent py-2 font-light text-gray-900 focus:border-gold-400 focus:outline-none focus:ring-0"
                  >
                    <option value="">Select</option>
                    <option value="single-family">Single Family Home</option>
                    <option value="condo">Condo/Townhouse</option>
                    <option value="multi-family">Multi-Family</option>
                    <option value="luxury">Luxury Estate</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="year-built" className="block text-sm font-light tracking-[0.2em] text-gold-600 mb-2">
                    YEAR BUILT
                  </label>
                  <input
                    type="number"
                    id="year-built"
                    className="w-full border-0 border-b border-gray-200 bg-transparent py-2 font-light text-gray-900 focus:border-gold-400 focus:outline-none focus:ring-0"
                    placeholder="e.g. 1995"
                  />
                </div>
                <div>
                  <label htmlFor="condition" className="block text-sm font-light tracking-[0.2em] text-gold-600 mb-2">
                    PROPERTY CONDITION
                  </label>
                  <select
                    id="condition"
                    className="w-full border-0 border-b border-gray-200 bg-transparent py-2 font-light text-gray-900 focus:border-gold-400 focus:outline-none focus:ring-0"
                  >
                    <option value="">Select</option>
                    <option value="excellent">Excellent - Recently Renovated</option>
                    <option value="good">Good - Well Maintained</option>
                    <option value="fair">Fair - Some Updates Needed</option>
                    <option value="poor">Poor - Needs Significant Work</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="neighborhood" className="block text-sm font-light tracking-[0.2em] text-gold-600 mb-2">
                  SACRAMENTO NEIGHBORHOOD
                </label>
                <select
                  id="neighborhood"
                  className="w-full border-0 border-b border-gray-200 bg-transparent py-2 font-light text-gray-900 focus:border-gold-400 focus:outline-none focus:ring-0"
                >
                  <option value="">Select your neighborhood</option>
                  <option value="east-sac">East Sacramento</option>
                  <option value="land-park">Land Park</option>
                  <option value="midtown">Midtown</option>
                  <option value="sierra-oaks">Sierra Oaks Vista</option>
                  <option value="arden-oaks">Arden Oaks</option>
                  <option value="granite-bay">Granite Bay</option>
                  <option value="natomas">Natomas</option>
                  <option value="elk-grove">Elk Grove</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="bg-gold-500 hover:bg-gold-600 text-white border-none rounded-none px-8 w-full"
                >
                  Calculate My Sacramento Home Value
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm font-light text-gray-600 max-w-2xl mx-auto">
              This calculator provides an estimate based on recent Sacramento market data and comparable properties. For
              a more accurate valuation and personalized selling strategy,{" "}
              <Link href="/#contact" className="text-gold-600 hover:underline">
                contact our team of Sacramento real estate experts
              </Link>{" "}
              for a complimentary consultation.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm font-light text-white/50">
              &copy; {new Date().getFullYear()} SellYourHouse Sacramento. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link href="/" className="text-sm font-light text-white/50 hover:text-gold-300 transition-colors">
                Back to Home
              </Link>
              <Link href="#" className="text-sm font-light text-white/50 hover:text-gold-300 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
