// Select DOM Elements
const servicesMenu = document.getElementById('services-menu');
const servicesSubmenu = document.getElementById('services-submenu');
const aboutUsMenu = document.getElementById('about-us-menu');
const contactUsMenu = document.getElementById('contact-us-menu');
const cardContainer = document.getElementById('card-container');

// Toggle Services Submenu visibility on Services Menu click
servicesMenu.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click from propagating to document
    // Toggle the submenu visibility
    servicesSubmenu.classList.toggle('active');
});

// Close submenu when clicking outside
document.addEventListener('click', (event) => {
    if (!servicesMenu.contains(event.target) && !servicesSubmenu.contains(event.target)) {
        servicesSubmenu.classList.remove('active'); // Close the submenu if clicked outside
    }
});

// Handle submenu item clicks
document.querySelectorAll('#services-submenu li').forEach((item, index) => {
    item.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event from propagating
        servicesSubmenu.classList.remove('active'); // Close the submenu after selection
        showCard(`service-card-${index + 1}`); // Show the corresponding card
    });
});

// Handle "About Us" and "Contact Us" clicks
aboutUsMenu.addEventListener('click', (event) => {
    event.stopPropagation();
    showCard('about-us-card');
});

contactUsMenu.addEventListener('click', (event) => {
    event.stopPropagation();
    showCard('contact-us-card');
});

// Show Card Function
function showCard(cardId) {
    // Hide all cards first
    document.querySelectorAll('.card').forEach(card => {
        card.style.display = 'none';
    });

    // Show the selected card
    const selectedCard = document.getElementById(cardId);
    if (selectedCard) {
        selectedCard.style.display = 'block';
    }
}

// Close cards when clicking outside
document.addEventListener('click', (event) => {
    if (!cardContainer.contains(event.target) && !event.target.closest('.card')) {
        document.querySelectorAll('.card').forEach(card => {
            card.style.display = 'none'; // Hide cards if clicked outside
        });
    }
});

// Handle Contact Form Submission (mock)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted successfully!');
        contactForm.reset(); // Reset form fields
    });
}
