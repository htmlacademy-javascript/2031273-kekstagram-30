const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValueInput = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');

const MIN_VALUE = 25;
const MAX_VALUE = 100;
const STEP = 25;

const getValue = () => parseInt(scaleValueInput.value, 10);

export const changeImage = (value) => {
  scaleValueInput.setAttribute('value', `${value}%`);
  image.style.transform = `scale(${value / 100})`;
};

const onScaleSmallerButton = () => {
  const value = getValue();
  let nextValue = value - STEP;
  nextValue = nextValue < MIN_VALUE ? MIN_VALUE : nextValue;

  changeImage(nextValue);
};

const onScaleBiggerButton = () => {
  const value = getValue();

  let nextValue = value + STEP;
  nextValue = nextValue > MAX_VALUE ? MAX_VALUE : nextValue;

  changeImage(nextValue);
};

scaleSmallerButton.addEventListener('click', onScaleSmallerButton);
scaleBiggerButton.addEventListener('click', onScaleBiggerButton);
