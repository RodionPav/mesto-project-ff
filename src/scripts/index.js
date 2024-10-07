import "../pages/index.css";
import { createCard, removeCard, likeCard } from "../components/card";
import { openModal, closeModal } from "../components/modal";
import { enableValidation, clearValidation } from "../components/validation";
import {
  getInitialData,
  patchAvatar,
  patchEditProfile,
  postNewCard,
} from "../components/api";

const popupButton = document.querySelector(".popup__button");
let isLoading = false;
isLoading
  ? (popupButton.textContent = "Сохранение...")
  : (popupButton.textContent = "Сохранить");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileImage = document.querySelector(".profile__image-img");

const profileEdit = (result) => {
  profileTitle.textContent = result.name;
  profileDescription.textContent = result.about;
  profileImage.src = result.avatar;
};

const initialCards = (result) => {
  result.forEach((elem) => appendCard(elem));
};

getInitialData(profileEdit, initialCards);

const placeList = document.querySelector(".places__list");

function appendCard(elem) {
  const cardElement = createCard(elem, removeCard, likeCard, openImagePopup);
  placeList.append(cardElement);
}

const popups = document.querySelectorAll(".popup");

popups.forEach((popup) => {
  popup.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup__close")) {
      closeModal(popup);
    }
  });
});

const avatarOpener = document.querySelector(".profile__image-button");
const avatarPopup = document.querySelector(".popup_type_avatar");
avatarOpener.addEventListener("click", () => profileImageEdit(avatarPopup));
const popupInputUrl = document.querySelector(".popup__input_type_avatar_url");

function profileImageEdit(avatarPopup) {
  openModal(avatarPopup);
  addValuesInAvatarPopup();
}

function addValuesInAvatarPopup() {
  popupInputUrl.value = profileImage.src;
}

const editOpener = document.querySelector(".profile__edit-button");
const editPopup = document.querySelector(".popup_type_edit");
editOpener.addEventListener("click", () => openEditPopup(editPopup));

function openEditPopup(editPopup) {
  addValuesInEditPopup();
  clearValidation(editPopup, validationConfig);
  openModal(editPopup);
}

const popupInputName = document.querySelector(".popup__input_type_name");
const popupInputDescription = document.querySelector(
  ".popup__input_type_description"
);

function addValuesInEditPopup() {
  popupInputName.value = profileTitle.textContent;
  popupInputDescription.value = profileDescription.textContent;
}

const newCardOpener = document.querySelector(".profile__add-button");
const newCardPopup = document.querySelector(".popup_type_new-card");
newCardOpener.addEventListener("click", () => openNewCardPopup(newCardPopup));

const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");
const imagePopup = document.querySelector(".popup_type_image");

function openNewCardPopup(newCardPopup) {
  disableButton(newCardPopup);
  openModal(newCardPopup);
}

function openImagePopup(link, name) {
  openModal(imagePopup);
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
}

let handleSubmitConfirmPopup = ''
const deleteCardPopup = document.querySelector('.popup_type_card-delete');
const deleteCardOpener = document.querySelector('.card__delete-button')

function openPopupDelete(){

}

function disableButton(newCardPopup) {
  const popupButton = newCardPopup.querySelector(".popup__button");
  popupButton.disabled = true;
  popupButton.classList.add("popup__button_disabled");
}

const formEditProfile = document.forms.editProfile;
const nameInput = formEditProfile.elements.name;
const jobInput = formEditProfile.elements.description;

const newPlaceForm = document.forms.newPlace;
const placeName = newPlaceForm.elements.placeName;
const linkInput = newPlaceForm.elements.link;

const avatarForm = document.forms.avatar;
const avatarLink = avatarForm.elements.avatar;

// Обработчик «отправки» формы
function submitProfileImageForm(event) {
  event.preventDefault();
  isLoading = true;
  const avatar = avatarLink.value;

  patchAvatar(avatar)
    .then((result) => {
      profileImage.src = result.avatar;
      isLoading = false;
    })
    .catch((err) => {
      console.log(err);
    });
  closeModal(event.currentTarget);
  event.target.reset();
}

avatarPopup.addEventListener("submit", submitProfileImageForm);

function submitEditProfileForm(event) {
  event.preventDefault();
  isLoading = true;

  const name = nameInput.value;
  const about = jobInput.value;

  patchEditProfile(name, about)
    .then((result) => {
      profileTitle.textContent = result.name;
      profileDescription.textContent = result.about;
      isLoading = false;
    })
    .catch((err) => {
      console.log(err);
    });

  closeModal(event.currentTarget);
}

editPopup.addEventListener("submit", submitEditProfileForm);

function addNewCard(event) {
  event.preventDefault();
  isLoading = true;

  const name = placeName.value;
  const link = linkInput.value;
  const likes = [];
  const owner = {
    _id: "6c3b9b1e3b2e671f8f6aaa9b",
  };

  postNewCard(name, link)
    .then(() => {
      placeList.prepend(
        createCard(
          { name, link, likes, owner },
          removeCard,
          likeCard,
          openImagePopup
        )
      );
      isLoading = false;
    })
    .catch((err) => {
      console.log(err);
    });
  clearValidation(event.target, validationConfig);
  disableButton(event.target);
  closeModal(event.currentTarget);
  event.target.reset();
}

newCardPopup.addEventListener("submit", addNewCard);

const allPopups = document.querySelectorAll(".popup");
allPopups.forEach((elem) => {
  elem.classList.add("popup_is-animated");
});

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

enableValidation(validationConfig);
