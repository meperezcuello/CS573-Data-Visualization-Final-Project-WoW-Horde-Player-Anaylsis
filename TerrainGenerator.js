import { TerrainMappingDB, testDict, meshMapping } from './TerrainTextureMapping.js'; 
import { getData } from './getData';
import fragmentShader from './fragmentShader';
import vertexShader from './vertexShader';
const {WebGLRenderer, loadTexture, OctahedronBufferGeometry, SphereBufferGeometry, PlaneBufferGeometry, TextureLoader, Mesh, DataTexture , ClampToEdgeWrapping, ShaderMaterial, RGBFormat} = THREE;

export class TerrainGenerator {
  constructor(csvUrl,terrain = 'testMapping', txtrLoad='') {
    this.csvUrl = csvUrl;
    this.terrain =  terrain;
    this.txtrLoad = txtrLoad;
    this.width = 0;
    this.height = 0;
    this.heightmapScale = 100;
    this.dict = [];
    this.boolean;
  }
  pos(x,y,z){
    //this.scene.add(this.cube);
    [this.cube.position.x, this.cube.position.y, this.cube.position.z] = [x,y,z];
  }
  //** Private Methods: **//
  
  //Transform data to buffer needed for shader DataTexture. 
  //The contents of a buffer object is always an 1-dimensional array. 
  _bufferDataTexture(){
     return (async() => {
        const _data = await getData(this.csvUrl);
        this.width = Math.max(..._data.map(p => p.X), 0) + 1;
        this.height = Math.max(..._data.map(p => p.Y), 0) + 1;
        const _depth = Math.max(..._data.map(p => p.Z), 0); // +1 is not required for Z values since seeking for data max value
       	const _Zmin = Math.min(..._data.map(p => p.Z));
       	const _size = this.height * this.width;
			
        const _buffer = new Uint8Array ( _size * 3 );
      
        for ( let i = 0; i < _data.length; i++ ) {
          let stride = i * 3;
            //if (  parseInt(_data[i]['X']) !== 0 && parseInt(_data[i]['Y']) !== 0  && parseInt(_data[i]['Y']) !== this.height-1 && parseInt(_data[i]['X']) !== this.width -1) {
            		//_buffer[ stride ] = Math.floor((255 * ( _data[i]['Y'] / _depth))); //normalize 0 to 255
          _buffer[ stride ] =  _data[i]['Z'] ; //normalize 0 to 255
          //_buffer[ stride + 1 ] = _data[i]['Y'];
          //_buffer[ stride + 2 ] =  _data[i]['Z'];
           //} else {
           // 		_buffer[ stride ] =  Math.floor((255 * (_Zmin / _depth)));
           // }
        }   
       console.log(_buffer)
        return _buffer;
       
        })()
  	}

  _heightmapTexture(){
    	return (async() => {
        	let _heightmapTexture
          // only takes .png images, till current update
      		if (this.txtrLoad.substr(this.txtrLoad.length - 3) === 'png') {
							console.log(this.txtrLoad.substr(this.txtrLoad.length - 3))
                let img = new Image();
       					img.src = this.txtrLoad;
                this.width = 1000 * 1
                this.height = 638 * 1

    					_heightmapTexture = new TextureLoader().load(this.txtrLoad);
          } else {
          		_heightmapTexture =  new DataTexture(await this._bufferDataTexture(), this.width, this.height, RGBFormat); // value can change for future updates
      		}	
          _heightmapTexture.wrapS = _heightmapTexture.wrapT = ClampToEdgeWrapping;
        	_heightmapTexture.minFilter = THREE.LinearFilter;
          return _heightmapTexture;
      })()
  }
  
  _uniformsGen(){
    	return (async() => {
          let _arr;
          let _uniforms= THREE.UniformsUtils.merge([ 
            THREE.UniformsLib["lights"],
            {
          lightIntensity: {type: 'f', value: 10},
          bumpTexture: { type: "t", value: await this._heightmapTexture() },
          bumpScale: { type: "f", value: this.heightmapScale },
          } ])
          _uniforms.bumpTexture.value =  await this._heightmapTexture()	

          
          if (Array.isArray(this.dict) && !this.dict.length) {
                this.dict = TerrainMappingDB[this.terrain];
          } else {
            		this.dict = meshMapping(this.dict);
          }
     
          for ( let i = 0; i < this.dict.length; i++ ) {
              _uniforms[this.dict[i]['texture']] = { type: "f", value: this.dict[i]['obj'] }
          }
          return _uniforms;
        	})()
 
      }
  
  _randSmooth(txtrsL) {
      let _arr = [];
    	let _dict = [];
    	let _sum = 0;
      for(let i=0; i < txtrsL; i++) {
      		_arr[i] = Math.random();
      }
    
      let _factor = _arr.reduce(function(_a,_b){ 
        	return _a+_b;}, 0);
    
			_arr = _arr.map(function(_item) { return _sum += _item, (_sum / _factor).toFixed(2); });
    
      for(let i=0; i < _arr.length; i++) {
        if (i === 0) {
          	if (parseFloat(_arr[i]) === 0){
            		_arr[i] = 0.02;
            }
              
        		_dict[i] = {smoothing:[0.01,  parseFloat(_arr[i])]};
        } else if (i === (_arr.length-1)) {
          	_dict[i] = {smoothing: [ parseFloat(_arr[i-1]), parseFloat(_arr[i])-0.01]};
        } else {
          	if (parseFloat(_arr[i]) === 1){
            		_arr[i] =_arr[i] - 0.02;
            }
          	_dict[i] = {smoothing:[ parseFloat(_arr[i-1]),  parseFloat(_arr[i])]};
        }
      }
      return _dict;
    }
  
  _fragmentShader(rand){
    if (rand === true) {  
  			return fragmentShader(this.dict, this._randSmooth(5))
      } else {
     		return fragmentShader(this.dict)
      }
  }
  
	_materials(){
  	return (async() => {
      	let _shaderMaterial =  new ShaderMaterial({
          uniforms: await this._uniformsGen(),
          fragmentShader: this._fragmentShader(this.boolean),
          vertexShader: vertexShader(),
          lights: true
        })
      	return _shaderMaterial;
      })()
  }
  
  //** Public Methods: **//
  
  loadMaterials(dict = [], random = false){
  		this.dict = dict;
    	this.boolean = random;
  }
  
  mesh(){
    return (async() => {
      const materials = await this._materials();
      materials.minFilter = THREE.LinearFilter;
			materials.magFilter = THREE.LinearFilter;
      materials.generateMipmaps = false;
      materials.needsUpdate = true;
    	const _plane = new PlaneBufferGeometry(this.width, this.height, this.width / 2, this.height /2);
      const _mesh = new Mesh(_plane,  materials);
      //console.log(_plane.faces)
   		return _mesh; })()
  }
  
  
	}



