import React, {useState, useEffect} from "react";
import "./GithubProfileCard.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo, isHireable} from "../../portfolio";
import emoji from "react-easy-emoji";
import {Fade} from "react-reveal";

export default function GithubProfileCard({prof}) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "Sugandh";
  const titleText = "DevOps Engineer | AI/ML Infrastructure Specialist";

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "919140774908"; // Your actual WhatsApp number
    const message = "Hi Sugandh! 👋 I came across your amazing DevOps portfolio and would love to connect with you regarding potential opportunities or collaboration. Your expertise in CI/CD, cloud infrastructure, and AI/ML DevOps is impressive! 🚀";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      navigator.clipboard.writeText(message).then(() => {
        alert('WhatsApp message copied to clipboard! Please paste it in WhatsApp.');
      }).catch(() => {
        alert('Please open WhatsApp and send: ' + message);
      });
    }
  };

  const handleEmailClick = (e) => {
    const email = contactInfo.email_address;
    const subject = "DevOps Portfolio - Let's Connect!";
    const body = `Hi Sugandh,

I came across your impressive DevOps portfolio and would love to connect with you regarding potential opportunities or collaboration.

Your expertise in:
• CI/CD & Automation
• Cloud Infrastructure (AWS/Azure/GCP)
• Containerization & Kubernetes
• Infrastructure as Code
• AI/ML DevOps

is exactly what we're looking for!

Best regards,
[Your Name]`;

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Try to open email client
    try {
      window.location.href = mailtoUrl;
    } catch (error) {
      // Fallback: copy email to clipboard
      navigator.clipboard.writeText(email).then(() => {
        alert('Email address copied to clipboard: ' + email);
      }).catch(() => {
        alert('Please email: ' + email);
      });
    }
  };

  if (isHireable) {
    prof.hireable = "Yes";
  } else {
    prof.hireable = "No";
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="contact">
        <h1 className="prof-title">Reach Out to me!</h1>
        <div className="row">
          <div className="main-content-profile">
            <div className="blog-header">
              <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
            </div>
            <h2 className="bio-text">"{emoji(String(prof.bio))}"</h2>
            {prof.location !== null && (
              <div className="location-div">
                <span className="desc-prof">
                  <svg
                    viewBox="-0.5 -2 20 19"
                    version="1.1"
                    width="22"
                    height="16"
                    aria-hidden="true"
                    stroke="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                    ></path>
                  </svg>
                  {prof.location}
                </span>
              </div>
            )}
            <div className="opp-div">
              <span className="desc-prof">
                Open for opportunities: {prof.hireable}
              </span>
            </div>
            
            {/* Social Media Logos */}
            <div className="social-media-logos">
              <a href="https://github.com/sudosugandh" target="_blank" rel="noopener noreferrer" className="social-logo-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/isugandhkumar" target="_blank" rel="noopener noreferrer" className="social-logo-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://gitlab.com/sugandhdevops" target="_blank" rel="noopener noreferrer" className="social-logo-link">
                <i className="fab fa-gitlab"></i>
              </a>
              <a href="https://www.instagram.com/sugandh_devops" target="_blank" rel="noopener noreferrer" className="social-logo-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/sugandh_devops" target="_blank" rel="noopener noreferrer" className="social-logo-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:ksugandh0@gmail.com" className="social-logo-link">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            
            {/* Contact Buttons */}
            <div className="contact-buttons">
              <button 
                className="whatsapp-button"
                onClick={handleWhatsAppClick}
              >
                <i className="fab fa-whatsapp"></i>
                <span>Chat on WhatsApp</span>
              </button>
              
              <a 
                href={`mailto:${contactInfo.email_address}`}
                className="email-button"
                onClick={handleEmailClick}
              >
                <i className="fas fa-envelope"></i>
                <span>Send Email</span>
              </a>
            </div>
            
            <SocialMedia />
          </div>
          <div className="image-content-profile">
            {/* Custom Profile Image - Replace with your photo */}
            <img
              src={require("../../assets/images/sugandh-profile.jpg")}
              alt="Sugandh - DevOps Engineer"
              className="profile-image"
              onError={(e) => {
                // Fallback to GitHub profile image if custom image not found
                e.target.src = prof.avatarUrl;
              }}
            />
            
            {/* Animated Name and Profile Section */}
            <div className="profile-info-container">
              <div className="name-animation">
                <span className="typing-text">
                  {displayText}
                  <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
                </span>
              </div>
              
              <div className="title-animation">
                <span className="title-text">{titleText}</span>
              </div>
              
              <div className="profile-stats">
                <div className="stat-item">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Deployed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">99.9%</span>
                  <span className="stat-label">Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
