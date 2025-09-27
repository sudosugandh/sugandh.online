import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiChevronUp, FiX, FiExternalLink, FiPlay, FiInfo } from 'react-icons/fi'

const InteractiveButton = ({ 
  children, 
  variant = 'primary',
  size = 'medium',
  onClick,
  showContent = false,
  content = null,
  modalContent = null,
  scrollTo = null,
  href = null,
  icon = null,
  style = {},
  className = '',
  disabled = false,
  loading = false,
  ...props 
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    if (disabled || loading) return

    if (modalContent) {
      setShowModal(true)
    } else if (showContent) {
      setIsExpanded(!isExpanded)
    } else if (scrollTo) {
      const element = document.querySelector(scrollTo)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else if (href) {
      // Handle navigation for href
      if (href.startsWith('#')) {
        // Internal anchor link
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      } else {
        // External or internal page navigation
        window.location.href = href
      }
    } else if (onClick) {
      onClick()
    }
  }

  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontWeight: '600',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: 'none',
    borderRadius: '0.75rem',
    position: 'relative',
    overflow: 'hidden',
    ...style
  }

  const sizeStyles = {
    small: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
    medium: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
    large: { padding: '1rem 2rem', fontSize: '1.125rem' }
  }

  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
      '&:hover': {
        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.6)',
        transform: 'translateY(-2px)'
      }
    },
    secondary: {
      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      color: 'white',
      boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)',
      '&:hover': {
        boxShadow: '0 8px 25px rgba(245, 158, 11, 0.6)',
        transform: 'translateY(-2px)'
      }
    },
    outline: {
      background: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(20px)',
      '&:hover': {
        background: 'rgba(255, 255, 255, 0.2)',
        borderColor: 'rgba(255, 255, 255, 0.5)'
      }
    },
    ghost: {
      background: 'transparent',
      color: '#667eea',
      border: '2px solid #667eea',
      '&:hover': {
        background: '#667eea',
        color: 'white'
      }
    },
    info: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      color: 'white',
      boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
      '&:hover': {
        boxShadow: '0 8px 25px rgba(59, 130, 246, 0.6)',
        transform: 'translateY(-2px)'
      }
    }
  }

  const buttonStyle = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
    opacity: disabled ? 0.6 : 1
  }

  return (
    <>
      <motion.button
        onClick={handleClick}
        className={className}
        style={buttonStyle}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        disabled={disabled}
        {...props}
      >
        {loading && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            style={{ width: '16px', height: '16px', border: '2px solid transparent', borderTop: '2px solid currentColor', borderRadius: '50%' }}
          />
        )}
        {icon && React.createElement(icon, { size: 16 })}
        {children}
        {showContent && (
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
          </motion.div>
        )}
        {href && <FiExternalLink size={14} />}
      </motion.button>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && content && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              marginTop: '1rem',
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '0.75rem',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)'
            }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Content */}
      <AnimatePresence>
        {showModal && modalContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '2rem'
            }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '2rem',
                maxWidth: '600px',
                width: '100%',
                maxHeight: '80vh',
                overflow: 'auto',
                position: 'relative',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'none',
                  border: 'none',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  color: '#6b7280'
                }}
              >
                <FiX />
              </button>
              {modalContent}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default InteractiveButton