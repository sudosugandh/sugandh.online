import React from 'react'
import { Link } from 'react-router-dom'
import { useAnalyticsContext } from '../contexts/AnalyticsContext'

const AnalyticsLink = ({ 
  children, 
  to, 
  eventName, 
  eventCategory = 'navigation',
  eventLabel = '',
  customParameters = {},
  ...props 
}) => {
  const analytics = useAnalyticsContext()

  const handleClick = (event) => {
    // Track the navigation event
    if (eventName) {
      analytics.trackClick(eventName, {
        category: eventCategory,
        label: eventLabel || to,
        custom1: 'internal_navigation',
        ...customParameters
      })
    }
  }

  return (
    <Link {...props} to={to} onClick={handleClick}>
      {children}
    </Link>
  )
}

export default AnalyticsLink