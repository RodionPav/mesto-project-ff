import "../pages/index.css";
import { createCard, removeCard, toggleLikeCard } from "../components/card";
import { openModal, closeModal } from "../components/modal";
import {
  enableValidation,
  clearValidation,
  disableButton,
} from "../components/validation";
import {
  getInitialData,
  patchAvatar,
  patchEditProfile,
  postNewCard,
} from "../components/api";

let userId;

function toggleButtonTextContent(popup) {
  const popupButton = popup.querySelector(".popup__button");
  if (popupButton.textContent.includes("Сохранить")) {
    popupButton.textContent = "Сохранение...";
  } else {
    popupButton.textContent = "Сохранить";
  }
}

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileImage = document.querySelector(".profile__image-img");

const editProfile = (result) => {
  userId = result._id;
  profileTitle.textContent = result.name;
  profileDescription.textContent = result.about;
  profileImage.src = result.avatar;
};

const initCards = (result) => {
  result.forEach((elem) => appendCard(elem));
};

getInitialData(editProfile, initCards, userId);

const placeList = document.querySelector(".places__list");

function appendCard(elem) {
  const cardElement = createCard(
    elem,
    removeCard,
    toggleLikeCard,
    openImagePopup,
    userId
  );
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
avatarOpener.addEventListener("click", () => editProfileImage(avatarPopup));
const popupInputUrl = document.querySelector(".popup__input_type_avatar_url");

function editProfileImage(avatarPopup) {
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
  toggleButtonTextContent(event.target);
  const avatar = avatarLink.value;

  patchAvatar(avatar)
    .then((result) => {
      profileImage.src = result.avatar;
      closeModal(avatarPopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      toggleButtonTextContent(event.target);
    });
}

avatarPopup.addEventListener("submit", submitProfileImageForm);

function submitEditProfileForm(event) {
  event.preventDefault();
  toggleButtonTextContent(event.target);

  const name = nameInput.value;
  const about = jobInput.value;

  patchEditProfile(name, about)
    .then((res) => {
      profileTitle.textContent = res.name;
      profileDescription.textContent = res.about;
      closeModal(editPopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      toggleButtonTextContent(event.target);
    });
}

editPopup.addEventListener("submit", submitEditProfileForm);

function addNewCard(event) {
  event.preventDefault();
  toggleButtonTextContent(event.target);

  const name = placeName.value;
  const link = linkInput.value;

  postNewCard(name, link)
    .then((res) => {
      placeList.prepend(
        createCard(
          { name, link, likes: res.likes, owner: res.owner, _id: res._id },
          removeCard,
          toggleLikeCard,
          openImagePopup,
          userId
        )
      );
      closeModal(newCardPopup);
      clearValidation(event.target, validationConfig);
      disableButton(event.target);
      event.target.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      toggleButtonTextContent(event.target);
    });
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
