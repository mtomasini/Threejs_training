import { World } from './World/World.js';

function main() {
    const container = document.querySelector('#scene-container');

    const world = new World(container);

    world.start();
    // window.addEventListener("click", () => {
    //     world.onClick();
    // });
}


main();