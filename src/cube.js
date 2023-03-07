import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    BoxGeometry,
    MeshBasicMaterial,
    Mesh
} from '../node_modules/three/build/three.module.js'
// import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';

// First we set the scene
const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth /
window.innerHeight, 0.1, 1000);

const renderer = new WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

// Then we set the cube
const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();