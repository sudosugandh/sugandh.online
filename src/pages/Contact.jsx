import React, { useState } from 'react'
import { motion } from 'framer-motion'
import InteractiveButton from '../components/InteractiveButton'
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiClock,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiArrowRight,
  FiDollarSign,
  FiCalendar,
  FiStar,
  FiShield,
  FiZap,
  FiTarget,
  FiChevronDown,
  FiChevronUp,
  FiCheckCircle,
  FiUsers,
  FiAward,
  FiTrendingUp
} from 'react-icons/fi'
import ContactForm from '../components/ContactForm'
import { useTheme } from '../contexts/ThemeContext'

const Contact = () => {
  const { isDarkMode } = useTheme()
  const [openFAQ, setOpenFAQ] = useState(null)

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email Us',
      info: 'neurastack@gmail.com',
      description: 'Send us an email anytime',
      color: '#3b82f6'
    },
    {
      icon: FiPhone,
      title: 'Call Us',
      info: '+91 6388337594',
      description: 'Mon-Fri from 8am to 6pm',
      color: '#10b981'
    },
    {
      icon: FiMapPin,
      title: 'Visit Us',
      info: '2/139, Sec-7, Amar Shaheed Path',
      description: 'Gomati Nagar Extension, Lucknow, UP 226002',
      color: '#f59e0b'
    },
    {
      icon: FiPhone,
      title: 'WhatsApp',
      info: '+91 6388337594',
      description: 'Chat with us on WhatsApp',
      color: '#25d366'
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      info: 'Monday - Friday',
      description: '8:00 AM - 6:00 PM IST',
      color: '#8b5cf6'
    }
  ]


  const socialLinks = [
    { name: 'Instagram', icon: FiInstagram, href: 'https://instagram.com/neurastack', color: '#e4405f' },
    { name: 'LinkedIn', icon: FiLinkedin, href: '#', color: '#0a66c2' },
    { name: 'Twitter', icon: FiTwitter, href: '#', color: '#1da1f2' },
    { name: 'GitHub', icon: FiGithub, href: '#', color: '#333' }
  ]

  const faqs = [
    {
      question: "How quickly can you start my project?",
      answer: "We typically begin new projects within 1-2 weeks of contract signing. For urgent projects, we can expedite the process and start within 3-5 business days."
    },
    {
      question: "What's included in your development packages?",
      answer: "Our packages include development, testing, deployment, documentation, and 3 months of post-launch support. We also provide regular progress updates and code reviews."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, we offer comprehensive maintenance and support packages. This includes bug fixes, security updates, performance optimization, and feature enhancements."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies including React, Node.js, Python, cloud platforms (AWS, Azure, GCP), and mobile development with React Native."
    },
    {
      question: "How do you ensure project security?",
      answer: "We follow industry best practices including code reviews, security audits, penetration testing, and compliance with security standards like OWASP guidelines."
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely! We can integrate seamlessly with your existing development team, providing expertise and support where needed while maintaining your current workflows."
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "NeuraStack transformed our business with their innovative solutions. The team was professional, responsive, and delivered beyond our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, DataFlow Systems",
      content: "Their expertise in cloud architecture helped us scale our platform efficiently. Highly recommended for any technology project.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, DesignStudio",
      content: "The mobile app they built for us has been a game-changer. User engagement increased by 300% since launch.",
      rating: 5
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
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: isDarkMode ? '#0f172a' : '#fafbfc' 
    }}>
      {/* Hero Section - Full Viewport */}
      <section className="hero-full" style={{
        background: isDarkMode 
          ? 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #581c87 100%)'
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '900px', margin: '0 auto' }}
          >
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: '800',
              marginBottom: '1.5rem',
              lineHeight: '1.2',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}>
              Get In{' '}
              <span style={{ color: '#f59e0b' }}>Touch</span>
            </h1>
            <p style={{
              fontSize: '1.35rem',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '2.5rem',
              lineHeight: '1.6',
              maxWidth: '700px',
              margin: '0 auto 2.5rem'
            }}>
              Ready to transform your business with cutting-edge technology? Let's discuss your project and bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-premium" style={{ backgroundColor: isDarkMode ? '#1e293b' : '#ffffff' }}>
        <div className="container-premium">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem'
            }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                style={{
                  backgroundColor: isDarkMode ? '#334155' : 'white',
                  borderRadius: '1.5rem',
                  padding: '2.5rem',
                  textAlign: 'center',
                  boxShadow: isDarkMode ? '0 8px 15px rgba(0,0,0,0.2)' : '0 8px 15px rgba(0,0,0,0.05)',
                  border: isDarkMode ? '1px solid #475569' : '1px solid #eee',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  margin: '0 auto 1.5rem',
                  padding: '1.5rem',
                  borderRadius: '50%',
                  backgroundColor: info.color + '20',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <info.icon style={{ width: '36px', height: '36px', color: info.color }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: isDarkMode ? '#f8fafc' : '#1f2937' }}>
                  {info.title}
                </h3>
                <p style={{ fontSize: '1rem', fontWeight: '600', color: info.color, marginBottom: '0.5rem' }}>
                  {info.info}
                </p>
                <p style={{ color: isDarkMode ? '#94a3b8' : '#6b7280', fontSize: '0.9rem' }}>
                  {info.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-premium" style={{ backgroundColor: isDarkMode ? '#0f172a' : '#f8fafc' }}>
        <div className="container-premium">
          <div className="contact-form-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start'
          }}>
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                backgroundColor: isDarkMode ? '#1e293b' : 'white',
                borderRadius: '1.5rem',
                padding: '3rem',
                boxShadow: isDarkMode ? '0 10px 20px rgba(0,0,0,0.2)' : '0 10px 20px rgba(0,0,0,0.05)',
                border: isDarkMode ? '1px solid #334155' : '1px solid #eee'
              }}
            >
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: isDarkMode ? '#f8fafc' : '#1f2937',
                marginBottom: '1rem'
              }}>
                Send us a Message
              </h2>
              <p style={{
                color: isDarkMode ? '#94a3b8' : '#6b7280',
                marginBottom: '2rem',
                lineHeight: '1.6'
              }}>
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                backgroundColor: isDarkMode ? '#1e293b' : 'white',
                borderRadius: '1.5rem',
                padding: '3rem',
                boxShadow: isDarkMode ? '0 10px 20px rgba(0,0,0,0.2)' : '0 10px 20px rgba(0,0,0,0.05)',
                border: isDarkMode ? '1px solid #334155' : '1px solid #eee',
                height: 'fit-content'
              }}
            >
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: isDarkMode ? '#f8fafc' : '#1f2937',
                marginBottom: '1.5rem'
              }}>
                Why Choose Us?
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#3b82f615',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FiStar style={{ width: '24px', height: '24px', color: '#3b82f6' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.25rem' }}>
                      Expert Team
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                      5+ years of experience in cutting-edge technologies
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#10b98115',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FiShield style={{ width: '24px', height: '24px', color: '#10b981' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.25rem' }}>
                      Secure & Reliable
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                      Enterprise-grade security and 99% uptime guarantee
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#f59e0b15',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FiZap style={{ width: '24px', height: '24px', color: '#f59e0b' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.25rem' }}>
                      Fast Delivery
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                      Agile development with rapid iteration cycles
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#8b5cf615',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <FiTarget style={{ width: '24px', height: '24px', color: '#8b5cf6' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.25rem' }}>
                      Custom Solutions
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                      Tailored to your specific business needs
                    </p>
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                backgroundColor: '#f8fafc',
                borderRadius: '0.75rem',
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
                  Connect With Us
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1rem' }}>
                  Follow us on social media for updates and insights
                </p>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      style={{
                        width: '40px',
                        height: '40px',
                        backgroundColor: social.color,
                        borderRadius: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        textDecoration: 'none',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = social.color + 'dd';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = social.color;
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-premium" style={{ backgroundColor: isDarkMode ? '#1e293b' : '#ffffff' }}>
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
              Frequently Asked Questions
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: isDarkMode ? '#94a3b8' : '#6b7280',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Get answers to common questions about our services and process
            </p>
          </motion.div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  backgroundColor: isDarkMode ? '#334155' : 'white',
                  borderRadius: '0.75rem',
                  border: isDarkMode ? '1px solid #475569' : '1px solid #e5e7eb',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  style={{
                    width: '100%',
                    padding: '1.5rem',
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: isDarkMode ? '#f8fafc' : '#1f2937',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f8fafc'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  <span>{faq.question}</span>
                  {openFAQ === index ? (
                    <FiChevronUp style={{ width: '20px', height: '20px', color: '#667eea' }} />
                  ) : (
                    <FiChevronDown style={{ width: '20px', height: '20px', color: '#667eea' }} />
                  )}
                </button>
                {openFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      padding: '0 1.5rem 1.5rem',
                      color: isDarkMode ? '#94a3b8' : '#6b7280',
                      lineHeight: '1.6'
                    }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our Clients Say
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: isDarkMode ? '#94a3b8' : '#6b7280',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              Don't just take our word for it - hear from our satisfied clients
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                style={{
                  backgroundColor: isDarkMode ? '#1e293b' : 'white',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  boxShadow: isDarkMode ? '0 8px 15px rgba(0,0,0,0.2)' : '0 8px 15px rgba(0,0,0,0.05)',
                  border: isDarkMode ? '1px solid #334155' : '1px solid #eee',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} style={{ width: '20px', height: '20px', color: '#fbbf24', fill: '#fbbf24' }} />
                  ))}
                </div>
                <p style={{ 
                  color: '#4b5563', 
                  lineHeight: '1.6', 
                  marginBottom: '1.5rem',
                  fontSize: '1rem',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.content}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: '#667eea',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.25rem',
                    fontWeight: '600'
                  }}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '600', color: isDarkMode ? '#f8fafc' : '#1f2937', marginBottom: '0.25rem' }}>
                      {testimonial.name}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: isDarkMode ? '#94a3b8' : '#6b7280' }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
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
              Ready to Start Your Project?
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(255,255,255,0.9)',
              maxWidth: '800px',
              margin: '0 auto 2.5rem'
            }}>
              Join hundreds of satisfied clients who have transformed their businesses with our technology solutions.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <FiCalendar style={{ width: '24px', height: '24px' }} />
                <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                  Free consultation within 24 hours
                </span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <FiShield style={{ width: '24px', height: '24px' }} />
                <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                  No commitment required
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CSS for loading animation */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default Contact