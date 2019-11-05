import { json } from 'd3';

const jsonUrl = 'https://gist.githubusercontent.com/meperezcuello/45dbb3c65d5834bfefc14f95cd253e0d/raw/c4970b83c9130c2d3a8a5a420cfffdd261582e9b/data.json'

export const getJson = async () => {
  const data = await json(jsonUrl);
  return data;
};

