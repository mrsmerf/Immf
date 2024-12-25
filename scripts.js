// Existing JavaScript logic

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
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const threatType = document.getElementById('threat-type').value;
  const description = document.getElementById('description').value;

  // Telegram Bot API token and chat ID
  const botToken = '8183385081:AAHmYIGLZ02avISpd5MfEvKbeUt21FNxHYg'; // Replace with your bot token
  const chatId = '7747025007'; // Replace with your chat ID

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
      alert('An error occurred. Please try again.');
    });
});
