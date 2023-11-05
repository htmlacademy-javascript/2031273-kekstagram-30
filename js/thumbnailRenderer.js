const createThumbnail = (photo) => {
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
};

const renderThumbnails = (photos, container) => {
  photos.forEach((photo) => {
    const thumbnail = createThumbnail(photo);
    thumbnail.querySelector('.picture').dataset.id = photo.id;
    container.appendChild(thumbnail);
  });
};

export { renderThumbnails };
