import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            
            {/* Contact Cards */}
            <div className="contact-cards-container">
              {contactInfo.number && (
                <Fade left duration={1000} distance="20px">
                  <div className="contact-card">
                    <div className="contact-card-icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="contact-card-content">
                      <h3>Call Me</h3>
                      <a
                        className="contact-detail"
                        href={"tel:" + contactInfo.number}
                      >
                        {contactInfo.number}
                      </a>
                    </div>
                  </div>
                </Fade>
              )}
              
              <Fade right duration={1000} distance="20px">
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-card-content">
                    <h3>Email Me</h3>
                    <a
                      className="contact-detail-email"
                      href={"mailto:" + contactInfo.email_address}
                    >
                      {contactInfo.email_address}
                    </a>
                  </div>
                </div>
              </Fade>
              
              <Fade up duration={1000} distance="20px">
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-card-content">
                    <h3>Location</h3>
                    <p>Lucknow, Uttar Pradesh, India</p>
                  </div>
                </div>
              </Fade>
              
              <Fade up duration={1000} distance="20px">
                <div className="contact-card">
                  <div className="contact-card-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-card-content">
                    <h3>Available</h3>
                    <p>Open for new opportunities</p>
                  </div>
                </div>
              </Fade>
            </div>

            {/* Social Media Section */}
            <div className="social-media-section">
              <h3 className="social-media-title">Let's Connect on Social Media</h3>
              <div className="social-media-container">
                <SocialMedia />
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="quick-contact-section">
              <h3 className="quick-contact-title">Quick Message</h3>
              <div className="quick-contact-form">
                <div className="form-group">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="contact-input"
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="contact-input"
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    placeholder="Your Message" 
                    className="contact-textarea"
                    rows="4"
                  ></textarea>
                </div>
                <button className="contact-submit-btn">
                  <i className="fas fa-paper-plane"></i>
                  Send Message
                </button>
              </div>
            </div>
          </div>
          
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
