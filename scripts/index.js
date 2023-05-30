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


initialCards.forEach(function (item) {
  const newCard = createCard(item);
  console.log(newCard);
  template.append(newCard);
});

function createCard(item) {   // положил текст и ссылку в темплате
  const newCard = elements.cloneNode(true);
  const text = newCard.querySelector('.elements__text');
  text.textContent = item.name;
  const image = newCard.querySelector('.elements__image');
  image.src = item.link;
  
  
const deleteButton = newCard.querySelector('.elements__basket');
deleteButton.addEventListener('click', function (event) {
  newCard.remove();
});

image.addEventListener('click', function(){
  openPopupImage();
  const imagePopup = document.querySelector('.popupImage__image'); //  здесь нахожу элемент с картинкой
  const textPopup = document.querySelector('.popupImage__text');
  imagePopup.src = image.src;
  textPopup.textContent = text.textContent;
})

return newCard;
}

const openAdd = document.querySelector('.popupAdd');
console.log(openAdd);
const profileButtonAdd = document.querySelector('.profile__button-add');
console.log(profileButtonAdd);
const closePopupAdd = document.querySelector('.popupAdd__close');


const openPopupAdd = function () {
  openAdd.classList.add('popupAdd__open');
};

const closeAdd = function () {
  openAdd.classList.remove('popupAdd__open');
}

profileButtonAdd.addEventListener('click', openPopupAdd);
closePopupAdd.addEventListener('click', closeAdd);


const popupAddButton = document.querySelector('.popupAdd__form'); // нахожу кнопку сохранить на форме

popupAddButton.addEventListener('submit', function (event){   // вешаю событие на кнопку
  event.preventDefault();
  const newNameCard = document.querySelector('.popupAdd__input_value_name'); // данные из формы Название
const newLinkCard = document.querySelector('.popupAdd__input_value_link'); // ссылка из формы
  const item = template.content.cloneNode(true); // клонирую содержимое template
item.querySelector('.elements__text').textContent = newNameCard.value; // помещаю текст
item.querySelector('.elements__image').src = newLinkCard.value; // помещаю ссылку
template.prepend(item); // добавляю на страницу
closeAdd();
newNameCard.value = "";
newLinkCard.value = "";
 // закрываю окно

})
 
const iconHeart = document.querySelectorAll('.elements__icon');
console.log(iconHeart);


 iconHeart.forEach(function(item) {
    item.addEventListener('click', function() {
      item.classList.toggle('element__icon_active');
    });
});

const popupImage = document.querySelector('.popupImage');
console.log(popupImage);
const openPopupImage = function() {
  popupImage.classList.add('popupImage__open');
}
const closeButtonPopupImage = document.querySelector('.popupImage__close');
const closePopupImage = function() {
  popupImage.classList.remove('popupImage__open');
}

closeButtonPopupImage.addEventListener('click', closePopupImage);







/*
const imageInfo = initialCards.map(function (item) {
  return { 
    name: item.name, 
    link: item.link
  }
});

const list = document.querySelector('.elements'); // элемент куда надо вставить текст
for (let i = 0; i<imageInfo.length; i++) {
  const a = imageInfo[i].name;
  const b = imageInfo[i].link;


console.log(list);
const template = document.querySelector('.elements'); // нахожу template
const item = template.content.cloneNode(true); // клонирую содержимое template
item.querySelector('.elements__text').textContent = imageInfo[i].name; // помещаю текст
item.querySelector('.elements__image').src = imageInfo[i].link;
list.append(item); // добавляю на страницу
}



const openAdd = document.querySelector('.popupAdd');
console.log(openAdd);
const profileButtonAdd = document.querySelector('.profile__button-add');
console.log(profileButtonAdd);
const closePopupAdd = document.querySelector('.popupAdd__close');


const openPopupAdd = function () {
  openAdd.classList.add('popupAdd__open');
};

const closeAdd = function () {
  openAdd.classList.remove('popupAdd__open');
}

profileButtonAdd.addEventListener('click', openPopupAdd);
closePopupAdd.addEventListener('click', closeAdd);

const newNameCard = document.querySelector('.popupAdd__input_value_name'); // данные из формы Название
console.log(newNameCard);
const newLinkCard = document.querySelector('.popupAdd__input_value_link'); // ссылка из формы
console.log(newLinkCard);

const basketButton = document.querySelector('.elements__basket');

console.log(list);
  
function addNewCard (evt) {
  evt.preventDefault();
const template = document.querySelector('.elements'); // нахожу template
const item = template.content.cloneNode(true); // клонирую содержимое template
item.querySelector('.elements__text').textContent = newNameCard.value; // помещаю текст
item.querySelector('.elements__image').src = newLinkCard.value;
list.prepend(item); // добавляю на страницу
closeAdd();

const deleteButton = document.querySelectorAll('.elements__basket'); // нахожу кнопку удаления
const list1 = document.querySelector('.elements__element');
deleteButton.forEach(function(item) {
  item.addEventListener('click', function() {
    list1.remove(item);
  })
})


}


let formElementAdd = document.querySelector('.popupAdd__form');
formElementAdd.addEventListener('submit', addNewCard);


const iconHeart = document.querySelectorAll('.elements__icon');
console.log(iconHeart);


 iconHeart.forEach(function(item) {
    item.addEventListener('click', function() {
      item.classList.toggle('element__icon_active');
    });
});
 


*/


