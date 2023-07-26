import { onDocumentKeydown } from './form.js';

const successMessage = document
  .querySelector('#success')
  .content.querySelector('.success');
const errorMessage = document
  .querySelector('#error')
  .content.querySelector('.error');
const body = document.querySelector('body');

function hideMessage() {

  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown', onDocumentKeydownEsc);
  body.removeEventListener('click', onBodyClick);
}

function onBodyClick(evt) {
  if (
    evt.target.closest('.success__inner') ||
    evt.target.closest('.error__inner')
  ) {
    return;
  }
  hideMessage();
}

function onDocumentKeydownEsc(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideMessage();
  }
}

const showMessage = (messageElement, closeButtonClass) => {
  body.append(messageElement);
  document.addEventListener('keydown', onDocumentKeydownEsc);
  body.addEventListener('click', onBodyClick);
  messageElement
    .querySelector(closeButtonClass)
    .addEventListener('click', hideMessage);
  if (errorMessage) {
    document.addEventListener('keydown', onDocumentKeydownEsc);
  }
  document.removeEventListener('keydown', onDocumentKeydown);
};

const showErrorMessage = () => {
  showMessage(errorMessage, '.error__button');
};
const showSuccessMessage = () => {
  showMessage(successMessage, '.success__button');
};

export { showSuccessMessage, showErrorMessage };
