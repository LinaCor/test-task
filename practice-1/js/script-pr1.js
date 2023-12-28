const FILE_TYPES = ['.img', '.png', '.gif', '.jpg'];
const openFormBtn = document.querySelector('.open-form__btn');
const formContainer = document.querySelector('.popup-mask');
const form = document.querySelector('form[name="form"]');
const uploadImageBtn = form.querySelectorAll('.lead-container__image label');
const loadImage = form.querySelector('.lead-container__image input');
const deleteUploadImage = form.querySelector('.lead-container__image-btn');
const sendFormBtn = form.querySelector('.buttons-container__submit');
const closeFormBtn = form.querySelector('.buttons-container__cancel');

const isKeyEscape = (evt) => evt.key === 'Escape';

//закрытие окна по нажатию клавиши esc
const onEscPress = (evt) => {
  if (isKeyEscape(evt)) {
    evt.preventDefault();
    closeFormModal();
  }
};

//закрытие окна по клику вне него
const onClickOutsideBasket = (evt) => {
  if (evt.target.classList.contains('popup-mask')) {
    closeFormModal();
  }
};

//функция загрузки зображения
const uploadingUserImage = () => {
  const file = loadImage.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((item) => fileName.endsWith(item));
  if (matches) {
    uploadImageBtn[0].style.background = `url("${URL.createObjectURL(file)}") no-repeat center center/cover`;
  }
};

function openFormModal() {
  formContainer.classList.remove('visually-hidden');
  document.addEventListener('keydown', onEscPress);
  document.addEventListener('click', onClickOutsideBasket);
}

function closeFormModal() {
  formContainer.classList.add('visually-hidden');
  document.removeEventListener('keydown', onEscPress);
  document.removeEventListener('click', onClickOutsideBasket);
}

openFormBtn.addEventListener('click', openFormModal);

sendFormBtn.addEventListener('submit', (evt) => {
  const form = evt.currentTarget;
  evt.preventDefault();
  formContainer.classList.add('visually-hidden');
  form.reset();
});

closeFormBtn.addEventListener('click', closeFormModal);

deleteUploadImage.addEventListener('click', () => {
  uploadImageBtn[0].style.background = '';
});

loadImage.addEventListener('change', uploadingUserImage);

