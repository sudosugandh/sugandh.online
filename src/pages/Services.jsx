import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SEO from '../components/SEO'
import { useTheme } from '../contexts/ThemeContext'
import InteractiveButton from '../components/InteractiveButton'
import { 
  FiCode, 
  FiCloud, 
  FiCpu, 
  FiSmartphone, 
  FiZap, 
  FiShield,
  FiDatabase,
  FiLayers,
  FiGitBranch,
  FiServer,
  FiMonitor,
  FiTrendingUp,
  FiSettings,
  FiUsers,
  FiCheck,
  FiArrowRight,
  FiTerminal,
  FiPackage,
  FiActivity,
  FiGlobe,
  FiLock,
  FiAward,
  FiTarget
} from 'react-icons/fi'

const Services = () => {
  const { isDarkMode } = useTheme()
  const [activeTab, setActiveTab] = useState('fullstack')

  const serviceCategories = [
    {
      id: 'fullstack',
      title: 'Full Stack Development',
      icon: FiCode,
      color: '#3b82f6',
      description: 'End-to-end web and mobile application development using modern technologies and best practices.',
      features: [
        'Modern React/Vue.js Frontend Development',
        'Node.js/Python Backend APIs',
        'Database Design & Optimization',
        'RESTful & GraphQL APIs',
        'Progressive Web Applications (PWA)',
        'Mobile App Development (React Native)',
        'Third-party Integrations',
        'Performance Optimization'
      ],
      technologies: ['React', 'Vue.js', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'TypeScript', 'GraphQL'],
      process: [
        {
          step: '01',
          title: 'Requirements Analysis',
          description: 'Understanding your business needs and technical requirements'
        },
        {
          step: '02',
          title: 'Architecture Design',
          description: 'Creating scalable and maintainable system architecture'
        },
        {
          step: '03',
          title: 'Development & Testing',
          description: 'Building features with comprehensive testing and quality assurance'
        },
        {
          step: '04',
          title: 'Deployment & Maintenance',
          description: 'Seamless deployment and ongoing support for your application'
        }
      ]
    },
    {
      id: 'devops',
      title: 'DevOps & CI/CD',
      icon: FiZap,
      color: '#10b981',
      description: 'Automated deployment pipelines and infrastructure management for seamless delivery.',
      features: [
        'CI/CD Pipeline Setup & Optimization',
        'Docker Containerization',
        'Kubernetes Orchestration',
        'Infrastructure as Code (IaC)',
        'Monitoring & Logging Solutions',
        'Security Best Practices',
        'Automated Testing Integration',
        'Cloud Infrastructure Management'
      ],
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Terraform', 'AWS', 'Azure', 'GCP'],
      process: [
        {
          step: '01',
          title: 'Infrastructure Assessment',
          description: 'Analyzing current infrastructure and identifying optimization opportunities'
        },
        {
          step: '02',
          title: 'Pipeline Design',
          description: 'Designing automated CI/CD workflows for efficient deployment'
        },
        {
          step: '03',
          title: 'Implementation',
          description: 'Setting up tools and configuring automated processes'
        },
        {
          step: '04',
          title: 'Monitoring & Optimization',
          description: 'Continuous monitoring and performance optimization'
        }
      ]
    },
    {
      id: 'ai',
      title: 'AI/ML Integration',
      icon: FiCpu,
      color: '#8b5cf6',
      description: 'Intelligent automation and machine learning solutions to enhance business operations.',
      features: [
        'Custom Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'Chatbot Development',
        'Data Pipeline Automation',
        'AI-Powered Insights',
        'Integration with Existing Systems'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'Pandas', 'Scikit-learn', 'AWS SageMaker', 'Azure ML'],
      process: [
        {
          step: '01',
          title: 'Data Analysis',
          description: 'Understanding your data and identifying AI opportunities'
        },
        {
          step: '02',
          title: 'Model Development',
          description: 'Building and training custom machine learning models'
        },
        {
          step: '03',
          title: 'Integration',
          description: 'Seamlessly integrating AI solutions into your existing systems'
        },
        {
          step: '04',
          title: 'Optimization',
          description: 'Continuous improvement and performance monitoring'
        }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud Solutions',
      icon: FiCloud,
      color: '#f59e0b',
      description: 'Scalable cloud infrastructure and deployment strategies for optimal performance.',
      features: [
        'Multi-Cloud Architecture',
        'Auto-scaling Solutions',
        'Cost Optimization',
        'Disaster Recovery Planning',
        'Security & Compliance',
        'Migration Services',
        'Cloud-Native Development',
        '24/7 Monitoring & Support'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker', 'Serverless', 'Microservices'],
      process: [
        {
          step: '01',
          title: 'Cloud Strategy',
          description: 'Developing a comprehensive cloud strategy aligned with business goals'
        },
        {
          step: '02',
          title: 'Architecture Planning',
          description: 'Designing scalable and secure cloud architecture'
        },
        {
          step: '03',
          title: 'Migration & Setup',
          description: 'Seamless migration and cloud infrastructure setup'
        },
        {
          step: '04',
          title: 'Optimization',
          description: 'Continuous monitoring and cost optimization'
        }
      ]
    }
  ]

  const stats = [
    { number: '100+', label: 'Projects Delivered', icon: FiTrendingUp },
    { number: '50+', label: 'Happy Clients', icon: FiUsers },
    { number: '99%', label: 'Uptime Guarantee', icon: FiShield },
    { number: '24/7', label: 'Support Available', icon: FiActivity }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <>
      <SEO 
        title="Our Technology Services - Full Stack, DevOps, AI/ML & Cloud"
        description="Explore our comprehensive technology services including full-stack development, DevOps & CI/CD, AI/ML integration, and cloud solutions. Professional development services for modern businesses."
        keywords="full stack development services, DevOps consulting, AI ML integration, cloud solutions, mobile app development, web development, software consulting"
        url="https://neurastack.com/services"
      />
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: isDarkMode ? '#0f172a' : '#fafbfc',
        transition: 'background-color 0.3s ease'
      }}>
      {/* Hero Section - Full Viewport */}
      <section className="hero-full" style={{
        background: isDarkMode 
          ? 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #581c87 100%)'
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Elements */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.4,
          animation: 'float 20s ease-in-out infinite'
        }} />
        
        <div className="container-premium hero-content" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.1))',
                padding: '0.75rem 2rem',
                borderRadius: '3rem',
                marginBottom: '2rem',
                fontSize: '1rem',
                fontWeight: '600',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                color: 'white',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
            >
              🚀 Our Technology Services
            </motion.div>
            
            <h1 style={{
              fontSize: '4.5rem',
              fontWeight: '800',
              marginBottom: '2rem',
              lineHeight: '1.1',
              textShadow: '0 4px 8px rgba(0,0,0,0.2)',
              fontFamily: 'Poppins, system-ui, sans-serif',
              letterSpacing: '-0.02em'
            }}>
              Comprehensive{' '}
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 300 }}
                style={{ 
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 25%, #f97316 50%, #ea580c 75%, #dc2626 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '200% 200%',
                  animation: 'gradient-shift 3s ease infinite',
                  position: 'relative',
                  display: 'inline-block'
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                Technology Services
              </motion.span>
            </h1>
            <p style={{
              fontSize: '1.375rem',
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: '3rem',
              lineHeight: '1.7',
              maxWidth: '700px',
              margin: '0 auto 3rem',
              fontWeight: '400',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              From full-stack development to AI integration and cloud solutions, we provide end-to-end technology services that drive your business forward.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/contact" style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ea580c 100%)',
                color: 'white',
                padding: '1rem 3rem',
                borderRadius: '50px',
                fontSize: '1.25rem',
                fontWeight: '700',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 15px 35px rgba(245, 158, 11, 0.4), 0 5px 15px rgba(0, 0, 0, 0.1)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                position: 'relative',
                overflow: 'hidden'
              }}>
                Get Started <FiArrowRight style={{ width: '22px', height: '22px' }} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-premium" style={{ backgroundColor: isDarkMode ? '#1e293b' : '#ffffff' }}>
        <div className="container-premium">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2rem',
              textAlign: 'center'
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                style={{
                  backgroundColor: isDarkMode ? '#334155' : 'white',
                  borderRadius: '1rem',
                  padding: '2rem',
                  boxShadow: isDarkMode ? '0 10px 20px rgba(0,0,0,0.2)' : '0 10px 20px rgba(0,0,0,0.05)',
                  border: isDarkMode ? '1px solid #475569' : '1px solid #eee',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <stat.icon style={{ width: '48px', height: '48px', color: '#667eea', marginBottom: '0.5rem' }} />
                <div style={{ fontSize: '2.8rem', fontWeight: '800', color: isDarkMode ? '#f8fafc' : '#1f2937' }}>{stat.number}</div>
                <div style={{ fontSize: '1.1rem', color: isDarkMode ? '#94a3b8' : '#6b7280', fontWeight: '600' }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="section-premium" style={{ backgroundColor: isDarkMode ? '#0f172a' : '#f8fafc' }}>
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{
              fontSize: '2.8rem',
              fontWeight: '800',
              color: isDarkMode ? '#f8fafc' : '#1f2937',
              marginBottom: '1rem'
            }}>
              Our Service Categories
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: isDarkMode ? '#94a3b8' : '#6b7280',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Explore our comprehensive range of technology services designed to meet your business needs
            </p>
          </motion.div>

          {/* Service Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                style={{
                  backgroundColor: activeTab === category.id ? '#667eea' : 'transparent',
                  color: activeTab === category.id ? 'white' : '#667eea',
                  border: '2px solid #667eea',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: activeTab === category.id ? '0 4px 8px rgba(0,0,0,0.1)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== category.id) {
                    e.target.style.backgroundColor = '#667eea';
                    e.target.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== category.id) {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#667eea';
                  }
                }}
              >
                <category.icon style={{ width: '20px', height: '20px' }} />
                {category.title}
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <AnimatePresence mode="wait">
            {serviceCategories.map((service) => (
              service.id === activeTab && (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundColor: isDarkMode ? '#1e293b' : 'white',
                    borderRadius: '1.5rem',
                    padding: '3rem',
                    boxShadow: isDarkMode ? '0 10px 20px rgba(0,0,0,0.2)' : '0 10px 20px rgba(0,0,0,0.05)',
                    border: isDarkMode ? '1px solid #334155' : '1px solid #eee'
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
                    {/* Service Header */}
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '80px',
                        height: '80px',
                        backgroundColor: service.color + '15',
                        color: service.color,
                        borderRadius: '1rem',
                        marginBottom: '1.5rem'
                      }}>
                        <service.icon style={{ width: '40px', height: '40px' }} />
                      </div>
                      <h3 style={{ fontSize: '2rem', fontWeight: '700', color: '#1f2937', marginBottom: '1rem' }}>
                        {service.title}
                      </h3>
                      <p style={{ fontSize: '1.1rem', color: '#6b7280', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
                        {service.description}
                      </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                      {/* Features */}
                      <div>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
                          What We Offer:
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          {service.features.map((feature, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                              <FiCheck style={{ width: '20px', height: '20px', color: '#10b981', flexShrink: 0 }} />
                              <span style={{ color: '#4b5563', fontSize: '0.95rem' }}>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
                          Technologies We Use:
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                          {service.technologies.map((tech, index) => (
                            <span key={index} style={{
                              backgroundColor: '#e0f2fe',
                              color: '#3b82f6',
                              padding: '0.5rem 1rem',
                              borderRadius: '0.5rem',
                              fontSize: '0.9rem',
                              fontWeight: '500',
                              border: '1px solid #bfdbfe'
                            }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Process */}
                    <div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1.5rem' }}>
                        Our Process:
                      </h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        {service.process.map((step, index) => (
                          <div key={index} style={{
                            backgroundColor: '#f8fafc',
                            borderRadius: '0.75rem',
                            padding: '1.5rem',
                            border: '1px solid #e2e8f0',
                            position: 'relative'
                          }}>
                            <div style={{
                              position: 'absolute',
                              top: '-0.75rem',
                              left: '1.5rem',
                              backgroundColor: service.color,
                              color: 'white',
                              width: '32px',
                              height: '32px',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '0.875rem',
                              fontWeight: '600'
                            }}>
                              {step.step}
                            </div>
                            <h5 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                              {step.title}
                            </h5>
                            <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.5' }}>
                              {step.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                      <Link to="/contact" style={{
                        backgroundColor: service.color,
                        color: 'white',
                        padding: '1rem 2rem',
                        borderRadius: '0.75rem',
                        fontSize: '1rem',
                        fontWeight: '600',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = service.color + 'dd'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = service.color}
                      >
                        Get Started <FiArrowRight style={{ width: '16px', height: '16px' }} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </section>


      {/* Why Choose Our Services */}
      <section style={{ 
        padding: '6rem 0', 
        background: isDarkMode 
          ? 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)'
          : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '800',
              color: isDarkMode ? '#ffffff' : '#1f2937',
              marginBottom: '1rem',
              fontFamily: 'Poppins, system-ui, sans-serif',
              lineHeight: '1.2'
            }}>
              Why Choose Our Services?
            </h2>
            <p style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
              color: isDarkMode ? '#d1d5db' : '#6b7280',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.7'
            }}>
              We deliver exceptional results through our proven methodology, cutting-edge technology, and unwavering commitment to excellence.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: FiTarget,
                title: 'Proven Track Record',
                description: 'Over 100 successful projects delivered with 99% client satisfaction rate and on-time delivery.',
                color: '#3b82f6',
                stats: '100+ Projects',
                benefits: ['99% Success Rate', 'On-Time Delivery', 'Client Satisfaction', 'Quality Assurance']
              },
              {
                icon: FiShield,
                title: 'Security First',
                description: 'Enterprise-grade security measures and compliance with industry standards to protect your data.',
                color: '#10b981',
                stats: 'Enterprise Security',
                benefits: ['Data Encryption', 'Access Controls', 'Audit Trails', 'Compliance']
              },
              {
                icon: FiZap,
                title: 'Fast Delivery',
                description: 'Agile development methodology ensures faster time-to-market without compromising quality.',
                color: '#f59e0b',
                stats: 'Agile Development',
                benefits: ['Rapid Iterations', 'Continuous Integration', 'Quick Deployments', 'Quality Focus']
              },
              {
                icon: FiUsers,
                title: 'Expert Team',
                description: 'Our team consists of certified professionals with years of experience in cutting-edge technologies.',
                color: '#8b5cf6',
                stats: 'Expert Engineers',
                benefits: ['Certified Professionals', 'Years of Experience', 'Latest Technologies', 'Continuous Learning']
              },
              {
                icon: FiSettings,
                title: '24/7 Support',
                description: 'Round-the-clock technical support and maintenance to keep your systems running smoothly.',
                color: '#ef4444',
                stats: 'Always Available',
                benefits: ['24/7 Monitoring', 'Proactive Support', 'Rapid Response', 'System Maintenance']
              },
              {
                icon: FiTrendingUp,
                title: 'Scalable Solutions',
                description: 'Future-proof architectures that grow with your business and handle increasing demands.',
                color: '#06b6d4',
                stats: 'Future-Ready',
                benefits: ['Scalable Architecture', 'Performance Optimization', 'Cloud Infrastructure', 'Growth Support']
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  transition: { duration: 0.3 }
                }}
                style={{
                  backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                  borderRadius: '1.5rem',
                  padding: '2.5rem',
                  textAlign: 'center',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                  border: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${item.color}, ${item.color}88)`,
                  borderRadius: '1.5rem 1.5rem 0 0'
                }} />

                {/* Stats badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  backgroundColor: `${item.color}15`,
                  color: item.color,
                  padding: '0.5rem 1rem',
                  borderRadius: '1rem',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  border: `1px solid ${item.color}30`
                }}>
                  {item.stats}
                </div>

                <div style={{
                  margin: '0 auto 2rem',
                  padding: '1.5rem',
                  borderRadius: '50%',
                  backgroundColor: `${item.color}15`,
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `2px solid ${item.color}30`
                }}>
                  <item.icon style={{ width: '36px', height: '36px', color: item.color }} />
                </div>

                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700', 
                  marginBottom: '1rem', 
                  color: isDarkMode ? '#ffffff' : '#1f2937',
                  fontFamily: 'Inter, system-ui, sans-serif'
                }}>
                  {item.title}
                </h3>

                <p style={{ 
                  color: isDarkMode ? '#d1d5db' : '#6b7280', 
                  lineHeight: '1.6', 
                  marginBottom: '1.5rem',
                  fontSize: '1rem'
                }}>
                  {item.description}
                </p>

                {/* Benefits Tags */}
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '0.5rem', 
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  {item.benefits.map((benefit, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '0.375rem 0.75rem',
                        background: `${item.color}15`,
                        color: item.color,
                        borderRadius: '0.75rem',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        border: `1px solid ${item.color}30`
                      }}
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* Learn More Button */}
                <InteractiveButton
                  variant="info"
                  size="medium"
                  showContent={true}
                  content={
                    <div style={{ color: isDarkMode ? '#ffffff' : '#1f2937' }}>
                      <h4 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.75rem', color: item.color }}>
                        {item.title} - Service Details
                      </h4>
                      <div style={{ marginBottom: '1rem' }}>
                        <h5 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: isDarkMode ? '#d1d5db' : '#6b7280' }}>
                          What's Included:
                        </h5>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {item.benefits.map((benefit, index) => (
                            <li key={index} style={{ 
                              marginBottom: '0.25rem', 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '0.5rem',
                              fontSize: '0.875rem'
                            }}>
                              <span style={{ color: item.color, fontWeight: '600' }}>✓</span>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div style={{ 
                        background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`, 
                        padding: '0.75rem', 
                        borderRadius: '0.5rem',
                        border: `1px solid ${item.color}30`,
                        textAlign: 'center',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: item.color
                      }}>
                        Ready to get started with {item.title.toLowerCase()}?
                      </div>
                    </div>
                  }
                  style={{
                    background: item.color,
                    color: 'white',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.75rem',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    width: '100%'
                  }}
                >
                  Learn More →
                </InteractiveButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-premium" style={{
        background: isDarkMode 
          ? 'linear-gradient(135deg, #581c87 0%, #4338ca 100%)'
          : 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
        padding: '6rem 0',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 style={{
              fontSize: '2.8rem',
              fontWeight: '800',
              marginBottom: '1.5rem',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}>
              Ready to Transform Your Business?
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '800px',
              margin: '0 auto 2.5rem'
            }}>
              Let's discuss how our comprehensive technology services can accelerate your digital transformation and drive business growth.
            </p>
            <Link to="/contact" style={{
              backgroundColor: '#f59e0b',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '0.75rem',
              fontSize: '1.15rem',
              fontWeight: '700',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 15px rgba(0,0,0,0.2)'
            }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#d97706'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#f59e0b'}
            >
              Schedule a Consultation <FiArrowRight style={{ marginLeft: '0.5rem', display: 'inline-block' }} />
            </Link>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  )
}

export default Services