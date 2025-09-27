import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { useTheme } from '../contexts/ThemeContext'
import ScrollTriggeredAnimation from '../components/ScrollTriggeredAnimation'
import FloatingElements from '../components/FloatingElements'
import InteractiveCard from '../components/InteractiveCard'
import Transform3D from '../components/Transform3D'
import ScrollProgress from '../components/ScrollProgress'
import { 
  FiShoppingCart, 
  FiUsers, 
  FiBarChart, 
  FiSettings,
  FiArrowRight,
  FiCheck,
  FiCode,
  FiCloud,
  FiShield,
  FiZap,
  FiLayers,
  FiDatabase,
  FiMonitor,
  FiSmartphone,
  FiTrendingUp,
  FiGlobe,
  FiCpu,
  FiServer
} from 'react-icons/fi'

const Solutions = () => {
  const [activeSolution, setActiveSolution] = useState(0)
  const { isDarkMode } = useTheme()

  const solutions = [
    {
      id: 0,
      title: 'E-commerce Platform',
      description: 'Complete online marketplace with advanced features and seamless user experience',
      icon: FiShoppingCart,
      color: '#3b82f6',
      features: [
        'Multi-vendor marketplace',
        'Advanced payment processing',
        'Inventory management',
        'AI-powered recommendations',
        'Mobile-responsive design',
        'Analytics dashboard'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Redis'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 1,
      title: 'CRM System',
      description: 'Manage customer relationships and sales pipelines efficiently with powerful automation',
      icon: FiUsers,
      color: '#10b981',
      features: [
        'Lead & Opportunity Management',
        'Customer Segmentation',
        'Sales Automation',
        'Reporting & Analytics',
        'Integration with Marketing Tools',
        'Mobile Access'
      ],
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'AWS SQS'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      title: 'AI Analytics Dashboard',
      description: 'Intelligent business intelligence platform with predictive analytics and insights',
      icon: FiBarChart,
      color: '#8b5cf6',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom report generation',
        'Machine learning insights',
        'Interactive dashboards',
        'Data export capabilities'
      ],
      technologies: ['React', 'Python', 'TensorFlow', 'D3.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      title: 'Project Management',
      description: 'Streamlined project workflows and team collaboration with advanced tracking tools',
      icon: FiSettings,
      color: '#f59e0b',
      features: [
        'Task & Milestone Tracking',
        'Resource Allocation',
        'Gantt Charts & Timelines',
        'Real-time Collaboration',
        'Reporting & Dashboards',
        'Integrations (Slack, GitHub)'
      ],
      technologies: ['Next.js', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Jira API'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 4,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications with seamless user experience across all devices',
      icon: FiSmartphone,
      color: '#06b6d4',
      features: [
        'iOS & Android Development',
        'React Native Cross-Platform',
        'Flutter Applications',
        'Progressive Web Apps (PWA)',
        'App Store Optimization',
        'Push Notifications & Analytics'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 5,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions and DevOps services for modern business operations',
      icon: FiCloud,
      color: '#f97316',
      features: [
        'AWS & Azure Migration',
        'Container Orchestration',
        'CI/CD Pipeline Setup',
        'Cloud Security & Compliance',
        'Auto-scaling Solutions',
        '24/7 Monitoring & Support'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 6,
      title: 'Data Analytics & AI',
      description: 'Intelligent data processing and machine learning solutions for business insights',
      icon: FiTrendingUp,
      color: '#8b5cf6',
      features: [
        'Big Data Processing',
        'Machine Learning Models',
        'Predictive Analytics',
        'Business Intelligence Dashboards',
        'Data Visualization',
        'Natural Language Processing'
      ],
      technologies: ['Python', 'TensorFlow', 'Apache Spark', 'Power BI', 'Tableau'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 7,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your business from cyber threats',
      icon: FiShield,
      color: '#dc2626',
      features: [
        'Security Assessment & Auditing',
        'Penetration Testing',
        'Security Monitoring',
        'Compliance Management',
        'Incident Response',
        'Security Training & Awareness'
      ],
      technologies: ['OWASP', 'SIEM', 'Firewall', 'SSL/TLS', 'Multi-Factor Auth'],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ]

  const saasPlatform = {
    title: 'NeuraStack SAAS Platform',
    description: 'Comprehensive Software-as-a-Service platform built with modern technologies for scalable business applications',
    icon: FiLayers,
    color: '#8b5cf6',
    features: [
      'Multi-tenant Architecture',
      'Real-time Data Processing',
      'Advanced Analytics & Reporting',
      'Automated Scaling & Load Balancing',
      'API-First Development',
      'Microservices Architecture',
      'Advanced Security & Compliance',
      'Mobile-First Responsive Design'
    ],
    techStack: {
      backend: [
        { name: 'Laravel', category: 'PHP Framework', icon: '🐘', color: '#ff2d20' },
        { name: 'Node.js', category: 'JavaScript Runtime', icon: '🟢', color: '#339933' },
        { name: 'Python', category: 'Programming Language', icon: '🐍', color: '#3776ab' },
        { name: 'CodeIgniter', category: 'PHP Framework', icon: '🔥', color: '#ee4323' }
      ],
      frontend: [
        { name: 'React', category: 'JavaScript Library', icon: '⚛️', color: '#61dafb' },
        { name: 'Next.js', category: 'React Framework', icon: '▲', color: '#000000' },
        { name: 'Vue.js', category: 'JavaScript Framework', icon: '💚', color: '#4fc08d' },
        { name: 'TypeScript', category: 'JavaScript Superset', icon: '🔷', color: '#3178c6' }
      ],
      database: [
        { name: 'MySQL', category: 'Relational Database', icon: '🐬', color: '#4479a1' },
        { name: 'PostgreSQL', category: 'Advanced Database', icon: '🐘', color: '#336791' },
        { name: 'MongoDB', category: 'NoSQL Database', icon: '🍃', color: '#47a248' },
        { name: 'Redis', category: 'In-Memory Database', icon: '🔴', color: '#dc382d' }
      ],
      cloud: [
        { name: 'AWS', category: 'Cloud Platform', icon: '☁️', color: '#ff9900' },
        { name: 'Docker', category: 'Containerization', icon: '🐳', color: '#2496ed' },
        { name: 'Kubernetes', category: 'Container Orchestration', icon: '⚙️', color: '#326ce5' },
        { name: 'Nginx', category: 'Web Server', icon: '🌐', color: '#009639' }
      ]
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }

  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '100+', label: 'Enterprise Clients' },
    { number: '10+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <>
      <SEO 
        title="Business Solutions - NeuraStack Solutions"
        description="Comprehensive technology solutions for modern businesses. E-commerce platforms, CRM systems, AI analytics, and custom software development."
        keywords="business solutions, e-commerce platform, CRM system, AI analytics, custom software development, technology consulting"
        url="https://neurastack.com/solutions"
      />
      <ScrollProgress color="#667eea" height="4px" />
      
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: isDarkMode ? '#111827' : '#ffffff',
        transition: 'background-color 0.3s ease'
      }}>
      {/* Hero Section */}
        <section className="hero" style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '8rem 0 6rem',
        color: 'white',
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
            opacity: 0.3,
            animation: 'float 20s ease-in-out infinite'
          }} />
          
          <FloatingElements 
            count={6}
            size="medium"
            colors={[
              'rgba(255, 255, 255, 0.2)',
              'rgba(255, 255, 255, 0.15)',
              'rgba(255, 255, 255, 0.1)',
              'rgba(245, 158, 11, 0.3)',
              'rgba(59, 130, 246, 0.2)'
            ]}
          />
          
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
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
              🚀 Proven Business Solutions
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
              Solutions That{' '}
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
                    animation: 'gradient-shift 3s ease-in-out infinite'
                  }}
                >
                  Drive Results
                </motion.span>
            </h1>
            
            <p style={{ 
              fontSize: '1.25rem', 
              marginBottom: '2.5rem', 
              lineHeight: '1.6',
              opacity: 0.9,
              maxWidth: '600px',
                margin: '0 auto 2.5rem',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>
              Discover our comprehensive suite of business solutions designed to streamline 
              operations, enhance productivity, and accelerate growth.
            </p>
          </motion.div>
        </div>
      </section>

        {/* Stats Section */}
        <section className="stats" style={{ 
          padding: '6rem 0',
          backgroundColor: '#fafafa',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div className="stats-content" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '2rem', 
                textAlign: 'center' 
              }}
            >
              {stats.map((stat, index) => (
                <ScrollTriggeredAnimation
                  key={stat.label}
                  animation="scaleIn"
                  delay={index * 0.1}
                >
                  <InteractiveCard
                    tiltIntensity={5}
                    scaleOnHover={1.02}
                    style={{
                      padding: '3rem 2rem',
                      background: '#ffffff',
                      borderRadius: '1.5rem',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                      position: 'relative',
                      overflow: 'hidden',
                      height: '100%',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{ 
                      fontSize: '3.5rem', 
                      fontWeight: '700', 
                      color: '#1f2937', 
                      marginBottom: '1rem',
                      fontFamily: 'Poppins, system-ui, sans-serif',
                      textAlign: 'center',
                      lineHeight: '1'
                    }}>
                      {stat.number}
                    </div>
                    <div style={{ 
                      color: '#6b7280', 
                      fontSize: '1.125rem', 
                      fontWeight: '500',
                      lineHeight: '1.4',
                      textAlign: 'center'
                    }}>
                      {stat.label}
                    </div>
                  </InteractiveCard>
                </ScrollTriggeredAnimation>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="services" style={{ 
          padding: '6rem 0', 
          backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
          position: 'relative'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <ScrollTriggeredAnimation animation="fadeInUp">
              <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
                  fontSize: '3rem', 
                  fontWeight: '800', 
                  color: isDarkMode ? '#ffffff' : '#1f2937', 
                  marginBottom: '1rem',
                  fontFamily: 'Poppins, system-ui, sans-serif',
                  lineHeight: '1.2'
                }}>
                  Our Solutions
            </h2>
            <p style={{ 
                  fontSize: '1.25rem', 
                  color: isDarkMode ? '#d1d5db' : '#6b7280', 
                  maxWidth: '700px', 
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
                  Comprehensive technology solutions designed to transform your business and drive growth.
            </p>
              </div>
            </ScrollTriggeredAnimation>

            {/* Solutions Grid */}
          <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem'
          }}>
            {solutions.map((solution, index) => (
                <ScrollTriggeredAnimation
                key={solution.id}
                  animation="fadeInUp"
                  delay={index * 0.1}
                >
                  <Transform3D intensity={2}>
                    <InteractiveCard
                      tiltIntensity={1}
                      scaleOnHover={1.01}
              style={{
                        backgroundColor: isDarkMode ? '#374151' : '#ffffff',
                borderRadius: '1.5rem',
                        padding: '0',
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                        border: `1px solid ${isDarkMode ? '#4b5563' : '#e2e8f0'}`,
                        position: 'relative',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onClick={() => setActiveSolution(solution.id)}
                    >
                      {/* Gradient overlay */}
                  <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '5px',
                        background: `linear-gradient(90deg, ${solution.color}, ${solution.color}88, ${solution.color})`,
                        borderRadius: '1.5rem 1.5rem 0 0'
                      }} />

                      {/* Image */}
                      <div style={{
                        height: '200px',
                        backgroundImage: `url(${solution.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative'
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: '1rem',
                          right: '1rem',
                    width: '60px',
                    height: '60px',
                          background: `linear-gradient(135deg, ${solution.color}, ${solution.color}dd)`,
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                          boxShadow: `0 8px 25px ${solution.color}40`
                        }}>
                          <solution.icon style={{ 
                            width: '28px', 
                            height: '28px', 
                            color: 'white' 
                          }} />
                  </div>
                      </div>

                      {/* Content */}
                      <div style={{ padding: '2rem' }}>
                        <h3 style={{ 
                          fontSize: '1.5rem', 
                          fontWeight: '700', 
                          color: isDarkMode ? '#ffffff' : '#1f2937', 
                          margin: '0 0 1rem 0',
                          fontFamily: 'Poppins, system-ui, sans-serif'
                        }}>
                          {solution.title}
                    </h3>
                        
                        <p style={{ 
                          fontSize: '1rem', 
                          color: isDarkMode ? '#d1d5db' : '#6b7280', 
                          marginBottom: '1.5rem',
                          lineHeight: '1.6'
                        }}>
                          {solution.description}
                        </p>

                        {/* Features */}
                        <div style={{ marginBottom: '1.5rem' }}>
                          <h4 style={{ 
                            fontSize: '0.875rem', 
                            fontWeight: '600', 
                            color: isDarkMode ? '#ffffff' : '#1f2937', 
                            marginBottom: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}>
                            Key Features
                  </h4>
                          <ul style={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            gap: '0.5rem', 
                            listStyle: 'none', 
                            padding: 0, 
                            margin: 0 
                          }}>
                            {solution.features.slice(0, 3).map((feature, idx) => (
                              <li 
                                key={idx}
                                style={{ 
                                  display: 'flex', 
                                  alignItems: 'center', 
                                  gap: '0.5rem', 
                                  fontSize: '0.875rem', 
                                  color: isDarkMode ? '#d1d5db' : '#4b5563'
                                }}
                              >
                        <div style={{
                                  width: '16px',
                                  height: '16px',
                                  background: `linear-gradient(135deg, ${solution.color}, ${solution.color}dd)`,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                                  <FiCheck style={{ width: '10px', height: '10px', color: 'white' }} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                        {/* Technologies */}
                        <div style={{ marginBottom: '1.5rem' }}>
                          <h4 style={{ 
                        fontSize: '0.875rem', 
                            fontWeight: '600', 
                            color: isDarkMode ? '#ffffff' : '#1f2937', 
                            marginBottom: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}>
                            Technologies
                          </h4>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {solution.technologies.slice(0, 3).map((tech, idx) => (
                              <span
                                key={idx}
                                style={{
                                  padding: '0.25rem 0.75rem',
                                  background: `${solution.color}15`,
                                  color: solution.color,
                                  borderRadius: '0.5rem',
                                  fontSize: '0.75rem',
                                  fontWeight: '500',
                                  border: `1px solid ${solution.color}30`
                                }}
                              >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                        {/* CTA Button */}
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          style={{
                            background: `linear-gradient(135deg, ${solution.color}, ${solution.color}dd)`,
                  color: 'white',
                            border: 'none',
                            padding: '0.75rem 1.5rem',
                  borderRadius: '0.75rem',
                            fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                            boxShadow: `0 4px 15px ${solution.color}40`,
                            transition: 'all 0.3s ease',
                            width: '100%',
                            justifyContent: 'center'
                }}
                >
                  Learn More
                          <FiArrowRight style={{ width: '14px', height: '14px' }} />
                        </motion.button>
                      </div>
                    </InteractiveCard>
                  </Transform3D>
                </ScrollTriggeredAnimation>
              ))}
              </div>

            {/* Industry Solutions Section */}
            <ScrollTriggeredAnimation animation="fadeInUp" delay={0.3}>
              <div style={{ marginBottom: '4rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  <h2 style={{ 
                    fontSize: '2.5rem', 
                    fontWeight: '800', 
                    color: isDarkMode ? '#ffffff' : '#1f2937', 
                    marginBottom: '1rem',
                    fontFamily: 'Poppins, system-ui, sans-serif'
                  }}>
                    Industry Solutions
                  </h2>
                  <p style={{ 
                    fontSize: '1.125rem', 
                    color: isDarkMode ? '#d1d5db' : '#6b7280', 
                    maxWidth: '700px', 
                    margin: '0 auto',
                    lineHeight: '1.6'
                  }}>
                    Tailored technology solutions designed specifically for your industry needs
                  </p>
              </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '1.5rem'
                }}>
                  {/* Healthcare Solutions */}
                  <ScrollTriggeredAnimation animation="fadeInUp" delay={0.1}>
                    <Transform3D intensity={1}>
                      <InteractiveCard
                        tiltIntensity={1}
                        scaleOnHover={1.01}
                        style={{
                          background: 'linear-gradient(135deg, #10b981, #059669)',
                          borderRadius: '1.5rem',
                          padding: '2rem',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
                        }}
                      >
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          width: '100px',
                          height: '100px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '50%',
                          transform: 'translate(30px, -30px)'
                        }} />
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                          Healthcare & Medical
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {['HIPAA Compliant Systems', 'Electronic Health Records', 'Telemedicine Platforms', 'Medical Device Integration', 'Patient Portal Solutions'].map((item, idx) => (
                            <li key={idx} style={{ 
                              marginBottom: '0.5rem', 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '0.5rem',
                              fontSize: '0.875rem'
                            }}>
                              <FiCheck style={{ width: '16px', height: '16px' }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </InteractiveCard>
                    </Transform3D>
                  </ScrollTriggeredAnimation>

                  {/* Financial Services */}
                  <ScrollTriggeredAnimation animation="fadeInUp" delay={0.2}>
                    <Transform3D intensity={1}>
                      <InteractiveCard
                        tiltIntensity={1}
                        scaleOnHover={1.01}
                        style={{
                          background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                          borderRadius: '1.5rem',
                          padding: '2rem',
                          color: 'white',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          width: '100px',
                          height: '100px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '50%',
                          transform: 'translate(30px, -30px)'
                        }} />
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                          Financial Services
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {['Banking Applications', 'Payment Processing', 'Risk Management', 'Compliance Systems', 'Trading Platforms'].map((item, idx) => (
                            <li key={idx} style={{ 
                              marginBottom: '0.5rem', 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '0.5rem',
                              fontSize: '0.875rem'
                            }}>
                              <FiCheck style={{ width: '16px', height: '16px' }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </InteractiveCard>
                    </Transform3D>
                  </ScrollTriggeredAnimation>

                  {/* E-commerce & Retail */}
                  <ScrollTriggeredAnimation animation="fadeInUp" delay={0.3}>
                    <Transform3D intensity={1}>
                      <InteractiveCard
                        tiltIntensity={1}
                        scaleOnHover={1.01}
                        style={{
                          background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                          borderRadius: '1.5rem',
                          padding: '2rem',
                          color: 'white',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          width: '100px',
                          height: '100px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '50%',
                          transform: 'translate(30px, -30px)'
                        }} />
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                          E-commerce & Retail
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {['Online Marketplaces', 'Inventory Management', 'Customer Analytics', 'Multi-channel Sales', 'Supply Chain Solutions'].map((item, idx) => (
                            <li key={idx} style={{ 
                              marginBottom: '0.5rem', 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '0.5rem',
                              fontSize: '0.875rem'
                            }}>
                              <FiCheck style={{ width: '16px', height: '16px' }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </InteractiveCard>
                    </Transform3D>
                  </ScrollTriggeredAnimation>

                  {/* Education Technology */}
                  <ScrollTriggeredAnimation animation="fadeInUp" delay={0.4}>
                    <Transform3D intensity={1}>
                      <InteractiveCard
                        tiltIntensity={1}
                        scaleOnHover={1.01}
                        style={{
                          background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                          borderRadius: '1.5rem',
                          padding: '2rem',
                          color: 'white',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          width: '100px',
                          height: '100px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '50%',
                          transform: 'translate(30px, -30px)'
                        }} />
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                          Education Technology
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {['Learning Management Systems', 'Virtual Classrooms', 'Student Information Systems', 'Assessment Platforms', 'Educational Analytics'].map((item, idx) => (
                            <li key={idx} style={{ 
                              marginBottom: '0.5rem', 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '0.5rem',
                              fontSize: '0.875rem'
                            }}>
                              <FiCheck style={{ width: '16px', height: '16px' }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </InteractiveCard>
                    </Transform3D>
                  </ScrollTriggeredAnimation>

                  {/* Manufacturing & IoT */}
                  <ScrollTriggeredAnimation animation="fadeInUp" delay={0.5}>
                    <Transform3D intensity={1}>
                      <InteractiveCard
                        tiltIntensity={1}
                        scaleOnHover={1.01}
                        style={{
                          background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                          borderRadius: '1.5rem',
                          padding: '2rem',
                          color: 'white',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          width: '100px',
                          height: '100px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '50%',
                          transform: 'translate(30px, -30px)'
                        }} />
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                          Manufacturing & IoT
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {['Industrial IoT Solutions', 'Smart Manufacturing', 'Predictive Maintenance', 'Quality Control Systems', 'Supply Chain Optimization'].map((item, idx) => (
                            <li key={idx} style={{ 
                              marginBottom: '0.5rem', 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '0.5rem',
                              fontSize: '0.875rem'
                            }}>
                              <FiCheck style={{ width: '16px', height: '16px' }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </InteractiveCard>
                    </Transform3D>
                  </ScrollTriggeredAnimation>

                  {/* Real Estate */}
                  <ScrollTriggeredAnimation animation="fadeInUp" delay={0.6}>
                    <Transform3D intensity={1}>
                      <InteractiveCard
                        tiltIntensity={1}
                        scaleOnHover={1.01}
                        style={{
                          background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                          borderRadius: '1.5rem',
                          padding: '2rem',
                          color: 'white',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          width: '100px',
                          height: '100px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '50%',
                          transform: 'translate(30px, -30px)'
                        }} />
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                          Real Estate
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {['Property Management Systems', 'Virtual Property Tours', 'CRM for Real Estate', 'Market Analysis Tools', 'Transaction Management'].map((item, idx) => (
                            <li key={idx} style={{ 
                              marginBottom: '0.5rem', 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '0.5rem',
                              fontSize: '0.875rem'
                            }}>
                              <FiCheck style={{ width: '16px', height: '16px' }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </InteractiveCard>
                    </Transform3D>
                  </ScrollTriggeredAnimation>
                </div>
              </div>
            </ScrollTriggeredAnimation>

            {/* SAAS Platform Section */}
            <ScrollTriggeredAnimation animation="fadeInUp" delay={0.4}>
              <div style={{ marginBottom: '4rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  <h2 style={{ 
                    fontSize: '2.5rem', 
                    fontWeight: '800', 
                    color: isDarkMode ? '#ffffff' : '#1f2937', 
                    marginBottom: '1rem',
                    fontFamily: 'Poppins, system-ui, sans-serif'
                  }}>
                    Our SAAS Platform
                  </h2>
                  <p style={{ 
                    fontSize: '1.125rem', 
                    color: isDarkMode ? '#d1d5db' : '#6b7280', 
                    maxWidth: '600px', 
                    margin: '0 auto',
                    lineHeight: '1.6'
                  }}>
                    Built with cutting-edge technologies for scalable, enterprise-grade applications
                  </p>
                </div>

                <Transform3D intensity={3}>
                  <InteractiveCard
                    tiltIntensity={2}
                    scaleOnHover={1.01}
                    style={{
                      backgroundColor: isDarkMode ? '#374151' : '#ffffff',
                      borderRadius: '2rem',
                      padding: '0',
                      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                      border: `2px solid ${saasPlatform.color}20`,
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Header with gradient */}
                    <div style={{
                      background: `linear-gradient(135deg, ${saasPlatform.color}, ${saasPlatform.color}dd)`,
                      padding: '3rem 2rem',
                      color: 'white',
                      textAlign: 'center',
                      position: 'relative'
                    }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
                        background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                        opacity: 0.3
                      }} />
                      
                      <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
                          initial={{ scale: 0.8 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.5 }}
                          style={{
                            display: 'flex',
                            width: '80px',
                            height: '80px',
                            background: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: '2rem',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '1.5rem',
                            backdropFilter: 'blur(20px)',
                            border: '2px solid rgba(255, 255, 255, 0.3)'
                          }}
                        >
                          <saasPlatform.icon style={{ width: '40px', height: '40px', color: 'white' }} />
                        </motion.div>
                        
                        <h3 style={{
                          fontSize: '2.5rem',
              fontWeight: '800', 
                          marginBottom: '1rem',
                          textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }}>
                          {saasPlatform.title}
                        </h3>
                        
            <p style={{ 
              fontSize: '1.25rem', 
              opacity: 0.9,
              maxWidth: '700px',
                          margin: '0 auto',
                          lineHeight: '1.6'
                        }}>
                          {saasPlatform.description}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack Grid */}
                    <div style={{ padding: '3rem 2rem' }}>
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem'
                      }}>
                        {/* Backend Technologies */}
                        <div>
                          <h4 style={{
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            color: isDarkMode ? '#ffffff' : '#1f2937',
                            marginBottom: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}>
                            <FiServer style={{ color: '#ff6b6b' }} />
                            Backend Technologies
                          </h4>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {saasPlatform.techStack.backend.map((tech, idx) => (
                              <motion.div
                                key={tech.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05, duration: 0.3 }}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.75rem',
                                  padding: '0.75rem',
                                  background: isDarkMode ? '#4b5563' : '#f8fafc',
                                  borderRadius: '0.75rem',
                                  border: `1px solid ${tech.color}30`,
                                  transition: 'all 0.3s ease'
                                }}
                              >
                                <span style={{ fontSize: '1.5rem' }}>{tech.icon}</span>
                                <div>
                                  <div style={{
                                    fontWeight: '600',
                                    color: isDarkMode ? '#ffffff' : '#1f2937',
                                    fontSize: '0.875rem'
                                  }}>
                                    {tech.name}
                                  </div>
                                  <div style={{
                                    fontSize: '0.75rem',
                                    color: isDarkMode ? '#d1d5db' : '#6b7280'
                                  }}>
                                    {tech.category}
                                  </div>
                                </div>
          </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Frontend Technologies */}
                        <div>
                          <h4 style={{
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            color: isDarkMode ? '#ffffff' : '#1f2937',
                            marginBottom: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}>
                            <FiMonitor style={{ color: '#4ecdc4' }} />
                            Frontend Technologies
                          </h4>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {saasPlatform.techStack.frontend.map((tech, idx) => (
                              <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: (idx + 4) * 0.05, duration: 0.3 }}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.75rem',
                                  padding: '0.75rem',
                                  background: isDarkMode ? '#4b5563' : '#f8fafc',
                                  borderRadius: '0.75rem',
                                  border: `1px solid ${tech.color}30`,
                                  transition: 'all 0.3s ease'
                                }}
                              >
                                <span style={{ fontSize: '1.5rem' }}>{tech.icon}</span>
                                <div>
                                  <div style={{
                                    fontWeight: '600',
                                    color: isDarkMode ? '#ffffff' : '#1f2937',
                                    fontSize: '0.875rem'
                                  }}>
                                    {tech.name}
                                  </div>
                                  <div style={{
                                    fontSize: '0.75rem',
                                    color: isDarkMode ? '#d1d5db' : '#6b7280'
                                  }}>
                                    {tech.category}
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Database Technologies */}
                        <div>
                          <h4 style={{
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            color: isDarkMode ? '#ffffff' : '#1f2937',
                            marginBottom: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}>
                            <FiDatabase style={{ color: '#45b7d1' }} />
                            Database & Storage
                          </h4>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {saasPlatform.techStack.database.map((tech, idx) => (
                              <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: (idx + 8) * 0.05, duration: 0.3 }}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.75rem',
                                  padding: '0.75rem',
                                  background: isDarkMode ? '#4b5563' : '#f8fafc',
                                  borderRadius: '0.75rem',
                                  border: `1px solid ${tech.color}30`,
                                  transition: 'all 0.3s ease'
                                }}
                              >
                                <span style={{ fontSize: '1.5rem' }}>{tech.icon}</span>
                                <div>
                                  <div style={{
                                    fontWeight: '600',
                                    color: isDarkMode ? '#ffffff' : '#1f2937',
                                    fontSize: '0.875rem'
                                  }}>
                                    {tech.name}
                                  </div>
                                  <div style={{
                                    fontSize: '0.75rem',
                                    color: isDarkMode ? '#d1d5db' : '#6b7280'
                                  }}>
                                    {tech.category}
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Cloud & DevOps */}
                        <div>
                          <h4 style={{
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            color: isDarkMode ? '#ffffff' : '#1f2937',
                            marginBottom: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                          }}>
                            <FiCloud style={{ color: '#96ceb4' }} />
                            Cloud & DevOps
                          </h4>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {saasPlatform.techStack.cloud.map((tech, idx) => (
                              <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: (idx + 12) * 0.05, duration: 0.3 }}
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.75rem',
                                  padding: '0.75rem',
                                  background: isDarkMode ? '#4b5563' : '#f8fafc',
                                  borderRadius: '0.75rem',
                                  border: `1px solid ${tech.color}30`,
                                  transition: 'all 0.3s ease'
                                }}
                              >
                                <span style={{ fontSize: '1.5rem' }}>{tech.icon}</span>
                                <div>
                                  <div style={{
                                    fontWeight: '600',
                                    color: isDarkMode ? '#ffffff' : '#1f2937',
                                    fontSize: '0.875rem'
                                  }}>
                                    {tech.name}
                                  </div>
                                  <div style={{
                                    fontSize: '0.75rem',
                                    color: isDarkMode ? '#d1d5db' : '#6b7280'
                                  }}>
                                    {tech.category}
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Platform Features */}
                      <div style={{ marginTop: '3rem' }}>
                        <h4 style={{
                          fontSize: '1.5rem',
                          fontWeight: '700',
                          color: isDarkMode ? '#ffffff' : '#1f2937',
                          marginBottom: '1.5rem',
                          textAlign: 'center'
                        }}>
                          Platform Capabilities
                        </h4>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                          gap: '1rem'
          }}>
                          {saasPlatform.features.map((feature, idx) => (
              <motion.div
                              key={feature}
                              initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.05, duration: 0.3 }}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '1rem',
                                background: `linear-gradient(135deg, ${saasPlatform.color}15, ${saasPlatform.color}08)`,
                                borderRadius: '0.75rem',
                                border: `1px solid ${saasPlatform.color}30`
                              }}
                            >
                              <div style={{
                                width: '24px',
                                height: '24px',
                                background: `linear-gradient(135deg, ${saasPlatform.color}, ${saasPlatform.color}dd)`,
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                              }}>
                                <FiCheck style={{ width: '14px', height: '14px', color: 'white' }} />
                              </div>
                              <span style={{
                                fontSize: '0.875rem',
                                fontWeight: '500',
                                color: isDarkMode ? '#ffffff' : '#1f2937'
                              }}>
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </InteractiveCard>
                </Transform3D>
              </div>
            </ScrollTriggeredAnimation>

            {/* Consulting Services Section */}
            <ScrollTriggeredAnimation animation="fadeInUp" delay={0.5}>
              <div style={{ marginBottom: '4rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                  <h2 style={{ 
                    fontSize: '2.5rem', 
                    fontWeight: '800', 
                    color: isDarkMode ? '#ffffff' : '#1f2937', 
                    marginBottom: '1rem',
                    fontFamily: 'Poppins, system-ui, sans-serif'
                  }}>
                    Consulting Services
                  </h2>
                  <p style={{ 
                    fontSize: '1.125rem', 
                    color: isDarkMode ? '#d1d5db' : '#6b7280', 
                    maxWidth: '700px', 
                    margin: '0 auto',
                    lineHeight: '1.6'
                  }}>
                    Expert guidance and strategic consulting to accelerate your digital transformation
                  </p>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '2.5rem',
                  maxWidth: '1200px',
                  margin: '0 auto'
                }}>
                  {/* Digital Strategy Consulting */}
                  <ScrollTriggeredAnimation animation="fadeInUp" delay={0.1}>
                    <Transform3D intensity={1}>
                      <InteractiveCard
                        tiltIntensity={1}
                        scaleOnHover={1.01}
                style={{
                          backgroundColor: '#ffffff',
                          borderRadius: '1.25rem',
                          padding: '2.5rem',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                          border: '1px solid rgba(0, 0, 0, 0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                          textAlign: 'center'
                        }}
                      >
                        <div style={{
                          width: '80px',
                          height: '80px',
                          background: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
                          borderRadius: '1.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 2rem auto',
                          boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)'
                        }}>
                          <FiTrendingUp style={{ width: '32px', height: '32px', color: 'white' }} />
                        </div>
                        
                        <h3 style={{
                          fontSize: '1.5rem',
                          fontWeight: '700',
                          color: '#1f2937',
                          marginBottom: '1rem',
                          fontFamily: 'Poppins, system-ui, sans-serif'
                        }}>
                          Digital Strategy Consulting
                        </h3>
                        
                        <p style={{
                          fontSize: '1rem',
                          color: '#6b7280',
                          marginBottom: '2rem',
                          lineHeight: '1.6',
                          textAlign: 'center'
                        }}>
                          Strategic planning and roadmap development for your digital transformation journey.
                        </p>
                        
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                          {['Technology Assessment', 'Digital Roadmap Planning', 'Process Optimization', 'Change Management', 'ROI Analysis'].map((item, idx) => (
                            <li key={idx} style={{ 
                              marginBottom: '0.75rem', 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '0.75rem',
                              fontSize: '0.875rem',
                              color: '#4b5563'
                            }}>
                              <div style={{
                                width: '20px',
                                height: '20px',
                                background: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                              }}>
                                <FiCheck style={{ width: '12px', height: '12px', color: 'white' }} />
                              </div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </InteractiveCard>
                    </Transform3D>
                  </ScrollTriggeredAnimation>

                  {/* Technical Architecture */}
                  <ScrollTriggeredAnimation animation="fadeInUp" delay={0.2}>
                    <Transform3D intensity={1}>
                      <InteractiveCard
                        tiltIntensity={1}
                        scaleOnHover={1.01}
                    style={{ 
                          backgroundColor: '#ffffff',
                          borderRadius: '1.25rem',
                          padding: '2.5rem',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                          border: '1px solid rgba(0, 0, 0, 0.05)',
                          position: 'relative',
                          overflow: 'hidden',
                          textAlign: 'center'
                        }}
                      >
                        <div style={{
                          width: '80px',
                          height: '80px',
                          background: 'linear-gradient(135deg, #10b981, #059669)',
                      borderRadius: '1.5rem', 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                          margin: '0 auto 2rem auto',
                          boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)'
                        }}>
                          <FiCpu style={{ width: '32px', height: '32px', color: 'white' }} />
                        </div>
                        
                        <h3 style={{
                          fontSize: '1.5rem',
                          fontWeight: '700',
                          color: '#1f2937',
                          marginBottom: '1rem',
                          fontFamily: 'Poppins, system-ui, sans-serif'
                        }}>
                          Technical Architecture
                        </h3>
                        
                        <p style={{
                          fontSize: '1rem',
                          color: '#6b7280',
                          marginBottom: '2rem',
                          lineHeight: '1.6',
                          textAlign: 'center'
                        }}>
                          Design scalable, secure, and maintainable technical solutions for your business needs.
                        </p>
                        
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                          {['System Architecture Design', 'Database Optimization', 'API Development', 'Security Implementation', 'Performance Tuning'].map((item, idx) => (
                            <li key={idx} style={{ 
                              marginBottom: '0.75rem', 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '0.75rem',
                              fontSize: '0.875rem',
                              color: '#4b5563'
                            }}>
                              <div style={{
                                width: '20px',
                                height: '20px',
                                background: 'linear-gradient(135deg, #10b981, #059669)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                              }}>
                                <FiCheck style={{ width: '12px', height: '12px', color: 'white' }} />
                              </div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </InteractiveCard>
                    </Transform3D>
                  </ScrollTriggeredAnimation>

                  {/* DevOps & Cloud Migration */}
                  <ScrollTriggeredAnimation animation="fadeInUp" delay={0.3}>
                    <Transform3D intensity={1}>
                      <InteractiveCard
                        tiltIntensity={1}
                        scaleOnHover={1.01}
                        style={{
                          backgroundColor: '#ffffff',
                          borderRadius: '1.25rem',
                          padding: '2.5rem',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                          border: '1px solid rgba(0, 0, 0, 0.05)',
                          position: 'relative',
                          overflow: 'hidden',
                          textAlign: 'center'
                        }}
                      >
                    <div style={{
                          width: '80px',
                          height: '80px',
                          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                      borderRadius: '1.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 2rem auto',
                          boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)'
                        }}>
                          <FiCloud style={{ width: '32px', height: '32px', color: 'white' }} />
                        </div>
                        
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '700', 
                          color: '#1f2937',
                    marginBottom: '1rem', 
                          fontFamily: 'Poppins, system-ui, sans-serif'
                  }}>
                          DevOps & Cloud Migration
                  </h3>

                  <p style={{ 
                    fontSize: '1rem',
                          color: '#6b7280',
                          marginBottom: '2rem',
                          lineHeight: '1.6',
                          textAlign: 'center'
                        }}>
                          Streamline your deployment processes and migrate to cloud infrastructure efficiently.
                        </p>
                        
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                          {['Cloud Migration Strategy', 'CI/CD Pipeline Setup', 'Infrastructure as Code', 'Monitoring & Logging', 'Disaster Recovery'].map((item, idx) => (
                            <li key={idx} style={{ 
                              marginBottom: '0.75rem', 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '0.75rem',
                              fontSize: '0.875rem',
                              color: '#4b5563'
                            }}>
                  <div style={{
                                width: '20px',
                                height: '20px',
                                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                              }}>
                                <FiCheck style={{ width: '12px', height: '12px', color: 'white' }} />
                </div>
                              {item}
                            </li>
            ))}
                        </ul>
                      </InteractiveCard>
                    </Transform3D>
                  </ScrollTriggeredAnimation>
          </div>
              </div>
            </ScrollTriggeredAnimation>

            {/* CTA Section */}
            <ScrollTriggeredAnimation animation="fadeInUp" delay={0.6}>
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '2rem',
                padding: '3rem',
                textAlign: 'center',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
              }}>
          <div style={{
            position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                  opacity: 0.3
                }} />
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                  }}>
                    Ready to Transform Your Business?
                  </h3>
            <p style={{ 
              fontSize: '1.125rem', 
                    marginBottom: '2rem',
                    opacity: 0.9,
              maxWidth: '600px',
                    margin: '0 auto 2rem'
                  }}>
                    Let's discuss how our solutions can help you achieve your business goals and drive growth.
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                padding: '1rem 2rem',
                      borderRadius: '1rem',
                fontSize: '1rem',
                      fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                      gap: '0.75rem',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Get Started Today
                <FiArrowRight style={{ width: '16px', height: '16px' }} />
                  </motion.button>
            </div>
              </div>
            </ScrollTriggeredAnimation>
        </div>
      </section>
    </div>
    </>
  )
}

export default Solutions