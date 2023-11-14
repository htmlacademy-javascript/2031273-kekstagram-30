import { getElement } from './util.js';
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { EFFECT_OPTION_MAP } from './effects.js';

const sliderElement = getElement('.effect-level__slider');
const form = getElement('.img-upload__form');
const image = getElement('.img-upload__preview img');
const effectsWrapper = getElement('.effects__list');
const sliderFieldset = getElement('.img-upload__effect-level');
const CHANGE_EVENT = new Event('change');

const slider = noUiSlider.create(sliderElement, EFFECT_OPTION_MAP.none.slider);

sliderFieldset.hidden = true;

effectsWrapper.addEventListener('change', () => {
  const effect = form.effect.value;

  sliderFieldset.hidden = effect === 'none';

  slider.updateOptions(EFFECT_OPTION_MAP[effect].slider, false);
});

slider.on('update', () => {
  const value = slider.get();
  form['effect-level'].value = String(value);

  const currentEffect = form.effect.value;

  if (currentEffect === 'none') {
    return image.style.removeProperty('filter');
  }

  const filter = EFFECT_OPTION_MAP[currentEffect].filter;
  image.style.filter = filter(value);
});

export const resetEffect = () => {
  form.effect.value = 'none';
  effectsWrapper.dispatchEvent(CHANGE_EVENT);
};

const closeFormButton = getElement('.img-upload__cancel');
closeFormButton.addEventListener('click', resetEffect);

const uploadInput = getElement('.img-upload__input');
uploadInput.addEventListener('change', resetEffect);

const fileInput = getElement('.img-upload__input');
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    image.src = e.target.result;
    resetEffect();
  };

  reader.readAsDataURL(file);
});
