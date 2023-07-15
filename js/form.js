import { isEscapeKey } from './util.js';
import { resetScale } from './scale.js';
import {resetEffects} from './effects.js';

const HASHTAG_COUNT_MAX = 5;
const VALID_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
const ErrorText = {
  INVALID_COUNT: `Максимум ${HASHTAG_COUNT_MAX} хэштегов`,
  NOT_UNIQUE: 'Хэштеги должны быть уникальные',
  INVALID_PATTERN: 'Неправильный хэштег',
};

const form = document.querySelector('.img-upload__form');
const uploadFile = form.querySelector('#upload-file');
const overlay = form.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const commentField = form.querySelector('.text__description');
const hashtagField = form.querySelector('.text__hashtags');
// const submitButton = form.querySelector('.img-upload__submit');
const cancelButton = form.querySelector('.img-upload__cancel');


const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',

}, false);


//проверка есть ли поле хэштегов или комментариев в фокусе
const isFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt) && !isFocused()) {
    evt.preventDefault();
    hideModal();
  }
};

const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const hideModal = () => {
  form.reset();
  resetScale();
  resetEffects();
  pristine.reset();
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const normalizeTags = (tagString) => tagString
  .trim()
  .split(' ')
  .filter((tag) => Boolean(tag.length));

const hasValidHashtags = (value) => normalizeTags(value).every((tag) => VALID_HASHTAG.test(tag));
const hasValidCount = (value) => normalizeTags(value).length <= HASHTAG_COUNT_MAX;

const hasUniqueHashtags = (value) => {
  const lowerCaseTags = normalizeTags(value).map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

pristine.addValidator(
  hashtagField,
  hasValidHashtags,
  ErrorText.INVALID_PATTERN,
  2,
  true
);
pristine.addValidator(
  hashtagField,
  hasUniqueHashtags,
  ErrorText.NOT_UNIQUE,
  1,
  true
);
pristine.addValidator(
  hashtagField,
  hasValidCount,
  ErrorText.INVALID_COUNT,
  3,
  true
);

const onCancelButtonClick = () => hideModal();
const onInputChange = () => showModal();

uploadFile.addEventListener('change', onInputChange);
cancelButton.addEventListener('click', onCancelButtonClick);
form.addEventListener('submit', onFormSubmit);
