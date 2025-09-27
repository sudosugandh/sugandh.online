import React, { useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import { AnalyticsProvider } from './contexts/AnalyticsContext'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppBot from './components/WhatsAppBot'
import PageLoader from './components/PageLoader'
import SEO from './components/SEO'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'
import AnalyticsDashboard from './components/AnalyticsDashboard'
import { CardSkeleton } from './components/SkeletonLoader'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Solutions = lazy(() => import('./pages/Solutions'))
const Services = lazy(() => import('./pages/Services'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

const AppContent = () => {
  const { isDarkMode } = useTheme()
  const [isLoading, setIsLoading] = useState(true)
  const [loadingMessage, setLoadingMessage] = useState('Loading NeuraStack Solutions...')
  
  useEffect(() => {
    // Register Service Worker for performance
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration)
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error)
        })
    }

    // Simulate initial loading
    const loadingStages = [
      { message: 'Initializing...', delay: 500 },
      { message: 'Loading components...', delay: 800 },
      { message: 'Preparing interface...', delay: 600 },
      { message: 'Almost ready...', delay: 400 }
    ]

    let currentStage = 0
    const interval = setInterval(() => {
      if (currentStage < loadingStages.length) {
        setLoadingMessage(loadingStages[currentStage].message)
        setTimeout(() => {
          currentStage++
          if (currentStage >= loadingStages.length) {
            setIsLoading(false)
            clearInterval(interval)
          }
        }, loadingStages[currentStage].delay)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <PageLoader isLoading={isLoading} message={loadingMessage} />
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: isDarkMode ? '#111827' : '#fff',
        transition: 'background-color 0.3s ease, opacity 0.5s ease',
        opacity: isLoading ? 0 : 1
      }}>
        <Router>
          <AnalyticsProvider>
            <ScrollToTop />
            <SEO />
            <Header />
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Suspense fallback={<CardSkeleton count={3} />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Suspense>
            </motion.main>
            <Footer />
            <WhatsAppBot />
            <BackToTop />
          </AnalyticsProvider>
        </Router>
      </div>
    </>
  )
}

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App