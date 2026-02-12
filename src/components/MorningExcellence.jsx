import React from 'react'
import { Coffee, Croissant, Salad, Award, Sun } from 'lucide-react'

const MorningExcellence = () => {
  const offerings = [
    {
      icon: <Croissant className="w-8 h-8" />,
      title: 'Vietnamese Banh Mi',
      description: 'Crisp, authentic crunch with savory Chicken or Tofu',
    },
    {
      icon: <Salad className="w-8 h-8" />,
      title: 'Tricolour Quinoa Salad',
      description: 'Nutrient-packed and bursting with fresh flavors',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Hearty Burritos',
      description: 'Hearty comfort wrapped to perfection',
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Chicken Curries',
      description: 'Fragrant Lime Leaf or bold Madras spices',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Morning menu highlight callout */}
          <div className="mb-12 relative p-8 md:p-10 rounded-2xl bg-gradient-to-r from-amber-200 via-amber-100 to-orange-100 dark:from-amber-800/50 dark:via-amber-900/40 dark:to-amber-800/50 border-2 border-amber-500 dark:border-amber-500 shadow-xl ring-2 ring-amber-400/50 dark:ring-amber-500/30 text-center overflow-hidden">
            <div className="absolute top-4 left-4 text-amber-500/30 dark:text-amber-400/20" aria-hidden="true">
              <Sun className="w-16 h-16" />
            </div>
            <div className="absolute top-4 right-4 text-amber-500/30 dark:text-amber-400/20" aria-hidden="true">
              <Coffee className="w-16 h-16" />
            </div>
            <div className="relative">
              <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-amber-500 dark:bg-amber-600 text-white text-sm font-bold uppercase tracking-wider">
                Morning menu
              </span>
              <p className="text-xl md:text-2xl text-amber-950 dark:text-amber-50 font-semibold leading-relaxed max-w-3xl mx-auto">
                Now serving breakfast daily from 7:00 AM. Fresh coffee, hot plates, and the perfect vibes to start your day right.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="section-title dark:text-white">Morning Excellence</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Expand your horizons with our diverse range of global flavors. From the crisp, 
                authentic crunch of our Vietnamese-style Banh Mi (available with savory Chicken 
                or Tofu) and our nutrient-packed Tricolour Quinoa Salad, to our hearty, 
                rice-filled Burritos and aromatic Chicken Curries - featuring fragrant Lime Leaf 
                or bold Madras spices - we have the perfect bite.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {offerings.map((item, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-primary dark:text-accent mb-3">{item.icon}</div>
                    <h3 className="text-xl font-bold dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="order-first md:order-last">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/img2.png"
                  alt="Morning menu items"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MorningExcellence
