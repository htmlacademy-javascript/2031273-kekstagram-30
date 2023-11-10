import { renderGallery } from './gallery.js';
import { generatePhotos } from './data.js';
import './form.js';
import './validate-form.js';

const photosArray = generatePhotos();
renderGallery(photosArray);
