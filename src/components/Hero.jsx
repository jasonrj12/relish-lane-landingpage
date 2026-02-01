import React from 'react'
import { ShoppingBag, ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(/images/Header.webp)',
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 text-center text-white z-10">
        <div className="max-w-5xl mx-auto">
          {/* Small intro text */}
          <div className="animate-fadeInUp mb-4">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/30"> 
              <span className="text-sm font-medium tracking-wider uppercase">Welcome to</span>
            </div>
          </div>

          {/* Main heading with gradient */}
          <h1 className="mb-6 animate-slideInLeft">
            <span className="block text-4xl md:text-6xl lg:text-8xl font-bold mb-2 drop-shadow-2xl" 
                  style={{ 
                    textShadow: '0 0 40px rgba(255, 140, 0, 0.3), 0 0 80px rgba(255, 140, 0, 0.2)',
                    lineHeight: '1.1'
                  }}>
              Relish Lane
            </span>
            <span className="block text-3xl md:text-5xl lg:text-6xl font-extrabold gradient-text drop-shadow-xl tracking-tight">
              Where Flavours Meet Tradition
            </span>
          </h1>

          {/* Subtitle with unique styling */}
          <div className="animate-slideInRight mb-10">
            <p className="text-lg md:text-2xl lg:text-3xl font-light tracking-wide" 
               style={{ textShadow: '2px 2px 20px rgba(0, 0, 0, 0.8)' }}>
              Authentic <span className="font-semibold text-accent">Multi Cuisine</span> Takeaway
            </p>
          </div>

          {/* CTA Button with modern styling */}
          <div className="animate-scaleIn">
            <a 
              href="https://order.relishlane.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-accent to-secondary hover:from-secondary hover:to-accent text-white font-bold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-accent/50"
            >
              <ShoppingBag size={22} className="group-hover:rotate-12 transition-transform" />
              <span className="tracking-wide">Order Online Now</span>
              <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Modern scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 backdrop-blur-sm">
            <div className="w-1.5 h-3 bg-white rounded-full"></div>
          </div>
          <span className="text-xs text-white/70 tracking-widest">SCROLL</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
