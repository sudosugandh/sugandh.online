import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../utils/animations'
import { useTheme } from '../contexts/ThemeContext'

const AnimatedText = ({
  text,
  variant = 'default',
  size = 'medium',
  weight = 'normal',
  color = 'inherit',
  align = 'left',
  animationType = 'fadeInUp',
  stagger = false,
  delay = 0,
  duration = 0.6,
  className = '',
  style = {},
  ...props
}) => {
  const { isDarkMode } = useTheme()

  const variants = {
    default: {
      color: isDarkMode ? '#f9fafb' : '#111827'
    },
    primary: {
      color: '#3b82f6'
    },
    secondary: {
      color: isDarkMode ? '#9ca3af' : '#6b7280'
    },
    accent: {
      color: '#8b5cf6'
    },
    success: {
      color: '#10b981'
    },
    warning: {
      color: '#f59e0b'
    },
    danger: {
      color: '#ef4444'
    },
    muted: {
      color: isDarkMode ? '#6b7280' : '#9ca3af'
    }
  }

  const sizes = {
    xs: { fontSize: '0.75rem', lineHeight: '1rem' },
    sm: { fontSize: '0.875rem', lineHeight: '1.25rem' },
    base: { fontSize: '1rem', lineHeight: '1.5rem' },
    lg: { fontSize: '1.125rem', lineHeight: '1.75rem' },
    xl: { fontSize: '1.25rem', lineHeight: '1.75rem' },
    '2xl': { fontSize: '1.5rem', lineHeight: '2rem' },
    '3xl': { fontSize: '1.875rem', lineHeight: '2.25rem' },
    '4xl': { fontSize: '2.25rem', lineHeight: '2.5rem' },
    '5xl': { fontSize: '3rem', lineHeight: '1' },
    '6xl': { fontSize: '3.75rem', lineHeight: '1' }
  }

  const weights = {
    light: { fontWeight: '300' },
    normal: { fontWeight: '400' },
    medium: { fontWeight: '500' },
    semibold: { fontWeight: '600' },
    bold: { fontWeight: '700' },
    extrabold: { fontWeight: '800' }
  }

  const alignments = {
    left: { textAlign: 'left' },
    center: { textAlign: 'center' },
    right: { textAlign: 'right' },
    justify: { textAlign: 'justify' }
  }

  const textStyle = {
    ...variants[variant],
    ...sizes[size],
    ...weights[weight],
    ...alignments[align],
    color: color !== 'inherit' ? color : variants[variant].color,
    margin: 0,
    ...style
  }

  const animationVariants = {
    fadeInUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration,
          ease: "easeOut",
          delay
        }
      }
    },
    fadeInDown: {
      hidden: { opacity: 0, y: -30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration,
          ease: "easeOut",
          delay
        }
      }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -30 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration,
          ease: "easeOut",
          delay
        }
      }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 30 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration,
          ease: "easeOut",
          delay
        }
      }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
          duration,
          ease: "easeOut",
          delay
        }
      }
    },
    slideInUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration,
          ease: "easeOut",
          delay
        }
      }
    },
    typewriter: {
      hidden: { width: 0 },
      visible: {
        width: "auto",
        transition: {
          duration: 2,
          ease: "easeInOut",
          delay
        }
      }
    }
  }

  if (stagger && text) {
    const words = text.split(' ')
    
    return (
      <motion.div
        className={className}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        {...props}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={staggerItem}
            style={{
              display: 'inline-block',
              marginRight: '0.25em'
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.p
      className={className}
      style={textStyle}
      variants={animationVariants[animationType]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      {...props}
    >
      {text}
    </motion.p>
  )
}

export default AnimatedText