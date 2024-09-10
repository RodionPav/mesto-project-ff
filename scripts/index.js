// @todo: Темплейт карточки

const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы

const placeList = document.querySelector(".places__list");

// @todo: Функция создания карточки

function createCard(card, deleteCard) {
  const newCard = cardTemplate.querySelector(".places__item").cloneNode(true);

  newCard.querySelector(".card__image").src = card.link;
  newCard.querySelector(".card__image").alt = card.name;
  newCard.querySelector(".card__title").textContent = card.name;

  const buttonDelete = newCard.querySelector(".card__delete-button");

  buttonDelete.addEventListener("click", () => {
    deleteCard(newCard);
  });
  return newCard;
}

// @todo: Функция удаления карточки

function removeCard(cardElement) {
  cardElement.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach(function (elem) {
  const cardElement = createCard(elem, removeCard);
  placeList.append(cardElement);
});
