import {Enum, TextureDB} from './Texture.js';

// private method,e rev.)
export const meshMapping = (inputs) => {
    let _dict = [];
    for ( let i = 0; i < inputs.length; i++ ) {
    		_dict.push({texture: inputs[i]['texture'], 
                    repeatedness: inputs[i]['repeatedness'], 
                    smoothing: inputs[i]['smoothing'],
                    obj: TextureDB[inputs[i]['texture']]
                   })
    };
    return _dict;
}


export let testDict = [
  {texture:'oceanTexture', repeatedness: 5, smoothing: [0.01, 0.50]},
  {texture:'sandyTexture', repeatedness: 20, smoothing: [0.50, 0.55]},
  {texture:'grassTexture', repeatedness: 20, smoothing: [0.55, 0.75]},
  {texture:'rockyTexture', repeatedness: 10, smoothing: [0.75, 0.90]},
  {texture:'snowyTexture', repeatedness: 20, smoothing: [0.90, 0.99]},
];
  
export let TerrainMappingDB = {
  	testMapping: meshMapping(testDict),
	}



