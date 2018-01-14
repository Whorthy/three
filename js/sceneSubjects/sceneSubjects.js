function SceneSubjects(scene) {

  const color1 = 0x00bbff
  const color2 = 0xaa00ff
  const color3 = 0x00ffaa

  const light1 = new THREE.PointLight( color1, 1, 100);
  scene.add(light1);

  const light2 = new THREE.PointLight( color2, 1, 100);
  scene.add(light2);

  const light3 = new THREE.PointLight( color3, 1, 100);
  scene.add(light3);

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
  const material = new THREE.MeshLambertMaterial({color: 0xffffff, flatShading: true});
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  sphere1.position.set(2,1,0);
  sphere2.position.set(-2,1,0);
  sphere3.position.set(0,-2,0);
  light1.position.set(2,1,0);
  light2.position.set(-2,1,0);
  light3.position.set(0,-2,0);

  this.update = function() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }

}