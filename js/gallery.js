import { renderPictures } from './picture.js';
import { showBigPicture } from './bigpicture.js';

const container = document.querySelector('.pictures');

let pictures = [];

function onContainerClick(evt) {
  const pictureElement = evt.target.closest('[data-picture-element-id]');
  if (!pictureElement) {
    return;
  }

  evt.preventDefault();
  const picture = pictures.find(
    (item) => item.id === +pictureElement.dataset.pictureElementId
  );
  showBigPicture(picture);

}


const renderGallery = (currentPictures) => {
  pictures = currentPictures;
  renderPictures(pictures, container);
  container.addEventListener('click', onContainerClick);

};

export { renderGallery };
