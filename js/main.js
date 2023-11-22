import './form.js';
import { renderPhoto } from './render-photo.js';
import { getData } from './api.js';
import { showErrorMessage } from './util.js';

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
} catch (err) {
  showErrorMessage();
  showAlertGetData();
}
