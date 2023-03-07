import { WebGLRenderer} from '../../../vendor/three/build/three.module.js';

function createRenderer() {
    const renderer = new WebGLRenderer({ antialias: true });

    // legacy lights are the old style of rendering, when
    // lights were only directional and there were no ambience lights
    renderer.useLegacyLights = false;

    return renderer;
}

export { createRenderer };