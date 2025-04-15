import * as THREE from 'three';
import { createCamera, updateCameraAspect } from './modules/camera.js';
import { setupControls, setupKeyboardControls, updateMovement } from './modules/controls.js';
import { createScene, addObjects } from './modules/scene.js';
import { createRenderer, updateRendererSize } from './modules/renderer.js';

// Initialize the scene
const scene = createScene();
addObjects(scene);

// Initialize the camera
const camera = createCamera();

// Initialize the renderer
const canvas = document.querySelector('canvas.threejs');
const renderer = createRenderer(canvas);

// Setup PointerLockControls for mouse look
const controls = setupControls(camera, canvas);

// Setup keyboard controls
setupKeyboardControls();

// Handle window resize
window.addEventListener('resize', () => {
  updateCameraAspect(camera);
  updateRendererSize(renderer);
}, false);

// Animation loop
const renderloop = () => {
  requestAnimationFrame(renderloop);
  
  // Update movement
  updateMovement(controls);
  
  renderer.render(scene, camera);
} 

renderloop();