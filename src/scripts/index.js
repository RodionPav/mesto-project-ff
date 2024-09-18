import "../pages/index.css";
import { initialCards } from "./cards";
import { createCard, removeCard, likeCard } from "../components/card";
import { openModal } from "../components/modal";

const placeList = document.querySelector(".places__list");

function appendCard(elem) {
  const cardElement = createCard(elem, removeCard, likeCard, openImagePopup);
  placeList.append(cardElement);
}

initialCards.forEach(function (elem) {
  appendCard(elem);
});

const editOpener = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector(".popup_type_edit");
editOpener.addEventListener("click", () => openModal(editPopup));

const newCardOpener = document.querySelector(".profile__add-button");
const newCardPopup = document.querySelector(".popup_type_new-card");
newCardOpener.addEventListener("click", () => openModal(newCardPopup));

function openImagePopup(imagePopup, link, name) {
  openModal(imagePopup);

  document.querySelector(".popup__image").src = link;
  document.querySelector(".popup__caption").textContent = name;
}

const editForm = document.forms.editProfile;
const nameInput = editForm.elements.name;
const jobInput = editForm.elements.description;

const newPlaceForm = document.forms.newPlace;
const placeName = newPlaceForm.elements.placeName;
const linkInput = newPlaceForm.elements.link;

// Обработчик «отправки» формы
function handleFormSubmit(event) {
  event.preventDefault();

  const name = nameInput.value;
  const job = jobInput.value;

  document.querySelector(".profile__title").textContent = name;
  document.querySelector(".profile__description").textContent = job;

  event.currentTarget.classList.remove("popup_is-opened");
}

editPopup.addEventListener("submit", handleFormSubmit);

function addNewCard(event) {
  event.preventDefault();

  const name = placeName.value;
  const link = linkInput.value;

  initialCards.unshift({ name, link });

  placeList.replaceChildren();

  initialCards.forEach(function (elem) {
    appendCard(elem);
  });

  event.currentTarget.classList.remove("popup_is-opened");
  event.target.reset();
}

newCardPopup.addEventListener("submit", addNewCard);

const allPopups = document.querySelectorAll(".popup");
allPopups.forEach((elem) => {
  elem.classList.add("popup_is-animated");
});
