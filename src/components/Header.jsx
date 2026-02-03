import React, { useState, useEffect } from 'react'
import { ShoppingBag, Moon, Sun } from 'lucide-react'
import { useDarkMode } from '../context/DarkModeContext'
import MobileMenuToggle from './MobileMenuToggle'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { darkMode, toggleDarkMode } = useDarkMode()

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
          ? 'bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-lg py-3' 
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
                isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
              }`}>
                Relish Lane
              </span>
              <span className={`text-xs font-light transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white/80'
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
                    ? 'text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent hover:bg-amber-50 dark:hover:bg-gray-700' 
                    : 'text-white hover:text-accent hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`ml-2 p-2.5 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <a 
              href="https://order.relishlane.co.uk/" 
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-2 flex items-center space-x-2 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                isScrolled
                  ? 'bg-primary text-white hover:bg-secondary shadow-md'
                  : 'bg-white text-primary hover:bg-accent hover:text-white shadow-xl'
              }`}
            >
              <ShoppingBag size={18} />
              <span>Order Online</span>
            </a>
          </nav>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle theme"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            <MobileMenuToggle 
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              isScrolled={isScrolled}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 mt-6' : 'max-h-0'
          }`}
        >
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl p-6 border border-gray-100 dark:border-gray-700">
            <nav className="flex flex-col space-y-0">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-accent hover:bg-amber-50 dark:hover:bg-gray-700 font-medium transition-all duration-300 rounded-lg ${
                    index < navLinks.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''
                  }`}
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
