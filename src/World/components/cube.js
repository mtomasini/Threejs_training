import { SphereGeometry, BoxBufferGeometry, Mesh, MeshStandardMaterial } from '../../../vendor/three/build/three.module.js';

function createCube() {
    const geometry = new BoxBufferGeometry(2,2,2);
    const material = new MeshStandardMaterial({color: 'purple'});
    const cube = new Mesh(geometry, material);

    cube.rotation.set(-0.5, -0.1, 0.8)
    return cube;
}

function createSphere() {
    const geometry = new SphereGeometry(1, 32, 16)
    const material = new MeshStandardMaterial({color: 'purple'});
    const sphere = new Mesh(geometry, material);

    return sphere;
}

function createCubeAndSphere() {
    const cube = new createCube();
    const sphere = new createSphere();

    cube.position.set(-2, 0, 0);
    sphere.position.set(2, 0, 0);

    return [cube, sphere];
}

export { createCube, createSphere, createCubeAndSphere };