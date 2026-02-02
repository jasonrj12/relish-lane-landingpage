import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/img1.webp"
                  alt="Delicious food at Relish Lane"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h2 className="section-title dark:text-white">
                Delight in Fresh, Hand-Crafted Flavours at Relish Lane
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  At Relish Lane, we bring together a selection of comforting favourites 
                  crafted with bold flavours and quality ingredients. Enjoy steamed or fried 
                  momos packed with authentic taste, aromatic biryani prepared with fragrant 
                  spices, freshly grilled kebabs, and rich, smooth coffee brewed to perfection.
                </p>
                <p>
                  Whether you're after something hearty, something spicy, or something warm 
                  and soothing, we've got the perfect choice for every craving.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex-1 min-w-[150px] text-center p-6 bg-amber-50 dark:bg-gray-800 rounded-lg transition-colors duration-300">
                  <div className="text-4xl font-bold text-primary dark:text-accent mb-2">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Cuisines</div>
                </div>
                <div className="flex-1 min-w-[150px] text-center p-6 bg-amber-50 dark:bg-gray-800 rounded-lg transition-colors duration-300">
                  <div className="text-4xl font-bold text-primary dark:text-accent mb-2">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Menu Items</div>
                </div>
                <div className="flex-1 min-w-[150px] text-center p-6 bg-amber-50 dark:bg-gray-800 rounded-lg transition-colors duration-300">
                  <div className="text-4xl font-bold text-primary dark:text-accent mb-2">5★</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
