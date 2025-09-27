import { useEffect, useCallback } from 'react'

// Google Analytics 4 Measurement ID
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

export const useAnalytics = () => {
  // Initialize Google Analytics
  useEffect(() => {
    if (typeof window !== 'undefined' && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      // Load Google Analytics script
      const script1 = document.createElement('script')
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
      document.head.appendChild(script1)

      // Initialize gtag
      window.dataLayer = window.dataLayer || []
      function gtag() {
        window.dataLayer.push(arguments)
      }
      window.gtag = gtag
      gtag('js', new Date())
      gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      })
    }
  }, [])

  // Track page views
  const trackPageView = useCallback((pagePath, pageTitle) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pagePath,
        page_title: pageTitle,
        page_location: window.location.href
      })
    }
  }, [])

  // Track custom events
  const trackEvent = useCallback((eventName, parameters = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: parameters.category || 'engagement',
        event_label: parameters.label || '',
        value: parameters.value || 0,
        custom_parameter_1: parameters.custom1 || '',
        custom_parameter_2: parameters.custom2 || '',
        ...parameters
      })
    }
  }, [])

  // Track user interactions
  const trackClick = useCallback((elementName, location = 'unknown') => {
    trackEvent('click', {
      category: 'user_interaction',
      label: elementName,
      custom1: location,
      custom2: 'button_click'
    })
  }, [trackEvent])

  // Track form submissions
  const trackFormSubmission = useCallback((formName, success = true) => {
    trackEvent('form_submit', {
      category: 'form_interaction',
      label: formName,
      custom1: success ? 'success' : 'error',
      custom2: 'contact_form'
    })
  }, [trackEvent])

  // Track downloads
  const trackDownload = useCallback((fileName, fileType) => {
    trackEvent('file_download', {
      category: 'engagement',
      label: fileName,
      custom1: fileType,
      custom2: 'download'
    })
  }, [trackEvent])

  // Track scroll depth
  const trackScrollDepth = useCallback((percentage) => {
    if (percentage % 25 === 0) { // Track at 25%, 50%, 75%, 100%
      trackEvent('scroll', {
        category: 'engagement',
        label: `${percentage}%`,
        value: percentage,
        custom1: 'scroll_depth'
      })
    }
  }, [trackEvent])

  // Track time on page
  const trackTimeOnPage = useCallback((timeInSeconds) => {
    if (timeInSeconds >= 30) { // Track after 30 seconds
      trackEvent('time_on_page', {
        category: 'engagement',
        label: '30_seconds',
        value: timeInSeconds,
        custom1: 'time_engagement'
      })
    }
  }, [trackEvent])

  // Track search queries
  const trackSearch = useCallback((searchTerm, resultsCount = 0) => {
    trackEvent('search', {
      category: 'engagement',
      label: searchTerm,
      value: resultsCount,
      custom1: 'site_search',
      custom2: 'internal_search'
    })
  }, [trackEvent])

  // Track video interactions
  const trackVideoInteraction = useCallback((videoTitle, action) => {
    trackEvent('video_interaction', {
      category: 'engagement',
      label: videoTitle,
      custom1: action, // play, pause, complete
      custom2: 'video_engagement'
    })
  }, [trackEvent])

  // Track social media clicks
  const trackSocialClick = useCallback((platform, location) => {
    trackEvent('social_click', {
      category: 'social',
      label: platform,
      custom1: location,
      custom2: 'social_engagement'
    })
  }, [trackEvent])

  // Track business goals
  const trackBusinessGoal = useCallback((goalName, value = 0, currency = 'USD') => {
    trackEvent('business_goal', {
      category: 'conversion',
      label: goalName,
      value: value,
      currency: currency,
      custom1: 'business_conversion'
    })
  }, [trackEvent])

  // Track WhatsApp interactions
  const trackWhatsAppInteraction = useCallback((action, location) => {
    trackEvent('whatsapp_interaction', {
      category: 'engagement',
      label: action,
      custom1: location,
      custom2: 'whatsapp_bot'
    })
  }, [trackEvent])

  // Track theme changes
  const trackThemeChange = useCallback((theme) => {
    trackEvent('theme_change', {
      category: 'user_preference',
      label: theme,
      custom1: 'dark_mode_toggle',
      custom2: 'user_customization'
    })
  }, [trackEvent])

  // Track mobile menu usage
  const trackMobileMenuUsage = useCallback((action) => {
    trackEvent('mobile_menu', {
      category: 'navigation',
      label: action,
      custom1: 'mobile_navigation',
      custom2: 'user_experience'
    })
  }, [trackEvent])

  // Enhanced e-commerce tracking
  const trackEcommerce = useCallback((transactionData) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: transactionData.transactionId,
        value: transactionData.value,
        currency: transactionData.currency || 'USD',
        items: transactionData.items
      })
    }
  }, [])

  return {
    trackPageView,
    trackEvent,
    trackClick,
    trackFormSubmission,
    trackDownload,
    trackScrollDepth,
    trackTimeOnPage,
    trackSearch,
    trackVideoInteraction,
    trackSocialClick,
    trackBusinessGoal,
    trackWhatsAppInteraction,
    trackThemeChange,
    trackMobileMenuUsage,
    trackEcommerce
  }
}

export default useAnalytics