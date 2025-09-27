import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const MobileSwipeCarousel = ({ items, renderItem, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  
  const x = useMotionValue(0)
  const scale = useTransform(x, [-200, 0, 200], [0.8, 1, 0.8])
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 0.5, 1, 0.5, 0])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-advance for mobile
  useEffect(() => {
    if (isMobile && items.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        )
      }, 5000)
      
      return () => clearInterval(interval)
    }
  }, [isMobile, items.length])

  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1)
      // Haptic feedback
      if ('vibrate' in navigator) {
        navigator.vibrate(50)
      }
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      // Haptic feedback
      if ('vibrate' in navigator) {
        navigator.vibrate(50)
      }
    }
  }

  const goToPrevious = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : items.length - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex < items.length - 1 ? currentIndex + 1 : 0)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  if (items.length === 0) return null

  return (
    <div className={`mobile-swipe-carousel ${className}`} style={{ position: 'relative' }}>
      {/* Carousel Container */}
      <div 
        className="swipe-container"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{
          overflow: 'hidden',
          borderRadius: '1.5rem',
          touchAction: 'pan-y'
        }}
      >
        <motion.div
          className="swipe-track"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{
            display: 'flex',
            width: `${items.length * 100}%`
          }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="swipe-item"
              style={{
                width: `${100 / items.length}%`,
                flexShrink: 0,
                padding: isMobile ? '1rem' : '0'
              }}
              animate={{
                scale: index === currentIndex ? 1 : 0.95,
                opacity: index === currentIndex ? 1 : 0.7
              }}
              transition={{ duration: 0.3 }}
            >
              {renderItem(item, index)}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows (Desktop) */}
      {!isMobile && items.length > 1 && (
        <>
          <motion.button
            onClick={goToPrevious}
            className="carousel-nav carousel-nav-left"
            style={{
              position: 'absolute',
              left: '-3rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '50%',
              width: '3rem',
              height: '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              zIndex: 10
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronLeft size={20} />
          </motion.button>
          
          <motion.button
            onClick={goToNext}
            className="carousel-nav carousel-nav-right"
            style={{
              position: 'absolute',
              right: '-3rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '50%',
              width: '3rem',
              height: '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              zIndex: 10
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronRight size={20} />
          </motion.button>
        </>
      )}

      {/* Dots Indicator */}
      {items.length > 1 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '1.5rem'
          }}
        >
          {items.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: index === currentIndex ? '2rem' : '0.5rem',
                height: '0.5rem',
                borderRadius: '0.25rem',
                border: 'none',
                background: index === currentIndex ? '#3b82f6' : '#d1d5db',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      )}

      {/* Mobile Swipe Indicator */}
      {isMobile && items.length > 1 && (
        <motion.div
          className="scroll-indicator"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: 'absolute',
            bottom: '-2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '0.75rem',
            color: '#6b7280',
            textAlign: 'center'
          }}
        >
          ← Swipe to explore →
        </motion.div>
      )}
    </div>
  )
}

export default MobileSwipeCarousel