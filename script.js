/*
  script.js
  
  Handles interactive behavior on the portfolio site:
  - Toggles the navigation menu on small screens
  - Smoothly closes the menu when a link is clicked
  - Inserts the current year into the footer
  - Initializes the AOS (Animate On Scroll) library to reveal
    elements as they come into view.
*/

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Toggle mobile nav when hamburger is clicked
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close mobile nav when a link is clicked
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // Insert current year into the footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Initialize the AOS library with desired settings
  if (window.AOS) {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true,   // whether animation should happen only once
    });
  }
});