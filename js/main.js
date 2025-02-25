// Initialize Feather icons
document.addEventListener('DOMContentLoaded', () => {
  feather.replace();
  initMobileMenu();
  initScrollAnimations();
  handlePageNavigation();
});

// Mobile menu functionality
function initMobileMenu() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
      }
    });
  }
}

// Scroll to section functionality
function scrollToSection(sectionId) {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
  }
  
  // Close mobile menu if open
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
    mobileMenu.classList.add('hidden');
  }
}

// Handle page navigation without server
function handlePageNavigation() {
  // Check if we're on a non-existent page
  if (document.body.querySelector('#not-found')) {
    // If the not-found element is present and visible, we're on the 404 page
    return;
  }
  
  // Add event listeners to all links to handle navigation
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // If it's an anchor link, use smooth scrolling
      if (href.startsWith('#')) {
        e.preventDefault();
        scrollToSection(href);
      }
      // Otherwise, let the browser handle the navigation
    });
  });
}

// Scroll animations
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  
  animatedElements.forEach(element => {
    observer.observe(element);
  });
}

// Make scrollToSection available globally
window.scrollToSection = scrollToSection; 