const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];
const DEFAULT_EFFECT = EFFECTS[0];

const image = document.querySelector('.img-upload__preview img');
const effectsField = document.querySelector('.effects');
const effectLevelValue = document.querySelector('.effect-level__value');
const imgUploadEffectLevel = document.querySelector('.img-upload__effect-level');
const sliderLevelElement = document.querySelector('.effect-level__slider');

let selectedEffect = DEFAULT_EFFECT;

const isDefault = () => selectedEffect === DEFAULT_EFFECT;

const hideSlider = () => {
  imgUploadEffectLevel.classList.add('hidden');
};
const showSlider = () => {
  imgUploadEffectLevel.classList.remove('hidden');
};

hideSlider();

const updateSlider = () => {
  sliderLevelElement.noUiSlider.updateOptions({
    range: {
      min: selectedEffect.min,
      max: selectedEffect.max,
    },
    step: selectedEffect.step,
    start: selectedEffect.max,
  });
  if (isDefault()) {
    hideSlider();
  } else {
    showSlider();
  }
};

const changeEffect = function (evt) {
  const target = evt.target.classList.contains('effects__radio');
  if (!target) {
    return;
  }
  selectedEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

const updateSliderValue = () => {
  const sliderValue = sliderLevelElement.noUiSlider.get();
  image.style.filter = isDefault()
    ? DEFAULT_EFFECT.style
    : `${selectedEffect.style}(${sliderValue}${selectedEffect.unit})`;
  effectLevelValue.value = sliderValue;
};

const resetEffects = () => {
  selectedEffect = DEFAULT_EFFECT;
  updateSlider();
};

noUiSlider.create(sliderLevelElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});
hideSlider();

effectsField.addEventListener('change', changeEffect);
sliderLevelElement.noUiSlider.on('update', updateSliderValue);

export { resetEffects };
