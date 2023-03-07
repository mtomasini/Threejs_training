import {
    BoxBufferGeometry,
    Color,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
} from '../vendor/three/build/three.module.js';

// reference for container element holding the scene
const container = document.querySelector('#scene-container');

// create the scene object
const scene = new Scene();
scene.background = new Color('skyblue');

// create the camera object
const fov = 35; // Field of view
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // near clipping plane
const far = 100; // far clipping plane

const camera = new PerspectiveCamera(fov, aspect, near, far);

// objects created by default at (0, 0, 0)
// we move camera back
camera.position.set(0, 0, 10);

// create geometry
const geometry = new BoxBufferGeometry(2, 2, 2);

// default basic material (white)
const material = new MeshBasicMaterial();

// create Mesh containing the geometry and material
const cube = new Mesh(geometry, material);

scene.add(cube);

// start rendering
const renderer = new WebGLRenderer();

renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.append(renderer.domElement);
renderer.render(scene, camera);