
/* Структура каждого объекта должна быть следующей:

- id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.

- url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

- description, строка — описание фотографии. Описание придумайте самостоятельно.

- likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

- comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии.
Количество комментариев к каждой фотографии — случайное число от 0 до 30.
Все комментарии генерируются случайным образом.
Пример описания объекта с комментарием:
{
  id: 135,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артём',
}
- У каждого комментария есть идентификатор — id — любое число. Идентификаторы не должны повторяться.

- Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg.
Аватарки подготовлены в директории img.

- Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:

- Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами.
Подставляйте случайное имя в поле name.

*/
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

//функция поиска случайного индекса элемента
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (items) =>
  items[getRandomInteger(0, items.length - 1)];

const createIdGenerator = () => {
  let lasGeneratedId = 0;

  return () => {
    lasGeneratedId += 1;
    return lasGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

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

let result1 = createComment();
console.log(result1);

let result2 = getPictures();
console.log(result2);
