import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = ({ 
  size = 20,
  color = '#3b82f6',
  hoverColor = '#10b981',
  className = '',
  style = {}
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    // Add hover detection for interactive elements
    const handleMouseOver = (e) => {
      const target = e.target
      const isInteractive = target.matches('button, a, [role="button"], .interactive, .service-card, .stat-item')
      setIsHovering(isInteractive)
    }

    const handleMouseOut = () => {
      setIsHovering(false)
    }

    document.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className={className}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: size,
          height: size,
          backgroundColor: isHovering ? hoverColor : color,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          ...style
        }}
        animate={{
          x: mousePosition.x - size / 2,
          y: mousePosition.y - size / 2,
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      />

      {/* Trailing cursor */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: size * 2,
          height: size * 2,
          border: `2px solid ${isHovering ? hoverColor : color}`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0.3
        }}
        animate={{
          x: mousePosition.x - size,
          y: mousePosition.y - size,
          scale: isHovering ? 1.2 : 0.8,
          opacity: isVisible ? 0.3 : 0
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 30,
          mass: 0.8
        }}
      />

      {/* Outer ring */}
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: size * 4,
          height: size * 4,
          border: `1px solid ${isHovering ? hoverColor : color}`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9997,
          opacity: 0.1
        }}
        animate={{
          x: mousePosition.x - size * 2,
          y: mousePosition.y - size * 2,
          scale: isHovering ? 1.1 : 0.6,
          opacity: isVisible ? 0.1 : 0
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 40,
          mass: 1
        }}
      />
    </>
  )
}

export default CustomCursor