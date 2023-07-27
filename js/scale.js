const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const uploadElement = document.querySelector('.img-upload');
const smallButtonElement = uploadElement.querySelector('.scale__control--smaller');
const bigButtonElement = uploadElement.querySelector('.scale__control--bigger');
const scaleInputElement = uploadElement.querySelector('.scale__control--value');
const imageElement = uploadElement.querySelector('.img-upload__preview img');

const scaleImage = (value) => {
  imageElement.style.transform = `scale(${value / 100})`;
  scaleInputElement.value = `${value}%`;

};

const onSmallButtonClick = () => {

  const currentValue = parseInt(scaleInputElement.value, 10);
  const newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    scaleImage(MIN_SCALE);
  } else {
    scaleImage(newValue);
  }

};

const onBigButtonClick = () => {

  const currentValue = parseInt(scaleInputElement.value, 10);
  const newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    scaleImage(MAX_SCALE);
  } else {
    scaleImage(newValue);
  }

};

const resetScale = () => scaleImage(DEFAULT_SCALE);

smallButtonElement.addEventListener('click', onSmallButtonClick);
bigButtonElement.addEventListener('click', onBigButtonClick);

export { resetScale };
