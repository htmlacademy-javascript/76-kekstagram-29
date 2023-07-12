import { renderPictures } from './picture.js';
import { showBigPicture } from './bigpicture.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const pictureElement = evt.target.closest('[data-picture-element-id]');
    if (!pictureElement) {
      return;
    }

    evt.preventDefault();
    const picture = pictures.find(
      (item) => item.id === +pictureElement.dataset.pictureElementId
    );
    showBigPicture(picture);

  });
  renderPictures(pictures, container);

};

export { renderGallery };
