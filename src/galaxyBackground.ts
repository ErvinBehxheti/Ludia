import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
const galaxyBackground = document.querySelector("#galaxy") as HTMLDivElement;

const scene: THREE.Scene = new THREE.Scene();

const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
galaxyBackground?.appendChild(renderer.domElement);

const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0, 0.3);
camera.lookAt(0, 0, 0);

window.addEventListener("scroll", () => {
  const scroll = window.scrollY / 1000;
  camera.position.x = scroll;
  camera.lookAt(0, 0, 0);
});

const controls: OrbitControls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;
controls.target.set(0, 0, 0);

const loader: GLTFLoader = new GLTFLoader();
const dracoLoader: DRACOLoader = new DRACOLoader();
dracoLoader.setDecoderPath(
  "https://www.gstatic.com/draco/versioned/decoders/1.5.7/"
);
loader.setDRACOLoader(dracoLoader);
loader.load(
  "model/scene.glb",
  (gltf) => {
    const model = gltf.scene;
    model.scale.set(1, 1, 1);

    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);

    const size = box.getSize(new THREE.Vector3());
    const maxAxis = Math.max(size.x, size.y, size.z);
    const desiredSize = 2;
    model.scale.multiplyScalar(desiredSize / maxAxis);

    scene.add(model);
  },
  undefined,
  (error) => {
    console.error("Error loading model:", error);
  }
);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const animate = (): void => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
};
animate();
