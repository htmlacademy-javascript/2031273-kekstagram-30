import { renderGallery } from './gallery.js';
import { generatePhotos } from './data.js';

const photosArray = generatePhotos();
renderGallery(photosArray);
