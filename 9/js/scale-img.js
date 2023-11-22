import { getElement } from './util';

const scaleSmallerButton = getElement('.scale__control--smaller');
const scaleBiggerButton = getElement('.scale__control--bigger');
const scaleValueInput = getElement('.scale__control--value');
const img = getElement('.img-upload__preview img');

const MIN_VALUE = 25;
const MAX_VALUE = 100;
const STEP = 25;

const getValue = function() {
  return parseInt(scaleValueInput.value, 10);
};

const changeImage = function(value) {
  scaleValueInput.value = `${value }%`;
  img.style.transform = `scale(${ value / 100 })`;
};

const onScaleSmallerButton = function() {
  const value = getValue();
  let nextValue = value - STEP;
  nextValue = nextValue < MIN_VALUE ? MIN_VALUE : nextValue;
  changeImage(nextValue);
  scaleValueInput.value = `${nextValue }%`;
};

const onScaleBiggerButton = function() {
  const value = getValue();
  let nextValue = value + STEP;
  nextValue = nextValue > MAX_VALUE ? MAX_VALUE : nextValue;
  changeImage(nextValue);
  scaleValueInput.value = `${nextValue }%`;
};

scaleSmallerButton.addEventListener('click', onScaleSmallerButton);
scaleBiggerButton.addEventListener('click', onScaleBiggerButton);

export { changeImage };