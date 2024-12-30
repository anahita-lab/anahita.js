import World from './World.js'

export function init() {

    const world = new World({
        element: document.querySelector(".anahita")
    });

    world.init();

    return world;
}