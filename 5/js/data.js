import { createNumericArray } from './util.js';

const COMMENTS_SENTENCES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.','Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const COMMENTER_NAMES = ['Александр', 'Екатерина', 'Михаил', 'Анна', 'Дмитрий', 'София'];

export function generatePhotos() {
  const photos = [];
  const ids = createNumericArray(25);
  const urls = createNumericArray(25).map((index) => `photos/${index}.jpg`);

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
      const message = `${COMMENTS_SENTENCES[Math.floor(Math.random() * COMMENTS_SENTENCES.length)]} ${COMMENTS_SENTENCES[Math.floor(Math.random() * COMMENTS_SENTENCES.length)]}`;
      const name = COMMENTER_NAMES[Math.floor(Math.random() * COMMENTER_NAMES.length)];
      const comment = { id: commentId, avatar: `img/avatar-${avatarNumber}.svg`, message, name };
      comments.push(comment);
    }

    const photo = { id, url, description, likes, comments };
    photos.push(photo);
  }

  return photos;
}
