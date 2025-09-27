import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { 
  FiZap, 
  FiUsers,
  FiAward,
  FiTrendingUp, 
  FiArrowRight,
  FiCheckCircle,
  FiStar,
  FiCode,
  FiCloud,
  FiShield,
  FiCpu,
  FiMonitor,
  FiSettings,
  FiChevronRight,
  FiPlay,
  FiExternalLink,
  FiSmartphone
} from 'react-icons/fi'
import AnimatedButton from '../components/AnimatedButton'
import AnimatedCard from '../components/AnimatedCard'
import AnimatedText from '../components/AnimatedText'
import ScrollTriggeredAnimation from '../components/ScrollTriggeredAnimation'
import InteractiveCard from '../components/InteractiveCard'
import Transform3D from '../components/Transform3D'
import AnimatedCounter from '../components/AnimatedCounter'
import MobileTouchHandler from '../components/MobileTouchHandler'
import MobileScrollIndicator from '../components/MobileScrollIndicator'
import TechLogo from '../components/TechLogo'
import InteractiveButton from '../components/InteractiveButton'

const Home = () => {
  const { isDarkMode } = useTheme()

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '24/7', label: 'Support Available' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years Experience' }
  ]

  const keyFeatures = [
    {
      title: 'Expert Team',
      description: 'Our experienced developers deliver high-quality solutions tailored to your business needs.',
      icon: FiUsers,
      details: [
        'Certified professionals with 5+ years experience',
        'Specialized in modern technologies and frameworks',
        'Continuous learning and skill development',
        'Proven track record of successful projects'
      ]
    },
    {
      title: 'Fast Delivery',
      description: 'We understand the importance of time in business and deliver projects on schedule.',
      icon: FiZap,
      details: [
        'Agile development methodology',
        'Regular progress updates and milestones',
        'Quick turnaround times without compromising quality',
        'Flexible project management approach'
      ]
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support to ensure your systems run smoothly.',
      icon: FiShield,
      details: [
        '24/7 monitoring and maintenance',
        'Immediate response to critical issues',
        'Proactive system optimization',
        'Dedicated support team'
      ]
    },
    {
      title: 'Scalable Solutions',
      description: 'Future-proof solutions that grow with your business requirements.',
      icon: FiTrendingUp,
      details: [
        'Modular and extensible architecture',
        'Cloud-native solutions for scalability',
        'Performance optimization for growth',
        'Technology stack that evolves with needs'
      ]
    }
  ]

  const techStack = [
    {
      category: 'Frontend Development',
      technologies: [
        { name: 'React', logo: 'React.svg' },
        { name: 'Next.js', logo: 'Next.js.svg' },
        { name: 'Vue.js', logo: 'Vue.js.svg' },
        { name: 'TypeScript', logo: 'TypeScript.svg' },
        { name: 'Tailwind CSS', logo: 'Tailwind CSS.svg' },
        { name: 'JavaScript', logo: 'JavaScript.svg' },
        { name: 'Vite.js', logo: 'Vite.js.svg' }
      ]
    },
    {
      category: 'Backend Development',
      technologies: [
        { name: 'Node.js', logo: 'Node.js.svg' },
        { name: 'Express', logo: 'Express.svg' },
        { name: 'Nest.js', logo: 'Nest.js.svg' },
        { name: 'Laravel', logo: 'Laravel.png' },
        { name: 'Python', logo: 'Python.svg' },
        { name: 'Django', logo: 'Django.svg' },
        { name: 'CodeIgniter', logo: 'CodeIgniter.svg' },
        { name: 'CakePHP', logo: 'CakePHP.svg' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      technologies: [
        { name: 'AWS', logo: 'AWS.png' },
        { name: 'Azure', logo: 'Azure.svg' },
        { name: 'Google Cloud', logo: 'Google Cloud.svg' },
        { name: 'Docker', logo: 'Docker.svg' },
        { name: 'Kubernetes', logo: 'Kubernetes.svg' },
        { name: 'Terraform', logo: 'HashiCorp Terraform.svg' },
        { name: 'Jenkins', logo: 'Jenkins.svg' },
        { name: 'CircleCI', logo: 'CircleCI.svg' },
        { name: 'GitHub Actions', logo: 'GitHub Actions.svg' },
        { name: 'Argo CD', logo: 'Argo CD.svg' },
        { name: 'Rancher', logo: 'Rancher.svg' }
      ]
    },
    {
      category: 'Database & Storage',
      technologies: [
        { name: 'MongoDB', logo: 'MongoDB.svg' },
        { name: 'PostgreSQL', logo: 'PostgresSQL.svg' },
        { name: 'Redis', logo: 'Redis.svg' },
        { name: 'MySQL', logo: 'MySQL.svg' },
        { name: 'Elasticsearch', logo: 'Elastic Search.svg' },
        { name: 'Firebase', logo: 'Firebase.svg' }
      ]
    },
    {
      category: 'Development Tools',
      technologies: [
        { name: 'GitHub', logo: 'GitHub.svg' },
        { name: 'GitLab', logo: 'GitLab.svg' },
        { name: 'Digital Ocean', logo: 'Digital Ocean.svg' },
        { name: 'WordPress', logo: 'WordPress.svg' },
        { name: 'Ionic', logo: 'Ionic.svg' },
        { name: 'Adobe Commerce', logo: 'Adobe Commerce (Magneto).svg' }
      ]
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project roadmap.',
      icon: FiMonitor
    },
    {
      step: '02',
      title: 'Design & Development',
      description: 'Our team creates stunning designs and builds robust applications.',
      icon: FiCode
    },
    {
      step: '03',
      title: 'Testing & Quality Assurance',
      description: 'Comprehensive testing ensures your application works flawlessly.',
      icon: FiShield
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing maintenance.',
      icon: FiCloud
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'NeuraStack transformed our business with their innovative solutions. The team is professional, responsive, and delivers exceptional results.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, DataFlow Systems',
      content: 'Outstanding technical expertise and project management. They delivered our complex application ahead of schedule.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, GreenTech Solutions',
      content: 'The team understood our vision perfectly and brought it to life. Highly recommend their services.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ]

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        background: isDarkMode 
          ? '#0f172a'
          : '#ffffff',
        padding: '6rem 0 4rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
          {/* Main Hero Content */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ marginBottom: '2rem' }}
            >
              <h1 style={{
                fontSize: '3.5rem',
                fontWeight: '700',
                color: isDarkMode ? '#ffffff' : '#1e293b',
                marginBottom: '1rem',
                lineHeight: '1.1',
                letterSpacing: '-0.02em'
              }}>
                Enabling Digital Business Solutions
              </h1>
              
              <p style={{
                fontSize: '1.25rem',
                color: isDarkMode ? '#cbd5e1' : '#64748b',
                lineHeight: '1.6',
                maxWidth: '800px',
                margin: '0 auto 2rem'
              }}>
                With our advanced technology infrastructure, transform your business with innovative web applications, mobile solutions, and cloud services in no time.
              </p>

              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '1rem 2.5rem',
                    borderRadius: '2rem',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Let's Connect
                  <FiArrowRight style={{ width: '18px', height: '18px' }} />
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Featured Products Section */}
          <div style={{ marginBottom: '4rem' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ textAlign: 'center', marginBottom: '3rem' }}
            >
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: isDarkMode ? '#ffffff' : '#1e293b',
                marginBottom: '1rem'
              }}>
                Our Featured Products
              </h2>
              <p style={{
                fontSize: '1.125rem',
                color: isDarkMode ? '#cbd5e1' : '#64748b',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Innovative solutions designed to transform your business operations
              </p>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem'
            }}>
              {/* Hospital Management System */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  background: isDarkMode 
                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)'
                    : 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
                  padding: '2.5rem',
                  borderRadius: '2rem',
                  border: `1px solid ${isDarkMode ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)'}`,
                  boxShadow: '0 15px 35px rgba(59, 130, 246, 0.1)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(59, 130, 246, 0.2)' }}
              >
                {/* Background Pattern */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  borderRadius: '50%',
                  opacity: 0.1,
                  filter: 'blur(40px)'
                }} />
                
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                      borderRadius: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)'
                    }}>
                      <FiSettings style={{ width: '22px', height: '22px', color: 'white' }} />
                    </div>
                    <div>
                      <span style={{
                        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        Healthcare Technology
                      </span>
                    </div>
                  </div>

                  <h3 style={{
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    color: isDarkMode ? '#ffffff' : '#1e293b',
                    marginBottom: '1rem',
                    lineHeight: '1.2'
                  }}>
                    DocBots - AI-Powered Hospital Management
                  </h3>
                  
                  <p style={{
                    fontSize: '1.125rem',
                    color: isDarkMode ? '#cbd5e1' : '#64748b',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}>
                    Transform your healthcare facility with DocBots, our intelligent hospital management system featuring AI-driven patient care, automated workflows, and comprehensive digital health solutions. Designed for modern healthcare excellence.
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap'
                  }}>
                    <a href="https://docbots.sugandh.online/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                          color: 'white',
                          border: 'none',
                          padding: '0.75rem 1.5rem',
                          borderRadius: '1.5rem',
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        Visit DocBots
                        <FiExternalLink style={{ width: '14px', height: '14px' }} />
                      </motion.button>
                    </a>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: isDarkMode ? '#cbd5e1' : '#64748b',
                      fontSize: '0.875rem'
                    }}>
                      <FiCloud style={{ width: '16px', height: '16px', color: '#3b82f6' }} />
                      <span>Cloud-Based</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Real Estate Platform */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  background: isDarkMode 
                    ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.1) 100%)'
                    : 'linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(5, 150, 105, 0.05) 100%)',
                  padding: '2.5rem',
                  borderRadius: '2rem',
                  border: `1px solid ${isDarkMode ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.1)'}`,
                  boxShadow: '0 15px 35px rgba(16, 185, 129, 0.1)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(16, 185, 129, 0.2)' }}
              >
                {/* Background Pattern */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  borderRadius: '50%',
                  opacity: 0.1,
                  filter: 'blur(40px)'
                }} />
                
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      borderRadius: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 20px rgba(16, 185, 129, 0.3)'
                    }}>
                      <FiMonitor style={{ width: '22px', height: '22px', color: 'white' }} />
                    </div>
                    <div>
                      <span style={{
                        background: 'linear-gradient(135deg, #10b981, #059669)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        Real Estate Technology
                      </span>
                    </div>
                  </div>

                  <h3 style={{
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    color: isDarkMode ? '#ffffff' : '#1e293b',
                    marginBottom: '1rem',
                    lineHeight: '1.2'
                  }}>
                    Next-Generation Real Estate Platform
                  </h3>
                  
                  <p style={{
                    fontSize: '1.125rem',
                    color: isDarkMode ? '#cbd5e1' : '#64748b',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}>
                    Revolutionize property management with our advanced real estate platform. Features virtual tours, AI-powered property matching, and comprehensive CRM for real estate professionals.
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap'
                  }}>
                    <Link to="/solutions" style={{ textDecoration: 'none' }}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                          color: 'white',
                          border: 'none',
                          padding: '0.75rem 1.5rem',
                          borderRadius: '1.5rem',
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          cursor: 'pointer',
                          boxShadow: '0 8px 20px rgba(16, 185, 129, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        Explore Platform
                        <FiArrowRight style={{ width: '14px', height: '14px' }} />
                      </motion.button>
                    </Link>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: isDarkMode ? '#cbd5e1' : '#64748b',
                      fontSize: '0.875rem'
                    }}>
                      <FiStar style={{ width: '16px', height: '16px', color: '#10b981' }} />
                      <span>AI-Powered</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Services Overview Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {/* Web Development Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                background: isDarkMode 
                  ? 'rgba(30, 41, 59, 0.5)'
                  : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                padding: '2rem',
                borderRadius: '1.5rem',
                border: `1px solid ${isDarkMode ? 'rgba(55, 65, 81, 0.3)' : 'rgba(226, 232, 240, 0.5)'}`,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)'
              }}>
                <FiCode style={{ width: '24px', height: '24px', color: 'white' }} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: isDarkMode ? '#ffffff' : '#1e293b',
                marginBottom: '1rem'
              }}>
                Web Development
              </h3>
              <p style={{
                fontSize: '1rem',
                color: isDarkMode ? '#cbd5e1' : '#64748b',
                lineHeight: '1.6'
              }}>
                Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.
              </p>
            </motion.div>

            {/* Mobile Solutions Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                background: isDarkMode 
                  ? 'rgba(30, 41, 59, 0.5)'
                  : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                padding: '2rem',
                borderRadius: '1.5rem',
                border: `1px solid ${isDarkMode ? 'rgba(55, 65, 81, 0.3)' : 'rgba(226, 232, 240, 0.5)'}`,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)'
              }}>
                <FiSmartphone style={{ width: '24px', height: '24px', color: 'white' }} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: isDarkMode ? '#ffffff' : '#1e293b',
                marginBottom: '1rem'
              }}>
                Mobile Solutions
              </h3>
              <p style={{
                fontSize: '1rem',
                color: isDarkMode ? '#cbd5e1' : '#64748b',
                lineHeight: '1.6'
              }}>
                Cross-platform mobile applications that deliver seamless user experiences across iOS and Android devices.
              </p>
            </motion.div>

            {/* Cloud Services Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                background: isDarkMode 
                  ? 'rgba(30, 41, 59, 0.5)'
                  : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                padding: '2rem',
                borderRadius: '1.5rem',
                border: `1px solid ${isDarkMode ? 'rgba(55, 65, 81, 0.3)' : 'rgba(226, 232, 240, 0.5)'}`,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                borderRadius: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                boxShadow: '0 10px 25px rgba(245, 158, 11, 0.3)'
              }}>
                <FiCloud style={{ width: '24px', height: '24px', color: 'white' }} />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: isDarkMode ? '#ffffff' : '#1e293b',
                marginBottom: '1rem'
              }}>
                Cloud Infrastructure
              </h3>
              <p style={{
                fontSize: '1rem',
                color: isDarkMode ? '#cbd5e1' : '#64748b',
                lineHeight: '1.6'
              }}>
                Scalable cloud solutions and infrastructure management for reliable, secure, and cost-effective operations.
              </p>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              textAlign: 'center',
              padding: '2rem',
              background: isDarkMode 
                ? 'rgba(30, 41, 59, 0.3)'
                : 'rgba(248, 250, 252, 0.8)',
              borderRadius: '1.5rem',
              border: `1px solid ${isDarkMode ? 'rgba(55, 65, 81, 0.3)' : 'rgba(226, 232, 240, 0.5)'}`
            }}
          >
            <p style={{
              fontSize: '1rem',
              color: isDarkMode ? '#cbd5e1' : '#64748b',
              marginBottom: '1rem'
            }}>
              Trusted by 500+ Companies Worldwide
            </p>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiAward style={{ color: '#f59e0b', width: '20px', height: '20px' }} />
                <span style={{ color: isDarkMode ? '#ffffff' : '#1e293b', fontWeight: '600' }}>Award Winning</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiShield style={{ color: '#10b981', width: '20px', height: '20px' }} />
                <span style={{ color: isDarkMode ? '#ffffff' : '#1e293b', fontWeight: '600' }}>Secure & Reliable</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiTrendingUp style={{ color: '#3b82f6', width: '20px', height: '20px' }} />
                <span style={{ color: isDarkMode ? '#ffffff' : '#1e293b', fontWeight: '600' }}>Proven Results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ 
        padding: '4rem 0', 
        background: isDarkMode 
          ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem'
            }}
          >
            {stats.map((stat, index) => (
              <InteractiveCard key={index} style={{
                background: isDarkMode 
                  ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
                  : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                padding: '2rem',
                borderRadius: '1.5rem',
                textAlign: 'center',
                border: `1px solid ${isDarkMode ? '#374151' : '#e2e8f0'}`,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.5rem'
                }}>
                  {stat.number === '24/7' ? '24/7' : <AnimatedCounter end={parseInt(stat.number.replace(/[^\d]/g, ''))} />}
                </div>
                <div style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: isDarkMode ? '#cbd5e1' : '#64748b'
                }}>
                  {stat.label}
                </div>
              </InteractiveCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{
        padding: '6rem 0',
        background: isDarkMode 
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: isDarkMode ? '#ffffff' : '#1e293b',
              marginBottom: '1rem'
            }}>
              Why Choose Us
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: isDarkMode ? '#cbd5e1' : '#64748b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </motion.div>

          <div style={{
              display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem' 
          }}>
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                    style={{
                  background: isDarkMode 
                    ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
                    : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  padding: '2.5rem',
                  borderRadius: '1.5rem',
                  border: `1px solid ${isDarkMode ? '#374151' : '#e2e8f0'}`,
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{ 
                        width: '60px',
                        height: '60px',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  borderRadius: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <feature.icon style={{ width: '28px', height: '28px', color: 'white' }} />
                </div>

                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: isDarkMode ? '#ffffff' : '#1e293b',
                  marginBottom: '1rem'
                }}>
                  {feature.title}
                </h3>

                <p style={{
                  fontSize: '1rem',
                  color: isDarkMode ? '#cbd5e1' : '#64748b',
                  lineHeight: '1.6'
                }}>
                  {feature.description}
                </p>
                    </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section style={{ 
        padding: '6rem 0', 
        background: isDarkMode 
          ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          background: isDarkMode 
            ? 'radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)'
            : 'radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.02) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.02) 0%, transparent 50%)',
          zIndex: 0
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: isDarkMode ? '#ffffff' : '#1e293b',
              marginBottom: '1rem'
            }}>
              Our Tech Stack
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: isDarkMode ? '#cbd5e1' : '#64748b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              We use cutting-edge technologies to build modern, scalable, and secure applications.
            </p>
          </motion.div>

          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              style={{ marginBottom: '3rem' }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: isDarkMode ? '#ffffff' : '#1e293b',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                {category.category}
              </h3>
              
          <div style={{ 
            display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem'
          }}>
                {category.technologies.map((tech, techIndex) => (
            <motion.div
                    key={techIndex}
                    whileHover={{ y: -5, scale: 1.02 }}
                    style={{
                      background: isDarkMode 
                        ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
                        : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                      padding: '1.5rem',
                      borderRadius: '1rem',
                      border: `1px solid ${isDarkMode ? '#374151' : '#e2e8f0'}`,
                      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
                      textAlign: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <TechLogo name={tech.name} logo={tech.logo} />
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: isDarkMode ? '#ffffff' : '#1e293b',
                      marginTop: '0.75rem'
                    }}>
                      {tech.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Development Process Section */}
      <section style={{
        padding: '6rem 0',
        background: isDarkMode 
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
            >
              <h2 style={{ 
              fontSize: '3rem',
              fontWeight: '800',
              color: isDarkMode ? '#ffffff' : '#1e293b',
              marginBottom: '1rem'
            }}>
              Our Development Process
              </h2>
              <p style={{ 
              fontSize: '1.25rem',
              color: isDarkMode ? '#cbd5e1' : '#64748b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              A proven methodology that ensures quality, efficiency, and successful project delivery.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {processSteps.map((step, index) => (
                  <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  background: isDarkMode 
                    ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
                    : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  padding: '2.5rem',
                  borderRadius: '1.5rem',
                  border: `1px solid ${isDarkMode ? '#374151' : '#e2e8f0'}`,
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                  position: 'relative'
                }}
                  >
                    <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  borderRadius: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: 'white'
                    }}>
                  {step.step}
                    </div>

                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: isDarkMode ? '#ffffff' : '#1e293b',
                  marginBottom: '1rem'
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontSize: '1rem',
                  color: isDarkMode ? '#cbd5e1' : '#64748b',
                  lineHeight: '1.6'
                }}>
                  {step.description}
                </p>
                  </motion.div>
                ))}
              </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{
        padding: '6rem 0',
        background: isDarkMode 
          ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: isDarkMode ? '#ffffff' : '#1e293b',
              marginBottom: '1rem'
            }}>
              What Our Clients Say
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: isDarkMode ? '#cbd5e1' : '#64748b',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Don't just take our word for it. Here's what our satisfied clients have to say about our work.
            </p>
            </motion.div>
            
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {testimonials.map((testimonial, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                  background: isDarkMode 
                    ? 'linear-gradient(135deg, #1e293b 0%, #334155 100%)'
                    : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  padding: '2.5rem',
                  borderRadius: '1.5rem',
                  border: `1px solid ${isDarkMode ? '#374151' : '#e2e8f0'}`,
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center'
                }}
              >
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  margin: '0 auto 1.5rem',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: 'white'
                }}>
                  {testimonial.name.charAt(0)}
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '0.25rem',
                  marginBottom: '1rem'
                }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} style={{ width: '20px', height: '20px', color: '#fbbf24' }} />
                  ))}
              </div>
              
                <p style={{
                  fontSize: '1rem',
                  color: isDarkMode ? '#cbd5e1' : '#64748b',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.content}"
                </p>

                <div>
                  <h4 style={{
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    color: isDarkMode ? '#ffffff' : '#1e293b',
                    marginBottom: '0.25rem'
                  }}>
                    {testimonial.name}
                  </h4>
                  <p style={{
                    fontSize: '0.875rem',
                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                  }}>
                    {testimonial.role}
                  </p>
                  </div>
              </motion.div>
                ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '6rem 0', 
        background: isDarkMode 
          ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              padding: '4rem 2rem',
              borderRadius: '2rem',
              textAlign: 'center',
              color: 'white',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <h2 style={{ 
              fontSize: '3rem',
              fontWeight: '800',
              marginBottom: '1rem'
            }}>
              Ready to Start Your Project?
            </h2>
            
            <p style={{ 
              fontSize: '1.25rem',
              marginBottom: '2.5rem',
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto 2.5rem'
            }}>
              Let's discuss your requirements and create something amazing together. 
              Get in touch with our team today.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: 'white',
                    color: '#3b82f6',
                    border: 'none',
                    padding: '1rem 2rem',
                    borderRadius: '3rem',
                fontSize: '1.125rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  Get Started Today
                </motion.button>
              </Link>
              
              <Link to="/solutions" style={{ textDecoration: 'none' }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: 'transparent',
                    color: 'white',
                    border: '2px solid white',
                padding: '1rem 2rem',
                    borderRadius: '3rem',
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  View Our Work
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
  )
}

export default Home