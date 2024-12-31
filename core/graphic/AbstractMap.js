import utils from '../Utils.js'

export class AbstractMap {

    constructor(config) {
        this.sprites = config.sprites;
        this.lowerLayer = utils.loadImage(
            config.lowerLayer,
            ()=>{}
        );
        this.upperLayer = utils.loadImage(
            config.upperLayer,
            ()=>{}
        );
    }

    renderLowerLayer(context) {
        context.drawImage(
            this.lowerLayer, 
            0,
            0
        );
    }

    renderUpperLayer(context) {
        context.drawImage(
            this.upperLayer,
            0,
            0
        );
    }
}