const _Sampler2DLoader = (inputs) => {
  let _arrString = ` `;
 	 const unique = [...new Set(inputs.map(item => item.texture))]; //create one varible per unique texture; if two record repat one var is created.
    for(let i = 0; i < unique.length; i++) {
				_arrString +=  `uniform sampler2D ` + String(inputs[i]['texture']) + ";"; 
    }
  console.log(_arrString)
	return _arrString
}  

const _txtr2DLoader = (inputs) => {
  let _arrString = ` `;
    for(let i = 0; i < inputs.length; i++) {
				_arrString +=  ` vec4 _txtr`+ String(i) + ` = texture2D( ` + String(inputs[i]['texture']) + `, vUV * ` + String( (inputs[i]['repeatedness']).toFixed(1) ) + " );";
    }
	return _arrString
}  

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
}  

export default function fragmentShader(dict, rand) {
  console.log(rand)
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