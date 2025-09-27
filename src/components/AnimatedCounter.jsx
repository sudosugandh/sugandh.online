import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const AnimatedCounter = ({ 
  end, 
  duration = 2, 
  start = 0, 
  suffix = '', 
  prefix = '', 
  separator = ',',
  className = '',
  style = {},
  ...props 
}) => {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.3 })

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true)
      animateCounter()
    }
  }, [inView, isVisible])

  const animateCounter = () => {
    const startTime = Date.now()
    const startValue = start
    const endValue = end
    const totalDuration = duration * 1000

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / totalDuration, 1)
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const currentValue = startValue + (endValue - startValue) * easeOutCubic
      
      setCount(Math.floor(currentValue))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }
    
    requestAnimationFrame(animate)
  }

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
      {...props}
    >
      {prefix}{formatNumber(count)}{suffix}
    </motion.span>
  )
}

export default AnimatedCounter