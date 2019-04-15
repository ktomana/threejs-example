const THREE = require('three');
const CTLS = require('three-orbitcontrols');

// Scene
const scene = new THREE.Scene();

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('#87CEEB');
document.body.appendChild( renderer.domElement );

// Objects
const coneMaterial = new THREE.MeshLambertMaterial({ color: '#00ff00' });

const coneGeometryTop = new THREE.ConeGeometry(0.5, 1, 4);
const coneTop = new THREE.Mesh(coneGeometryTop, coneMaterial);
scene.add(coneTop);

coneTop.position.x = 0;
coneTop.position.y = 0.5;
coneTop.position.z = -5;

const coneGeometryMiddle = new THREE.ConeGeometry(0.6, 1, 5);
const coneMiddle = new THREE.Mesh(coneGeometryMiddle, coneMaterial);
scene.add(coneMiddle);

coneMiddle.position.x = 0;
coneMiddle.position.y = 0;
coneMiddle.position.z = -5;

const coneGeometryBottom = new THREE.ConeGeometry(0.7, 1, 6);
const coneBottom = new THREE.Mesh(coneGeometryBottom, coneMaterial);
scene.add(coneBottom);

coneBottom.position.x = 0;
coneBottom.position.y = -0.5;
coneBottom.position.z = -5;

const cubeGeometry = new THREE.BoxGeometry(0.2, 1, 0.2);
const cubeMaterial = new THREE.MeshLambertMaterial({ color: '#654321' });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

cube.position.z = -5;
cube.position.y = -1.4;
cube.rotation.y = 0.3;

const groundGeom = new THREE.BoxGeometry(10, 0.2, 10);
const groundMaterial = new THREE.MeshLambertMaterial({ color: '#654321' });
const ground = new THREE.Mesh(groundGeom, groundMaterial);
scene.add(ground);

ground.position.z = -5;
ground.position.y = -2;

// Target Object
const targetObject = new THREE.Object3D();
scene.add(targetObject);

// Camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);

camera.position.y = 0;
camera.position.x = 0;
camera.position.z = 2;
camera.lookAt(coneTop.position);

// Controls
const controls = new CTLS(camera);
controls.enableDamping = true;
controls.dampingFactor = 0.15;
controls.target.set(0, 0, 0);
controls.rotateSpeed = 0.07;

// Lights
const hemisphereLight = new THREE.HemisphereLight('#fff', '#000', 0.8);
hemisphereLight.position.x = -1;
hemisphereLight.position.y = 2;
hemisphereLight.position.z = 0;
scene.add(hemisphereLight);

hemisphereLight.target = targetObject;

// const directionalLight = new THREE.DirectionalLight('#fff', 0.8);
// directionalLight.position.x = 1;
// directionalLight.position.y = 2;
// directionalLight.position.z = 0;
// scene.add(directionalLight);

// const lightHelper = new THREE.DirectionalLightHelper(hemisphereLight, 5);
// scene.add(lightHelper);
//
// const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5);
// scene.add(directionalLightHelper);

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};

animate();
