import { generatePhotos } from './data.js';

function createThumbnail(photo) {
  const template = document.querySelector('#picture');
  const thumbnail = template.content.cloneNode(true);

  const img = thumbnail.querySelector('.picture__img');
  img.src = photo.url;
  img.alt = photo.description;

  const likesCount = thumbnail.querySelector('.picture__likes');
  likesCount.textContent = photo.likes;

  const commentsCount = thumbnail.querySelector('.picture__comments');
  commentsCount.textContent = photo.comments.length;

  return thumbnail;
}

function renderThumbnails() {
  const photos = generatePhotos();

  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const thumbnail = createThumbnail(photo);
    fragment.appendChild(thumbnail);
  });

  const picturesContainer = document.querySelector('.pictures');
  picturesContainer.appendChild(fragment);
}

renderThumbnails();
