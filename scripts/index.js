const profilePopup = document.querySelector('.popup_profile_open');
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
  closePopup(profilePopup);
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
  image.alt = text;
  
const deleteButton = newCard.querySelector('.elements__basket');
deleteButton.addEventListener('click', function (event) {
  event.preventDefault();
  newCard.remove();
});

image.addEventListener('click', function(){
  openPopup(popupImage);
  imagePopup.src = image.src;
  imagePopup.alt = text;
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
const newNameCard = document.querySelector('.popupAdd__input_value_name'); // данные из формы Название
const newLinkCard = document.querySelector('.popupAdd__input_value_link'); // ссылка из формы


popupAddButton.addEventListener('submit', function (event){   // вешаю событие на кнопку
  event.preventDefault();
  
const newAddCard = createCard(newNameCard.value, newLinkCard.value);

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





const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'form__input-error'
};

function enableValidation(validationConfig) {

  const showInputError = (form, input) => {
input.classList.add(validationConfig.inputErrorClass)
const span = form.querySelector(`#${input.id}-error`)
span.textContent = input.validationMessage
span.classList.add(validationConfig.errorClass)
  }

  const hideInputError = (form, input) => {
    input.classList.remove(validationConfig.inputErrorClass)
const span = form.querySelector(`#${input.id}-error`)
span.textContent = ''
span.classList.remove(validationConfig.errorClass)
  }

const isValid = (form, input) => {
  if (!input.validity.valid) {
    showInputError(form, input)
  } else {
    hideInputError(form, input)
  }
}

const hasInvalidValue = (inputs) => {
return inputs.some(input => !input.validity.valid)
}

const toggleButtonState = (inputs, button) => {
if (hasInvalidValue(inputs)) {
  button.classList.add(validationConfig.inactiveButtonClass)
  button.disabled = true
} else {
  button.classList.remove(validationConfig.inactiveButtonClass)
  button.disabled = false
}
}

const setEventListeners = (form) =>{
  const inputs = Array.from(form.querySelectorAll(validationConfig.inputSelector))
const button = form.querySelector(validationConfig.submitButtonSelector)

  
  toggleButtonState(inputs, button)
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      isValid(form, input)
      toggleButtonState(inputs, button)
    })
  })
}

  const forms = Array.from(document.querySelectorAll(validationConfig.formSelector));
  console.log(forms);

  forms.forEach(form => {
    setEventListeners(form)
  })
}

enableValidation(validationConfig);


// const enableValidation = ({ formSelector, ...rest}) => {
//   const forms = Array.from(document.querySelectorAll(formSelector));
//   console.log(forms);
//   console.log(rest);
// forms.forEach(form => {
//   form.addEventListener('submit', () => {    //отловили событие формы
//     evt.preventDefault();                           // сказали форме ничего не делать
//   })
//   setEventListener(form, rest)
// })

  

  
// }
// const setEventListener = (formProfile, { inputSelector, submitButtonSelector, ...rest }) => {    
//   const formInputs = Array.from(formProfile.querySelectorAll(inputSelector));
//   const formButton = formProfile.querySelector(submitButtonSelector)
//   console.log(rest)
//   enableButton(formButton, rest)
//   formInputs.forEach(input => {
//     input.addEventListener('input', () => { // на каждый инпут накладываем обработчик событий
//       checkInputValidity(input) 
//       if (hasInvalidInput(formInputs)) {
//         disableButton(formButton, rest);
//       } else {
//         enableButton(formButton, rest)
//       } 
//     })
//   })
// }

// const checkInputValidity = (input) => {
//   const currentInputContainer = document.querySelector(`#${input.id}-error`);
// if (input.checkValidity()){     //true or false
//   currentInputContainer.textContent = "";
// }  else {
//   currentInputContainer.textContent = input.validationMessage;
// }
// }

// const hasInvalidInput = (formInputs) => {
// return formInputs.some(item => !item.validity.valid)
// }


// const enableButton = (button) => {     //сделать кнопку активной
//   button.classList.remove('popup__button_invalid');
//   button.classList.add('popup__button')
//   button.setAttribute('disabled', true)
// }

// const disableButton = (button) => {    // сделать неактивной
//   button.classList.add('popup__button_invalid');
//   button.classList.remove('popup__button')
//   button.removeAttribute('disabled')
// }

// enableValidation(validationConfig);

