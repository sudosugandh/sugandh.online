import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiUser, FiMail, FiPhone, FiGlobe, FiMessageCircle, FiSend, FiCheck, FiAlertCircle, FiLoader } from 'react-icons/fi'
import { useTheme } from '../contexts/ThemeContext'
import { useAnalyticsContext } from '../contexts/AnalyticsContext'
import InteractiveButton from './InteractiveButton'

const ContactForm = () => {
  const { isDarkMode } = useTheme()
  const { trackEvent } = useAnalyticsContext()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null

  const validateForm = () => {
    const newErrors = {}
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    // Phone validation (optional but if provided, must be valid)
    if (formData.phone.trim() && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required'
    } else if (formData.company.trim().length < 2) {
      newErrors.company = 'Company name must be at least 2 characters'
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters'
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      trackEvent('contact_form_validation_error', {
        form_errors: Object.keys(errors).length,
        form_fields: Object.keys(errors)
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Track form submission
      trackEvent('contact_form_submit', {
        form_type: 'contact',
        form_fields: Object.keys(formData),
        form_data_length: JSON.stringify(formData).length
      })

      // Simulate API call (replace with actual endpoint)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Simulate success/error randomly for demo
      const isSuccess = Math.random() > 0.2 // 80% success rate
      
      if (isSuccess) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        })
        
        trackEvent('contact_form_success', {
          form_type: 'contact',
          submission_time: new Date().toISOString()
        })
      } else {
        setSubmitStatus('error')
        
        trackEvent('contact_form_error', {
          form_type: 'contact',
          error_type: 'submission_failed'
        })
      }
    } catch (error) {
      setSubmitStatus('error')
      trackEvent('contact_form_error', {
        form_type: 'contact',
        error_type: 'network_error',
        error_message: error.message
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const formFields = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      icon: FiUser,
      placeholder: 'Enter your full name',
      required: true
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      icon: FiMail,
      placeholder: 'Enter your email address',
      required: true
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      icon: FiPhone,
      placeholder: 'Enter your phone number (optional)',
      required: false
    },
    {
      name: 'company',
      label: 'Company',
      type: 'text',
      icon: FiGlobe,
      placeholder: 'Enter your company name',
      required: true
    },
    {
      name: 'subject',
      label: 'Subject',
      type: 'text',
      icon: FiMessageCircle,
      placeholder: 'What is this about?',
      required: true
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundColor: isDarkMode ? '#1f2937' : '#fff',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: isDarkMode 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
          : '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        border: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`
      }}
    >
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: '700',
          color: isDarkMode ? '#f9fafb' : '#111827',
          marginBottom: '0.5rem'
        }}>
          Send us a Message
        </h3>
        <p style={{
          color: isDarkMode ? '#9ca3af' : '#6b7280',
          fontSize: '0.875rem',
          lineHeight: '1.6'
        }}>
          Get in touch with our team for project inquiries, consultations, or support.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '1.5rem'
        }}>
          {formFields.map((field) => {
            const IconComponent = field.icon
            return (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: formFields.indexOf(field) * 0.1 }}
              >
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: isDarkMode ? '#f9fafb' : '#374151',
                  marginBottom: '0.5rem'
                }}>
                  {field.label}
                  {field.required && <span style={{ color: '#ef4444', marginLeft: '2px' }}>*</span>}
                </label>
                
                <div style={{ position: 'relative' }}>
                  <IconComponent style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '18px',
                    height: '18px',
                    color: isDarkMode ? '#9ca3af' : '#6b7280',
                    zIndex: 1
                  }} />
                  
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    style={{
                      width: '100%',
                      padding: '12px 12px 12px 40px',
                      borderRadius: '8px',
                      border: `2px solid ${errors[field.name] ? '#ef4444' : (isDarkMode ? '#374151' : '#e5e7eb')}`,
                      backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
                      color: isDarkMode ? '#f9fafb' : '#111827',
                      fontSize: '0.875rem',
                      transition: 'all 0.2s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3b82f6'
                      e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors[field.name] ? '#ef4444' : (isDarkMode ? '#374151' : '#e5e7eb')
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </div>
                
                {errors[field.name] && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      marginTop: '4px',
                      color: '#ef4444',
                      fontSize: '0.75rem'
                    }}
                  >
                    <FiAlertCircle size={14} />
                    {errors[field.name]}
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Message Field */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{ marginBottom: '1.5rem' }}
        >
          <label style={{
            display: 'block',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: isDarkMode ? '#f9fafb' : '#374151',
            marginBottom: '0.5rem'
          }}>
            Message
            <span style={{ color: '#ef4444', marginLeft: '2px' }}>*</span>
          </label>
          
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us about your project, requirements, or any questions you have..."
            rows={6}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: `2px solid ${errors.message ? '#ef4444' : (isDarkMode ? '#374151' : '#e5e7eb')}`,
              backgroundColor: isDarkMode ? '#111827' : '#f9fafb',
              color: isDarkMode ? '#f9fafb' : '#111827',
              fontSize: '0.875rem',
              resize: 'vertical',
              minHeight: '120px',
              transition: 'all 0.2s ease',
              outline: 'none',
              fontFamily: 'inherit'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#3b82f6'
              e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = errors.message ? '#ef4444' : (isDarkMode ? '#374151' : '#e5e7eb')
              e.target.style.boxShadow = 'none'
            }}
          />
          
          {errors.message && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                marginTop: '4px',
                color: '#ef4444',
                fontSize: '0.75rem'
              }}
            >
              <FiAlertCircle size={14} />
              {errors.message}
            </motion.div>
          )}
        </motion.div>

        {/* Submit Button */}
        <InteractiveButton
          type="submit"
          disabled={isSubmitting}
          loading={isSubmitting}
          variant="primary"
          size="large"
          icon={isSubmitting ? FiLoader : FiSend}
          modalContent={
            <div style={{ color: '#1f2937' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#1f2937' }}>
                📧 Message Sent Successfully!
              </h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.75rem', color: '#374151' }}>
                  What happens next?
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#10b981', fontWeight: '600' }}>1.</span>
                    <span>We'll review your message within 2 hours</span>
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#10b981', fontWeight: '600' }}>2.</span>
                    <span>Our team will prepare a detailed response</span>
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#10b981', fontWeight: '600' }}>3.</span>
                    <span>We'll schedule a consultation call if needed</span>
                  </li>
                  <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#10b981', fontWeight: '600' }}>4.</span>
                    <span>You'll receive a custom proposal within 24 hours</span>
                  </li>
                </ul>
              </div>
              <div style={{ 
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', 
                color: 'white', 
                padding: '1rem', 
                borderRadius: '0.5rem',
                textAlign: 'center',
                fontWeight: '600'
              }}>
                Thank you for reaching out! We're excited to work with you.
              </div>
            </div>
          }
          style={{
            width: '100%',
            padding: '12px 24px',
            backgroundColor: isSubmitting ? '#9ca3af' : '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '0.875rem',
            fontWeight: '600',
            boxShadow: isSubmitting ? 'none' : '0 4px 6px -1px rgba(59, 130, 246, 0.3)'
          }}
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </InteractiveButton>

        {/* Status Messages */}
        <AnimatePresence>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              style={{
                marginTop: '1rem',
                padding: '12px 16px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: submitStatus === 'success' 
                  ? '#10b981' 
                  : '#ef4444',
                color: 'white',
                fontSize: '0.875rem',
                fontWeight: '500'
              }}
            >
              {submitStatus === 'success' ? (
                <>
                  <FiCheck />
                  Message sent successfully! We'll get back to you within 24 hours.
                </>
              ) : (
                <>
                  <FiAlertCircle />
                  Failed to send message. Please try again or contact us directly.
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  )
}

export default ContactForm