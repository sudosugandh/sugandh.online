import { useEffect, useState } from 'react'

export const usePerformance = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0
  })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const measurePerformance = () => {
      // Basic load time
      const loadTime = performance.now()
      
      // Web Vitals
      if ('web-vital' in window) {
        // This would require the web-vitals library
        // For now, we'll use basic performance API
      }

      // First Contentful Paint
      const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0]
      const fcp = fcpEntry ? fcpEntry.startTime : 0

      // Largest Contentful Paint (basic implementation)
      let lcp = 0
      if ('PerformanceObserver' in window) {
        try {
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries()
            const lastEntry = entries[entries.length - 1]
            lcp = lastEntry.startTime
          })
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
        } catch (e) {
          console.log('LCP not supported')
        }
      }

      setMetrics(prev => ({
        ...prev,
        loadTime,
        firstContentfulPaint: fcp,
        largestContentfulPaint: lcp
      }))

      setIsLoading(false)
    }

    // Wait for page to be fully loaded
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    return () => {
      window.removeEventListener('load', measurePerformance)
    }
  }, [])

  // Preload critical resources
  const preloadResource = (href, as = 'script') => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = href
    link.as = as
    document.head.appendChild(link)
  }

  // Prefetch resources for faster navigation
  const prefetchResource = (href, as = 'document') => {
    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.href = href
    link.as = as
    document.head.appendChild(link)
  }

  // Optimize images
  const optimizeImage = (src, options = {}) => {
    const { width, height, quality = 75, format = 'webp' } = options
    
    // This would integrate with an image optimization service
    // For now, return the original src
    return src
  }

  // Debounce function for performance
  const debounce = (func, wait) => {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  // Throttle function for performance
  const throttle = (func, limit) => {
    let inThrottle
    return function executedFunction(...args) {
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }

  return {
    metrics,
    isLoading,
    preloadResource,
    prefetchResource,
    optimizeImage,
    debounce,
    throttle
  }
}

export default usePerformance