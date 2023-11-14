export const EFFECT_OPTION_MAP = {
  none: {
    slider: createSliderData(0, 100),
  },
  chrome: {
    slider: createSliderData(0, 1, 0.1),
    filter: (value) => `grayscale(${value})`,
  },

  sepia: {
    slider: createSliderData(0, 1, 0.1),
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

function createSliderData(min = 0, max = 100, step = 1, start = max) {
  return {
    range: {
      min,
      max,
    },
    start,
    step,
    connect: 'lower',
  };
}
