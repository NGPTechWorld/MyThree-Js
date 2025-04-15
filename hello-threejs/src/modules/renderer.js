import * as THREE from 'three';

export function createRenderer(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  const maxPixelRatio = Math.min(window.devicePixelRatio, 2);
  renderer.setPixelRatio(maxPixelRatio);
  
  return renderer;
}

export function updateRendererSize(renderer) {
  renderer.setSize(window.innerWidth, window.innerHeight);
} 