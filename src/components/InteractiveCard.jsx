import React, { useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const InteractiveCard = ({ 
  children,
  className = '',
  style = {},
  tiltIntensity = 15,
  scaleOnHover = 1.05,
  glowEffect = true,
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]))
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]))
  
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
        ...style,
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ 
        scale: scaleOnHover,
        transition: { duration: 0.3 }
      }}
      {...props}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          boxShadow: glowEffect && isHovered 
            ? '0 20px 40px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(59, 130, 246, 0.1)'
            : '0 10px 20px rgba(0, 0, 0, 0.1)',
          transition: 'box-shadow 0.3s ease'
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default InteractiveCard