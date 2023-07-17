//функция поиска случайного индекса элемента
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//собираем новый массим случайных элементов
const getRandomArrayElement = (items) =>
  items[getRandomInteger(0, items.length - 1)];

//генерируем ID с 0 до последнего
const createIdGenerator = () => {
  let lasGeneratedId = 0;

  return () => {
    lasGeneratedId += 1;
    return lasGeneratedId;
  };
};

const generateCommentId = createIdGenerator();
const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomInteger};
export {getRandomArrayElement};
export {generateCommentId};
export {isEscapeKey};
