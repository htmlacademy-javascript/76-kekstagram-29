const bigPictureElement = document.querySelector('.big-picture');
const commentCountElement = bigPictureElement.querySelector('.social__comment-count');
const commentListElement = bigPictureElement.querySelector('.social__comments');
// const commentsLoaderElement = bigPictureElement.querySelector('.comments__loader');
const bodyElement = document.querySelector('body');
const cancelButtonElement = bigPictureElement.querySelector('.big-picture__cancel');
const commentElement = commentListElement.querySelector('.social__comment');

//создаём комменты и подставляем в каждый из них данных из объекта
const createComment = ({ avatar, name, message }) => {
  const comment = commentElement.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__picture').textContent = message;

  return comment;
};

//генерируем комменты
const renderComments = (comments) => {
  commentListElement.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((item) => {
    const comment = createComment(item);
    fragment.append(comment);

  });
  commentListElement.append(fragment);
};

//функция прятать большое фото
const hideBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);

};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
};

const onCancelButtonClick = () => {
  hideBigPicture();
};

//отрисовываем большое фото со всеми данными, полученными из объекта
const renderPictureDetails = ({ url, likes, description }) => {

  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.big-picture__img img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;

};

//функция показать большое фото
const showBigPicture = (data) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  // commentsLoaderElement.classList.add('hidden');
  commentCountElement.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);
  renderComments(data.comments); //отрисовываем под фоткой комментарии, берём данные из data

};

cancelButtonElement.addEventListener('click', onCancelButtonClick); //обработчик для закрытия окна фото по клику

export { showBigPicture };
