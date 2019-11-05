import { csv } from 'd3';

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

export const getData = async(time, zone) => {
  const data  = await csv(csvUrl).then(function(data) {
  data.forEach(function(d) {
    d.char = +d.char;
    d.guild = +d.guild
    d.level = +d.level
    d.timestamp = +d.timestamp 
  });
		return data
});
  
	let data_filtered = _FilterZone(_FilterCond(data, time), zone)
  
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

export const getWoW2018 = async() => {
	const data = await csv(wow_2018_analytics)
  return data;
};
  