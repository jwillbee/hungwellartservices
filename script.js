// Select DOM Elements
const servicesMenu = document.getElementById('services-menu');
//const servicesSubmenu = document.getElementById('services-submenu');
const aboutUsMenu = document.getElementById('about-us-menu');
const contactUsMenu = document.getElementById('contact-us-menu');
const cardContainer = document.getElementById('card-container');

// Toggle Services Submenu
servicesMenu.addEventListener('click', (event) => {
    event.stopPropagation();
    servicesSubmenu.classList.toggle('active');
});

// Close submenu when clicking outside
document.addEventListener('click', (event) => {
    if (!servicesMenu.contains(event.target) && !servicesSubmenu.contains(event.target)) {
        servicesSubmenu.classList.remove('active');
    }
});

// Handle submenu item clicks
document.querySelectorAll('#services-submenu li').forEach((item, index) => {
    item.addEventListener('click', (event) => {
        event.stopPropagation();
        servicesSubmenu.classList.remove('active');
        showCard(`service-card-${index + 1}`);
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
    document.querySelectorAll('.card').forEach(card => {
        card.style.display = 'none';
    });
    const selectedCard = document.getElementById(cardId);
    if (selectedCard) {
        selectedCard.style.display = 'block';
    }
}

// Close cards when clicking outside
document.addEventListener('click', (event) => {
    if (!cardContainer.contains(event.target) && !event.target.closest('.card')) {
        document.querySelectorAll('.card').forEach(card => {
            card.style.display = 'none';
        });
    }
});

// Handle Contact Form Submission (Mock)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted successfully!');
        contactForm.reset();
    });
}
