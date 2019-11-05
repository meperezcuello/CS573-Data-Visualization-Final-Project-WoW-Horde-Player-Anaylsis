const {WebGLRenderer, CanvasTexture, SpriteMaterial, Sprite, Texture } = THREE;
import {WoWZonesPosition} from './PieSpritesPos';
import { getData } from './getData';
import { getJson } from './getJson';


export function spriteCanvas(zone, lol) {
 	var canvas = document.createElement('canvas');
  //let canvas = document.getElementById('myCanvas');
  let context = canvas.getContext("2d")
	canvas.width = 1000;
	canvas.height = 638;
	var width = canvas.width
  var height = canvas.height
  var radius = Math.min(width, height) / 2;

	const run = async () => {
 		let data3 =  await getJson();  
    
    var maxRow = data3[lol].map(function(row){ return row[2] });
   	const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
    var heat = simpleheat(canvas).data(data3[lol]).max(Math.max.apply(null, maxRow)).radius(40, 40);
    var background = new Image();
    background.crossOrigin = "anonymous";
    background.src =  'https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/Azeroth_texture_optimized_final.png';
    background.onload = function(){
    context.drawImage(background,0,0, 1000, 638 );
  }
    heat.draw(0.05);
    };
 
  run();
  	return canvas
}

export function spriteTexture(zone, lol) {
 		let texture = new Texture(spriteCanvas(zone, lol));
  	texture.needsUpdate = true;
  	texture.minFilter = THREE.LinearFilter; // <-- Remove “Texture has been resized” console logs in three.js
		texture.magFilter = THREE.LinearFilter;
    texture.generateMipmaps = false;
  	return texture;
}

//THIS FUNCTION IS TO ADD A PIE CHART PER ZONE NAME
export function PieSprite(scene, texture, radius, x, y, z) {
  	let material = new SpriteMaterial({ map: texture})
  	let sprite = new Sprite( material);
    sprite.scale.set(2*radius, radius, 1);
  	sprite.position.set(x, y+(radius/2), z)
  	scene.add(sprite);
  }