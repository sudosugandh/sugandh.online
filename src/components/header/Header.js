import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills" className="nav-link">
                <i className="fas fa-code"></i>
                Skills
              </a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience" className="nav-link">
                <i className="fas fa-briefcase"></i>
                Work Experiences
              </a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource" className="nav-link">
                <i className="fab fa-github"></i>
                Open Source
              </a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements" className="nav-link">
                <i className="fas fa-trophy"></i>
                Achievements
              </a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs" className="nav-link">
                <i className="fas fa-blog"></i>
                Blogs
              </a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#greeting" className="nav-link" onClick={(e) => {
                e.preventDefault();
                const resumeButton = document.querySelector('.download-link-button');
                if (resumeButton) {
                  resumeButton.click();
                }
              }}>
                <i className="fas fa-file-alt"></i>
                Resume
              </a>
            </li>
          )}
          <li>
            <a href="#profile" className="nav-link contact-link">
              <i className="fas fa-envelope"></i>
              Contact Me
            </a>
          </li>
          <li className="theme-toggle">
            <ToggleSwitch />
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
