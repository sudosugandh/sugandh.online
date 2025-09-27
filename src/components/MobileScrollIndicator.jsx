import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const MobileScrollIndicator = ({ 
  sections = [], 
  showProgress = true, 
  showDirection = true,
  position = 'right' 
}) => {
  const [isMobile, setIsMobile] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  
  const { scrollYProgress } = useScroll()
  const progress = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 0, 0, 1])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!isMobile) return
      
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Show/hide indicator based on scroll position
      setIsVisible(scrollTop < documentHeight - windowHeight - 100)
      
      // Update current section
      if (sections.length > 0) {
        sections.forEach((section, index) => {
          const element = document.querySelector(section.selector)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
              setCurrentSection(index)
            }
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile, sections])

  const scrollToSection = (index) => {
    if (sections[index] && sections[index].selector) {
      const element = document.querySelector(sections[index].selector)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
        
        // Haptic feedback
        if ('vibrate' in navigator) {
          navigator.vibrate(50)
        }
      }
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if ('vibrate' in navigator) {
      navigator.vibrate(50)
    }
  }

  const scrollToBottom = () => {
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'smooth' 
    })
    if ('vibrate' in navigator) {
      navigator.vibrate(50)
    }
  }

  if (!isMobile) return null

  return (
    <motion.div
      style={{ 
        opacity,
        position: 'fixed',
        [position]: '1rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
      }}
    >
      {/* Progress Bar */}
      {showProgress && (
        <div
          style={{
            width: '4px',
            height: '200px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '2px',
            position: 'relative',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <motion.div
            style={{
              width: '100%',
              background: 'linear-gradient(180deg, #3b82f6, #8b5cf6)',
              borderRadius: '2px',
              height: progress
            }}
          />
        </div>
      )}

      {/* Section Navigation */}
      {sections.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '1rem',
            padding: '0.5rem',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          {sections.map((section, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToSection(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: index === currentSection ? '#3b82f6' : 'rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              title={section.title || `Section ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Direction Indicators */}
      {showDirection && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '1rem',
            padding: '0.5rem',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <motion.button
            onClick={scrollToTop}
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              border: 'none',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronUp size={16} />
          </motion.button>
          
          <motion.button
            onClick={scrollToBottom}
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              border: 'none',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronDown size={16} />
          </motion.button>
        </div>
      )}

      {/* Floating Action Button */}
      <motion.div
        style={{
          position: 'fixed',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000
        }}
        animate={{ 
          y: [0, -10, 0],
          opacity: isVisible ? [0.7, 1, 0.7] : 0
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <motion.div
          style={{
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)'
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
            if (scrollTop > window.innerHeight / 2) {
              scrollToTop()
            } else {
              scrollToBottom()
            }
          }}
        >
          <FiChevronDown 
            size={20} 
            color="white"
            style={{
              transform: window.pageYOffset > window.innerHeight / 2 ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default MobileScrollIndicator