import utils from '../Utils.js'

export class AbstractSprite {

    constructor(config) {
        this.id = null;
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
        this.isSpriteSheetLoaded && context.drawImage(
            this.spriteSheet,
            0,
            0,
            this.size,
            this.size,
            0,
            0,
            this.size,
            this.size
        );
    }
}