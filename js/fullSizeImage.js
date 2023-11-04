import { renderThumbnails } from "./thumbnailRenderer.js";

function renderGallery(pictures) {
  const container = document.querySelector('.pictures');

  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('.picture');

    if (!thumbnail) {
      return;
    }

    evt.preventDefault();

    const thumbnailId = thumbnail.dataset.id;
    const pictureData = pictures.find(({ id }) => id === thumbnailId);

    console.log(pictureData);
  });

  renderThumbnails(pictures, container);
}

export { renderGallery };
