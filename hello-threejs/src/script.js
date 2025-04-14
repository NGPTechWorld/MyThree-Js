import * as THREE from 'three';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

// initialize the scene
const scene = new THREE.Scene()

// add objects to the scene
const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial = new THREE.MeshBasicMaterial({color: "red"})

const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
)
scene.add(cubeMesh)

// initialize the camera
const camera = new THREE.PerspectiveCamera(
  75, 
  window.innerWidth / window.innerHeight,
  0.1,
  30)
camera.position.z = 5

// initialize the renderer
const canvas = document.querySelector('canvas.threejs')
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias:true
})

renderer.setSize(window.innerWidth, window.innerHeight)
const maxPixelRatio = Math.min(window.devicePixelRatio,2)
renderer.setPixelRatio(maxPixelRatio)

// Setup PointerLockControls for mouse look
const controls = new PointerLockControls(camera, document.body);

// Add click event to enable pointer lock
canvas.addEventListener('click', function() {
  controls.lock();
});

// Handle window resize
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Movement variables
const moveSpeed = 0.05;
const keys = {
  w: false,
  a: false,
  s: false,
  d: false,
  shift: false
};

// Keyboard event listeners
document.addEventListener('keydown', (event) => {
  switch (event.code) {
    case 'KeyW':
      keys.w = true;
      break;
    case 'KeyA':
      keys.a = true;
      break;
    case 'KeyS':
      keys.s = true;
      break;
    case 'KeyD':
      keys.d = true;
      break;
    case 'ShiftLeft':
    case 'ShiftRight':
      keys.shift = true;
      break;
  }
});

document.addEventListener('keyup', (event) => {
  switch (event.code) {
    case 'KeyW':
      keys.w = false;
      break;
    case 'KeyA':
      keys.a = false;
      break;
    case 'KeyS':
      keys.s = false;
      break;
    case 'KeyD':
      keys.d = false;
      break;
    case 'ShiftLeft':
    case 'ShiftRight':
      keys.shift = false;
      break;
  }
});

// Update movement based on keys pressed
function updateMovement() {
  const speed = keys.shift ? moveSpeed * 2 : moveSpeed;
  
  if (keys.w) {
    controls.moveForward(speed);
  }
  if (keys.s) {
    controls.moveForward(-speed);
  }
  if (keys.a) {
    controls.moveRight(-speed);
  }
  if (keys.d) {
    controls.moveRight(speed);
  }
}

// Animation loop
const renderloop = () => {
  requestAnimationFrame(renderloop);
  
  // Update movement
  updateMovement();
  
  renderer.render(scene, camera);
} 

renderloop();