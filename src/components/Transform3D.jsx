import React, { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const Transform3D = ({ 
  children,
  intensity = 20,
  perspective = 1000,
  className = '',
  style = {},
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [intensity, -intensity]))
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-intensity, intensity]))
  
  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseXPos = (event.clientX - centerX) / (rect.width / 2)
    const mouseYPos = (event.clientY - centerY) / (rect.height / 2)
    
    mouseX.set(mouseXPos)
    mouseY.set(mouseYPos)
  }
  
  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }
  
  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <motion.div
      className={className}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
        ...style
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      {...props}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          transform: `translateZ(${isHovered ? 20 : 0}px)`,
          transition: 'transform 0.3s ease'
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default Transform3D