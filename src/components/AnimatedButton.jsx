import React from 'react'
import { motion } from 'framer-motion'
import { hoverGlow, tapScale } from '../utils/animations'
import { useTheme } from '../contexts/ThemeContext'

const AnimatedButton = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  className = '',
  style = {},
  ...props
}) => {
  const { isDarkMode } = useTheme()

  const variants = {
    primary: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      color: 'white',
      border: 'none',
      boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.4)',
      '&:hover': {
        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
        boxShadow: '0 8px 25px 0 rgba(59, 130, 246, 0.6)'
      }
    },
    secondary: {
      background: isDarkMode 
        ? 'linear-gradient(135deg, #374151 0%, #4b5563 100%)'
        : 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
      color: isDarkMode ? '#f9fafb' : '#374151',
      border: `1px solid ${isDarkMode ? '#4b5563' : '#d1d5db'}`,
      boxShadow: isDarkMode 
        ? '0 4px 14px 0 rgba(0, 0, 0, 0.3)'
        : '0 4px 14px 0 rgba(0, 0, 0, 0.1)',
      '&:hover': {
        background: isDarkMode 
          ? 'linear-gradient(135deg, #4b5563 0%, #6b7280 100%)'
          : 'linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)',
        boxShadow: isDarkMode 
          ? '0 8px 25px 0 rgba(0, 0, 0, 0.4)'
          : '0 8px 25px 0 rgba(0, 0, 0, 0.15)'
      }
    },
    outline: {
      background: 'transparent',
      color: '#3b82f6',
      border: '2px solid #3b82f6',
      boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.2)',
      '&:hover': {
        background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        color: 'white',
        boxShadow: '0 8px 25px 0 rgba(59, 130, 246, 0.4)'
      }
    },
    ghost: {
      background: 'transparent',
      color: '#3b82f6',
      border: 'none',
      '&:hover': {
        background: 'rgba(59, 130, 246, 0.1)',
        boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.2)'
      }
    },
    danger: {
      background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      color: 'white',
      border: 'none',
      boxShadow: '0 4px 14px 0 rgba(239, 68, 68, 0.4)',
      '&:hover': {
        background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
        boxShadow: '0 8px 25px 0 rgba(239, 68, 68, 0.6)'
      }
    },
    success: {
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      color: 'white',
      border: 'none',
      boxShadow: '0 4px 14px 0 rgba(16, 185, 129, 0.4)',
      '&:hover': {
        background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
        boxShadow: '0 8px 25px 0 rgba(16, 185, 129, 0.6)'
      }
    }
  }

  const sizes = {
    small: {
      padding: '10px 20px',
      fontSize: '0.875rem',
      borderRadius: '8px',
      minHeight: '36px'
    },
    medium: {
      padding: '14px 28px',
      fontSize: '1rem',
      borderRadius: '12px',
      minHeight: '44px'
    },
    large: {
      padding: '18px 36px',
      fontSize: '1.125rem',
      borderRadius: '16px',
      minHeight: '52px'
    },
    xl: {
      padding: '22px 44px',
      fontSize: '1.25rem',
      borderRadius: '20px',
      minHeight: '60px'
    }
  }

  const buttonStyle = {
    ...variants[variant],
    ...sizes[size],
    fontWeight: '600',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: disabled || loading ? 0.6 : 1,
    position: 'relative',
    overflow: 'hidden',
    textTransform: 'none',
    letterSpacing: '0.025em',
    fontFamily: 'Inter, system-ui, sans-serif',
    ...style
  }

  const handleMouseEnter = (e) => {
    if (!disabled && !loading) {
      e.target.style.transform = 'translateY(-2px) scale(1.02)'
    }
  }

  const handleMouseLeave = (e) => {
    if (!disabled && !loading) {
      e.target.style.transform = 'translateY(0) scale(1)'
    }
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled || loading}
      className={className}
      style={buttonStyle}
      whileHover={disabled || loading ? {} : {
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={disabled || loading ? {} : {
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {loading && (
        <motion.div
          style={{
            width: '20px',
            height: '20px',
            border: `3px solid ${variant === 'primary' || variant === 'danger' || variant === 'success' ? 'rgba(255,255,255,0.3)' : 'rgba(59, 130, 246, 0.3)'}`,
            borderTop: `3px solid ${variant === 'primary' || variant === 'danger' || variant === 'success' ? 'white' : '#3b82f6'}`,
            borderRadius: '50%'
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 0.8,
            ease: 'linear',
            repeat: Infinity
          }}
        />
      )}
      
      {!loading && icon && iconPosition === 'left' && (
        <motion.span
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {icon}
        </motion.span>
      )}
      
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        style={{ fontWeight: 'inherit' }}
      >
        {children}
      </motion.span>
      
      {!loading && icon && iconPosition === 'right' && (
        <motion.span
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1, rotate: -5 }}
        >
          {icon}
        </motion.span>
      )}
    </motion.button>
  )
}

export default AnimatedButton