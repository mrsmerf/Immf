// Smooth Scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Scroll to the target section
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle'); // Assuming you have a button with this ID
const navMenu = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active'); // Add or remove the 'active' class to toggle visibility
});

// Optional: Sticky navigation bar when scrolling
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  
  if (window.scrollY > 50) {
    header.classList.add('sticky'); // Adds sticky class when you scroll past 50px
  } else {
    header.classList.remove('sticky'); // Removes sticky class when you're back at the top
  }
});