import { generatePhotos } from './data.js';
import('./thumbnailRenderer.js').then((module) => {
  const { renderThumbnails } = module;
  renderThumbnails();
});

/* eslint-disable no-console */
const photosArray = generatePhotos();
console.log(photosArray);
