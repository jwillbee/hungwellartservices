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

const menuTray = document.getElementById('menu-tray');

// Toggle Submenu
servicesMenu.addEventListener('click', (event) => {
    event.stopPropagation();
    servicesSubmenu.classList.toggle('active');
});

// Hide submenu when clicking outside
document.addEventListener('click', (event) => {
    if (!servicesMenu.contains(event.target) && !servicesSubmenu.contains(event.target)) {
        servicesSubmenu.classList.remove('active');
    }
});

// Create service sub-cards
const serviceSubCards = [];
const serviceSubmenuItems = servicesSubmenu.querySelectorAll('li');
serviceSubmenuItems.forEach((item, index) => {
    const card = document.createElement('div');
    card.classList.add('card', 'service-sub-card');
    card.id = `service-sub-card-${index + 1}`;
    card.innerHTML = `<h2>${item.textContent}</h2><p>Placeholder content for ${item.textContent}.</p>`;
    document.getElementById('card-container').appendChild(card);
    serviceSubCards.push(card);

    item.addEventListener('click', (event) => {
        event.stopPropagation();
        servicesSubmenu.classList.remove('active');
        showCard(serviceSubCards[index]);
    });
});

// Open cards
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
    document.querySelectorAll('.card').forEach(card => {
        if (card !== currentCard) {
            card.style.display = 'none';
        }
    });
}

// Close Cards when clicking outside
document.addEventListener('click', (event) => {
    if (!menuTray.contains(event.target)) {
        document.querySelectorAll('.card').forEach(card => {
            card.style.display = 'none';
        });
    }
});
