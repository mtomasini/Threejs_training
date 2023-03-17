import { 
    SphereGeometry, 
    BoxBufferGeometry, 
    Mesh, 
    MeshStandardMaterial,
    MathUtils, 
    TextureLoader,
} from '../../../vendor/three/build/three.module.js';

function createMaterial() {
    const textureLoader = new TextureLoader();
    const texture = textureLoader.load('/assets/textures/uv-test-bw.png',);
    const material = new MeshStandardMaterial({ map: texture });

    return material;
}

function createCube() {
    const geometry = new BoxBufferGeometry(2,2,2);
    const material = createMaterial();
    const cube = new Mesh(geometry, material);

    cube.rotation.set(-0.5, -0.1, 0.8)

    const radiansPerSecond = MathUtils.degToRad(30);

    cube.tick = (delta) => {
        cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
    };

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