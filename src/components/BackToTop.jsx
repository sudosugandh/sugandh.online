import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { useTheme } from '../contexts/ThemeContext'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { isDarkMode } = useTheme()

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 1000,
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: isDarkMode ? '#3b82f6' : '#3b82f6',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: isDarkMode 
              ? '0 10px 25px rgba(59, 130, 246, 0.4)' 
              : '0 10px 25px rgba(59, 130, 246, 0.3)',
            transition: 'all 0.3s ease'
          }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: isDarkMode 
              ? '0 15px 35px rgba(59, 130, 246, 0.5)' 
              : '0 15px 35px rgba(59, 130, 246, 0.4)'
          }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#2563eb'
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#3b82f6'
          }}
          aria-label="Back to top"
        >
          <FiArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default BackToTop