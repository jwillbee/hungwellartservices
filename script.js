import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.getElementById('scene-container').appendChild( renderer.domElement );

// Load 3D logo model
const loader = new GLTFLoader();
loader.load( 'assets/logo.glb', function ( gltf ) {
    const logo = gltf.scene;
    scene.add( logo );

    // Position the logo (adjust as needed)
    logo.position.set(0, 0, -5); // Example positioning
    logo.scale.set(0.5,0.5,0.5);

}, function ( xhr ) {
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
}, function ( error ) {
    console.error( error );
} );

// Basic lighting (you'll likely want to improve this)
const ambientLight = new THREE.AmbientLight( 0xffffff, 0.5 );
scene.add( ambientLight );


camera.position.z = 5; // Initial camera position

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}

animate();

const servicesMenu = document.getElementById('services-menu');
const servicesSubmenu = document.getElementById('services-submenu');
const aboutUsMenu = document.getElementById('about-us-menu');
const contactUsMenu = document.getElementById('contact-us-menu');

const servicesCard = document.getElementById('services-card');
const aboutUsCard = document.getElementById('about-us-card');
const contactUsCard = document.getElementById('contact-us-card');

// Menu Interactions
servicesMenu.addEventListener('click', () => {
    servicesSubmenu.style.display = servicesSubmenu.style.display === 'block' ? 'none' : 'block';
});

// Card Display Logic (Example for Services)
servicesSubmenu.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
        servicesSubmenu.style.display = 'none'; // Close submenu
        showCard(servicesCard);
    });
});

aboutUsMenu.addEventListener('click', () => {
    showCard(aboutUsCard);
});

contactUsMenu.addEventListener('click', () => {
    showCard(contactUsCard);
});


function showCard(card) {
    // Basic show animation (improve as needed)
    card.style.display = 'block';
    card.style.opacity = 0;
    setTimeout(() => {
        card.

// ... (Previous code) ...

function showCard(card) {
    // Basic show animation (improve as needed)
    card.style.display = 'block';
    card.style.opacity = 0;
    setTimeout(() => {
        card.style.opacity = 1; // Fade in
    }, 50); // Small delay

    // Hide other cards
    hideOtherCards(card);
}

function hideOtherCards(currentCard) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card !== currentCard) {
            card.style.display = 'none';
        }
    });
}


// Contact Form Submission (Placeholder)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent actual form submission

    // Get form data (You'll need to handle this properly)
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const serviceType = document.getElementById('service-type').value;
    const notes = document.getElementById('notes').value;

    // Placeholder for sending email (Replace with actual email sending logic)
    console.log("Form submitted:", { name, phone, email, serviceType, notes });
    alert("Form submitted"); // Replace with a more user-friendly message

    // Reset the form after "submission"
    contactForm.reset();

    // Hide the contact card after "submission"
    contactUsCard.style.display = 'none';
});


// Hide Card Function (To hide the card when clicking outside or a close button)
function hideCard(card) {
  card.style.display = 'none';
}

// Add event listeners to close cards when clicking outside (mobile-friendly)
document.addEventListener('click', (event) => {
  const cardContainer = document.getElementById('card-container');
  if (!cardContainer.contains(event.target)) { // Clicked outside the card
    document.querySelectorAll('.card').forEach(card => {
        hideCard(card);
    });
  }
});


// Add close buttons to the cards (optional, but good UX):
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  const closeButton = document.createElement('button'); // Create a close button
  closeButton.textContent = 'Close';
  closeButton.classList.add('close-button'); // Add a class for styling (if needed)
  closeButton.addEventListener('click', () => {
    hideCard(card);
  });
  card.appendChild(closeButton); // Add the button to the card
});

// CSS for the close button (add to your styles.css):
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  /* Add more styles as needed */
}
