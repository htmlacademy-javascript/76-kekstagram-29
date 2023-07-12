import './picture.js';


const pictureModalElement = document.querySelector ('.overlay');
const pictureModalOpenElement = document.querySelector('.picture');
const pictureModalCloseElement = pictureModalElement.querySelector('.setup-close');

pictureModalOpenElement.addEventListener('click', () => {
  pictureModalElement.classList.remove('hidden');
});

pictureModalCloseElement.addEventListener('click', () => {
  pictureModalElement.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    pictureModalElement.classList.add('hidden');
  }
});
