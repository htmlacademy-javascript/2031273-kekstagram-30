import { getElement } from './util.js';

const form = getElement('.img-upload__form');
const textHashtags = getElement('.text__hashtags');
const textDescriptions = getElement('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
});

pristine.addValidator(
  textDescriptions,
  (value) => value.length < 140,
  'Длина комментария больше 140 символов'
);

pristine.addValidator(
  textHashtags,
  (value) => {
    const hashtags = value.trim().split(' ');
    return hashtags.length - 1 < 5;
  },
  'превышено количество хэш-тегов'
);

pristine.addValidator(
  textHashtags,
  (value) => {
    const hashtags = value.trim().split(' ');
    const regexPattern = /^#(?=.*[^0-9])[a-zа-яё0-9]{1,29}$/i;

    if (hashtags[0] === '') {
      return true;
    }

    for (const element of hashtags) {
      if (!regexPattern.test(element)) {
        return false;
      }
    }

    return true;
  },
  'введён невалидный хэш-тег'
);

pristine.addValidator(
  form.querySelector('.text__hashtags'),
  (value) => {
    const hashtags = value.trim().toLocaleLowerCase().split(' ');
    return !(new Set(hashtags).size !== hashtags.length);
  },
  'хэш-теги повторяются'
);

form.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});