import React, { useState, useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, useAnimation } from 'framer-motion'

const MobileTouchHandler = ({ children, className = '', onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, onTap, enableHaptic = true }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const elementRef = useRef(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const scale = useTransform(x, [-100, 0, 100], [0.95, 1, 0.95])
  const rotate = useTransform(x, [-100, 100], [-5, 5])
  
  const controls = useAnimation()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Haptic feedback for mobile devices
  const triggerHaptic = () => {
    if (enableHaptic && isMobile && 'vibrate' in navigator) {
      navigator.vibrate(50) // Short vibration
    }
  }

  // Touch start handler
  const handleTouchStart = (e) => {
    if (!isMobile) return
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    triggerHaptic()
  }

  // Touch move handler
  const handleTouchMove = (e) => {
    if (!isMobile) return
    setTouchEnd(e.targetTouches[0].clientX)
  }

  // Touch end handler
  const handleTouchEnd = () => {
    if (!isMobile || !touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    
    if (isLeftSwipe && onSwipeLeft) {
      onSwipeLeft()
      triggerHaptic()
    }
    if (isRightSwipe && onSwipeRight) {
      onSwipeRight()
      triggerHaptic()
    }
  }

  // Tap handler
  const handleTap = () => {
    if (onTap) {
      onTap()
      triggerHaptic()
    }
  }

  // Long press handler
  const handleLongPress = () => {
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 0.3 }
    })
    triggerHaptic()
  }

  // Drag handlers for desktop
  const handleDragStart = () => {
    if (isMobile) return
    controls.start({ scale: 0.95 })
  }

  const handleDragEnd = () => {
    if (isMobile) return
    controls.start({ scale: 1 })
  }

  return (
    <motion.div
      ref={elementRef}
      className={`mobile-touch-handler ${className}`}
      style={{
        x,
        y,
        scale,
        rotate
      }}
      animate={controls}
      drag={!isMobile}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.1}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTap={handleTap}
      onLongPress={handleLongPress}
      whileHover={!isMobile ? { scale: 1.02 } : {}}
      whileTap={{ scale: 0.98 }}
      style={{
        cursor: isMobile ? 'default' : 'grab',
        touchAction: 'manipulation',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        WebkitTouchCallout: 'none'
      }}
    >
      {children}
    </motion.div>
  )
}

export default MobileTouchHandler