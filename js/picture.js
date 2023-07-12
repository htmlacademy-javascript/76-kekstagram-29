const container = document.querySelector('.pictures');
const pictureInfoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createPicture = ({url, description, likes, comments, id}) => {
  const pictureElement = pictureInfoTemplate.cloneNode(true);

  pictureElement.querySelector ('.picture__img').src = url;
  pictureElement.querySelector ('.picture__img').alt = description;
  pictureElement.querySelector ('.picture__likes').textContent = likes;
  pictureElement.querySelector ('.picture__comments').textContent = comments.length;
  pictureElement.dataset.pictureElementId = id;

  return pictureElement;
};

const renderPictures = (pictures) => {
 const pictureFragment = document.createDocumentFragment();
 pictures.forEach((picture) => {
  const  pictureElement = createPicture (picture);
  pictureFragment.append(pictureElement);

});
container.append(pictureFragment);
};

export { renderPictures };

