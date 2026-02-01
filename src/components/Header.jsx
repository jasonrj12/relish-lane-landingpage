import React, { useState, useEffect } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className={`transition-transform duration-300 group-hover:scale-110 ${
              isScrolled ? 'h-12' : 'h-14'
            }`}>
              <img 
                src="/images/logo.png" 
                alt="Relish Lane Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold font-serif transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Relish Lane
              </span>
              <span className={`text-xs font-light transition-colors duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                Multi Cuisine Takeaway
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-primary hover:bg-amber-50' 
                    : 'text-white hover:text-accent hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://order.relishlane.co.uk/" 
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-4 flex items-center space-x-2 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                isScrolled
                  ? 'bg-primary text-white hover:bg-secondary shadow-md'
                  : 'bg-white text-primary hover:bg-accent hover:text-white shadow-xl'
              }`}
            >
              <ShoppingBag size={18} />
              <span>Order Online</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-900 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 mt-6' : 'max-h-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-gray-100">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-gray-700 hover:text-primary hover:bg-amber-50 font-medium transition-all duration-300 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://order.relishlane.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center space-x-2 px-6 py-3.5 bg-primary text-white hover:bg-secondary font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ShoppingBag size={20} />
                <span>Order Online</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
