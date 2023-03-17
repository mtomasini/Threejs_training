import { OrbitControls } from "../../../vendor/three/examples/jsm/controls/OrbitControlsModified.js";

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);

    controls.enableDamping = true;
    //controls.autoRotate = true;
    //controls.autoRotateSpeed = 10;

    controls.minDistance = 5;
    controls.maxDistance = 20;

    controls.tick = () => controls.update();
    
    return controls;
}

export { createControls };