import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const AnimatedProgressBar = ({ 
  percentage,
  label = '',
  color = '#3b82f6',
  height = 8,
  animated = true,
  showPercentage = true,
  className = '',
  style = {},
  ...props 
}) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.3 })
  const [isVisible, setIsVisible] = useState(false)

  React.useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true)
    }
  }, [inView, isVisible])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        width: '100%',
        marginBottom: '1rem',
        ...style
      }}
      {...props}
    >
      {label && (
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.5rem'
        }}>
          <span style={{
            fontSize: '0.875rem',
            fontWeight: '500',
            color: '#374151'
          }}>
            {label}
          </span>
          {showPercentage && (
            <span style={{
              fontSize: '0.875rem',
              fontWeight: '600',
              color: color
            }}>
              {percentage}%
            </span>
          )}
        </div>
      )}
      
      <div style={{
        width: '100%',
        height: height,
        backgroundColor: '#e5e7eb',
        borderRadius: height / 2,
        overflow: 'hidden',
        position: 'relative'
      }}>
        <motion.div
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${color}, ${color}dd)`,
            borderRadius: height / 2,
            position: 'relative',
            overflow: 'hidden'
          }}
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ 
            duration: animated ? 1.5 : 0,
            ease: "easeOut",
            delay: animated ? 0.2 : 0
          }}
        >
          {/* Shimmer effect */}
          {animated && (
            <motion.div
              style={{
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                borderRadius: height / 2
              }}
              animate={isVisible ? { left: '100%' } : { left: '-100%' }}
              transition={{ 
                duration: 2,
                ease: "easeInOut",
                delay: animated ? 1 : 0,
                repeat: animated ? Infinity : 0,
                repeatDelay: 3
              }}
            />
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default AnimatedProgressBar