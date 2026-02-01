import React from 'react'

const ElevatedEssentials = () => {
  return (
    <section 
      id="menu"
      className="relative py-32 bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/images/Background.webp)',
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 text-center text-white">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          Elevated Essentials
        </h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
          Discover our kitchen's masterpieces and cellar's finest.
        </p>
      </div>
    </section>
  )
}

export default ElevatedEssentials
