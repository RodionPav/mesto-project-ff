import { deleteCard, deleteLike, putLike } from "./api";

const cardTemplate = document.querySelector("#card-template").content;

function createCard(card, removeCard, likeCard, openImagePopup) {
  const newCard = cardTemplate.querySelector(".places__item").cloneNode(true);
  getCardTemplate(card, newCard);

  const buttonDelete = newCard.querySelector(".card__delete-button");
  buttonDelete.addEventListener("click", () => {
    removeCard(card, newCard);
  });

  if (card.owner._id !== "6c3b9b1e3b2e671f8f6aaa9b") {
    buttonDelete.classList.add("card__delete-button-hidden");
  }

  const buttonLike = newCard.querySelector(".card__like-button");

  buttonLike.addEventListener("click", () => {
    likeCard(buttonLike, card, newCard);
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

function likeCard(cardElement, card, newCard) {
  if (cardElement.classList.contains("card__like-button_is-active")) {
    cardElement.classList.toggle("card__like-button_is-active");
    disLikeCard(newCard, card);
  } else {
    cardElement.classList.toggle("card__like-button_is-active");
    putLike(card)
      .then((result) => {
        likeCount(newCard, result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function likeCount(newCard, card) {
  newCard.querySelector(".card__like-counter").textContent = card.likes.length;
}

function disLikeCard(newCard, card) {
  deleteLike(card)
    .then((result) => {
      likeCount(newCard, result);
    })
    .catch((err) => {
      console.log(err);
    });
}

export { createCard, removeCard, likeCard };
