import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageCircle, FiX, FiSend, FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { useAnalyticsContext } from '../contexts/AnalyticsContext'

const WhatsAppBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const analytics = useAnalyticsContext()
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! 👋 Welcome to NeuraStack Solutions! I'm here to help you with our technology services. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const quickReplies = [
    "Tell me about your services",
    "Get a quote",
    "Schedule a consultation",
    "Contact support"
  ]

  const serviceOptions = [
    { id: 'fullstack', name: 'Full Stack Development', description: 'React, Node.js, databases' },
    { id: 'devops', name: 'DevOps & CI/CD', description: 'Docker, Kubernetes, automation' },
    { id: 'ai', name: 'AI/ML Integration', description: 'Machine learning, automation' },
    { id: 'cloud', name: 'Cloud Solutions', description: 'AWS, Azure, scalable infrastructure' }
  ]

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage.toLowerCase())
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickReply = (reply) => {
    setInputMessage(reply)
    handleSendMessage()
  }

  const getBotResponse = (message) => {
    if (message.includes('service') || message.includes('what do you do')) {
      return "We offer comprehensive technology services including Full Stack Development, DevOps & CI/CD, AI/ML Integration, and Cloud Solutions. Which service interests you most?"
    } else if (message.includes('quote') || message.includes('price') || message.includes('cost')) {
      return "I'd be happy to provide you with a customized quote! Please share your project requirements and I'll connect you with our team for a detailed proposal. You can also call us at +91 6388337594."
    } else if (message.includes('consultation') || message.includes('meeting') || message.includes('schedule')) {
      return "Great! I can help you schedule a consultation. Our team is available Monday-Friday, 8 AM - 6 PM IST. Would you prefer a phone call or video meeting? You can also email us at neurastack@gmail.com."
    } else if (message.includes('contact') || message.includes('support') || message.includes('help')) {
      return "I'm here to help! You can reach us through:\n📧 Email: neurastack@gmail.com\n📞 Phone: +91 6388337594\n💬 WhatsApp: +91 6388337594\n📱 Instagram: @neurastack\n📍 Address: 2/139, Sec-7, Amar Shaheed Path, Gomati Nagar Extension, Lucknow, UP 226002\nOr continue chatting with me for immediate assistance!"
    } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! 👋 Thanks for reaching out to NeuraStack Solutions. I'm here to answer your questions about our technology services. What would you like to know?"
    } else {
      return "Thanks for your message! I understand you're interested in our services. Let me connect you with our team for more detailed information. You can reach us at neurastack@gmail.com or call +91 6388337594. Is there anything specific about our services you'd like to know?"
    }
  }

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent("Hello! I'd like to learn more about NeuraStack Solutions' technology services.")
    window.open(`https://wa.me/916388337594?text=${message}`, '_blank')
  }

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => {
          setIsOpen(!isOpen)
          analytics.trackWhatsAppInteraction(isOpen ? 'close' : 'open', 'floating_button')
        }}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '64px',
          height: '64px',
          backgroundColor: '#25d366',
          borderRadius: '50%',
          border: 'none',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
          cursor: 'pointer',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease'
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onMouseEnter={(e) => {
          e.target.style.boxShadow = '0 12px 32px rgba(37, 211, 102, 0.6)'
        }}
        onMouseLeave={(e) => {
          e.target.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.4)'
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiX size={28} color="white" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiMessageCircle size={28} color="white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: 'fixed',
              bottom: '100px',
              right: '24px',
              width: '380px',
              maxWidth: '90vw',
              height: '500px',
              backgroundColor: 'white',
              borderRadius: '16px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            {/* Chat Header */}
            <div style={{
              backgroundColor: '#25d366',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: 'white'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FiMessageCircle size={20} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '16px', fontWeight: '600' }}>
                  NeuraStack Solutions
                </div>
                <div style={{ fontSize: '12px', opacity: 0.8 }}>
                  Online now
                </div>
              </div>
              <button
                onClick={() => {
          setIsOpen(false)
          analytics.trackWhatsAppInteraction('close', 'chat_header')
        }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  padding: '4px',
                  borderRadius: '4px'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div style={{
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  style={{
                    display: 'flex',
                    justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start'
                  }}
                >
                  <div style={{
                    maxWidth: '80%',
                    padding: '12px 16px',
                    borderRadius: '18px',
                    backgroundColor: message.sender === 'user' ? '#25d366' : '#f1f3f4',
                    color: message.sender === 'user' ? 'white' : '#333',
                    fontSize: '14px',
                    lineHeight: '1.4',
                    whiteSpace: 'pre-wrap'
                  }}>
                    {message.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div style={{
                    padding: '12px 16px',
                    borderRadius: '18px',
                    backgroundColor: '#f1f3f4',
                    color: '#666',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      <div style={{
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#666',
                        borderRadius: '50%',
                        animation: 'typing 1.4s infinite ease-in-out'
                      }}></div>
                      <div style={{
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#666',
                        borderRadius: '50%',
                        animation: 'typing 1.4s infinite ease-in-out 0.2s'
                      }}></div>
                      <div style={{
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#666',
                        borderRadius: '50%',
                        animation: 'typing 1.4s infinite ease-in-out 0.4s'
                      }}></div>
                    </div>
                    <span>Typing...</span>
                  </div>
                </div>
              )}

              {/* Quick Reply Buttons */}
              {messages.length === 1 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      style={{
                        padding: '8px 12px',
                        backgroundColor: '#f8f9fa',
                        border: '1px solid #e9ecef',
                        borderRadius: '20px',
                        fontSize: '12px',
                        color: '#495057',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        textAlign: 'left'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#e9ecef'
                        e.target.style.borderColor = '#25d366'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#f8f9fa'
                        e.target.style.borderColor = '#e9ecef'
                      }}
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input Area */}
            <div style={{
              padding: '16px',
              borderTop: '1px solid #e9ecef',
              display: 'flex',
              gap: '8px',
              alignItems: 'center'
            }}>
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  border: '1px solid #e9ecef',
                  borderRadius: '24px',
                  fontSize: '14px',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#25d366'}
                onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#25d366',
                  border: 'none',
                  borderRadius: '50%',
                  color: 'white',
                  cursor: inputMessage.trim() ? 'pointer' : 'not-allowed',
                  opacity: inputMessage.trim() ? 1 : 0.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (inputMessage.trim()) {
                    e.target.style.backgroundColor = '#128c7e'
                    e.target.style.transform = 'scale(1.05)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (inputMessage.trim()) {
                    e.target.style.backgroundColor = '#25d366'
                    e.target.style.transform = 'scale(1)'
                  }
                }}
              >
                <FiSend size={18} />
              </button>
            </div>

            {/* Contact Options */}
            <div style={{
              padding: '12px 16px',
              backgroundColor: '#f8f9fa',
              borderTop: '1px solid #e9ecef',
              display: 'flex',
              justifyContent: 'space-around'
            }}>
              <button
                onClick={handleWhatsAppRedirect}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 12px',
                  backgroundColor: '#25d366',
                  color: 'white',
                  border: 'none',
                  borderRadius: '20px',
                  fontSize: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#128c7e'
                  e.target.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#25d366'
                  e.target.style.transform = 'scale(1)'
                }}
              >
                <FiMessageCircle size={14} />
                WhatsApp
              </button>
              <a
                href="mailto:hello@neurastack.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 12px',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '20px',
                  fontSize: '12px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#5a6268'
                  e.target.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#6c757d'
                  e.target.style.transform = 'scale(1)'
                }}
              >
                <FiMail size={14} />
                Email
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for typing animation */}
      <style>{`
        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}

export default WhatsAppBot