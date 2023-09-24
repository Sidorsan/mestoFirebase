export const settings = {
  formSelector: ".form",
  formSection: ".form__section",
  inputSelector: ".form__input",
  inputSelectorError: ".form__input-error",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

const formElementAddUser = document.querySelector(".form_add_user");
export const nameInput = formElementAddUser.querySelector(
  ".form__input_meaning_name"
);
export const jobInput = formElementAddUser.querySelector(
  ".form__input_meaning_job"
);
export const popupOpenButtonElementAddUser = document.querySelector(
  ".profile__edit-button"
);
export const nameInputValue = document.querySelector(".profile__title");
export const jobInputValue = document.querySelector(".profile__subtitle");
export const avatar = document.querySelector(".profile__avatar");
export const popupOpenButtonElementAvatarEditor = document.querySelector(
  ".profile__editor-photo"
);
export const spinner = document.querySelector('.spinner');


export const popupOpenButtonElementAddCard = document.querySelector(
  ".profile__add-button"
);
export const cardsSection = document.querySelector(".element__container");
