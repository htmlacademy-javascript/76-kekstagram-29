// //функция поиска случайного индекса элемента
// const getRandomInteger = (a, b) => {
//   const lower = Math.ceil(Math.min(a, b));
//   const upper = Math.floor(Math.max(a, b));
//   const result = Math.random() * (upper - lower + 1) + lower;
//   return Math.floor(result);
// };

// //собираем новый массим случайных элементов
// const getRandomArrayElement = (items) =>
//   items[getRandomInteger(0, items.length - 1)];

// //генерируем ID с 0 до последнего
// const createIdGenerator = () => {
//   let lasGeneratedId = 0;

//   return () => {
//     lasGeneratedId += 1;
//     return lasGeneratedId;
//   };
// };

// const generateCommentId = createIdGenerator();
// const isEscapeKey = (evt) => evt.key === 'Escape';

// export { getRandomInteger };
// export { getRandomArrayElement };
// export { generateCommentId };
// export { isEscapeKey };

const isEscapeKey = (evt) => evt.key === 'Escape';
const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '10';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'coral';

  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { isEscapeKey, showAlert };
