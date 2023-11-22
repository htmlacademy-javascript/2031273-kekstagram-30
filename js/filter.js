import { renderPhoto } from './render-photo.js';
import { debounce } from './util.js';

const RERENDER_DELAY = 500;

const filterWrapper = document.querySelector('.img-filters');
const filterButtons = document.querySelectorAll('.img-filters__button');

const getFilters = (images) => ({
  default: images,
  random: images.slice(0, 10),
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

let currentFilter = 'default';

export const showFilters = (images) => {
  filterWrapper.classList.remove('img-filters--inactive');
  const filters = getFilters(images);
  const debounceRenderPhoto = debounce(renderPhoto, RERENDER_DELAY);

  const handleClick = (evt) => {
    const filterName = evt.target.id.replace('filter-', '');

    if (isButtonNotActive(evt.target)) {
      toggleActiveButton(evt.target);
      currentFilter = filterName;
      if (filterName === 'random') {
        const randomPhotos = images.sort(() => 0.5 - Math.random()).slice(0, 10);
        renderPhoto(randomPhotos);
      } else {
        debounceRenderPhoto(filters[currentFilter]);
      }
    }
  };

  filterButtons.forEach((filterButton) => {
    filterButton.removeEventListener('click', handleClick);
    filterButton.addEventListener('click', handleClick);
  });
};
