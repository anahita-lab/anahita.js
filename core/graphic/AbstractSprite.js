import utils from '../Utils.js'

export class AbstractSprite {

    constructor(config) {
        this.id = null;
        this.map = null;
        this.x = config.x;
        this.y = config.y;
        this.xOffset = config.xOffset || 0;
        this.yOffset = config.yOffset || 0;
        this.size = config.size;
        this.spriteSheet = utils.loadImage(
            config.path,
            () => {
                this.isSpriteSheetLoaded = true;
                this.frames = this.spriteSheet.width / this.size; 
            }
        );
    }

    render(context) {
        const xOffset = this.size - this.map.tileSize - (this.map.tileSize / 2) + this.xOffset;
        const yOffset = this.size - this.map.tileSize - (this.map.tileSize / 2) + this.yOffset;
        
        this.isSpriteSheetLoaded && context.drawImage(
            this.spriteSheet,
            0,
            0,
            this.size,
            this.size,
            this.x - xOffset,
            this.y - yOffset,
            this.size,
            this.size
        );
    }
}