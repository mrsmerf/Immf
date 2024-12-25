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

// Form submission handling (for the "Report a Threat" form)
document.getElementById('reportForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form data
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const threatType = document.getElementById('threat-type').value.trim();
  const description = document.getElementById('description').value.trim();

  // Basic form validation
  if (!name || !email || !threatType || !description) {
    alert("Please fill out all the fields.");
    return; // Prevent form submission if validation fails
  }

  // Optional: Validate email format
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Show loading message (optional, user feedback)
  alert("Sending your report...");

  // Telegram Bot API token and chat ID
  const botToken = 'YOUR_BOT_TOKEN'; // Keep this secure by using a backend service
  const chatId = 'YOUR_CHAT_ID'; // Replace with your chat ID

  // Create the message to send to Telegram
  const message = `New Threat Report:\n\nName: ${name}\nEmail: ${email}\nType of Threat: ${threatType}\nDescription: ${description}`;

  // Prepare the URL to send the message
  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

  // Send the message via fetch
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert('Report sent successfully!');
      } else {
        alert('Failed to send report. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while sending your report. Please try again.');
    });
});
