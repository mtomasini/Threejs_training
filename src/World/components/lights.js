import { 
    AmbientLight,
    DirectionalLight,
    HemisphereLight,
} from "../../../vendor/three/build/three.module.js";

function createLights() {
    const ambientLight = new HemisphereLight(
        'white',
        'darkslategrey', // ground color 
        2);

    const mainLight = new DirectionalLight('white', 8);
    mainLight.position.set(10, 10, 10);

    return { ambientLight, mainLight };
}

export { createLights };