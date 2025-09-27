import React from 'react'
import { motion, useScroll } from 'framer-motion'

const ScrollProgress = ({ 
  color = '#3b82f6',
  height = '4px',
  position = 'top',
  className = '',
  style = {}
}) => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className={className}
      style={{
        position: 'fixed',
        [position]: 0,
        left: 0,
        right: 0,
        height: height,
        background: `linear-gradient(90deg, ${color}, ${color}88)`,
        transformOrigin: '0%',
        zIndex: 9999,
        scaleX: scrollYProgress,
        ...style
      }}
    />
  )
}

export default ScrollProgress