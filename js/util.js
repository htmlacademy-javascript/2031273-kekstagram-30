export function createNumericArray(length) {
  return Array.from({ length }, (_, index) => index + 1);
}

const getElement = (selector, target = document) => {
  const element = target.querySelector(selector);
  if (!element) {
    throw new Error(
      `Element with selector '${selector}' not found in target ${target}`
    );
  }
  return element;
};

export {
  getElement,
};
