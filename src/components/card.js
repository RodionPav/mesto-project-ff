import { deleteCard, deleteLike, putLike } from "./api";

const cardTemplate = document.querySelector("#card-template").content;

function createCard(card, removeCard, toggleLikeCard, openImagePopup, userId) {
  const newCard = cardTemplate.querySelector(".places__item").cloneNode(true);
  getCardTemplate(card, newCard);

  const buttonDelete = newCard.querySelector(".card__delete-button");
  buttonDelete.addEventListener("click", () => {
    removeCard(card, newCard);
  });
  if (card.owner._id !== userId) {
    buttonDelete.classList.add("card__delete-button-hidden");
  }

  const buttonLike = newCard.querySelector(".card__like-button");
  card.likes.forEach((element) => {
    if (element._id == userId) {
      buttonLike.classList.toggle("card__like-button_is-active");
    }
  });
  buttonLike.addEventListener("click", () => {
    toggleLikeCard(buttonLike, card, newCard);
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
  newCard.querySelector(".card__like-counter").textContent = card.likes.length;
}

function removeCard(card, cardElement) {
  deleteCard(card._id)
    .then(() => {
      cardElement.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}

function toggleLikeCard(cardElement, card, newCard) {
  if (cardElement.classList.contains("card__like-button_is-active")) {
    deleteLike(card)
      .then((result) => {
        newCard.querySelector(".card__like-counter").textContent =
          result.likes.length;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        cardElement.classList.toggle("card__like-button_is-active");
      });
  } else {
    putLike(card)
      .then((result) => {
        newCard.querySelector(".card__like-counter").textContent =
          result.likes.length;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        cardElement.classList.toggle("card__like-button_is-active");
      });
  }
}

export { createCard, removeCard, toggleLikeCard };
