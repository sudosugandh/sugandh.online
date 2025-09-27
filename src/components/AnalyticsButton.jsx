import React from 'react'
import { useAnalyticsContext } from '../contexts/AnalyticsContext'

const AnalyticsButton = ({ 
  children, 
  onClick, 
  eventName, 
  eventCategory = 'user_interaction',
  eventLabel = '',
  customParameters = {},
  ...props 
}) => {
  const analytics = useAnalyticsContext()

  const handleClick = (event) => {
    // Track the click event
    if (eventName) {
      analytics.trackClick(eventName, {
        category: eventCategory,
        label: eventLabel,
        ...customParameters
      })
    }

    // Call the original onClick if provided
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  )
}

export default AnalyticsButton