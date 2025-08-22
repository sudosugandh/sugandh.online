import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Add smooth scrolling behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add CSS for scroll offset to account for fixed header
const style = document.createElement('style');
style.textContent = `
  html {
    scroll-padding-top: 80px;
  }
`;

// Handle anchor link navigation
document.addEventListener('DOMContentLoaded', function() {
  // Handle all anchor links
  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

document.head.appendChild(style);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
