import React, { useState } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const foodImages = [
    {
      src: '/images/food1.jpeg',
      alt: 'Delicious dish from Relish Lane',
      size: 'tall', // Special sizing for bento layout
    },
    {
      src: '/images/food2.jpeg',
      alt: 'Fresh cuisine at Relish Lane',
      size: 'normal',
    },
    {
      src: '/images/food3.jpeg',
      alt: 'Authentic multi-cuisine food',
      size: 'wide',
    },
    {
      src: '/images/food4.jpeg',
      alt: 'Hand-crafted flavors',
      size: 'normal',
    },
    {
      src: '/images/food5.jpeg',
      alt: 'Specialty dishes',
      size: 'big',
    },
    {
      src: '/images/food6.jpeg',
      alt: 'Gourmet takeaway food',
      size: 'normal',
    },
    {
      src: '/images/food7.jpeg',
      alt: 'Traditional recipes',
      size: 'normal',
    },
    {
      src: '/images/food8.jpeg',
      alt: 'Fresh ingredients',
      size: 'wide',
    },
    {
      src: '/images/food9.jpeg',
      alt: 'Quality cuisine',
      size: 'normal',
    },
    {
      src: '/images/food10.jpeg',
      alt: 'Relish Lane specialties',
      size: 'normal',
    },
  ]

  // Size classes for bento box layout
  const getSizeClass = (size) => {
    switch (size) {
      case 'big':
        return 'md:col-span-2 md:row-span-2'
      case 'wide':
        return 'md:col-span-2'
      case 'tall':
        return 'md:row-span-2'
      default:
        return ''
    }
  }

  return (
    <section className="py-16 px-4 bg-gray-900 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-amber-600/20 text-amber-400 rounded-full text-sm font-poppins font-semibold mb-4">
            VISUAL FEAST
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-cormorant">
            Taste Through Your Eyes
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-poppins">
            Every dish tells a story. Explore our culinary masterpieces crafted with passion and served with perfection.
          </p>
        </div>

        {/* Bento Box Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {foodImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${getSizeClass(
                image.size
              )}`}
            >
              {/* Image with Ken Burns effect */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                loading="lazy"
              />

              {/* Gradient Overlay with Border Animation */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500 transition-all duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors duration-200 z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="max-w-5xl w-full animate-scaleIn">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-center text-white text-lg font-poppins mt-6">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
