import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { FiCode, FiCloud, FiCpu } from 'react-icons/fi'

const PageLoader = ({ isLoading = true, message = "Loading..." }) => {
  const { isDarkMode } = useTheme()

  if (!isLoading) return null

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  }

  const iconVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const textVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: isDarkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        gap: '2rem'
      }}
    >
      {/* Logo Animation */}
      <motion.div
        variants={pulseVariants}
        animate="animate"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '2rem',
          borderRadius: '2rem',
          backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
          boxShadow: isDarkMode 
            ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
            : '0 8px 32px rgba(0, 0, 0, 0.1)'
        }}
      >
        <motion.div
          variants={iconVariants}
          animate="animate"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem'
          }}
        >
          <FiCode style={{ width: '32px', height: '32px', color: '#3b82f6' }} />
          <FiCloud style={{ width: '24px', height: '24px', color: '#10b981' }} />
          <FiCpu style={{ width: '28px', height: '28px', color: '#f59e0b' }} />
        </motion.div>
      </motion.div>

      {/* Loading Text */}
      <motion.div
        variants={textVariants}
        animate="animate"
        style={{
          textAlign: 'center'
        }}
      >
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: isDarkMode ? '#f9fafb' : '#1f2937',
          margin: '0 0 0.5rem 0'
        }}>
          NeuraStack Solutions
        </h2>
        <p style={{
          fontSize: '1rem',
          color: isDarkMode ? '#d1d5db' : '#6b7280',
          margin: 0
        }}>
          {message}
        </p>
      </motion.div>

      {/* Progress Bar */}
      <motion.div
        style={{
          width: '300px',
          height: '4px',
          backgroundColor: isDarkMode ? '#374151' : '#e5e7eb',
          borderRadius: '2px',
          overflow: 'hidden'
        }}
      >
        <motion.div
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, #3b82f6, #10b981, #f59e0b)',
            borderRadius: '2px'
          }}
        />
      </motion.div>

      {/* Loading Dots */}
      <motion.div
        style={{
          display: 'flex',
          gap: '0.5rem'
        }}
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#3b82f6'
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default PageLoader