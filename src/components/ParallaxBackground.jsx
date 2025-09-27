import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ParallaxBackground = ({ 
  children,
  speed = 0.5,
  className = '',
  style = {},
  ...props 
}) => {
  const ref = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ ...style, y }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default ParallaxBackground