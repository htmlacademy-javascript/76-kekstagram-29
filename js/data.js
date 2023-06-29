import { generateCommentId } from './util.js';
import { getRandomArrayElement } from './util.js';
import { getRandomInteger } from './util.js';

const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 30;
const NAMES = [
  'Александр',
  'Алексей',
  'Владимир',
  'Вячеслав',
  'Геннадий',
  'Дмитрий',
  'Иван',
  'Константин',
  'Леонид',
  'Михаил',
  'Николай',
  'Анастасия',
  'Валентина',
  'Диана',
  'Елена',
  'Жанна',
  'Ксения',
  'Лана',
  'Марина',
  'Ольга',
  'Светлана',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

//выбираем сообщение из 1 или 2 строк, соединяем если строки 2
const createMessage = () => Array.from(
  { length: getRandomInteger(1, 2) },
  () => getRandomArrayElement(MESSAGES),
).join(' ');

//создаём комментарий
const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

//получение фоточек
const photoDescription = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: 'Классная фотография!',
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENT_COUNT) },
    createComment,
  ),

});

const getPictures = () => Array.from(
  { length: PICTURE_COUNT },
  (_, pictureIndex) => photoDescription(pictureIndex + 1),
);

export { getPictures };
