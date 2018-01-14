const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);

const controls = new THREE.OrbitControls(camera);

const color1 = 0xffff00
const color2 = 0xbb00ff
const color3 = 0x00ffaa

const light1 = new THREE.PointLight( color1, 1, 100);
scene.add(light1);

const light2 = new THREE.PointLight( color2, 1, 100);
scene.add(light2);

const light3 = new THREE.PointLight( color3, 1, 100);
scene.add(light3);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const sphere1Geometry = new THREE.SphereGeometry(0.1, 32, 32);
const sphere1Material = new THREE.MeshBasicMaterial({color: color1});
const sphere1 = new THREE.Mesh(sphere1Geometry, sphere1Material);
scene.add(sphere1);

const sphere2Geometry = new THREE.SphereGeometry(0.1, 32, 32);
const sphere2Material = new THREE.MeshBasicMaterial({color: color2});
const sphere2 = new THREE.Mesh(sphere2Geometry, sphere2Material);
scene.add(sphere2);

const sphere3Geometry = new THREE.SphereGeometry(0.1, 32, 32);
const sphere3Material = new THREE.MeshBasicMaterial({color: color3});
const sphere3 = new THREE.Mesh(sphere3Geometry, sphere3Material);
scene.add(sphere3);

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshLambertMaterial({color: 0xffffff, shading: THREE.SmoothShading});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
light1.position.set(2,1,0);
light2.position.set(-2,1,0);
light3.position.set(0,-2,0);
sphere1.position.set(2,1,0);
sphere2.position.set(-2,1,0);
sphere3.position.set(0,-2,0);

controls.update();

function animate() {
  requestAnimationFrame( animate );
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  //camera.rotation.z += 0.01;
  controls.update();
  renderer.render(scene, camera);
}

animate();