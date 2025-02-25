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

// ... (Rest of the JavaScript code in next part) ...
