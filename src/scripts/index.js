import "../pages/index.css";
import { initialCards } from "./cards";
import { createCard, removeCard, likeCard } from "../components/card";
import { openModal, closeModal } from "../components/modal";

const placeList = document.querySelector(".places__list");

function appendCard(elem) {
  const cardElement = createCard(elem, removeCard, likeCard, openImagePopup);
  placeList.append(cardElement);
}

initialCards.forEach(function (elem) {
  appendCard(elem);
});

const popups = document.querySelectorAll(".popup");

popups.forEach((popup) => {
  popup.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup__close")) {
      closeModal(popup);
    }
  });
});

const editOpener = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector(".popup_type_edit");
editOpener.addEventListener("click", () => openEditPopup(editPopup));

function openEditPopup(editPopup) {
  addValuesInForm();
  openModal(editPopup);
}

const popupInputName = document.querySelector(".popup__input_type_name");
const popupInputDescription = document.querySelector(
  ".popup__input_type_description"
);
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

function addValuesInForm() {
  popupInputName.value = profileTitle.textContent;
  popupInputDescription.value = profileDescription.textContent;
}

const newCardOpener = document.querySelector(".profile__add-button");
const newCardPopup = document.querySelector(".popup_type_new-card");
newCardOpener.addEventListener("click", () => openModal(newCardPopup));

const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");
const imagePopup = document.querySelector(".popup_type_image");

function openImagePopup(link, name) {
  openModal(imagePopup);
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
}

const formEditProfile = document.forms.editProfile;
const nameInput = formEditProfile.elements.name;
const jobInput = formEditProfile.elements.description;

const newPlaceForm = document.forms.newPlace;
const placeName = newPlaceForm.elements.placeName;
const linkInput = newPlaceForm.elements.link;

// Обработчик «отправки» формы
function submitEditProfileForm(event) {
  event.preventDefault();

  const name = nameInput.value;
  const job = jobInput.value;

  profileTitle.textContent = name;
  profileDescription.textContent = job;
  closeModal(event.currentTarget);
}

editPopup.addEventListener("submit", submitEditProfileForm);

function addNewCard(event) {
  event.preventDefault();

  const name = placeName.value;
  const link = linkInput.value;

  placeList.prepend(
    createCard({ name, link }, removeCard, likeCard, openImagePopup)
  );

  closeModal(event.currentTarget);
  event.target.reset();
}

newCardPopup.addEventListener("submit", addNewCard);

const allPopups = document.querySelectorAll(".popup");
allPopups.forEach((elem) => {
  elem.classList.add("popup_is-animated");
});
