import { renderGallery } from './fullSizeImage.js';
import { generatePhotos } from './data.js';

const photosArray = generatePhotos();
renderGallery(photosArray);
