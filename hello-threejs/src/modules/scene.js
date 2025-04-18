import * as THREE from 'three';

export function createScene() {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87CEEB); // Sky blue color
  
  return scene;
}

export function addObjects(scene) {
  //Add Axes
  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);

  // Add cube
  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
  const cubeMaterial = new THREE.MeshBasicMaterial({color: "red"});
  const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cubeMesh.position.set(3, 0, 0);
  
  // Add sphere
  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const material = new THREE.MeshBasicMaterial({ color: "blue" });
  const sphere = new THREE.Mesh(geometry, material);

  // Group
  const group = new THREE.Group();
  group.add(cubeMesh);
  group.add(sphere);
  group.position.set(0, 3, 0);
  scene.add(group);
  // Add plane
  const planeGeometry = new THREE.PlaneGeometry(10, 10);
  const planeMaterial = new THREE.MeshBasicMaterial({color: "green"});
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  scene.add(plane);
  plane.rotation.x = -Math.PI / 2;
  plane.position.y = -1;
  
  return { cubeMesh, sphere, plane, group };
} 