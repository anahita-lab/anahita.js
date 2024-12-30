import utils from '../Utils.js'

export class AbstractMap {

    constructor(config) {
        this.lowerLayer = utils.loadImage(
            config.lowerLayer,
            ()=>{}
        );
        this.upperLayer = utils.loadImage(
            config.upperLayer,
            ()=>{}
        );
    }
}