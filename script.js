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
