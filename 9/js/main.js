import { renderGallery } from './gallery.js';
import { generatePhotos } from './data.js';
import './form.js';
import './validate-form.js';
import './scale-img.js';
import './slider.js';

const photosArray = generatePhotos();
renderGallery(photosArray);
