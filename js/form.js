import { getElement } from './util';
import { pristine } from './validate-form.js';
import { changeImage } from './scale-img';

const imageInput = getElement('.img-upload__input');
const imageUpload = getElement('.img-upload__overlay');
const closeImageButton = getElement('.img-upload__cancel');
const scaleValueInput = getElement('.scale__control--value');

const toggleClasses = (isOpen = true) => {
  imageUpload.classList.toggle('hidden', !isOpen);
  document.body.classList.toggle('modal-open', isOpen);
};

const onOpenImageUpload = () => {
  toggleClasses();
  document.addEventListener('keydown', onDocumentKeydown);
  changeImage(100);
  scaleValueInput.value = '100%';
};

const onCloseImageUpload = () => {
  imageInput.value = '';
  toggleClasses(false);
  document.removeEventListener('keydown', onDocumentKeydown);
  pristine.reset();
};

function onDocumentKeydown(evt) {
  const isForm =
    document.activeElement === getElement('.text__hashtags') ||
    document.activeElement === getElement('.text__description');

  if (evt.key === 'Escape' && !isForm) {
    evt.preventDefault();
    onCloseImageUpload();
  }
}

imageInput.addEventListener('change', onOpenImageUpload);
closeImageButton.addEventListener('click', onCloseImageUpload);

export { onOpenImageUpload, onCloseImageUpload };
