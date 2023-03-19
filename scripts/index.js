console.log('Привет мир');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__button');

const openPopup = function () {
  popupElement.classList.add('popup_is-opened');
};

const closePopup = function () {
  popupElement.classList.remove('popup_is-opened');
};

// togglePopupVisibility();
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

const userName = document.querySelector('.profile__name'); // 'имя с главной страницы
let userJob = document.querySelector('.profile__profession'); // профессия с главной страницы

let popupUserName = document.querySelector('.popup__name');
let popupUserJob = document.querySelector('.popup__profession');

popupUserName.value = userName.textContent;
popupUserJob.value = userJob.textContent;

const submit = document.querySelector('popup__button'); // нахожу кнопку "сохранить"

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__name'); // имя с попап окна
let jobInput = formElement.querySelector('.popup__profession'); // профессия с попап окна

function handleFormSubmit(evt) {
  evt.preventDefault();
  const userNameNew = nameInput.value; // значение элемента из попап окна кладу в переменную
  const userJobNew = jobInput.value;

  userName.textContent = userNameNew; // значение элемента с главной страницы заменяю на новый текст
  userJob.textContent = userJobNew;
}

formElement.addEventListener('submit', handleFormSubmit); // вешаю событие на форму
// вешаю событие на кнопку "сохранить"
