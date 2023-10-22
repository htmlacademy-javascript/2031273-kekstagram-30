export function createNumericArray(length) {
  return Array.from({ length }, (_, index) => index + 1);
}
