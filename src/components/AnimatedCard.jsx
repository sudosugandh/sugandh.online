import React from 'react'
import { motion } from 'framer-motion'
import { hoverLift, hoverGlow, tapScale } from '../utils/animations'
import { useTheme } from '../contexts/ThemeContext'

const AnimatedCard = ({
  children,
  onClick,
  variant = 'default',
  size = 'medium',
  hoverable = true,
  clickable = false,
  className = '',
  style = {},
  animationType = 'fadeInUp',
  delay = 0,
  ...props
}) => {
  const { isDarkMode } = useTheme()

  const variants = {
    default: {
      backgroundColor: isDarkMode ? '#1f2937' : '#fff',
      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
      boxShadow: isDarkMode 
        ? '0 10px 15px -3px rgba(0, 0, 0, 0.3)' 
        : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    },
    elevated: {
      backgroundColor: isDarkMode ? '#1f2937' : '#fff',
      border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
      boxShadow: isDarkMode 
        ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
        : '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
    },
    outlined: {
      backgroundColor: 'transparent',
      border: `2px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
      boxShadow: 'none'
    },
    glass: {
      backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.8)' : 'rgba(255, 255, 255, 0.8)',
      border: `1px solid ${isDarkMode ? 'rgba(55, 65, 81, 0.3)' : 'rgba(229, 231, 235, 0.3)'}`,
      backdropFilter: 'blur(20px)',
      boxShadow: isDarkMode 
        ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
        : '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
    },
    gradient: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      border: 'none',
      color: 'white',
      boxShadow: '0 25px 50px -12px rgba(102, 126, 234, 0.4)'
    },
    primary: {
      backgroundColor: isDarkMode ? '#1e3a8a' : '#dbeafe',
      border: `1px solid ${isDarkMode ? '#1e40af' : '#93c5fd'}`,
      color: isDarkMode ? '#dbeafe' : '#1e40af',
      boxShadow: '0 10px 15px -3px rgba(59, 130, 246, 0.2)'
    }
  }

  const sizes = {
    small: {
      padding: '1rem',
      borderRadius: '8px'
    },
    medium: {
      padding: '1.5rem',
      borderRadius: '12px'
    },
    large: {
      padding: '2rem',
      borderRadius: '16px'
    },
    xl: {
      padding: '3rem',
      borderRadius: '20px'
    }
  }

  const cardStyle = {
    ...variants[variant],
    ...sizes[size],
    cursor: clickable ? 'pointer' : 'default',
    transition: 'all 0.3s ease',
    ...style
  }

  const animationVariants = {
    fadeInUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
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
          duration: 0.6,
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
          duration: 0.6,
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
          duration: 0.6,
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
          duration: 0.5,
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
          duration: 0.7,
          ease: "easeOut",
          delay
        }
      }
    }
  }

  const handleMouseEnter = (e) => {
    if (hoverable && !clickable) {
      e.target.style.transform = 'translateY(-5px)'
      e.target.style.boxShadow = isDarkMode 
        ? '0 25px 50px -12px rgba(0, 0, 0, 0.4)' 
        : '0 25px 50px -12px rgba(0, 0, 0, 0.2)'
    }
  }

  const handleMouseLeave = (e) => {
    if (hoverable && !clickable) {
      e.target.style.transform = 'translateY(0)'
      e.target.style.boxShadow = variants[variant].boxShadow
    }
  }

  const MotionComponent = clickable ? motion.button : motion.div

  return (
    <MotionComponent
      className={className}
      style={cardStyle}
      variants={animationVariants[animationType]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={hoverable ? hoverLift : {}}
      whileTap={clickable ? tapScale : {}}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}

export default AnimatedCard