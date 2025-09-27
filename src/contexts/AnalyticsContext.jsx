import React, { createContext, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useAnalytics from '../hooks/useAnalytics'

const AnalyticsContext = createContext()

export const useAnalyticsContext = () => {
  const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error('useAnalyticsContext must be used within an AnalyticsProvider')
  }
  return context
}

export const AnalyticsProvider = ({ children }) => {
  const location = useLocation()
  const analytics = useAnalytics()

  // Track page views on route changes
  useEffect(() => {
    const pageTitle = document.title
    const pagePath = location.pathname + location.search

    analytics.trackPageView(pagePath, pageTitle)
  }, [location, analytics])

  // Track scroll depth
  useEffect(() => {
    let scrollTimeout
    const handleScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100)
        
        if (scrollPercentage > 0) {
          analytics.trackScrollDepth(scrollPercentage)
        }
      }, 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimeout)
    }
  }, [analytics])

  // Track time on page
  useEffect(() => {
    const startTime = Date.now()
    let timeInterval

    const trackTime = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000)
      analytics.trackTimeOnPage(timeOnPage)
    }

    // Track time every 30 seconds
    timeInterval = setInterval(trackTime, 30000)

    return () => {
      if (timeInterval) {
        clearInterval(timeInterval)
        // Track final time on page
        const finalTime = Math.round((Date.now() - startTime) / 1000)
        if (finalTime >= 30) {
          analytics.trackTimeOnPage(finalTime)
        }
      }
    }
  }, [location.pathname, analytics])

  // Track user engagement events
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        analytics.trackEvent('page_visible', {
          category: 'engagement',
          label: 'page_visible',
          custom1: 'user_returned'
        })
      } else {
        analytics.trackEvent('page_hidden', {
          category: 'engagement',
          label: 'page_hidden',
          custom1: 'user_left'
        })
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [analytics])

  // Track clicks on external links
  useEffect(() => {
    const handleClick = (event) => {
      const link = event.target.closest('a')
      if (link && link.hostname !== window.location.hostname) {
        analytics.trackClick('external_link', {
          category: 'engagement',
          label: link.hostname,
          custom1: link.href,
          custom2: 'external_navigation'
        })
      }
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [analytics])

  const value = {
    ...analytics,
    // Additional context-specific methods
    trackBusinessInquiry: (inquiryType, source) => {
      analytics.trackBusinessGoal('business_inquiry', 1, 'USD')
      analytics.trackEvent('business_inquiry', {
        category: 'conversion',
        label: inquiryType,
        custom1: source,
        custom2: 'lead_generation'
      })
    },
    
    trackServiceInterest: (serviceName, source) => {
      analytics.trackEvent('service_interest', {
        category: 'conversion',
        label: serviceName,
        custom1: source,
        custom2: 'service_engagement'
      })
    },

    trackContactAttempt: (method, success = true) => {
      analytics.trackEvent('contact_attempt', {
        category: 'conversion',
        label: method,
        custom1: success ? 'success' : 'failed',
        custom2: 'contact_engagement'
      })
    },

    trackDemoRequest: (serviceType) => {
      analytics.trackBusinessGoal('demo_request', 10, 'USD')
      analytics.trackEvent('demo_request', {
        category: 'conversion',
        label: serviceType,
        custom1: 'demo_interest',
        custom2: 'lead_qualification'
      })
    }
  }

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}