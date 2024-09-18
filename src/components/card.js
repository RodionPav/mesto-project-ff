function createCard(card, deleteCard, likeCard, openImagePopup) {
  const cardTemplate = document.querySelector("#card-template").content;
  const newCard = cardTemplate.querySelector(".places__item").cloneNode(true);
  
  newCard.querySelector(".card__image").src = card.link;
  newCard.querySelector(".card__image").alt = card.name;
  newCard.querySelector(".card__title").textContent = card.name;

  const buttonDelete = newCard.querySelector(".card__delete-button");

  buttonDelete.addEventListener("click", () => {
    deleteCard(newCard);
  });

  const buttonLike = newCard.querySelector(".card__like-button");

  buttonLike.addEventListener("click", () => {
    likeCard(buttonLike);
  });

  const imageOpener = newCard.querySelector(".card__image");
  const imagePopup = document.querySelector(".popup_type_image");

  imageOpener.addEventListener("click", () =>
    openImagePopup(imagePopup, card.link, card.name)
  );

  return newCard;
}

function removeCard(cardElement) {
  cardElement.remove();
}

function likeCard(cardElement) {
  cardElement.classList.toggle("card__like-button_is-active");
}

export { createCard, removeCard, likeCard };