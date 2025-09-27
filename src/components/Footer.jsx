import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FiCode, 
  FiCloud, 
  FiCpu, 
  FiMail, 
  FiPhone, 
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiArrowRight,
  FiMessageCircle,
  FiInstagram,
  FiExternalLink,
  FiHeart
} from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Full Stack Development', href: '/services#fullstack' },
    { name: 'DevOps & CI/CD', href: '/services#devops' },
    { name: 'Cloud Solutions', href: '/services#cloud' },
    { name: 'AI/ML Integration', href: '/services#ai' },
    { name: 'Business Automation', href: '/services' },
    { name: 'Mobile App Development', href: '/services' }
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  const socialLinks = [
    { name: 'Instagram', icon: FiInstagram, href: 'https://instagram.com/neurastack', color: '#e4405f' },
    { name: 'LinkedIn', icon: FiLinkedin, href: '#', color: '#0077b5' },
    { name: 'Twitter', icon: FiTwitter, href: '#', color: '#1da1f2' },
    { name: 'GitHub', icon: FiGithub, href: '#', color: '#374151' }
  ]

  return (
    <footer style={{ 
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      color: 'white',
      borderTop: '1px solid #334155',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1rem 2rem', position: 'relative', zIndex: 1 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
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
                fontSize: '1.25rem', 
                fontWeight: 'bold',
                letterSpacing: '-0.025em'
              }}>
                NeuraStack Solutions
              </span>
            </div>
            
            <p style={{ 
              fontSize: '0.875rem', 
              color: '#cbd5e1', 
              lineHeight: '1.6',
              maxWidth: '300px'
            }}>
              Delivering end-to-end business solutions through cutting-edge technology, 
              modern development practices, and innovative AI integration.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -4, 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#334155',
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    color: '#cbd5e1',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = social.color;
                    e.target.style.color = 'white';
                    e.target.style.boxShadow = `0 8px 25px ${social.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#334155';
                    e.target.style.color = '#cbd5e1';
                    e.target.style.transform = 'translateY(0)';
                  }}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: '600', 
              color: 'white',
              margin: 0
            }}>
              Our Services
            </h3>
            <ul style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.75rem', 
              listStyle: 'none', 
              padding: 0, 
              margin: 0 
            }}>
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={service.href}
                      style={{ 
                        fontSize: '0.875rem', 
                        color: '#cbd5e1', 
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 0.75rem',
                        borderRadius: '0.5rem',
                        position: 'relative',
                        background: 'linear-gradient(135deg, transparent 0%, transparent 100%)',
                        border: '1px solid transparent'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#3b82f6';
                        e.target.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
                        e.target.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                        e.target.style.boxShadow = '0 2px 8px rgba(59, 130, 246, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#cbd5e1';
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.borderColor = 'transparent';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      <motion.div
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <FiArrowRight style={{ width: '12px', height: '12px', opacity: 0.7 }} />
                      </motion.div>
                      {service.name}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: '600', 
              color: 'white',
              margin: 0
            }}>
              Quick Links
            </h3>
            <ul style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.75rem', 
              listStyle: 'none', 
              padding: 0, 
              margin: 0 
            }}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    style={{
                      fontSize: '0.875rem',
                      color: '#cbd5e1',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '0.25rem',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#3b82f6';
                      e.target.style.transform = 'translateX(4px)';
                      e.target.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#cbd5e1';
                      e.target.style.transform = 'translateX(0)';
                      e.target.style.backgroundColor = 'transparent';
                    }}
                  >
                    <FiArrowRight style={{ width: '12px', height: '12px', opacity: 0.7 }} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <h3 style={{ 
              fontSize: '1.125rem', 
              fontWeight: '600', 
              color: 'white',
              margin: 0
            }}>
              Contact Info
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <motion.a 
                href="mailto:neurastack@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ 
                  y: -4, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem',
                  borderRadius: '1rem',
                  background: 'linear-gradient(135deg, #334155 0%, #475569 100%)',
                  textDecoration: 'none',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)';
                  e.target.style.borderColor = '#60a5fa';
                  e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #334155 0%, #475569 100%)';
                  e.target.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#3b82f6',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <FiMail style={{ width: '18px', height: '18px', color: 'white' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'white' }}>
                    Email Us
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>
                    neurastack@gmail.com
                  </div>
                </div>
              </motion.a>
              
              <a 
                href="tel:+916388337594"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  backgroundColor: '#334155',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  border: '1px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#10b981';
                  e.target.style.borderColor = '#34d399';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#334155';
                  e.target.style.borderColor = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#10b981',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <FiPhone style={{ width: '18px', height: '18px', color: 'white' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'white' }}>
                    Call Us
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>
                    +91 6388337594
                  </div>
                </div>
              </a>
              
              <a 
                href="https://maps.google.com/?q=2/139,+Sec-7,+Amar+Shaheed+Path,+Gomati+Nagar+Extension,+Lucknow,+Uttar+Pradesh+226002"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  backgroundColor: '#334155',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  border: '1px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f59e0b';
                  e.target.style.borderColor = '#fbbf24';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(245, 158, 11, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#334155';
                  e.target.style.borderColor = 'transparent';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#f59e0b',
                  borderRadius: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <FiMapPin style={{ width: '18px', height: '18px', color: 'white' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', fontWeight: '600', color: 'white' }}>
                    Visit Us
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#cbd5e1' }}>
                    2/139, Sec-7, Amar Shaheed Path, Gomati Nagar Extension, Lucknow, UP 226002
                  </div>
                </div>
              </a>
              
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ 
            borderTop: '1px solid rgba(59, 130, 246, 0.2)', 
            paddingTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
            borderRadius: '1rem',
            padding: '2rem',
            marginTop: '2rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <FiHeart style={{ color: '#ef4444', width: '16px', height: '16px' }} />
            </motion.div>
            <p style={{ 
              fontSize: '0.875rem', 
              color: '#94a3b8',
              margin: 0,
              textAlign: 'center'
            }}>
              © {currentYear} NeuraStack Solutions. All rights reserved.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem' }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/privacy" style={{
                color: '#94a3b8',
                textDecoration: 'none',
                transition: 'all 0.3s',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                border: '1px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#3b82f6';
                e.target.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
                e.target.style.borderColor = 'rgba(59, 130, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#94a3b8';
                e.target.style.backgroundColor = 'transparent';
                e.target.style.borderColor = 'transparent';
              }}
              >
                Privacy Policy
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/terms" style={{
                color: '#94a3b8',
                textDecoration: 'none',
                transition: 'all 0.3s',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                border: '1px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#3b82f6';
                e.target.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
                e.target.style.borderColor = 'rgba(59, 130, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#94a3b8';
                e.target.style.backgroundColor = 'transparent';
                e.target.style.borderColor = 'transparent';
              }}
              >
                Terms of Service
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer