function openModal(popup) {
  popup.classList.add("popup_is-opened");

  popup.addEventListener("click", () => closeModal(popup));
  document.addEventListener("keydown", () => closeModalEsc(popup));
  popup.addEventListener("click", closeOnBackDropClick);

  addValuesInForm();
}

function closeModal(popup) {
  if (event.target.classList.value == "popup__close") {
    popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", closeModalEsc);
    formReset();
  }
}

function closeOnBackDropClick({ currentTarget, target }) {
  const popup = currentTarget;
  const isClickedOnBackDrop = target === popup;
  if (isClickedOnBackDrop) {
    popup.classList.remove("popup_is-opened");
    formReset();
  }
}

function closeModalEsc(popup) {
  if (event.key === "Escape") {
    popup.classList.remove("popup_is-opened");
    formReset();
  }
}

function formReset() {
  const form = document.querySelector(".popup__form");
  form.reset();
}

function addValuesInForm() {
  document.querySelector(".popup__input_type_name").value =
    document.querySelector(".profile__title").textContent;
  document.querySelector(".popup__input_type_description").value =
    document.querySelector(".profile__description").textContent;
}

export { openModal };
