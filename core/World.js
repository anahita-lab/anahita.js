export default class World {

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
            sprite.map = this.map;
            sprite.x = sprite.map.positionInGrid(sprite.x);
            sprite.y = sprite.map.positionInGrid(sprite.y);
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