import { createNumericArray } from './util.js';

const COMMENTS_SENTENCES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.','Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'На фотографии мы видим красивое небо #instagood #smile',
  'Фотография была сделана ночью #phototherapy #beautiful #nature',
  'На заднем плане находится сад с деревьями #nature #beautiful #instagood #fun',
  'На переднем плане играющие котята #friends #phototherapy',
  'В центре фотографии наш дом',
  'Встречайте рассвет со мной! #dawn #motivation',
  'Новые приключения ждут меня! #travel #adventure',
  'Счастье - это магия в маленьких моментах! #happiness #moments',
  'Вдохновение захватывает меня каждый день! #inspiration #quotes',
  'Никогда не переставай мечтать! #dreams #goals',
  'Любовь - самое прекрасное чувство на свете! #love #family',
  'Находите красоту в мире каждый день! #beauty #nature',
  'Ощущение свободы в каждой атомосфере! #freedom #nature',
  'Океан - мое лекарство от всех забот! #ocean #relax',
  'Улыбка распускается, как цветок весной! #smile #instagood',
  'Фотография создаёт весёлое настроение',
  'Автор фотографии показывает, что всё не вечно',
  'У человека на фото счастливый вид #picoftheday #nature #happy',
  'На фотографии мой младший брат. Он без ума от животных. #happy #love',
  'На детской площадке можно увидеть забавных детей. За ними простые футбольные ворота. ' +
  'Трава ярко-зеленая, и деревья на заднем плане тоже зеленые.',
  'На фотографии вы можете видеть мою сестру. Ее зовут Ирина, и она хорошая спортсменка. ' +
  'Всякий раз, когда у нее есть свободное время, она ходит на стадион заниматься спортом. #friends'
];

const COMMENTER_NAMES = ['Александр', 'Екатерина', 'Михаил', 'Анна', 'Дмитрий', 'София'];

export function generatePhotos() {
  const photos = [];
  const ids = createNumericArray(25);
  const urls = createNumericArray(25).map((index) => `photos/${index}.jpg`);

  for (let i = 0; i < 25; i++) {
    const id = ids[i];
    const url = urls[i];
    const descriptionIndex = Math.floor(Math.random() * DESCRIPTIONS.length);
    const description = DESCRIPTIONS[descriptionIndex];
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
