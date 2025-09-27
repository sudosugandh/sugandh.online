import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { 
  FiCode, 
  FiCloud, 
  FiCpu, 
  FiX,
  FiMenu,
  FiHome,
  FiLayers,
  FiSettings,
  FiUsers,
  FiMail,
  FiSun,
  FiMoon
} from 'react-icons/fi'

const MobileMenu = ({ isOpen, onClose }) => {
  const { isDarkMode, toggleTheme } = useTheme()
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/', icon: FiHome },
    { name: 'Solutions', href: '/solutions', icon: FiLayers },
    { name: 'Services', href: '/services', icon: FiSettings },
    { name: 'About', href: '/about', icon: FiUsers },
    { name: 'Contact', href: '/contact', icon: FiMail }
  ]

  const isActive = (href) => location.pathname === href

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2
      }
    }
  }

  const handleLinkClick = () => {
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 40,
              backdropFilter: 'blur(4px)'
            }}
          />
          
          {/* Menu Panel */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '320px',
              maxWidth: '85vw',
              backgroundColor: isDarkMode ? '#1f2937' : 'white',
              zIndex: 50,
              boxShadow: '-10px 0 25px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Header */}
            <div style={{
              padding: '1.5rem',
              borderBottom: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <Link to="/" onClick={handleLinkClick} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <FiCode style={{ width: '28px', height: '28px', color: '#3b82f6' }} />
                  <FiCloud style={{ width: '20px', height: '20px', color: '#10b981' }} />
                  <FiCpu style={{ width: '24px', height: '24px', color: '#f59e0b' }} />
                </div>
                <span style={{ 
                  fontSize: '1.125rem', 
                  fontWeight: 'bold', 
                  color: isDarkMode ? '#f9fafb' : '#1e293b'
                }}>
                  NeuraStack
                </span>
              </Link>
              
              <button
                onClick={onClose}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
                  color: isDarkMode ? '#d1d5db' : '#6b7280',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = isDarkMode ? '#4b5563' : '#e5e7eb'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = isDarkMode ? '#374151' : '#f3f4f6'
                }}
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Navigation */}
            <nav style={{ flex: 1, padding: '1.5rem 0' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    style={{ padding: '0 1.5rem' }}
                  >
                    <Link
                      to={item.href}
                      onClick={handleLinkClick}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem 1.5rem',
                        borderRadius: '0.75rem',
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                        backgroundColor: isActive(item.href) 
                          ? (isDarkMode ? '#374151' : '#f1f5f9')
                          : 'transparent',
                        color: isActive(item.href) 
                          ? '#3b82f6'
                          : (isDarkMode ? '#d1d5db' : '#6b7280'),
                        fontWeight: isActive(item.href) ? '600' : '500',
                        margin: '0 1rem',
                        borderLeft: isActive(item.href) ? '3px solid #3b82f6' : '3px solid transparent'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive(item.href)) {
                          e.target.style.backgroundColor = isDarkMode ? '#374151' : '#f1f5f9'
                          e.target.style.color = '#3b82f6'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive(item.href)) {
                          e.target.style.backgroundColor = 'transparent'
                          e.target.style.color = isDarkMode ? '#d1d5db' : '#6b7280'
                        }
                      }}
                    >
                      <item.icon size={20} />
                      <span style={{ fontSize: '1rem' }}>{item.name}</span>
                      {isActive(item.href) && (
                        <motion.div
                          layoutId="mobileActiveIndicator"
                          style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#3b82f6',
                            marginLeft: 'auto'
                          }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* Theme Toggle & CTA */}
            <div style={{
              padding: '1.5rem',
              borderTop: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {/* Theme Toggle */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 1.5rem',
                borderRadius: '0.75rem',
                backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
                margin: '0 1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  {isDarkMode ? <FiMoon size={18} /> : <FiSun size={18} />}
                  <span style={{ 
                    fontSize: '0.875rem', 
                    fontWeight: '500',
                    color: isDarkMode ? '#d1d5db' : '#6b7280'
                  }}>
                    {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                  </span>
                </div>
                <button
                  onClick={toggleTheme}
                  style={{
                    width: '48px',
                    height: '24px',
                    borderRadius: '12px',
                    border: 'none',
                    backgroundColor: isDarkMode ? '#3b82f6' : '#d1d5db',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 0.3s'
                  }}
                >
                  <motion.div
                    animate={{
                      x: isDarkMode ? '24px' : '0px'
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      position: 'absolute',
                      top: '2px',
                      left: '2px',
                      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                    }}
                  />
                </button>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                onClick={handleLinkClick}
                style={{
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  padding: '1rem 1.5rem',
                  borderRadius: '0.75rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  textAlign: 'center',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.3)',
                  margin: '0 1rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#2563eb'
                  e.target.style.transform = 'translateY(-1px)'
                  e.target.style.boxShadow = '0 6px 8px -1px rgba(59, 130, 246, 0.4)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#3b82f6'
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 4px 6px -1px rgba(59, 130, 246, 0.3)'
                }}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu