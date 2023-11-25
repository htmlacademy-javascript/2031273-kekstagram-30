import { renderPhoto } from './render-photo.js';
import { debounce } from './util.js';

const RERENDER_DELAY = 500;

const filterWrapper = document.querySelector('.img-filters');
const filterButtons = document.querySelectorAll('.img-filters__button');

let currentFilter = 'default';
let initialImages = [];

const getUniqueRandomPhotos = (photos, count) => {
  const shuffled = photos.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const getFilters = (images) => ({
  default: images,
  random: getUniqueRandomPhotos(images, 10),
  discussed: [...images].sort((a, b) => b.comments.length - a.comments.length),
});

const isButtonNotActive = (target) =>
  !target.classList.contains('img-filters__button--active');

const toggleActiveButton = (target) => {
  document
    .querySelector('.img-filters__button--active')
    .classList.remove('img-filters__button--active');
  target.classList.add('img-filters__button--active');
};

const resetToDefault = () => {
  currentFilter = 'default';
  renderPhoto(initialImages);
  toggleActiveButton(document.getElementById('filter-default'));
};

const showDefaultPhotos = () => {
  currentFilter = 'default';
  renderPhoto(initialImages);
  toggleActiveButton(document.getElementById('filter-default'));
};

export const showFilters = (images) => {
  filterWrapper.classList.remove('img-filters--inactive');
  initialImages = images.slice();

  const filters = getFilters(images);
  const debounceRenderPhoto = debounce(renderPhoto, RERENDER_DELAY);

  filterButtons.forEach((filterButton) => {
    filterButton.addEventListener('click', (evt) => {
      const filterName = evt.target.id.replace('filter-', '');
      if (isButtonNotActive(evt.target)) {
        toggleActiveButton(evt.target);
        currentFilter = filterName;
        if (currentFilter === 'random') {
          renderPhoto(getUniqueRandomPhotos(images, 10));
        } else if (currentFilter === 'default') {
          showDefaultPhotos();
        } else {
          debounceRenderPhoto(filters[currentFilter]);
        }
      }
    });
  });

  document.getElementById('filter-default').addEventListener('click', resetToDefault);
};
