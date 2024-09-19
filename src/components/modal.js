function openModal(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeModalEsc);
  popup.addEventListener("click", closeOnBackDropClick);
}

function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeModalEsc);
  popup.removeEventListener("click", closeOnBackDropClick);
}

function closeOnBackDropClick({ currentTarget, target }) {
  const popup = currentTarget;
  const isClickedOnBackDrop = target === popup;
  if (isClickedOnBackDrop) {
    closeModal(popup);
  }
}

function closeModalEsc() {
  if (event.key === "Escape") {
    const opendPopup = document.querySelector(".popup_is-opened");
    closeModal(opendPopup);
  }
}

export { openModal, closeModal };
