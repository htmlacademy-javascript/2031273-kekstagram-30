import './form.js';
import './photo.js';
import { renderPhoto } from './render-photo.js';
import { getData } from './api.js';
import { showErrorMessage } from './util.js';
import { showFilters } from './filter.js';

const showAlertGetData = () => {
  const errorFragment =
    document.querySelector('#data-error').content.firstElementChild;

  const errorElement = errorFragment.cloneNode(true);
  setInterval(() => {
    errorElement.remove();
  }, 5000);
};

try {
  const images = await getData();
  renderPhoto(images);
  showFilters(images);
} catch (err) {
  showErrorMessage();
  showAlertGetData();
}
