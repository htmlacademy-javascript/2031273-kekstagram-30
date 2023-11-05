import { renderThumbnails } from "./thumbnailRenderer.js";
import { showPicture } from "./picture.js";

function renderGallery(pictures) {
  const container = document.querySelector('.pictures');
  renderThumbnails(pictures, container);
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('.picture');

    if (!thumbnail) {
      return;
    }

    evt.preventDefault();

    const thumbnailId = Number(thumbnail.dataset.id);
    const pictureData = pictures.find(({ id }) => id === thumbnailId);
    showPicture(pictureData);
  });
}

export { renderGallery };
