import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Three.js Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

const loader = new GLTFLoader();
loader.load('assets/logo.glb', function (gltf) {
    const logo = gltf.scene;
    scene.add(logo);
    logo.position.set(0, 0, -5);
    logo.scale.set(0.5, 0.5, 0.5);
}, function (xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
}, function (error) {
    console.error(error);
});

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

// Menu and Card Logic
const servicesMenu = document.getElementById('services-menu');
const servicesSubmenu = document.getElementById('services-submenu');
const aboutUsMenu = document.getElementById('about-us-menu');
const contactUsMenu = document.getElementById('contact-us-menu');

const servicesCard = document.getElementById('services-card');
const aboutUsCard = document.getElementById('about-us-card');
const contactUsCard = document.getElementById('contact-us-card');

// Dynamic Margin for Content Area
const menuTray = document.getElementById('menu-tray');
const menuHeight = menuTray.offsetHeight;

const contentArea = document.createElement('div');
contentArea.id = 'content-area';
document.body.insertBefore(contentArea, menuTray.nextSibling);

const sceneContainer = document.getElementById('scene-container');
contentArea.appendChild(sceneContainer);

contentArea.style.marginTop = `${menuHeight}px`;

// Menu Event Listeners
servicesMenu.addEventListener('click', (event) => {
    event.stopPropagation();
    servicesSubmenu.style.display = servicesSubmenu.style.display === 'block' ? 'none' : 'block';
});

servicesSubmenu.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', (event) => {
        event.stopPropagation();
        servicesSubmenu.style.display = 'none';
        showCard(servicesCard);
    });
});

aboutUsMenu.addEventListener('click', (event) => {
    event.stopPropagation();
    showCard(aboutUsCard);
});

contactUsMenu.addEventListener('click', (event) => {
    event.stopPropagation();
    showCard(contactUsCard);
});

// Card Display Functions
function showCard(card) {
    card.style.display = 'block';
    card.style.opacity = 0;
    setTimeout(() => {
        card.style.opacity = 1;
    }, 50);
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

function hideCard(card) {
    card.style.display = 'none';
}

// Contact Form Submission (Placeholder)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // ... (Your form submission logic)
    contactForm.reset();
    hideCard(contactUsCard); // Hide after "submission"
});

// Close Card Event Listener (Improved)
document.addEventListener('click', (event) => {
    if (!menuTray.contains(event.target)) {
        const cardContainer = document.getElementById('card-container');
        if (!cardContainer.contains(event.target)) {
            document.querySelectorAll('.card').forEach(card => {
                hideCard(card);
            });
        }
    }
});

// Close Buttons for Cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.classList.add('close-button');
    closeButton.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent card close from bubbling to document
      hideCard(card);
    });
    card.appendChild(closeButton);
});
