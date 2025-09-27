import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

const VirtualScroll = ({ 
  items = [],
  itemHeight = 100,
  containerHeight = 400,
  overscan = 5,
  renderItem = (item, index) => <div key={index}>{item}</div>,
  className = '',
  style = {},
  ...props 
}) => {
  const [scrollTop, setScrollTop] = useState(0)
  const containerRef = useRef(null)
  const [containerDimensions, setContainerDimensions] = useState({
    height: containerHeight,
    width: '100%'
  })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerDimensions({
          height: containerRef.current.clientHeight,
          width: containerRef.current.clientWidth
        })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  const handleScroll = useCallback((e) => {
    setScrollTop(e.target.scrollTop)
  }, [])

  // Calculate visible range
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan)
  const endIndex = Math.min(
    items.length - 1,
    Math.ceil((scrollTop + containerDimensions.height) / itemHeight) + overscan
  )

  const visibleItems = items.slice(startIndex, endIndex + 1)
  const totalHeight = items.length * itemHeight
  const offsetY = startIndex * itemHeight

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        height: containerDimensions.height,
        overflow: 'auto',
        position: 'relative',
        ...style
      }}
      onScroll={handleScroll}
      {...props}
    >
      {/* Total height spacer */}
      <div style={{ height: totalHeight, position: 'relative' }}>
        {/* Visible items container */}
        <motion.div
          style={{
            transform: `translateY(${offsetY}px)`,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {visibleItems.map((item, index) => {
            const actualIndex = startIndex + index
            return (
              <motion.div
                key={actualIndex}
                style={{
                  height: itemHeight,
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 1rem'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {renderItem(item, actualIndex)}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default VirtualScroll