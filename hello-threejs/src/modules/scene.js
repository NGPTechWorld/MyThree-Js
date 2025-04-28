import * as THREE from 'three';

export function createScene() {
  const scene = new THREE.Scene();
 // scene.background = new THREE.Color(0x87CEEB); // Sky blue color
  
  return scene;
}

export function addObjects(scene) {
  //Add Axes
  const axesHelper = new THREE.AxesHelper(5);
 // scene.add(axesHelper);
 const torusKnotMaterial = new THREE.MeshPhongMaterial();
 torusKnotMaterial.shininess= 90
  // Add cube
  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
  const cubeMaterial = new THREE.MeshPhongMaterial({ color: "red" });
  const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cubeMesh.position.set(3, 0, 0);
  
  // Add sphere
  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshPhongMaterial({ color: "blue" });
  const sphere = new THREE.Mesh(geometry, torusKnotMaterial);
  // Add TorusKno
  const torusKnotGeometry = new THREE.TorusKnotGeometry(0.5, 0.15, 100, 16);
  const torusKnot = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);
  torusKnot.position.set(-3, 0, 0);

  // Group
  const group = new THREE.Group();
  group.add(cubeMesh);
  group.add(sphere);
  group.add(torusKnot);

  group.position.set(0, 0, 0);
  scene.add(group);
  

  // Add plane
  const planeGeometry = new THREE.PlaneGeometry(10, 10);
  const planeMaterial = new THREE.MeshPhongMaterial({color: "green" , side:2});
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  scene.add(plane);
  plane.rotation.x = -Math.PI / 2;
  plane.position.y = -1;
  
  //Add  light
  // Ambient light for overall scene illumination
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.0);
  scene.add(ambientLight);

  // Main point light
  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(2, 2, 0);
  scene.add(pointLight);
  
  // Additional point lights for better coverage
  const pointLight2 = new THREE.PointLight(0xffffff, 0.8);
  pointLight2.position.set(-3, 3, 2);
  scene.add(pointLight2);
  
  const pointLight3 = new THREE.PointLight(0xffffff, 0.8);
  pointLight3.position.set(0, 3, -2);
  scene.add(pointLight3);
  
  // Directional light to simulate sunlight
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
  directionalLight.position.set(5, 5, 5);
  directionalLight.castShadow = true;
  //scene.add(directionalLight);

  return { cubeMesh, sphere, plane, group };
} 