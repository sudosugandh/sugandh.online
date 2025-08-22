import React, {useContext, useState, useEffect} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDateTime = (date) => {
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    });
  };

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by Sugandh")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          "Infrastructure as Code, Automation as Culture" 🚀
        </p>
        <p className={isDark ? "dark-mode footer-text footer-time" : "footer-text footer-time"}>
          {emoji("🕐")} {formatDateTime(currentDateTime)}
        </p>
      </div>
    </Fade>
  );
}
