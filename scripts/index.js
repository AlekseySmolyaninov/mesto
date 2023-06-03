const profilePopup = document.querySelector('.popup');
const popupCloseButtonElement = profilePopup.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__button');

const openPopup = function (item) {     // объфвил общую функцию для открытия попап окна
  item.classList.add('popup_opened');
};

const closePopup = function (item) {   // объявил общую функцию для закрытия попап окна
  item.classList.remove('popup_opened');
}


// togglePopupVisibility();
popupOpenButtonElement.addEventListener('click', function(){  // слушатель на кнопку редактирования профайла
  openPopup(profilePopup);
  popupUserName.value = userName.textContent;
popupUserJob.value = userJob.textContent;
});
popupCloseButtonElement.addEventListener('click', function(){  // слушатель на кнопку закрытия профайла
  closePopup(profilePopup);
});

const userName = document.querySelector('.profile__name'); // 'имя с главной страницы
const userJob = document.querySelector('.profile__profession'); // профессия с главной страницы

const popupUserName = document.querySelector('.popup__input_value_name');
const popupUserJob = document.querySelector('.popup__input_value_profession');

const formElement = document.querySelector('.popup__form');

function handleFormSubmit(evt) {
  evt.preventDefault();
  

  userName.textContent = popupUserName.value; // значение элемента с главной страницы заменяю на новый текст
  userJob.textContent = popupUserJob.value;
  closePopup();
}

formElement.addEventListener('submit', handleFormSubmit); // вешаю событие на форму
// вешаю событие на кнопку "сохранить"



const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


/**
 * @type {HTMLTemplateElement}
 */
const template = document.querySelector('.elements');
console.log(template);
const templateContent = template.content;
console.log(templateContent);
const elements = templateContent.querySelector('.elements__element');
console.log(elements);
const popupImage = document.querySelector('.popupImage');
const imagePopup = document.querySelector('.popupImage__image'); //  здесь нахожу элемент с картинкой
  const textPopup = document.querySelector('.popupImage__text');


initialCards.forEach(function (item) {
  const newCard = createCard(item.name, item.link);
  console.log(newCard);
  template.append(newCard);
});




function createCard(text, imageURL) {   
  const newCard = elements.cloneNode(true); // положил текст и ссылку в темплате
  const nameForImage = newCard.querySelector('.elements__text');
  
  nameForImage.textContent = text;
  
  const image = newCard.querySelector('.elements__image');
  image.src = imageURL;
  image.alt = 'Картинка';
  
const deleteButton = newCard.querySelector('.elements__basket');
deleteButton.addEventListener('click', function (event) {
  event.preventDefault();
  newCard.remove();
});

image.addEventListener('click', function(){
  openPopup(popupImage);
  imagePopup.src = image.src;
  imagePopup.alt = 'Картинка';
  textPopup.textContent = text;
})
const iconHeart = newCard.querySelector('.elements__icon');

iconHeart.addEventListener('click', function(event) {
  iconHeart.classList.toggle('element__icon_active');
});


return newCard;
}

const openAdd = document.querySelector('.popupAdd');
console.log(openAdd);
const profileButtonAdd = document.querySelector('.profile__button-add');
console.log(profileButtonAdd);
const closePopupAdd = document.querySelector('.popupAdd__close');




profileButtonAdd.addEventListener('click', function(){   // слушатель на открытие попапа добавления карточки
  openPopup(openAdd);
});
closePopupAdd.addEventListener('click', function(){  // слушатель на закрытие попап добавления карточки
  closePopup(openAdd);
});

const popupAddButton = document.querySelector('.popupAdd__form'); // нахожу кнопку сохранить на форме

popupAddButton.addEventListener('submit', function (event){   // вешаю событие на кнопку
  event.preventDefault();
  const newNameCard = document.querySelector('.popupAdd__input_value_name'); // данные из формы Название
const newLinkCard = document.querySelector('.popupAdd__input_value_link'); // ссылка из формы

const newAddCard = createCard(newNameCard.value, newLinkCard.value);
console.log(newNameCard);
template.prepend(newAddCard); // добавляю на страницу
closePopup(openAdd);
event.target.reset()

})
 



console.log(popupImage);

/*
const openPopupImage = function() {
  popupImage.classList.add('popupImage__open');
}
*/
const closeButtonPopupImage = document.querySelector('.popupImage__close');

/*
const closePopupImage = function() {
  popupImage.classList.remove('popupImage__open');
}
*/
closeButtonPopupImage.addEventListener('click', function(){
  closePopup(popupImage);
});

