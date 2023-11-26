const createSliderData = (min = 0, max = 100, step = 1, start = max) => ({
  range: {
    min,
    max,
  },
  start,
  step,
  connect: 'lower',
  format: {
    to: (value) => {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: (value) => parseFloat(value),
  },
});

const FROM_ZERO_TO_ONE = createSliderData(0, 1, 0.1);
const FROM_ZERO_TO_HUNDRED = createSliderData(0, 100);

export const EFFECT_OPTION_MAP = {
  none: {
    slider: FROM_ZERO_TO_HUNDRED,
  },
  chrome: {
    slider: FROM_ZERO_TO_ONE,
    filter: (value) => `grayscale(${value})`,
  },

  sepia: {
    slider: FROM_ZERO_TO_ONE,
    filter: (value) => `sepia(${value})`,
  },

  marvin: {
    slider: createSliderData(0, 100, 1),
    filter: (value) => `invert(${value}%)`,
  },

  phobos: {
    slider: createSliderData(0, 3, 0.1),
    filter: (value) => `blur(${value}px)`,
  },

  heat: {
    slider: createSliderData(0, 3, 0.1),
    filter: (value) => `brightness(${value})`,
  },
};
