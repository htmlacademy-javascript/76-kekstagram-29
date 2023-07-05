import { getPictures } from './data.js';

const container = document.querySelector('.pictures');
const pictureInfoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const miniPictures = getPictures();

const pictureInfoItem = document.createDocumentFragment();

miniPictures.forEach(({url, description, likes, comments}) => {
  const pictureElement = pictureInfoTemplate.cloneNode(true);
  pictureElement.querySelector ('.picture__img').src = url;
  pictureElement.querySelector ('.picture__img').alt = description;
  pictureElement.querySelector ('.picture__likes').textContent = likes;
  pictureElement.querySelector ('.picture__comments').textContent = comments.length;
  pictureInfoItem.appendChild(pictureElement);

});

container.append(pictureInfoItem);

