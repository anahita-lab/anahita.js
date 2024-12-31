import World from './World.js'

export function init(map) {

    const world = new World({
        element: document.querySelector(".anahita"),
        map
    });

    world.init();

    return world;
}