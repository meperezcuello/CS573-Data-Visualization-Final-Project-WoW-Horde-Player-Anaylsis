const {
  Scene,
  Object3D,
  PerspectiveCamera,
  WebGLRenderer,
  CanvasTexture,
  Sprite,
  SpriteMaterial,
  loadTexture,
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
} = THREE 

import {TerrainGenerator} from './TerrainGenerator.js';
import { getData, getWoW2018 } from './getData';
import { getJson } from './getJson';
import { Enum } from './Texture.js';
import fragmentShader from './fragmentShader';
import vertexShader from './vertexShader';
import {PieSprite, spriteTexture} from './PieSprite';
//import {WoWZonesPosition, crtZonesSprites, textureUpdate, ZonesToSprites} from './PieSpritesPos';

//GET JSON DATA
const run = async () => {
  //return await getData()
  return await getJson();
};

run();

// Tweakables
const scaleFactor = 4; // HiDPI
const height_OffsetFactor = 1
const width = window.innerWidth * scaleFactor;
const height = (window.innerHeight * scaleFactor)/height_OffsetFactor;
const rotationSensitivity = 0.04;
const rotationIncrement = -0.2;

console.log(window.innerWidth,window.innerHeight )

// Returns a color for a given datum and number of clusters.
export const camera = new PerspectiveCamera(20, width / height, 1, 10000);
const renderer = new WebGLRenderer({ antialias: true, alpha: false });

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
const heighmap = 'https://raw.githubusercontent.com/meperezcuello/dataviz-project-template-proposal/master/Azeroth_heigthmao.png'
      
//** heighmap Textures to generated the world using csv **//
//const csvUrl = 'https://github.com/meperezcuello/dataviz-project-template-proposal/blob/master/azeroth_31_26_heighmap.png';
const csvUrl = 'https://gist.githubusercontent.com/meperezcuello/eb1f6c7dabe63443aa1dafa169e51d07/raw/1c7e70db4548e8ce7eaf9c9ba21391681462651c/mountain.csv'

//** Custom Texture Mapping **//
let dict = [
    {texture:'oceanTexture', repeatedness: 5, smoothing: [0.01, 0.50]}, //<-- this is bottom texture
    {texture:'sandyTexture', repeatedness: 20, smoothing: [0.50, 0.55]},
    {texture:'snowyTexture', repeatedness: 20, smoothing: [0.55, 0.65]},
    {texture:'snowyTexture', repeatedness: 10, smoothing: [0.65, 0.75]},
    {texture:'snowyTexture', repeatedness: 20, smoothing: [0.75, 0.99]}, // <-- this is top texture
  ];

//** Original Texture Mapping(using a image)**/
let wow = [
    {texture:'wowtest', repeatedness: 1, smoothing: [0.01, 0.01]}, //<-- this is bottom texture
  ];
  
const TerrainMain = async() => {
  
  const terrain =  new TerrainGenerator(csvUrl,[],heighmap)
  terrain.loadMaterials(wow);
  return await terrain.mesh()
  
}


// ASYNC FUNC LOAD WORLD MAP AND DATA
(async() => {
  
  // TRIGGER VARIBLES
  let lol = false;
  let acti = false
  let triggerShared = false //Flagged varible for annimation of camera 
  
  const mesh = await TerrainMain();
	mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = 0;
 	scene.add(mesh);

    let controls2 = new function() {
        this.rotationSpeed = 1;
        this.bouncingSpeed = 0.03;
     }
	
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
    console.log(intersects[0])
    if ( intersects[0]){
      console.log(intersects[0].point)
      }
    console.log(camera.position)
    console.log(camera.rotation)
  }
  
  window.addEventListener( 'click', onDocumentMouseOver, false ); 

  // INIT TEXTURE LOADER (this triggers error)
  let yey = 0
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

	let data_heatmap = [] 
	let WoW2018 = []
 
  try {
    showLoading()
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
  }
  
  //ANIMATION
  const animate = () => {
      maelstrom.rotation.z -= 0.005

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

              camera.position.set(1035.117049553082612, 1.79836651189303, 76.4602136419953)        
              triggerShared = true;

          }
              camera.position.x += 1;
              camera.position.y += 1;

          } else if (yey < 300 ) {

            if(triggerShared == true) {

              camera.position.set(-343.117049553082612, 250.49836651189303, 401.4602136419953) 
              triggerShared = false;

            }

            camera.position.y += 1;
            camera.position.z += 1;

          } else if (321 < yey ) {

            if(triggerShared == false) {

              camera.position.set(10.46149065128529, 4.7079728467133323e-14, 155.02824758128583)
              triggerShared = true;

            }

            camera.position.y += 1;
            camera.position.z += 1;

          }

          if (data_heatmap[parseInt(yey)][0][2] !== 0) {

            document.getElementById("timestamp").innerHTML = WoW2018[parseInt(yey)]['timestamp'];
            document.getElementById("total_player").innerHTML = WoW2018[parseInt(yey)]['char'] + " Players";
            mesh.material.uniforms.wowtest.value = obj[parseInt(yey)]

          }

          if (parseInt(yey) == 351) {

            yey = 0
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
  })()