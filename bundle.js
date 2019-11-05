(function (exports, d3) {
  'use strict';

  const {SpriteMaterial, Sprite, Texture } = THREE;


  //export function ZonesToSprites(scene, yey){
  //  let texture_0=spriteTexture('Durotar', yey); PieSprite(scene, 'Durotar',30,-277.78955311352763,24,38.67265811035771);let texture_1=spriteTexture('Azshara', yey); PieSprite(scene, 'Azshara',30,-236.90184905507408,24,-18.04310167920776);let texture_2=spriteTexture('Northen Barrens', yey); PieSprite(scene, 'Northen Barrens',30,-324.3342548486014,24,42.40533222353124);let texture_3=spriteTexture('Southern Barrens', yey); PieSprite(scene, 'Southern Barrens',30,-329.55571944397286,24,77.34899932128461);let texture_4=spriteTexture('Mulgore', yey); PieSprite(scene, 'Mulgore',30,-360.32731675044806,24,79.35111158362415);let texture_5=spriteTexture('Ashenvale', yey); PieSprite(scene, 'Ashenvale',30,-343.5705344278353,24,6.189150329805115);let texture_6=spriteTexture('Felwood', yey); PieSprite(scene, 'Felwood',30,-350.66999035361914,44,-64.92611869671175);let texture_7=spriteTexture('Darkshore', yey); PieSprite(scene, 'Darkshore',30,-385.31446419961196,24,-76.68302114072709);let texture_8=spriteTexture('Winterspring', yey); PieSprite(scene, 'Winterspring',30,-284.57397200584023,54,-81.47558729825629);let texture_9=spriteTexture('Moonglade', yey); PieSprite(scene, 'Moonglade',30,-321.13909336551916,48,-97.74738874506933);let texture_10=spriteTexture('Teldrassil', yey); PieSprite(scene, 'Teldrassil',30,-402.9094076156481,78,-131.7407672265867);let texture_11=spriteTexture('Mount Hyjal', yey); PieSprite(scene, 'Mount Hyjal',30,-307.3388799075823,94,-47.834504859241434);let texture_12=spriteTexture('Stonetalon Mountains', yey); PieSprite(scene, 'Stonetalon Mountains',30,-399.0184945319111,30,20.7443401431147);let texture_13=spriteTexture('Desolace', yey); PieSprite(scene, 'Desolace',30,-399.5848529640793,24,64.0883236559438);let texture_14=spriteTexture('Dustwallow Marsh', yey); PieSprite(scene, 'Dustwallow Marsh',30,-287.0818159107408,24,120.27639521544074);let texture_15=spriteTexture('Thousand Needles', yey); PieSprite(scene, 'Thousand Needles',30,-289.78409117229796,30,157.76589871394427);let texture_16=spriteTexture('Feralas', yey); PieSprite(scene, 'Feralas',30,-410.16130255590474,34,122.75078982610768);let texture_17=spriteTexture('Silithus', yey); PieSprite(scene, 'Silithus',30,-388.9210583914758,24,180.21265329905296);let texture_18=spriteTexture('UnGoro Crater', yey); PieSprite(scene, 'UnGoro Crater',30,-344.53177754459716,24,176.73378268582215);let texture_19=spriteTexture('Tanaris', yey); PieSprite(scene, 'Tanaris',30,-300.38527277906513,30,200.80222710443277);let texture_20=spriteTexture('Uldum', yey); PieSprite(scene, 'Uldum',30,-364.4577852044935,38,234.19477795867547);let texture_21=spriteTexture('The Cape of Stranglethorn', yey); PieSprite(scene, 'The Cape of Stranglethorn',30,320.40466464778575,24,238.1933703285855);let texture_22=spriteTexture('Northern Stranglethorn', yey); PieSprite(scene, 'Northern Stranglethorn',30,328.4634388211147,24,204.69122514469524);let texture_23=spriteTexture('Blasted Lands', yey); PieSprite(scene, 'Blasted Lands',30,391.47520078921195,24,191.7275989959382);let texture_24=spriteTexture('Swamp of Sorrows', yey); PieSprite(scene, 'Swamp of Sorrows',30,402.0329790005663,24,177.5969478535933);let texture_25=spriteTexture('Duskwood', yey); PieSprite(scene, 'Duskwood',30,336.8137692532394,30,176.69531634588702);let texture_26=spriteTexture('Westfall', yey); PieSprite(scene, 'Westfall',30,295.8557533417584,24,178.16070679515727);let texture_27=spriteTexture('Redridge Mountains', yey); PieSprite(scene, 'Redridge Mountains',30,386.95887400109643,30,157.47511444858765);let texture_28=spriteTexture('Elwynn Forest', yey); PieSprite(scene, 'Elwynn Forest',30,333.4699859916333,24,164.0337620546048);let texture_29=spriteTexture('Burning Steppes', yey); PieSprite(scene, 'Burning Steppes',30,363.3163146357488,34,136.76694774590567);let texture_30=spriteTexture('Searing Gorge', yey); PieSprite(scene, 'Searing Gorge',30,355.61022578427736,34,114.0631759475665);let texture_31=spriteTexture('Badlands', yey); PieSprite(scene, 'Badlands',30,391.7454864528726,34,111.45380501148495);let texture_32=spriteTexture('Loch Modan', yey); PieSprite(scene, 'Loch Modan',30,395.21550049260804,34,82.43017205334165);let texture_33=spriteTexture('Dun Morogh', yey); PieSprite(scene, 'Dun Morogh',30,337.29679068468414,44,87.79113862904887);let texture_34=spriteTexture('Twilight Highlands', yey); PieSprite(scene, 'Twilight Highlands',30,432.5227454002263,28,60.76836375472595);let texture_35=spriteTexture('Wetlands', yey); PieSprite(scene, 'Wetlands',30,354.934918415537,24,43.181241103898316);let texture_36=spriteTexture('Arathi Highlands', yey); PieSprite(scene, 'Arathi Highlands',30,379.83639451845283,24,13.520356001944405);let texture_37=spriteTexture('The Hinterlands', yey); PieSprite(scene, 'The Hinterlands',30,391.5695800872891,34,-12.908190028917076);let texture_38=spriteTexture('Hillsbrad Foothills', yey); PieSprite(scene, 'Hillsbrad Foothills',30,345.7407475978628,24,-1.890201373109902);let texture_39=spriteTexture('Gilneas', yey); PieSprite(scene, 'Gilneas',30,296.52793626675634,24,17.84908060196977);let texture_40=spriteTexture('Silverpine Forest', yey); PieSprite(scene, 'Silverpine Forest',30,308.03288950112943,24,-18.1261526897862);let texture_41=spriteTexture('Tirisfal Glades', yey); PieSprite(scene, 'Tirisfal Glades',30,322.59503720083575,24,-51.44381451717823);let texture_42=spriteTexture('Western Plaguelands', yey); PieSprite(scene, 'Western Plaguelands',30,357.5636429226708,30,-42.876969500513084);let texture_43=spriteTexture('Eastern Plaguelands', yey); PieSprite(scene, 'Eastern Plaguelands',30,405.8146279931575,34,-57.98487867077536);
  //} 

  //var obj = {};
  ///for ( let i = 0; i < WoWZonesPosition.length; i++ ) {
   /// let material = new SpriteMaterial({ map: spriteTexture( String(WoWZonesPosition[i]['Name'], 0))});
   /// let sprite = new Sprite(material);
  	//obj[WoWZonesPosition[i]['Name']]  = material
  //}


  //console.log(obj['Arathi Highlands']) 

  //export function crtZonesSprites() {
    //let _arrString = `` ;
    //for ( let i = 0; i < WoWZonesPosition.length; i++ ) {
       //window['texture_' + i] = JSON.stringify(obj[WoWZonesPosition[i]['Name']]);
      //_arrString += 'let texture_'+ String(i) + '=' + JSON.stringify(obj[WoWZonesPosition[i]['Name']]) + '; '
      //_arrString += 'let texture_'+ String(i) + '=spriteTexture('+ '\''+ String(WoWZonesPosition[i]['Name']) + '\'' + ', yey); '
  		//PieSprite(scene, JSON.stringify(obj[WoWZonesPosition[i]['Name']]), 30,  WoWZonesPosition[i]['x'], WoWZonesPosition[i]['y'], WoWZonesPosition[i]['z']); 
  		//_arrString += 'PieSprite(scene, '+ 'texture_'+ String(i) +',30,'+WoWZonesPosition[i]['x']+','+WoWZonesPosition[i]['y']+','+WoWZonesPosition[i]['z']+');'
  //  }
  //  return _arrString;
  //}

  //export function textureUpdate() {
   // let _arrString = '';
    //for ( let i = 0; i < WoWZonesPosition.length; i++ ) {
    // _arrString += 'texture_'+String(i)+'.needsUpdate = true; '
  //	}
   // return _arrString;
  //}

  const csvUrl = 'https://gist.githubusercontent.com/meperezcuello/a766abb9028b1efafa764dfa5922eb1a/raw/3b3decadf3c8b05dbc602b4d30593a071763f988/wow_handled_data_final.csv';
  const wow_2018_analytics = 'https://gist.githubusercontent.com/meperezcuello/7e760f5e4c9d4803f3daa66764768a33/raw/7b742b6c54dc85116fa91b420cdf8baefe3a85f9/wow_2018_analytics.csv';

  function _FilterCond(data, value) {
      let filteredData = data.filter(d => d.timestamp === value);
      return filteredData;
    }

  function _FilterZone(data, value) {
      let filteredData = data.filter(d => d.zone === value);
      return filteredData;
    }

  const getData = async(time, zone) => {
    const data  = await d3.csv(csvUrl).then(function(data) {
    data.forEach(function(d) {
      d.char = +d.char;
      d.guild = +d.guild;
      d.level = +d.level;
      d.timestamp = +d.timestamp; 
    });
  		return data
  });
    
  	let data_filtered = _FilterZone(_FilterCond(data, time), zone);
    
    //return total amount of player per charclass
    const result = Object.values(data_filtered.reduce((r, o) => (r[o.charclass]
    ? (r[o.charclass].char += o.char)
    : (r[o.charclass] = {...o}), r), {}));
    
    //return total amount of player per zone
    const result_per_zone = Object.values(data_filtered.reduce((r, o) => (r[o.zone]
    ? (r[o.zone].char += o.char)
    : (r[o.zone] = {...o}), r), {}));
    
    return result_per_zone;
  };

  const getWoW2018 = async() => {
  	const data = await d3.csv(wow_2018_analytics);
    return data;
  };

  const jsonUrl = 'https://gist.githubusercontent.com/meperezcuello/45dbb3c65d5834bfefc14f95cd253e0d/raw/c4970b83c9130c2d3a8a5a420cfffdd261582e9b/data.json';

  const getJson = async () => {
    const data = await d3.json(jsonUrl);
    return data;
  };

  const {WebGLRenderer, CanvasTexture, SpriteMaterial: SpriteMaterial$1, Sprite: Sprite$1, Texture: Texture$1 } = THREE;


  function spriteCanvas(zone, lol) {
   	var canvas = document.createElement('canvas');
    //let canvas = document.getElementById('myCanvas');
    let context = canvas.getContext("2d");
  	canvas.width = 1000;
  	canvas.height = 638;
  	var width = canvas.width;
    var height = canvas.height;

  	const run = async () => {
   		let data3 =  await getJson();  
      
      var maxRow = data3[lol].map(function(row){ return row[2] });
    
      var heat = simpleheat(canvas).data(data3[lol]).max(Math.max.apply(null, maxRow)).radius(40, 40);
      var background = new Image();
      background.crossOrigin = "anonymous";
      background.src =  'https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/Azeroth_texture_optimized_final.png';
      background.onload = function(){
      context.drawImage(background,0,0, 1000, 638 );
    };
      heat.draw(0.05);
      };
   
    run();
    	return canvas
  }

  function spriteTexture(zone, lol) {
   		let texture = new Texture$1(spriteCanvas(zone, lol));
    	texture.needsUpdate = true;
    	texture.minFilter = THREE.LinearFilter; // <-- Remove “Texture has been resized” console logs in three.js
  		texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;
    	return texture;
  }

  const {TextureLoader, RepeatWrapping} = THREE;

  // private method, to load texture; can be extended into class (future rev.)
  const _txtr = (txtrLoad) => {
      var texture = new TextureLoader().load(txtrLoad);
      texture.wrapS = texture.wrapT = RepeatWrapping; 
      return texture;
  	};

  let TextureDB = {
    	oceanTexture: _txtr('https://raw.githubusercontent.com/stemkoski/stemkoski.github.com/master/Three.js/images/dirt-512.jpg'),
    	sandyTexture: _txtr('https://raw.githubusercontent.com/stemkoski/stemkoski.github.com/master/Three.js/images/sand-512.jpg'),
    	grassTexture: _txtr('https://raw.githubusercontent.com/stemkoski/stemkoski.github.com/master/Three.js/images/grass-512.jpg'),
    	rockyTexture: _txtr('https://raw.githubusercontent.com/stemkoski/stemkoski.github.com/master/Three.js/images/rock-512.jpg'),
   		snowyTexture: _txtr('https://raw.githubusercontent.com/stemkoski/stemkoski.github.com/master/Three.js/images/snow-512.jpg'),
    	wowtest: _txtr('https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/Azeroth_texture_optimized_final.png'),
  		wowtest1: spriteTexture('Durotar', 0),	
  };
  //https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/texture_alfa_1_optimized.png
  //https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/Azeroth_texture_optimized.png

  // private method,e rev.)
  const meshMapping = (inputs) => {
      let _dict = [];
      for ( let i = 0; i < inputs.length; i++ ) {
      		_dict.push({texture: inputs[i]['texture'], 
                      repeatedness: inputs[i]['repeatedness'], 
                      smoothing: inputs[i]['smoothing'],
                      obj: TextureDB[inputs[i]['texture']]
                     });
      }    return _dict;
  };


  let testDict = [
    {texture:'oceanTexture', repeatedness: 5, smoothing: [0.01, 0.50]},
    {texture:'sandyTexture', repeatedness: 20, smoothing: [0.50, 0.55]},
    {texture:'grassTexture', repeatedness: 20, smoothing: [0.55, 0.75]},
    {texture:'rockyTexture', repeatedness: 10, smoothing: [0.75, 0.90]},
    {texture:'snowyTexture', repeatedness: 20, smoothing: [0.90, 0.99]},
  ];
    
  let TerrainMappingDB = {
    	testMapping: meshMapping(testDict),
  	};

  const _Sampler2DLoader = (inputs) => {
    let _arrString = ` `;
   	 const unique = [...new Set(inputs.map(item => item.texture))]; //create one varible per unique texture; if two record repat one var is created.
      for(let i = 0; i < unique.length; i++) {
  				_arrString +=  `uniform sampler2D ` + String(inputs[i]['texture']) + ";"; 
      }
    console.log(_arrString);
  	return _arrString
  };  

  const _txtr2DLoader = (inputs) => {
    let _arrString = ` `;
      for(let i = 0; i < inputs.length; i++) {
  				_arrString +=  ` vec4 _txtr`+ String(i) + ` = texture2D( ` + String(inputs[i]['texture']) + `, vUV * ` + String( (inputs[i]['repeatedness']).toFixed(1) ) + " );";
      }
  	return _arrString
  };  

  const _smoothStepLoader = (inputs, randSteps = []) => {
    let _arrString = ` `;
    let _arr;
    if (Array.isArray(randSteps) && !randSteps.length) {
          _arr = inputs; 
        } else {
          _arr = randSteps;
        }

      for(let i = 0; i < inputs.length; i++) {
  				_arrString +=  `  multi_txtr =  mix(multi_txtr, _txtr`+ String(i) + `, smoothstep(` + String(_arr[i]['smoothing'][0]) + `, ` + String(_arr[i]['smoothing'][1]) + ", vAmount));";
      }
    
  	return _arrString
  };  

  function fragmentShader(dict, rand) {
    console.log(rand);
    return _Sampler2DLoader(dict) + `
    varying vec2 vUV;
    varying float vAmount;

    varying vec3 vecPos;
    varying vec3 vecNormal;
		uniform float lightIntensity;

    struct PointLight {
      vec3 color;
      vec3 position; // light position, in camera coordinates
      float distance; // used for attenuation purposes. Since
                      // we're writing our own shader, it can
                      // really be anything we want (as long as
                      // we assign it to our light in its
                      // "distance" field
    };

    struct PointLight2 {
      vec3 color;
      vec3 position; // light position, in camera coordinates
      float distance; // used for attenuation purposes. Since
                      // we're writing our own shader, it can
                      // really be anything we want (as long as
                      // we assign it to our light in its
                      // "distance" field
    };


    uniform PointLight pointLights[NUM_POINT_LIGHTS];

    void main() 
    { 
      const float LOG2 = 1.442695;
			float fog_density = 0.000000000001; // increase the fog_density to add fog to the shaderMaterial model, e.g., 0.0005 dense      
      float z = gl_FragCoord.z / gl_FragCoord.w;
      float fogFactor = exp2( -fog_density *  fog_density * z * z * LOG2 );
      fogFactor = clamp(fogFactor, 0.0, 1.0);
      vec4 fog_color = vec4(1,1,1,0);

      vec4 addedLights = vec4(0.0, 0.0, 0.0, 1.0);
    	vec3 lightDirection = normalize(vecPos  - pointLights[0].position + vec3(500, 10, 80));
   		addedLights.rgb += clamp(dot(-lightDirection, vecNormal), 0.0, 1.0) * pointLights[0].color * lightIntensity;
    
			
			` + _txtr2DLoader(dict) + `
      vec4 multi_txtr = vec4(0,0,0,1); // 1 stands for alpha to be black, otherwise means 0 white. Note: alpha 0, can reproduce beautiful fog mountain effect.
  		` + _smoothStepLoader(dict, rand) + `
      gl_FragColor = mix(fog_color, multi_txtr, fogFactor ); //* addedLights;
    }  
`
  }

  function vertexShader() {
    return `
    uniform sampler2D bumpTexture;
    uniform float bumpScale;
    varying float vAmount;
    varying vec2 vUV;

    varying vec3 vecPos;
    varying vec3 vecNormal;
void main() 
{ 
	  vecPos = vec3(modelViewMatrix * vec4(position, 1.0));
  	vecNormal = normalize(normalMatrix * normal);

	vUV = uv;
	vec4 bumpData = texture2D( bumpTexture, uv );
	
	vAmount = bumpData.r; // assuming map is grayscale it doesn't matter if you use r, g, or b.
	
	// move the position along the normal
    vec3 newPosition = position + normal * bumpScale * vAmount;
	
	gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
}
  `
  }

  const {WebGLRenderer: WebGLRenderer$1, loadTexture, OctahedronBufferGeometry, SphereBufferGeometry, PlaneBufferGeometry, TextureLoader: TextureLoader$1, Mesh, DataTexture , ClampToEdgeWrapping, ShaderMaterial, RGBFormat} = THREE;

  class TerrainGenerator {
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
         console.log(_buffer);
          return _buffer;
         
          })()
    	}

    _heightmapTexture(){
      	return (async() => {
          	let _heightmapTexture;
            // only takes .png images, till current update
        		if (this.txtrLoad.substr(this.txtrLoad.length - 3) === 'png') {
  							console.log(this.txtrLoad.substr(this.txtrLoad.length - 3));
                  let img = new Image();
         					img.src = this.txtrLoad;
                  this.width = 1000 * 1;
                  this.height = 638 * 1;

      					_heightmapTexture = new TextureLoader$1().load(this.txtrLoad);
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
            let _uniforms= THREE.UniformsUtils.merge([ 
              THREE.UniformsLib["lights"],
              {
            lightIntensity: {type: 'f', value: 10},
            bumpTexture: { type: "t", value: await this._heightmapTexture() },
            bumpScale: { type: "f", value: this.heightmapScale },
            } ]);
            _uniforms.bumpTexture.value =  await this._heightmapTexture();	

            
            if (Array.isArray(this.dict) && !this.dict.length) {
                  this.dict = TerrainMappingDB[this.terrain];
            } else {
              		this.dict = meshMapping(this.dict);
            }
       
            for ( let i = 0; i < this.dict.length; i++ ) {
                _uniforms[this.dict[i]['texture']] = { type: "f", value: this.dict[i]['obj'] };
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
          });
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

  const {
    Scene,
    Object3D,
    PerspectiveCamera,
    WebGLRenderer: WebGLRenderer$2,
    CanvasTexture: CanvasTexture$1,
    Sprite: Sprite$2,
    SpriteMaterial: SpriteMaterial$2,
    loadTexture: loadTexture$1,
    ImageUtils,
    PointLight,
    SpriteAlignment,
    shadowMap,
    BufferGeometry,
    BufferGeometryUtils,
    CubeTextureLoader,
    MultiMaterial,
    Raycaster,
    Vector2,
    Vector3,
    vertices
  } = THREE; 
  //import {WoWZonesPosition, crtZonesSprites, textureUpdate, ZonesToSprites} from './PieSpritesPos';

  //GET JSON DATA
  const run = async () => {
    //return await getData()
    return await getJson();
  };

  run();

  // Tweakables
  const scaleFactor = 4; // HiDPI
  const height_OffsetFactor = 1;
  const width = window.innerWidth * scaleFactor;
  const height = (window.innerHeight * scaleFactor)/height_OffsetFactor;

  console.log(window.innerWidth,window.innerHeight );

  // Returns a color for a given datum and number of clusters.
  const camera = new PerspectiveCamera(20, width / height, 1, 10000);
  const renderer = new WebGLRenderer$2({ antialias: true, alpha: false });

  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);
  renderer.domElement.style.width = width / scaleFactor + 'px';
  renderer.domElement.style.height = height / scaleFactor + 'px';

  //ORBIT CAMERA
  let orbit_polarOffset = 0.05;
  let controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.minDistance = 700;
  controls.maxDistance = 1750;
  //limits don't seee below water level
  controls.maxPolarAngle = Math.PI/2 - orbit_polarOffset; 

  //FOG
  const scene = new Scene();

  {
      const near = 0;
      const far = 5900;
      const color = '#39479c'; //purple:#39479c  white: #EEEEEE  
      scene.fog = new THREE.Fog(color, near, far);
      scene.background = new THREE.Color(color);
    }

  //RENDERER INFO
  console.log(renderer.info);
  renderer.info.autoReset = false;
  renderer.info.reset();

  //GROUND
  const groundWidth = 10;
  const groundHeight = 10;
  var groundTexture = new THREE.TextureLoader().load(
    'https://raw.githubusercontent.com/stemkoski/stemkoski.github.com/master/Three.js/images/checkerboard.jpg'
  );
  groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
  groundTexture.repeat.set(groundWidth/4, groundHeight/4);
  var groundMaterial = new THREE.MeshPhongMaterial({
    map: groundTexture,
    side: THREE.DoubleSide
  });
  var groundGeometry = new THREE.PlaneGeometry(groundWidth, groundHeight);
  var ground = new THREE.Mesh(groundGeometry, groundMaterial);
  scene.add(ground);

  //MAELSTROM
  const maelstromWidth = 250;
  const maelstromHeight = 250;
  var maelstromTexture = new THREE.TextureLoader().load(
    'https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/Maelstrom/malestrom_whirlpool_final.png'
  );
  maelstromTexture.wrapS = maelstromTexture.wrapT = THREE.RepeatWrapping;
  //maelstromTexture.repeat.set(maelstrom/4, maelstrom/4);
  var maelstromMaterial = new THREE.MeshPhongMaterial({
    map: maelstromTexture,
    side: THREE.DoubleSide,
    transparent: true 
  });
  var maelstromGeometry = new THREE.PlaneGeometry(maelstromWidth, maelstromHeight);
  var maelstrom = new THREE.Mesh(maelstromGeometry, maelstromMaterial);
  scene.add(maelstrom);
  maelstrom.rotation.x = -Math.PI / 2;
  maelstrom.position.set(26.704965349490447, 28.5, 27.248127853895203 );

  // MAELSTROM POINTLIGHT
  var light = new THREE.PointLight( 0xff5d14, 20, 25 );
  light.position.set(26.704965349490447, 29.5, 27.248127853895203 );
  scene.add( light );

  var light_red = new THREE.PointLight( 0xff2845, 5, 15 );
  light_red.position.set(26.704965349490447, 31.5, 27.248127853895203 );
  scene.add( light_red );

  //SKYBOX
  let materialArray = [];
  let texture_ft = new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/Skybox/deepholmsky_nebula02.png');
  let texture_bk = new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/Skybox/deepholmsky_nebula02.png');
  let texture_up = new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/Skybox/deepholmsky_nebula02.png');
  let texture_dn = new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/Skybox/deepholmsky_nebula02.png');
  let texture_rt = new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/Skybox/deepholmsky_nebula02.png');
  let texture_lf = new THREE.TextureLoader().load( 'https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/Skybox/deepholmsky_nebula02.png');
       
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));

  for (let i = 0; i < 6; i++)
    materialArray[i].side = THREE.BackSide;
         
  let skyboxGeo = new THREE.BoxGeometry( 6000, 4000, 6000);
  let skybox = new THREE.Mesh( skyboxGeo, materialArray );
  scene.add( skybox );
    
  // SEA WATER
  const water = new THREE.PlaneBufferGeometry(10000, 10000, 1);
  const waterTopLayer = new THREE.Mesh(water, new THREE.MeshBasicMaterial({color:0x001d28, transparent: true, opacity: 0.8, side: THREE.DoubleSide}));
  scene.add(waterTopLayer);
  waterTopLayer.rotation.x = -Math.PI / 2;
  waterTopLayer.position.y = 27.2;
  //water.receiveShadow = true;
    
  const waterBottomLayer = new THREE.Mesh(water, new THREE.MeshBasicMaterial({color:0x001d28, transparent: true, opacity: 1, side: THREE.DoubleSide}));
  scene.add(waterBottomLayer);
  waterBottomLayer.rotation.x = -Math.PI / 2;
  waterBottomLayer.position.y = 20.2;

  //INIT GROUND PARAMETERS
  const epsilon = -0.5;
  ground.rotation.x -= Math.PI / 2;
  ground.position.z = groundWidth/2 + epsilon;
  ground.position.x = groundHeight/2 + epsilon;
  ground.position.y = epsilon;

  //THREE.AxesHelper
  var axesHelper = new THREE.AxesHelper( 100 );
  scene.add( axesHelper );
    
  //INIT CAMERA PARAMETERS
  camera.position.set(-23.117049553082612, 1276.836651189303, 787.4602136419953);

  // WORLD GENERATOR (heighmap)

  //** heighmap Textures to generated the world **//
  const heighmap = 'https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/Azeroth_heigthmao.png';
        
  //** heighmap Textures to generated the world using csv **//
  //const csvUrl = 'https://github.com/meperezcuello/dataviz-project-template-proposal/blob/master/azeroth_31_26_heighmap.png';
  const csvUrl$1 = 'https://gist.githubusercontent.com/meperezcuello/eb1f6c7dabe63443aa1dafa169e51d07/raw/1c7e70db4548e8ce7eaf9c9ba21391681462651c/mountain.csv';

  //** Original Texture Mapping(using a image)**/
  let wow = [
      {texture:'wowtest', repeatedness: 1, smoothing: [0.01, 0.01]}, //<-- this is bottom texture
    ];
    
  const TerrainMain = async() => {
    
    const terrain =  new TerrainGenerator(csvUrl$1,[],heighmap);
    terrain.loadMaterials(wow);
    return await terrain.mesh()
    
  };


  // ASYNC FUNC LOAD WORLD MAP AND DATA
  (async() => {
    
    // TRIGGER VARIBLES
    let lol = false;
    let acti = false;
    let triggerShared = false; //Flagged varible for annimation of camera 
    
    const mesh = await TerrainMain();
  	mesh.rotation.x = -Math.PI / 2;
    mesh.position.y = 0;
   	scene.add(mesh);
  	
  	//INTERSECT FUNCTION (obtains position and camera pos and roration on console)
    var raycaster = new Raycaster();
    var mouse = new Vector2();

    let targetList = [];
    targetList.push(mesh);
    
    function onDocumentMouseOver(event) {

      mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
      mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

      //var vector_2 = new Vector3( mouse.x, mouse.y, 1 ); 

      raycaster.setFromCamera( mouse, camera );

      // calculate objects intersecting the picking ray
      var intersects = raycaster.intersectObjects( targetList );
      console.log(intersects[0]);
      if ( intersects[0]){
        console.log(intersects[0].point);
        }
      console.log(camera.position);
      console.log(camera.rotation);
    }
    
    window.addEventListener( 'click', onDocumentMouseOver, false ); 

    // INIT TEXTURE LOADER (this triggers error)
    let yey = 0;
    //let texture_0=spriteTexture('Durotar', yey);
    
    // dat.GUI INTERFACE (UI TOP RIGHT)
  	const gui = new dat.GUI();
    const parameters = 
  	{
  		Days: 0
  	};
    
    let folder1 = gui.addFolder('Accumulative days');
    let cubeX = folder1.add( parameters, 'Days' ).min(0).max(364).step(1).listen();
    	folder1.open();
     	cubeX.onFinishChange(function(value) {
    	// Fires when a controller loses focus.
      lol = true;
    });
   

    //PRE LOAD ALL TEXTURE TO A DICT (i.e. to obtain faste reponse from GUI)
  	let obj = {};
  	async function firstFunction(iter){
   		for (let i = 0; i < iter; i++) {
     	obj[i] = spriteTexture('Null', i);
    	}
    	return obj;	
  	}  
      
  	//PRE-LOADER FUNC
  	function showLoading() {
    	document.getElementById('wrapper2').style.display = 'block';
  	}

  	function hideLoading() {
    	document.getElementById('wrapper2').style.display = 'none';
  	}

  	let data_heatmap = []; 
  	let WoW2018 = [];
   
    try {
      showLoading();
     	document.getElementById('wrapper-btn').style.display = 'none';
      document.getElementById('timestamp').style.display = 'none';
      document.getElementById('total_player').style.display = 'none';
      document.getElementById('gradient_bar').style.display = 'none';
      dat.GUI.toggleHide();
      await firstFunction(351);
      data_heatmap = await getJson(); 
     	WoW2018 =  await getWoW2018();
      
      document.getElementById("video1").src = 'https://www.youtube.com/embed/aDTlHXzA_cE?autoplay=1&loop=1';
      
    } catch (err) {
      console.error(err);
    } finally {
      hideLoading();
      document.getElementById('timestamp').style.display = 'block';
  		document.getElementById('total_player').style.display = 'block';
    	document.getElementById('wrapper-btn').style.display = 'block';
    }

    //PLAY BUTTON 
  	document.getElementById("wrapper-btn").onclick = function(){
  		document.getElementById('wrapper-btn').style.display = 'none';
  		acti = true;
    };
    
    //ANIMATION
    const animate = () => {
        maelstrom.rotation.z -= 0.005;

        if (lol == true){

          cubeX.onChange(function(value) {
            yey = value;   
          });

          document.getElementById("timestamp").innerHTML = WoW2018[parseInt(yey)]['timestamp'];
          document.getElementById("total_player").innerHTML = WoW2018[parseInt(yey)]['char'] + " Players";

          let pre_obj = obj[yey];  
          mesh.material.uniforms.wowtest.value  = pre_obj; 

          lol = false;
        }

        if (acti == true ){

            yey += 0.1;
            if (yey < 75) {

              camera.position.x -= 1;
              camera.position.z += 1;

            } else if (yey < 150 ) {

              if(triggerShared == false) {

                camera.position.set(1035.117049553082612, 1.79836651189303, 76.4602136419953);        
                triggerShared = true;

            }
                camera.position.x += 1;
                camera.position.y += 1;

            } else if (yey < 300 ) {

              if(triggerShared == true) {

                camera.position.set(-343.117049553082612, 250.49836651189303, 401.4602136419953); 
                triggerShared = false;

              }

              camera.position.y += 1;
              camera.position.z += 1;

            } else if (321 < yey ) {

              if(triggerShared == false) {

                camera.position.set(10.46149065128529, 4.7079728467133323e-14, 155.02824758128583);
                triggerShared = true;

              }

              camera.position.y += 1;
              camera.position.z += 1;

            }

            if (data_heatmap[parseInt(yey)][0][2] !== 0) {

              document.getElementById("timestamp").innerHTML = WoW2018[parseInt(yey)]['timestamp'];
              document.getElementById("total_player").innerHTML = WoW2018[parseInt(yey)]['char'] + " Players";
              mesh.material.uniforms.wowtest.value = obj[parseInt(yey)];

            }

            if (parseInt(yey) == 351) {

              yey = 0;
              acti = false;
              dat.GUI.toggleHide();
              document.getElementById('gradient_bar').style.display = 'block';
              document.getElementById("timestamp").style.bottom='3.75em';         	
              document.getElementById("total_player").style.bottom='2.5em';

            }
        } 

  		//texture_0.needsUpdate = true
    	requestAnimationFrame(animate);
   		controls.update();
  	  renderer.render(scene, camera);
      
  }; 
  animate();
    })();

  exports.camera = camera;

  return exports;

}({}, d3));
//# sourceMappingURL=bundle.js.map
