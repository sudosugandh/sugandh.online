import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

const SkeletonLoader = ({ 
  type = 'text', 
  width = '100%', 
  height = '20px', 
  borderRadius = '4px',
  className = '',
  count = 1 
}) => {
  const { isDarkMode } = useTheme()

  const skeletonVariants = {
    initial: {
      opacity: 0.7
    },
    animate: {
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const getSkeletonStyle = () => {
    const baseStyle = {
      backgroundColor: isDarkMode ? '#374151' : '#e5e7eb',
      borderRadius: borderRadius,
      overflow: 'hidden',
      position: 'relative'
    }

    switch (type) {
      case 'card':
        return {
          ...baseStyle,
          width: width,
          height: height || '200px',
          padding: '1rem'
        }
      case 'circle':
        return {
          ...baseStyle,
          width: height,
          height: height,
          borderRadius: '50%'
        }
      case 'avatar':
        return {
          ...baseStyle,
          width: height,
          height: height,
          borderRadius: '50%'
        }
      case 'button':
        return {
          ...baseStyle,
          width: width,
          height: height || '40px',
          borderRadius: borderRadius || '8px'
        }
      default: // text
        return {
          ...baseStyle,
          width: width,
          height: height
        }
    }
  }

  const shimmerEffect = {
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: isDarkMode 
      ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
      : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
    animation: 'shimmer 1.5s infinite'
  }

  const renderSkeleton = () => (
    <motion.div
      variants={skeletonVariants}
      initial="initial"
      animate="animate"
      style={getSkeletonStyle()}
      className={className}
    >
      <div style={shimmerEffect} />
    </motion.div>
  )

  if (count > 1) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {Array.from({ length: count }, (_, index) => (
          <React.Fragment key={index}>
            {renderSkeleton()}
          </React.Fragment>
        ))}
      </div>
    )
  }

  return renderSkeleton()
}

// Card Skeleton Component
export const CardSkeleton = ({ count = 3 }) => {
  const { isDarkMode } = useTheme()
  
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      padding: '2rem 0'
    }}>
      {Array.from({ length: count }, (_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          style={{
            backgroundColor: isDarkMode ? '#1f2937' : 'white',
            borderRadius: '1rem',
            padding: '1.5rem',
            boxShadow: isDarkMode 
              ? '0 4px 6px rgba(0, 0, 0, 0.3)' 
              : '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb'
          }}
        >
          <SkeletonLoader type="circle" width="60px" height="60px" />
          <div style={{ marginTop: '1rem' }}>
            <SkeletonLoader width="80%" height="24px" style={{ marginBottom: '0.5rem' }} />
            <SkeletonLoader width="100%" height="16px" style={{ marginBottom: '0.5rem' }} />
            <SkeletonLoader width="70%" height="16px" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Text Skeleton Component
export const TextSkeleton = ({ lines = 3, width = '100%' }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {Array.from({ length: lines }, (_, index) => (
        <SkeletonLoader 
          key={index}
          width={index === lines - 1 ? '60%' : width} 
          height="16px" 
        />
      ))}
    </div>
  )
}

// Table Skeleton Component
export const TableSkeleton = ({ rows = 5, columns = 4 }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Header */}
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: '1rem' }}>
        {Array.from({ length: columns }, (_, index) => (
          <SkeletonLoader key={index} height="20px" />
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }, (_, rowIndex) => (
        <div key={rowIndex} style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: '1rem' }}>
          {Array.from({ length: columns }, (_, colIndex) => (
            <SkeletonLoader key={colIndex} height="16px" />
          ))}
        </div>
      ))}
    </div>
  )
}

export default SkeletonLoader