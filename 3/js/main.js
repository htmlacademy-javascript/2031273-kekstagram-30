function generatePhotos() {
  const photos = [];

  // Создаем массив идентификаторов для фотографий
  const ids = Array.from({length: 25}, (_, index) => index + 1);

  // Создаем массив уникальных адресов картинок
  const urls = Array.from({length: 25}, (_, index) => `photos/${index + 1}.jpg`);

  // Создаем набор предложений для генерации комментариев
  const commentsSentences = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  // Создаем набор имен для комментаторов
  const commenterNames = ['Александр', 'Екатерина', 'Михаил', 'Анна', 'Дмитрий', 'София'];

  for (let i = 0; i < 25; i++) {
    const id = ids[i];
    const url = urls[i];
    const description = `Описание фотографии ${id}`;
    const likes = Math.floor(Math.random() * (200 - 15 + 1) + 15);

    const commentsCount = Math.floor(Math.random() * 31);
    const comments = [];

    for (let j = 0; j < commentsCount; j++) {
      const commentId = Math.floor(Math.random() * 1000) + 1;
      const avatarNumber = Math.floor(Math.random() * 6) + 1;
      const message = `${commentsSentences[Math.floor(Math.random() * commentsSentences.length)]} ${commentsSentences[Math.floor(Math.random() * commentsSentences.length)]}`;
      const name = commenterNames[Math.floor(Math.random() * commenterNames.length)];

      const comment = { id: commentId, avatar: `img/avatar-${avatarNumber}.svg`, message, name };
      comments.push(comment);
    }

    const photo = { id, url, description, likes, comments };
    photos.push(photo);
  }

  return photos;
}

/* eslint-disable no-console */
// Пример использования функции
const photosArray = generatePhotos();
console.log(photosArray);
