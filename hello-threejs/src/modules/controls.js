import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

export function setupControls(camera, canvas) {
  const controls = new PointerLockControls(camera, document.body);
  
  // Add click event to enable pointer lock
  canvas.addEventListener('click', function() {
    controls.lock();
  });
  
  return controls;
}

// Movement variables
const moveSpeed = 0.05;
const keys = {
  w: false,
  a: false,
  s: false,
  d: false,
  up: false,
  down: false,
  shift: false
};

// Keyboard event listeners
export function setupKeyboardControls() {
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
      case 'Space':
        keys.up = true;
        break;
      case 'ControlLeft':
        keys.down = true;
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
      case 'Space':
        keys.up = false;
        break;
      case 'ControlLeft':
        keys.down = false;
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        keys.shift = false;
        break;
    }
  });
}

// Update movement based on keys pressed
export function updateMovement(controls) {
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
  if (keys.up) {
    controls.getObject().position.y += speed;
  }
  if (keys.down) {
    controls.getObject().position.y -= speed;
  }
} 