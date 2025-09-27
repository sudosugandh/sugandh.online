import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { useAnalyticsContext } from '../contexts/AnalyticsContext'
import { 
  FiBarChart, 
  FiUsers, 
  FiEye, 
  FiMousePointer, 
  FiMessageCircle,
  FiDownload,
  FiSearch,
  FiTrendingUp
} from 'react-icons/fi'

const AnalyticsDashboard = ({ show = false }) => {
  const { isDarkMode } = useTheme()
  const analytics = useAnalyticsContext()
  const [isVisible, setIsVisible] = useState(show)
  const [analyticsData, setAnalyticsData] = useState({
    pageViews: 0,
    uniqueVisitors: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    topPages: [],
    trafficSources: [],
    deviceTypes: [],
    events: []
  })

  useEffect(() => {
    // Only show in development or when explicitly enabled
    setIsVisible(show || process.env.NODE_ENV === 'development')
  }, [show])

  // Simulate analytics data (in real app, this would come from GA4 API)
  useEffect(() => {
    if (isVisible) {
      // Simulate fetching analytics data
      const simulateData = () => {
        setAnalyticsData({
          pageViews: Math.floor(Math.random() * 1000) + 500,
          uniqueVisitors: Math.floor(Math.random() * 300) + 200,
          bounceRate: (Math.random() * 20 + 30).toFixed(1),
          avgSessionDuration: Math.floor(Math.random() * 300 + 120),
          topPages: [
            { page: '/', views: Math.floor(Math.random() * 200) + 100 },
            { page: '/services', views: Math.floor(Math.random() * 150) + 80 },
            { page: '/solutions', views: Math.floor(Math.random() * 100) + 60 },
            { page: '/about', views: Math.floor(Math.random() * 80) + 40 },
            { page: '/contact', views: Math.floor(Math.random() * 120) + 70 }
          ],
          trafficSources: [
            { source: 'Direct', percentage: 45 },
            { source: 'Google', percentage: 30 },
            { source: 'Social', percentage: 15 },
            { source: 'Referral', percentage: 10 }
          ],
          deviceTypes: [
            { type: 'Desktop', percentage: 60 },
            { type: 'Mobile', percentage: 35 },
            { type: 'Tablet', percentage: 5 }
          ],
          events: [
            { name: 'WhatsApp Interaction', count: Math.floor(Math.random() * 50) + 20 },
            { name: 'Contact Form', count: Math.floor(Math.random() * 30) + 10 },
            { name: 'Service Interest', count: Math.floor(Math.random() * 40) + 15 },
            { name: 'Download', count: Math.floor(Math.random() * 20) + 5 }
          ]
        })
      }

      simulateData()
      const interval = setInterval(simulateData, 30000) // Update every 30 seconds

      return () => clearInterval(interval)
    }
  }, [isVisible])

  if (!isVisible) return null

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}m ${remainingSeconds}s`
  }

  const stats = [
    {
      title: 'Page Views',
      value: analyticsData.pageViews.toLocaleString(),
      icon: FiEye,
      color: '#3b82f6',
      change: '+12%'
    },
    {
      title: 'Unique Visitors',
      value: analyticsData.uniqueVisitors.toLocaleString(),
      icon: FiUsers,
      color: '#10b981',
      change: '+8%'
    },
    {
      title: 'Bounce Rate',
      value: `${analyticsData.bounceRate}%`,
      icon: FiTrendingUp,
      color: '#f59e0b',
      change: '-3%'
    },
    {
      title: 'Avg. Session',
      value: formatDuration(analyticsData.avgSessionDuration),
      icon: FiMousePointer,
      color: '#8b5cf6',
      change: '+15%'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        backgroundColor: isDarkMode ? '#1f2937' : 'white',
        border: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
        borderRadius: '0.75rem',
        padding: '1.5rem',
        boxShadow: isDarkMode 
          ? '0 10px 25px rgba(0, 0, 0, 0.3)' 
          : '0 10px 25px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        width: '400px',
        maxHeight: '80vh',
        overflowY: 'auto'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '1.5rem'
      }}>
        <FiBarChart style={{ 
          color: '#3b82f6', 
          width: '20px', 
          height: '20px' 
        }} />
        <h3 style={{
          fontSize: '1rem',
          fontWeight: '600',
          color: isDarkMode ? '#f9fafb' : '#1f2937',
          margin: 0
        }}>
          Analytics Dashboard
        </h3>
      </div>

      {/* Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            style={{
              padding: '1rem',
              backgroundColor: isDarkMode ? '#374151' : '#f9fafb',
              borderRadius: '0.5rem',
              textAlign: 'center'
            }}
          >
            <stat.icon style={{ 
              color: stat.color, 
              width: '24px', 
              height: '24px',
              margin: '0 auto 0.5rem'
            }} />
            <div style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: isDarkMode ? '#f9fafb' : '#1f2937',
              marginBottom: '0.25rem'
            }}>
              {stat.value}
            </div>
            <div style={{
              fontSize: '0.75rem',
              color: stat.color,
              fontWeight: '500'
            }}>
              {stat.change}
            </div>
            <div style={{
              fontSize: '0.75rem',
              color: isDarkMode ? '#9ca3af' : '#6b7280',
              marginTop: '0.25rem'
            }}>
              {stat.title}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Top Pages */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h4 style={{
          fontSize: '0.875rem',
          fontWeight: '600',
          color: isDarkMode ? '#f3f4f6' : '#374151',
          marginBottom: '0.75rem'
        }}>
          Top Pages
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {analyticsData.topPages.map((page, index) => (
            <div key={page.page} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.5rem',
              backgroundColor: isDarkMode ? '#374151' : '#f9fafb',
              borderRadius: '0.375rem'
            }}>
              <span style={{
                fontSize: '0.875rem',
                color: isDarkMode ? '#d1d5db' : '#6b7280'
              }}>
                {page.page || 'Home'}
              </span>
              <span style={{
                fontSize: '0.875rem',
                fontWeight: '500',
                color: isDarkMode ? '#f9fafb' : '#1f2937'
              }}>
                {page.views} views
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Events */}
      <div>
        <h4 style={{
          fontSize: '0.875rem',
          fontWeight: '600',
          color: isDarkMode ? '#f3f4f6' : '#374151',
          marginBottom: '0.75rem'
        }}>
          Events
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {analyticsData.events.map((event, index) => (
            <div key={event.name} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem',
              backgroundColor: isDarkMode ? '#374151' : '#f9fafb',
              borderRadius: '0.375rem'
            }}>
              {event.name.includes('WhatsApp') && <FiMessageCircle style={{ color: '#25d366', width: '16px', height: '16px' }} />}
              {event.name.includes('Download') && <FiDownload style={{ color: '#3b82f6', width: '16px', height: '16px' }} />}
              {event.name.includes('Search') && <FiSearch style={{ color: '#f59e0b', width: '16px', height: '16px' }} />}
              <span style={{
                fontSize: '0.875rem',
                color: isDarkMode ? '#d1d5db' : '#6b7280',
                flex: 1
              }}>
                {event.name}
              </span>
              <span style={{
                fontSize: '0.875rem',
                fontWeight: '500',
                color: isDarkMode ? '#f9fafb' : '#1f2937'
              }}>
                {event.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default AnalyticsDashboard