import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createLights } from "./components/lights.js";
import { createScene } from "./components/scene.js";

import { createControls } from "./systems/controls.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";

// these variables are set up instead of
// setting up variables inside the class as attributes.
// This limits the scope of these variables to
// this script, however it will not be viable
// if we ever create two different World() instances.
let camera;
let renderer;
let scene;
let loop;
let isAnimated;

class World {
    constructor(container) {
        camera = createCamera();
        scene = createScene();
        renderer = createRenderer();
        loop = new Loop(camera, scene, renderer);
        container.append(renderer.domElement);

        const cube = createCube();
        const light = createLights();

        loop.updatables.push(cube);

        scene.add(cube, light);

        const resizer = new Resizer(container, camera, renderer);
    }

    render() {
        renderer.render(scene, camera);
    }

    start() {
        loop.start();
        isAnimated = true;
    }

    stop() {
        loop.stop();
        isAnimated = false;
    }

    onClick() {
        if(isAnimated === true) {
            this.stop();
        }
        else {
            this.start();
        }
    }

    isAnimated() {
        return isAnimated;
    }
}

export { World };