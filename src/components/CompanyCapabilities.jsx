import React from 'react'
import { motion } from 'framer-motion'
import ScrollTriggeredAnimation from './ScrollTriggeredAnimation'
import { 
  FiCode, 
  FiCloud, 
  FiCpu, 
  FiShield, 
  FiTrendingUp, 
  FiSmartphone,
  FiDatabase,
  FiZap
} from 'react-icons/fi'

const CompanyCapabilities = ({ 
  title = "Our Core Capabilities",
  description = "Comprehensive technology solutions for modern businesses",
  className = '',
  style = {}
}) => {
  const capabilities = [
    {
      icon: FiCode,
      title: "Full-Stack Development",
      description: "End-to-end web applications with modern frameworks",
      percentage: 95,
      color: "#3b82f6",
      features: ["React/Next.js", "Node.js/Python", "Microservices"]
    },
    {
      icon: FiCloud,
      title: "Cloud Solutions",
      description: "Scalable infrastructure and cloud migration",
      percentage: 92,
      color: "#10b981",
      features: ["AWS/Azure", "Kubernetes", "Auto-scaling"]
    },
    {
      icon: FiZap,
      title: "DevOps & Automation",
      description: "CI/CD pipelines and infrastructure automation",
      percentage: 90,
      color: "#f59e0b",
      features: ["Docker", "Jenkins", "Terraform"]
    },
    {
      icon: FiCpu,
      title: "AI Integration",
      description: "Machine learning and artificial intelligence solutions",
      percentage: 88,
      color: "#8b5cf6",
      features: ["ML Models", "NLP", "Computer Vision"]
    },
    {
      icon: FiDatabase,
      title: "Database Architecture",
      description: "Optimized data systems and analytics",
      percentage: 93,
      color: "#06b6d4",
      features: ["PostgreSQL", "MongoDB", "Data Analytics"]
    },
    {
      icon: FiSmartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications",
      percentage: 85,
      color: "#ef4444",
      features: ["React Native", "Flutter", "iOS/Android"]
    }
  ]

  return (
    <section 
      className={className}
      style={{
        padding: '6rem 0',
        backgroundColor: '#ffffff',
        position: 'relative',
        ...style
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <ScrollTriggeredAnimation animation="fadeInUp">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: '#1f2937',
              marginBottom: '1rem',
              fontFamily: 'Poppins, system-ui, sans-serif',
              lineHeight: '1.2'
            }}>
              {title}
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              {description}
            </p>
          </div>
        </ScrollTriggeredAnimation>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {capabilities.map((capability, index) => (
            <ScrollTriggeredAnimation
              key={capability.title}
              animation="fadeInUp"
              delay={index * 0.1}
            >
              <motion.div
                style={{
                  padding: '2rem',
                  background: '#ffffff',
                  borderRadius: '1.5rem',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease',
                  height: '100%'
                }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                  transition: { duration: 0.3 }
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <motion.div
                    style={{
                      width: '60px',
                      height: '60px',
                      background: `linear-gradient(135deg, ${capability.color}, ${capability.color}88)`,
                      borderRadius: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1rem'
                    }}
                    whileHover={{ 
                      rotate: 5,
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <capability.icon style={{
                      width: '28px',
                      height: '28px',
                      color: 'white'
                    }} />
                  </motion.div>
                  
                  <div>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      color: '#1f2937',
                      margin: 0,
                      marginBottom: '0.25rem',
                      fontFamily: 'Poppins, system-ui, sans-serif'
                    }}>
                      {capability.title}
                    </h3>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <div style={{
                        width: '60px',
                        height: '6px',
                        background: '#e5e7eb',
                        borderRadius: '3px',
                        overflow: 'hidden'
                      }}>
                        <motion.div
                          style={{
                            width: `${capability.percentage}%`,
                            height: '100%',
                            background: capability.color,
                            borderRadius: '3px'
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${capability.percentage}%` }}
                          transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                      <span style={{
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: capability.color
                      }}>
                        {capability.percentage}%
                      </span>
                    </div>
                  </div>
                </div>

                <p style={{
                  fontSize: '0.95rem',
                  color: '#6b7280',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  {capability.description}
                </p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {capability.features.map((feature, featureIndex) => (
                    <motion.span
                      key={feature}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 + featureIndex * 0.05 }}
                      style={{
                        padding: '0.25rem 0.75rem',
                        background: `${capability.color}15`,
                        color: capability.color,
                        borderRadius: '1rem',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        border: `1px solid ${capability.color}30`
                      }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </ScrollTriggeredAnimation>
          ))}
        </div>

        {/* Company Stats */}
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
                Trusted by Industry Leaders
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                marginTop: '2rem'
              }}>
                {[
                  { label: 'Projects Delivered', value: '500+' },
                  { label: 'Enterprise Clients', value: '100+' },
                  { label: 'Years Experience', value: '10+' },
                  { label: 'Team Members', value: '50+' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    style={{
                      padding: '1.5rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '1rem',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <div style={{
                      fontSize: '2.5rem',
                      fontWeight: '800',
                      marginBottom: '0.5rem',
                      fontFamily: 'Poppins, system-ui, sans-serif'
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      opacity: 0.9,
                      fontWeight: '500'
                    }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollTriggeredAnimation>
      </div>
    </section>
  )
}

export default CompanyCapabilities