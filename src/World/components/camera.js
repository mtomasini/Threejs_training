import { PerspectiveCamera } from '../../../vendor/three/build/three.module.js';

function createCamera() {
    const camera = new PerspectiveCamera(
        35, // fow
        1, // aspect ratio (dummy)
        0.1, // near clipping plane
        100, // far clipping plane
    );

    camera.position.set(0, 0, 10);

    return camera;
}

export { createCamera };