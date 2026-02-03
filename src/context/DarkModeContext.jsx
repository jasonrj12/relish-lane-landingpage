import React, { createContext, useContext, useEffect, useState } from 'react'

const DarkModeContext = createContext()

export const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }
  return context
}

export const DarkModeProvider = ({ children }) => {
  // Auto-detect system preference on first load, then allow manual toggle
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode !== null) {
      return savedMode === 'true'
    }
    // Auto-detect from system on first visit
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  // Save theme preference
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  // Simple toggle between light and dark
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  // Add keyboard shortcut (Ctrl/Cmd + Shift + L)
  useEffect(() => {
    const handleKeyPress = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'l') {
        e.preventDefault()
        toggleDarkMode()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}
