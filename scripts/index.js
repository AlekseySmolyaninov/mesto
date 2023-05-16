const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__button');

const openPopup = function () {
  popupElement.classList.add('popup_opened');
  popupUserName.value = userName.textContent;
popupUserJob.value = userJob.textContent;
};

const closePopup = function () {
  popupElement.classList.remove('popup_opened');
};

// togglePopupVisibility();
popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

const userName = document.querySelector('.profile__name'); // 'имя с главной страницы
let userJob = document.querySelector('.profile__profession'); // профессия с главной страницы

let popupUserName = document.querySelector('.popup__input_value_name');
let popupUserJob = document.querySelector('.popup__input_value_profession');





let formElement = document.querySelector('.popup__form');

function handleFormSubmit(evt) {
  evt.preventDefault();
  

  userName.textContent = popupUserName.value; // значение элемента с главной страницы заменяю на новый текст
  userJob.textContent = popupUserJob.value;
  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit); // вешаю событие на форму
// вешаю событие на кнопку "сохранить"
