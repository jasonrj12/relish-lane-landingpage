import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ElevatedEssentials from './components/ElevatedEssentials'
import MorningExcellence from './components/MorningExcellence'
import EveningMenu from './components/EveningMenu'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <ElevatedEssentials />
      <MorningExcellence />
      <EveningMenu />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
