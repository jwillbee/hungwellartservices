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

const aboutUsCard = document.getElementById('about-us-card');
const contactUsCard = document.getElementById('contact-us-card');

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

// Handle Card Display for Services
const serviceSubmenuItems = servicesSubmenu.querySelectorAll('li');

serviceSubmenuItems.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        event.stopPropagation();
        servicesSubmenu.classList.remove('active');
        showCard(`service-card-${index + 1}`);
    });
});

// Open About Us and Contact Us Cards
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
    if (!cardContainer.contains(event.target)) {
        document.querySelectorAll('.card').forEach(card => {
            card.style.display = 'none';
        });
    }
});
