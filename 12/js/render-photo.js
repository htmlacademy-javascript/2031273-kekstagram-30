import { openPhoto, closePhoto } from './big-picture.js';

const picturesElement = document.querySelector('.pictures');
const pictureFragment =
  document.querySelector('#picture').content.firstElementChild;
const photoCloseElement = document.querySelector('.big-picture__cancel');

const removePictures = () =>
  document.querySelectorAll('.picture').forEach((element) => {
    element.remove();
  });

const renderPhoto = (photos) => {
  removePictures();

  photos.forEach((photo) => {
    const { comments, description, likes, url } = photo;
    const pictureElement = pictureFragment.cloneNode(true);
    const image = pictureElement.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    pictureElement.querySelector('.picture__likes').textContent =
      likes.toString();
    pictureElement.querySelector('.picture__comments').textContent =
      comments.length.toString();
    picturesElement.appendChild(pictureElement);
    pictureElement.addEventListener('click', () => openPhoto(photo));
  });
  photoCloseElement.addEventListener('click', closePhoto);
};

export { renderPhoto };
