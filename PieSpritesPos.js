const {SpriteMaterial, Sprite, Texture } = THREE;

export let WoWZonesPosition = [
  {Name:'Durotar', x: -277.78955311352763, y: 24, z: 38.67265811035771},
  {Name:'Azshara',  x: -236.90184905507408, y: 24, z: -18.04310167920776 },
  {Name:'The Barrens', x: -324.3342548486014, y: 24, z: 42.40533222353124 },
  {Name:'The Barrens', x: -329.55571944397286, y: 24, z: 77.34899932128461},
  {Name:'Mulgore', x: -360.32731675044806, y: 24, z: 79.35111158362415},
  {Name:'Ashenvale', x: -343.5705344278353, y: 24, z: 6.189150329805115},
  {Name:'Felwood',  x: -350.66999035361914, y: 44, z: -64.92611869671175 },
  {Name:'Darkshore',  x: -385.31446419961196, y:24, z: -76.68302114072709},
  {Name:'Winterspring', x: -284.57397200584023, y: 54, z: -81.47558729825629},
  {Name:'Moonglade',  x: -321.13909336551916, y: 48, z: -97.74738874506933},
  {Name:'Teldrassil', x: -402.9094076156481, y: 78, z: -131.7407672265867},
  //{Name:'Mount Hyjal', x: -307.3388799075823, y: 94, z: -47.834504859241434 },
  {Name:'Stonetalon Mountains',  x: -399.0184945319111, y:30, z: 20.7443401431147},
  {Name:'Desolace', x: -399.5848529640793, y: 24, z: 64.0883236559438},
  {Name:'Dustwallow Marsh', x: -287.0818159107408, y: 24, z: 120.27639521544074},
  {Name:'Thousand Needles', x: -289.78409117229796, y: 30, z: 157.76589871394427},
  {Name:'Feralas',x: -410.16130255590474, y: 34, z: 122.75078982610768 },
  {Name:'Silithus', x: -388.9210583914758, y: 24, z: 180.21265329905296 },
  {Name:'UnGoro Crater',  x: -344.53177754459716, y: 24, z: 176.73378268582215},
  {Name:'Tanaris',  x: -300.38527277906513, y:30, z: 200.80222710443277},
  {Name:'Uldum', x: -364.4577852044935, y: 38, z: 234.19477795867547},
  
  {Name:'The Cape of Stranglethorn', x: 320.40466464778575, y: 24, z: 238.1933703285855},
  {Name:'Northern Stranglethorn', x: 328.4634388211147, y: 24, z: 204.69122514469524},
  {Name:'Blasted Lands', x: 391.47520078921195, y: 24, z: 191.7275989959382},
  {Name:'Swamp of Sorrows', x: 402.0329790005663, y: 24, z: 177.5969478535933},
  {Name:'Duskwood',x: 336.8137692532394, y: 30, z: 176.69531634588702},
  {Name:'Westfall', x: 295.8557533417584, y: 24, z: 178.16070679515727},
  {Name:'Redridge Mountains',  x: 386.95887400109643, y: 30, z: 157.47511444858765 },
  {Name:'Elwynn Forest',  x: 333.4699859916333, y: 24, z: 164.0337620546048},
  {Name:'Burning Steppes', x: 363.3163146357488, y: 34, z: 136.76694774590567},
  {Name:'Searing Gorge',  x: 355.61022578427736, y: 34, z: 114.0631759475665},
  {Name:'Badlands', x: 391.7454864528726, y: 34, z: 111.45380501148495},
  {Name:'Loch Modan', x: 395.21550049260804, y: 34, z: 82.43017205334165 },
  {Name:'Dun Morogh',  x: 337.29679068468414, y: 44, z: 87.79113862904887},
  {Name:'Twilight Highlands',  x: 432.5227454002263, y: 28, z: 60.76836375472595 },
  {Name:'Wetlands',  x: 354.934918415537, y: 24, z: 43.181241103898316},

  {Name:'Arathi Highlands', x: 379.83639451845283, y: 24, z: 13.520356001944405},
  {Name:'The Hinterlands',  x: 391.5695800872891, y: 34, z: -12.908190028917076},

  {Name:'Hillsbrad Foothills', x: 345.7407475978628, y: 24, z: -1.890201373109902},
  {Name:'Gilneas', x: 296.52793626675634, y: 24, z: 17.84908060196977},
  {Name:'Silverpine Forest', x: 308.03288950112943, y: 24, z: -18.1261526897862},
  {Name:'Tirisfal Glades', x: 322.59503720083575, y: 24, z: -51.44381451717823 },
  {Name:'Western Plaguelands', x: 357.5636429226708, y: 30, z: -42.876969500513084},
  {Name:'Eastern Plaguelands', x: 405.8146279931575, y: 34, z: -57.98487867077536},
  
  
];


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
