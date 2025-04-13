import * as THREE from 'three';

//init Scene
const scene =new THREE.Scene();

//init Mesh
const cubeGeometry =new THREE.BoxGeometry(1,1,1)
const cubeMaterial =new THREE.MeshBasicMaterial({color:"red"})

const cubeMesh =new THREE.Mesh(cubeGeometry,cubeMaterial)
scene.add(cubeMesh)

//init Camera
const camera =new THREE.PerspectiveCamera(75,window.innerWidth / innerHeight,0.1,30)
camera.position.z=5
scene.add(camera)

//init Renderr
const canvas = document.querySelector('canvas')
const renderr = new THREE.WebGLRenderer({canvas:canvas})
renderr.setSize(window.innerWidth,innerHeight)
renderr.render(scene,camera)