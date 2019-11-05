export default function vertexShader() {
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