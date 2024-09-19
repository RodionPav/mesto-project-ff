const cardTemplate = document.querySelector("#card-template").content;

function createCard(card, deleteCard, likeCard, openImagePopup) {
  const newCard = cardTemplate.querySelector(".places__item").cloneNode(true);
  getCardTemplate(card, newCard);

  const buttonDelete = newCard.querySelector(".card__delete-button");

  buttonDelete.addEventListener("click", () => {
    deleteCard(newCard);
  });

  const buttonLike = newCard.querySelector(".card__like-button");

  buttonLike.addEventListener("click", () => {
    likeCard(buttonLike);
  });

  const imageOpener = newCard.querySelector(".card__image");

  imageOpener.addEventListener("click", () =>
    openImagePopup(card.link, card.name)
  );

  return newCard;
}

function getCardTemplate(card, newCard) {
  const cardImage = newCard.querySelector(".card__image");
  cardImage.src = card.link;
  cardImage.alt = card.name;
  newCard.querySelector(".card__title").textContent = card.name;
}

function removeCard(cardElement) {
  cardElement.remove();
}

function likeCard(cardElement) {
  cardElement.classList.toggle("card__like-button_is-active");
}

export { createCard, removeCard, likeCard };