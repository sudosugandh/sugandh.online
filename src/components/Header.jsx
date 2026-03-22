import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiCode, FiCloud, FiCpu, FiMenu, FiX, FiPhone } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'
import MobileMenu from './MobileMenu'
import { useTheme } from '../contexts/ThemeContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { isDarkMode } = useTheme()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: isDarkMode ? 'rgba(31, 41, 55, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: isDarkMode ? '1px solid #374151' : '1px solid #e2e8f0',
        boxShadow: isDarkMode 
          ? '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)' 
          : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container-premium" style={{ margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          {/* Logo - no phone here to avoid overlap with nav */}
          <div style={{ display: 'flex', alignItems: 'center', minWidth: 0, flexShrink: 0 }} className="header-logo">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }} className="logo-link">
              <div style={{
                width: '40px',
                height: '40px',
                flexShrink: 0,
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <FiCode style={{ width: '20px', height: '20px', color: 'white' }} />
                <FiCloud style={{ 
                  width: '12px', 
                  height: '12px', 
                  color: '#10b981',
                  position: 'absolute',
                  top: '2px',
                  right: '2px'
                }} />
                <FiCpu style={{ 
                  width: '14px', 
                  height: '14px', 
                  color: '#f59e0b',
                  position: 'absolute',
                  bottom: '2px',
                  left: '2px'
                }} />
              </div>
              <span style={{ 
                fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', 
                fontWeight: '700', 
                fontFamily: 'DM Sans, system-ui, sans-serif',
                color: isDarkMode ? '#f9fafb' : '#0f172a',
                letterSpacing: '-0.01em',
                transition: 'color 0.3s ease',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                NeuraStack Solutions
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav header-nav" style={{ display: 'flex', alignItems: 'center', gap: '0.125rem' }}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${isActive(item.href) ? 'nav-link-active' : ''}`}
                style={{
                  position: 'relative',
                  padding: '0.625rem 1rem',
                  fontSize: '0.9375rem',
                  fontWeight: isActive(item.href) ? '600' : '500',
                  color: isActive(item.href) ? '#3b82f6' : (isDarkMode ? '#d1d5db' : '#64748b'),
                  textDecoration: 'none',
                  transition: 'color 0.2s, background 0.2s',
                  borderRadius: '0.5rem',
                  backgroundColor: isActive(item.href) ? (isDarkMode ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.08)') : 'transparent'
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.href)) {
                    e.currentTarget.style.color = '#3b82f6';
                    e.currentTarget.style.backgroundColor = isDarkMode ? 'rgba(59, 130, 246, 0.12)' : 'rgba(59, 130, 246, 0.06)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.href)) {
                    e.currentTarget.style.color = isDarkMode ? '#d1d5db' : '#64748b';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    style={{
                      position: 'absolute',
                      bottom: '0.375rem',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '4px',
                      height: '4px',
                      backgroundColor: '#3b82f6',
                      borderRadius: '50%'
                    }}
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Phone, Theme Toggle & CTA Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }} className="header-actions">
            <a 
              href="https://wa.me/916388337594" 
              target="_blank" 
              rel="noopener noreferrer"
              className="header-phone"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
                fontSize: '0.8125rem',
                color: isDarkMode ? '#9ca3af' : '#64748b',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = isDarkMode ? '#10b981' : '#059669'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isDarkMode ? '#9ca3af' : '#64748b'
              }}
            >
              <FiPhone style={{ width: '14px', height: '14px', flexShrink: 0 }} />
              <span>+91 6388337594</span>
            </a>
            <ThemeToggle />
            <Link
              to="/contact"
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.75rem',
                fontSize: '0.875rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s',
                boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2563eb';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 6px 8px -1px rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#3b82f6';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(59, 130, 246, 0.3)';
              }}
            >
              Get Started
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-btn"
              style={{
                padding: '0.75rem',
                borderRadius: '0.75rem',
                backgroundColor: isDarkMode ? '#374151' : '#f3f4f6',
                border: 'none',
                color: isDarkMode ? '#d1d5db' : '#64748b',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: isDarkMode 
                  ? '0 2px 4px rgba(0, 0, 0, 0.2)' 
                  : '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = isDarkMode ? '#4b5563' : '#e5e7eb';
                e.currentTarget.style.color = '#3b82f6';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = isDarkMode ? '#374151' : '#f3f4f6';
                e.currentTarget.style.color = isDarkMode ? '#d1d5db' : '#64748b';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </motion.header>
  )
}

export default Header