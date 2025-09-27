import React from 'react'
import { motion } from 'framer-motion'

const FloatingElements = ({ 
  count = 6,
  size = 'medium',
  colors = ['rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.15)'],
  className = '',
  style = {}
}) => {
  const sizes = {
    small: { min: 10, max: 20 },
    medium: { min: 15, max: 30 },
    large: { min: 20, max: 40 }
  }

  const generateFloatingElement = (index) => {
    const { min, max } = sizes[size]
    const elementSize = Math.random() * (max - min) + min
    const color = colors[Math.floor(Math.random() * colors.length)]
    const duration = Math.random() * 10 + 10 // 10-20 seconds
    const delay = Math.random() * 5 // 0-5 seconds delay

    return (
      <motion.div
        key={index}
        style={{
          position: 'absolute',
          width: elementSize,
          height: elementSize,
          background: color,
          borderRadius: '50%',
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          pointerEvents: 'none',
          zIndex: 1
        }}
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    )
  }

  return (
    <div 
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        ...style
      }}
    >
      {Array.from({ length: count }, (_, index) => generateFloatingElement(index))}
    </div>
  )
}

export default FloatingElements