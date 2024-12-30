export default class World {

    static TILE = 16;

    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector("canvas");
        this.context = this.canvas.getContext("2d");
        this.keyboardController = null;
        this.map = null;
    }

    init() {
        console.log("Hey!")
    }

    loop() {
        this.context.drawImage(
            this.map.lowerLayer,
            0,
            0);
    }

    setMap(map) {
        this.map = map
    }
}