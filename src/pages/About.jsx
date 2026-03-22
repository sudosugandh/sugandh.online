import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { useTheme } from '../contexts/ThemeContext'
import AnimatedCounter from '../components/AnimatedCounter'
import ScrollTriggeredAnimation from '../components/ScrollTriggeredAnimation'
import FloatingElements from '../components/FloatingElements'
import InteractiveCard from '../components/InteractiveCard'
import { 
  FiTarget, 
  FiEye, 
  FiHeart, 
  FiUsers, 
  FiAward, 
  FiTrendingUp,
  FiCode,
  FiCloud,
  FiCpu,
  FiShield,
  FiGlobe,
  FiZap,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowRight,
  FiStar,
  FiCheck,
  FiMapPin,
  FiPhone,
  FiCalendar,
  FiLayers,
  FiActivity
} from 'react-icons/fi'

const About = () => {
  const { isDarkMode } = useTheme()
  
  const values = [
    {
      icon: FiTarget,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex business challenges.',
      color: '#3b82f6'
    },
    {
      icon: FiUsers,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, fostering open communication and shared success.',
      color: '#10b981'
    },
    {
      icon: FiShield,
      title: 'Quality',
      description: 'We maintain the highest standards in code quality, security, and deliverable excellence.',
      color: '#8b5cf6'
    },
    {
      icon: FiHeart,
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and ethical practices in all our business dealings.',
      color: '#f59e0b'
    }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: '15+ years in technology leadership, passionate about digital transformation and team building. Former VP of Engineering at Microsoft.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#',
      expertise: ['Leadership', 'Strategy', 'Digital Transformation'],
      education: 'MBA from Stanford, BS Computer Science from MIT'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Full-stack architect with expertise in cloud technologies, AI/ML, and scalable system design. Led engineering teams at Google and Amazon.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      linkedin: '#',
      github: '#',
      expertise: ['Cloud Architecture', 'AI/ML', 'System Design'],
      education: 'PhD Computer Science from Carnegie Mellon'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Frontend Developer',
      bio: 'Frontend specialist passionate about creating intuitive user experiences and modern web technologies. Former Senior Developer at Facebook.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      linkedin: '#',
      github: '#',
      expertise: ['React', 'Vue.js', 'UI/UX Design'],
      education: 'BS Computer Science from UC Berkeley'
    },
    {
      name: 'David Kim',
      role: 'Senior DevOps Engineer',
      bio: 'Infrastructure expert focused on automation, security, and reliable deployment pipelines. Former DevOps Lead at Netflix.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      linkedin: '#',
      github: '#',
      expertise: ['Kubernetes', 'AWS', 'CI/CD'],
      education: 'MS Computer Engineering from Georgia Tech'
    },
    {
      name: 'Alex Thompson',
      role: 'Lead Backend Developer',
      bio: 'Backend specialist with expertise in microservices, database optimization, and API design. Former Senior Engineer at Uber.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      linkedin: '#',
      github: '#',
      expertise: ['Node.js', 'Python', 'Microservices'],
      education: 'BS Software Engineering from University of Washington'
    },
    {
      name: 'Lisa Wang',
      role: 'UX/UI Design Lead',
      bio: 'Creative designer with a passion for user-centered design and creating beautiful, functional interfaces. Former Design Lead at Airbnb.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      linkedin: '#',
      twitter: '#',
      expertise: ['UI/UX Design', 'Figma', 'User Research'],
      education: 'MFA Design from Art Center College of Design'
    }
  ]

  const stats = [
    { number: '5+', label: 'Years Experience', icon: FiAward },
    { number: '100+', label: 'Projects Completed', icon: FiTrendingUp },
    { number: '50+', label: 'Happy Clients', icon: FiUsers },
    { number: '24/7', label: 'Support Available', icon: FiActivity }
  ]

  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'NeuraStack Solutions was established with a vision to revolutionize business technology.'
    },
    {
      year: '2020',
      title: 'First Major Client',
      description: 'Successfully delivered our first enterprise-level project for a Fortune 500 company.'
    },
    {
      year: '2021',
      title: 'AI Integration Launch',
      description: 'Expanded our services to include cutting-edge AI and machine learning solutions.'
    },
    {
      year: '2022',
      title: 'Cloud Partnership',
      description: 'Established partnerships with major cloud providers for enhanced service delivery.'
    },
    {
      year: '2023',
      title: 'Team Expansion',
      description: 'Grew our team to 20+ experts across development, design, and DevOps domains.'
    },
    {
      year: '2024',
      title: 'Global Reach',
      description: 'Extended our services to clients across multiple continents with 24/7 support.'
    }
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
        title="About NeuraStack Solutions - Leading Technology Company"
        description="Learn about NeuraStack Solutions, a team of passionate technologists dedicated to transforming businesses through innovative technology solutions, cutting-edge development practices, and intelligent automation."
        keywords="about neurastack, technology company, software development team, business transformation, innovative solutions, technology experts"
        url="https://neurastack.com/about"
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
        
        {/* Enhanced Floating Elements */}
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
              🚀 About Our Company
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
              About{' '}
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
                NeuraStack Solutions
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
              We are a team of passionate technologists dedicated to transforming businesses through innovative technology solutions, cutting-edge development practices, and intelligent automation.
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
                Work With Us <FiArrowRight style={{ width: '22px', height: '22px' }} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-premium stats" style={{ 
        backgroundColor: isDarkMode ? '#1e293b' : '#fafafa',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="stats-content container-premium">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
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
                    background: isDarkMode ? '#334155' : '#ffffff',
                    borderRadius: '1.5rem',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    position: 'relative',
                    overflow: 'hidden',
                    height: '100%',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                    style={{
                      marginBottom: '2rem'
                    }}
                  >
                    <stat.icon style={{ 
                      width: '48px', 
                      height: '48px', 
                      margin: '0 auto', 
                      color: '#667eea',
                      display: 'block'
                    }} />
                  </motion.div>
                  <div style={{ 
                    fontSize: '3.5rem', 
                    fontWeight: '700', 
                    color: '#1f2937', 
                    marginBottom: '1rem',
                    fontFamily: 'Poppins, system-ui, sans-serif',
                    textAlign: 'center',
                    lineHeight: '1'
                  }}>
                    {stat.number === '24/7' ? (
                      <span style={{
                        fontSize: '3.5rem',
                        fontWeight: '700',
                        fontFamily: 'Syne, system-ui, sans-serif',
                        color: isDarkMode ? '#f8fafc' : '#1f2937'
                      }}>24/7</span>
                    ) : (
                      <AnimatedCounter 
                        end={stat.number === '5+' ? 5 : stat.number === '100+' ? 100 : 50} 
                        suffix="+"
                        duration={2}
                        style={{
                          fontSize: '3.5rem',
                          fontWeight: '700',
                          fontFamily: 'Syne, system-ui, sans-serif',
                          color: isDarkMode ? '#f8fafc' : '#1f2937'
                        }}
                      />
                    )}
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

      {/* Mission & Vision Section */}
      <section className="services" style={{ 
        padding: '6rem 0', 
        backgroundColor: isDarkMode ? '#111827' : '#ffffff',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-title"
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{
              fontSize: '3.5rem',
              fontWeight: '800',
              color: isDarkMode ? '#ffffff' : '#1f2937',
              marginBottom: '1rem',
              fontFamily: 'Poppins, system-ui, sans-serif',
              lineHeight: '1.2',
              letterSpacing: '-0.01em'
            }}>
              Our Mission & Vision
            </h2>
            <p style={{
              fontSize: '1.375rem',
              color: isDarkMode ? '#a3a3a3' : '#6b7280',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.7'
            }}>
              We believe in the power of technology to transform businesses and create meaningful impact
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '3rem'
          }}>
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="service-card"
              style={{
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              <div style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '5px',
                background: 'linear-gradient(90deg, #3b82f6, #3b82f688, #3b82f6)',
                borderRadius: '1.5rem 1.5rem 0 0'
              }} />
              
              <motion.div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, #3b82f620, #3b82f610)',
                  color: '#3b82f6',
                  borderRadius: '1.5rem',
                  marginBottom: '2rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <FiTarget style={{ 
                  width: '48px', 
                  height: '48px', 
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                }} />
              </motion.div>
              
              <h3 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                color: isDarkMode ? '#ffffff' : '#1f2937', 
                marginBottom: '1.5rem',
                fontFamily: 'Poppins, system-ui, sans-serif',
                lineHeight: '1.3'
              }}>
                Our Mission
              </h3>
              <p style={{ 
                fontSize: '1.125rem', 
                color: isDarkMode ? '#a3a3a3' : '#6b7280', 
                lineHeight: '1.7',
                fontWeight: '400'
              }}>
                To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We are committed to delivering exceptional results through our expertise in full-stack development, cloud solutions, and AI integration.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="service-card"
              style={{
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              <div style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '5px',
                background: 'linear-gradient(90deg, #10b981, #10b98188, #10b981)',
                borderRadius: '1.5rem 1.5rem 0 0'
              }} />
              
              <motion.div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, #10b98120, #10b98110)',
                  color: '#10b981',
                  borderRadius: '1.5rem',
                  marginBottom: '2rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <FiEye style={{ 
                  width: '48px', 
                  height: '48px', 
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                }} />
              </motion.div>
              
              <h3 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                color: isDarkMode ? '#ffffff' : '#1f2937', 
                marginBottom: '1.5rem',
                fontFamily: 'Poppins, system-ui, sans-serif',
                lineHeight: '1.3'
              }}>
                Our Vision
              </h3>
              <p style={{ 
                fontSize: '1.125rem', 
                color: isDarkMode ? '#a3a3a3' : '#6b7280', 
                lineHeight: '1.7',
                fontWeight: '400'
              }}>
                To be the leading technology partner for businesses worldwide, recognized for our innovation, reliability, and commitment to client success. We envision a future where every business can leverage technology to achieve their full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-premium" style={{ backgroundColor: isDarkMode ? '#0f172a' : '#ffffff' }}>
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
              Our Core Values
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: isDarkMode ? '#94a3b8' : '#6b7280',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              The principles that guide everything we do and shape our company culture
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                style={{
                  backgroundColor: isDarkMode ? '#1e293b' : 'white',
                  borderRadius: '1.5rem',
                  padding: '2.5rem',
                  textAlign: 'center',
                  boxShadow: isDarkMode ? '0 8px 15px rgba(0,0,0,0.2)' : '0 8px 15px rgba(0,0,0,0.05)',
                  border: isDarkMode ? '1px solid #334155' : '1px solid #eee',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  margin: '0 auto 1.5rem',
                  padding: '1.5rem',
                  borderRadius: '50%',
                  backgroundColor: value.color + '20',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <value.icon style={{ width: '36px', height: '36px', color: value.color }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem', color: isDarkMode ? '#f8fafc' : '#1f2937' }}>
                  {value.title}
                </h3>
                <p style={{ color: isDarkMode ? '#94a3b8' : '#6b7280', lineHeight: '1.6' }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-premium" style={{ backgroundColor: isDarkMode ? '#1e293b' : '#f8fafc' }}>
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
              Meet Our Team
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: isDarkMode ? '#94a3b8' : '#6b7280',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              The talented individuals who make our success possible
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  backgroundColor: isDarkMode ? '#334155' : 'white',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  textAlign: 'center',
                  boxShadow: isDarkMode ? '0 8px 15px rgba(0,0,0,0.2)' : '0 8px 15px rgba(0,0,0,0.05)',
                  border: isDarkMode ? '1px solid #475569' : '1px solid #eee',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  margin: '0 auto 1.5rem',
                  overflow: 'hidden',
                  border: isDarkMode ? '4px solid #475569' : '4px solid #f3f4f6'
                }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: isDarkMode ? '#f8fafc' : '#1f2937' }}>
                  {member.name}
                </h3>
                <p style={{ color: '#3b82f6', fontWeight: '600', marginBottom: '1rem' }}>
                  {member.role}
                </p>
                <p style={{ color: isDarkMode ? '#94a3b8' : '#6b7280', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                  {member.bio}
                </p>
                
                {/* Expertise Tags */}
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '0.5rem', 
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  {member.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '0.25rem 0.75rem',
                        background: '#f3f4f6',
                        color: '#374151',
                        borderRadius: '1rem',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        border: '1px solid #e5e7eb'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Education */}
                <p style={{ 
                  color: '#9ca3af', 
                  fontSize: '0.8rem', 
                  fontStyle: 'italic',
                  marginBottom: '1.5rem'
                }}>
                  {member.education}
                </p>
                
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#0a66c2',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        textDecoration: 'none',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#004182'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#0a66c2'}
                    >
                      <FiLinkedin size={20} />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#333',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        textDecoration: 'none',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: '#1da1f2',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        textDecoration: 'none',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#0d8bd9'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#1da1f2'}
                    >
                      <FiTwitter size={20} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="section-premium" style={{ backgroundColor: isDarkMode ? '#0f172a' : '#ffffff' }}>
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
              Our Culture & Work Environment
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: isDarkMode ? '#94a3b8' : '#6b7280',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              We foster an environment where innovation thrives and every team member can reach their full potential
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: FiUsers,
                title: 'Collaborative Environment',
                description: 'We believe in the power of teamwork and open communication. Our flat organizational structure encourages everyone to contribute ideas and take ownership of projects.',
                color: '#3b82f6'
              },
              {
                icon: FiZap,
                title: 'Continuous Learning',
                description: 'We invest heavily in our team\'s growth with annual learning budgets, conference attendance, and internal knowledge sharing sessions.',
                color: '#10b981'
              },
              {
                icon: FiHeart,
                title: 'Work-Life Balance',
                description: 'Flexible working hours, remote work options, and unlimited PTO ensure our team can maintain a healthy work-life balance.',
                color: '#8b5cf6'
              },
              {
                icon: FiShield,
                title: 'Diversity & Inclusion',
                description: 'We are committed to building a diverse and inclusive workplace where everyone feels valued and can bring their authentic selves to work.',
                color: '#f59e0b'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                style={{
                  backgroundColor: isDarkMode ? '#1e293b' : 'white',
                  borderRadius: '1.5rem',
                  padding: '2.5rem',
                  textAlign: 'center',
                  boxShadow: isDarkMode ? '0 8px 15px rgba(0,0,0,0.2)' : '0 8px 15px rgba(0,0,0,0.05)',
                  border: isDarkMode ? '1px solid #334155' : '1px solid #eee',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  margin: '0 auto 1.5rem',
                  padding: '1.5rem',
                  borderRadius: '50%',
                  backgroundColor: item.color + '20',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <item.icon style={{ width: '36px', height: '36px', color: item.color }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem', color: isDarkMode ? '#f8fafc' : '#1f2937' }}>
                  {item.title}
                </h3>
                <p style={{ color: isDarkMode ? '#94a3b8' : '#6b7280', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-premium" style={{ backgroundColor: isDarkMode ? '#1e293b' : '#f8fafc' }}>
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
              Our Journey
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: isDarkMode ? '#94a3b8' : '#6b7280',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Key milestones in our company's growth and evolution
            </p>
          </motion.div>

          <div style={{ position: 'relative' }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: '#e5e7eb',
              transform: 'translateX(-50%)'
            }}></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '3rem',
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
                }}
              >
                <div style={{ flex: 1, padding: index % 2 === 0 ? '0 2rem 0 0' : '0 0 0 2rem' }}>
                  <div style={{
                    backgroundColor: isDarkMode ? '#334155' : 'white',
                    borderRadius: '1rem',
                    padding: '2rem',
                    boxShadow: isDarkMode ? '0 8px 15px rgba(0,0,0,0.2)' : '0 8px 15px rgba(0,0,0,0.05)',
                    border: isDarkMode ? '1px solid #475569' : '1px solid #eee',
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      [index % 2 === 0 ? 'right' : 'left']: '-1rem',
                      backgroundColor: '#667eea',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: '600'
                    }}>
                      {milestone.year}
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: isDarkMode ? '#f8fafc' : '#1f2937', marginTop: '2rem' }}>
                      {milestone.title}
                    </h3>
                    <p style={{ color: isDarkMode ? '#94a3b8' : '#6b7280', lineHeight: '1.6' }}>
                      {milestone.description}
                    </p>
                  </div>
                </div>
                <div style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#667eea',
                  borderRadius: '50%',
                  border: '4px solid white',
                  boxShadow: '0 0 0 4px #e5e7eb',
                  zIndex: 1
                }}></div>
                <div style={{ flex: 1 }}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards Section */}
      <section className="section-premium" style={{ backgroundColor: isDarkMode ? '#0f172a' : '#ffffff' }}>
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
              Certifications & Awards
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: isDarkMode ? '#94a3b8' : '#6b7280',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Recognized for our excellence in technology solutions and industry leadership
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: FiAward,
                title: 'AWS Partner Network',
                description: 'Advanced Consulting Partner with specialized competencies in Cloud Infrastructure and DevOps.',
                color: '#ff9900'
              },
              {
                icon: FiShield,
                title: 'ISO 27001 Certified',
                description: 'Information Security Management System certification ensuring the highest standards of data protection.',
                color: '#10b981'
              },
              {
                icon: FiStar,
                title: 'Best Tech Company 2023',
                description: 'Awarded by TechCrunch for innovation in AI-powered business solutions and client satisfaction.',
                color: '#8b5cf6'
              },
              {
                icon: FiTrendingUp,
                title: 'Google Cloud Partner',
                description: 'Premier Partner with expertise in cloud migration, data analytics, and machine learning solutions.',
                color: '#4285f4'
              },
              {
                icon: FiUsers,
                title: 'Great Place to Work',
                description: 'Certified as a great workplace for our commitment to employee satisfaction and company culture.',
                color: '#f59e0b'
              },
              {
                icon: FiGlobe,
                title: 'Microsoft Gold Partner',
                description: 'Gold competency in Application Development and Cloud Platform with proven customer success.',
                color: '#0078d4'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                style={{
                  backgroundColor: isDarkMode ? '#1e293b' : 'white',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  textAlign: 'center',
                  boxShadow: isDarkMode ? '0 8px 15px rgba(0,0,0,0.2)' : '0 8px 15px rgba(0,0,0,0.05)',
                  border: isDarkMode ? '1px solid #334155' : '1px solid #eee',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  margin: '0 auto 1.5rem',
                  padding: '1rem',
                  borderRadius: '50%',
                  backgroundColor: item.color + '20',
                  width: '70px',
                  height: '70px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <item.icon style={{ width: '32px', height: '32px', color: item.color }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: isDarkMode ? '#f8fafc' : '#1f2937' }}>
                  {item.title}
                </h3>
                <p style={{ color: isDarkMode ? '#94a3b8' : '#6b7280', lineHeight: '1.6', fontSize: '0.9rem' }}>
                  {item.description}
                </p>
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
              Ready to Work With Us?
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '800px',
              margin: '0 auto 2.5rem'
            }}>
              Join the growing list of businesses that trust NeuraStack Solutions for their technology needs. Let's build something amazing together.
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
              Get In Touch <FiArrowRight style={{ marginLeft: '0.5rem', display: 'inline-block' }} />
            </Link>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  )
}

export default About