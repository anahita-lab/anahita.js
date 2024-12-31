export default class World {

    static TILE = 16;

    constructor(config) {
        this.element = config.element;
        this.map = config.map;
    }

    init() {
        this.canvas = this.element.querySelector("canvas");
        this.context = this.canvas.getContext("2d");
        Object.keys(this.map.sprites)
        .forEach(key => {
            let sprite = this.map.sprites[key];
            sprite.id = key;
        });
    }

    loop() {
        this.map.renderLowerLayer(this.context);

        Object.values(this.map.sprites)
            .forEach(sprite => {
                sprite.render(this.context);
            });
        
        requestAnimationFrame(() => {
            this.loop();
        }); 
    }

    setMap(map) {
        this.map = map;
    }
}