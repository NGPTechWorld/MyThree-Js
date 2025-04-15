import * as THREE from 'three';
import { createCamera, updateCameraAspect } from './modules/camera.js';
import { setupControls, setupKeyboardControls, updateMovement } from './modules/controls.js';
import { createScene, addObjects } from './modules/scene.js';
import { createRenderer, updateRendererSize } from './modules/renderer.js';

// Initialize the scene
const scene = createScene();
const sceneObjects = addObjects(scene);

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


const clock = new THREE.Clock();
let privvaceTime = 0;

// Animation loop
const renderloop = () => {
  requestAnimationFrame(renderloop);
  const time = clock.getElapsedTime();
  const deltaTime = time - privvaceTime;
  privvaceTime = time;
  // Update controls
  controls.update();
  
  // Update movement
  updateMovement(controls);
  
  // Access scene objects
  const { cubeMesh, sphere, plane, group } = sceneObjects;
  
  // You can now animate or manipulate the objects here
  cubeMesh.rotation.x += THREE.MathUtils.degToRad(1) * deltaTime
  sphere.rotation.y += 0.01 *deltaTime
  
  renderer.render(scene, camera);
} 

renderloop();