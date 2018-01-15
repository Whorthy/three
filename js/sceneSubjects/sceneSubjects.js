function SceneSubjects(scene) {

  const button1 = document.querySelector('.object1');
  const button2 = document.querySelector('.object2');
  const button3 = document.querySelector('.object3')

  const preset1 = [0x33ff33, 0x00ffdd, 0xddff00]
  const preset2 = [0x00bbff, 0xaa00ff, 0x00ffaa]
  const preset3 = [0xffcc00, 0xddff00, 0xff3333]

  let [color1, color2, color3 ] = preset2;

  const light1 = new THREE.PointLight( color1, 1, 100);
  scene.add(light1);

  const light2 = new THREE.PointLight( color2, 1, 100);
  scene.add(light2);

  const light3 = new THREE.PointLight( color3, 1, 100);
  scene.add(light3);

  const sphere1Geometry = new THREE.SphereGeometry(0.1, 32, 32);
  let sphere1Material = new THREE.MeshBasicMaterial({color: color1});
  const sphere1 = new THREE.Mesh(sphere1Geometry, sphere1Material);
  scene.add(sphere1);

  const sphere2Geometry = new THREE.SphereGeometry(0.1, 32, 32);
  let sphere2Material = new THREE.MeshBasicMaterial({color: color2});
  const sphere2 = new THREE.Mesh(sphere2Geometry, sphere2Material);
  scene.add(sphere2);

  const sphere3Geometry = new THREE.SphereGeometry(0.1, 32, 32);
  let sphere3Material = new THREE.MeshBasicMaterial({color: color3});
  const sphere3 = new THREE.Mesh(sphere3Geometry, sphere3Material);
  scene.add(sphere3);

  const geometry = new THREE.BoxGeometry(1,1,1);
  const material = new THREE.MeshLambertMaterial({color: 0xffffff, flatShading: true});
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  const spheres = [sphere1, sphere2, sphere3]
  const lights = [light1, light2, light3]

  sphere1.position.set(2,1,0);
  sphere2.position.set(-2,1,0);
  sphere3.position.set(0,-2,0);
  light1.position.set(2,1,0);
  light2.position.set(-2,1,0);
  light3.position.set(0,-2,0);

  button1.addEventListener('click', () => {
    lights.map((lig, index) => {
      lig.color = new THREE.Color(preset1[index])
    })  
    spheres.map((sph, index) => {
      sph.material.color = new THREE.Color(preset1[index])
    })
  })

  button2.addEventListener('click', () => {
    lights.map((lig, index) => {
      lig.color = new THREE.Color(preset2[index])
    })  
    spheres.map((sph, index) => {
      sph.material.color = new THREE.Color(preset2[index])
    })
  })

  button3.addEventListener('click', () => {
    lights.map((lig, index) => {
      lig.color = new THREE.Color(preset3[index])
    })  
    spheres.map((sph, index) => {
      sph.material.color = new THREE.Color(preset3[index])
    })
  })

  this.update = function() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }

}