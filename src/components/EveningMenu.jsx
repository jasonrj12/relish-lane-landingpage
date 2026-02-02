import React from 'react'
import { MapPin, Flame, Globe } from 'lucide-react'

const EveningMenu = () => {
  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      text: 'Kerala Specialties',
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: 'Seoul Favorites',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      text: 'Mexican Fusion',
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero1.jpeg"
                  alt="Evening menu items"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Overlay features */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-around">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-2 text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm"
                    >
                      {feature.icon}
                      <span className="text-sm font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="section-title dark:text-white">
                Evening at Relish Lane: A Global Culinary Journey
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                From the spice-rich streets of Kerala to the bold kitchens of Seoul and 
                Mexico, our evening menu is a celebration of flavor. Whether you're 
                looking for a comforting classic or a daring new fusion, we have the 
                perfect plate waiting for you.
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-primary dark:border-accent pl-6">
                  <h3 className="text-2xl font-bold dark:text-white mb-2">Kerala Classics</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Experience authentic South Indian flavors with our traditional Kerala dishes, 
                    prepared with aromatic spices and fresh ingredients.
                  </p>
                </div>

                <div className="border-l-4 border-secondary dark:border-orange-400 pl-6">
                  <h3 className="text-2xl font-bold dark:text-white mb-2">Korean Delights</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Bold, jang-infused dishes from Seoul's vibrant food scene, featuring 
                    perfectly balanced flavors.
                  </p>
                </div>

                <div className="border-l-4 border-accent dark:border-yellow-400 pl-6">
                  <h3 className="text-2xl font-bold dark:text-white mb-2">Mexican Fusion</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Spicy, zesty, and full of character - our Mexican-inspired dishes bring 
                    the heat and the flavor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EveningMenu
