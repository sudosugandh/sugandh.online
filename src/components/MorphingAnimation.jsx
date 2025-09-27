import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MorphingAnimation = ({ 
  shapes = [
    { name: 'Circle', path: 'M50,10 A40,40 0 1,1 49.9,10 Z' },
    { name: 'Square', path: 'M10,10 L90,10 L90,90 L10,90 Z' },
    { name: 'Triangle', path: 'M50,10 L90,80 L10,80 Z' },
    { name: 'Star', path: 'M50,5 L61,35 L95,35 L68,57 L79,91 L50,70 L21,91 L32,57 L5,35 L39,35 Z' }
  ],
  duration = 3,
  colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
  size = 100,
  className = '',
  style = {},
  ...props 
}) => {
  const [currentShapeIndex, setCurrentShapeIndex] = useState(0)
  const [currentColorIndex, setCurrentColorIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShapeIndex((prev) => (prev + 1) % shapes.length)
      setCurrentColorIndex((prev) => (prev + 1) % colors.length)
    }, duration * 1000)

    return () => clearInterval(interval)
  }, [shapes.length, colors.length, duration])

  const currentShape = shapes[currentShapeIndex]
  const currentColor = colors[currentColorIndex]

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        position: 'relative',
        ...style
      }}
      {...props}
    >
      <AnimatePresence mode="wait">
        <motion.svg
          key={currentShapeIndex}
          width={size}
          height={size}
          viewBox="0 0 100 100"
          style={{
            position: 'absolute',
            top: 0,
            left: 0
          }}
          initial={{ 
            opacity: 0, 
            scale: 0.8,
            rotate: -180
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: 0
          }}
          exit={{ 
            opacity: 0, 
            scale: 1.2,
            rotate: 180
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeInOut"
          }}
        >
          <motion.path
            d={currentShape.path}
            fill={currentColor}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ 
              duration: 1,
              ease: "easeInOut",
              delay: 0.2
            }}
            style={{
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))'
            }}
          />
        </motion.svg>
      </AnimatePresence>

      {/* Shape name */}
      <motion.div
        key={`name-${currentShapeIndex}`}
        style={{
          position: 'absolute',
          bottom: '-30px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '12px',
          fontWeight: '600',
          color: currentColor,
          textAlign: 'center',
          whiteSpace: 'nowrap'
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {currentShape.name}
      </motion.div>

      {/* Glow effect */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: size * 1.5,
          height: size * 1.5,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${currentColor}20 0%, transparent 70%)`,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export default MorphingAnimation