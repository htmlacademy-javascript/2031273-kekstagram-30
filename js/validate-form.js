import Pristine from 'pristinejs';

const form = document.querySelector('.img-upload__form');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'p',
});

const isDescriptionValid = (value) => value.length < 140;
const isHashtagsCountValid = (value) => {
  const hashtags = value
    .trim()
    .split(' ')
    .filter((el) => el !== '');
  return hashtags.length - 1 < 5;
};
const isHashtagFormatValid = (value) => {
  const hashtags = value
    .trim()
    .split(' ')
    .filter((el) => el !== '');

  const regexPattern = /^#(?=.*[^0-9])[a-zа-яё0-9]{1,19}$/i;

  if (hashtags[0] === '') {
    return true;
  }

  for (const element of hashtags) {
    if (!regexPattern.test(element)) {
      return false;
    }
  }

  return true;
};
const areHashtagsUnique = (value) => {
  const hashtags = value
    .trim()
    .toLocaleLowerCase()
    .split(' ')
    .filter((el) => el !== '');
  return !(new Set(hashtags).size !== hashtags.length);
};

pristine.addValidator(
  textDescription,
  isDescriptionValid,
  'Длина комментария больше 140 символов'
);

pristine.addValidator(
  textHashtags,
  isHashtagsCountValid,
  'превышено количество хэш-тегов'
);

pristine.addValidator(
  textHashtags,
  isHashtagFormatValid,
  'введён невалидный хэш-тег'
);

pristine.addValidator(
  form.querySelector('.text__hashtags'),
  areHashtagsUnique,
  'хэш-теги повторяются'
);

export const isValid = () => pristine.validate();
export const resetPristine = () => pristine.reset();
