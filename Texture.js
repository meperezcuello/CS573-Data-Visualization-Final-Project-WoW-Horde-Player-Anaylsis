import {PieSprite, spriteTexture} from './PieSprite';
const {TextureLoader, RepeatWrapping} = THREE;

// private method, to load texture; can be extended into class (future rev.)
const _txtr = (txtrLoad) => {
    var texture = new TextureLoader().load(txtrLoad);
    texture.wrapS = texture.wrapT = RepeatWrapping; 
    return texture;
	}

// this is how Enums are declared in JS
export const Enum  = {};
 		Enum[Enum["Nullz"] = 0] = "Nullz";
    Enum[Enum["Nullz"] = 1] = "Nullz";
    Enum[Enum["oceanTexture"] = 2] = "oceanTexture";
    Enum[Enum["sandyTexture"] = 3] = "sandyTexture";
    Enum[Enum["grassTexture"] = 4] = "grassTexture";
    Enum[Enum["rockyTexture"] = 5] = "rockyTexture";
    Enum[Enum["snowyTexture"] = 6] = "snowyTexture";
 		Enum[Enum["wowtest"] = 7] = "wowtest";
	Enum[Enum["wowtest1"] = 8] = "wowtest1";

export let TextureDB = {
  	oceanTexture: _txtr('https://raw.githubusercontent.com/stemkoski/stemkoski.github.com/master/Three.js/images/dirt-512.jpg'),
  	sandyTexture: _txtr('https://raw.githubusercontent.com/stemkoski/stemkoski.github.com/master/Three.js/images/sand-512.jpg'),
  	grassTexture: _txtr('https://raw.githubusercontent.com/stemkoski/stemkoski.github.com/master/Three.js/images/grass-512.jpg'),
  	rockyTexture: _txtr('https://raw.githubusercontent.com/stemkoski/stemkoski.github.com/master/Three.js/images/rock-512.jpg'),
 		snowyTexture: _txtr('https://raw.githubusercontent.com/stemkoski/stemkoski.github.com/master/Three.js/images/snow-512.jpg'),
  	wowtest: _txtr('https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/Azeroth_texture_optimized_final.png'),
		wowtest1: spriteTexture('Durotar', 0),	
}
//https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/texture_alfa_1_optimized.png
//https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/Azeroth_texture_optimized.png