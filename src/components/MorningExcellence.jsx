import React from 'react'
import { Coffee, Croissant, Salad, Award } from 'lucide-react'

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
      description: 'Rice-filled comfort wrapped to perfection',
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Chicken Curries',
      description: 'Fragrant Lime Leaf or bold Madras spices',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="section-title">Morning Excellence</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Expand your horizons with our diverse range of global flavors. From the crisp, 
                authentic crunch of our Vietnamese-style Banh Mi (available with savory Chicken 
                or Tofu) and our nutrient-packed Tricolour Quinoa Salad, to our hearty, 
                rice-filled Burritos and aromatic Chicken Curries—featuring fragrant Lime Leaf 
                or bold Madras spices—we have the perfect bite.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {offerings.map((item, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="text-primary mb-3">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
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
