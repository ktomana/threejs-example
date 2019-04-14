const THREE = require('three');

// Scene, Camera
const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);

// Renderer
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x87CEEB);
document.body.appendChild( renderer.domElement );

const coneGeometry = new THREE.ConeGeometry(0.5, 1, 4);
const coneMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
const cone = new THREE.Mesh(coneGeometry, coneMaterial);

const coneGeometry2 = new THREE.ConeGeometry(0.6, 1, 5);
const coneMaterial2 = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
const cone2 = new THREE.Mesh(coneGeometry2, coneMaterial2);

const coneGeometry3 = new THREE.ConeGeometry(0.7, 1, 6);
const coneMaterial3 = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
const cone3 = new THREE.Mesh(coneGeometry3, coneMaterial3);

const cubeGeometry = new THREE.BoxGeometry(0.2, 0.6, 0.2);
const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x654321 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

const groundGeom = new THREE.BoxGeometry(10, 0.2, 10);
const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x654321 });
const ground = new THREE.Mesh(groundGeom, groundMaterial);

let light = new THREE.HemisphereLight(0xFFFFFF, 0x000000, 0.8);
light.position.x = -1;
light.position.y = 2;
light.position.z = 0;
scene.add(light);

var targetObject = new THREE.Object3D();
scene.add(targetObject);

light.target = targetObject;

// const helper = new THREE.DirectionalLightHelper( light, 5 );
// scene.add( helper );
//
// let light2 = new THREE.DirectionalLight(0xFFFFFF, 0.8);
// light2.position.x = 1;
// light2.position.y = 2;
// light2.position.z = 0;
// scene.add(light2);
//
// const helper2 = new THREE.DirectionalLightHelper( light2, 5 );
// scene.add( helper2 );

scene.add(cone);
scene.add(cone2);
scene.add(cone3);
scene.add(cube);
scene.add(ground);
// Positions
cone.position.x = 0;
cone.position.y = 0.5;
cone.position.z = -5;

cone2.position.x = 0;
cone2.position.y = 0;
cone2.position.z = -5;

cone3.position.x = 0;
cone3.position.y = -0.5;
cone3.position.z = -5;

cube.position.z = -5;
cube.position.y = -1.4;
cube.rotation.y = 0.3;

ground.position.z = -5;
ground.position.y = -2;


// Animation
const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
