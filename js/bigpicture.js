const bigPictureElement = document.querySelector('.big-picture');
const commentCountElement = bigPictureElement.querySelector('.comments-count'); //общее количество комментариев
const commentShownCountElement = bigPictureElement.querySelector('.comments-count-show'); //подгруженные комментарии
const commentListElement = bigPictureElement.querySelector('.social__comments');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');
const cancelButtonElement = bigPictureElement.querySelector('.big-picture__cancel');
const commentElement = commentListElement.querySelector('.social__comment');

const COMMENTS_LOAD = 5;
let commentsShown = 0;
let comments = [];

//создаём комменты и подставляем в каждый из них данные из объекта
const createComment = ({ avatar, name, message }) => {
  const comment = commentElement.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__picture').textContent = message;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const commentCounterCompare = () => {
  commentShownCountElement.innerHTML = `${commentsShow} из <span class="comments-count">${comments.length}</span> комментариев`;
}

//генерируем комменты
const renderComments = () => {
  commentsShown += COMMENTS_LOAD;

  if (commentsShown >= comments.length) {
    commentsLoaderElement.classList.add ('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoaderElement.classList.remove ('hidden');
  }
  const fragment = document.createDocumentFragment();
  for (let i=0; i < commentsShown; i++) {
    const comment = createComment (comments[i]);
    fragment.append(comment);
  }

  commentListElement.innerHTML = ' ';
  commentListElement.append(fragment);
  commentShownCountElement.textContent = commentsShown;
  commentCountElement.textContent = comments.length;

  commentCounterCompare();

};

//функция прятать большое фото
const hideBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsShown = 0;

};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
};

const onCommentsLoaderClick = () => renderComments ();


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
  commentsLoaderElement.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);
  comments = data.comments;
  if (comments.length > 0) {
    renderComments();//отрисовываем под фоткой комментарии, берём данные из data
  }

};

cancelButtonElement.addEventListener('click', onCancelButtonClick); //обработчик для закрытия окна фото по клику
commentsLoaderElement.addEventListener('click', onCommentsLoaderClick);

export { showBigPicture };
