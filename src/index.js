const THREE = require('three');

// Scene, Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

// Geometry
const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

const coneGeometry = new THREE.ConeGeometry(0.5, 1, 4);
const coneMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cone = new THREE.Mesh(coneGeometry, coneMaterial);

const sphereGeometry = new THREE.SphereGeometry(0.5, 8, 8);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

scene.add(cube);
scene.add(cone);
scene.add(sphere);

// Positions
cube.position.x = -2;
cube.position.z = -5;

cone.position.x = 0;
cone.position.z = -5;

sphere.position.x = 2;
sphere.position.z = -5;

// Animation
const animate = () => {
  requestAnimationFrame(animate);

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  //
  // cone.rotation.x += 0.1;
  // cone.rotation.y += 0.1;
  //
  // sphere.rotation.x += 0.09;
  // sphere.rotation.y += 0.09;

  renderer.render(scene, camera);
};

animate();
